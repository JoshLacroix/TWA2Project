#!/bin/bash
set -e

./prepare_deploy.sh

cd ../

aws s3 cp full.zip s3://twa2proj/full.zip

VERSION_LABEL="v$(date +%Y%m%d%H%M%S)"

echo "New version label $VERSION_LABEL"

aws elasticbeanstalk create-application-version \
    --application-name TWAProj \
    --version-label $VERSION_LABEL \
    --source-bundle S3Bucket=twa2proj,S3Key=full.zip \
    --no-cli-pager

aws elasticbeanstalk update-environment \
    --environment-name TWAProj-env \
    --version-label $VERSION_LABEL \
    --no-cli-pager

echo "Deploy completed successfully"