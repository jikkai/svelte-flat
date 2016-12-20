#!/bin/sh
cd ..

yarn run build:components
yarn run build

cd examples
yarn run build
