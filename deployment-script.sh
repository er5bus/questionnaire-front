#!/bin/bash
root="/root/test-ci"

cd $root

echo -e '\e[1m\e[34mPulling image from docker hub..\e[0m\n'

docker-compose -f docker-compose.deploy.yaml pull survey_deploy

echo -e '\e[1m\e[34m\nRestarting service..\e[0m\n'

docker-compose -f docker-compose.deploy.yaml down
docker-compose -f docker-compose.deploy.yaml up --build -d

echo -e '\n\e[1m\e[34mDeployment successful\e[0m'
