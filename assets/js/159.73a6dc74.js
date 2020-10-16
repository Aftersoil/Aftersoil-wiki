(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{490:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"打标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#打标签"}},[t._v("#")]),t._v(" 打标签")]),t._v(" "),a("p",[t._v("像其他版本控制系统（VCS）一样，Git 可以给 "),a("strong",[t._v("历史中的某一个提交")]),t._v(" 打上标签，以示重要。 比较有代表性的是人们会使用这个功能来标记发布结点（v1.0 等等）。 在本节中，你将会学习如何列出已有的标签、如何创建新标签、以及不同类型的标签分别是什么。")]),t._v(" "),a("h2",{attrs:{id:"列出标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列出标签"}},[t._v("#")]),t._v(" 列出标签")]),t._v(" "),a("p",[t._v("在 Git 中列出已有的标签是非常简单直观的。 只需要输入 git tag：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v0.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.3")]),t._v("\n")])])]),a("p",[t._v("这个命令以字母顺序列出标签；但是它们出现的顺序并不重要。")]),t._v(" "),a("p",[t._v("你也可以使用特定的模式查找标签。 例如，Git 自身的源代码仓库包含标签的数量超过 500 个。 如果只对 1.8.5 系列感兴趣，可以运行：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -l "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'v1.8.5*'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.8.5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.8.5-rc0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.8.5-rc1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.8.5-rc2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.8.5-rc3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.8.5.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.8.5.2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.8.5.3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.8.5.4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.8.5.5")]),t._v("\n")])])]),a("p",[t._v("上面这种就是左前缀模糊搜索")]),t._v(" "),a("h2",{attrs:{id:"创建标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#创建标签"}},[t._v("#")]),t._v(" 创建标签")]),t._v(" "),a("p",[t._v("Git 使用两种主要类型的标签：")]),t._v(" "),a("ul",[a("li",[t._v("轻量标签（lightweight）")]),t._v(" "),a("li",[t._v("附注标签（annotated）")])]),t._v(" "),a("p",[t._v("一个轻量标签很像一个不会改变的分支 – 它只是一个 "),a("strong",[t._v("特定提交的引用")]),t._v("。")]),t._v(" "),a("p",[t._v("然而，附注标签是存储在 Git 数据库中的一个完整对象。 它们是可以被校验的；其中包含打标签者的名字、电子邮件地址、日期时间；还有一个标签信息；并且可以使用 GNU Privacy Guard （GPG）签名与验证。 通常建议创建附注标签，这样你可以拥有以上所有信息；但是如果你只是想用一个临时的标签，或者因为某些原因不想要保存那些信息，轻量标签也是可用的。")]),t._v(" "),a("h2",{attrs:{id:"附注标签-tag-a"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附注标签-tag-a"}},[t._v("#")]),t._v(" 附注标签（"),a("code",[t._v("tag -a")]),t._v("）")]),t._v(" "),a("p",[t._v("在 Git 中创建一个附注标签是很简单的。 最简单的方式是当你在运行 tag 命令时指定 -a 选项：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -a v1.4 -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'my version 1.4'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v0.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.4")]),t._v("\n")])])]),a("p",[a("code",[t._v("-m")]),t._v(" 选项指定了一条将会存储在标签中的信息。 如果没有为附注标签指定一条信息，Git 会运行编辑器要求你输入信息。")]),t._v(" "),a("p",[t._v("通过使用 "),a("code",[t._v("git show")]),t._v(" 命令可以看到标签信息与对应的提交信息：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show v1.4\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tag v1.4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Tagger: Ben Straub <ben@straub.cc>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Date:   Sat May 3 20:19:12 2014 -0700")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# my version 1.4")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# commit ca82a6dff817ec66f44342007202690a93763949")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Author: Scott Chacon <schacon@gee-mail.com>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Date:   Mon Mar 17 21:52:11 2008 -0700")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     changed the version number")]),t._v("\n")])])]),a("p",[t._v("输出显示了打标签者的信息、打标签的日期时间、附注信息，然后显示具体的提交信息。")]),t._v(" "),a("h2",{attrs:{id:"轻量标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#轻量标签"}},[t._v("#")]),t._v(" 轻量标签")]),t._v(" "),a("p",[t._v("另一种给提交打标签的方式是使用轻量标签。 轻量标签本质上是将提交校验和存储到一个文件中 – 没有保存任何其他信息。 创建轻量标签，不需要使用 "),a("code",[t._v("-a")]),t._v("、"),a("code",[t._v("-s")]),t._v(" 或 "),a("code",[t._v("-m")]),t._v(" 选项，只需要提供标签名字：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag v1.4-lw\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v0.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.4-lw")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.5")]),t._v("\n")])])]),a("p",[t._v("这时，如果在标签上运行 "),a("code",[t._v("git show")]),t._v("，你不会看到额外的标签信息。 命令只会显示出提交信息：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show v1.4-lw\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# commit ca82a6dff817ec66f44342007202690a93763949")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Author: Scott Chacon <schacon@gee-mail.com>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Date:   Mon Mar 17 21:52:11 2008 -0700")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     changed the version number")]),t._v("\n")])])]),a("h2",{attrs:{id:"后期打标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#后期打标签"}},[t._v("#")]),t._v(" 后期打标签")]),t._v(" "),a("p",[t._v("你也可以对过去的提交打标签。 假设提交历史是这样的：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log --pretty"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("oneline\n39d89553de2765d7927d10d48b1386d858c35ebf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("HEAD -"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" yuxin, origin/yuxin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" MarkDown docs\nbc0bbdbbe78d18a2e4d729f3b3ac8844d3f046ab "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("origin/lpy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" update package.json\n521f52b8b8725a37ae4f392efa602b56b8c09c59 Merge branch "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'master'")]),t._v(" of https://github.com/Aftersoil/Aftersoil-wiki into lpy\nc6a1dfd8fd6c25de9c99a03bca34f57fe3ab4e98 New"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v(" Add AftersoilQR code\nf31a37a438bd2745905c094c9eaef54e96bb8f73 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("origin/master, origin/HEAD"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Merge pull request "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#45 from Aftersoil/yuxin")]),t._v("\neebce220022a7baba4faf2f5d8ceaf70d29bcc75 Change theme color.\n0b2a0cfea0e2ff24a949f467f3c7e22e08af418f Merge pull request "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#44 from Aftersoil/yuxin")]),t._v("\n434c7e44ec5f9828c10863b185e6545c524dbf10 New image function, download statement, fix some bugs.\nfe96f9aebfaa070c8bc1295c4ddad78659244131 Create stale.yml\n9e2331df637c4a7988594e52ede717e36866e953 Create .travis.yml\n21a3f664730696aa3dafbe40793b9f750bba0aa1 Merge pull request "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#42 from Aftersoil/yuxin")]),t._v("\n852f2b32fc5ee512dccf481a25fc5bae52af0a5d update "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\ne7468de383d3fb393286e772af7085518bc932d7 update svg hover transitio\n")])])]),a("p",[t._v("现在，假设在 v1.2 时你忘记给项目打标签，也就是在 “updated rakefile” 提交。 你可以在之后补上标签。 要在那个提交上打标签，你需要在命令的末尾指定 "),a("strong",[t._v("提交的校验和（或部分校验和）")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag -a v1.2 9fceb02\n")])])]),a("p",[t._v("可以看到你已经在那次提交上打上标签了：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" tag\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v0.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.3")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.4-lw")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# v1.5")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" show v1.2\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# tag v1.2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Tagger: Scott Chacon <schacon@gee-mail.com>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Date:   Mon Feb 9 15:32:16 2009 -0800")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# version 1.2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# commit 9fceb02d0ae598e95dc970b74767f19372d61af8")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Author: Magnus Chacon <mchacon@gee-mail.com>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Date:   Sun Apr 27 20:43:35 2008 -0700")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     updated rakefile")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ...")]),t._v("\n")])])]),a("h2",{attrs:{id:"共享标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#共享标签"}},[t._v("#")]),t._v(" 共享标签")]),t._v(" "),a("p",[t._v("默认情况下，"),a("strong",[t._v("git push 命令并不会传送标签到远程仓库服务器上")]),t._v("。 在创建完标签后你必须显式地推送标签到共享服务器上。 这个过程就像共享远程分支一样 – 你可以运行")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tagname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin v1.5\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Counting objects: 14, done.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Delta compression using up to 8 threads.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Compressing objects: 100% (12/12), done.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Writing objects: 100% (14/14), 2.05 KiB | 0 bytes/s, done.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Total 14 (delta 3), reused 0 (delta 0)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# To git@github.com:schacon/simplegit.git")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  * [new tag]         v1.5 -> v1.5")]),t._v("\n")])])]),a("p",[t._v("如果想要 "),a("strong",[t._v("一次性推送很多标签")]),t._v("，也可以使用带有 "),a("code",[t._v("–tags")]),t._v(" 选项的 "),a("code",[t._v("git push")]),t._v(" 命令。 这将会把所有不在远程仓库服务器上的标签全部传送到那里。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin --tags\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Counting objects: 1, done.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Writing objects: 100% (1/1), 160 bytes | 0 bytes/s, done.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Total 1 (delta 0), reused 0 (delta 0)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# To git@github.com:schacon/simplegit.git")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  * [new tag]         v1.4 -> v1.4")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  * [new tag]         v1.4-lw -> v1.4-lw")]),t._v("\n")])])]),a("p",[t._v("现在，当其他人从仓库中克隆或拉取，他们也能得到你的那些标签。")]),t._v(" "),a("h2",{attrs:{id:"检出标签"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#检出标签"}},[t._v("#")]),t._v(" 检出标签")]),t._v(" "),a("p",[a("strong",[t._v("在 Git 中你并不能真的检出一个标签")]),t._v("，因为它们并不能像分支一样来回移动。 如果你想要工作目录与仓库中特定的标签版本完全一样，可以使用")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branchname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("tagname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),a("p",[t._v("在特定的标签上创建一个新分支：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b version2 v2.0.0\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Switched to a new branch 'version2'")]),t._v("\n")])])]),a("p",[t._v("当然，如果在这之后又进行了一次提交，version2 分支会因为改动向前移动了，那么 version2 分支就会和 v2.0.0 标签稍微有些不同，这时就应该当心了。")])])}),[],!1,null,null,null);s.default=n.exports}}]);