#!/bin/bash

# gets the current jobs from the lever API
# and updates the website if there were new ones

# remove all old json job files
rm ./data/lever/*.json

# get all jobs from lever API
FILE='./data/lever/jobs.json'
curl "https://api.lever.co/v0/postings/freiheit-2?mode=json&distributionChannel=public&state=published&group=location" > $FILE

# create md5
MD5=$(cat $FILE | md5sum | awk '{print $1}')

# rename downloaded file to md5 hash
NEWFILE=${FILE//"jobs"/"jobs$MD5"}
mv $FILE $NEWFILE

# change the file name in the jobs page
REPLACE="$.Site.Data.lever.jobs$MD5"
sed -i '' "s/\$\.Site\.Data\.lever\.jobs[0-9a-z]*/$REPLACE/" ./layouts/join-the-team/list.html

# check if there are changes in git, create new jobs page with hugo and commit the changes
if [[ $(git status --porcelain) ]]; then
  hugo -e production
  git add .
  git commit -m "update jobs"
  git push live HEAD:main
fi
