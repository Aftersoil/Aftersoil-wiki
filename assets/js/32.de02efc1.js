(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{587:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ajax-高级"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ajax-高级"}},[t._v("#")]),t._v(" Ajax 高级")]),t._v(" "),a("h2",{attrs:{id:"代参数的get方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代参数的get方法"}},[t._v("#")]),t._v(" 代参数的"),a("code",[t._v("get")]),t._v("方法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" url"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nurl"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/demo/get_login?uname="')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("$uname"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&upwd="')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v("$upwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v("\t"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("login")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//获取页面上用户的用户名和密码")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" $uname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" $upwd "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" upwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//使用ajax访问服务器，并接受请求")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//1.创建xhr异步对象")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xhr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("XMLHttpRequest")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//4.绑定监听，接受响应")]),t._v("\n xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onreadystatechange")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readyState "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("responseText"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n     "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("alert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//2.创建请求，打开连接")]),t._v("\n xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"get"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/demo/get_login?uname="')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" $uname "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&upwd="')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" $upwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//3.发送请求")]),t._v("\n  xhr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"restful规则的接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#restful规则的接口"}},[t._v("#")]),t._v(" "),a("code",[t._v("restful")]),t._v("规则的接口")]),t._v(" "),a("p",[a("code",[t._v("restful")]),t._v("接口定义规则"),a("br"),t._v("\n/接口名称/:参数值&:参数值")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("注意，使用"),a("code",[t._v("restful")]),t._v("不能把非空验证放到后台。")])]),t._v(" "),a("p",[t._v("而要把非空验证在前端完成")]),t._v(" "),a("h2",{attrs:{id:"post传参"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#post传参"}},[t._v("#")]),t._v(" "),a("code",[t._v("post")]),t._v("传参")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("注意")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("xhr.send(formdata)")]),t._v("必须带着请求主体发送\n"),a("ul",[a("li",[t._v("请求主体就是一个字符串")]),t._v(" "),a("li",[a("code",[t._v('var formdata="uname="+$uname+"&upwd="+$upwd;')])])])]),t._v(" "),a("li",[t._v("在"),a("code",[t._v("xhr.open")]),t._v("和"),a("code",[t._v("xhr.send")]),t._v("之间，设置请求头信息\n"),a("ul",[a("li",[t._v("把"),a("code",[t._v("content-type")]),t._v("设置为可以发送特殊字符")]),t._v(" "),a("li",[a("code",[t._v('xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");')])])])])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.aftersoil.xyz/wiki/image/ajax/post.png",alt:"alt text"}})]),t._v(" "),a("h2",{attrs:{id:"json解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json解析"}},[t._v("#")]),t._v(" "),a("code",[t._v("json")]),t._v("解析")]),t._v(" "),a("p",[a("code",[t._v("json")]),t._v("是以"),a("code",[t._v("js")]),t._v("对象，或者"),a("code",[t._v("js")]),t._v("对象数组为表现形式字符串")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// json 串")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// JavaScript object notation")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// js     对象  表象方式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// json 的来源")]),t._v("\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.可以手写json串")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\" { 'uid': 123 } \"")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2.当服务器操作数据库之后，得到的result，在传递给前端之后自动就变成一个json")]),t._v("\n")])])]),a("h2",{attrs:{id:"json解析-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json解析-2"}},[t._v("#")]),t._v(" "),a("code",[t._v("json")]),t._v("解析")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("把json字符串转换成js对象/js对象数组，这个行为就叫json解析")]),t._v(" "),a("li",[t._v("做json解析的目的，因为要对数据，使用js的api进行处理")])])]),t._v(" "),a("h2",{attrs:{id:"json字符串的格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json字符串的格式"}},[t._v("#")]),t._v(" "),a("code",[t._v("json")]),t._v("字符串的格式")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("json")]),t._v("中用一对"),a("code",[t._v("{}")]),t._v("来表示一个对象")]),t._v(" "),a("li",[a("code",[t._v("json")]),t._v("中所有的属性名称，必须使用双引号括起来\n使用单引号，不会发生错误，但是建议使用双引号")]),t._v(" "),a("li",[a("code",[t._v("json")]),t._v("中的属性值，如果是字符串，也要带双引号")]),t._v(" "),a("li",[t._v("整个"),a("code",[t._v("json")]),t._v("是一个字符串，所以最外层要是用单引号包裹")])])]),t._v(" "),a("h2",{attrs:{id:"json解析语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#json解析语法"}},[t._v("#")]),t._v(" "),a("code",[t._v("json")]),t._v("解析语法")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("JSON")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parse")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// arr 就是一个js的对象数组，可以使用js的数组操作模式了")]),t._v("\n")])])]),a("h2",{attrs:{id:"xml解析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xml解析"}},[t._v("#")]),t._v(" "),a("code",[t._v("xml")]),t._v("解析")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("eXtensible markup language\n可拓展的   标记    语言\n")])])]),a("p",[t._v("所有的标签，属性都是自己定义"),a("br"),t._v(" "),a("code",[t._v("xml")]),t._v("就是做数据传递的，不用于数据展示")]),t._v(" "),a("h2",{attrs:{id:"xml语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xml语法"}},[t._v("#")]),t._v(" "),a("code",[t._v("xml")]),t._v("语法")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("首行做版本声明\n"),a("ul",[a("li",[a("code",[t._v('<?xml version="1.0" encoding="utf-8"?>')])])])]),t._v(" "),a("li",[a("code",[t._v("xml")]),t._v("标记，都是自己命名，只有双标记，没有单标记")]),t._v(" "),a("li",[a("code",[t._v("xml")]),t._v("标记，严格区分大小写，开始标记和结束标记必须一致")]),t._v(" "),a("li",[t._v("每个"),a("code",[t._v("xml")]),t._v("文档，有且只有一对根标记")])])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.aftersoil.xyz/wiki/image/ajax/xml.png",alt:"alt text"}})]),t._v(" "),a("h2",{attrs:{id:"错误总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#错误总结"}},[t._v("#")]),t._v(" 错误总结")]),t._v(" "),a("ul",[a("li",[t._v("数据库没有开启")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.aftersoil.xyz/wiki/image/ajax/database.png",alt:"alt text"}})]),t._v(" "),a("ul",[a("li",[t._v("缺少括号")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.aftersoil.xyz/wiki/image/ajax/kuohao.png",alt:"alt text"}})]),t._v(" "),a("p",[t._v("出乎意料的结尾，login这个方法未定义"),a("br"),t._v("\n说明login方法中缺少}")]),t._v(" "),a("ul",[a("li",[t._v("符号错误")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://images.aftersoil.xyz/wiki/image/ajax/list.png",alt:"alt text"}})])])}),[],!1,null,null,null);s.default=e.exports}}]);