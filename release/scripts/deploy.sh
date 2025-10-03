#!/bin/bash

UPDATE=`git diff HEAD^ HEAD -- package.json | grep '^+ '`
DEPLOY="false"

if [[ $UPDATE == *"version"* ]]; then
  DEPLOY="true"

  echo "Version bumped - Deployment allowed."
else
  echo "No version bumped."
fi

echo "deploy=$DEPLOY"
