#!/usr/bin/env sh.
set -e

before="\033[32m"
rear="\033[0m"

sleep 1s

RemotePull () {
  sleep 1s

  # Please wait a moment to start pulling new requests from GitHub.
  echo -e "$before 开始从 GitHub 拉取新的请求请稍后... $rear"

  echo -e "$before 请输入你要拉取的分支 $rear"
  read temp_branch

  # https://<USERNAME>.github.io/<REPO>  git@github.com:Aftersoil/Aftersoil-wiki.git
  git pull origin "$temp_branch"
  echo -e "$before 分支拉取成功 $rear"

  # The pull is successful and merged into the current branch.
  echo -e "$before 拉取成功并合并到当前分支. $rear"

  sleep 1s
}

Bale() {
  sleep 1s

  # Please wait to start packaging the project...
  echo -e "$before 开始打包项目请稍后... $rear"

  # Generate static files.
  npm run build

  # Project package completed.
  echo -e "$before 项目打包完成. $rear"

  sleep 1s
}

echo "请选择要执行的 GitHub 操作:"
select var in "pull" "build" "exit";
do
  break
done

sleep 1s

case $var in
  pull)
    RemotePull 
  ;;
  build)
    Bale
  ;;
  exit)
    exit
  ;;
  *)
    echo -e "$before 请输入正确的格式. $rear"
    npm run deploy
  ;;
esac

# exit the program
exit
