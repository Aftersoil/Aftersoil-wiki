(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{496:function(t,s,e){"use strict";e.r(s);var a=e(12),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"分支的新建与合并"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支的新建与合并"}},[t._v("#")]),t._v(" 分支的新建与合并")]),t._v(" "),e("p",[t._v("让我们来看一个简单的分支新建与分支合并的例子，实际工作中你可能会用到类似的工作流。 你将经历如下步骤：")]),t._v(" "),e("ul",[e("li",[t._v("开发某个网站。")]),t._v(" "),e("li",[t._v("为实现某个新的需求，创建一个分支。")]),t._v(" "),e("li",[t._v("在这个分支上开展工作。")])]),t._v(" "),e("p",[t._v("正在此时，你突然接到一个电话说有个很严重的问题需要紧急修补。 你将按照如下方式来处理：")]),t._v(" "),e("ul",[e("li",[t._v("切换到你的线上分支（production branch）。")]),t._v(" "),e("li",[t._v("为这个紧急任务新建一个分支，并在其中修复它。")]),t._v(" "),e("li",[t._v("在测试通过之后，切换回线上分支，然后合并这个修补分支，最后将改动推送到线上分支。")]),t._v(" "),e("li",[t._v("切换回你最初工作的分支上，继续工作。")])]),t._v(" "),e("h2",{attrs:{id:"新建分支"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#新建分支"}},[t._v("#")]),t._v(" 新建分支")]),t._v(" "),e("p",[t._v("首先，我们假设你正在你的项目上工作，并且已经有一些提交。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://images.aftersoil.xyz/wiki/image/Git/git-15.png",alt:"alt text"}})]),t._v(" "),e("p",[t._v("如上图，简单的提交历史")]),t._v(" "),e("p",[t._v("现在，你已经决定要解决你的公司使用的问题追踪系统中的 "),e("code",[t._v("#53")]),t._v(" 问题。 想要新建一个分支并同时切换到那个分支上，你可以运行一个带有 "),e("code",[t._v("-b")]),t._v(" 参数的 "),e("code",[t._v("git checkout")]),t._v(" 命令：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b iss53\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Switched to a new branch "iss53"')]),t._v("\n")])])]),e("p",[t._v("它是下面两条命令的简写：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch iss53\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout iss53\n")])])]),e("p",[e("img",{attrs:{src:"https://images.aftersoil.xyz/wiki/image/Git/git-16.png",alt:"alt text"}})]),t._v(" "),e("p",[t._v("你继续在 "),e("code",[t._v("#53")]),t._v(" 问题上工作，并且做了一些提交。 在此过程中，"),e("code",[t._v("iss53")]),t._v(" 分支在不断的向前推进，因为你已经检出到该分支（也就是说，你的 HEAD 指针指向了 "),e("code",[t._v("iss53")]),t._v(" 分支）")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" index.html\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -a -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'added a new footer [issue 53]'")]),t._v("\n")])])]),e("p",[e("img",{attrs:{src:"https://images.aftersoil.xyz/wiki/image/Git/git-17.png",alt:"alt text"}})]),t._v(" "),e("p",[t._v("如上图所示："),e("code",[t._v("iss53")]),t._v(" 分支随着工作的进展向前推进")]),t._v(" "),e("p",[t._v("现在你接到那个电话，有个紧急问题等待你来解决。 有了 Git 的帮助，你不必把这个紧急问题和 "),e("code",[t._v("iss53")]),t._v(" 的修改混在一起，你也不需要花大力气来还原关于 "),e("code",[t._v("#53")]),t._v(" 问题的修改，然后再添加关于这个紧急问题的修改，最后将这个修改提交到线上分支。 你所要做的 "),e("strong",[t._v("仅仅是切换回 "),e("code",[t._v("master")]),t._v(" 分支")]),t._v("。")]),t._v(" "),e("p",[t._v("但是，在你这么做之前，要留意你的 "),e("strong",[t._v("工作目录")]),t._v(" 和 "),e("strong",[t._v("暂存区")]),t._v(" "),e("strong",[t._v("里那些还没有被提交的修改，它可能会和你即将检出的分支产生冲突从而阻止 Git 切换到该分支")]),t._v("。 最好的方法是，在你切换分支之前，保持好一个干净的状态。 "),e("strong",[t._v("有一些方法可以绕过这个问题")]),t._v("（即，保存进度（stashing） 和 修补提交（commit amending）），我们会在 "),e("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E8%B4%AE%E8%97%8F%E4%B8%8E%E6%B8%85%E7%90%86#_git_stashing",target:"_blank",rel:"noopener noreferrer"}},[t._v("储藏与清理"),e("OutboundLink")],1),t._v(" 中看到关于这两个命令的介绍。 现在，我们假设你已经把你的修改全部提交了，这时你可以切换回 master 分支了：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Switched to branch 'master'")]),t._v("\n")])])]),e("p",[t._v("这个时候，你的工作目录和你在开始 "),e("code",[t._v("#53")]),t._v(" 问题之前一模一样，现在你可以专心修复紧急问题了。 "),e("strong",[t._v("请牢记：当你切换分支的时候，Git 会重置你的工作目录，使其看起来像回到了你在那个分支上最后一次提交的样子。")]),t._v(" Git 会自动添加、删除、修改文件以确保此时你的工作目录和这个分支最后一次提交时的样子一模一样。")]),t._v(" "),e("p",[t._v("接下来，你要修复这个紧急问题。 让我们建立一个针对该紧急问题的分支（hotfix branch），在该分支上工作直到问题解决：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -b hotfix\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Switched to a new branch 'hotfix'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" index.html\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -a -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fixed the broken email address'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [hotfix 1fb7853] fixed the broken email address")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  1 file changed, 2 insertions(+)")]),t._v("\n")])])]),e("p",[e("img",{attrs:{src:"https://images.aftersoil.xyz/wiki/image/Git/git-18.png",alt:"alt text"}})]),t._v(" "),e("p",[t._v("你可以运行你的测试，确保你的修改是正确的，然后 "),e("strong",[t._v("将其合并回你的 master 分支来部署到线上")]),t._v("。 你可以使用 "),e("code",[t._v("git merge")]),t._v(" 命令来达到上述目的：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge hotfix\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Updating f42c576..3a0874c")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Fast-forward")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  index.html | 2 ++")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#  1 file changed, 2 insertions(+)")]),t._v("\n")])])]),e("p",[t._v("在 合"),e("strong",[t._v("并的时候")]),t._v("，你应该注意到了 「"),e("strong",[t._v("快进（fast-forward）")]),t._v("」这个词。 "),e("strong",[t._v("由于当前 master 分支所指向的提交是你当前提交（有关 hotfix 的提交）的直接上游")]),t._v("，所以 Git 只是简单的将指针向前移动。 换句话说，当你试图合并两个分支时，如果顺着一个分支走下去能够到达另一个分支，那么 Git 在合并两者的时候，只会简单的将指针向前推进（指针右移），因为这种情况下的合并操作没有需要解决的分歧——这就叫做 「"),e("strong",[t._v("快进（fast-forward）")]),t._v("」。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("由于讲述的不是从零开始，所以记得这里自己测试的时候，两个分支不要修改同一个文件的东西，因为有可能会产生冲突，导致自动合并失败，这个需要仔细查看每次执行命令后的反馈信息")])]),t._v(" "),e("p",[t._v("现在，最新的修改已经在 master 分支所指向的提交快照中，你可以着手发布该修复了。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://images.aftersoil.xyz/wiki/image/Git/git-19.png",alt:"alt text"}})]),t._v(" "),e("p",[t._v("关于这个紧急问题的解决方案发布之后，你 "),e("strong",[t._v("准备回到被打断之前时的工作中。")]),t._v(" 然而，你应该 "),e("strong",[t._v("先删除 hotfix 分支，因为你已经不再需要它了 —— master 分支已经指向了同一个位置。")]),t._v(" 你可以使用带 "),e("code",[t._v("-d")]),t._v(" 选项的 "),e("code",[t._v("git branch")]),t._v(" 命令来删除分支：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -d hotfix\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Deleted branch hotfix (3a0874c).")]),t._v("\n")])])]),e("p",[t._v("现在你可以切换回你正在工作的分支继续你的工作，也就是针对 "),e("code",[t._v("#53")]),t._v(" 问题的那个分支（"),e("code",[t._v("iss53")]),t._v(" 分支）。")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout iss53\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# Switched to branch "iss53"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("vim")]),t._v(" index.html\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -a -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'finished the new footer [issue 53]'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [iss53 ad82d7a] finished the new footer [issue 53]")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 file changed, 1 insertion(+)")]),t._v("\n")])])]),e("p",[e("img",{attrs:{src:"https://images.aftersoil.xyz/wiki/image/Git/git-20.png",alt:"alt text"}})]),t._v(" "),e("p",[t._v("你在 hotfix 分支上所做的工作并没有包含到 "),e("code",[t._v("iss53")]),t._v(" 分支中。 如果你需要拉取 hotfix 所做的修改，你可以使用 "),e("code",[t._v("git merge master")]),t._v(" 命令 "),e("strong",[t._v("将 master 分支合并入 "),e("code",[t._v("iss53")]),t._v(" 分支")]),t._v("，或者你也可以等到 "),e("code",[t._v("iss53")]),t._v(" 分支完成其使命，再将其合并回 master 分支。")]),t._v(" "),e("h2",{attrs:{id:"分支的合并"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分支的合并"}},[t._v("#")]),t._v(" 分支的合并")]),t._v(" "),e("p",[t._v("假设你已经修正了 "),e("code",[t._v("#53")]),t._v(" 问题，并且打算将你的工作合并入 master 分支。 为此，你需要 合并 "),e("code",[t._v("iss53")]),t._v(" 分支到 master 分支，这和之前你合并 hotfix 分支所做的工作差不多。 你只需要检出到你想合并入的分支，然后运行 "),e("code",[t._v("git merge")]),t._v(" 命令：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout master\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Switched to branch 'master'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge iss53\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Merge made by the 'recursive' strategy.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# index.html |    1 +")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1 file changed, 1 insertion(+)")]),t._v("\n")])])]),e("p",[t._v("这和你之前合并 hotfix 分支的时候看起来有一点不一样。 在这种情况下，你的 "),e("strong",[t._v("开发历史从一个更早的地方开始分叉开来（diverged）")]),t._v("。 因为，master 分支所在提交并不是 "),e("code",[t._v("iss53")]),t._v(" 分支所在提交的直接祖先，Git 不得不做一些额外的工作。 出现这种情况的时候，Git 会使用两个分支的末端所指的快照（"),e("code",[t._v("C4")]),t._v(" 和 "),e("code",[t._v("C5")]),t._v("）以及这两个分支的工作祖先（"),e("code",[t._v("C2")]),t._v("），做一个 "),e("strong",[t._v("简单的三方合并。")])]),t._v(" "),e("p",[e("img",{attrs:{src:"https://images.aftersoil.xyz/wiki/image/Git/git-21.png",alt:"alt text"}})]),t._v(" "),e("p",[t._v("和之前将分支指针向前推进所不同的是，"),e("strong",[t._v("Git 将此次三方合并的结果做了一个新的快照并且自动创建一个新的提交指向它。 这个被称作 一次合并提交")]),t._v("，它的特别之处在于他有不止一个父提交。")]),t._v(" "),e("p",[e("img",{attrs:{src:"https://images.aftersoil.xyz/wiki/image/Git/git-22.png",alt:"alt text"}})]),t._v(" "),e("p",[t._v("需要指出的是，"),e("strong",[t._v("Git 会自行决定选取哪一个提交作为最优的共同祖先")]),t._v("，并以此作为合并的基础；这和更加古老的 CVS 系统或者 Subversion （1.5 版本之前）不同，在这些古老的版本管理系统中，用户需要自己选择最佳的合并基础。 Git 的这个优势使其在合并操作上比其他系统要简单很多。")]),t._v(" "),e("p",[t._v("既然你的修改已经合并进来了，你已经不再需要 iss53 分支了。 现在你可以在任务追踪系统中关闭此项任务，并删除这个分支。")]),t._v(" "),e("h2",{attrs:{id:"遇到冲突时的分支合并"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遇到冲突时的分支合并"}},[t._v("#")]),t._v(" 遇到冲突时的分支合并")]),t._v(" "),e("p",[t._v("有时候合并操作不会如此顺利。 如果你 "),e("strong",[t._v("在两个不同的分支中，对同一个文件的同一个部分进行了不同的修改")]),t._v("，Git 就没法干净的合并它们。 如果你对 "),e("code",[t._v("#53")]),t._v(" 问题的修改和有关 hotfix 的修改都涉及到同一个文件的同一处，在合并它们的时候就会产生合并冲突：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge iss53\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Auto-merging index.html")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# CONFLICT (content): Merge conflict in index.html")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Automatic merge failed; fix conflicts and then commit the result.")]),t._v("\n")])])]),e("p",[e("strong",[t._v("此时 Git 做了合并，但是没有自动地创建一个新的合并提交")]),t._v("。 Git 会暂停下来，等待你去解决合并产生的冲突。 你可以在合并冲突后的任意时刻使用 "),e("code",[t._v("git status")]),t._v(" 命令来查看那些因包含合并冲突而处于 "),e("strong",[t._v("未合并（unmerged）状态")]),t._v(" 的文件：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# On branch master")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# You have unmerged paths.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#   (fix conflicts and run "git commit")')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unmerged paths:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#   (use "git add <file>..." to mark resolution)')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     both modified:      index.html")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# no changes added to commit (use "git add" and/or "git commit -a")')]),t._v("\n")])])]),e("p",[t._v("任何因包含 "),e("strong",[t._v("合并冲突而有待解决的文件")]),t._v("，都会以未合并状态标识出来。 Git 会在有冲突的文件中加入标准的冲突解决标记，这样你可以打开这些包含冲突的文件然后手动解决冲突。 出现冲突的文件会包含一些特殊区段，看起来像下面这个样子：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<<<")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" HEAD:index.html\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# HEAD 表示当前所在的分支")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"footer"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("contact "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" email.support@github.com"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\t\t\t\t\t\t\t\t"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 上面是当前所在分支的修改，下面是要合并的分支所做的修改")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("div "),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"footer"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n please contact us at support@github.com\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/div"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" iss53:index.html\n")])])]),e("p",[t._v("这表示 HEAD 所指示的版本（也就是你的 master 分支所在的位置，因为你在运行 "),e("code",[t._v("merge")]),t._v(" 命令的时候已经检出到了这个分支）在这个区段的上半部分（======= 的上半部分），而 "),e("code",[t._v("iss53")]),t._v(" 分支所指示的版本在======= 的下半部分。 为了解决冲突，你必须选择使用由 ======= 分割的两部分中的一个，或者你也可以自行合并这些内容。 例如，你可以通过把这段内容换成下面的样子来解决冲突：")]),t._v(" "),e("div",{staticClass:"language-html extra-class"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("footer"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  please contact us at email.support@github.com\n"),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),e("p",[t._v("上述的冲突解决方案仅保留了其中一个分支的修改，并且 "),e("code",[t._v("<<<<<<<")]),t._v(" , "),e("code",[t._v("=======")]),t._v(" , 和 "),e("code",[t._v(">>>>>>>")]),t._v(" 这些行被完全删除了。 在你解决了所有文件里的冲突之后，对每个文件使用 "),e("code",[t._v("git add")]),t._v(" 命令来 "),e("strong",[t._v("将其标记为冲突已解决")]),t._v("。 一旦暂存这些原本有冲突的文件，Git 就会将它们标记为冲突已解决。")]),t._v(" "),e("p",[t._v("如果你想使用 "),e("strong",[t._v("图形化工具来解决冲突")]),t._v("，你可以运行 "),e("code",[t._v("git mergetool")]),t._v("，该命令会为你启动一个合适的可视化合并工具，并带领你一步一步解决这些冲突：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" mergetool\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This message is displayed because 'merge.tool' is not configured.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# See 'git mergetool --tool-help' or 'git help config' for more details.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 'git mergetool' will now attempt to use one of the following tools:  # 下面是可选工具")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# opendiff kdiff3 tkdiff xxdiff meld tortoisemerge gvimdiff diffuse diffmerge ecmerge p4merge araxis bc3 codecompare vimdiff emerge")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Merging:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# index.html")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Normal merge conflict for 'index.html':")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   {local}: modified file")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#   {remote}: modified file")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Hit return to start merge resolution tool (opendiff):")]),t._v("\n")])])]),e("p",[t._v('如果你想使用除默认工具（在这里 Git 使用 opendiff 做为默认的合并工具，因为作者在 Mac 上运行该程序）外的其他合并工具，你可以在 "'),e("strong",[t._v("下列工具中（one of the following tools）")]),t._v('" 这句后面看到所有支持的合并工具。 然后输入你喜欢的工具名字就可以了。')]),t._v(" "),e("p",[t._v("笔者体验过这个工具合并，感觉不太方便。还不如手动合并来得快速")]),t._v(" "),e("p",[t._v("如果你需要更加高级的工具来解决复杂的合并冲突，我们会在 "),e("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%AB%98%E7%BA%A7%E5%90%88%E5%B9%B6#_advanced_merging",target:"_blank",rel:"noopener noreferrer"}},[t._v("高级合并"),e("OutboundLink")],1),t._v(" 介绍更多关于分支合并的内容。")]),t._v(" "),e("p",[t._v("等你退出合并工具之后，Git 会询问刚才的合并是否成功。 如果你回答是，Git 会暂存那些文件以表明冲突已解决： 你可以再次运行 "),e("code",[t._v("git status")]),t._v(" 来确认所有的合并冲突都已被解决：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# On branch master")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# All conflicts fixed but you are still merging.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#   (use "git commit" to conclude merge)')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Changes to be committed:")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     modified:   index.html")]),t._v("\n")])])]),e("p",[t._v("如果你对结果感到满意，并且确定之前有冲突的的文件都已经暂存了，这时你可以输入 "),e("code",[t._v("git commit")]),t._v(" 来完成合并提交。 默认情况下提交信息看起来像下面这个样子：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("Merge branch "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iss53'")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Conflicts:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     index.html")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# It looks like you may be committing a merge.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# If this is not correct, please remove the file")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#\t.git/MERGE_HEAD")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# and try again.")]),t._v("\n\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Please enter the commit message for your changes. Lines starting")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# with '#' will be ignored, and an empty message aborts the commit.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# On branch master")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# All conflicts fixed but you are still merging.")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Changes to be committed:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#\tmodified:   index.html")]),t._v("\n")])])]),e("p",[t._v("如果你觉得上述的信息不够充分，不能完全体现分支合并的过程，你可以修改上述信息，添加一些细节给未来检视这个合并的读者一些帮助，告诉他们你是如何解决合并冲突的，以及理由是什么。")])])}),[],!1,null,null,null);s.default=n.exports}}]);