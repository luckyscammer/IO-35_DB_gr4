#!/usr/bin/env sh

set -e

REPO="git@github-nastia:Nastysska/IO-35_DB_gr4.git"

npm run docs:build

cd docs/.vitepress/dist

git init
git config user.name Nastysska
git config user.email nas.tyu.sha.15.05.06@gmail.com
git branch -M main
git add -A
git commit -m 'Deploy to gh-pages'

git push -f "$REPO" main:gh-pages

cd -
