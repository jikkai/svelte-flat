#!/bin/sh
cd ..

yarn run build:components
yarn run build:all

cd examples
yarn run build
