# --------- 1. Build Stage ---------
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm ci

# Copy application files
COPY . .

# Build Next.js application
RUN npm run build

# --------- 2. Production Stage ---------
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Create a non-root user
RUN addgroup -S nextjs && adduser -S nextjs -G nextjs

# Copy standalone production output
COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static
COPY --from=builder --chown=nextjs:nextjs /app/public ./public

# Run as non-root user
USER nextjs

EXPOSE 3000

# Start Next.js standalone server
CMD ["node", "server.js"]