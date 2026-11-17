
# Retrieve the latest Amazon Linux 2023 AMI
data "aws_ssm_parameter" "al2023" {
  name = "/aws/service/ami-amazon-linux-latest/al2023-ami-kernel-default-x86_64"
}

# Create E-Digital Pakistan EC2 instance
resource "aws_instance" "web" {
  ami           = data.aws_ssm_parameter.al2023.value
  instance_type = var.instance_type

  # Network configuration
  subnet_id                   = aws_subnet.public.id
  vpc_security_group_ids      = [aws_security_group.web.id]
  associate_public_ip_address = true

  # IAM permissions for AWS Systems Manager
  iam_instance_profile = aws_iam_instance_profile.ec2.name

  # Monitoring
  monitoring = false

  # Enforce IMDSv2
  metadata_options {
    http_endpoint = "enabled"
    http_tokens   = "required"
  }

  # Encrypted root EBS volume
  root_block_device {
    volume_type           = "gp3"
    volume_size           = var.root_volume_size
    encrypted             = true
    delete_on_termination = true
  }

  tags = {
    Name = "${var.project_name}-server"
  }

  # Avoid replacing the instance just because a newer AMI is published
  lifecycle {
    ignore_changes = [ami]
  }
}
