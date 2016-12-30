#!/bin/sh

read -p 'commit message:' message

./build.sh

cd ..

git status
git add *
git commit -m "$message"
git push
