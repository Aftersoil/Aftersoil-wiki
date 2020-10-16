(window.webpackJsonp=window.webpackJsonp||[]).push([[155],{492:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"别名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#别名"}},[t._v("#")]),t._v(" 别名")]),t._v(" "),a("p",[t._v("在我们结束本章 Git 基础之前，正好有一个小技巧可以使你的 Git 体验更简单、容易、熟悉："),a("strong",[t._v("别名")]),t._v("。 我们不会在之后的章节中引用到或假定你使用过它们，但是你大概应该知道如何使用它们。")]),t._v(" "),a("p",[t._v("Git 并不会在你输入部分命令时自动推断出你想要的命令。 如果不想每次都输入完整的 Git 命令，可以通过 git config 文件来轻松地为每一个命令设置一个别名。 这里有一些例子你可以试试：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global alias.co checkout\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global alias.br branch\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global alias.ci commit\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global alias.st status\n")])])]),a("p",[t._v("这意味着，当要输入 "),a("code",[t._v("git commit")]),t._v(" 时，只需要输入 "),a("code",[t._v("git ci")]),t._v("。 随着你继续不断地使用 Git，可能也会经常使用其他命令，所以创建别名时不要犹豫。")]),t._v(" "),a("p",[t._v("在创建你认为应该存在的命令时这个技术会很有用。 例如，为了解决取消暂存文件的易用性问题，可以向 Git 中添加你自己的取消暂存别名：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global alias.unstage "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reset HEAD --'")]),t._v("\n")])])]),a("p",[t._v("这会使下面的两个命令等价：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" unstage fileA\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" reset HEAD -- fileA\n")])])]),a("p",[t._v("这样看起来更清楚一些。 通常也会添加一个 last 命令，像这样：")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("git config --global alias.last 'log -1 HEAD'\n")])])]),a("p",[t._v("这样，可以轻松地看到最后一次提交：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" last\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# commit 66938dae3329c7aebe598c2246a8e6af90d04646")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Author: Josh Goebel <lwmwll@163.com>")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Date:   Tue Aug 26 19:48:51 2008 +0800")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     test for current head")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#     Signed-off-by: Scott Chacon <lwmwll@163.com>")]),t._v("\n")])])]),a("p",[t._v("可以看出，Git 只是简单地将别名替换为对应的命令。 然而，你可能想要执行外部命令，而不是一个 Git 子命令。 如果是那样的话，可以在命令前面加入 ! 符号。 如果你自己要写一些与 Git 仓库协作的工具的话，那会很有用。 我们现在演示将 git visual 定义为 gitk 的别名：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" config --global alias.visual "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'!gitk'")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);