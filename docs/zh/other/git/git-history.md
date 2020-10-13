# 查看提交历史

在提交了若干更新，又或者克隆了某个项目之后，你也许想回顾下提交历史。 完成这个任务最简单而又有效的工具是 git log 命令。

接下来的例子会用我专门用于演示的 simplegit 项目， 运行下面的命令获取该项目源代码：

```sh
git clone https://github.com/Aftersoil/Aftersoil-wiki.git
```

然后在此项目中运行 `git log`，应该会看到下面的输出：

```sh
git log
# commit ca82a6dff817ec66f44342007202690a93763949
# Author: Scott Chacon <schacon@gee-mail.com>
# Date:   Mon Mar 17 21:52:11 2008 -0700

#     changed the version number

# commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7
# Author: Scott Chacon <schacon@gee-mail.com>
# Date:   Sat Mar 15 16:40:33 2008 -0700

#     removed unnecessary test

# commit a11bef06a3f659402fe7563abf99ad00de2209e6
# Author: Scott Chacon <schacon@gee-mail.com>
# Date:   Sat Mar 15 10:31:28 2008 -0700

#     first commit
```

默认不用任何参数的话，`git log` 会按 **提交时间列出所有的更新**，最近的更新排在最上面。 正如你所看到的，这个命令会列出每个提交的 **SHA-1 校验和**、**作者的名字** 和 **电子邮件地址**、**提交时间** 以及 **提交说明**。

`git log` 有许多选项可以帮助你搜寻你所要找的提交， 接下来我们介绍些最常用的。

## 显示每次提交的内容差异 -p

一个常用的选项是 `-p`，用来 显示每次提交的内容差异。 你也可以加上 -2 来仅显示最近两次提交：

```sh
git log -p
# commit 39d89553de2765d7927d10d48b1386d858c35ebf (HEAD -> yuxin, origin/yuxin)
# Author: Thomasvader <lwmwll@163.com>
# Date:   Sun Oct 11 18:04:15 2020 +0800

#     add MarkDown docs

# diff --git a/docs/.vuepress/config.js b/docs/.vuepress/config.js
# index 087180d..19eb5fa 100644
# --- a/docs/.vuepress/config.js
# +++ b/docs/.vuepress/config.js
# @@ -125,7 +125,7 @@ module.exports = {
#            "/other/git/": [""],
#            "/other/pwa/": [""],
#            "/other/download/": ["", "Rear-end", "Other", "statement"],
# -          "/other/MarkDown/": ["", ],
# +          "/other/MarkDown/": ["", "md-title", "md-paragraph", "md-lists", "md-block", "md-code", "md-link", "md-image", "md-table", "md-advance"],
#            "/other/VScode/": ["", ],
#          }
#        },
# @@ -175,7 +175,7 @@ module.exports = {
#            "/zh/other/git/": [""],
#            "/zh/other/pwa/": [""],
#            "/zh/other/download/": ["", "Rear-end", "Other", "statement"],
# -          "/zh/other/MarkDown/": ["", ],
# +          "/zh/other/MarkDown/": ["", "md-title", "md-paragraph", "md-lists", "md-block", "md-code", "md-link", "md-image", "md-table", "md-advance"],
#            "/zh/other/VScode/": ["", ],
#          }
# :
```

该选项除了显示基本信息之外，还附带了 **每次 commit 的变化**。 当进行代码审查，或者快速浏览某个搭档提交的 commit 所带来的变化的时候，这个参数就非常有用了.

## 显示简略的统计信息 --stat

你也可以为 `git log` 附带一系列的总结性选项。 比如说，如果你想看到每次提交的 简略的统计信息，你可以使用 `--stat` 选项：

```sh
git log --stat
# commit 39d89553de2765d7927d10d48b1386d858c35ebf (HEAD -> yuxin, origin/yuxin)
# Author: Thomasvader <lwmwll@163.com>
# Date:   Sun Oct 11 18:04:15 2020 +0800

#     add MarkDown docs

#  docs/.vuepress/config.js               |  4 +-
#  docs/Aftersoil/README.md               | 38 ++------------
#  docs/other/MarkDown/README.md          | 28 ++++++++++-
#  docs/other/MarkDown/md-advance.md      |  1 +
#  docs/other/MarkDown/md-block.md        | 53 ++++++++++++++++++++
#  docs/other/MarkDown/md-code.md         | 25 +++++++++
#  docs/other/MarkDown/md-image.md        | 40 +++++++++++++++
#  docs/other/MarkDown/md-link.md         | 40 +++++++++++++++
#  docs/other/MarkDown/md-lists.md        | 53 ++++++++++++++++++++
#  docs/zh/other/MarkDown/md-lists.md     | 53 ++++++++++++++++++++
#  docs/zh/other/MarkDown/md-paragraph.md | 92 ++++++++++++++++++++++++++++++++++
#  docs/zh/other/MarkDown/md-table.md     | 30 +++++++++++
#  docs/zh/other/MarkDown/md-title.md     | 36 +++++++++++++
# :
```

