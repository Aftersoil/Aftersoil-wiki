# 事件操作

## 修改

克隆: 
```js
// 复制一个和原 DOM 元素相同的一个新元素
let $新元素 = $现有元素.clone();
```

## 事件绑定

- 事件绑定

DOM 中灵活的事件绑定

```js
元素.addEventListener("事件名", 处理函数)
元素.removeEventListener("事件名", 处理函数名)
```

- jq 中共有几种事件绑定的方式
```js
bind/unbind: 单纯的代替 addEventListener() 和 removeEventListener() 用法完全相同
```

- 事件委托
```css
/*
DOM: 事件委托 3 件事
  1. 事件绑定在父元素上一次
  2. 用 e.target 代替 this
  3. 判断 e.target 是否想要的

jq 中: .delegate()/undelegate()
  1. 事件绑定在父元素上一次
  2. this 又回来了  this. == e.target
  3. 不用自己写 if ($target.is("选择器"))
     而是将选择器作为参数交给 delegate() 请 delegate 自动判断当前元素是否符合要求

  $父元素.delegate("选择器条件", "事件名", function(){ ...  $( this) })
*/
```

- on/off(): 其实就是 bind 和 delegate 的封装
```css
/*
重载方式
  1. 直接个子元素绑定事件
    $元素.on("事件名", 处理函数)
      等效于 bind() 等效于 addEnevtListener()
  
  2. 如果利用事件委托时
    $父元素.on("事件名", "选择器调价", function(){ .... })
*/
```

- .事件名() 仅等效于 bind() 无法利用事件委托的优势
```css
/*
强调: 只有 21 种常用的事件被简写了
  除了 21 种之外，都不能简写
    如: input 事件: 当文本输入一个文字后自动触发。
        $txt.on("input", function(){...})
*/
```

## 页面加载顺序

统称 js 代码(查找元素，事假绑定)都必须在页面内容加载完成，才能执行

将 js 放在 `<body>` 元素内容底部

- 通过绑定窗口事件 onload 事件
```js
window.addEventListener("load", function(){ ... })

jq: 
  $(winsow).load(function(){ ... })
```

- 在 onload 之前还有一个 DOMContentLoaded 事件
```js
// DOMContentLoaded 事件仅等待 html 和 js 加载完成就自动触发。不必等待 css 和图片比 onload 早的多
// DOMContentLoaded 有兼容性问题

// jq 中
  $(document).ready(function(){ ... })

  简写: $(function(){ ... });
  
  // 今后几乎所有的 jq 代码都要放在 $(function(){ ... }) 内。可以代替 js 中的匿名函数中。
```

:::tip
总结
- 大部分和 css 和图片无关的初始化操作，不如: 事件绑定，用过首选在 DOMContentLoaded，ajax 等 中提前执行
- 只要个别依赖于 css 和图片的初始化操作才被迫放在 window.onload 中
:::

4. $ 的原理

    1. 创建 jq 对象并查找元素 $("选择器")
    2. 创建 jq 对象直接封装 DOM 元素 $(this) $(e.target)
    3. 创建新的 DOM 元素 $("html片段")
    4. 绑定 DOM 内容加载后就提前执行的时间 $(function(){ ... })


## 鼠标事件
- DOM 
```js
.mouseover 鼠标进入
.mouseout 鼠标移除
// 频繁进出子元素，也会冒泡触发父元素上的事件，容易引起误会
```

- jq 中
```js
mouseenter // 鼠标移入
mouseleave // 鼠标移除
```

- 模拟触发
```js
$元素.trigger("事件名")
```

## 动画

## 简单动画

- 显示隐藏
```js
.show()   .hide()
.show() .hide() // 不加参数时，默认使用 display: block 和display: none 控制瞬间显示隐藏

// 如果想有动画效果，必须加持续时间参数
```

- 上滑下滑
```js
.slideUp()  .slideDown()
```

- 淡入淡出
```js
.fadeIn()  .fadeOut()
```

- 简单动画所有函数的共性
```
1. 效果是写死的！几乎不可维护
2. 用 js 定时器和 DOM 操作模拟器的动画效果 --- 效率极低
```

## 万能动画

可对任何 css 属性应用动画效果，只要希望对任意 css 属性应用动画效果时

```js
$元素.animate({
  css属性: 目标值
}, 动画持续事件)
```

> 让当前元素从现在的状态，经过指定的时间后缓慢过渡到目标状态<br>
> animate() 中只需要写目标值，animate() 可自动获得当前对应的属性值，自动计算变化的距离

> 也是 js 定时器和 DOM 操作模拟的动画效果<br>
> 只支持单个数值的 css 属性，不支持 css3 动画，不支持颜色过渡

#### 排队和并发

- 并发执行: 多个 css 属性同时变化
  > 一个 animate() 内的多个 css 属性默认并发执行

- 排队执行: 多个 css 属性按顺序依次先后变化
  > 对同一个元素先后调用多次 animate() 函数，多次 animate 函数中的 css 属性排队执行

- 停止动画  $元素.stop()
```
默认只能停止当前正在播放的一个动画。如果队列中后续还有其它动画，则依然继续执行

$元素.stop(true)
  停止当前动画，且清除动画队列

判断一个元素是否在播放 jQuery 动画
  :animated 选择器
  专门匹配正在播放的动画的元素
```

## 类数组对象操作

> js 中类数组对象很受歧视，长得象数组，但是数组家好用的函数，类数组对象都用不了。但是 jq 中创建 jq 对象，都是类数组对象，于是 jQuery 就是 jq 对象，模拟出来两个和数组家功能相似的函数

- 遍历
```js
js 数组中: arr.forEach(function(elem, i, arr) {...})
jq 中: $(...)each(function(i, DOM元素) { ... })
// 依次去除.前的查找结果集合中的每个 DOM 元素，执行相同的操作
```

- 查找
```js
js 数组中: let i = indexOf(值);
jq 中: let $i = $(查找结果).index(元素);
// 查找元素在结果集合中的位置
```
