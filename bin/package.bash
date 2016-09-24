#!/bin/bash

mkdir target
cp src/* target
cp img/icon*.png target
zip shitkerizer.zip target
rm -rf target
