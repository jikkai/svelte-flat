#!/bin/sh
cd ../packages

read -p 'Component Name:' name

# create a new component
mkdir $name
cd $name
mkdir src
touch src/index.html

echo '#' $name > README.md

echo "{
  \"name\": \"$name\",
  \"version\": \"0.0.1\",
  \"main\": \"index.js\",
  \"author\": \"Jikkai Xiao <sonne@asaki.me>\",
  \"license\": \"MIT\",
  \"scripts\": {
    \"init\": \"yarn\",
    \"build\": \"svelte compile -f umd -n $name ./src/index.html > ./dist/index.js\"
  }
}" > package.json

yarn add svelte-cli --dev
