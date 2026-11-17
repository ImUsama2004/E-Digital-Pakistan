variable "aws_region" {
  description = "AWS region to deploy into."
  type        = string
  default     = "ap-south-1"
}

variable "instance_type" {
  description = "EC2 instance type."
  type        = string
  default     = "t3.micro"
}

variable "docker_image" {
  description = "Docker Hub repository to run."
  type        = string
  default     = "muhammadusamasaeed/e-digital-pakistan"
}

variable "image_tag" {
  description = "Image tag to deploy (use a commit SHA from CI; no default on purpose, never 'latest')."
  type        = string

  validation {
    condition     = var.image_tag != "latest" && length(var.image_tag) > 0
    error_message = "Pin image_tag to a specific commit SHA, not 'latest'."
  }
}

variable "allowed_http_cidrs" {
  description = "CIDR blocks allowed to reach HTTP/HTTPS."
  type        = list(string)
  default     = ["0.0.0.0/0"]
}

variable "root_volume_size" {
  description = "Root EBS volume size in GiB."
  type        = number
  default     = 20
}
