#!/bin/sh
cd ~
screen -d -m ./forever.sh ./server.js production
