# BootStrap

## 响应式布局(CSS3)

什么是响应式网页

#### 响应式网页必须做到的几件事
:::tip
  1. 布局，使用流失布局(默认文档流+浮动)+弹性布局+栅格布局
  2. 文字可图片大小随着容器大小改变
  3. 媒体查询技术(css3)
      代码复杂程度几何性增加
      复杂网页，不适合使用响应式布局
:::

#### 如何测试响应式网页

- 使用真实设备
:::tip
  好处: 真实可靠<br>
  缺点: 成本高，测试任务量巨大
:::

- 使用第三方模拟软件测试
:::tip
  好处: 方便，快捷<br>
  缺点: 测试效果有限，有进一步验证
:::

#### 编写响应式布局

- 手机适配
```html
视口的设置，如果项目需要在移动端运行，需要设置视口
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
width=device-width 设置视口宽度等于设备宽度  
initial-scale=1.0  设置视口宽度初始能不能缩放 1.0代表不能缩放
maximum-scale=1.0  设置视口最大缩放比例  1.0最大1倍
user-scalable=0    设置是否允许用户缩放视口  0不允许
视口最简介的写法
```

- 所有的内容/文字/图片都使用相对尺寸(尽量)，少使用绝对值

- 流式布局 + 弹性布局 + 媒体查询(栅格布局) 完成响应式布局

- 媒体查询
```css
CSS3 Media Query 做响应式必备技术
Media: 媒体，浏览网页的设备
  设备: screen(pc/pad/phone)
        TV/print
根据浏览器网页的设备不同(尺寸，方向，硬件，解析度等)有选择的执行一部分 css 样式，忽略其它 css 样式
```

- BootStrap
:::tip
1. <a href="https://www.bootcss.com/" target="_blank">BootStrap地址</a>
:::

## 如果使用 boot

container 定宽容器，每种不同的分辨率下，定义了写死的 max-width 同时，左右 15px 内边距，水平居中

container-fluid 变宽容器，根据不同分辨率的屏幕，宽度永远是屏幕的 100%

:::tip
- boot 支持 4 种屏幕 xl/lg/md/sm  不支持 xs
- boot 中 1 个 rem 是 16px
- boot 的 css reset 使用的是 normalize 方案
:::


#### 按钮相关 css
```css
/* 
  .btn 基本类  定义了行内块，字号，文本对齐，边框，过渡等
  按钮颜色
*/
  .btn-danger     红色
  .btn-success    绿色
  .btn-warning    黄色
  .btn-info       藏青
  .btn-primary    蓝色
  .btn-secondary  灰色
  .btn-dary       深色
  .btn-light      浅色
```

#### 不同边框的颜色
```css
  .btn-outline-danger/warning/info.....
```

#### 不同按钮大小
```
.btn-sm     小的
.btn-lg     大的
.btn-block  块级
.btn-link   链接
```

#### 图片相关
```css
.rounded        /* 添加圆角 0.25rem */
.rounded-cirle  /* 圆形 */
.img-thumbnail  /* 添加内边距和边框 */
.img-fluid      /* 响应式图片，图片可以缩放，但是图片不能超过原始图片大小 */
```
#### 文字相关 class
```css
.text-danger/warning/info.... 文本颜色
.h1~h6      文字字号加粗
.text-uppercase/text-lowercase/text-capitalize 文本大小写，首字母大写
.text-left/right/center 文本对齐
.text-*-left/right/center  *: sm/md/lg 媒体查询
.text-justify   两端对齐，没有媒体查询
```

#### 列表相关
```css
ul  .list-unstyled  去点，左内边距清 0 
    .list-group     列表组
li  .list-group-item 列表项，边框，首元素和尾元素的圆角
颜色
    .list-group-item-danger/warning....
激活项 .active
禁用项 .disabled
```

#### table 相关 class
```css
.table 对 table 本身和 table 的后代布局
.table-bordered 为 table 本身和后代添加边框
.table-danger/warning/success... 表格颜色
.tbale-hover 带悬停效果的表格
.table-striped 各行换色
.table-responsive-*  *: sm/md/lg/xl 响应式布局的表格，写在 table 的付元素上
```

