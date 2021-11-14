set -ue
ls
aws cloudformation deploy \
    --template-file ./templates/bucket-ui.yaml \
    --stack-name bucket-isca-ui \
    --capabilities CAPABILITY_IAM
