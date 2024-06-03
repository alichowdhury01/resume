#!/bin/bash

# Navigate to the project directory
cd /root/var/www/html/resume

echo "Pulling latest changes from repository"
git pull 



echo "Building and starting Docker containers"
docker compose up -d --build

