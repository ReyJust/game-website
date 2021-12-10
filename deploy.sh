#!/bin/bash

echo "Welcome to website deployement, please input your absolute apache2 root folder: "
read rootpath

cd .. && sudo cp -R game-website $rootpath

echo "Name of the root folder: "
read foldername

cd $rootpath
sudo mv game-website $foldername

echo "Project Copied. PATH: ${rootpath}/${foldername}"
