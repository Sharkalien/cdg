#!/bin/sh
cd ~
screen -d -m ./forever.sh ./server.js production
screen -d -m ./forever.sh ./snclabs.js