## 辅助类

- 边框
```css
.border-0   去掉边框
.border-top/right/bottom/left-0  去掉某一个方向的边框

基本类  .border  灰色实线边框
        .brder-top/right/bottom/left 单边的灰色实线边框

边框颜色
    .border-danger/warning/success....
```

- 浮动
```css
.float-left/right/none 响应式浮动
.float-*-left/right/none    *: sm/md/lg/xl
.clearfix 解决高度坍塌，写在父元素上
```

- 显示
```css
.visible       visibility: visible
.invisible     visibility: hidden
```

- 背景颜色
```css
bg-danger/warning/success.....
```

- 圆角
```css
.rounded/.rounded-0
.rounded-top/right/bottom/left  设置某个方向的两个圆角
```

- 尺寸
```css
w-25/50/75/100   width: 25%/50%/75%/100%

其它宽度需要自己定义

h-25/50/75/100   height: 25%/50%/75%/100%
```

- 内外边距
```css
m/mt/mr/mb/ml/mx/my-*-auto/0/1/2/3/4/5  外边距
0: 0rem
1: 0.25rem
2: 0.5rem
3: 1rem
4: 1.5rem
5. 3rem
p/pt/pr/pb/pl/px/py-*-0/1/2/3/4/5    内边距
*: sm/md/lg/xl  响应式的内外边距
```

## 栅格布局
<table border="1">
    <tr>
        <td>table 布局</td>
        <td>div + css</td>
        <td>boot 的栅格</td>
    </tr>
    <tr>
        <td>简单，容易控制</td>
        <td>语义正确，渲染效率高</td>
        <td>简单，容易控制，语义正确，渲染效率高，支持响应式</td>
    </tr>
    <tr>
        <td>语义错误，渲染效率底</td>
        <td>控制起来很麻烦，尤其是响应式布局找那个</td>
        <td>非常复杂的页面，不建议使用</td>
    </tr>
</table>

- 栅格概念
:::tip
  我们把每一行布局，分成 12 份<br>
  元素的占地面积，靠份数定义
:::

- 栅格的属性
```css
必须放在 .container 或者 .container-fluid 中
每一行 row，弹性，主轴 x，可以换行，有 -15px 的左右外边距
使用 .col-n，来声明子元素在 row 中占几份

所有 col 自带左右 15px 的内边距
```

- 响应式的栅格布局
```css
col-*-n   *: xl/lg/md/sm   n: 1-12
在不同屏幕下，占一行的 n 份
ex:  col-lg-3   col-sm-6
```
:::warning
注意: <br>
.row 的 -15px 左右外边距和 .col 的 15px 左右内边距，会导致布局对不齐，项目中要进行处理
:::

- .col
:::tip
使用 .col 类，不添加数字，自动布局，没有个 col 平均分配空间，col 可以超过 12 个，并且不换行
:::

- boot 媒体查询的兼容性问题
```css
boot 中的媒体查询，小屏幕向大屏幕兼容
sm 兼容 md/lg/xl
md 兼容 lg/xl
lg 兼容 xl
```

- 列偏移
```css
.offset-*-n   *: sm/md/lg/xl   n: 0~11
col 向右偏移 n 份
```

- 栅格嵌套
:::tip
  请在 col 中单独写出 div.row
:::

## 弹性布局

```css
d-*- none/inline/block/inline-block/flex

/* 主轴方向 */
flex-*-row/row-reverse/column/column-reverse

/* 项目在主轴上的排列方式 */
justify-content-*-between/around/start/end/center
```

## 表单

- 表单元素的排列方向
```css
.form-group   /* 堆叠表单，垂直排列 */
.form-inline  /* 内联表单，水平排列(弹性) */
```

