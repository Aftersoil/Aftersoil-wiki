(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{564:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nodejs-概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-概述"}},[t._v("#")]),t._v(" NodeJS 概述")]),t._v(" "),a("p",[t._v("基于谷歌V8引擎，运行在服务器端的环境")]),t._v(" "),a("h2",{attrs:{id:"对比-js-和-nodejs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对比-js-和-nodejs"}},[t._v("#")]),t._v(" 对比 JS 和 NodeJS")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("JS运行在浏览器端，存在多种浏览器解释器，容易产生兼容性的问题；而NodeJS运行在服务器端，只有V8引擎一种解释器，不存在兼容性问题。")]),t._v(" "),a("li",[t._v("两者都有内置对象、自定义对象、宿主对象(不相同)")]),t._v(" "),a("li",[t._v("JS用于浏览器端的交互效果，NodeJS用于服务器端操作，例如创建web服务器、操作数据库、文件操作")])])]),t._v(" "),a("h2",{attrs:{id:"nodejs执行方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs执行方式"}},[t._v("#")]),t._v(" NodeJS执行方式")]),t._v(" "),a("ul",[a("li",[t._v("脚本模式")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("node  c:/xampp/.../01.js   回车\n")])])]),a("ul",[a("li",[t._v("交互模式")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("node  回车  进入交互模式\n")])])]),a("ul",[a("li",[t._v("退出交互模式")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("两次Ctrl+c   或者   .exit\n")])])]),a("ul",[a("li",[t._v("NODEJS API")])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://nodejs.cn/api/globals.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("中文版"),a("OutboundLink")],1),a("br"),t._v(" "),a("a",{attrs:{href:"https://nodejs.org/dist/latest-v10.x/docs/api/",target:"_blank",rel:"noopener noreferrer"}},[t._v("英文版"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("适用场景")])]),t._v(" "),a("p",[t._v("基于社交网络的大规模web应用(属于I/O密集型)")]),t._v(" "),a("h2",{attrs:{id:"全局对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局对象"}},[t._v("#")]),t._v(" 全局对象")]),t._v(" "),a("h2",{attrs:{id:"nodejs-global"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-global"}},[t._v("#")]),t._v(" NodeJS: global")]),t._v(" "),a("p",[t._v("在交互模式下，声明的变量和创建函数都属于全局对象下的，可以使用"),a("code",[t._v("global")]),t._v("来访问  "),a("code",[t._v("global.a")]),t._v(" "),a("code",[t._v("global.fn")]),a("br"),t._v("\n在脚本模式，声明的变量和创建函数都不属于全局对象下的，不能使用"),a("code",[t._v("global")]),t._v("来访问")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" global"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"js-window"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js-window"}},[t._v("#")]),t._v(" JS：window")]),t._v(" "),a("p",[t._v("在JS脚本中声明的变量和创建的函数都属于全局对象下的，可以使用"),a("code",[t._v("window")]),t._v("访问  "),a("code",[t._v("window.a")]),t._v(" "),a("code",[t._v("window.fn()")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"process对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#process对象"}},[t._v("#")]),t._v(" process对象")]),t._v(" "),a("p",[t._v("进程: 执行程序的时候，操作系统分配内存空间")]),t._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[t._v("process.arch        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前CPU架构")]),t._v("\nprocess.platform    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前的操作系统")]),t._v("\nprocess.env         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前的环境变量有哪些")]),t._v("\nprocess.version     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前NodeJS版本号")]),t._v("\nprocess.pid         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前进程的编号")]),t._v("\nprocess.kill"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 结束某个编号的进程")]),t._v("\n")])])]),a("h2",{attrs:{id:"console-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#console-对象"}},[t._v("#")]),t._v(" console 对象")]),t._v(" "),a("p",[t._v("标准输出")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印日志")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("info")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印消息")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("warn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印警告")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 打印错误")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'自定义字符串'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始计时")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("timeEnd")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'自定义字符串'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  结束计时")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("注意：开始计时和结束计时的字符串保持一致。")])]),t._v(" "),a("h2",{attrs:{id:"buffer-对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#buffer-对象"}},[t._v("#")]),t._v(" Buffer 对象")]),t._v(" "),a("p",[t._v("缓冲区: 在内存中存储数据的区域，常用于网络传输时的资源")]),t._v(" "),a("ul",[a("li",[t._v("创建Buffer")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" buf "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Buffer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alloc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'abcde'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 将buffer数据转为字符串")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" buf"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块"}},[t._v("#")]),t._v(" 模块")]),t._v(" "),a("p",[t._v("模块：就是一个独立的功能体"),a("br"),t._v("\n在NodeJS下，模块分为："),a("a",{attrs:{href:"#%E8%87%AA%E5%AE%9A%E4%B9%89%E6%A8%A1%E5%9D%97"}},[t._v("自定义模块")]),t._v("、核心模块、第三方模块")]),t._v(" "),a("h2",{attrs:{id:"自定义模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义模块"}},[t._v("#")]),t._v(" 自定义模块")]),t._v(" "),a("p",[t._v("在NodeJS，每一个文件都是一个模块"),a("br"),t._v("\nNodeJS自动为每个文件添加了构造函数，所有的代码被构造函数所包含")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" __dirname")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 程序员自己写的代码")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"课后任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课后任务"}},[t._v("#")]),t._v(" 课后任务")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("练习")]),t._v(" "),a("ul",[a("li",[t._v("创建两个模块main.js(主模块)，circle.js(功能模块)，在功能模块下创建两个函数，传递半径，计算圆的周长和面积，并导出两个函数，在主模块下引入功能模块，并调用两个函数。")]),t._v(" "),a("li",[a("strong",[t._v("预习核心模块   "),a("code",[t._v("querystring")]),t._v(" "),a("code",[t._v("url")]),t._v(" "),a("code",[t._v("fs")]),t._v(" 文件操作")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);