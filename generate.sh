#!/bin/bash
cp ./problems/example.js ./problems/$1
sed -i "s/Example/$2/g" ./problems/$1
sed -i "7i require('./problems/$1');" runner.js
echo "console.log(new $2().solve().check().toString());" >> runner.js
