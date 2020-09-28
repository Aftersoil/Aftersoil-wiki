(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{382:function(a,t,e){"use strict";e.r(t);var n=e(25),s=Object(n.a)({},(function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h1",{attrs:{id:"文本格式化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#文本格式化"}},[a._v("#")]),a._v(" 文本格式化")]),a._v(" "),e("ul",[e("li",[e("p",[a._v("文本颜色: color")])]),a._v(" "),e("li",[e("p",[a._v("文本对齐方式: text-align")])])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("取值: left/center/right/justify\n注意: 1. 一个元素写了 text-align，控制的是内部的文本\n      2. 这个元素自己想对齐 margin: 0 auto\n      3. text-align 对是行内元素的孩子，都生效\n      4. 孩子如果是块级元素，只会继承 text-align，而块级元素不会居中显示\n")])])]),e("ul",[e("li",[a._v("行高: line-height")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("取值: xp 为单位的数字\n特型: 如果行高的数值，大于字体的大小，那么改行高文本将在指定的行高内部，成垂直居中的对齐方式显示\n行高，一般设置成容器高度相同的值，确保文字在容器垂直居中显示\n如果文字发生折行，不建议使用行高做垂直居中\n")])])]),e("ul",[e("li",[a._v("文字的线条修饰: text-decoraction")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("取值: none 默认值，无线条\n      underline 下划线\n      overline  上划线\n      line-through 删除线\n")])])]),e("ul",[e("li",[a._v("首航缩进: text-indent")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("取值: 以 px 为单位的数字\n")])])]),e("ul",[e("li",[a._v("文本阴影: text-shadow")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("取值: x y blur color\n")])])]),e("h2",{attrs:{id:"表格"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#表格"}},[a._v("#")]),a._v(" 表格")]),a._v(" "),e("ul",[e("li",[a._v("表格的常用样式")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("尺寸，边框，背景，字体，文本，内外边距\n设置 table 的边框，只设置最外边一圈边框\n")])])]),e("ul",[e("li",[a._v("td/th")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("尺寸，边框，背景，文字，文本，内边距都会有效\n外边距无效\n\nvertical-align: 设置单元格内部文字的对齐方式\n    取值: top/middle/bottom\n    对 tr/td/th 有效，对 table 无效\n\ntable: 特殊的显示方式\n    显示方式: 行内元素，块级元素，行内块，table\n    table 是一种特殊的表现方式\n    单元格内容较多，尺寸较小，单元格大小以内容为标准\n    单元格内容较少，尺寸较大，单元格大小以尺寸为标准\n    table 在浏览器的渲染方式: 先加载到浏览器内存中，在一次性画在页面上\n")])])]),e("ul",[e("li",[a._v("表格的特有属性")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1. 边框的合并和分离  border-collapse\n  取值: sparate 默认值，边框的分离状态\n        collapse 边框合并状态\n\n2. 边框的边距 border-spacing: x y\n  去值: 以 px 为单位的数字\n  前提，表格必须是分离状态，才有效border-collapse: sparate;\n\n3. 表格的标题 <caption></caption>\n  caption-side:\n  取值 top/bottom\n\n4. 设置表格的显示规则: table-layout\n  取值 auto 默认值，自动表格布局\n      td 的大小以内容和尺寸较大为准\n      fixed 固定布局\n      td 就以尺寸为准\n    \n  表格自动布局和固定布局的区别\n    > 自动布局                    \n      - 单元格的大小会自动适应内容\n      - 表格复杂时，加载速度较慢\n      - 自动布局比较灵活\n      - 适用于不确定没列大小，并且不复杂的表格\n    > 固定布局\n      - 单元格取决于设置的值\n      - 任何情况下，都是逐行渲染，渲染速度快\n      - 固定表格布局不够灵活\n      - 适用于明确知道每列大小的表格\n")])])]),e("h2",{attrs:{id:"定位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#定位"}},[a._v("#")]),a._v(" 定位")]),a._v(" "),e("p",[a._v("定义在元素在页面的位置")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("定位  相对，绝对，固定定位 position\n\n取值: \n  1. static 默认，静态(默认文档流)\n  2. relative 相对定位\n  3. absolute  绝对定位\n  4. fixed     固定定位\n\n当一个元素设置了 position 属性，并设置为 relative/absolute/fixed 其中一种时，这个元素已被称为已定位元素，已定位元素解锁了 4 个偏移属性 top/right/bottom/left\n")])])]),e("p",[a._v("定义的分类:")]),a._v(" "),e("p",[e("a",{attrs:{href:"#1"}},[a._v("1. 普通流定位")]),a._v(" "),e("a",{attrs:{href:"#1"}},[a._v("2. 浮动定位")]),a._v(" "),e("a",{attrs:{href:"#1"}},[a._v("3. 相对定位")]),a._v(" "),e("a",{attrs:{href:"#1"}},[a._v("4. 绝对定位")]),a._v(" "),e("a",{attrs:{href:"#1"}},[a._v("5. 固定定位")])]),a._v(" "),e("h3",{attrs:{id:"普通流定位-默认文档流定位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#普通流定位-默认文档流定位"}},[a._v("#")]),a._v(" 普通流定位 (默认文档流定位)")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("  1. 每个元素在页面上都有自己的空间\n  2. 每个元素都是从父元素的左上角开始渲染\n  3. 行内元素和行内块在同一行显示，从左往右，一行放不下，折行\n  4. 块级元素独占一行，从上往下排列\n")])])]),e("h3",{attrs:{id:"浮动定位"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#浮动定位"}},[a._v("#")]),a._v(" 浮动定位")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("让块级元素横向显示: float\n  取值 \n    - left 左浮动，让元素浮动停靠在父元素的左边，或者其它以浮动元素的后面\n    - right 右浮动，让元素停靠在父元素的右边，或者其它浮动元素的后面\n    - none 默认值，不浮动\n\n浮动的特点: \n  - 元素一旦浮动，改元素脱离文档流 (不占页面空间，后面元素上前补位)\n  - 浮动元素，会在当前行，靠左/右，停靠在父元素的边缘，或者是其它以浮动元素的边缘\n  - 父元素横向显示不下的部分所有浮动元素时，显示不下部分会自动换行，默认去距离当前行距离最近的位置\n  - 浮动，解决多个块级元素横向在一行显示的问题\n\n浮动定位引发的特殊情况: \n  - 浮动元素的占位问题\n  - 当父元素一行显示不下所有浮动元素时，最后显示不下会换行。默认去距离当前行最近的一行。但是，已浮动元素会根据自己的浮动方向占据位置，导致被挤下去的元素，会躲开被占据的位置，在下方显示\n  - 元素一旦浮动，如果元素没有定义宽度，那么浮动之后，元素的宽度靠内容撑开\n  - 元素一旦脱离文档流，会变成块级元素，尺寸，垂直外边距离都生效\n\n脱离文档流，意味着什么\n - 不占页面空间\n - 后续元素上前补位\n - 变成块元素\n\n清除浮动效果(清除浮动效果)\n  前面的浮动元素脱离文档，需要我上前补位\n  设置了清除浮动之后，我就不上前补位\n  clear:\n    取值: 1. none 不清除浮动\n          2. right 清除之前右浮动元素给我的影响\n          3. letf 清除之前左浮动元素给我带来的影响\n          3. both 清除左右元素给我带来的影响\n\n高度坍塌\n  父元素如果不设置高度，高度默认就是内容撑起来的，如果内部所有元素都浮动，那么父元素认为内部就没有内容了所以高度为 0\n  \n解决方案\n  - 给父元素设置高度。弊端，很多时候，不知道确切的高度\n  - 父元素也浮动。弊端，父元素的兄弟元素，会受到影响\n  - 正确的解决方案. 在最后一个子元素的后面追加一个空的块级元素，给这个元素设置clear: both\n  - 那么这个元素停留在文档流中，父元素的高度可以找到它\n  - 这个元素不会被前面的浮动元素覆盖\n  - 这个元素不写高，没有内容，那么默认宽度是父元素的 100% 高度为 0 ，不影响父级高度\n")])])]),e("h3",{attrs:{id:"相对定位-position-relative"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#相对定位-position-relative"}},[a._v("#")]),a._v(" 相对定位: position: relative")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("配合偏移属性实现定位\n相对定位，没有脱离文档流\n如果相对定位元素，不写偏移属性，效果与没写定位一样，不影响任何布局，只是把这个元素变成已定位元素\n相对定位，相对自己原来的位置偏移某个距离\n1. 元素本身，位置微调(类似 margin )\n2. 一般作为绝对定位的祖先元素\n")])])]),e("h3",{attrs:{id:"绝对定位-position-absolute"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#绝对定位-position-absolute"}},[a._v("#")]),a._v(" 绝对定位: position: absolute")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("配合偏移量使用\n绝对定位，脱离文档流\n绝对定位元素，如果祖先级没有；已定位元素，那么就相对与 body 左上角，执行偏移量\n绝对定位元素，会相对与离之间最近的祖先级，已定位元素的左上角进行偏移\n绝对定位，由于脱离文档流，产生如下效果\n1. 页面不占空间，后续元素上前补位\n2. 绝对定位的元素，会变成块级\n3. 没有写宽度元素，发生绝对定位后，宽度靠内容撑开\n")])])]),e("h3",{attrs:{id:"固定定位-position-fixed"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#固定定位-position-fixed"}},[a._v("#")]),a._v(" 固定定位: position: fixed")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("  配合偏移属性使用\n  将元素固定在页面上某个位置，不会随着滚动条滚动，发生变化，一直固定在页面的可视区域\n")])])]),e("h2",{attrs:{id:"显示方式"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#显示方式"}},[a._v("#")]),a._v(" 显示方式")]),a._v(" "),e("ul",[e("li",[a._v("显示方式")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("决定元素在网页中的表现形式(块级，行内，行内块，table)\n语法: display\n取值: 1. block 让元素以块级的方式显示\n      2. inline 让元素以行内的方式显示\n      3. inline-block 让元素以行内块的方式显示\n      4. table 让元素以 table 的方式显示\n      5. none 让元素隐藏，脱离文档流，不占位置\n")])])]),e("ul",[e("li",[a._v("显示效果: visibility")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("取值: 1. visible 默认的，可见的\n      2. hidden 隐藏\n")])])]),e("ul",[e("li",[a._v("透明度: opacity")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("取值 0 ~ 1  1是不透明 0是全透明\n")])])]),e("ul",[e("li",[a._v("垂直对齐方式")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("vertical-align 一般只有两个地方使用\ntable 中使用 取值 top/middle/bottom\n设置 table 中的内容对齐方式\nimg 中使用\n设置图片前后文字的垂直对齐方式\n取值 top/middle/bottom  baseline 基线 默认值\n一般项目中通常会将所有的图片与文字垂直对齐方式，更改为非基线对齐\n")])])]),e("ul",[e("li",[a._v("光标: cursor")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("取值: default 默认值\n      pointer 小手\n      text    文本\n      help    帮助\n      wait    等待\n")])])]),e("ul",[e("li",[a._v("列表的样式属性")])]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("1. 列表标识项 list-style-type\n  取值: 1. disc 默认值\n        2. none 去掉标识项\n        3. circle\n        4. square\n\n2. 列表项设置为图片 \n  list-style-image: url(图片的位置)\n\n3. 列表项的位置\n  ul 默认自带山下边距(chrome 解析 16px)\n    自带左内边距(chroem 解析 40px)\n  \n4. list-style-position\n  可以设置列表项在 li 里，或者设置列表在内边距里\n  取值  outside 默认值 在内边距，在 li 外\n        inside 在 li 里\n")])])]),e("h2",{attrs:{id:"堆叠顺序"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#堆叠顺序"}},[a._v("#")]),a._v(" 堆叠顺序")]),a._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[a._v("- 默认的堆叠顺序，html 元素后写的堆叠顺序高\n- 手动调整堆叠顺序 z-index: 整数\n- 堆叠顺序对父子关系无效，儿子永远在爹的上面\n- 只有已定位元素，可以设置堆叠顺序\n")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);