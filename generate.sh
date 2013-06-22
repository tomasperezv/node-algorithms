#!/bin/bash
cp ./example/example.js ./problems/$1
sed -i "s/Example/$2/g" ./problems/$1
sed -i "10i require('./$1');" ./problems/runner.js
echo "console.log(new $2().solve().check().toString());" >> ./problems/runner.js
