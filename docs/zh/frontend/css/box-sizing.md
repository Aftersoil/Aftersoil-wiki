# 盒子模型

## box-sizing

:::tip
- 定义盒子模型的计算方式
- `box-sizing:content-box;` 默认值,我们定义的`width/height`是内容区域
- 元素占地宽度=左外边距+左边框+左内边距+内容区域宽度+右内边距+右边框+右外边距
- `box-sizing:border-box;`我们定义的`width/height`，是指`border`包含部分的宽高(含`border`)
- 元素占地宽度=左外边距+width+右外边距
:::

`border-box`使用的时机，一个容器内，在一行显示多个元素，如果子元素的`width`使用%定义，那么基本就要使用`border-box`了

## 背景

## 背景颜色

```css
background-color: 合法颜色值
```

## 背景图片

```css
background-image: url(09.png);
```

## 背景图片的平铺

`background-repeat:`
```css
取值：
  1.repeat 默认值 平铺
  2.no-repeat 不平铺
  3.repeat-x  水平方向平铺
  4.repeat-y  垂直方向平铺
```

## 背景图片的定位

`background-position:x y;`
```
取值：
  1.px为单位的数字
  2.%
  3.关键字  x:left/center/right   y:top/center/bottom
```

## 背景图片的尺寸

`background-size:x y`

```
取值
  取两个值，是分别设置宽高
  取一个值，是设置宽，让高自适应
  1. 以px为单位的数字
  2. %
  3. cover 覆盖，要求容器被全部填满，图片显示不全没关系
  4. contain 包含。让容器可以完成的包含整张图片。图片必须完整，
            容器是不是有空白区域，没关系
```

## 背景图片的固定

`background-attachment`

```
取值：
  scroll 默认值，背景图会跟随页面滚动条而滚动
  fixed 固定，背景图相对于页面位置固定
        不会跟随页面滚动条滚动
        但是只会在原容器区域显示
```

## 简写方式

`background:`

```
取值：
  color image repeat attachment position;

最精简方式  background:color/image;
```

## 渐变  gradient

渐变是指多种颜色，平缓变化的一种显示效果    
渐变的主要因素      
色标，一种颜色，和他出现的位置      
一个渐变，最少两个色标      

渐变分类
:::tip
- 线性渐变，以直线的方式来填充渐变色
- 径向渐变，以圆形的方式来填充渐变色
- 重复渐变，将线性，径向渐变重复几次实现
:::

## 线性渐变

`background-image:linear-gradient(方向 , 色标1，色标2.....)`

```
方向angle：取值
  1.关键字  to bottom
            to right
            to left
            to top
  2.角度值  0deg  to top
            90deg to right
            180deg to bottom
            270deg to left

色标color-point:取值
  颜色+位置
  1.只写颜色不写位置，一般用于只有两个色标，对应开头和结尾
    linear-gradient(0deg,#000,#0ff)
  2.颜色+px为单位的数字
    linear-gradient(0deg,#000 0px,#ff0 50px,
    #000 100px,#0ff 150px,#000 200px)
  3.颜色+%
    background-image:linear-gradient(0deg,#000 0%,
    #ff0 25%,#000 50%,#0ff 75%,#000 100%);
```

## 径向渐变

`background-image:radial-gradient(半径 at 圆心,色标1,色标2.....)`

```
半径取值 px为单位的数字

圆心取值 ：
  1.以px为单位数字  x  y
  2.x% y%
  3.关键字  x: left/center/right
            y:top/center/bottom

色标取值 ，1.颜色+px 颜色的填充，就与半径没有关系了
          2.颜色+% 这里的位置，是半径的%
```

## 重复渐变

重复的线性渐变      
`background-image:repeating-linear-gradient(45deg,#000 0px,#ff0 10px,#000 20px,#0ff 30px,#000 40px);`

## 浏览器兼容性问题(ie8.0以下不兼容)

为了兼容低版本浏览器，写的css代码，叫做css hack       
渐变属性，兼容低版本浏览器的写法

- 添加前缀

```
chrome/safari    -webkit-
firefox           -moz-
IE                -ms-
opera            -o-
```

- 线性渐变的方向，发生了改变

```
top/ right/ bottom/ left

background:-webkit-linear-gradient( bottom,#f00,#00f);
background:-ms-linear-gradient( bottom,#f00,#00f);
background:-o-linear-gradient( bottom,#f00,#00f);
background:-moz-linear-gradient( bottom,#f00,#00f);
```

## 文本格式化 **重点**

## 字体大小

`font-size:`
```
取值：
  px/pt/em/rem为单位的数字
```

## 设置字体系列

`font-family`
```
取值：
  pc中字体库里有的字体，如果字体名称代空格，必须加""

多个字体名称，使用,隔开
  font-family:chiller,华文彩云,"mv boli";
```

## 字体权重(加粗)

`font-weight`
```
取值  
  1.关键字  lighter 
            normal      
            bold
            bolder
  
  2.无单位，100的整倍数，最大值1000
```

## 字体样式

```css
font-style:italic;
           normal
```

## 小型大写字母

```css
font-variant:small-caps;
```

## 简写模式

```css
font: style variant weight size family;
/* 最简写法  font:size family */
```

## 写css的思路

:::tip
- 从上往下写，从左往右写，从外往里写
- 找到目标元素，写样式步骤
- 尺寸，大体位置
- 边框，背景
- 文字相关
- 微调 (`margin padding`)
:::
