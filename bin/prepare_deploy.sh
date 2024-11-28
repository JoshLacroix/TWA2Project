#!/bin/bash
set -e

cd ../client

npm install

npm run build

rm -rf ../react_build || true

cp -r build/ ../react_build/

rm -rf build/

cd ../

rm full.zip || true 

7z a -tzip full.zip . -xr!node_modules -x!.env