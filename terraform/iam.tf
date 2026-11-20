resource "aws_iam_role" "ec2" {
  name = "${var.project_name}-ec2-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Principal = {
          Service = "ec2.amazonaws.com"
        }

        Action = "sts:AssumeRole"
      }
    ]
  })

  tags = {
    Name = "${var.project_name}-ec2-role"
  }
}

# Allow EC2 to communicate with AWS Systems Manager
resource "aws_iam_role_policy_attachment" "ssm" {
  role       = aws_iam_role.ec2.name
  policy_arn = "arn:aws:iam::aws:policy/AmazonSSMManagedInstanceCore"
}

# Allow EC2 to authenticate and pull Docker images from ECR
resource "aws_iam_role_policy" "ecr_pull" {
  name = "${var.project_name}-ecr-pull-policy"
  role = aws_iam_role.ec2.id

  policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Sid    = "ECRAuthorization"
        Effect = "Allow"

        Action = [
          "ecr:GetAuthorizationToken"
        ]

        Resource = "*"
      },
      {
        Sid    = "ECRImagePull"
        Effect = "Allow"

        Action = [
          "ecr:BatchCheckLayerAvailability",
          "ecr:GetDownloadUrlForLayer",
          "ecr:BatchGetImage"
        ]

        Resource = aws_ecr_repository.edp.arn
      }
    ]
  })
}

# Attach the IAM role to the EC2 instance through an instance profile
resource "aws_iam_instance_profile" "ec2" {
  name = "${var.project_name}-ec2-profile"
  role = aws_iam_role.ec2.name
}


# ============================================================
# LAMBDA HEALTH CHECK IAM ROLE
# ============================================================

# Allow AWS Lambda to assume this role
resource "aws_iam_role" "lambda_health_check" {
  name = "${var.project_name}-lambda-health-check-role"

  assume_role_policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Principal = {
          Service = "lambda.amazonaws.com"
        }

        Action = "sts:AssumeRole"
      }
    ]
  })

  tags = {
    Name      = "${var.project_name}-lambda-health-check-role"
    Project   = var.project_name
    ManagedBy = "terraform"
  }
}

# Allow Lambda to create CloudWatch Logs and write execution logs
resource "aws_iam_role_policy_attachment" "lambda_basic_execution" {
  role = aws_iam_role.lambda_health_check.name

  policy_arn = "arn:aws:iam::aws:policy/service-role/AWSLambdaBasicExecutionRole"
}

# Allow Lambda to publish website health metrics to CloudWatch
resource "aws_iam_role_policy" "lambda_cloudwatch_metrics" {
  name = "${var.project_name}-lambda-cloudwatch-metrics"
  role = aws_iam_role.lambda_health_check.id

  policy = jsonencode({
    Version = "2012-10-17"

    Statement = [
      {
        Effect = "Allow"

        Action = [
          "cloudwatch:PutMetricData"
        ]

        Resource = "*"

        Condition = {
          StringEquals = {
            "cloudwatch:namespace" = "EDigitalPakistan/WebsiteMonitoring"
          }
        }
      }
    ]
  })
}
