(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{479:function(t,e,a){"use strict";a.r(e);var s=a(14),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"查看提交历史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看提交历史"}},[t._v("#")]),t._v(" 查看提交历史")]),t._v(" "),a("p",[t._v("在提交了若干更新，又或者克隆了某个项目之后，你也许想回顾下提交历史。 完成这个任务最简单而又有效的工具是 git log 命令。")]),t._v(" "),a("p",[t._v("接下来的例子会用我专门用于演示的 simplegit 项目， 运行下面的命令获取该项目源代码：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/Aftersoil/Aftersoil-wiki.git\n")])])]),a("p",[t._v("然后在此项目中运行 "),a("code",[t._v("git log")]),t._v("，应该会看到下面的输出：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# commit ca82a6dff817ec66f44342007202690a93763949")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Author: Scott Chacon <schacon@gee-mail.com>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Date:   Mon Mar 17 21:52:11 2008 -0700")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     changed the version number")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# commit 085bb3bcb608e1e8451d4b2432f8ecbe6306e7e7")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Author: Scott Chacon <schacon@gee-mail.com>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Date:   Sat Mar 15 16:40:33 2008 -0700")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     removed unnecessary test")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# commit a11bef06a3f659402fe7563abf99ad00de2209e6")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Author: Scott Chacon <schacon@gee-mail.com>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Date:   Sat Mar 15 10:31:28 2008 -0700")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     first commit")]),t._v("\n")])])]),a("p",[t._v("默认不用任何参数的话，"),a("code",[t._v("git log")]),t._v(" 会按 "),a("strong",[t._v("提交时间列出所有的更新")]),t._v("，最近的更新排在最上面。 正如你所看到的，这个命令会列出每个提交的 "),a("strong",[t._v("SHA-1 校验和")]),t._v("、"),a("strong",[t._v("作者的名字")]),t._v(" 和 "),a("strong",[t._v("电子邮件地址")]),t._v("、"),a("strong",[t._v("提交时间")]),t._v(" 以及 "),a("strong",[t._v("提交说明")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("git log")]),t._v(" 有许多选项可以帮助你搜寻你所要找的提交， 接下来我们介绍些最常用的。")]),t._v(" "),a("h2",{attrs:{id:"显示每次提交的内容差异-p"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示每次提交的内容差异-p"}},[t._v("#")]),t._v(" 显示每次提交的内容差异 -p")]),t._v(" "),a("p",[t._v("一个常用的选项是 "),a("code",[t._v("-p")]),t._v("，用来 显示每次提交的内容差异。 你也可以加上 -2 来仅显示最近两次提交：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -p\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# commit 39d89553de2765d7927d10d48b1386d858c35ebf (HEAD -> yuxin, origin/yuxin)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Author: Thomasvader <lwmwll@163.com>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Date:   Sun Oct 11 18:04:15 2020 +0800")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     add MarkDown docs")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# diff --git a/docs/.vuepress/config.js b/docs/.vuepress/config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# index 087180d..19eb5fa 100644")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# --- a/docs/.vuepress/config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# +++ b/docs/.vuepress/config.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @@ -125,7 +125,7 @@ module.exports = {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#            "/other/git/": [""],')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#            "/other/pwa/": [""],')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#            "/other/download/": ["", "Rear-end", "Other", "statement"],')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# -          "/other/MarkDown/": ["", ],')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# +          "/other/MarkDown/": ["", "md-title", "md-paragraph", "md-lists", "md-block", "md-code", "md-link", "md-image", "md-table", "md-advance"],')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#            "/other/VScode/": ["", ],')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#          }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#        },")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# @@ -175,7 +175,7 @@ module.exports = {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#            "/zh/other/git/": [""],')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#            "/zh/other/pwa/": [""],')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#            "/zh/other/download/": ["", "Rear-end", "Other", "statement"],')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# -          "/zh/other/MarkDown/": ["", ],')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# +          "/zh/other/MarkDown/": ["", "md-title", "md-paragraph", "md-lists", "md-block", "md-code", "md-link", "md-image", "md-table", "md-advance"],')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#            "/zh/other/VScode/": ["", ],')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#          }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# :")]),t._v("\n")])])]),a("p",[t._v("该选项除了显示基本信息之外，还附带了 "),a("strong",[t._v("每次 commit 的变化")]),t._v("。 当进行代码审查，或者快速浏览某个搭档提交的 commit 所带来的变化的时候，这个参数就非常有用了.")]),t._v(" "),a("h2",{attrs:{id:"显示简略的统计信息-stat"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#显示简略的统计信息-stat"}},[t._v("#")]),t._v(" 显示简略的统计信息 --stat")]),t._v(" "),a("p",[t._v("你也可以为 "),a("code",[t._v("git log")]),t._v(" 附带一系列的总结性选项。 比如说，如果你想看到每次提交的 简略的统计信息，你可以使用 "),a("code",[t._v("--stat")]),t._v(" 选项：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --stat\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# commit 39d89553de2765d7927d10d48b1386d858c35ebf (HEAD -> yuxin, origin/yuxin)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Author: Thomasvader <lwmwll@163.com>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Date:   Sun Oct 11 18:04:15 2020 +0800")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     add MarkDown docs")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  docs/.vuepress/config.js               |  4 +-")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  docs/Aftersoil/README.md               | 38 ++------------")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  docs/other/MarkDown/README.md          | 28 ++++++++++-")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  docs/other/MarkDown/md-advance.md      |  1 +")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  docs/other/MarkDown/md-block.md        | 53 ++++++++++++++++++++")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  docs/other/MarkDown/md-code.md         | 25 +++++++++")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  docs/other/MarkDown/md-image.md        | 40 +++++++++++++++")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  docs/other/MarkDown/md-link.md         | 40 +++++++++++++++")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  docs/other/MarkDown/md-lists.md        | 53 ++++++++++++++++++++")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  docs/zh/other/MarkDown/md-lists.md     | 53 ++++++++++++++++++++")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  docs/zh/other/MarkDown/md-paragraph.md | 92 ++++++++++++++++++++++++++++++++++")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  docs/zh/other/MarkDown/md-table.md     | 30 +++++++++++")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  docs/zh/other/MarkDown/md-title.md     | 36 +++++++++++++")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# :")]),t._v("\n")])])]),a("p",[t._v("正如你所看到的，"),a("code",[t._v("–-stat")]),t._v(" 选项在每次提交的下面 "),a("strong",[t._v("列出额所有被修改过的文件")]),t._v("、"),a("strong",[t._v("有多少文件被修改了以及被修改过的文件的哪些行被移除或是添加了")]),t._v("。 在每次提交的最后还有一个总结。")]),t._v(" "),a("h2",{attrs:{id:"以不同格式展示历史信息-pretty"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以不同格式展示历史信息-pretty"}},[t._v("#")]),t._v(" 以不同格式展示历史信息 --pretty")]),t._v(" "),a("p",[t._v("另外一个常用的选项是 "),a("code",[t._v("–pretty")]),t._v("。 这个选项可以指定使用不同于默认格式的方式展示提交历史。 这个选项有一些内建的子选项供你使用。 比如用 "),a("code",[t._v("oneline")]),t._v(" 将每个提交放在一行显示，查看的提交数很大时非常有用。 另外还有 "),a("code",[t._v("short，full")]),t._v(" 和 "),a("code",[t._v("fuller")]),t._v(" 可以用，展示的信息或多或少有些不同，请自己动手实践一下看看效果如何。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 39d89553de2765d7927d10d48b1386d858c35ebf (HEAD -> yuxin, origin/yuxin) add MarkDown docs")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bc0bbdbbe78d18a2e4d729f3b3ac8844d3f046ab (origin/lpy) update package.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 521f52b8b8725a37ae4f392efa602b56b8c09c59 Merge branch 'master' of https://github.com/Aftersoil/Aftersoil-wiki into lpy")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# f31a37a438bd2745905c094c9eaef54e96bb8f73 (origin/master, origin/HEAD) Merge pull request #45 from Aftersoil/yuxin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 0b2a0cfea0e2ff24a949f467f3c7e22e08af418f Merge pull request #44 from Aftersoil/yuxin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 434c7e44ec5f9828c10863b185e6545c524dbf10 New image function, download statement, fix some bugs.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# fe96f9aebfaa070c8bc1295c4ddad78659244131 Create stale.yml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 9e2331df637c4a7988594e52ede717e36866e953 Create .travis.yml")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 80cd5be22cdf0afa5cdfbaa000497011c946f6c9 After the ajax document is added, it will continue to be updated to enhance the:")]),t._v("\n")])])]),a("p",[t._v("但最有意思的是 "),a("strong",[t._v("format，可以定制要显示的记录格式。")]),t._v(" 这样的输出对后期提取分析格外有用 — 因为你知道输出的格式不会随着 Git 的更新而发生改变：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("format:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%h - %an, %ar : %s"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 39d8955 - Thomasvader, 2 days ago : add MarkDown docs")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bc0bbdb - kiven, 3 days ago : update package.json")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 521f52b - kiven, 3 days ago : Merge branch 'master' of https://github.com/Aftersoil/Aftersoil-wiki into lpy")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# c6a1dfd - kiven, 3 days ago : New! Add AftersoilQR code")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# f31a37a - Thomas vader, 4 days ago : Merge pull request #45 from Aftersoil/yuxin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# eebce22 - Thomasvader, 4 days ago : Change theme color.")]),t._v("\n")])])]),a("p",[t._v("下表列出了常用的格式占位符写法及其代表的意义：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%H")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("提交对象（commit）的完整哈希字串")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%h")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("提交对象的简短哈希字串")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%T")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("树对象（tree）的完整哈希字串")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%t")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("树对象的简短哈希字串")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%P")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("父对象（parent）的完整哈希字串")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%p")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("父对象的简短哈希字串")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%an")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("作者（author）的名字")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%ae")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("作者的电子邮件地址")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%ad")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("作者修订日期（可以用 –date= 选项定制格式）")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%ar")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("作者修订日期，按多久以前的方式显示")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%cn")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("提交者（committer）的名字")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%ce")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("提交者的电子邮件地址")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%cd")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("提交日期")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%cr")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("提交日期，按多久以前的方式显示")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("%s")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("提交说明")])])])]),t._v(" "),a("p",[t._v("你一定奇怪 作者 和 提交者 之间究竟有何差别， 其实作者指的是实际作出修改的人，提交者指的是最后将此工作成果提交到仓库的人。 所以，当你为某个项目发布补丁，然后某个核心成员将你的补丁并入项目时，你就是作者，而那个核心成员就是提交者。 我们会在 "),a("a",{attrs:{href:"https://git-scm.com/book/zh/v2/%E5%88%86%E5%B8%83%E5%BC%8F-Git-%E5%88%86%E5%B8%83%E5%BC%8F%E5%B7%A5%E4%BD%9C%E6%B5%81%E7%A8%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("分布式 Git"),a("OutboundLink")],1),t._v(" 再详细介绍两者之间的细微差别")]),t._v(" "),a("h2",{attrs:{id:"使用-ascii-字符串来形象地展示你的分支、合并历史-graph"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-ascii-字符串来形象地展示你的分支、合并历史-graph"}},[t._v("#")]),t._v(" 使用 ASCII 字符串来形象地展示你的分支、合并历史 –-graph")]),t._v(" "),a("p",[t._v("当 "),a("code",[t._v("oneline")]),t._v(" 或 "),a("code",[t._v("format")]),t._v(" 与另一个 "),a("code",[t._v("log")]),t._v(" 选项 "),a("code",[t._v("–graph")]),t._v(" 结合使用时尤其有用。 这个选项添加了一些 "),a("code",[t._v("ASCII")]),t._v(" 字符串来形象地展示你的分支、合并历史：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("format:"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%h %s"')]),t._v(" --graph\n* 39d8955 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" MarkDown docs\n* bc0bbdb update package.json\n*   521f52b Merge branch "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'master'")]),t._v(" of https://github.com/Aftersoil/Aftersoil-wiki into lpy\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" *   f31a37a Merge pull request "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#45 from Aftersoil/yuxin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" * eebce22 Change theme color.\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" * "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 0b2a0cf Merge pull request "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#44 from Aftersoil/yuxin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" * 434c7e4 New image function, download statement, fix some bugs.\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("/\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" * fe96f9a Create stale.yml\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" * 9e2331d Create .travis.yml\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" *   21a3f66 Merge pull request "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#42 from Aftersoil/yuxin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" * 852f2b3 update "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" * e7468de update svg hover transitio\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" * "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" 8c9b4c8 Merge pull request "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#41 from Aftersoil/yuxin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" * 0ee2b55 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" zh CSS\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" * a718825 Repair CSS, "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" literature\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" * "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("   c673ecd Merge pull request "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#40 from Aftersoil/yuxin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("   a0ca995 Merge pull request "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#37 from Aftersoil/yuxin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("   6b73d23 Merge pull request "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#36 from Aftersoil/yuxin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" * "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("   562ee50 Merge pull request "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#35 from Aftersoil/yuxin")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v("\n")])])]),a("p",[t._v("这种输出类型会在我们下一章学完分支与合并以后变得更加有趣。")]),t._v(" "),a("h2",{attrs:{id:"常用选项汇总"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用选项汇总"}},[t._v("#")]),t._v(" 常用选项汇总")]),t._v(" "),a("p",[t._v("以上只是简单介绍了一些 "),a("code",[t._v("git log")]),t._v(" 命令支持的选项。下面列出了我们目前涉及到的和没涉及到的选项，以及它们是如何影响 log 命令的输出的：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-p")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("按补丁格式显示每个更新之间的差异。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-stat")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("显示每次更新的文件修改统计信息。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-shortstat")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("只显示 –stat 中最后的行数修改添加移除统计")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-name-only")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("仅在提交信息后显示已修改的文件清单。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-name-status")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("显示新增、修改、删除的文件清单。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-abbrev-commit")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("仅显示 SHA-1 的前几个字符，而非所有的 40 个字符。串")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-relative-date")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用较短的相对时间显示（比如，“2 weeks ago”）。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-graph")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("显示 ASCII 图形表示的分支合并历史。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-pretty")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("使用其他格式显示历史提交信息。可用的选项包括 oneline，short，full，fuller 和 format（后跟指定格式）")])])])]),t._v(" "),a("h2",{attrs:{id:"限制输出长度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#限制输出长度"}},[t._v("#")]),t._v(" 限制输出长度")]),t._v(" "),a("p",[t._v("除了定制输出格式的选项之外，"),a("code",[t._v("git log")]),t._v(" 还有许多非常实用的限制输出长度的选项，也就是 "),a("strong",[t._v("只输出部分提交信息")]),t._v("。 之前你已经看到过 -2 了，它只显示最近的两条提交， 实际上，这是 "),a("code",[t._v("-<n>")]),t._v(" 选项的写法，其中的 n 可以是任何整数，表示仅显示最近的若干条提交。 不过实践中我们是不太用这个选项的，Git 在输出所有提交时会自动调用分页程序，所以你一次只会看到一页的内容。")]),t._v(" "),a("p",[t._v("另外还有 "),a("strong",[t._v("按照时间作限制")]),t._v(" 的选项，比如 –since 和 –until 也很有用。 例如，下面的命令列出所有最近两周内的提交：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --since"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".weeks\n")])])]),a("p",[t._v("这个命令可以在多种格式下工作，比如说具体的 "),a("strong",[t._v("某一天")]),t._v(" “2008-01-15″，或者是 "),a("strong",[t._v("相对地多久以前")]),t._v(" “2 years 1 day 3 minutes ago”。")]),t._v(" "),a("p",[t._v("还可以给出若干搜索条件，列出符合的提交。 用 "),a("code",[t._v("–author")]),t._v(" 选项显示指定作者的提交，用 "),a("code",[t._v("–grep")]),t._v(" 选项搜索提交说明中的关键字。 （请注意，如果要得到同时满足这两个选项搜索条件的提交，就必须用 "),a("code",[t._v("–all-match")]),t._v(" 选项。否则，满足任意一个条件的提交都会被匹配出来）")]),t._v(" "),a("p",[t._v("另一个非常有用的筛选选项是 -S，可以列出那些添加或移除了某些字符串的提交。 比如说，你想找出添加或移除了某一个特定函数的引用的提交，你可以这样使用：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -Sfunction_name\n")])])]),a("p",[t._v("最后一个很实用的 "),a("code",[t._v("git log")]),t._v(" 选项是路径（path）， 如果只关心某些文件或者目录的历史提交，可以在 "),a("code",[t._v("git log")]),t._v(" 选项的最后指定它们的路径。 因为是放在最后位置上的选项，所以用两个短划线（–）隔开之前的选项和后面限定的路径名。")]),t._v(" "),a("p",[t._v("下面是限制输出长度的常用选项：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("选项")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("说明")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-(n)")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("仅显示最近的 n 条提交")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("–since, –after")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("仅显示指定时间之后的提交。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("–until, –before")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("仅显示指定时间之前的提交。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("–author")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("仅显示指定作者相关的提交。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("–author")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("仅显示指定提交者相关的提交。")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("–grep")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("仅显示含指定关键字的提交")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("-S")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("仅显示添加或移除了某个关键字的提交")])])])]),t._v(" "),a("p",[t._v("来看一个实际的例子，如果要查看 Git 仓库中，2008 年 10 月期间，Junio Hamano 提交的但未合并的测试文件，可以用下面的查询命令：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"%h - %s"')]),t._v(" --author"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("gitster --since"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"220-10-01"')]),t._v("    --before"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2020-10-10"')]),t._v(" --no-merges -- t/\n")])])]),a("h2",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("git log")]),t._v(" 按提交时间列出所有的更新，最近的更新排在最上面（倒序）")]),t._v(" "),a("li",[a("code",[t._v("-p")]),t._v("：显示每次提交的内容差异")]),t._v(" "),a("li",[a("code",[t._v("-数字")]),t._v("：显示最近 n 次提交")]),t._v(" "),a("li",[a("code",[t._v("--stat")]),t._v("：简略统计信息\n"),a("ul",[a("li",[t._v("在每次提交的下面 "),a("strong",[t._v("列出额所有被修改过的文件、有多少文件被修改了以及被修改过的文件的哪些行被移除或是添加了")]),t._v("。 在每次提交的"),a("strong",[t._v("最后还有一个总结")])])])]),t._v(" "),a("li",[t._v("--pretty：使用不同格式展示提交历史\n"),a("ul",[a("li",[a("code",[t._v("oneline")]),t._v("：将每个提交放在一行显示，查看的提交数很大时非常有用；显示 commit id、提交的备注信息")]),t._v(" "),a("li",[a("code",[t._v("short")]),t._v("：显示 "),a("code",[t._v("commit id")]),t._v("、"),a("code",[t._v("author")]),t._v("、提交的备注信息")]),t._v(" "),a("li",[a("code",[t._v("full")]),t._v(" ：显示 "),a("code",[t._v("commit id")]),t._v("、"),a("code",[t._v("author")]),t._v("、"),a("code",[t._v("commit")]),t._v("、提交的备注信息")]),t._v(" "),a("li",[a("code",[t._v("fuller")]),t._v(" ：显示 "),a("code",[t._v("commit id")]),t._v("、"),a("code",[t._v("author")]),t._v("、"),a("code",[t._v("authorDate")]),t._v("、"),a("code",[t._v("commit")]),t._v("、"),a("code",[t._v("commitDate")]),t._v("、提交的备注信息")]),t._v(" "),a("li",[a("code",[t._v("format")]),t._v("：自定义显示格式")])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);