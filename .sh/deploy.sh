#!/usr/bin/env sh.
set -e  

before="\033[32m"
rear="\033[0m"
address="origin"

sleep 1s

RemotePull() {
  sleep 1s

  if [ -d $r_item_rmgit ]; then
  read -p "$r_item_rmgit▶ 请选择是否拉取远程最新分支合并到本地，输入(yes/no)： " REPLACE
    case $REPLACE in
      [yY][eE][sS]|[yY])
      # REPLACE="yes"
      sleep 1s
    ;;
      [nN][oO]|[nN])
      # REPLACE="no"
      echo  -e "$before▶ 退出 pull，请重新选择 $rear"
      deploy
    ;;
    *)
      echo "Input error, should be [Y/n]."
      exit 1
    esac
  fi
  
  sleep 1s

  echo -e "$before▶ 正在获取远分支请稍后... $rear"
  git branch -r
  echo -e "$before▶ 远程分支获取完成. $rear"

  echo -e "$before▶ 开始从 GitHub 拉取新的请求请稍后... $rear"

  read -p "▶ 请输入你要拉取的分支: " temp_branch

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

  if [ -d $r_item_rmgit ]; then
  read -p "$r_item_rmgit▶ 请选择是否打包项目，输入(yes/no)： " REPLACE
    case $REPLACE in
      [yY][eE][sS]|[yY])
      # REPLACE="yes"
      sleep 1s
    ;;
      [nN][oO]|[nN])
      # REPLACE="no"
      echo  -e "$before▶ 退出 pull，请重新选择 $rear"
      deploy
    ;;
    *)
      echo "Input error, should be [Y/n]."
      exit 1
    esac
  fi
  
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

  read -p "▶ 输入您的提交：" commit
  git commit -m "$commit"
  echo -e "$before▶ 提交成功添加.$rear"

  sleep 1s

  TARGET_FILE_TMP=`sh -c 'git branch --no-color 2> /dev/null' | sed -e '/^[^*]/d' -e 's/* \(.*\)/\1/' -e 's/\//\_/g'`
  echo -e "$before▶ 正在在查看当前分支，如下: $rear"
  echo "$TARGET_FILE_TMP"

  echo -e "$before▶ 请选择要执行的操作: $rear"
  select var in "push";
  do
    break
  done

  case $var in
  push)
    echo -e "$before▶ $TARGET_FILE_TMP 请稍后. $rear"
    git push "$address" "$TARGET_FILE_TMP"
    echo -e "$before▶ $TARGET_FILE_TMP 分支成功推送，欢迎下次使用^_^ .$rear"
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

release() {
  sleep 1s

  if [ -d $r_item_rmgit ]; then
  read -p "$r_item_rmgit▶ 请选择是否发布 gh-pages 项目，全网发布，输入(yes/no)： " REPLACE
    case $REPLACE in
      [yY][eE][sS]|[yY])
      # REPLACE="yes"
      sleep 1s
    ;;
      [nN][oO]|[nN])
      # REPLACE="no"
      echo  -e "$before▶ 退出 release，请重新选择 $rear"
      deploy
    ;;
    *)
      echo "Input error, should be [Y/n]."
      exit 1
    esac
  fi
  
  sleep 1s

  # 删除文件
  echo -e "$before'▶ 清除已存在文件. '$rear"
  rm -rf dist
  rm -rf docs/.vuepress/dist
  echo -e "$before'▶ 文件清除完成. '$rear"

  sleep 1s

  echo -e "$before'▶ 查看当前本地分支. '$rear"
  git branch
  echo -e "$before'▶ 本地分支查看完成，没有 gh-pages 分支. '$rear"

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
  echo -e "$before'▶ 开始更改 docs/.vuepress/dist 下静态所欲文件的位置.'$rear"
  mv docs/.vuepress/dist dist
  echo - "$before'▶ dist 文件夹移动成功.'$rear"

  # 切换分支
  echo -e "$before'▶ 切换分支.'$rear"
  git checkout gh-pages
  echo -e "$before'▶ 分支切换成功.'$rear"

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

  read -p "▶请输入您要提交的commit: " commits
  git commit -m "$commits"
  echo -e "$before'▶ 输入成功，commit 提交出成功'$rear"
  
  sleep 1s

  echo -e "$before'▶ 开始向远 gh-pages 提交合并.'$rear"
  git push origin gh-pages
  echo -e "$before'▶ 静态文件已成功提交，请转到GitHub查看是否提交成功.'$rear"

  sleep 1s

  echo -e "$before'▶ 查看您本地分支'$rear"
  git branch
  echo -e "$before'▶ 您本地分支如下'$rear"
  read -p "▶ 请输入您的开发分支名称: " dev
  echo  -e "$before'▶ 正在切换分支请稍后... '$rear"
  git checkout "$dev"
  git branch -D gh-pages
  rm -rf dist
  git branch
  echo -e "$before'▶ 切换成功，欢迎下次提交.'$rear"

  sleep 1s
}

sleep 1s

deploy() {
  sleep 1s
  echo -e "$before▶ 请选择要执行的 GitHub 操作: $rear"
  select var in "pull" "push" "release" "build" "exit";
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
    release)
      release 
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
