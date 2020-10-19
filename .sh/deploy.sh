#!/usr/bin/env sh.
set -e  

before="\033[32m"
rear="\033[0m"
address="origin"

sleep 1s

RemotePull() {
  sleep 1s

  echo -e "$before▶ 正在获取远分支请稍后... $rear"
  git branch -r
  echo -e "$before▶ 远程分支获取完成. $rear"

  echo -e "$before▶ 开始从 GitHub 拉取新的请求请稍后... $rear"

  echo -e "$before▶ 请输入你要拉取的分支 $rear"
  read temp_branch

  # https://<USERNAME>.github.io/<REPO>  git@github.com:Aftersoil/Aftersoil-wiki.git
  git pull origin "$temp_branch"
  echo -e "$before▶ 分支拉取成功, 拉取成功并合并到当前分支. $rear"

  echo -e "$before▶ 重现编译现有环境, 请稍后... $rear"
  npm install
  echo -e "$before▶ 环境下载成功，请重启服务. $rear"

  sleep 1s
}

sleep 1s

Bale() {
  sleep 1s

  # Please wait to start packaging the project...
  echo -e "$before▶ 开始打包项目请稍后... $rear"

  # Generate static files.
  npm run build

  # Project package completed.
  echo -e "$before▶ 项目打包完成. $rear"

  sleep 1s
}

sleep 1s

submit() {
  sleep 1s

  echo -e "$before▶ 开始执行远程提交脚本命令. $rear"
  git status

  echo -e "$before▶ 新编辑的文件正在提交到暂存区，请等待....$rear"
  git add .
  echo -e "$before▶ 文件已传送到暂存区.$rear"

  git status

  echo -e "$before▶ 输入您的提交：$rear"
  read commit
  git commit -m "$commit"
  echo -e "$before▶ 提交成功添加.$rear"

  sleep 1s

  TARGET_FILE_TMP=`sh -c 'git branch --no-color 2> /dev/null' | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/' -e 's/\//\_/g'`
  echo -e "$before▶ 正在在查看当前分支，如下: $rear"
  echo "$TARGET_FILE_TMP"

  echo "请选择要执行的操作:"
  select var in "push";
  do
  break
  done

  case $var in
  push)
    echo "正在提交 $TARGET_FILE_TMP 请稍后"
    git push "$address" "$TARGET_FILE_TMP"
    echo -e "$before▶ $TARGET_FILE_TMP 分支成功推送.$rear"
  ;;
  *)
    echo "输入有误请新运行命令"
    exit
  ;;
  esac

  sleep 1s
}

sleep 1s

RemoteSubmission() {
  sleep 1s

 if [ -d $r_item_rmgit ]; then
  read -p "$r_item_rmgit▶ 请确是否要远程提交，输入(yes/no)： " REPLACE
    case $REPLACE in
      [yY][eE][sS]|[yY])
      # REPLACE="yes"
      submit
    ;;
      [nN][oO]|[nN])
      # REPLACE="no"
      echo  -e "$before▶ 退出 push，请重新选择 $rear"
      deploy
    ;;
    *)
      echo "Input error, should be [Y/n]."
      exit 1
    esac
  fi

  sleep 1s
}

sleep 1s

deploy() {
  sleep 1s
  echo -e "$before▶ 请选择要执行的 GitHub 操作: $rear"
  select var in "pull" "push" "build" "exit";
  do
    break
  done

  sleep 1s

  case $var in
    pull)
      RemotePull 
    ;;
    push)
      RemoteSubmission 
    ;;
    build)
      Bale
    ;;
    exit)
      echo -e "$before▶ 欢迎使用~~~ $rear"
      exit
    ;;
    *)
      echo -e "$before▶ 请输入正确的格式. $rear"
      deploy
    ;;
  esac

  sleep 1s
}

sleep 1s

deploy

# exit the program
exit
