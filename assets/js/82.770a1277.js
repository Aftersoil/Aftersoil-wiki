(window.webpackJsonp=window.webpackJsonp||[]).push([[82],{531:function(t,s,a){"use strict";a.r(s);var e=a(14),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"git-仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#git-仓库"}},[t._v("#")]),t._v(" Git 仓库")]),t._v(" "),a("p",[t._v("有两种方式：")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%9C%A8%E7%8E%B0%E6%9C%89%E7%9B%AE%E5%BD%95%E4%B8%AD%E5%88%9D%E5%A7%8B%E5%8C%96%E4%BB%93%E5%BA%93"}},[t._v("在现有目录中初始化仓库")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E6%9C%89%E5%85%8B%E9%9A%86%E7%8E%B0%E6%9C%89%E4%BB%93%E5%BA%93"}},[t._v("有克隆现有仓库")])])]),t._v(" "),a("h2",{attrs:{id:"在现有目录中初始化仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#在现有目录中初始化仓库"}},[t._v("#")]),t._v(" 在现有目录中初始化仓库")]),t._v(" "),a("p",[t._v("进入项目目录，并输入以下命令")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" init\n")])])]),a("p",[t._v("该命令将创建一个名为 .git 的子目录【为隐藏文件夹】，这个子目录含有你初始化的 Git 仓库中所有的必须文件，这些文件是 Git 仓库的骨干。 但是，在这个时候，我们仅仅是做了一个初始化的操作，你的项目里的文件还没有被跟踪。")]),t._v(" "),a("p",[t._v("可以通过如下命令，对你的文件进行跟踪并提交。")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# add 命令对指定文件进行跟踪")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" *.c\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" LICENSE\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# commit 命令进行提交")]),t._v("\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'initial project version'")]),t._v("\n")])])]),a("h2",{attrs:{id:"有克隆现有仓库"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#有克隆现有仓库"}},[t._v("#")]),t._v(" 有克隆现有仓库")]),t._v(" "),a("p",[t._v("Git 克隆的是该 Git 仓库服务器上的几乎所有数据，而不是仅仅复制完成你的工作所需要文件。 当你执行 git clone 命令的时候，默认配置下远程 Git 仓库中的每一个文件的每一个版本都将被拉取下来。")]),t._v(" "),a("p",[t._v("克隆仓库的命令格式是 "),a("code",[t._v("git clone [url]")]),t._v(" 。 比如，要克隆 Git 的可链接库 BigFish，可以用下面的命令：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/Thomasvader/BigFish.git\n")])])]),a("p",[t._v("这会在当前目录下创建一个名为 「BigFish」 的目录，并在这个目录下初始化一个 .git 文件夹，从远程仓库拉取下所有数据放入 .git 文件夹，然后从中读取最新版本的文件的拷贝。 如果你进入到这个新建的 BigFish 文件夹，你会发现所有的项目文件已经在里面了，准备就绪等待后续的开发和使用。 如果你想在克隆远程仓库的时候，自定义本地仓库的名字，你可以使用如下命令：")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/Thomasvader/BigFish.git myTest\n")])])]),a("p",[t._v("这将执行与上一个命令相同的操作，不过在本地创建的仓库名字变为 myTest")])])}),[],!1,null,null,null);s.default=n.exports}}]);