正如你所看到的，`–-stat` 选项在每次提交的下面 **列出额所有被修改过的文件**、**有多少文件被修改了以及被修改过的文件的哪些行被移除或是添加了**。 在每次提交的最后还有一个总结。

## 以不同格式展示历史信息 --pretty

另外一个常用的选项是 `–pretty`。 这个选项可以指定使用不同于默认格式的方式展示提交历史。 这个选项有一些内建的子选项供你使用。 比如用 `oneline` 将每个提交放在一行显示，查看的提交数很大时非常有用。 另外还有 `short，full` 和 `fuller` 可以用，展示的信息或多或少有些不同，请自己动手实践一下看看效果如何。

```sh
git log --pretty=oneline
# 39d89553de2765d7927d10d48b1386d858c35ebf (HEAD -> yuxin, origin/yuxin) add MarkDown docs
# bc0bbdbbe78d18a2e4d729f3b3ac8844d3f046ab (origin/lpy) update package.json
# 521f52b8b8725a37ae4f392efa602b56b8c09c59 Merge branch 'master' of https://github.com/Aftersoil/Aftersoil-wiki into lpy
# f31a37a438bd2745905c094c9eaef54e96bb8f73 (origin/master, origin/HEAD) Merge pull request #45 from Aftersoil/yuxin
# 0b2a0cfea0e2ff24a949f467f3c7e22e08af418f Merge pull request #44 from Aftersoil/yuxin
# 434c7e44ec5f9828c10863b185e6545c524dbf10 New image function, download statement, fix some bugs.
# fe96f9aebfaa070c8bc1295c4ddad78659244131 Create stale.yml
# 9e2331df637c4a7988594e52ede717e36866e953 Create .travis.yml
# 80cd5be22cdf0afa5cdfbaa000497011c946f6c9 After the ajax document is added, it will continue to be updated to enhance the:
```

但最有意思的是 **format，可以定制要显示的记录格式。** 这样的输出对后期提取分析格外有用 — 因为你知道输出的格式不会随着 Git 的更新而发生改变：

```sh
git log --pretty=format:"%h - %an, %ar : %s"
# 39d8955 - Thomasvader, 2 days ago : add MarkDown docs
# bc0bbdb - kiven, 3 days ago : update package.json
# 521f52b - kiven, 3 days ago : Merge branch 'master' of https://github.com/Aftersoil/Aftersoil-wiki into lpy
# c6a1dfd - kiven, 3 days ago : New! Add AftersoilQR code
# f31a37a - Thomas vader, 4 days ago : Merge pull request #45 from Aftersoil/yuxin
# eebce22 - Thomasvader, 4 days ago : Change theme color.
```

下表列出了常用的格式占位符写法及其代表的意义：

| 选项 | 说明 |
| :---: | :---: |
| %H | 提交对象（commit）的完整哈希字串 |
| %h | 提交对象的简短哈希字串 |
| %T | 树对象（tree）的完整哈希字串 |
| %t | 树对象的简短哈希字串 |
| %P | 父对象（parent）的完整哈希字串 |
| %p | 父对象的简短哈希字串 |
| %an | 作者（author）的名字 |
| %ae | 作者的电子邮件地址 |
| %ad | 作者修订日期（可以用 –date= 选项定制格式） |
| %ar | 作者修订日期，按多久以前的方式显示 |
| %cn | 提交者（committer）的名字 |
| %ce | 提交者的电子邮件地址 |
| %cd | 提交日期 |
| %cr | 提交日期，按多久以前的方式显示 |
| %s | 提交说明 |

