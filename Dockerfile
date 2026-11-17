# syntax=docker/dockerfile:1

ARG NODE_VERSION=20

# 1. Dependencies Stage (cached until package files change)
FROM node:${NODE_VERSION}-alpine AS deps

RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN --mount=type=cache,target=/root/.npm \
    npm ci --no-audit --no-fund

# 2. Build Stage
FROM node:${NODE_VERSION}-alpine AS builder

WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED=1

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# 3. Production Stage
FROM node:${NODE_VERSION}-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production \
    NEXT_TELEMETRY_DISABLED=1 \
    PORT=3000 \
    HOSTNAME="0.0.0.0"

# Create a non-root user
RUN addgroup -S -g 1001 nextjs && adduser -S -u 1001 -G nextjs nextjs

# Copy standalone production output
COPY --from=builder --chown=nextjs:nextjs /app/public ./public
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static

# Run as non-root user
USER nextjs

EXPOSE 3000

# Container health probe (busybox wget ships with alpine)
HEALTHCHECK --interval=30s --timeout=5s --start-period=15s --retries=3 \
    CMD wget -q --spider http://127.0.0.1:${PORT}/ || exit 1

# Start Next.js standalone server
CMD ["node", "server.js"]
