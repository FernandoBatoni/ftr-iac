import * as aws from "@pulumi/aws"

const bucket = new aws.s3.BucketV2("ftr-first-bucket", {
  bucket: 'ftr-first-bucket',
  tags: {
    IAC: "true"
  }
})

const ecr = new aws.ecr.Repository('ftr-first-ecr', {
  name: 'ftr-first-ecr',
  imageTagMutability: 'IMMUTABLE',
  tags: {
    IAC: "true"
  }
})

export const bucketName = bucket.id
export const bucketRegion = bucket.region
export const bucketArn = bucket.arn

export const ecrName = ecr.name
export const ecrRepositoryUrl = ecr.repositoryUrl