- 表单控件样式
```css
.form-control  input 元素的基本类
  /* 块级 w100 字体 背景 边框 过渡 */
.col-form-label/-sm/-lg  设置输入文本与边框的距离

对于 checkbox 的样式
父级 .form-check (相对定位)
子级 .form-check-input (绝对定位)
.form-text 0.25 上外边距，块级
```

## 常用组件

- 按钮组
```css
基本结构 div.btn*n
外层 div 添加类 btn-group 横向按钮组
              btn-group-vertical 纵向按钮组
使用 btn-group-lg/sm 调整按钮大小
``` 

```html
<!-- 按钮组代码 -->
  <h1>按钮组</h1>
  <div class="btn-group btn-group-vertical btn-group-sm">
    <button class="btn btn-danger">小鸡炖蘑菇</button>
    <button class="btn btn-primary">姜丝炒土豆丝</button>
    <button class="btn btn-success">锅肉包</button>
  </div>
```

- 下拉菜单
```css
1. 样式 div.dropdown    相对定位
    >button.dropdown-toggle 画向下的小三角
    ul.dropdown-menu        display: none;
2. 事件
    button data-toggle="dropdown" 以 dropdown 的方式切换
    事件目标: ul 由于和 button 被 div.dropdown 包裹，点击 button，自动会更改 ul 的状态，不需要单独写目标
```

- 信息提示框
```css
1. 样式
  div.alert.alert-info   alert 基本类  alert-danger/info...颜色
  .alert-dismissble  配合子元素的 .close 类使用
  >span.colse    取消的小叉叉右浮动

2. 事件
  给 span (小叉叉)添加自定义属性 data-dismiss="alert" 事件目标不用写，默认是 span 的元素 div.alert

总结: 
  boot 中事件，关注两件事
  1. 事件是如何触发的。自定义属性触发，触发方式是这个属性的值
  2. 事件触发的目标
  button 绑定事件 data-target="#id"
  a 绑定目标  href="#id"
```

- 导航
```css
1. 水平导航
  ul.nav  弹性布局，去点，主轴方向默认 X 轴
    >li.nav-item    配合 ul.justified 让 li 等宽显示
    >a.nav-link     块级，内边距撑开，hover，focus等

2. 选项卡导航
  导航样式 ul.nav.nav-tabs>li.nav-item>a.nav-link
  .nav-tabs 让水平导航变成选项卡导航

  显示内容样式 div.tabs-cintent>div.tabs-pane
    div.tabs-cintent 没有任何样式，作为子代选择器的路径
    div.tabs-pane  与父元素配合，让当前元素 display: none
    .active 与 .tabs-content 配合，让当前元素显示

  事件
    <a data-toggle="tab" href="#tab1" class="nav-link">111</a>
    给 div.tab-pane 添加 id 把 id 放到对相应的 a 标签中定义事件触发之后，执行的目标

3. 胶囊导航
  ul.mav.nav-pills
  li.nav-item
  a.nav-link data-toggle="pill" href="#对应id"
    内容 div.tab-content>div.tab-pane
```

- 导航栏(重点)
```css
div.navbar.navbar-expand-*
ul.navbar-nav   默认为弹性，主轴为 y
父级 div 的 navbar-expand-* 与子级 ul.navbar-nav 组成后代选择器，对 ul 的主轴方向进行了控制
比如 navbar-expand 导尿管屏幕 w>=768px,ul 的主轴方向变为 row ，所有 li 横向显示。当屏幕 w<768px, ul 的主轴方向默认的 column 所有 li 纵向显示
li.nav-item
a.nav-link
```

- 折叠
```css
button  data-toggle="collapse" data-target="div的id"
div.collapse    display: none 隐藏
```

- 卡片
```css
div.card >
  div.acrd-header
  div.card-body
  div.card-footer
/* 如果在 card 中有 a 标签, 那么 a 可以使用 card 提供的样式 .card-link 对于一个 card 来说，处理 div.card, 其它都可以省略 */
```

