
# Schedule website health checks every five minutes
resource "aws_cloudwatch_event_rule" "website_health_check" {
  name                = "${var.project_name}-website-health-check-schedule"
  description         = "Runs the website health-check Lambda every five minutes"
  schedule_expression = "rate(5 minutes)"

  tags = {
    Name      = "${var.project_name}-website-health-check-schedule"
    Project   = var.project_name
    ManagedBy = "terraform"
  }
}

# Connect EventBridge to the Lambda function
resource "aws_cloudwatch_event_target" "website_health_check" {
  rule      = aws_cloudwatch_event_rule.website_health_check.name
  target_id = "website-health-check-lambda"
  arn       = aws_lambda_function.website_health_check.arn
}

# Allow EventBridge to invoke the Lambda function
resource "aws_lambda_permission" "allow_eventbridge" {
  statement_id  = "AllowEventBridgeInvoke"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.website_health_check.function_name
  principal     = "events.amazonaws.com"
  source_arn    = aws_cloudwatch_event_rule.website_health_check.arn
}
