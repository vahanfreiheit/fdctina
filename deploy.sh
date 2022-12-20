#!/bin/bash

# removed and generated docs directory
# and pushes the changes to production/staging

# exit script if no parameter was given
if [ -z "$1" ]; then
    echo "No parameter given. Please specify 'production' or 'staging'."
    exit 1
fi

# exit script if first parameter was not correct
if [ "$1" != "production" ] && [ "$1" != "staging" ]; then
    echo "Invalid parameter given. Please specify 'production' or 'staging'."
    exit 1
fi

# delete docs directory
echo "Removing docs directory..."
rm -rf docs

# generate docs directory
echo "Generating docs directory for $1..."
hugo -e $1

# check if there are changes in git, create new jobs page with hugo and commit the changes
if [[ $(git status --porcelain) ]]; then
  # commit changes
  echo "Committing changes..."
  git add .
  git commit -m "Update docs"

  # git push to variable git_branch
  echo "Pushing changes to $1..."
  # set variable "git_branch" according to first parameter
  if [ "$1" = "production" ]; then
      git push origin refs/heads/origin
  elif [ "$1" = "staging" ]; then
      git push staging refs/heads/staging
  fi
else
  echo "No changes detected. Nothing to commit."
fi
echo "Done!"