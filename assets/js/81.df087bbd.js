(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{461:function(t,s,a){"use strict";a.r(s);var n=a(22),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择器"}},[t._v("#")]),t._v(" 选择器")]),t._v(" "),a("h2",{attrs:{id:"复杂选择器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#复杂选择器"}},[t._v("#")]),t._v(" 复杂选择器")]),t._v(" "),a("ul",[a("li",[t._v("兄弟选择器")])]),t._v(" "),a("p",[t._v("兄弟元素，具备相同父元素的平级元素之间称之为兄弟元素\n兄弟选择器，只能找弟弟，不能找哥哥")]),t._v(" "),a("ul",[a("li",[t._v("相邻兄弟选择器")])]),t._v(" "),a("p",[t._v("选择器 + 选择器 {}"),a("br"),t._v("\n获取紧紧挨着某个元素后面的兄弟选择器元素")]),t._v(" "),a("div",{staticClass:"language-CSS extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#p1 + .c1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 或者 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#div > a + a")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("margin-left")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 20px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("ul",[a("li",[t._v("通用兄弟选择器")])]),t._v(" "),a("p",[t._v("选择器 ~ 选择器 {}"),a("br"),t._v("\n获取元素后面所有符合条件的兄弟")]),t._v(" "),a("div",{staticClass:"language-CSS extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#p1 ~ .c1")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("属性选择器")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 允许通过元素所附带的属性，及其值来匹配页面元素，很精准 attr 表示匹配任意属性 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[attr]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 匹配有 attr 这个属性的元素 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[attr1][attr2]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 匹配同时拥有 attr1 和 attr2 属性的元素 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("[attr=value]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 匹配拥有 attr 并且值为 value的元素 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("elem[attr=value]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 匹配拥有 attr 并且值为 value 的 elem 元素 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("elem[attr1][attr2]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 模糊属性值的查询 */")]),t._v("\n[attr^=value] "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 匹配以 attr 值 value 开头的元素 */")]),t._v("\n[attr$=value] "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 匹配以 attr 值 value 结尾的元素 */")]),t._v("\n[arr*=value] "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 匹配 attr 值中含有 value 的元素 */")]),t._v("\n[attr~=value] "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 匹配 attr 值中含有 value 这个单词的元素 */")]),t._v("\n")])])]),a("ul",[a("li",[t._v("伪类选择器")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("目标伪类\n  在锚点被激活时，让锚点元素应用样式\n  :target")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("结构为类\n  选择器:first-child")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("匹配的元素是属于其父元素的第一个子元素(找大哥)\n  同时，这个大哥还需要符合选择器的要求\n\n选择器: last-child")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("匹配的元素是属于其父元素的最后一个子元素(找小弟)\n  同时，这个小弟还需要符合选择器的要求\n\n选择器: nth-child(n)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("n 从 1 开始\n\n:empty\n  匹配内部没有任何元素的标签，包括文本，空格，回车，都不能有\n\n:only-child")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  匹配属于其父元素的唯一子元素\n\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("否定伪类")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("not")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("selector"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n")])])]),a("ul",[a("li",[t._v("伪元素")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 匹配元素首航首个字符 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("first-letter "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("或者")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("first-letter\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 匹配元素的首航 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("first-line "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("或者")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("first-line\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 当首航与首字符发生了冲突，应用首字符的样式 */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 匹配用户选择的文本[这里必须是双 ::] */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("::selection")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 这里的样式，只能修改文本颜色和背景颜色 */")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*\n  伪元素选择器，内容生成\n  生成的是一个元素\n  可以设置这个元素的显示方式，设置这个元素的文本内容\n  以及所有可以使用的样式\n  :before 或者 ::before 代表的是内容去最靠前的部分\n  content 中只能给字符串和图片\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("div::before")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"可写内容区"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" red"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("background-color")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" purple"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("width")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("height")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 100px"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* :after 或者 ::after 匹配到某个元素内容区最后的位置 */")]),t._v("\n    \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* \n  伪元素添加内容，可以解决的问题\n  外边距溢出\n*/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#d1::before")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" table"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 解决高度坍塌 */")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("#d1::after")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" block"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("cleat")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" both"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"弹性布局"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弹性布局"}},[t._v("#")]),t._v(" 弹性布局")]),t._v(" "),a("ul",[a("li",[t._v("什么是弹性布局")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("弹性布局，是一种布局方式\n主要解决的是某个元素中子元素的布局方式\n让页面布局更加灵活")])]),t._v(" "),a("h3",{attrs:{id:"弹性布局专有的名词解释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#弹性布局专有的名词解释"}},[t._v("#")]),t._v(" 弹性布局专有的名词解释")]),t._v(" "),a("ul",[a("li",[t._v("容器")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("要发生弹性布局的子元素，他们的元素，称为容器，就是设置 display: flex 的那个元素")])]),t._v(" "),a("ul",[a("li",[t._v("项目")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("要发生弹性布局的子元素们，叫做项目，就是设置了 display: flex 的元素的子元素们")])]),t._v(" "),a("ul",[a("li",[t._v("主轴")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ul",[a("li",[t._v("项目排列方向的一根轴，称之为主轴")]),t._v(" "),a("li",[t._v("如果项目们是按照水平排列，那么只主轴就是 x 轴")]),t._v(" "),a("li",[t._v("如果项目们按照垂直排列，那么主轴就是 y 轴")]),t._v(" "),a("li",[t._v("项目们在主轴的排列顺序，成为主轴起点和主轴的终点")])])]),t._v(" "),a("ul",[a("li",[t._v("交叉轴")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ul",[a("li",[t._v("与主轴垂直的一根，叫做交叉轴")]),t._v(" "),a("li",[t._v("项目们在交叉轴的排列顺序，称为交叉轴的起点和终点")])])]),t._v(" "),a("h2",{attrs:{id:"语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#语法"}},[t._v("#")]),t._v(" 语法")]),t._v(" "),a("p",[t._v("将元素设置成弹性容器之后，他们所有的子元素，都会变成弹性项目")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 将块级元素设置称为容器 */")]),t._v("\ninline-flex   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 将行内元素设置为容器 */")]),t._v("\n")])])]),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[t._v("注意:")]),t._v(" "),a("ul",[a("li",[t._v("元素设置为 flex 容器后，容器的 text-align，vertical-align 失效")]),t._v(" "),a("li",[t._v("项目的 float，clear 失效")])])]),t._v(" "),a("ul",[a("li",[t._v("容器的属性")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("设置主轴的方向")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" flex-direction\n取值 row 默认值，主轴是 X 轴，主轴起点在左端\n    row-reverse 主轴是 x 轴，主轴起点在右端\n    column 主轴是 y 轴，主轴起点在顶部\n    column-reverse 主轴是 y 轴，主轴起点在底部\n")])])]),a("ul",[a("li",[t._v("设置项目的换行: flex-wrap")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("取值 nowarp 默认值，空间不够，不换行，项目会缩小\n    wrap 空间不够时，项目不缩小，换行\n    wrap-reverse 项目换行，并反转\n")])])]),a("p",[t._v("上面两个属性的简写: flex-flow: direction wrap;")]),t._v(" "),a("ul",[a("li",[t._v("定义项目在主轴上的对齐方式: justify-content")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("取值 flex-start 默认值，主轴起点对齐\n    flex-end 主轴的终点\n    center 主轴的中心\n    space-around 每个外边距相同，两端有空白\n    space-between 两端对齐，两端无空白\n")])])]),a("ul",[a("li",[t._v("项目们在交叉轴上的对齐方式: "),a("code",[t._v("align-items")])])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("取值 flex-start 默认值，交叉轴起点对齐\n    flex-end 交叉轴终点对齐\n    center 交叉轴中间对齐\n    baseline 基线，通 flex-start类似\n    stretch 项目不写高，充满整个容器\n")])])]),a("ul",[a("li",[t._v("项目属性")])]),t._v(" "),a("p",[t._v("设置在项目中的属性，只会影响当前项目，不影响其它项目")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ul",[a("li",[t._v("项目顺序: order\n"),a("ul",[a("li",[t._v("定义项目排列的顺序，值越小。越靠近起点。默认值为 0")]),t._v(" "),a("li",[t._v("取值: 我单位数值")])])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ul",[a("li",[t._v("flex-grow\n"),a("ul",[a("li",[t._v("如果容器有足够大的剩余空间，项目将按照比例放大(比例不准确)")]),t._v(" "),a("li",[t._v("取值: 无单位的数字 默认值 0")])])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ul",[a("li",[t._v("flex-shrink\n"),a("ul",[a("li",[t._v("如果容器空间不够，项目将按比例缩小(比例不准确)")]),t._v(" "),a("li",[t._v("取值: 无单位数字 默认值 1 取值越大，缩小的越快")])])])])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ul",[a("li",[t._v("align-self")])]),t._v(" "),a("ul",[a("li",[t._v("定义某一个项目在交叉轴上的对齐方式,不影响其它项目")]),t._v(" "),a("li",[t._v("取值 flex-start 默认值，交叉轴起点对齐")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("flex-end "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 交叉轴终点对齐 */")]),t._v("\ncenter "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 交叉轴中间对齐 */")]),t._v("\nbaseline "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 基线，通 flex-start类似 */")]),t._v("\nstretch "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 项目不写高，充满整个容器 */")]),t._v("\nauto "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 使用 align-items 定义的值 */")]),t._v("\n")])])])]),t._v(" "),a("h2",{attrs:{id:"转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换"}},[t._v("#")]),t._v(" 转换")]),t._v(" "),a("h4",{attrs:{id:"什么是转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是转换"}},[t._v("#")]),t._v(" 什么是转换")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("ul",[a("li",[t._v("改变元素在页面中的位置，大小，角度，形状")]),t._v(" "),a("li",[t._v("2D 转换，只在 x 轴和 y 轴上发生转换")]),t._v(" "),a("li",[t._v("3D 转换，增加了 z 轴的转换效果")])])]),t._v(" "),a("h4",{attrs:{id:"转换属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换属性"}},[t._v("#")]),t._v(" 转换属性")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("transform\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("取值")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" none 默认值，无任何效果\n转换函数 transform-function\n转换函数 "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transform-function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 位移，旋转，放大，倾斜，3D 旋转\n")])])]),a("h4",{attrs:{id:"转换原点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转换原点"}},[t._v("#")]),t._v(" 转换原点")]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("transform-origin\n转换原点会影响元素的旋转时的效果\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("取值")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 以 px 为单位的数值\n      %\n      关键字  left/center/bottom  top/center/bottom\n")])])]),a("h4",{attrs:{id:"_2d-转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2d-转换"}},[t._v("#")]),t._v(" 2D 转换")]),t._v(" "),a("ul",[a("li",[t._v("位移: transform: translate(x, y)")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("取值")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 和 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translateX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        x 轴位移 +往右  -往左\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translateY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        y 轴位移 +往下  -往上\n      "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("translate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        同时设置 x 轴和 y 轴的位移\n")])])]),a("ul",[a("li",[t._v("缩放: transform: scale(n)")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("取值 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 同时设置 x 轴和 y 轴的比例\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scale")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 分别设置 x 轴和 y 轴的比例\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scalX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 单独设置 x 轴的比例\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("scaleY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 单独设置 y 轴的比例\n    n > 1 放大\n    n = 1 不变\n    0 < n < 1缩小\n    -1 < n < 0 缩小并反转\n    n < -1 放大并反转\n")])])]),a("ul",[a("li",[t._v("旋转: transform: rotate(ndeg)")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("n   +顺时针  -逆时针\n"),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("注意")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" \n  1. 旋转的转换，会被转换原点影响效果\n  2. 旋转就是连同坐标轴一起旋转的，会影响旋转之后的位移方向\n")])])]),a("ul",[a("li",[t._v("倾斜: transform: skew(ndeg)")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("skew")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ndeg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 等同于 "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("skewX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ndeg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 让元素向 x 轴发生倾斜，实际上改变的是 y 轴的角度 */")]),t._v("\n    值 ndeg 为正的  y轴逆时针\n    ndeg 为负       y轴顺时针\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("skewY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ndeg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 让元素向着 y 轴发生倾斜，实际上改变的是 x 轴的角度 */")]),t._v("\n    值 ndeg为正    y轴顺时针\n    为负           y轴逆时针\n")])])]),a("ul",[a("li",[t._v("3D 转换，3D 转换都是模拟出来的")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* \n  透视距离\n    模拟人的眼睛到 3D 转换元素之间的距离\n    透视距离不同，看到的效果就不通\n    perspective: px 此属性要写在 3D转换元素的父元素上\n*/")]),t._v("\n\n3D "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("旋转")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" transform\n  取值\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotateX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ndeg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    以 x 轴为中心轴，旋转元素"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("烤羊腿，老式爆米花几机"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotateY")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ndeg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    以 y 轴为中心轴，旋转元素"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("旋转门，旋转木马"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotateZ")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ndeg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    以 z 轴为中心轴，旋转元素"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("电风扇，摩天轮"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("rotate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" z"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" ndeng"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    x，y，z 取值为 0 ，代表不旋转\n    x，y，z>0 代表旋转\n")])])]),a("h4",{attrs:{id:"过渡"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#过渡"}},[t._v("#")]),t._v(" 过渡")]),t._v(" "),a("p",[t._v("让 css 的值，在一段时间内平缓的变化")]),t._v(" "),a("ul",[a("li",[t._v("指定参与过渡的属性: transition-property")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("取值 all 所有支持过渡属性都参与"),a("br"),t._v("\n单独写某个 css 属性，多个之间用逗号分开")]),t._v(" "),a("p",[t._v("支持属性")]),t._v(" "),a("ol",[a("li",[t._v("颜色属性")]),t._v(" "),a("li",[t._v("大多数取值为具体数字的属性")]),t._v(" "),a("li",[t._v("阴影")]),t._v(" "),a("li",[t._v("转换")]),t._v(" "),a("li",[t._v("visibility")])])]),t._v(" "),a("ul",[a("li",[t._v("指定过渡时长: transition-duration: s/ms")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("  指定多长时间完成次此过渡操作\n")])])]),a("ul",[a("li",[t._v("过渡时间曲线函数")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transiton-timing-function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  取值\n    1. ease 默认值，慢速开始，中间加速，慢速结束\n    2. linear 匀速\n    3. ease-in 慢慢开始，一直加速\n    4. ease-out 快速开始，一直减速\n    5. ease-in-out 慢速开始，慢速结束，中间加速在减速\n")])])]),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("延迟执行: transition-delay: s/ms")])]),t._v(" "),a("ul",[a("li",[t._v("过渡代码编写的位置")])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("  写在原来的效果中，过渡效果有去有回\n  写在 hover 中，过渡效果有去无回\n")])])]),a("ul",[a("li",[t._v("过渡的简写方式")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" propery duration timing-function delay"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"动画-多个过渡效果放在一起"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动画-多个过渡效果放在一起"}},[t._v("#")]),t._v(" 动画,多个过渡效果放在一起")]),t._v(" "),a("h4",{attrs:{id:"关键帧"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关键帧"}},[t._v("#")]),t._v(" 关键帧")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("1. 个动画执行的时间点\n2. 在这时间点上的样式\n")])])]),a("h4",{attrs:{id:"动画的使用步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动画的使用步骤"}},[t._v("#")]),t._v(" 动画的使用步骤")]),t._v(" "),a("ul",[a("li",[t._v("使用关键帧定义动画")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" 动画名称")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("0%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token selector"}},[t._v("....\n  100%")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("调用动画")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 执行动画的名称 */")]),t._v("\n  animation-name\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 动画持续时长 */")]),t._v("\n  animation-duration\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 动画时间曲线函数 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation-timing-function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ease linear ease-in....\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 延迟执行 */")]),t._v("\n  animation-delay\n")])])]),a("ul",[a("li",[t._v("动画的其它属性")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 动画播放的次数 */")]),t._v("\n  animation-iteration-count\n    取值  具体的播放次数\n    infinite  无限\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 动画的播放顺序 */")]),t._v("\n  animation-direction\n  取值 normal  默认值 0% ~ 100%\n      reverse  100% ~ 0%\n      alternate 轮流播放，奇数次正向，偶数次逆向\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 动画的简写方式 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" name duration timing-function delay count direction\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 最简方式 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("animation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" name duration\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 动画在播放前后显示的状态 */")]),t._v("\n  animation-fill-mode\n  取值 1. backwards 动画播放之前延迟时间内，显示动画的第一帧\n      2. forwards 动画播放结束之后，停留在最后一帧\n      3. both 1和2的合体\n      4. none 默认值，不填充状态\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 动画的播放与暂停 */")]),t._v("\n  animation-play-state\n  取值 running 开始\n      paused  暂停\n")])])]),a("ul",[a("li",[t._v("动画的兼容性")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 如果低版本浏览器，想使用动画，需要在动画声明的时候添加前缀 */")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@keyframes")]),t._v(" 动画名称")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@-webkit-keyframes")]),t._v(" 动画名称")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@-o-keyframes")]),t._v(" 动画名称")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@-ms-keyframes")]),t._v(" 动画名称")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token atrule"}},[a("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@-moz-keyframes")]),t._v(" 动画名称")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("ul",[a("li",[t._v("animate.css")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("项目中，一般使用第三方动画库 animate.css")]),t._v(" "),a("ol",[a("li",[t._v("下载 "),a("a",{attrs:{href:"https://animate.style/",target:"_blank"}},[t._v("animate.css")])]),t._v(" "),a("li",[t._v("在页面中导入")]),t._v(" "),a("li",[t._v("调用动画名称")])])]),t._v(" "),a("h2",{attrs:{id:"css-的优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-的优化"}},[t._v("#")]),t._v(" CSS 的优化")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("ol",[a("li",[a("p",[t._v("减少服务器的压力")])]),t._v(" "),a("li",[a("p",[t._v("提升用户体验")])]),t._v(" "),a("li",[a("p",[t._v("css优化原则"),a("br"),t._v("\n尽量减少 http 的请求个数"),a("br"),t._v("\n在页面的顶部引入 css 文件"),a("br"),t._v("\n将 css 和 js 写在外部单独文件中")])]),t._v(" "),a("li",[a("p",[t._v("css 代码优化"),a("br"),t._v("\n合并样式(能写群组，就不单写，能用简写，就不单独定义属性)"),a("br"),t._v("\n缩小样式文件的大小(能重用的尽量重用，减少样式重写)"),a("br"),t._v("\n避免出现空的 href 和 src"),a("br"),t._v("\n代码压缩")])])])]),t._v(" "),a("h2",{attrs:{id:"css-reset-和-normalize-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-reset-和-normalize-css"}},[t._v("#")]),t._v(" css reset 和 normalize.css")]),t._v(" "),a("h4",{attrs:{id:"什么是-css-reset"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是-css-reset"}},[t._v("#")]),t._v(" 什么是 css reset")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("由于不同浏览器，对 html 元素的默认样式解析不同"),a("br"),t._v("\n我们在开发 css 之前，把大多数默认样式统一重置(格式化)"),a("br"),t._v("\n然后在写代码。这个行为叫做css reset")])]),t._v(" "),a("h4",{attrs:{id:"normalize-css"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#normalize-css"}},[t._v("#")]),t._v(" normalize.css")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("是 css reset 的一种优质的替代方案"),a("br"),t._v("\ncss 地址: "),a("a",{attrs:{href:"https://necolas.github.io/normalize.css/8.0.1/normalize.css",target:"_blank"}},[t._v("normalize")]),a("br"),t._v("\nGithub 地址: "),a("a",{attrs:{href:"https://github.com/necolas/normalize.css",target:"_blank"}},[t._v("normalize GitHub")])])]),t._v(" "),a("h4",{attrs:{id:"css-reset-和-normalize-css-的区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css-reset-和-normalize-css-的区别"}},[t._v("#")]),t._v(" css reset 和 normalize.css 的区别")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("提示")]),t._v(" "),a("p",[t._v("css reset 太激进，太暴力"),a("br"),t._v("\nnormalize.css 比较温和")])])])}),[],!1,null,null,null);s.default=e.exports}}]);