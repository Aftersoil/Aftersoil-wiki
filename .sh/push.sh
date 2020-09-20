set -e

before="\033[32m"
rear="\033[0m"

echo -e "$before▶ 开始执行命令. $rear"

git status

echo -e "$before▶ 新编辑的文件正在提交到暂存区，请等待....$rear"

git add .

# Write a sleep 1s to solve the problem of concurrency
sleep 1s

echo -e "$before▶ 文件已传送到暂存区.$rear"

git status

echo -e "$before▶ 输入您的提交：$rear"
read commit
git commit -m "$commit"

echo -e "$before▶ 提交成功添加.$rear"

sleep 1s

echo -e "$before▶ 请输入您要提交的分支.$rear"
read branch

git push origin "$branch"
 
echo -e "$before▶ 成功推送.$rear"

exit
