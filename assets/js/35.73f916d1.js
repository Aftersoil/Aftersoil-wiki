(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{559:function(t,s,a){"use strict";a.r(s);var n=a(14),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"尺寸和边框"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#尺寸和边框"}},[t._v("#")]),t._v(" 尺寸和边框")]),t._v(" "),a("h2",{attrs:{id:"尺寸属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#尺寸属性"}},[t._v("#")]),t._v(" 尺寸属性")]),t._v(" "),a("ul",[a("li",[t._v("作用")])]),t._v(" "),a("p",[t._v("设置元素的宽度和高度")]),t._v(" "),a("ul",[a("li",[t._v("属性")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 宽度 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 最大宽度 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 最小宽度 */")]),t._v("\nheight："),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 高度 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("max-height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\nmin-height\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 取值：px为单位的数字和父元素的%比 */")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("注意，如果不写宽高，各个元素默认的宽高是多少？")]),t._v(" "),a("ul",[a("li",[t._v("块级元素不写宽，默认宽度占满父容器宽度100%")]),t._v(" "),a("li",[t._v("块级元素不写高，默认高度靠内容撑起来")]),t._v(" "),a("li",[t._v("行内元素，设置宽高无效。它的宽高靠内容撑起。")]),t._v(" "),a("li",[t._v("自带宽高属性的元素，设置宽高有效（img,table）")])])]),t._v(" "),a("h2",{attrs:{id:"附加知识点1-单位"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附加知识点1-单位"}},[t._v("#")]),t._v(" 附加知识点1.单位")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("单位：\npx    像素\nin    英寸  1in=2.54cm\npt    磅值  1pt=1/72in  多用于设置字体大小\ncm    厘米\nmm    毫米\n\n项目中，为了页面可以在pc pad phone都正常显示\n我们一般会使用相对单位\n\nem    以父元素的数值当做基本单位\nrem   以html的数值当做基本单位\n% \n")])])]),a("h2",{attrs:{id:"溢出处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#溢出处理"}},[t._v("#")]),t._v(" 溢出处理")]),t._v(" "),a("p",[t._v("当内容较大，元素区域较小的时候，就会发生溢出效果"),a("br"),t._v("\n默认是纵向溢出")]),t._v(" "),a("p",[a("code",[t._v("overflow:")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("取值：visible 默认值，溢出部分可见的\n  hidden      溢出部分隐藏\n  scroll      不管是否溢出，x和y轴方向都添加滚动条\n  auto        只有溢出才有滚动条，不溢出没有\noverflow-x    设置水平轴滚动条\noverflow-y    设置垂直轴滚动条\n")])])]),a("p",[t._v("如何设置成横向溢出"),a("br"),t._v("\n内部容器，设置宽度，大于外部容器的宽度")]),t._v(" "),a("h2",{attrs:{id:"附加知识点-颜色合法值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#附加知识点-颜色合法值"}},[t._v("#")]),t._v(" 附加知识点，颜色合法值")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("颜色的英文单词  "),a("code",[t._v("red")])]),t._v(" "),a("li",[a("code",[t._v("#rrggbb")]),t._v("  6位16进制的数字   代表"),a("code",[t._v("rgb")]),t._v(" 每一位"),a("code",[t._v("0~ff")]),t._v(" "),a("code",[t._v("0~255")])]),t._v(" "),a("li",[a("code",[t._v("#aabbcc")]),t._v("---\x3e"),a("code",[t._v("#abc")]),t._v(" "),a("code",[t._v("#ff0000")]),t._v("---\x3e"),a("code",[t._v("#f00")]),t._v(" "),a("ul",[a("li",[t._v("常用颜色 "),a("code",[t._v("#f00 #0f0 #00f #ff0 #0ff #f0f")])]),t._v(" "),a("li",[a("code",[t._v("#ddd #666 #333 #e8e8e8")])])])]),t._v(" "),a("li",[a("code",[t._v("rgb(r,g,b)")]),t._v(" 十进制  "),a("code",[t._v("r,g,b 0~255")])]),t._v(" "),a("li",[a("code",[t._v("rgba(r,g,b,alpha) alpha0~1")])]),t._v(" "),a("li",[a("code",[t._v("hsl")]),t._v(" 不记")])])]),t._v(" "),a("h2",{attrs:{id:"边框"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#边框"}},[t._v("#")]),t._v(" 边框")]),t._v(" "),a("h2",{attrs:{id:"边框的简写方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#边框的简写方式"}},[t._v("#")]),t._v(" 边框的简写方式")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" width style color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2px solid red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nstyle： solid 实线\n       dotted 点点虚线\n       dashed 断线虚线\n       double  双实线\ncolor：合法的颜色值和transparent[等同于全透明]\n\n最简方式\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("style"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"边框的单属性定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#边框的单属性定义"}},[t._v("#")]),t._v(" 边框的单属性定义")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 只要写了style属性，就会显示边框\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("h2",{attrs:{id:"单边定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单边定义"}},[t._v("#")]),t._v(" 单边定义")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" width style color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nborder-right\nborder-bottom\nborder-left\n")])])]),a("h2",{attrs:{id:"单边的单属性定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单边的单属性定义"}},[t._v("#")]),t._v(" 单边的单属性定义")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("border-*-color\nborder-*-width\nborder-*-style\n*"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("top/right/bottom/left\n")])])]),a("h2",{attrs:{id:"边框的倒角-圆角"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#边框的倒角-圆角"}},[t._v("#")]),t._v(" 边框的倒角(圆角)")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 取值：以px为单位的数字 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* %  50%是一个圆形 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 单角设置 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top-left-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-top-right-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom-left-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border-bottom-right-radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n")])])]),a("h2",{attrs:{id:"边框的阴影"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#边框的阴影"}},[t._v("#")]),t._v(" 边框的阴影")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("box-shadow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n取值：h-shadow v-shadow blur spread color inset"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nh-shadow 水平方向的阴影偏移\nv-shadow 垂直方向的阴影偏移\nblur 阴影模糊距离\nspread 阴影尺寸\ncolor 阴影的颜色\ninset/outset  设置内部阴影和外部阴影\n")])])]),a("h2",{attrs:{id:"轮廓"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#轮廓"}},[t._v("#")]),t._v(" 轮廓")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("在边框外围的一圈线条，被称为边框的边框\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("outline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("width style color"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n去除轮廓，去除边框\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("border")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none/0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("outline")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("none/0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"框模型-盒子模型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#框模型-盒子模型"}},[t._v("#")]),t._v(" 框模型，盒子模型")]),t._v(" "),a("p",[t._v("元素在页面上实际占地空间的一种计算方式")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("浏览器默认元素实际占地宽度= 左外边距+左边框+左内边距+内容区域宽度+右内边距+右边框+右外边距")]),t._v(" "),a("li",[t._v("浏览器默认元素实际占地高度= 上外边距+上边框+上内边距+内容区域高度+下内边距+下边框+下外边距")])])]),t._v(" "),a("p",[t._v("外边距"),a("code",[t._v("margin")]),t._v("：边框以外的距离，元素与元素之间的距离"),a("br"),t._v("\n内边距"),a("code",[t._v("padding")]),t._v("：边框与内容区域之间的距离")]),t._v(" "),a("h2",{attrs:{id:"外边距margin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外边距margin"}},[t._v("#")]),t._v(" 外边距"),a("code",[t._v("margin")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* margin:v1;设置上右下左4个方向外边距 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 改变margin，元素有位移效果。 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 在页面元素做位置微调的时候，使用margin */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 设置单方向外边距 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-bottom")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("30px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("40px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("取值:")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("以px为单位的数字")]),t._v(" "),a("li",[t._v("%  是父元素宽度的%")]),t._v(" "),a("li",[t._v("值取负数， "),a("code",[t._v("margin-top + ↓ - ↑")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("margin-left + → - ←")])])])]),t._v(" "),a("li",[a("code",[t._v("auto")]),t._v("：对上下外边距无效\n"),a("ul",[a("li",[t._v("自动计算块级元素的左右外边距")]),t._v(" "),a("li",[t._v("让块级元素水平居中，（只对设置了宽度的块级元素生效）")])])])])]),t._v(" "),a("ul",[a("li",[t._v("简写方式")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 设置4个方向 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v1 v2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* v1设置上下    v2设置左右 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("0 auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("/"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("10px auto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v1 v2 v3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  上    左右    下    \n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v1 v2 v3 v4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  上右下左\n")])])]),a("h2",{attrs:{id:"外边距的合并"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外边距的合并"}},[t._v("#")]),t._v(" 外边距的合并")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("两个垂直外边距相遇时，他们将合并成一个")]),t._v(" "),a("li",[t._v("值以大的为准。")]),t._v(" "),a("li",[t._v("解决方法：布局设计的时候，直接规避")])])]),t._v(" "),a("h2",{attrs:{id:"外边距溢出"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#外边距溢出"}},[t._v("#")]),t._v(" 外边距溢出")]),t._v(" "),a("p",[t._v("在特殊情况下，为子元素设置上外边距，会作用到父元素上！")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("特殊情况")]),t._v(" "),a("ul",[a("li",[t._v("父元素没有上边框")]),t._v(" "),a("li",[t._v("子元素的内容区域的上边沿与父元素的内容区域的上沿重合")]),t._v(" "),a("li",[t._v("解决方案：")]),t._v(" "),a("li",[t._v("给父元素添加上边框\n"),a("ul",[a("li",[t._v("弊端：影响了父元素的实际占地高度")])])]),t._v(" "),a("li",[t._v("给父元素添加上内边距\n"),a("ul",[a("li",[t._v("弊端：影响了父元素的实际占地高度")])])]),t._v(" "),a("li",[t._v("在子元素之间添加一个空的"),a("code",[t._v("<table></table>")])])])]),t._v(" "),a("h2",{attrs:{id:"关于块级元素-行内元素-行内块的总结-必须特别熟悉"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关于块级元素-行内元素-行内块的总结-必须特别熟悉"}},[t._v("#")]),t._v(" 关于块级元素，行内元素，行内块的总结(必须特别熟悉)")]),t._v(" "),a("ul",[a("li",[t._v("行内元素的特点")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("设置宽高无效，宽高根据内容自动撑开")]),t._v(" "),a("li",[t._v("上下外边距无效，左右外边距有效")]),t._v(" "),a("li",[t._v("可以与其它行内元素和行内块元素共用一行")]),t._v(" "),a("li",[t._v("一行放不下，再折行")])])]),t._v(" "),a("ul",[a("li",[t._v("块级元素的特点")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("设置宽高有效，如果不设置宽，宽度是父级宽度的100%")]),t._v(" "),a("li",[t._v("如果不设置高度，高度靠内容撑开")]),t._v(" "),a("li",[t._v("4个方向外边距都有效，独占一行")])])]),t._v(" "),a("ul",[a("li",[t._v("行内块元素   "),a("code",[t._v("input")])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[t._v("设置宽高有效，但是自带一个默认的宽高")]),t._v(" "),a("li",[t._v("4个外边距都有效，但是同一行修改一个行内块的垂直外边距，整行都会跟着一起发生位置改变。")]),t._v(" "),a("li",[t._v("可以与其他行内块和行内元素共用一行")])])]),t._v(" "),a("h2",{attrs:{id:"自带外边距的元素"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自带外边距的元素"}},[t._v("#")]),t._v(" 自带外边距的元素")]),t._v(" "),a("p",[a("code",[t._v("h1~h6 p body ol ul dl pre")])]),t._v(" "),a("p",[t._v("由于不同浏览器对默认的外边距的解析可能会有差别"),a("br"),t._v("\n所以在写代码之前，一般会把内外边距清空。这个行为叫做"),a("code",[t._v("css reset")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 0"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"内边距-padding"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内边距-padding"}},[t._v("#")]),t._v(" 内边距 padding")]),t._v(" "),a("p",[t._v("改变"),a("code",[t._v("padding")]),t._v("，感觉上是改变了元素的大小"),a("br"),t._v("\n改变"),a("code",[t._v("padding")]),t._v("是不会影响 其它元素的，只会改变当前元素自己的实际占地尺寸")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("           "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 设置4个方向内边距 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v1 v2"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 上下  左右 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v1 v2 v3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 上  左右  下 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("v1 v2 v3 v4"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 上右下左 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-top")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("padding-right")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\npadding-bottom\npadding-left\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 取值：以px为单位的数字 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* % */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* padding没有auto */")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);