你一定奇怪 作者 和 提交者 之间究竟有何差别， 其实作者指的是实际作出修改的人，提交者指的是最后将此工作成果提交到仓库的人。 所以，当你为某个项目发布补丁，然后某个核心成员将你的补丁并入项目时，你就是作者，而那个核心成员就是提交者。 我们会在 [分布式 Git](https://git-scm.com/book/zh/v2/%E5%88%86%E5%B8%83%E5%BC%8F-Git-%E5%88%86%E5%B8%83%E5%BC%8F%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B) 再详细介绍两者之间的细微差别

## 使用 ASCII 字符串来形象地展示你的分支、合并历史 –-graph

当 `oneline` 或 `format` 与另一个 `log` 选项 `–graph` 结合使用时尤其有用。 这个选项添加了一些 `ASCII` 字符串来形象地展示你的分支、合并历史：

```sh
git log --pretty=format:"%h %s" --graph
* 39d8955 add MarkDown docs
* bc0bbdb update package.json
*   521f52b Merge branch 'master' of https://github.com/Aftersoil/Aftersoil-wiki into lpy
|\
| *   f31a37a Merge pull request #45 from Aftersoil/yuxin
| |\
| | * eebce22 Change theme color.
| * | 0b2a0cf Merge pull request #44 from Aftersoil/yuxin
| |\|
| | * 434c7e4 New image function, download statement, fix some bugs.
| |/
| * fe96f9a Create stale.yml
| * 9e2331d Create .travis.yml
| *   21a3f66 Merge pull request #42 from Aftersoil/yuxin
| |\
| | * 852f2b3 update test
| | * e7468de update svg hover transitio
| * | 8c9b4c8 Merge pull request #41 from Aftersoil/yuxin
| |\|
| | * 0ee2b55 add zh CSS
| | * a718825 Repair CSS, add literature
| * |   c673ecd Merge pull request #40 from Aftersoil/yuxin
| |\ \
| * \ \   a0ca995 Merge pull request #37 from Aftersoil/yuxin
| |\ \ \
| * \ \ \   6b73d23 Merge pull request #36 from Aftersoil/yuxin
| |\ \ \ \
| * \ \ \ \   562ee50 Merge pull request #35 from Aftersoil/yuxin
| |\ \ \ \ \
:
```

这种输出类型会在我们下一章学完分支与合并以后变得更加有趣。

## 常用选项汇总

以上只是简单介绍了一些 `git log` 命令支持的选项。下面列出了我们目前涉及到的和没涉及到的选项，以及它们是如何影响 log 命令的输出的：

| 选项 | 说明 |
| :---: | :---: |
| -p | 按补丁格式显示每个更新之间的差异。 |
| -stat | 显示每次更新的文件修改统计信息。 |
| -shortstat | 只显示 –stat 中最后的行数修改添加移除统计 |
| -name-only | 仅在提交信息后显示已修改的文件清单。 |
| -name-status | 显示新增、修改、删除的文件清单。 |
| -abbrev-commit | 仅显示 SHA-1 的前几个字符，而非所有的 40 个字符。串 |
| -relative-date | 使用较短的相对时间显示（比如，“2 weeks ago”）。 |
| -graph | 显示 ASCII 图形表示的分支合并历史。 |
| -pretty | 使用其他格式显示历史提交信息。可用的选项包括 oneline，short，full，fuller 和 format（后跟指定格式） |

## 限制输出长度

除了定制输出格式的选项之外，`git log` 还有许多非常实用的限制输出长度的选项，也就是 **只输出部分提交信息**。 之前你已经看到过 -2 了，它只显示最近的两条提交， 实际上，这是 `-<n>` 选项的写法，其中的 n 可以是任何整数，表示仅显示最近的若干条提交。 不过实践中我们是不太用这个选项的，Git 在输出所有提交时会自动调用分页程序，所以你一次只会看到一页的内容。

另外还有 **按照时间作限制** 的选项，比如 –since 和 –until 也很有用。 例如，下面的命令列出所有最近两周内的提交：

```sh
git log --since=2.weeks
```

这个命令可以在多种格式下工作，比如说具体的 **某一天** “2008-01-15″，或者是 **相对地多久以前** “2 years 1 day 3 minutes ago”。

还可以给出若干搜索条件，列出符合的提交。 用 `–author` 选项显示指定作者的提交，用 `–grep` 选项搜索提交说明中的关键字。 （请注意，如果要得到同时满足这两个选项搜索条件的提交，就必须用 `–all-match` 选项。否则，满足任意一个条件的提交都会被匹配出来）

另一个非常有用的筛选选项是 -S，可以列出那些添加或移除了某些字符串的提交。 比如说，你想找出添加或移除了某一个特定函数的引用的提交，你可以这样使用：

```sh
git log -Sfunction_name
````

最后一个很实用的 `git log` 选项是路径（path）， 如果只关心某些文件或者目录的历史提交，可以在 `git log` 选项的最后指定它们的路径。 因为是放在最后位置上的选项，所以用两个短划线（–）隔开之前的选项和后面限定的路径名。

下面是限制输出长度的常用选项：

| 选项 | 说明 |
| :---: | :---: |
| -(n) | 仅显示最近的 n 条提交 |
| –since, –after | 仅显示指定时间之后的提交。 |
| –until, –before	 | 仅显示指定时间之前的提交。 |
| –author | 仅显示指定作者相关的提交。 |
| –author | 仅显示指定提交者相关的提交。 |
| –grep | 仅显示含指定关键字的提交 |
| -S | 仅显示添加或移除了某个关键字的提交 |

来看一个实际的例子，如果要查看 Git 仓库中，2008 年 10 月期间，Junio Hamano 提交的但未合并的测试文件，可以用下面的查询命令：

```sh
git log --pretty="%h - %s" --author=gitster --since="220-10-01"    --before="2020-10-10" --no-merges -- t/
```

## 总结

- `git log` 按提交时间列出所有的更新，最近的更新排在最上面（倒序）
- `-p`：显示每次提交的内容差异
- `-数字`：显示最近 n 次提交
- `--stat`：简略统计信息
  - 在每次提交的下面 **列出额所有被修改过的文件、有多少文件被修改了以及被修改过的文件的哪些行被移除或是添加了**。 在每次提交的**最后还有一个总结**
- --pretty：使用不同格式展示提交历史
  - `oneline`：将每个提交放在一行显示，查看的提交数很大时非常有用；显示 commit id、提交的备注信息
  - `short`：显示 `commit id`、`author`、提交的备注信息
  - `full` ：显示 `commit id`、`author`、`commit`、提交的备注信息
  - `fuller` ：显示 `commit id`、`author`、`authorDate`、`commit`、`commitDate`、提交的备注信息
  - `format`：自定义显示格式
