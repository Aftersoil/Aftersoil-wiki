(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{553:function(e,t,s){"use strict";s.r(t);var v=s(12),r=Object(v.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"远程分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#远程分支"}},[e._v("#")]),e._v(" 远程分支")]),e._v(" "),s("p",[e._v("远程引用 是对远程仓库的引用（指针），包括分支、标签等等。 你可以通过 "),s("code",[e._v("git ls-remote (remote)")]),e._v(" 来显式地获得远程引用的完整列表，或者通过 "),s("code",[e._v("git remote show (remote)")]),e._v(" 获得远程分支的更多信息。 然而，一个更常见的做法是利用 "),s("strong",[e._v("远程跟踪分支")]),e._v("。")]),e._v(" "),s("p",[e._v("远程跟踪分支是 "),s("strong",[e._v("远程分支状态的引用")]),e._v("。 它们 "),s("strong",[e._v("是你不能移动的本地引用")]),e._v("，当你做任何网络通信操作时，它们会自动移动。 远程跟踪分支像是你上次连接到远程仓库时，那些分支所处状态的书签。")]),e._v(" "),s("p",[e._v("它们以 "),s("code",[e._v("(remote)/(branch)")]),e._v(" 形式命名。 例如，如果你想要看你最后一次与远程仓库 "),s("code",[e._v("origin")]),e._v(" 通信时 "),s("code",[e._v("master")]),e._v(" 分支的状态，你可以查看 "),s("code",[e._v("origin/master")]),e._v(" 分支。 你与同事合作解决一个问题并且他们推送了一个 "),s("code",[e._v("iss53")]),e._v(" 分支，你可能有自己的本地 "),s("code",[e._v("iss53")]),e._v(" 分支；但是在服务器上的分支会指向 "),s("code",[e._v("origin/iss53")]),e._v(" 的提交。")]),e._v(" "),s("p",[e._v("这可能有一点儿难以理解，让我们来看一个例子。 假设你的网络里有一个在 "),s("code",[e._v("git.ourcompany.com")]),e._v(" 的 Git 服务器。 如果你从这里克隆，Git 的 "),s("code",[e._v("clone")]),e._v(" 命令会为你自动将其命名为 "),s("code",[e._v("origin")]),e._v("，拉取它的所有数据，创建一个指向它的 "),s("code",[e._v("master")]),e._v(" 分支的指针，并且在本地将其命名为 "),s("code",[e._v("origin/master")]),e._v("。 Git 也会给你一个与 "),s("code",[e._v("origin")]),e._v(" 的 "),s("code",[e._v("master")]),e._v(" 分支在指向同一个地方的本地 "),s("code",[e._v("master")]),e._v(" 分支，这样你就有工作的基础。")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("「origin」 并无特殊含义"),s("br"),e._v("\n远程仓库名字 origin 与分支名字 master 一样，在 Git 中并没有任何特别的含义一样。 同时 master 是当你运行 "),s("code",[e._v("git init")]),e._v(" 时默认的起始分支名字，原因仅仅是它的广泛使用，"),s("code",[e._v("origin")]),e._v(" 是当你运行 "),s("code",[e._v("git clone")]),e._v(" 时默认的远程仓库名字。 如果你运行 "),s("code",[e._v("git clone -o booyah")]),e._v("，那么你默认的远程分支名字将会是"),s("code",[e._v("booyah/master")]),e._v("。")])]),e._v(" "),s("p",[e._v("克隆之后的服务器与本地仓库")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images.chibamai.xyz/wiki/image/Git/git-26.png",alt:"alt text"}})]),e._v(" "),s("p",[e._v("如果你在 "),s("strong",[e._v("本地的 master 分支做了一些工作")]),e._v("，然而在同一时间，其他人推送提交到 "),s("code",[e._v("git.ourcompany.com")]),e._v(" 并更新了它的 master 分支，那么你的提交历史将向不同的方向前进。 也许，只要你不与 "),s("code",[e._v("origin")]),e._v(" 服务器连接，你的 "),s("code",[e._v("origin/master")]),e._v(" 指针就不会移动。")]),e._v(" "),s("p",[e._v("本地与远程的工作可以分叉")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images.chibamai.xyz/wiki/image/Git/git-27.png",alt:"alt text"}})]),e._v(" "),s("p",[e._v("如果要同步你的工作，运行 "),s("code",[e._v("git fetch origin")]),e._v(" 命令。 这个命令查找 "),s("code",[e._v("origin")]),e._v(" 是哪一个服务器（在本例中，它是 "),s("code",[e._v("git.ourcompany.com")]),e._v("），从中抓取本地没有的数据，并且更新本地数据库，移动 "),s("code",[e._v("origin/master")]),e._v(" 指针指向新的、更新后的位置。")]),e._v(" "),s("p",[s("code",[e._v("git fetch")]),e._v(" 更新你的远程仓库引用")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images.chibamai.xyz/wiki/image/Git/git-28.png",alt:"alt text"}})]),e._v(" "),s("p",[e._v("为了演示有多个远程仓库与远程分支的情况，我们假定你有另一个内部 Git 服务器，仅用于你的 sprint 小组的开发工作。 这个服务器位于 "),s("code",[e._v("git.team1.ourcompany.com")]),e._v("。 你可以运行 "),s("code",[e._v("git remote add")]),e._v(" 命令 "),s("strong",[e._v("添加一个新的远程仓库引用到当前的项目")]),e._v("，这个命令我们会在 Git 基础 中详细说明。 将这个远程仓库命名为 "),s("code",[e._v("teamone")]),e._v("，将其作为整个 "),s("code",[e._v("URL")]),e._v(" 的缩写。")]),e._v(" "),s("p",[e._v("添加另一个远程仓库")]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images.chibamai.xyz/wiki/image/Git/git-29.png",alt:"alt text"}})]),e._v(" "),s("p",[e._v("现在，可以运行 "),s("code",[e._v("git fetch teamone")]),e._v(" 来 抓取远程仓库 "),s("code",[e._v("teamone")]),e._v(" 有而本地没有的数据。 因为那台服务器上现有的数据是 origin 服务器上的一个子集（简单说，这个仓库是 origin 中某一个提交中的代码），所以 Git 并不会抓取数据而是会设置远程跟踪分支 "),s("code",[e._v("teamone/master")]),e._v(" 指向 "),s("code",[e._v("teamone")]),e._v(" 的 master 分支。")]),e._v(" "),s("p",[e._v("远程跟踪分支 "),s("code",[e._v("teamone/master")])]),e._v(" "),s("p",[s("img",{attrs:{src:"https://images.chibamai.xyz/wiki/image/Git/git-30.png",alt:"alt text"}})]),e._v(" "),s("h2",{attrs:{id:"推送-push"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#推送-push"}},[e._v("#")]),e._v(" 推送（push）")]),e._v(" "),s("p",[e._v("当你想要公开分享一个分支时，需要将其推送到有写入权限的远程仓库上。 本地的分支并不会自动与远程仓库同步 – 你必须显式地推送想要分享的分支。 这样，你就可以把不愿意分享的内容放到私人分支上，而将需要和别人协作的内容推送到公开分支。")]),e._v(" "),s("p",[e._v("如果希望和别人一起在名为 "),s("code",[e._v("serverfix")]),e._v(" 的分支上工作，你可以像推送第一个分支那样推送它。 运行 "),s("code",[e._v("git push (remote) (branch)")]),e._v(":")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin serverfix\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Counting objects: 24, done.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Delta compression using up to 8 threads.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Compressing objects: 100% (15/15), done.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Writing objects: 100% (24/24), 1.91 KiB | 0 bytes/s, done.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Total 24 (delta 2), reused 0 (delta 0)")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# To https://github.com/schacon/simplegit")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  * [new branch]      serverfix -> serverfix")]),e._v("\n")])])]),s("p",[e._v("这里有些工作被简化了。 Git 自动将 "),s("code",[e._v("serverfix")]),e._v(" 分支名字展开为 "),s("code",[e._v("refs/heads/serverfix:refs/heads/serverfix")]),e._v("，那意味着，"),s("strong",[e._v("「推送本地的 "),s("code",[e._v("serverfix")]),e._v(" 分支来更新远程仓库上的 "),s("code",[e._v("serverfix")]),e._v(" 分支。」"),s("strong",[e._v("我们将会详细学习 "),s("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%86%85%E9%83%A8%E5%8E%9F%E7%90%86-%E5%BA%95%E5%B1%82%E5%91%BD%E4%BB%A4%E4%B8%8E%E4%B8%8A%E5%B1%82%E5%91%BD%E4%BB%A4",target:"_blank",rel:"noopener noreferrer"}},[e._v("Git 内部原理"),s("OutboundLink")],1),e._v(" 的 "),s("code",[e._v("refs/heads/")]),e._v(" 部分，但是现在可以先把它放在儿。 你也可以运行 "),s("code",[e._v("git push origin serverfix:serverfix")]),e._v("，它会做同样的事 – 相当于它说，")]),e._v("「推送本地的 "),s("code",[e._v("serverfix")]),e._v(" 分支，将其作为远程仓库的 serverfix 分支」可以通过这种格式来推送本地分支到一个命名不相同的远程分支")]),e._v("。 如果并不想让远程仓库上的分支叫做 "),s("code",[e._v("serverfix")]),e._v("，可以运行 "),s("code",[e._v("git push origin serverfix:awesomebranch")]),e._v(" 来将本地的 "),s("code",[e._v("serverfix")]),e._v(" 分支推送到远程仓库上的 "),s("code",[e._v("awesomebranch")]),e._v(" 分支。")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("ul",[s("li",[e._v("如何避免每次输入密码")]),e._v(" "),s("li",[e._v("如果你正在使用 HTTPS URL 来推送，Git 服务器会询问用户名与密码。 默认情况下它会在终端中提示服务器是否允许你进行推送。")]),e._v(" "),s("li",[e._v('如果不想在每一次推送时都输入用户名与密码，你可以设置一个 "'),s("code",[e._v("credential cache")]),e._v('"。 最简单的方式就是将其保存在内存中几分钟，可以简单地运行 '),s("code",[e._v("git config –global credential.helper cache")]),e._v(" 来设置它。")]),e._v(" "),s("li",[e._v("想要了解更多关于不同验证缓存的可用选项，查看 "),s("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E5%87%AD%E8%AF%81%E5%AD%98%E5%82%A8",target:"_blank",rel:"noopener noreferrer"}},[e._v("凭证存储"),s("OutboundLink")],1),e._v("。")])])]),e._v(" "),s("p",[e._v("下一次其他协作者从服务器上抓取数据时，他们会在本地生成一个远程分支 "),s("code",[e._v("origin/serverfix")]),e._v("，指向服务器的 "),s("code",[e._v("serverfix")]),e._v(" 分支的引用:")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch origin\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# remote: Counting objects: 7, done.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# remote: Compressing objects: 100% (2/2), done.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# remote: Total 3 (delta 0), reused 3 (delta 0)")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Unpacking objects: 100% (3/3), done.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# From https://github.com/schacon/simplegit")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  * [new branch]      serverfix    -> origin/serverfix")]),e._v("\n")])])]),s("p",[e._v("要特别注意的一点是 "),s("strong",[e._v("当抓取到新的远程跟踪分支时")]),e._v("，本地不会自动生成一份可编辑的副本（拷贝）。 换一句话说，这种情况下，不会有一个新的 serverfix 分支 – 只有一个不可以修改的 "),s("code",[e._v("origin/serverfix")]),e._v(" 指针。")]),e._v(" "),s("p",[e._v("可以运行 "),s("code",[e._v("git merge origin/serverfix")]),e._v(" 将这些工作合并到当前所在的分支。 如果想要在自己的 serverfix 分支上工作，可以将其建立在远程 "),s("a",{attrs:{href:"#%E8%B7%9F%E8%B8%AA%E5%88%86%E6%94%AF"}},[e._v("跟踪分支")]),e._v(" 之上：")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b serverfix origin/serverfix\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Branch serverfix set up to track remote branch serverfix from origin.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Switched to a new branch 'serverfix'")]),e._v("\n")])])]),s("p",[e._v("这会给你一个用于工作的本地分支，并且起点位于 "),s("code",[e._v("origin/serverfix")]),e._v("。")]),e._v(" "),s("h2",{attrs:{id:"跟踪分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跟踪分支"}},[e._v("#")]),e._v(" 跟踪分支")]),e._v(" "),s("p",[e._v("从一个远程跟踪分支检出一个本地分支会自动创建一个叫做 「"),s("strong",[e._v("跟踪分支")]),e._v("」（有时候也叫做 「"),s("strong",[e._v("上游分支")]),e._v("」）。")]),e._v(" "),s("p",[s("strong",[e._v("跟踪分支")]),e._v(" 是 与远程分支有直接关系的本地分支。 如果在一个跟踪分支上输入 git pull，Git 能自动地识别去哪个服务器上抓取、合并到哪个分支。")]),e._v(" "),s("p",[e._v("当克隆一个仓库时，它通常会自动地创建一个跟踪 "),s("code",[e._v("origin/master")]),e._v(" 的 master 分支。 然而，如果你愿意的话可以设置其他的跟踪分支 – 其他远程仓库上的跟踪分支，或者不跟踪 master 分支。 最简单的就是之前看到的例子，运行 "),s("code",[e._v("git checkout -b [branch] [remotename]/[branch]")]),e._v("。 这是一个十分常用的操作所以 Git 提供了 "),s("code",[e._v("–track")]),e._v(" 快捷方式：")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout --track origin/serverfix\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Branch serverfix set up to track remote branch serverfix from origin.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Switched to a new branch 'serverfix'")]),e._v("\n")])])]),s("p",[e._v("如果想要将本地分支与远程分支设置为不同名字，你可以轻松地增加一个不同名字的本地分支的上一个命令：")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout -b sf origin/serverfix\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Branch sf set up to track remote branch serverfix from origin.")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Switched to a new branch 'sf'")]),e._v("\n")])])]),s("p",[e._v("现在，本地分支 "),s("code",[e._v("sf")]),e._v(" 会自动从 "),s("code",[e._v("origin/serverfix")]),e._v(" 拉取。")]),e._v(" "),s("h2",{attrs:{id:"已有本地分支跟踪远程分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#已有本地分支跟踪远程分支"}},[e._v("#")]),e._v(" 已有本地分支跟踪远程分支")]),e._v(" "),s("p",[e._v("设置 "),s("strong",[e._v("已有的本地分支跟踪一个刚刚拉取下来的远程分支")]),e._v("，或者想要修改正在跟踪的上游分支，你可以在任意时间使用 "),s("code",[e._v("-u")]),e._v(" 或 "),s("code",[e._v("–set-upstream-to")]),e._v(" 选项运行 "),s("code",[e._v("git branch")]),e._v(" 来显式地设置。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch -u origin/serverfix\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Branch serverfix set up to track remote branch serverfix from origin.")]),e._v("\n")])])]),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),s("p",[e._v("上游快捷方式"),s("br"),e._v("\n当设置好跟踪分支后，可以通过 "),s("code",[e._v("@{upstream}")]),e._v(" 或 "),s("code",[e._v("@{u}")]),e._v(" 快捷方式来引用它。 所以在 master 分支时并且它正在跟踪 "),s("code",[e._v("origin/master")]),e._v(" 时，如果愿意的话可以使用 "),s("code",[e._v("git merge @{u}")]),e._v(" 来取代 "),s("code",[e._v("git merge origin/master")]),e._v("。")])]),e._v(" "),s("h2",{attrs:{id:"查看所有已设置的跟踪分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查看所有已设置的跟踪分支"}},[e._v("#")]),e._v(" 查看所有已设置的跟踪分支")]),e._v(" "),s("p",[e._v("如果想要查看设置的所有跟踪分支，可以使用 "),s("code",[e._v("git branch")]),e._v(" 的 "),s("code",[e._v("-vv")]),e._v(" 选项。 这会将所有的本地分支列出来并且包含更多的信息，如每一个分支正在跟踪哪个远程分支与本地分支是否是领先、落后或是都有。")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch -vv\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#   iss53     7e424c3 [origin/iss53: ahead 2] forgot the brackets")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#   master    1ae2a45 [origin/master] deploying index fix")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# * serverfix f8674d9 [teamone/server-fix-good: ahead 3, behind 1] this should do it")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#   testing   5ea463a trying something new")]),e._v("\n")])])]),s("p",[e._v("这里可以看到 "),s("code",[e._v("iss53")]),e._v(" 分支正在跟踪 "),s("code",[e._v("origin/iss53")]),e._v(" 并且 ahead 是 2，"),s("strong",[e._v("意味着本地有两个提交还没有推送到服务器上")]),e._v("。")]),e._v(" "),s("p",[e._v("也能看到 "),s("code",[e._v("master")]),e._v(" 分支正在跟踪 "),s("code",[e._v("origin/master")]),e._v(" 分支并且是最新的。")]),e._v(" "),s("p",[s("strong",[e._v("需要重点注意的一点是这些数字的值来自于你从每个服务器上最后一次抓取的数据")]),e._v("。 这个命令并没有连接服务器，它只会告诉你关于本地缓存的服务器数据。 如果想要统计最新的领先与落后数字，需要在运行此命令前抓取所有的远程仓库。 可以像这样做")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" fetch --all\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" branch -vv\n")])])]),s("h2",{attrs:{id:"拉取-fetch"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取-fetch"}},[e._v("#")]),e._v(" 拉取（fetch）")]),e._v(" "),s("p",[e._v("当 "),s("code",[e._v("git fetch")]),e._v(" 命令 "),s("strong",[e._v("从服务器上抓取本地没有的数据时，它并不会修改工作目录中的内容")]),e._v("。 它只会获取数据然后让你自己合并。 然而，有一个命令叫作 "),s("code",[e._v("git pull")]),e._v(" 在大多数情况下它的含义是一个 "),s("code",[e._v("git fetch")]),e._v("紧接着一个 "),s("code",[e._v("git merge")]),e._v(" 命令。 如果有一个像之前章节中演示的 "),s("strong",[e._v("设置好的跟踪分支")]),e._v("，不管它是显式地设置还是通过 "),s("code",[e._v("clone")]),e._v(" 或 "),s("code",[e._v("checkout")]),e._v(" 命令为你创建的，"),s("code",[e._v("git pull")]),e._v(" 都会查找当前分支所跟踪的服务器与分支，从服务器上抓取数据然后尝试合并入那个远程分支。")]),e._v(" "),s("p",[e._v("由于 "),s("code",[e._v("git pull")]),e._v(" 的魔法经常令人困惑所以通常单独显式地使用 "),s("code",[e._v("fetch")]),e._v(" 与 "),s("code",[e._v("merge")]),e._v(" 命令会更好一些。")]),e._v(" "),s("h2",{attrs:{id:"删除远程分支"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除远程分支"}},[e._v("#")]),e._v(" 删除远程分支")]),e._v(" "),s("p",[e._v("假设你已经通过远程分支做完所有的工作了 – 也就是说你和你的协作者已经完成了一个特性并且将其合并到了远程仓库的 master 分支（或任何其他稳定代码分支）。 可以运行带有 "),s("code",[e._v("–delete")]),e._v(" 选项的 "),s("code",[e._v("git push")]),e._v(" 命令来删除一个远程分支。 如果想要从服务器上删除 "),s("code",[e._v("serverfix")]),e._v(" 分支，运行下面的命令：")]),e._v(" "),s("div",{staticClass:"language-sh extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sh"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" push origin --delete serverfix\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# To https://github.com/schacon/simplegit")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  - [deleted]         serverfix")]),e._v("\n")])])]),s("p",[e._v("基本上这个命令做的 "),s("strong",[e._v("只是从服务器上移除这个指针")]),e._v("。 Git 服务器通常会保留数据一段时间直到垃圾回收运行，所以如果不小心删除掉了，通常是很容易恢复的。")])])}),[],!1,null,null,null);t.default=r.exports}}]);