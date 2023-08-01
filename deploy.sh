#!/bin/bash

C_R='\033[0;32m' # green
C_0='\033[0m' # no Color

# removed and generated docs directory
# and pushes the changes to production/staging

while true
do  
  prompt=
  echo -e "${C_R}Do you want to deploy to [l]ive or [s]taging?${C_0}"
  read -n1 char
  case "$char" in
      [Ll])
          ENV='production'
          break
          ;;
      [Ss])
          ENV='staging'
          break
          ;;
      *)
          echo -e "${C_R}Wrong input: '$char'.\nPlease only enter l or s.${C_0}"
          continue
    esac
done

echo -e "\n${C_R}What changes have you made?${C_0}"
while true; do
    read commit_message
    if [[ -z "$commit_message" ]]; then
        echo -e "${C_R}Please tell me what you have changed.${C_0}"
    else
        break
    fi
done

# Get the current date and time in the desired format
current_date=$(date +"%Y%m%d_%H%M%S")

# Remove characters that are not letters, numbers, or spaces and convert spaces to dashes
filtered_commit_message=$(echo "$commit_message"|tr -cd '[:alnum:][:space:]'|tr ' ' '-')

echo $filtered_commit_message

# create branch name
BRANCH_NAME="${current_date}-${filtered_commit_message}"

# create new branch with current date and time as name
echo -e "\n${C_R}Creating new branch...${C_0}"
git checkout -b $BRANCH_NAME refs/heads/_$ENV

echo -e "${C_R}Generating docs directory for ${ENV}...${C_0}"

# delete docs directory
rm -rf docs

# generate docs directory
hugo -e $ENV

# check if there are changes in git, create new jobs page with hugo and commit the changes
if [[ $(git status --porcelain) ]]; then
  # commit changes
  echo -e "${C_R}Committing changes...${C_0}"
  git add .
  git commit -m "$commit_message"

  # git push to variable git_branch
  echo -e "${C_R}Pushing changes to $ENV...${C_0}"
  # set variable "git_branch" according to first parameter
  git push $ENV refs/heads/$BRANCH_NAME
  
  echo -e "${C_R}Opening the browser so you can create the pull request...${C_0}"
  if [ "$ENV" = "production" ]; then
    open "https://github.com/freiheit-com/freiheit-com.github.io"
  else
    open "https://github.com/mploigt/freiheit"
  fi
else
  echo -e "${C_R}No changes detected. Nothing to commit.${C_0}"
fi

# archiving branch
echo -e "${C_R}Cleaning up...${C_0}"
git checkout "_$ENV"
git branch -m $BRANCH_NAME archive/$ENV/$BRANCH_NAME

echo -e "${C_R}Done!${C_0}"