output "public_ip" {
  description = "Elastic IP of the instance."
  value       = aws_eip.web.public_ip
}

output "url" {
  description = "Site URL."
  value       = "http://${aws_eip.web.public_ip}"
}

output "instance_id" {
  description = "Instance ID (connect with: aws ssm start-session --target <id>)."
  value       = aws_instance.web.id
}
