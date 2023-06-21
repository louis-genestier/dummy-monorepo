terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
}

provider "aws" {
  region = "eu-west-3"
}

resource "aws_ecr_repository" "api_repository" {
  name = "api-repository"
  image_scanning_configuration {
    scan_on_push = false
  }
}


