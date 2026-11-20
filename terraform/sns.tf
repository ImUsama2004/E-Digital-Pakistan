
# SNS topic for EC2 monitoring alerts
resource "aws_sns_topic" "ec2_alerts" {
  name = "${var.project_name}-ec2-alerts"

  tags = {
    Name = "${var.project_name}-ec2-alerts"
  }
}

# Email subscription for CloudWatch alarm notifications
resource "aws_sns_topic_subscription" "email_alerts" {
  topic_arn = aws_sns_topic.ec2_alerts.arn
  protocol  = "email"
  endpoint  = var.alert_email
}
