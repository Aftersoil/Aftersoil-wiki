# 打标签

像其他版本控制系统（VCS）一样，Git 可以给 **历史中的某一个提交** 打上标签，以示重要。 比较有代表性的是人们会使用这个功能来标记发布结点（v1.0 等等）。 在本节中，你将会学习如何列出已有的标签、如何创建新标签、以及不同类型的标签分别是什么。

## 列出标签

在 Git 中列出已有的标签是非常简单直观的。 只需要输入 git tag：

```sh
git tag
# v0.1
# v1.3
```

这个命令以字母顺序列出标签；但是它们出现的顺序并不重要。

你也可以使用特定的模式查找标签。 例如，Git 自身的源代码仓库包含标签的数量超过 500 个。 如果只对 1.8.5 系列感兴趣，可以运行：

```sh
git tag -l 'v1.8.5*'
# v1.8.5
# v1.8.5-rc0
# v1.8.5-rc1
# v1.8.5-rc2
# v1.8.5-rc3
# v1.8.5.1
# v1.8.5.2
# v1.8.5.3
# v1.8.5.4
# v1.8.5.5
```

上面这种就是左前缀模糊搜索

## 创建标签

Git 使用两种主要类型的标签：
- 轻量标签（lightweight）
- 附注标签（annotated）

一个轻量标签很像一个不会改变的分支 – 它只是一个 **特定提交的引用**。

然而，附注标签是存储在 Git 数据库中的一个完整对象。 它们是可以被校验的；其中包含打标签者的名字、电子邮件地址、日期时间；还有一个标签信息；并且可以使用 GNU Privacy Guard （GPG）签名与验证。 通常建议创建附注标签，这样你可以拥有以上所有信息；但是如果你只是想用一个临时的标签，或者因为某些原因不想要保存那些信息，轻量标签也是可用的。

## 附注标签（`tag -a`）

在 Git 中创建一个附注标签是很简单的。 最简单的方式是当你在运行 tag 命令时指定 -a 选项：

```sh
git tag -a v1.4 -m 'my version 1.4'
git tag
# v0.1
# v1.3
# v1.4
```

`-m` 选项指定了一条将会存储在标签中的信息。 如果没有为附注标签指定一条信息，Git 会运行编辑器要求你输入信息。

通过使用 `git show` 命令可以看到标签信息与对应的提交信息：

```sh
git show v1.4
# tag v1.4
# Tagger: Ben Straub <ben@straub.cc>
# Date:   Sat May 3 20:19:12 2014 -0700

# my version 1.4

# commit ca82a6dff817ec66f44342007202690a93763949
# Author: Scott Chacon <schacon@gee-mail.com>
# Date:   Mon Mar 17 21:52:11 2008 -0700

#     changed the version number
```

输出显示了打标签者的信息、打标签的日期时间、附注信息，然后显示具体的提交信息。

## 轻量标签

另一种给提交打标签的方式是使用轻量标签。 轻量标签本质上是将提交校验和存储到一个文件中 – 没有保存任何其他信息。 创建轻量标签，不需要使用 `-a`、`-s` 或 `-m` 选项，只需要提供标签名字：

```sh
git tag v1.4-lw
git tag
# v0.1
# v1.3
# v1.4
# v1.4-lw
# v1.5
```

这时，如果在标签上运行 `git show`，你不会看到额外的标签信息。 命令只会显示出提交信息：

```sh
git show v1.4-lw
# commit ca82a6dff817ec66f44342007202690a93763949
# Author: Scott Chacon <schacon@gee-mail.com>
# Date:   Mon Mar 17 21:52:11 2008 -0700

#     changed the version number
```

## 后期打标签

你也可以对过去的提交打标签。 假设提交历史是这样的：

