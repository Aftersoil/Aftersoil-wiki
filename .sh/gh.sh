#!/bin/bash
set -e

# variable
before="\033[32m"
rear="\033[0m"
dev=yuxin
gh_branch=ghTemp

echo -e  "$before'▶ Start executing the command.'$rear"

# Write a sleep 1s to solve the problem of concurrency
sleep 1s

git branch

# Download the gh-pages branch from the distant GitHub repository.
echo -e "$before'▶ Downloading please wait....'$rear"
git fetch origin gh-pages:gh-pages
echo -e "$before'▶ Download completed.'$rear"

git branch;

# 切换分支
git checkout gh-pages
# 新建分支(从gh-pages中新建一个分支)
echo -e "$before'▶ Creating new branch.'$rear"
git branch "$gh_branch"
echo -e "$before'▶ Branch created successfully.'$rear"

sleep 1s

# 在切换到开发分支中
# 后期开发分支名称
read branch_name
git checkout branch_name

echo -e "$before'▶ Current branch branch_name.'$rear"

echo -e "$before'▶ Start packaging project.'$rear"
# Generate static files.
npm run build
echo -e "$before'▶ Project package completed.'$rear"

# 开始移动文件，把 docs/.vuepress/dist 文件夹全部内容移动到项目根目录
echo -e "$before'▶ Start to change the location of the dist static folder.'$rear"
mv docs/.vuepress/dist dist
echo - "$before'▶ dist folder moved successfully.'$rear"

sleep 1s

# 切换分支
echo -e "$before'▶ Switching branches.'$rear"
git checkout "$gh_branch"
echo -e "$before'▶ Switch to "$gh_branch" branch successfully.'$rear"

# 移动文件
echo -e "$before'▶ Start moving all files under dist.'$rear"
cd ..
cp -rvf Aftersoil-wiki/dist/* Aftersoil-wiki
cd Aftersoil-wiki/
echo -e "$before'▶ File copy end.'$rear"

sleep 1s

# 开始远程提交
echo -e "$before'▶ Start remote submission to GitHub.'$rear"
git push origin "$ghTemp"
echo -e "$before'▶ The static file is submitted successfully, please go to GitHub to merge the branch.'$rear"

echo -e "$before'▶ Switch branches and delete "$ghTemp" branch.'$rear"
git branch
git checkout "$dev"
git branch -D "$ghTemp"
git branch
echo -e "$before'▶ The branch is deleted successfully The code is executed successfully, welcome to submit next time.'$rear"

# 退出脚本
exit
