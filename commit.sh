#! /bin/sh

git add .
read -p "input commit message: " msg
git commit -m "$msg"
# 提交之前先拉取
git pull origin main
git push origin main