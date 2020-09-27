# jQuery

## 了解 jQuery 

-  简单
-  解决了大部分浏览器兼容性问题
- 凡是 jQuery 让用的都没有兼容性问题
- 今后 pc 端的项目，以及主流框架底层，都是用 jQuery 实现的
- jQuery 仅适用与 pc 端，不适用与移动版本

:::tip
<a href="http://jquery.com/" target="_blank">jQuery 官网</a><br>
<a href="https://api.jquery.com/" target="_blank">jQuery 官网手册</a><br>
<a href="https://www.jb51.net/shouce/jquery1.82/" target="_blank">jQuery 中文手册</a><br>
<a href="https://github.com/jquery/" target="_blank">Github jQuery</a>
:::

## jQuery 版本

版本:
:::tip
1x 唯一支持旧浏览器的版本<br>
2x 不在支持旧浏览器<br>
3x 不在支持旧浏览器，而且添加了部分新功能
:::

引入: 
:::tip
那个页面需要使用 jQuery 的简化版函数，都要先引入 jQuery.js 在编写自定义的 js 代码
:::
```html
<script src="jQuery.js"></script>
```

出于性能的考虑: 所有的 js 代码的引入，都要放在 body 结尾。避免影响网页内容的加载

## jQuery 的原理

当引入 jQuery.js 时
```
其实在 window 中添加了一中新类型的 jQuery
jQuery类型也有两部分组成

  1. 构造函数 function jQuery() {}
    负责创建该类型的子对象
  
  2. 原型对象 jQuery.prototype
    负责保存该类型所有子对象中共有的函数
```
        
## jQuery 简化版函数的三大特点

1. 一个函数两用

jQuery 中没有属性，只有函数

```
比如: 获得按钮的内容
  DOM: btn.innerHTML
  修改 DOM 元素
  DOM: btn.innerHTML = 新值

但是在 jQuery 中都是函数，没有属性，怎么实现对一个属性获取或添加操作
  重载: 同一个函数，根据传入的参数不同，执行不同的操作

  jQuery中: 一个修改属性的函数，如果没有给新值，就默认执行获取属性值的操作。如果给了新值参数，就变成修改属性值的操作
    不如: 获得按钮内容
      jQuery中: var 内容 = $btn.html(); -- 获取
      修改按钮的内容
      jQuery中: $btn.html("新值");  -- 修改
```

:::tip
总结: <br>
jQuery 中凡是修改属性或内容的函数，都是一个函数两用。如果没有给新值，默认执行获取属性或内容的操作。如果给了新值，就变成了修改属性或内容的操作
:::

2. 自带遍历

:::tip
对 jQuery 类数组对象，调用一次简化版函数，等效于类数组对象内部保存的所有 DOM 元素，都调用一次函数 --- jQuery 对象自动的功能
:::

## 查找元素

按选择器查找元素: $("选择器")
```css
/* jQuery 不但支持所有的 CSS 选择器，而且还增加了一批新增的 jQUery 专属选择器 */
  包括:
    css 中的子元素过滤
      :first-child    作为其父元素下第一个子元素的所有元素
      :last-child
      :nth-child(i)
      :only-child
      /* 总结: 根据元素在其父元素的相对下标位置选择元素。且序号从 1 开始 */

    /* 基本过滤 jQuery 新增: */
    /* 如果按照元素在其父元素内的相对位置选择器时 */
      :first   :last
      :eq(i)   :lt(i)  :gt(i)
      :even    :odd
      偶数      奇数
      /* 特点: 先将符合条件的元素去出，统一放入一个集合中。按元素在集合中的编号选择元素。且下标从 0 开始 */

/* 今后希望打破父元素的界限，所有子元素统一编号，按位置找到元素时 */
```

:::warning
总结: <br>
今后只要能用 css 做的效果，一定首选 css 做，因为 css 的效率就是比 js 高，且 css 没有框架和平台的兼容性问题。<br>
即是 jQuery 中的选择器，也必须首选 css 选择器，css 选择器做不了的，才被迫选择 jQuery 新增的选择器。因为 jQuery 新增的选择器都是用 js 程序在底层模拟的————效率低的
:::

## $ 的原理

- 创建 jQuery 对象，封装 DOM 元素
- 先查找在封装 $("选择器")
- 直接封装 $(DOM元素) 经常 $(this) 或者 $(e.target)
