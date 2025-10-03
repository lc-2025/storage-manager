#!/bin/bash

UPDATE=`git diff HEAD^ HEAD -- package.json | grep '^+ '`
DEPLOY=false

if [[ $UPDATE != *"version"* ]]; then
  echo "Version bumped - Deployment allowed."

  DEPLOY=true
else
  echo "No version bumped."
fi

echo "$DEPLOY"
