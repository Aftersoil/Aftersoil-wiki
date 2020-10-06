# 尺寸和边框

## 尺寸属性

- 作用

设置元素的宽度和高度

- 属性

```css
width: /* 宽度 */
max-width: /* 最大宽度 */
min-width: /* 最小宽度 */
height：/* 高度 */
max-height:
min-height
/* 取值：px为单位的数字和父元素的%比 */
```

:::warning
注意，如果不写宽高，各个元素默认的宽高是多少？    
- 块级元素不写宽，默认宽度占满父容器宽度100%
- 块级元素不写高，默认高度靠内容撑起来
- 行内元素，设置宽高无效。它的宽高靠内容撑起。
- 自带宽高属性的元素，设置宽高有效（img,table）
:::

## 附加知识点1.单位

```
单位：
px    像素
in    英寸  1in=2.54cm
pt    磅值  1pt=1/72in  多用于设置字体大小
cm    厘米
mm    毫米

项目中，为了页面可以在pc pad phone都正常显示
我们一般会使用相对单位

em    以父元素的数值当做基本单位
rem   以html的数值当做基本单位
% 
```

## 溢出处理

当内容较大，元素区域较小的时候，就会发生溢出效果      
默认是纵向溢出

`overflow:`

```
取值：visible 默认值，溢出部分可见的
  hidden      溢出部分隐藏
  scroll      不管是否溢出，x和y轴方向都添加滚动条
  auto        只有溢出才有滚动条，不溢出没有
overflow-x    设置水平轴滚动条
overflow-y    设置垂直轴滚动条
``` 

如何设置成横向溢出    
内部容器，设置宽度，大于外部容器的宽度

## 附加知识点，颜色合法值

:::tip
- 颜色的英文单词  `red `
- `#rrggbb`  6位16进制的数字   代表`rgb ` 每一位`0~ff`  `0~255`
- `#aabbcc`--->`#abc`  `#ff0000`--->`#f00`
  - 常用颜色 `#f00  #0f0  #00f  #ff0  #0ff #f0f`
  - `#ddd  #666  #333  #e8e8e8 `
- `rgb(r,g,b)` 十进制  `r,g,b 0~255`
- `rgba(r,g,b,alpha) alpha0~1`
- `hsl` 不记
:::

## 边框

## 边框的简写方式

```css
border: width style color;
border: 2px solid red;
style： solid 实线
       dotted 点点虚线
       dashed 断线虚线
       double  双实线
color：合法的颜色值和transparent[等同于全透明]

最简方式
border:style;
```

## 边框的单属性定义

```css
border-color:
border-style: 只要写了style属性，就会显示边框
border-width:
```

## 单边定义

```css
border-top: width style color;
border-right
border-bottom
border-left
```

## 单边的单属性定义

```css
border-*-color
border-*-width
border-*-style
*:top/right/bottom/left
```

## 边框的倒角(圆角)

```css
border-radius:
/* 取值：以px为单位的数字 */
/* %  50%是一个圆形 */
/* 单角设置 */
border-top-left-radius:
border-top-right-radius:
border-bottom-left-radius:
border-bottom-right-radius:
```

## 边框的阴影

```css
box-shadow:
取值：h-shadow v-shadow blur spread color inset;
h-shadow 水平方向的阴影偏移
v-shadow 垂直方向的阴影偏移
blur 阴影模糊距离
spread 阴影尺寸
color 阴影的颜色
inset/outset  设置内部阴影和外部阴影
```

## 轮廓

```css
在边框外围的一圈线条，被称为边框的边框
outline:width style color;
去除轮廓，去除边框
border:none/0;
outline:none/0;
```

## 框模型，盒子模型

元素在页面上实际占地空间的一种计算方式

:::tip
- 浏览器默认元素实际占地宽度= 左外边距+左边框+左内边距+内容区域宽度+右内边距+右边框+右外边距
- 浏览器默认元素实际占地高度= 上外边距+上边框+上内边距+内容区域高度+下内边距+下边框+下外边距
:::

外边距`margin`：边框以外的距离，元素与元素之间的距离    
内边距`padding`：边框与内容区域之间的距离   

## 外边距`margin`

```css
/* margin:v1;设置上右下左4个方向外边距 */
/* 改变margin，元素有位移效果。 */
/* 在页面元素做位置微调的时候，使用margin */
/* 设置单方向外边距 */
margin-top:10px;
margin-right:20px;
margin-bottom:30px;
margin-left:40px;
```

取值:
:::tip
- 以px为单位的数字
- %  是父元素宽度的%
- 值取负数， `margin-top  + ↓   - ↑`
  - `margin-left  + →  - ←`
- `auto`：对上下外边距无效
  - 自动计算块级元素的左右外边距
  - 让块级元素水平居中，（只对设置了宽度的块级元素生效）
:::

- 简写方式

```css
margin:v1;     /* 设置4个方向 */
margin:v1 v2;  /* v1设置上下    v2设置左右 */
  margin:0 auto;/margin:auto;
  margin:10px auto;
margin:v1 v2 v3;  上    左右    下    
margin:v1 v2 v3 v4;  上右下左
```

## 外边距的合并

:::tip
- 两个垂直外边距相遇时，他们将合并成一个
- 值以大的为准。
- 解决方法：布局设计的时候，直接规避
:::

## 外边距溢出

在特殊情况下，为子元素设置上外边距，会作用到父元素上！
:::tip
特殊情况
- 父元素没有上边框
- 子元素的内容区域的上边沿与父元素的内容区域的上沿重合    
- 解决方案：    
- 给父元素添加上边框
  - 弊端：影响了父元素的实际占地高度
- 给父元素添加上内边距
  - 弊端：影响了父元素的实际占地高度
- 在子元素之间添加一个空的`<table></table>`
:::

## 关于块级元素，行内元素，行内块的总结(必须特别熟悉)

- 行内元素的特点
:::tip
- 设置宽高无效，宽高根据内容自动撑开
- 上下外边距无效，左右外边距有效
- 可以与其它行内元素和行内块元素共用一行
- 一行放不下，再折行
:::

- 块级元素的特点
:::tip
- 设置宽高有效，如果不设置宽，宽度是父级宽度的100%
- 如果不设置高度，高度靠内容撑开
- 4个方向外边距都有效，独占一行
:::

- 行内块元素   `input`
:::tip
- 设置宽高有效，但是自带一个默认的宽高
- 4个外边距都有效，但是同一行修改一个行内块的垂直外边距，整行都会跟着一起发生位置改变。
- 可以与其他行内块和行内元素共用一行
:::

## 自带外边距的元素

`h1~h6  p  body  ol  ul  dl  pre`

由于不同浏览器对默认的外边距的解析可能会有差别      
所以在写代码之前，一般会把内外边距清空。这个行为叫做`css reset`

```css
* {
  margin: 0;
  padding: 0;
}
```

## 内边距 padding

改变`padding`，感觉上是改变了元素的大小       
改变`padding`是不会影响 其它元素的，只会改变当前元素自己的实际占地尺寸

```css
padding:v1;           /* 设置4个方向内边距 */
padding:v1 v2;        /* 上下  左右 */
padding:v1 v2 v3;     /* 上  左右  下 */
padding:v1 v2 v3 v4;  /* 上右下左 */
padding-top:
padding-right:
padding-bottom
padding-left

/* 取值：以px为单位的数字 */
/* % */
/* padding没有auto */
```