```sh
git log --pretty=oneline
39d89553de2765d7927d10d48b1386d858c35ebf (HEAD -> yuxin, origin/yuxin) add MarkDown docs
bc0bbdbbe78d18a2e4d729f3b3ac8844d3f046ab (origin/lpy) update package.json
521f52b8b8725a37ae4f392efa602b56b8c09c59 Merge branch 'master' of https://github.com/Aftersoil/Aftersoil-wiki into lpy
c6a1dfd8fd6c25de9c99a03bca34f57fe3ab4e98 New! Add AftersoilQR code
f31a37a438bd2745905c094c9eaef54e96bb8f73 (origin/master, origin/HEAD) Merge pull request #45 from Aftersoil/yuxin
eebce220022a7baba4faf2f5d8ceaf70d29bcc75 Change theme color.
0b2a0cfea0e2ff24a949f467f3c7e22e08af418f Merge pull request #44 from Aftersoil/yuxin
434c7e44ec5f9828c10863b185e6545c524dbf10 New image function, download statement, fix some bugs.
fe96f9aebfaa070c8bc1295c4ddad78659244131 Create stale.yml
9e2331df637c4a7988594e52ede717e36866e953 Create .travis.yml
21a3f664730696aa3dafbe40793b9f750bba0aa1 Merge pull request #42 from Aftersoil/yuxin
852f2b32fc5ee512dccf481a25fc5bae52af0a5d update test
e7468de383d3fb393286e772af7085518bc932d7 update svg hover transitio
```

现在，假设在 v1.2 时你忘记给项目打标签，也就是在 “updated rakefile” 提交。 你可以在之后补上标签。 要在那个提交上打标签，你需要在命令的末尾指定 **提交的校验和（或部分校验和）**:

```sh
git tag -a v1.2 9fceb02
```

可以看到你已经在那次提交上打上标签了：

```sh
git tag
# v0.1
# v1.2
# v1.3
# v1.4
# v1.4-lw
# v1.5

git show v1.2
# tag v1.2
# Tagger: Scott Chacon <schacon@gee-mail.com>
# Date:   Mon Feb 9 15:32:16 2009 -0800

# version 1.2
# commit 9fceb02d0ae598e95dc970b74767f19372d61af8
# Author: Magnus Chacon <mchacon@gee-mail.com>
# Date:   Sun Apr 27 20:43:35 2008 -0700

#     updated rakefile
# ...
```

## 共享标签

默认情况下，**git push 命令并不会传送标签到远程仓库服务器上**。 在创建完标签后你必须显式地推送标签到共享服务器上。 这个过程就像共享远程分支一样 – 你可以运行

```sh
git push origin [tagname]
```
```sh
git push origin v1.5
# Counting objects: 14, done.
# Delta compression using up to 8 threads.
# Compressing objects: 100% (12/12), done.
# Writing objects: 100% (14/14), 2.05 KiB | 0 bytes/s, done.
# Total 14 (delta 3), reused 0 (delta 0)
# To git@github.com:schacon/simplegit.git
#  * [new tag]         v1.5 -> v1.5
```

如果想要 **一次性推送很多标签**，也可以使用带有 `–tags` 选项的 `git push` 命令。 这将会把所有不在远程仓库服务器上的标签全部传送到那里。

```sh
git push origin --tags
# Counting objects: 1, done.
# Writing objects: 100% (1/1), 160 bytes | 0 bytes/s, done.
# Total 1 (delta 0), reused 0 (delta 0)
# To git@github.com:schacon/simplegit.git
#  * [new tag]         v1.4 -> v1.4
#  * [new tag]         v1.4-lw -> v1.4-lw
```

现在，当其他人从仓库中克隆或拉取，他们也能得到你的那些标签。

## 检出标签

**在 Git 中你并不能真的检出一个标签**，因为它们并不能像分支一样来回移动。 如果你想要工作目录与仓库中特定的标签版本完全一样，可以使用

```sh
git checkout -b [branchname] [tagname]
```

在特定的标签上创建一个新分支：

```sh
git checkout -b version2 v2.0.0
# Switched to a new branch 'version2'
```

当然，如果在这之后又进行了一次提交，version2 分支会因为改动向前移动了，那么 version2 分支就会和 v2.0.0 标签稍微有些不同，这时就应该当心了。