- 手风琴(卡片+折叠)
```html
<h1>手风琴</h1>
<div id="parent">
  <div class="card">
    <div class="card-header">
      <a href="#c1" class="card-link" data-toggle="collapse">卡片1</a>
    </div>
    <div class="collapse" id="c1" data-parent="#parent">
      <div class="card-body">内容1</div>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <a href="#c2" class="card-link" data-toggle="collapse">卡片2</a>
    </div>
    <div class="collapse" id="c2" data-parent="#parent">
      <div class="card-body">内容2</div>
    </div>
  </div>
</div>
```
:::warning
注意: 
  1. .collapse 不能和 .card-body 在同一个 div 上，不然在隐藏/显示的时候，会发生卡顿<br>
    解决方案  ``div.collapse>div.card-body``
  2. 多个折叠部分可同时打开<br>
    解决方案: 在最外层，添加 ``div#parent``, 所有的卡片都在这个 div 中，在所有 ``div.collapse`` 上，添加事件 ``data-parent="#parent"``, 这样就可以保证，在 ``div#parent`` 中，同时最对只能有一个折叠区域是打开状态
:::

- 折叠导航栏
```css
最外层
    navbar.bg-dark.navbar-dark.navbar-expand-*

内部 3 部分
  a.navbar-barnd 不隐藏，显示在最前面的菜单
  button.navbar-toggle > span.navbar-toggle-icon 折叠按钮
  div.collapse.navbar-collapse  折叠的菜单项
  > ul.navbar-nav > li.nav-item > a.nav-link

功能解释
  1. .navbar-dark 对最外层 div 没有任何影响，告诉内部的 .navbar-barnd 和 .navbar-nav 和 .navbar-toggle-icon 告诉它们，导航栏是深色的，你们要用浅色文字
  2. .navbar-expand-* 和 .navbar-collapse 配合
    .collapse 作用 dispaly: none;
    .navbar-expand-* .navbar-collapse{dispaly: flex}
    /* 所以只要屏幕符合 * 号要求，这里的 div 就是显示状态，屏幕不符合 * 号要求，那么这个选择器就失效了，所以这里的 * 决定了菜单在什么屏幕下显示，什么屏幕下隐藏 */
```

- 媒体对象
```html
<h1>媒体对象</h1>
<div class="media border p-3">
  <img src="url" alt="">
  <div class="media-body ml-3">
    <h4>齐胸襦裙</h4>
    <p>很受欢迎</p>
  </div>
</div>
```

- 焦点轮播
```cs
1. 图片轮播
  div.carousel    相对定位
    >div.carousel-inner 相对定位 宽100% 溢出隐藏
      >div.carousel.item.active display: none  .active 显示
        >img.w-100 如果宽度不是 100% 右箭头会走出去

  事件 
    给 div.carousel 添加 data-ride="carousel" 轮播图就可以动了
      
2. 左右箭头
  div.carousel#id
    >a.carousel-control-prev/next
      data-slide="prev/next" href="#id"
  由于 boot 给默认的左右箭头不符合我们的需求所以样式需要重写

3. 轮播指示器
  ul.carousel-indicators   定位，弹性布局
    > li.active .carousel-indicators 设置了 li 的宽高，由于 boot 宽高不符合我们的需求，需要重写(看ui设计)
  
4. 事件
  li data-slide-to="图片的index" 从 0 开始
  data-target="#id"
```

- 模态框
```html
<h1>模态框</h1>
<button data-toggle="modal" data-target="#modal" class="btn btn-success">start modal</button>
<div class="modal" id="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4>信息收集</h4>
      </div>
      <div class="modal-body">
        请输入姓名：<input type="text" name="" id="">
      </div>
      <div class="modal-footer">
        <button class="btn btn-danger" data-dismiss="modal">关闭按钮</button>
      </div>
    </div>
  </div>
</div>
```

## 其它组件

- 巨幕
```css
巨大的内边距，和边框，背景色
div.jumbotron
```

- 徽章
```css
把徽章看作小按钮
基本类  badge
徽章颜色  badge-danger/warning....
胶囊徽章  badge-pill
```
