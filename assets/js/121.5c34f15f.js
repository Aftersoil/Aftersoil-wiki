(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{570:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"jquery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery"}},[t._v("#")]),t._v(" jQuery")]),t._v(" "),a("h2",{attrs:{id:"了解-jquery"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#了解-jquery"}},[t._v("#")]),t._v(" 了解 jQuery")]),t._v(" "),a("ul",[a("li",[t._v("简单")]),t._v(" "),a("li",[t._v("解决了大部分浏览器兼容性问题")]),t._v(" "),a("li",[t._v("凡是 jQuery 让用的都没有兼容性问题")]),t._v(" "),a("li",[t._v("今后 pc 端的项目，以及主流框架底层，都是用 jQuery 实现的")]),t._v(" "),a("li",[t._v("jQuery 仅适用与 pc 端，不适用与移动版本")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://jquery.com/",target:"_blank"}},[t._v("jQuery 官网")]),a("br"),t._v(" "),a("a",{attrs:{href:"https://api.jquery.com/",target:"_blank"}},[t._v("jQuery 官网手册")]),a("br"),t._v(" "),a("a",{attrs:{href:"https://www.jb51.net/shouce/jquery1.82/",target:"_blank"}},[t._v("jQuery 中文手册")]),a("br"),t._v(" "),a("a",{attrs:{href:"https://github.com/jquery/",target:"_blank"}},[t._v("Github jQuery")])])]),t._v(" "),a("h2",{attrs:{id:"jquery-版本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-版本"}},[t._v("#")]),t._v(" jQuery 版本")]),t._v(" "),a("p",[t._v("版本:")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("1x 唯一支持旧浏览器的版本"),a("br"),t._v("\n2x 不在支持旧浏览器"),a("br"),t._v("\n3x 不在支持旧浏览器，而且添加了部分新功能")])]),t._v(" "),a("p",[t._v("引入:")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("那个页面需要使用 jQuery 的简化版函数，都要先引入 jQuery.js 在编写自定义的 js 代码")])]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("jQuery.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("出于性能的考虑: 所有的 js 代码的引入，都要放在 body 结尾。避免影响网页内容的加载")]),t._v(" "),a("h2",{attrs:{id:"jquery-的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-的原理"}},[t._v("#")]),t._v(" jQuery 的原理")]),t._v(" "),a("p",[t._v("当引入 jQuery.js 时")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("其实在 window 中添加了一中新类型的 jQuery\njQuery类型也有两部分组成\n\n  1. 构造函数 function jQuery() {}\n    负责创建该类型的子对象\n  \n  2. 原型对象 jQuery.prototype\n    负责保存该类型所有子对象中共有的函数\n")])])]),a("h2",{attrs:{id:"jquery-简化版函数的三大特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#jquery-简化版函数的三大特点"}},[t._v("#")]),t._v(" jQuery 简化版函数的三大特点")]),t._v(" "),a("ol",[a("li",[t._v("一个函数两用")])]),t._v(" "),a("p",[t._v("jQuery 中没有属性，只有函数")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('比如: 获得按钮的内容\n  DOM: btn.innerHTML\n  修改 DOM 元素\n  DOM: btn.innerHTML = 新值\n\n但是在 jQuery 中都是函数，没有属性，怎么实现对一个属性获取或添加操作\n  重载: 同一个函数，根据传入的参数不同，执行不同的操作\n\n  jQuery中: 一个修改属性的函数，如果没有给新值，就默认执行获取属性值的操作。如果给了新值参数，就变成修改属性值的操作\n    不如: 获得按钮内容\n      jQuery中: var 内容 = $btn.html(); -- 获取\n      修改按钮的内容\n      jQuery中: $btn.html("新值");  -- 修改\n')])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("总结: "),a("br"),t._v("\njQuery 中凡是修改属性或内容的函数，都是一个函数两用。如果没有给新值，默认执行获取属性或内容的操作。如果给了新值，就变成了修改属性或内容的操作")])]),t._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[t._v("自带遍历")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("对 jQuery 类数组对象，调用一次简化版函数，等效于类数组对象内部保存的所有 DOM 元素，都调用一次函数 --- jQuery 对象自动的功能")])]),t._v(" "),a("h2",{attrs:{id:"查找元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查找元素"}},[t._v("#")]),t._v(" 查找元素")]),t._v(" "),a("p",[t._v('按选择器查找元素: $("选择器")')]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* jQuery 不但支持所有的 CSS 选择器，而且还增加了一批新增的 jQUery 专属选择器 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("包括")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    css "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("中的子元素过滤")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("first-child    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("作为其父元素下第一个子元素的所有元素")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("last-child")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nth-child")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("only-child\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 总结: 根据元素在其父元素的相对下标位置选择元素。且序号从 1 开始 */")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 基本过滤 jQuery 新增: */")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 如果按照元素在其父元素内的相对位置选择器时 */")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("first")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("last")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("eq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("gt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("even")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("odd\n      偶数      奇数\n      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 特点: 先将符合条件的元素去出，统一放入一个集合中。按元素在集合中的编号选择元素。且下标从 0 开始 */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 今后希望打破父元素的界限，所有子元素统一编号，按位置找到元素时 */")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("总结: "),a("br"),t._v("\n今后只要能用 css 做的效果，一定首选 css 做，因为 css 的效率就是比 js 高，且 css 没有框架和平台的兼容性问题。"),a("br"),t._v("\n即是 jQuery 中的选择器，也必须首选 css 选择器，css 选择器做不了的，才被迫选择 jQuery 新增的选择器。因为 jQuery 新增的选择器都是用 js 程序在底层模拟的————效率低的")])]),t._v(" "),a("h2",{attrs:{id:"的原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#的原理"}},[t._v("#")]),t._v(" $ 的原理")]),t._v(" "),a("ul",[a("li",[t._v("创建 jQuery 对象，封装 DOM 元素")]),t._v(" "),a("li",[t._v('先查找在封装 $("选择器")')]),t._v(" "),a("li",[t._v("直接封装 $(DOM元素) 经常 $(this) 或者 $(e.target)")])])])}),[],!1,null,null,null);s.default=r.exports}}]);