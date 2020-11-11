(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{598:function(t,s,e){"use strict";e.r(s);var a=e(12),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"撤销操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#撤销操作"}},[t._v("#")]),t._v(" 撤销操作")]),t._v(" "),e("p",[t._v("在任何一个阶段，你都有可能想要撤消某些操作。 这里，我们将会学习几个撤消你所做修改的基本工具。 注意，"),e("strong",[t._v("有些撤消操作是不可逆 的")]),t._v("。 这是在使用 Git 的过程中，会因为操作失误而导致之前的工作丢失的少有的几个地方之一。")]),t._v(" "),e("h2",{attrs:{id:"修正提交-amend"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#修正提交-amend"}},[t._v("#")]),t._v(" 修正提交 --amend")]),t._v(" "),e("p",[t._v("有时候我们提交完了才发现 "),e("strong",[t._v("漏掉")]),t._v(" 了几个文件没有添加，或者 "),e("strong",[t._v("提交信息写错")]),t._v(" 了。 此时，可以运行带有 –amend 选项的提交命令尝试重新提交：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend\n")])])]),e("p",[t._v("这个命令会将 "),e("strong",[t._v("暂存区中的文件提交。")]),t._v(" 如果 "),e("strong",[t._v("自上次提交以来你还未做任何修改")]),t._v("（例如，在上次提交后马上执行了此命令），那么快照会保持不变，而你所修改的只是提交信息。")]),t._v(" "),e("p",[t._v("文本编辑器启动后，可以看到之前的提交信息。 编辑后保存会覆盖原来的提交信息。")]),t._v(" "),e("p",[t._v("例如，你 "),e("strong",[t._v("提交后")]),t._v(" 发现忘记了暂存某些需要的修改，可以像下面这样操作：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 先提交了")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'initial commit'")]),t._v("   \n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 然后发现少提交了一个文件，这里 add 后")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" forgotten_file\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 再进行修正，会弹出之前的提交信息，供你进行修改")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 提交之后，效果就是修正了前面一个的提交，而不是多了一个新的提交")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这个还是非常有用的")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit --amend\n")])])]),e("p",[t._v("最终你只会有一个提交 – 第二次提交将代替第一次提交的结果。")]),t._v(" "),e("h2",{attrs:{id:"取消暂存的文件-reset-head"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#取消暂存的文件-reset-head"}},[t._v("#")]),t._v(" 取消暂存的文件 "),e("code",[t._v("reset HEAD")])]),t._v(" "),e("p",[t._v("接下来的两个小节演示如何操作 "),e("strong",[t._v("暂存区域")]),t._v(" 与 "),e("strong",[t._v("工作目录中已修改的文件")]),t._v("。 这些命令在修改文件状态的同时，也会提示如何撤消操作。 例如，你已经修改了两个文件并且想要将它们作为两次独立的修改提交，但是却意外地输入了 "),e("code",[t._v("git add *")]),t._v(" 暂存了它们两个。 "),e("strong",[t._v("如何只取消暂存两个中的一个呢")]),t._v("？ "),e("code",[t._v("git status")]),t._v(" 命令提示了你：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" *\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# On branch master")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Changes to be committed:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#   (use "git reset HEAD <file>..." to unstage)')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     renamed:    README.md -> README")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#    modified:   CONTRIBUTING.md")]),t._v("\n")])])]),e("p",[t._v("在 "),e("code",[t._v("Changes to be committed")]),t._v(" 文字正下方，提示使用 "),e("code",[t._v("git reset HEAD <file>…")]),t._v(" 来取消暂存。 所以，我们可以这样来取消暂存 CONTRIBUTING.md 文件")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD CONTRIBUTING.md\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Unstaged changes after reset:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# M\tCONTRIBUTING.md")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# On branch master")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Changes to be committed:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#   (use "git reset HEAD <file>..." to unstage)')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     renamed:    README.md -> README")]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Changes not staged for commit:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#   (use "git add <file>..." to update what will be committed)')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#   (use "git checkout -- <file>..." to discard changes in working directory)')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     modified:   CONTRIBUTING.md")]),t._v("\n")])])]),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("虽然在调用时加上 "),e("code",[t._v("–hard")]),t._v(" 选项 可以令 "),e("code",[t._v("git reset")]),t._v(" 成为一个危险的命令（译注："),e("strong",[t._v("可能导致工作目录中所有当前进度丢失！")]),t._v("），但本例中工作目录内的文件并不会被修改。 "),e("strong",[t._v("不加选项地调用 "),e("code",[t._v("git reset")]),t._v(" 并不危险 — 它只会修改暂存区域")]),t._v("。")])]),t._v(" "),e("p",[t._v("到目前为止这个神奇的调用就是你需要对 git reset 命令了解的全部。我们将会在 "),e("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%B7%A5%E5%85%B7-%E9%87%8D%E7%BD%AE%E6%8F%AD%E5%AF%86",target:"_blank",rel:"noopener noreferrer"}},[t._v("重置揭密"),e("OutboundLink")],1),t._v(" 中了解 reset 的更多细节以及如何掌握它做一些真正有趣的事.")]),t._v(" "),e("h2",{attrs:{id:"撤消对文件的修改"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#撤消对文件的修改"}},[t._v("#")]),t._v(" 撤消对文件的修改")]),t._v(" "),e("p",[t._v("如果你并不想保留对 CONTRIBUTING.md 文件的修改怎么办？ 你该如何方便地撤消修改 – "),e("strong",[t._v("将它还原成上次提交时的样子")]),t._v("（或者刚克隆完的样子，或者刚把它放入工作目录时的样子）？ 幸运的是，git status 也告诉了你应该如何做。 在最后一个例子中，未暂存区域是这样：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[t._v("Changes not staged "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" commit:\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git add <file>..."')]),t._v(" to update what will be committed"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("use "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"git checkout -- <file>..."')]),t._v(" to discard changes "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" working directory"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    modified:   CONTRIBUTING.md\n")])])]),e("p",[t._v("它非常清楚地告诉了你如何撤消之前所做的修改。 让我们来按照提示执行：")]),t._v(" "),e("div",{staticClass:"language-sh extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sh"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" checkout -- CONTRIBUTING.md\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" status\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# On branch master")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Changes to be committed:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v('#   (use "git reset HEAD <file>..." to unstage)')]),t._v("\n\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     renamed:    README.md -> README")]),t._v("\n")])])]),e("p",[t._v("可以看到那些修改已经被撤消了。")]),t._v(" "),e("div",{staticClass:"custom-block tip"},[e("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),e("p",[t._v("你需要知道 "),e("code",[t._v("git checkout — [file]")]),t._v(" 是一个 "),e("strong",[t._v("危险的命令")]),t._v("，这很重要。 你 "),e("strong",[t._v("对那个文件做的任何修改都会消失")]),t._v(" – 你只是拷贝了另一个文件来覆盖它。 除非你确实清楚不想要那个文件了，否则不要使用这个命令。")])]),t._v(" "),e("p",[t._v("如果你仍然想保留对那个文件做出的修改，但是现在仍然需要撤消，我们将会在 "),e("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%88%86%E6%94%AF-%E5%88%86%E6%94%AF%E7%AE%80%E4%BB%8B",target:"_blank",rel:"noopener noreferrer"}},[t._v("Git 分支"),e("OutboundLink")],1),t._v(" 介绍保存进度与分支；这些通常是更好的做法。")]),t._v(" "),e("p",[t._v("记住，在 Git 中任何 已提交的 东西 "),e("strong",[t._v("几乎总是可以恢复")]),t._v(" 的。 甚至那些被删除的分支中的提交或使用 –amend 选项覆盖的提交也可以恢复（阅读 "),e("a",{attrs:{href:"https://git-scm.com/book/zh/v2/Git-%E5%86%85%E9%83%A8%E5%8E%9F%E7%90%86-%E7%BB%B4%E6%8A%A4%E4%B8%8E%E6%95%B0%E6%8D%AE%E6%81%A2%E5%A4%8D#_data_recovery",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据恢复"),e("OutboundLink")],1),t._v(" 了解数据恢复）。 然而，任何你未提交的东西丢失后很可能再也找不到了。")])])}),[],!1,null,null,null);s.default=n.exports}}]);