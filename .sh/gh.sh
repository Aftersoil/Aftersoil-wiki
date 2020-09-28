#!/bin/bash
set -e

# variable
before="\033[32m"
rear="\033[0m"
gh_branch=ghTemp

# 删除文件
echo -e "$before'▶ 清除已存在文件. '$rear"
rm -rf dist
rm -rf docs/.vuepress/dist
echo -e "$before'▶ 清除完成. '$rear"

sleep 1s

echo -e "$before'▶ 开始执行命令. '$rear"

git branch

# Download the gh-pages branch from the distant GitHub repository.
echo -e "$before'▶ 正在下载远程最新 gh-pages, 请稍候....'$rear"
git fetch origin gh-pages:gh-pages
echo -e "$before'▶ 远程 gh-pages 下载完成.'$rear"

git branch;

sleep 1s

echo -e "$before'▶ 开始打包项目.'$rear"
# Generate static files.
npm run build
echo -e "$before'▶ 项目打包完成.'$rear"

sleep 1s

# 开始移动文件，把 docs/.vuepress/dist 文件夹全部内容移动到项目根目录
echo -e "$before'▶ 开始更改dist静态文件夹的位置.'$rear"
mv docs/.vuepress/dist dist
echo - "$before'▶ dist文件夹移动成功.'$rear"

sleep 1s

# 切换分支
echo -e "$before'▶ 切换分支.'$rear"
git checkout gh-pages
echo -e "$before'▶ 分支切换成功.'$rear"

# 新建分支(从gh-pages中新建一个分支)
# echo -e "$before'▶ 创建新分支.'$rear"
# git branch "$gh_branch"
# echo -e "$before'▶ 分支创建成功.'$rear"

# 切换分支
# echo -e "$before'▶ 切换分支.'$rear"
# git checkout "$gh_branch"
# echo -e "$before'▶ 成功切换到 "$gh_branch" 分支.'$rear"

# 复制文件
echo -e "$before'▶ 开始将所有文件移到全局静态文件下.'$rear"
cd ..
cp -rvf Aftersoil-wiki/dist/* Aftersoil-wiki
cd Aftersoil-wiki/
echo -e "$before'▶ 文件复制结束.'$rear"

sleep 1s

echo  -e "$before'▶ 查看当前分支状态 '$rear"
git status
echo -e "$before'▶ 移动成功暂未提交 '$rear"

# 开始远程提交
echo -e "$before'▶ 开始提交暂存区,请稍后... '$rear"
git add .
echo -e "$before'▶ 文件已全部提交到暂存区. '$rear"

git status

echo -e "$before'▶请输入您要提交的commit: '$rear"
read commits
git commit -m "$commits"
echo -e "$before'▶ 输入成功，commit 提交出成功'$rear"

echo -e "$before'▶ 开始向远 gh-pages 提交合并.'$rear"
git push origin gh-pages
echo -e "$before'▶ 静态文件已成功提交，请转到GitHub查看是否提交成功.'$rear"

sleep 1s

echo -e "$before'▶ 查看您本地分支'$rear"
git branch
echo -e "$before'▶ 您本地分支如下'$rear"
echo -e "$before'▶ 请输入您的开发分支名称。'$rear"
read dev
echo  -e "$before'▶ 正在切换分支请稍后... '$rear"
git checkout "$dev"
git branch -D gh-pages
rm -rf dist
git branch
echo -e "$before'▶ 切换成功，欢迎下次提交.'$rear"

# 退出脚本
exit
