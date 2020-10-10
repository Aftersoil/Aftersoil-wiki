(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{553:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"事件操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件操作"}},[t._v("#")]),t._v(" 事件操作")]),t._v(" "),a("h2",{attrs:{id:"修改"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改"}},[t._v("#")]),t._v(" 修改")]),t._v(" "),a("p",[t._v("克隆:")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 复制一个和原 DOM 元素相同的一个新元素")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" $新元素 "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" $现有元素"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("clone")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"事件绑定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件绑定"}},[t._v("#")]),t._v(" 事件绑定")]),t._v(" "),a("ul",[a("li",[t._v("事件绑定")])]),t._v(" "),a("p",[t._v("DOM 中灵活的事件绑定")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("元素"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"事件名"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 处理函数"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n元素"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"事件名"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 处理函数名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("jq 中共有几种事件绑定的方式")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("bind"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("unbind"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 单纯的代替 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 和 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("removeEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 用法完全相同\n")])])]),a("ul",[a("li",[t._v("事件委托")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*\nDOM: 事件委托 3 件事\n  1. 事件绑定在父元素上一次\n  2. 用 e.target 代替 this\n  3. 判断 e.target 是否想要的\n\njq 中: .delegate()/undelegate()\n  1. 事件绑定在父元素上一次\n  2. this 又回来了  this. == e.target\n  3. 不用自己写 if ($target.is("选择器"))\n     而是将选择器作为参数交给 delegate() 请 delegate 自动判断当前元素是否符合要求\n\n  $父元素.delegate("选择器条件", "事件名", function(){ ...  $( this) })\n*/')]),t._v("\n")])])]),a("ul",[a("li",[t._v("on/off(): 其实就是 bind 和 delegate 的封装")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*\n重载方式\n  1. 直接个子元素绑定事件\n    $元素.on("事件名", 处理函数)\n      等效于 bind() 等效于 addEnevtListener()\n  \n  2. 如果利用事件委托时\n    $父元素.on("事件名", "选择器调价", function(){ .... })\n*/')]),t._v("\n")])])]),a("ul",[a("li",[t._v(".事件名() 仅等效于 bind() 无法利用事件委托的优势")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('/*\n强调: 只有 21 种常用的事件被简写了\n  除了 21 种之外，都不能简写\n    如: input 事件: 当文本输入一个文字后自动触发。\n        $txt.on("input", function(){...})\n*/')]),t._v("\n")])])]),a("h2",{attrs:{id:"页面加载顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#页面加载顺序"}},[t._v("#")]),t._v(" 页面加载顺序")]),t._v(" "),a("p",[t._v("统称 js 代码(查找元素，事假绑定)都必须在页面内容加载完成，才能执行")]),t._v(" "),a("p",[t._v("将 js 放在 "),a("code",[t._v("<body>")]),t._v(" 元素内容底部")]),t._v(" "),a("ul",[a("li",[t._v("通过绑定窗口事件 onload 事件")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"load"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\njq"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("winsow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("load")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("在 onload 之前还有一个 DOMContentLoaded 事件")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOMContentLoaded 事件仅等待 html 和 js 加载完成就自动触发。不必等待 css 和图片比 onload 早的多")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DOMContentLoaded 有兼容性问题")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// jq 中")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ready")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n  简写"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 今后几乎所有的 jq 代码都要放在 $(function(){ ... }) 内。可以代替 js 中的匿名函数中。")]),t._v("\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("总结")]),t._v(" "),a("ul",[a("li",[t._v("大部分和 css 和图片无关的初始化操作，不如: 事件绑定，用过首选在 DOMContentLoaded，ajax 等 中提前执行")]),t._v(" "),a("li",[t._v("只要个别依赖于 css 和图片的初始化操作才被迫放在 window.onload 中")])])]),t._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("p",[t._v("$ 的原理")]),t._v(" "),a("ol",[a("li",[t._v('创建 jq 对象并查找元素 $("选择器")')]),t._v(" "),a("li",[t._v("创建 jq 对象直接封装 DOM 元素 $(this) $(e.target)")]),t._v(" "),a("li",[t._v('创建新的 DOM 元素 $("html片段")')]),t._v(" "),a("li",[t._v("绑定 DOM 内容加载后就提前执行的时间 $(function(){ ... })")])])])]),t._v(" "),a("h2",{attrs:{id:"鼠标事件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#鼠标事件"}},[t._v("#")]),t._v(" 鼠标事件")]),t._v(" "),a("ul",[a("li",[t._v("DOM")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mouseover 鼠标进入\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mouseout 鼠标移除\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 频繁进出子元素，也会冒泡触发父元素上的事件，容易引起误会")]),t._v("\n")])])]),a("ul",[a("li",[t._v("jq 中")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("mouseenter "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 鼠标移入")]),t._v("\nmouseleave "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 鼠标移除")]),t._v("\n")])])]),a("ul",[a("li",[t._v("模拟触发")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("$元素"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trigger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"事件名"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动画"}},[t._v("#")]),t._v(" 动画")]),t._v(" "),a("h2",{attrs:{id:"简单动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单动画"}},[t._v("#")]),t._v(" 简单动画")]),t._v(" "),a("ul",[a("li",[t._v("显示隐藏")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("show")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("hide")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 不加参数时，默认使用 display: block 和display: none 控制瞬间显示隐藏")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果想有动画效果，必须加持续时间参数")]),t._v("\n")])])]),a("ul",[a("li",[t._v("上滑下滑")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slideUp")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("slideDown")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("淡入淡出")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fadeIn")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fadeOut")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("ul",[a("li",[t._v("简单动画所有函数的共性")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("1. 效果是写死的！几乎不可维护\n2. 用 js 定时器和 DOM 操作模拟器的动画效果 --- 效率极低\n")])])]),a("h2",{attrs:{id:"万能动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#万能动画"}},[t._v("#")]),t._v(" 万能动画")]),t._v(" "),a("p",[t._v("可对任何 css 属性应用动画效果，只要希望对任意 css 属性应用动画效果时")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("$元素"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("animate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  css属性"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" 目标值\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 动画持续事件"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("blockquote",[a("p",[t._v("让当前元素从现在的状态，经过指定的时间后缓慢过渡到目标状态"),a("br"),t._v("\nanimate() 中只需要写目标值，animate() 可自动获得当前对应的属性值，自动计算变化的距离")])]),t._v(" "),a("blockquote",[a("p",[t._v("也是 js 定时器和 DOM 操作模拟的动画效果"),a("br"),t._v("\n只支持单个数值的 css 属性，不支持 css3 动画，不支持颜色过渡")])]),t._v(" "),a("h4",{attrs:{id:"排队和并发"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#排队和并发"}},[t._v("#")]),t._v(" 排队和并发")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("并发执行: 多个 css 属性同时变化")]),t._v(" "),a("blockquote",[a("p",[t._v("一个 animate() 内的多个 css 属性默认并发执行")])])]),t._v(" "),a("li",[a("p",[t._v("排队执行: 多个 css 属性按顺序依次先后变化")]),t._v(" "),a("blockquote",[a("p",[t._v("对同一个元素先后调用多次 animate() 函数，多次 animate 函数中的 css 属性排队执行")])])]),t._v(" "),a("li",[a("p",[t._v("停止动画  $元素.stop()")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("默认只能停止当前正在播放的一个动画。如果队列中后续还有其它动画，则依然继续执行\n\n$元素.stop(true)\n  停止当前动画，且清除动画队列\n\n判断一个元素是否在播放 jQuery 动画\n  :animated 选择器\n  专门匹配正在播放的动画的元素\n")])])]),a("h2",{attrs:{id:"类数组对象操作"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类数组对象操作"}},[t._v("#")]),t._v(" 类数组对象操作")]),t._v(" "),a("blockquote",[a("p",[t._v("js 中类数组对象很受歧视，长得象数组，但是数组家好用的函数，类数组对象都用不了。但是 jq 中创建 jq 对象，都是类数组对象，于是 jQuery 就是 jq 对象，模拟出来两个和数组家功能相似的函数")])]),t._v(" "),a("ul",[a("li",[t._v("遍历")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("js 数组中"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("elem"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\njq 中"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("each")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("DOM")]),t._v("元素")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 依次去除.前的查找结果集合中的每个 DOM 元素，执行相同的操作")]),t._v("\n")])])]),a("ul",[a("li",[t._v("查找")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("js 数组中"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("indexOf")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("值"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\njq 中"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" $i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("$")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("查找结果"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("index")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("元素"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 查找元素在结果集合中的位置")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);