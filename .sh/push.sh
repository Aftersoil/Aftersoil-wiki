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

TARGET_FILE_TMP=`sh -c 'git branch --no-color 2> /dev/null' | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/' -e 's/\//\_/g'`
echo "正在在查看当前分支，如下: "
echo "$TARGET_FILE_TMP"

echo "请选择要执行的操作:"
select var in "push" "exit";
do
  break
done

case $var in
  push)
    echo "正在提交 $TARGET_FILE_TMP 请稍后"
    git push origin "$TARGET_FILE_TMP"
    echo -e "$before▶ $TARGET_FILE_TMP 分支成功推送.$rear"
  ;;
  exit)
    echo "已退出当前程序"
    exit
  ;;
  *)
    echo "输入有误请新运行命令"
    exit
  ;;
esac

# echo -e "$before▶ 请输入您要提交的分支.$rear"
# read branch

exit
