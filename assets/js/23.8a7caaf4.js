(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{519:function(t,s,a){"use strict";a.r(s);var n=a(14),v=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"canvas"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#canvas"}},[t._v("#")]),t._v(" canvas")]),t._v(" "),a("h2",{attrs:{id:"html5新特性-canvas绘图-文本-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html5新特性-canvas绘图-文本-重点"}},[t._v("#")]),t._v(" html5新特性--canvas绘图-文本(重点)")]),t._v(" "),a("ul",[a("li",[t._v("常用方法与属性")])]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("strokeText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 绘制描边文字(空心)")]),t._v("\nstr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 绘制文本")]),t._v("\nx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 字符串左上角位置(以文本基线为准)")]),t._v("\n\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fillText")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 绘制填充文字(实心)")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("font "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"19px SimHei"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 前面文本大小/字体")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("textBaseline "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"top"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 调整文本基线[top/alphabetic/bottom]")]),t._v("\n")])])]),a("h2",{attrs:{id:"html5新特性-canvas绘图-路径-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html5新特性-canvas绘图-路径-重点"}},[t._v("#")]),t._v(" html5新特性--canvas绘图-路径 (重点)")]),t._v(" "),a("p",[t._v("路径:绘制不规则图形 (复杂)"),a("br"),t._v(" "),a("code",[t._v("path")]),t._v(":由多个坐标点组件任意图形,图形本身不可见"),a("br"),t._v("\n可以描边或者填充")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("ctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("beginPath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始一条新路径(上一条路径结束)")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("moveTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 移动到指定点(x,y)")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("lineTo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 从当前点到指定点绘制一条直线(x,y)")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stroke")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 描边")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 填充")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("closePath")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 闭合一条路径(结束点到开始点画一条直线)")]),t._v("\nctx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("arc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" cy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" r"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" start"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" end"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 绘制一条圆拱形")]),t._v("\n\ncx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("cy  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 圆心位置(x, y)")]),t._v("\nr      "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 半径")]),t._v("\nstart  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 开始角度")]),t._v("\nend    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 结束角度")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 参数start,end 不使用常用角度完成设置，使用弧度设置")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 角度 0~360    弧度0~2PI")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 采用角度转换弧度  90角度*Math.PI/180=弧度")]),t._v("\n")])])]),a("h2",{attrs:{id:"html5新特性-canvas绘图-图像-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html5新特性-canvas绘图-图像-重点"}},[t._v("#")]),t._v(" html5新特性--canvas绘图-图像 (重点)")]),t._v(" "),a("p",[t._v("图片可以使用img标准显示网页为什么用"),a("code",[t._v("canvas")]),t._v("[复杂]"),a("br"),t._v("\n图片位置:一个软件项目所有图片保存服务器")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("图片版权")])]),t._v(" "),a("li",[a("p",[t._v("图片数量巨大")])]),t._v(" "),a("li",[a("p",[t._v("操作过程将图片绘制"),a("code",[t._v("canvas")]),t._v("画布上")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("创建图像对象"),a("code",[t._v("p3 = new Image();")])]),t._v(" "),a("li",[t._v("下载图像 "),a("code",[t._v('p3.src = "p3.png";')]),t._v("2ms")]),t._v(" "),a("li",[t._v("为图片绑定事件下载成功  "),a("code",[t._v("p3.onload = function(){...}")])]),t._v(" "),a("li",[t._v("绘制图片                "),a("code",[t._v("ctx.drawImage(p3,x,y)")])]),t._v(" "),a("li",[t._v("绘制图片                "),a("code",[t._v("ctx.drawImage(p3,x,y,w,h)")])])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("p3   图片对象\nx,y  图片或者文本或者图片左上角位置(原始大小图片)\nw,h  图片宽度和高度(拉伸)\n")])])]),a("h2",{attrs:{id:"html5新特性-canvas绘图-变形-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html5新特性-canvas绘图-变形-重点"}},[t._v("#")]),t._v(" html5新特性--canvas绘图-变形 (重点)")]),t._v(" "),a("p",[a("code",[t._v("canvas")]),t._v("绘制时对图片进行旋转操作"),a("br"),t._v(" "),a("code",[t._v("-rotate(deg)")]),t._v("         旋转")]),t._v(" "),a("ul",[a("li",[t._v("旋转画笔对象")]),t._v(" "),a("li",[t._v("旋转轴心在画布原点")]),t._v(" "),a("li",[t._v("旋转角度会有累加操作")]),t._v(" "),a("li",[t._v("deg不同角度弧度")])]),t._v(" "),a("p",[a("code",[t._v("translate(x,y)")]),t._v("  移动原点(移动轴心)到指定位置")]),t._v(" "),a("p",[t._v("原则:什么时候使用如下两个方法"),a("br"),t._v("\n当画布上绘制一个以上元素时必须使用下面方法")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("save()")]),t._v("            保存画笔状态(原点;角度;颜色;...)")]),t._v(" "),a("li",[a("code",[t._v("restore()")]),t._v("          恢复到画笔保存时状态(原点;角度;颜色;..)")])]),t._v(" "),a("p",[t._v("画图时:如果画布中有多个(一个以上)元素,画之前先保存状态"),a("br"),t._v("\n画之后恢复状态(元素之间不会受到影响)")]),t._v(" "),a("h2",{attrs:{id:"html5新特性-canvas绘图-变形-弹幕"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html5新特性-canvas绘图-变形-弹幕"}},[t._v("#")]),t._v(" html5新特性--canvas绘图-变形 (弹幕)")]),t._v(" "),a("ul",[a("li",[t._v("弹幕:专业视频网站常用功能")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("当用户在观看视频希望(参与感)发表自己想法")]),t._v(" "),a("li",[t._v("情绪/观点")]),t._v(" "),a("li",[t._v("发表内容转文字浮动视频上方")])])]),t._v(" "),a("ul",[a("li",[t._v("理解用户操作")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("输入文字 修改文字大小;修改文字颜色")]),t._v(" "),a("li",[t._v('用户点击"发送按钮" 将内容显示视频上方')])])]),t._v(" "),a("ul",[a("li",[t._v("项目工作流程!!!")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("遇到问题:如果发送文字过多效率有一定影响\n"),a("ul",[a("li",[t._v("解决方案:池子")])])]),t._v(" "),a("li",[t._v("创建程序结构\n"),a("ul",[a("li",[t._v("当设计大规则项目采用方式:")]),t._v(" "),a("li",[t._v("单一原则(一个程序完成一种任务)")])])]),t._v(" "),a("li",[t._v("第一个程序:"),a("code",[t._v("index.html")]),t._v(" "),a("ul",[a("li",[t._v("创建元素 显示视频 画布")]),t._v(" "),a("li",[t._v("加载其它 js")])])]),t._v(" "),a("li",[t._v("第二个程序:"),a("code",[t._v("msg.js")]),t._v(" 完成所有弹幕任务(一家餐厅)")]),t._v(" "),a("li",[t._v("第三个程序:"),a("code",[t._v("main.js")]),t._v(" 项目入口程序:调用"),a("code",[t._v("msg.js")]),t._v(" 方法(大楼主管)")])])]),t._v(" "),a("h2",{attrs:{id:"html5新特性-变形-弹幕-index-html"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html5新特性-变形-弹幕-index-html"}},[t._v("#")]),t._v(" html5新特性-- -变形 (弹幕)-index.html")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("视频元素："),a("code",[t._v("video")]),t._v("    底层 "),a("code",[t._v("z-index:0")])]),t._v(" "),a("li",[t._v("画布元素:  "),a("code",[t._v("canvas")]),t._v("  上层 "),a("code",[t._v("z-index:1")])]),t._v(" "),a("li",[t._v("创建输入区域"),a("br"),t._v("\n[输入文字区域;文字大小下拉列表;文字颜色下拉列表;发送按钮]")]),t._v(" "),a("li",[t._v("加载"),a("code",[t._v("main.js")]),t._v(" 文件(主管)")]),t._v(" "),a("li",[t._v("加载"),a("code",[t._v("msg.j")]),t._v("s  文件(一家餐厅)")])])]),t._v(" "),a("h2",{attrs:{id:"弹幕视频"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弹幕视频"}},[t._v("#")]),t._v(" 弹幕视频")]),t._v(" "),a("h2",{attrs:{id:"视频1"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频1"}},[t._v("#")]),t._v(" 视频1")]),t._v(" "),a("div",{staticClass:"video"},[a("video",{attrs:{src:"https://images.aftersoil.xyz/wiki/video/HTML5/1.mp4",controls:"",preload:""}})]),t._v(" "),a("h2",{attrs:{id:"视频2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频2"}},[t._v("#")]),t._v(" 视频2")]),t._v(" "),a("div",{staticClass:"video"},[a("video",{attrs:{src:"https://images.aftersoil.xyz/wiki/video/HTML5/2.mp4",controls:"",preload:""}})]),t._v(" "),a("h2",{attrs:{id:"视频3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频3"}},[t._v("#")]),t._v(" 视频3")]),t._v(" "),a("div",{staticClass:"video"},[a("video",{attrs:{src:"https://images.aftersoil.xyz/wiki/video/HTML5/3.mp4",controls:"",preload:""}})]),t._v(" "),a("h2",{attrs:{id:"视频4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频4"}},[t._v("#")]),t._v(" 视频4")]),t._v(" "),a("div",{staticClass:"video"},[a("video",{attrs:{src:"https://images.aftersoil.xyz/wiki/video/HTML5/4.mp4",controls:"",preload:""}})]),t._v(" "),a("h2",{attrs:{id:"视频5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频5"}},[t._v("#")]),t._v(" 视频5")]),t._v(" "),a("div",{staticClass:"video"},[a("video",{attrs:{src:"https://images.aftersoil.xyz/wiki/video/HTML5/5.mp4",controls:"",preload:""}})]),t._v(" "),a("h2",{attrs:{id:"视频6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#视频6"}},[t._v("#")]),t._v(" 视频6")]),t._v(" "),a("div",{staticClass:"video"},[a("video",{attrs:{src:"https://images.aftersoil.xyz/wiki/video/HTML5/6.mp4",controls:"",preload:""}})])])}),[],!1,null,null,null);s.default=v.exports}}]);