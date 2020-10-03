(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{524:function(s,a,t){"use strict";t.r(a);var e=t(22),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"方法使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法使用"}},[s._v("#")]),s._v(" 方法使用")]),s._v(" "),t("h2",{attrs:{id:"回顾属性选择器-css-中已有的"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回顾属性选择器-css-中已有的"}},[s._v("#")]),s._v(" 回顾属性选择器 css 中已有的")]),s._v(" "),t("div",{staticClass:"language-text extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[属性名]\n[属性名 = 值]\n[属性名 ^= 值]\n[属性名 $= 值]\n[属性名 *= 值]\n")])])]),t("h2",{attrs:{id:"jquery-新增"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jquery-新增"}},[s._v("#")]),s._v(" jQuery 新增")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("用元素的内容文本作为查找条件\n当元素的 class 或其它选择器无法区分这个元素时，就可以考虑用元素内容作为判断条件\n  1. :contains(文本)  选择元素内容中包含指定文本的元素\n  2. :has(选择器) 选择子元素中包含符合条件元素的父元素\n\n可见性过滤:\n  1. visible 选择所有可见的元素\n  2. hidden 选择所有隐藏的元素\n")])])]),t("h2",{attrs:{id:"_2-修改"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-修改"}},[s._v("#")]),s._v(" 2. 修改")]),s._v(" "),t("ul",[t("li",[s._v("修改样式")])]),s._v(" "),t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*\n1. 获取修改内联样式\n  DOM: 元素.style.css属性 = "值"\n  jq中: $元素.css("css属性", "值")\n\n    简写: 控制显示隐藏\n      $元素.show() 等效于 .css("display", "block")\n           .hide() 等效于  .css("display", "none")\n  \n  DOM 中获取样式不能用 .style，应为 .style 只能获得内联样式。所以 DOM 中被迫使用 getComputedStyle() 来获取计算后的样式\n\n  jQuery 中的 .css() 可自动切换 .style 和 getComputedStyle()。使用 .css() 即可修改样式，也可以获取所有样式\n    .css() 内部自动判断\n      如果没有给新的 css 属性值，就调用 getComputedStyle() 自动执行获取操作\n      如果给了新的 css 属性值，就自动切换成 .style.css 属性，执行操作\n    \n2. 专门操作 class 函数\n  $元素.addClass("类名...")\n  $元素.removeClass("类名...")\n  let bool = $元素.hasClass("类名") 判断一个元素是否包含某个 class\n\n  简化: 因为经常需要在有和没有某个 class 之间来回切换元素样式，所以今后，只要反复切换一个元素的 class 时，可简写为 $元素.toogleClass("");\n    toogleClass 不能代替 addClass\n*/')]),s._v("\n")])])]),t("h2",{attrs:{id:"_3-按节点关系查找"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-按节点关系查找"}},[s._v("#")]),s._v(" 3. 按节点关系查找")]),s._v(" "),t("ol",[t("li",[s._v("父子关系")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('DOM: 元素.parentNode\n     元素.childern\n     元素.firstElementChild\n     元素.lastElementChild\n\njQ 中 $元素.parent()\n      $元素.children(["选择器"])\n')])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("兄弟关系")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v('DOM: 元素.nextElementSibling\n     元素.previousElementSibling\n\njQ 中: $元素.next() 之后一个兄弟元素\n       $元素.nextAll() 之后所有兄弟元素\n       $元素,prev() 之前一个兄弟元素\n       $元素.prevAll() 之前所有兄弟元素\n       $元素.siblings(["选择器"])  除当元素外，所有平级的兄弟元素(不分前后)\n')])])]),t("h2",{attrs:{id:"_4-添加-删除-替换-克隆"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-添加-删除-替换-克隆"}},[s._v("#")]),s._v(" 4. 添加/删除/替换/克隆")]),s._v(" "),t("ol",[t("li",[s._v("添加新元素")])]),s._v(" "),t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*\nDOM 3步\n  1. 创建空元素\n  2. 设置关键属性\n  3. 将新元素添加到 DOM 数\n\njq 中 2 步:\n  1. 用 $(html片段) 就可以创建片段中所有元素\n    let $a = $(`<a href="www.baidu.com">百度</a>`)  \n  2. 依然需要将新元素添加到 DOM 树上\n    jq 中: $父元素.append($新元素)\n            $父元素.prepend($新元素) 开头插入\n            $现有元素.before($新元素)\n            $现有元素.after($新元素)  之后插入\n            $现有元素.replaceWith($新元素)\n*/')]),s._v("\n")])])]),t("ol",{attrs:{start:"2"}},[t("li",[s._v("删除元素")])]),s._v(" "),t("div",{staticClass:"language-css extra-class"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v('/*\nDOM: 父元素.removeChild(子元素)\njq 中: $任意元素.remove()\n\n补充: .is()\n  专门判断一个元素是否符合条件\n  向判断一个元素是否符合指定的条件时\n    let bool $元素.is("选择器")\n    如果 $ 元素符合"选择器"条件要求，则返回 true\n    如果 $ 元素不符合"选择器"条件要求，则返回 false\n*/')]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=n.exports}}]);