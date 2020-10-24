(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{523:function(t,s,e){"use strict";e.r(s);var a=e(14),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"远程仓库的使用"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库的使用"}},[t._v("#")]),t._v(" 远程仓库的使用")]),t._v(" "),e("p",[t._v("为了能在任意 Git 项目上协作，你需要知道如何管理自己的远程仓库。 远程仓库是指托管在因特网或其他网络中的你的项目的版本库。 你可以有好几个远程仓库，通常有些仓库对你只读，有些则可以读写。 与他人协作涉及管理远程仓库以及根据需要推送或拉取数据。 管理远程仓库包括了解如何添加远程仓库、移除无效的远程仓库、管理不同的远程分支并定义它们是否被跟踪等等。 在本节中，我们将介绍一部分远程管理的技能。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("特别注意一个概念：大部分的配置都是针对你项目目录下的 "),e("code",[t._v("./git/config")]),t._v(" 文件进行操作，并不是根据字面意思上的在操作远程服务器上的资源")])]),t._v(" "),e("h2",{attrs:{id:"查看远程仓库-remote"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看远程仓库-remote"}},[t._v("#")]),t._v(" 查看远程仓库 "),e("code",[t._v("remote")])]),t._v(" "),e("p",[t._v("如果想 "),e("strong",[t._v("查看你已经配置的远程仓库服务器")]),t._v("，可以运行 "),e("code",[t._v("git remote")]),t._v(" 命令。 它会列出你指定的每一个远程服务器的简写。 如果你已经克隆了自己的仓库，那么至少应该能看到 "),e("code",[t._v("origin")]),t._v(" ：这是 Git 给你克隆的 "),e("strong",[t._v("仓库服务器的默认名字")]),t._v("：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/Aftersoil/Aftersoil-wiki.git\n\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" Aftersoil-wiki\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# origin")]),t._v("\n")])])]),e("p",[t._v("你也可以指定选项 "),e("code",[t._v("-v")]),t._v("，会显示需要读写远程仓库使用的 Git 保存的简写与其对应的 URL。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# origin  git@github.com:Aftersoil/Aftersoil-wiki.git (fetch)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# origin  git@github.com:Aftersoil/Aftersoil-wiki.git (push)")]),t._v("\n")])])]),e("p",[t._v("如果你的远程仓库不止一个，该命令会将它们全部列出。 例如，与几个协作者合作的，拥有多个远程仓库的仓库看起来像下面这样：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# origin  git@github.com:Aftersoil/Aftersoil-wiki.git (fetch)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# origin  git@github.com:Aftersoil/Aftersoil-wiki.git (push)")]),t._v("\n")])])]),e("p",[t._v("这样我们可以轻松拉取其中任何一个用户的贡献。 此外，我们大概还会有某些远程仓库的推送权限，虽然我们目前还不会在此介绍。")]),t._v(" "),e("p",[t._v("注意这些远程仓库使用了不同的协议；我们将会在 "),e("a",{attrs:{href:"https://git-scm.com/book/zh/v2/%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E7%9A%84-Git-%E5%9C%A8%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%B8%8A%E6%90%AD%E5%BB%BA-Git",target:"_blank",rel:"noopener noreferrer"}},[t._v("在服务器上搭建 Git"),e("OutboundLink")],1),t._v(" 中了解关于它们的更多信息。")]),t._v(" "),e("h2",{attrs:{id:"添加远程仓库-remote-add"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#添加远程仓库-remote-add"}},[t._v("#")]),t._v(" 添加远程仓库 "),e("code",[t._v("remote add")])]),t._v(" "),e("p",[t._v("我在之前的章节中已经提到并展示了如何添加远程仓库的示例，不过这里将告诉你如何明确地做到这一点。 运行 "),e("code",[t._v("git remote add <shortname> <url>")]),t._v(" 添加一个新的远程 Git 仓库，同时指定一个你可以轻松引用的简写：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# origin")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" pb git@github.com:Aftersoil/Aftersoil-wiki.git\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# origin  git@github.com:Aftersoil/Aftersoil-wiki.git (fetch)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# origin  git@github.com:Aftersoil/Aftersoil-wiki.git (push")]),t._v("\n")])])]),e("p",[t._v("现在你可以在命令行中使用字符串 pb 来 "),e("strong",[t._v("代替整个 URL")]),t._v("。 例如，如果你想拉取 Paul 的仓库中有但你没有的信息，可以运行 git fetch pb：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch pb\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# remote: Counting objects: 43, done.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# remote: Compressing objects: 100% (36/36), done.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# remote: Total 43 (delta 10), reused 31 (delta 5)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unpacking objects: 100% (43/43), done.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# From https://github.com/paulboone/ticgit")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  * [new branch]      master     -> pb/master")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  * [new branch]      ticgit     -> pb/ticgit")]),t._v("\n")])])]),e("p",[t._v("现在 Paul 的 master 分支可以在本地通过 pb/master 访问到 – 你可以将它合并到自己的某个分支中，或者如果你想要查看它的话，可以检出一个指向该点的本地分支。 （我们将会在 "),e("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%AE%80%E4%BB%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 分支"),e("OutboundLink")],1),t._v(" 中详细介绍什么是分支以及如何使用分支。）")]),t._v(" "),e("h2",{attrs:{id:"从远程仓库中抓取-pull-与拉取-fetch"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#从远程仓库中抓取-pull-与拉取-fetch"}},[t._v("#")]),t._v(" 从远程仓库中抓取(pull)与拉取(fetch)")]),t._v(" "),e("p",[t._v("就如刚才所见，从远程仓库中获得数据，可以执行：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote-name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("这个命令会访问远程仓库，从中 "),e("strong",[t._v("拉取所有你还没有的数据")]),t._v("。 执行完成后，你将会拥有那个远程仓库中所有分支的引用，可以随时合并或查看。")]),t._v(" "),e("p",[t._v("如果你使用 clone 命令克隆了一个仓库，命令会自动将其添加为远程仓库并默认以 "),e("code",[t._v("“origin”")]),t._v(" 为简写。 所以，"),e("code",[t._v("git fetch origin")]),t._v(" 会抓取克隆（或上一次抓取）后 "),e("strong",[t._v("新推送的所有工作")]),t._v("。 必须注意 git fetch 命令会将数据拉取到你的本地仓库 – "),e("strong",[t._v("它并不会自动合并或修改你当前的工作")]),t._v("。 当准备好时你必须手动将其合并入你的工作。")]),t._v(" "),e("p",[t._v("如果你有一个分支设置为跟踪一个远程分支（阅读下一节与 Git 分支 了解更多信息），可以使用 "),e("code",[t._v("git pull")]),t._v(" 命令来 "),e("strong",[t._v("自动的抓取然后合并远程分支到当前分支")]),t._v("。 这对你来说可能是一个更简单或更舒服的工作流程；默认情况下，"),e("code",[t._v("git clone")]),t._v(" 命令会自动设置本地 master 分支跟踪克隆的远程仓库的 master 分支（或不管是什么名字的默认分支）。 运行 "),e("code",[t._v("git pull")]),t._v(" 通常会从最初克隆的服务器上抓取数据并自动尝试合并到当前所在的分支。")]),t._v(" "),e("h2",{attrs:{id:"推送到远程仓库-push"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#推送到远程仓库-push"}},[t._v("#")]),t._v(" 推送到远程仓库（push）")]),t._v(" "),e("p",[t._v("当你想分享你的项目时，必须将其推送到上游。 这个命令很简单：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote-name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("branch-name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# remote-name：远程服务器别名")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# branch-name：推送到哪一个分支")]),t._v("\n")])])]),e("p",[t._v("当你想要将 master 分支推送到 origin 服务器时（再次说明，克隆时通常会自动帮你设置好那两个名字），那么运行这个命令就可以将你所做的备份到服务器：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n")])])]),e("p",[t._v("只有当你有所克隆服务器的 "),e("strong",[t._v("写入权限")]),t._v("，并且之前没有人推送过时，这条命令才能生效。 当你和其他人在同一时间克隆，他们先推送到上游然后你再推送到上游，你的推送就会毫无疑问地被拒绝。 你必须先将他们的工作拉取下来并将其合并进你的工作后才能推送。 阅读 "),e("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%AE%80%E4%BB%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 分支"),e("OutboundLink")],1),t._v(" 了解如何推送到远程仓库服务器的详细信息")]),t._v(" "),e("h2",{attrs:{id:"查看远程仓库-remote-show"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看远程仓库-remote-show"}},[t._v("#")]),t._v(" 查看远程仓库(remote show)")]),t._v(" "),e("p",[t._v("如果想要查看某一个远程仓库的更多信息，可以使用")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote show "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("remote-name"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),e("p",[t._v("命令。 如果想以一个特定的缩写名运行这个命令，例如 origin，会得到像下面类似的信息：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote show origin\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# * remote origin")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Fetch URL: git@github.com:Aftersoil/Aftersoil-wiki.git")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Push  URL: git@github.com:Aftersoil/Aftersoil-wiki.git")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HEAD branch: master")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Remote branches:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   gh-pages tracked")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   lpy      tracked")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   master   tracked")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   yuxin    tracked")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Local branches configured for 'git pull':")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   master merges with remote master")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   yuxin  merges with remote yuxin")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Local refs configured for 'git push':")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   master pushes to master (local out of date)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   yuxin  pushes to yuxin  (up to date)")]),t._v("\n")])])]),e("p",[t._v("它同样会列出远程仓库的 URL 与跟踪分支的信息。 这些信息非常有用，它告诉你正处于 master 分支，并且如果运行 "),e("code",[t._v("git pull")]),t._v("，就会抓取所有的远程引用，然后将远程 master 分支合并到本地 master 分支。 它也会列出拉取到的所有远程引用。")]),t._v(" "),e("p",[t._v("这是一个经常遇到的简单例子。 如果你是 Git 的重度使用者（你的分支很多的话），那么还可以看到更多的信息。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote show origin\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# * remote origin")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   Fetch URL: git@github.com:Aftersoil/Aftersoil-wiki.git")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   Push  URL: git@github.com:Aftersoil/Aftersoil-wiki.git")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   HEAD branch: master")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   Remote branches:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     gh-pages tracked")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     lpy      tracked")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     master   tracked")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     yuxin    tracked")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   Local branches configured for 'git pull':")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     master merges with remote master")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     yuxin  merges with remote yuxin")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   Local refs configured for 'git push':")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     master pushes to master (local out of date)")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     yuxin  pushes to yuxin  (up to date)")]),t._v("\n")])])]),e("p",[t._v("这个命令列出了当你在特定的分支上执行 "),e("code",[t._v("git push")]),t._v(" 会自动地推送到哪一个远程分支。 它也同样地 "),e("strong",[t._v("列出了哪些远程分支不在你的本地，哪些远程分支已经从服务器上移除了")]),t._v("，还有当你执行 "),e("code",[t._v("git pull")]),t._v(" 时哪些分支会自动合并。")]),t._v(" "),e("h2",{attrs:{id:"远程仓库的移除与重命名-remote-rename"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#远程仓库的移除与重命名-remote-rename"}},[t._v("#")]),t._v(" 远程仓库的移除与重命名("),e("code",[t._v("remote rename")]),t._v(")")]),t._v(" "),e("p",[t._v("如果想要 重命名引用的名字 可以运行 "),e("code",[t._v("git remote rename")]),t._v(" 去修改一个远程仓库的简写名。 例如，想要将 pb 重命名为 paul，可以用 "),e("code",[t._v("git remote rename")]),t._v(" 这样做：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rename")]),t._v(" pb paul\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# origin")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# paul")]),t._v("\n")])])]),e("p",[t._v("值得注意的是这 "),e("strong",[t._v("同样也会修改你的远程分支名字")]),t._v("。 那些过去引用 "),e("code",[t._v("pb/master")]),t._v(" 的现在会引用 "),e("code",[t._v("paul/master")]),t._v("。如果因为一些原因想要移除一个远程仓库 – 你已经从服务器上搬走了或不再想使用某一个特定的镜像了，又或者某一个贡献者不再贡献了 – 可以使用 "),e("code",[t._v("git remote rm")]),t._v(" ：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("rm")]),t._v(" paul\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# origin")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);