(window.webpackJsonp=window.webpackJsonp||[]).push([[105],{625:function(s,t,a){"use strict";a.r(t);var n=a(12),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"scss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scss"}},[s._v("#")]),s._v(" SCSS")]),s._v(" "),a("p",[s._v("css 是一种脚本语言，没有动态语言特征"),a("br"),s._v("\ncss 语法不够强大，没有变量和合理的样式服用机制，导致难以维护"),a("br"),s._v("\n我们需要使用动态的 样式语言，赋予 css 新的特性")]),s._v(" "),a("p",[s._v("常见的动态样式语言")]),s._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://www.sass.hk/",target:"_b"}},[s._v("scss/sass")]),s._v("(scss 兼容 sass，scss 跟接近 css 语法)")]),s._v(" "),a("li",[a("a",{attrs:{href:"https://stylus.bootcss.com/",target:"_b"}},[s._v("stylus")])]),s._v(" "),a("li",[a("a",{attrs:{href:"http://lesscss.org/",target:"_b"}},[s._v("less")])])]),s._v(" "),a("h2",{attrs:{id:"scss-的功能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scss-的功能"}},[s._v("#")]),s._v(" scss 的功能")]),s._v(" "),a("p",[s._v("scss 是一款强化 css 的辅助工具"),a("br"),s._v("\n它和 css 语法很象，在 css 的基础上增加了变量，嵌套，混合，导入，函数等高级功能。这些扩展，让 css 更加的强大优雅")]),s._v(" "),a("p",[s._v("scss 运行在服务端"),a("br"),s._v("\n浏览器不认识 .scss 文件，需要转换成 .css 才能被浏览器解析执行")]),s._v(" "),a("h2",{attrs:{id:"scss-的使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scss-的使用"}},[s._v("#")]),s._v(" scss 的使用")]),s._v(" "),a("p",[s._v("scss 是在服务端使用")]),s._v(" "),a("ol",[a("li",[s._v("安装 nodejs 的解析器  v8.11.1 以上")]),s._v(" "),a("li",[s._v("在线安装  cmd 控制台输入 npm install -g node-sass")]),s._v(" "),a("li",[s._v("无网安装 把安装包中的文件，复制到 nodejs 安装目录下")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("cmd 中输入 node-sass -v 检查版本号\n打印出版本号，就是成功")])]),s._v(" "),a("h2",{attrs:{id:"scss-文价转换成-css-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scss-文价转换成-css-文件"}},[s._v("#")]),s._v(" scss 文价转换成 css 文件")]),s._v(" "),a("ul",[a("li",[s._v("单文件转换")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("在项目目录下，按住 shift，右键打开 powershell\n输入 node-sass  scss/01.scss   css//01.css\n  要转换的scss文件   转换后的css文件\n")])])]),a("ul",[a("li",[s._v("对文件转换")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("node-sass scss -o css\n  node-sass  scss文件夹名称  -o  css文件夹名称\n")])])]),a("ul",[a("li",[s._v("单文件的监听")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("node-sass -w scss/01.scss css/01.css\n开启一个监听，注视这 01.scss 文件\n一旦这个文件保存,自动转换成 01.css文件\n")])])]),a("ul",[a("li",[s._v("多文件监听")])]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v("node-sass -w scss -o css\n")])])]),a("h2",{attrs:{id:"scss-基础语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scss-基础语法"}},[s._v("#")]),s._v(" scss 基础语法")]),s._v(" "),a("h2",{attrs:{id:"变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量"}},[s._v("#")]),s._v(" 变量")]),s._v(" "),a("p",[s._v("使用 $ 符号创建变量，变量名可以包含 - _ 命名规则基本与 css 选择器相同，尽量做到见名知意")]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("注意:")]),s._v(" "),a("ol",[a("li",[s._v("变量声明时，可以引用其它变量")]),s._v(" "),a("li",[s._v("变量如果声明在 {} 内，就只能在这个 {} 内使用")]),s._v(" "),a("li",[s._v("!default 规则")])]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[s._v("- 如果此变量之前声明过值，就使用之前声明的变量\n- 如果此变量之前没有声明过值，就是用现在的值\n- $jd_red: red !default;\n")])])])]),s._v(" "),a("h2",{attrs:{id:"嵌套"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#嵌套"}},[s._v("#")]),s._v(" 嵌套")]),s._v(" "),a("ol",[a("li",[s._v("后代选择器的嵌套写法")])]),s._v(" "),a("ul",[a("li",[s._v("伪类选择器的嵌套")])]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v(".mybtn ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[a("span",{pre:!0,attrs:{class:"token parent important"}},[s._v("&")]),s._v(":hover")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 嵌套需要 & 占位符，如果没有占位符，选择器和伪类选择器之间会多一个空格，导致选择器整个失效")]),s._v("\n")])])]),a("ul",[a("li",[s._v("群组的嵌套")])]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("nav, div, h1 ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("a ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #fff"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("ul",[a("li",[s._v("属性的嵌套")])]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("border: ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" solid"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" \n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" #fff\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),a("h2",{attrs:{id:"导入"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#导入"}},[s._v("#")]),s._v(" 导入")]),s._v(" "),a("p",[s._v("在 scss 语法中。如果 scss 文件，以下划线，那么这个 scss 就别称为局部 scss 文件")]),s._v(" "),a("ul",[a("li",[s._v("局部 scss 文件的特点")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("ol",[a("li",[s._v("每一个局部 scss 文件，就是一个小模块")]),s._v(" "),a("li",[s._v("scss 在转换 css 的时候，不会转换局部 scss 文件")]),s._v(" "),a("li",[s._v("我们一般会在全局 scss 文件中，导入局部 scss 文件")]),s._v(" "),a("li",[s._v("导入的语法 @import 局部 scss 文件名称(不带下划线，不带后缀名)这样生成一个统一的 css 文件")]),s._v(" "),a("li",[s._v("导入局部 scss 中的变量，可以在被导入的文件中使用")])])]),s._v(" "),a("h2",{attrs:{id:"混合器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#混合器"}},[s._v("#")]),s._v(" 混合器")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("把多个选择器都会用到的样式，封装进一个混合器中"),a("br"),s._v("\n需要使用的时候，调用混合器，实现代码的重用")]),s._v(" "),a("p",[s._v("声明混合器\n"),a("code",[s._v("@mixin 混合器名称(参数1, 参数2,....) {样式}")])]),s._v(" "),a("p",[s._v("调用混合器\n"),a("code",[s._v("@include 混合器名称(实参1, 实参2,...)")])])]),s._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[s._v("注意")]),s._v(" "),a("p",[s._v("注意: 混合器使用最多的场合，css hack")])]),s._v(" "),a("h2",{attrs:{id:"继承"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#继承"}},[s._v("#")]),s._v(" 继承")]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("一个选择器，可以完全使用另外一个选择器的样式\n使用关键字 @extend 选择器名; 继承样式")])]),s._v(" "),a("h2",{attrs:{id:"运算符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[s._v("#")]),s._v(" 运算符 + - * / %")]),s._v(" "),a("p",[s._v("scss 可以自动在几种单位之间转换数值\n前提是，单位可以转换  rem em %就不能转换")]),s._v(" "),a("ul",[a("li",[s._v("加法")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("字符串拼接的时候，如果使用有双引号的 + 无双引号的，结果有双引号"),a("br"),s._v("\n如果使用无双引号 + 又双引号，结果无双引号")])]),s._v(" "),a("ul",[a("li",[s._v("减号")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("减号会被自动解析为变量的一部分\n所以 scss 中减法，要前后加空格")])]),s._v(" "),a("ul",[a("li",[s._v("除法")])]),s._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[s._v("提示")]),s._v(" "),a("p",[s._v("scss 中 / 的作用，除法，分隔符"),a("br"),s._v("\n在 scss 中，以下情况会被认为是除法")]),s._v(" "),a("ol",[a("li",[s._v("如果运算符两边的数字 是变量或者函数的返回值")]),s._v(" "),a("li",[s._v("运算式被小括号包裹，是除法")]),s._v(" "),a("li",[s._v("除法运算式，是其它算术运算的一部分")])])]),s._v(" "),a("ul",[a("li",[s._v("字符串的插值操作")])]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[s._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"liangliang ate #{200 + 100} baozis"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[s._v("#")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" 做插值\n")])])]),a("ul",[a("li",[s._v("颜色运算")])]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 分段运算")]),s._v("\n#rrggbb "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" #rrggbb = #rr+rr  gg+gg  bb+bb\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" = "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("rgb")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("a+b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" b+e"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c+f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nrgba "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//的算法")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 计算两个 rgba 的时候，要求 alpha 必须相等，才能运算")]),s._v("\n")])])]),a("h2",{attrs:{id:"内置函数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内置函数"}},[s._v("#")]),s._v(" 内置函数")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// scss 定义了很多函数，有些函数直接可以在 css 语句中使用")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 1. rgba 就是 scss 函数")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("hsl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("hue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" saturation"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" lightness"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  hue 色调 0~360  0~120  120~240  240~360\n  saturation 饱和度 0~100%\n  lightness 亮度    0~100%\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 2. 数学函数")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("round")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 四舍五入")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("ceil")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 向上取整")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("floor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$val")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 向下取整")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$v1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" v2..."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最小值")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("max")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$v1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$v2")]),s._v(".."),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 最大值")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("random")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 随机数")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 3. 字符串函数")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("unquote")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 去掉 $str 的引号")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("quote")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 加上 $str 的引号")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("to-upper-case")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"abc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 变大写")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("to-lower-case")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ABC"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 变小写")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 4. 自定义函数")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("get-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@return")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("min")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$b")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 关键字 function return 加 @ 参数加 $")]),s._v("\n")])])]),a("h2",{attrs:{id:"指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#指令"}},[s._v("#")]),s._v(" 指令")]),s._v(" "),a("div",{staticClass:"language-scss extra-class"},[a("pre",{pre:!0,attrs:{class:"language-scss"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@else if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$type")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" moon"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" blue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("@else")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" orange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 条件的小括号，可加，可以不加")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=e.exports}}]);