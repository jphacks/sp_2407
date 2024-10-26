#!/usr/bin/env bash
docker run --rm -v "${PWD}:/local" openapitools/openapi-generator-cli:latest generate \
    -i ./local/openapi.yml \
    -g python-flask \
    -o /local/src/