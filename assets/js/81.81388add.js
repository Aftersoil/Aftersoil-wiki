(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{501:function(t,a,s){"use strict";s.r(a);var n=s(22),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"添加自定义函数"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加自定义函数"}},[t._v("#")]),t._v(" 添加自定义函数")]),t._v(" "),s("h2",{attrs:{id:"添加自定义函数-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#添加自定义函数-2"}},[t._v("#")]),t._v(" 添加自定义函数")]),t._v(" "),s("ul",[s("li",[t._v("当项目中经常需要用的一个功能，但是 jQuery 没有提供简化版函数")]),t._v(" "),s("li",[t._v("其实就是定义一个函数，保存在 jQuery 类的原型对象中")])]),t._v(" "),s("blockquote",[s("p",[t._v("jQuery 原型对象中的方法，可用 "),s("code",[t._v("this")]),t._v(" 获得将来调用该函数的.前的 jq 对象。且不用在 "),s("code",[t._v("$()")]),t._v(" 封装 this，应为 "),s("code",[t._v("this")]),t._v(" 已经是 jQuery 子对象")])]),t._v(" "),s("p",[t._v("简写: 其实 "),s("code",[t._v("jQuery.fn = jQuery.prototype")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("所有"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" jQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n可简写为"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" jQuery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("fn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("sum")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"封装-jquery-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#封装-jquery-插件"}},[t._v("#")]),t._v(" 封装 jQuery 插件")]),t._v(" "),s("h2",{attrs:{id:"什么是-jquery-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是-jquery-插件"}},[t._v("#")]),t._v(" 什么是 jQuery 插件")]),t._v(" "),s("ol",[s("li",[t._v("拥有独立的 HTML，css，js 甚至是数据的可重用页面独立区域")]),t._v(" "),s("li",[t._v("以代码重用和简化开发")]),t._v(" "),s("li",[t._v("只要在项目中发现反复使用的页面功能区域，都需要封装插件，在反复使用欧冠插件")])]),t._v(" "),s("h3",{attrs:{id:"封装插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#封装插件"}},[t._v("#")]),t._v(" 封装插件")]),t._v(" "),s("ul",[s("li",[t._v("jQuery 官方插件: jQuery UI")])]),t._v(" "),s("ol",[s("li",[t._v("去官网 jQueryui.com 下载 jQueryUI 库")])]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("引入 jquery"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("css\n引入 jquery"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n引入 jquery"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("ui"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("js\n")])])]),s("ol",{attrs:{start:"3"}},[s("li",[t._v("按照插件要求编写 html 代码，一个 css 都不用加")]),t._v(" "),s("li",[t._v("在自定义 "),s("code",[t._v("<script>")]),t._v(" 找到插件的父元素，对父元素调用插件函数")])]),t._v(" "),s("p",[t._v("原理:")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("侵入性: 不需要开发人员干预，插件函数可自动根据自身需要添加 class 和自定义扩展属性\n  优点: 省事\n  缺点: 可维护性差\n")])])]),s("ul",[s("li",[t._v("封装插件")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1. 提取插件的 css 到一个独立的 css 文件中\n  笔试题: 如何避免组件样式之间的冲突\n    属于一个组件内的 class，都要统一以这个组件的父级 class 名开头，写完整路径\n\n2. 定义独立的 js 文件\n  向 jQuery 类型的原型对象中添加一个插件函数\n\n  1. 自动侵入 class\n  2. 自动绑定事件: 只需要将原来的 js 代码剪切到插件函数中，换一下主语\n")])])]),s("ul",[s("li",[t._v("使用插件")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1. 引入插件 .css\n2. 引入 jquery.js\n    引入插件 .js\n3. 按照插件要求编写 html 内容，不用加 class\n4. 在自定义的 script 中，找到插件的父元素，为其调用插件函数\n")])])]),s("h2",{attrs:{id:"ajax"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ajax"}},[t._v("#")]),t._v(" Ajax")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("$ajax")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    url"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"服务端接口地址"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    type"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get或post"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    data"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("参数"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 参数"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 值"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    dataType"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"json"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 请 ajax 函数帮忙自动将 json 字符串转换为 js 对象或数组，可直接调用(自动调用JSON.parse())")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("success")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("result")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 回调函数: 在请求成功后并成功接收到响应后，自动执行   // result 自动获得服务端返回的结构 }")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不用自己封装 ajax")]),t._v("\n")])])]),s("h2",{attrs:{id:"跨域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨域"}},[t._v("#")]),t._v(" "),s("strong",[t._v("跨域")])]),t._v(" "),s("h2",{attrs:{id:"什么是跨域"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是跨域"}},[t._v("#")]),t._v(" 什么是跨域")]),t._v(" "),s("p",[t._v("一个网站下载的网页，请求/使用了另一个网站下的资源\nAjax 不允许发送跨域请求")]),t._v(" "),s("h2",{attrs:{id:"原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),s("p",[t._v("一个网站的网页中发送的 ajax 请求，只能访问自己网站下提供的数据。不能访问别的网站提供的数据")]),t._v(" "),s("ul",[s("li",[t._v("允许发送请求")]),t._v(" "),s("li",[t._v("也能成功收到请求")]),t._v(" "),s("li",[t._v("浏览器会检查响应头，中的来源地址，如果来来源地址和当前网页所在的地址不同则禁止使用该数据，报错")])]),t._v(" "),s("h2",{attrs:{id:"跨域请求包括"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#跨域请求包括"}},[t._v("#")]),t._v(" 跨域请求包括")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("1. 域名不同 http://www.a.com 下的网站\n  ajax 请求 -> http://www.b.com\n\n2. 子级域名不同 http://oa.tedu.cn 下的网页\n  ajax 请求 -> http:hr.tedu.cn\n\n3. 端口不同 http://localhost:5500 下的网页\n  ajax 请求 -> http://loaclost:3000\n\n4. 协议不同 http://12306.com 下的网页\n  ajax 请求 -> https://12306.com\n  因为协议不同，其实就是端口号不同\n    http 协议默认是 80 端口\n    https 协议默认就是 443 端口\n\n5. 即是同一台机器，相同的端口协议，ip 和域名之间互相访问，也算跨域\n  http://localhost:3000 下的页面\n  ajax 请求 -> hpp://127.0.0.1:3000\n")])])]),s("p",[t._v("以上五中情况，都不允许 ajax 请求数据")]),t._v(" "),s("h2",{attrs:{id:"解决跨域-2-种方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决跨域-2-种方法"}},[t._v("#")]),t._v(" 解决跨域 2 种方法")]),t._v(" "),s("ul",[s("li",[t._v("CORS")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('只需要服务端在返回数据时，在响应头中伪造来源地址，和客户端浏览器地址中的地址保持一致\n\n伪装响应头: {\n  "Access-Control-Allow-Origin": "地址"\n}\n\n伪装响应头时，之写死一个客户地址，如果将来多个客户地址需要这个服务端数据，就不可兼得\n  解决: "Access-Control-Origin": "*"\n    可伪装成任意客户端地址，允许任意客户端都能访问这个服务端的数据\n\n每个接口，都需要伪装响应头，每个接口在返回数据前，都要写 res.writeHead(200, {...})\n\n解决: nodejs 中\n  安装 cors 模块  npm install cors\n  并为 app.js 配置 cors 中间件\n  凡是进入 app.js 的请求，统一先伪装响应头，在进入路由处理数据\n')])])]),s("ol",{attrs:{start:"2"}},[s("li",[t._v("JSONP:")])]),t._v(" "),s("p",[t._v("暂未添加文档")]),t._v(" "),s("h2",{attrs:{id:"前后端分离"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前后端分离"}},[t._v("#")]),t._v(" 前后端分离")]),t._v(" "),s("p",[t._v("将来的项目都是前端和后端两个项目独立开发\n两个项目之间的练习，仅仅靠接口地址")]),t._v(" "),s("p",[t._v("后端: 只负责编写服务程序，并抛出接口地址"),s("br"),t._v("\n前端: 通过 ajax 请求，请求服务端接口地址，提交/获取服务端数据，实现页面交互功能")]),t._v(" "),s("p",[t._v("前后端分离核心技术: ajax 和跨域请求")])])}),[],!1,null,null,null);a.default=r.exports}}]);