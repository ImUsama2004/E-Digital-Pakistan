
variable "aws_region" {
  description = "AWS region for Terraform remote state resources"
  type        = string
  default     = "ap-southeast-2"
}

variable "bucket_name" {
  description = "Globally unique S3 bucket name for Terraform remote state"
  type        = string
  default     = "e-digital-pakistan-tfstate-usama-2026"
}
