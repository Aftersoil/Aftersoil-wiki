(window.webpackJsonp=window.webpackJsonp||[]).push([[57],{561:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webpack-概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-概述"}},[t._v("#")]),t._v(" webpack 概述")]),t._v(" "),a("blockquote",[a("p",[t._v("本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。")])]),t._v(" "),a("p",[t._v("从 webpack v4.0.0 开始，可以不用引入一个配置文件。然而，webpack 仍然还是"),a("a",{attrs:{href:"https://www.webpackjs.com/configuration/",target:"_blank"}},[t._v("高度可配置")]),t._v("。在开始前你需要先理解四个核心概念：")]),t._v(" "),a("ul",[a("li",[t._v("入口(entry)")]),t._v(" "),a("li",[t._v("输出(output)")]),t._v(" "),a("li",[t._v("loader")]),t._v(" "),a("li",[t._v("插件(plugins)")])]),t._v(" "),a("p",[t._v("本文档旨在给出这些概念的高度概述，同时提供具体概念的详尽相关用例。")]),t._v(" "),a("p",[t._v("作用：")]),t._v(" "),a("ul",[a("li",[t._v("可以把 ES6 规范转为 ES5 规范，让浏览器可以直接执行")]),t._v(" "),a("li",[t._v("可以有效减少网络请求的文件数量：请求优化的一种方式")]),t._v(" "),a("li",[t._v("图片打包：剔除掉没有用的图片，减少垃圾数据")])]),t._v(" "),a("h2",{attrs:{id:"js模块化写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js模块化写法"}},[t._v("#")]),t._v(" JS模块化写法")]),t._v(" "),a("p",[t._v("为了防止引入多个js文件，产生全局变量污染，出现冲突的情况\n把js代码的每个功能点剥离出来，形成单独的模块，后期做维护代码时，都可以直接替换单独模块而不修改整体代码，可维护性高")]),t._v(" "),a("p",[t._v("复用性强：同一个模块，可以引入到多个位置，复制操作，减少重复代码的编写")]),t._v(" "),a("p",[t._v("模块化的解决规范：")]),t._v(" "),a("ul",[a("li",[t._v("CommonJS 使用在Node.js服务器上，是一个同步的")]),t._v(" "),a("li",[t._v("CMD 使用在客户端浏览器上，是一个异步的")]),t._v(" "),a("li",[t._v("AMD 使用在客户端浏览器上，是一个异步的")]),t._v(" "),a("li",[t._v("ES6 JS原生，可以使用在 前端+后端 都可以")])]),t._v(" "),a("h2",{attrs:{id:"es6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#es6"}},[t._v("#")]),t._v(" ES6")]),t._v(" "),a("p",[t._v("可以到处任意多个对象，必须在服务器运行，否则会报错")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导出单个")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" x "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Stu")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("你好世界")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导入单个")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" add"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" Stu "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./export.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导出多个")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过 as 可以起别名")]),t._v("\n  sex "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" gender\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 导入多个")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" temp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./exprot.js'")]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("temp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用者可以省略 as *")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  age"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 通过 as 可以起别名")]),t._v("\n  sex "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" gender\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" temp "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./exprot.js'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 注意：\n * 导入的格式 import {} from ''\n * 和 export 对象的单词 import\n * from 从...里导出\n * from 后必须填路径，带有js结尾，是文件名\n * {} 中可以自定义填写想要引入的内容\n * 因为 ES6 一个文件中可以导出多个值，使用者不一定都用到，那么就可以自定义引入想要的值\n * \n * 测试：这是ES6不是NodeJS，不能使用 Node xx.js来执行\n * 使用浏览器，需要通过 html 文件显示，ES6是新特性，低版本浏览器基本不支持需要加一个 type=\"module\" 的属性，让浏览器知道这是新特性\n */")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);