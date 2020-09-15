#!/usr/bin/env sh.
set -e

# Generate static files.
npm run build

cd docs/.vuepress/dist

# git init
# git add -A
# git commit -m 'first commit'

# release 
# https://<USERNAME>.github.io/<REPO>  git@github.com:Aftersoil/Aftersoil-wiki.git
# git push -f git@github.com:Aftersoil/Aftersoil-wiki.git master

# exit the program
cd -
