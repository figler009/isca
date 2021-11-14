set -ue

JQ_MAP='reduce .[] as $item ({}; . * $item)|to_entries|map("\(.key)=\(.value|tostring)")|join(" ")'

aws cloudformation deploy \
    --template-file ../../pipeline.yml \
    --stack-name cicd-isca \
    --capabilities CAPABILITY_IAM \
    --parameter-overrides $(jq -rs "${JQ_MAP}" "../../params/cicd-params.json" )
