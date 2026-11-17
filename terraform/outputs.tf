
output "vpc_id" {
  description = "ID of the E-Digital Pakistan VPC."
  value       = aws_vpc.main.id
}

output "public_subnet_id" {
  description = "ID of the public subnet."
  value       = aws_subnet.public.id
}

output "security_group_id" {
  description = "ID of the EC2 security group."
  value       = aws_security_group.web.id
}

output "public_ip" {
  description = "Public IPv4 address of the EC2 instance."
  value       = aws_instance.web.public_ip
}

output "public_dns" {
  description = "Public DNS hostname of the EC2 instance."
  value       = aws_instance.web.public_dns
}

output "url" {
  description = "Application URL after deployment."
  value       = "http://${aws_instance.web.public_ip}"
}

output "instance_id" {
  description = "EC2 instance ID for AWS Systems Manager access."
  value       = aws_instance.web.id
}
