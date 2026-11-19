
resource "aws_ecr_repository" "edp" {
  name                 = "e-digital-pakistan"
  image_tag_mutability = "IMMUTABLE"

  image_scanning_configuration {
    scan_on_push = true
  }

  encryption_configuration {
    encryption_type = "AES256"

  }

  tags = {
    Name      = "e-digital-pakistan-ecr"
    Project   = "e-digital-pakistan"
    ManagedBy = "terraform"
  }
}
