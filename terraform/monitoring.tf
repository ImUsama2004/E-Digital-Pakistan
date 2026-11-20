
# CloudWatch alarm for high EC2 CPU utilization
resource "aws_cloudwatch_metric_alarm" "high_cpu" {
  alarm_name          = "${var.project_name}-high-cpu"
  alarm_description   = "Triggers when EC2 CPU utilization exceeds 70%."
  comparison_operator = "GreaterThanThreshold"

  evaluation_periods = 2
  metric_name        = "CPUUtilization"
  namespace          = "AWS/EC2"
  period             = 300
  statistic          = "Average"
  threshold          = 70

  dimensions = {
    InstanceId = aws_instance.web.id
  }

  treat_missing_data = "notBreaching"

  # Send an SNS notification when the alarm enters ALARM state
  alarm_actions = [
    aws_sns_topic.ec2_alerts.arn
  ]

  tags = {
    Name = "${var.project_name}-high-cpu-alarm"
  }
}

# CloudWatch alarm for website availability
resource "aws_cloudwatch_metric_alarm" "website_availability" {
  alarm_name        = "${var.project_name}-website-availability"
  alarm_description = "Triggers when the website health check reports an unhealthy website or monitoring data is missing."

  comparison_operator = "LessThanThreshold"

  evaluation_periods  = 2
  datapoints_to_alarm = 2

  metric_name = "WebsiteHealth"
  namespace   = "EDigitalPakistan/WebsiteMonitoring"
  period      = 300
  statistic   = "Minimum"
  threshold   = 1

  treat_missing_data = "breaching"

  # Send an SNS notification when the website becomes unhealthy
  alarm_actions = [
    aws_sns_topic.ec2_alerts.arn
  ]

  # Send an SNS notification when the website recovers
  ok_actions = [
    aws_sns_topic.ec2_alerts.arn
  ]

  tags = {
    Name      = "${var.project_name}-website-availability-alarm"
    Project   = var.project_name
    ManagedBy = "terraform"
  }
}
