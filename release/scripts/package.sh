#!/bin/bash

BRANCH=$(git rev-parse --abbrev-ref HEAD)
REGEX_SUFFIX="\/([a-z]|[A-Z]|[0-9]|\-)+"
REGEX_MAJOR="^(api)$REGEX_SUFFIX$"
REGEX_MINOR="^(feature)$REGEX_SUFFIX$"
REGEX_PATCH="^(hotfix)$REGEX_SUFFIX$"
VERSION=""

# Upgrade/Update/Fix check
# Assign version according to branch type
if [[ $BRANCH =~ $REGEX_MAJOR ]]; then
  VERSION="major"
elif [[ $BRANCH =~ $REGEX_MINOR ]]; then
  VERSION="minor"
elif [[ $BRANCH =~ $REGEX_PATCH ]]; then
  VERSION="patch"
fi

# Assign version according to branch type
if [[ $BRANCH =~ $REGEX_MAJOR || $BRANCH =~ $REGEX_MINOR || $BRANCH =~ $REGEX_PATCH ]]; then
  echo "Increasing package version to $VERSION..."
  npm version $VERSION
  echo "Package version increased to $(node -p -e "require('./package.json').version")"
fi

exit 1
