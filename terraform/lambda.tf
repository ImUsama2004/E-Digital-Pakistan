
# Package the Python health-check function
data "archive_file" "website_health_check" {
  type        = "zip"
  source_file = "${path.module}/../Lambda/Health-Check/lambda_function.py"
  output_path = "${path.module}/lambda_health_check.zip"
}

# Deploy the website health-check function
resource "aws_lambda_function" "website_health_check" {
  function_name = "${var.project_name}-website-health-check"
  description   = "Checks the public E-Digital Pakistan website availability"

  role = aws_iam_role.lambda_health_check.arn

  runtime = "python3.12"
  handler = "lambda_function.lambda_handler"

  filename         = data.archive_file.website_health_check.output_path
  source_code_hash = data.archive_file.website_health_check.output_base64sha256

  timeout     = 15
  memory_size = 128

  environment {
    variables = {
      WEBSITE_URL = "http://${aws_instance.web.public_ip}"
    }
  }

  depends_on = [
    aws_iam_role_policy_attachment.lambda_basic_execution,
    aws_iam_role_policy.lambda_cloudwatch_metrics
  ]

  tags = {
    Name      = "${var.project_name}-website-health-check"
    Project   = var.project_name
    ManagedBy = "terraform"
  }
}
