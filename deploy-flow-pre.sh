#!/bin/bash

image_version=tag

cd /opt/ht-flow-server-pre

sed -i "s/ht-flow-server:pre_.*/ht-flow-server:pre_${image_version}/g" docker-compose.yaml


docker-compose  down


docker-compose  up -d