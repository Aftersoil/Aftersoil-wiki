# 选择器

## 复杂选择器

- 兄弟选择器

兄弟元素，具备相同父元素的平级元素之间称之为兄弟元素
兄弟选择器，只能找弟弟，不能找哥哥

- 相邻兄弟选择器

选择器 + 选择器 {}<br>
获取紧紧挨着某个元素后面的兄弟选择器元素  
````CSS
#p1 + .c1 {color: red;}  /* 或者 */
#div > a + a {margin-left: 20px};
````

- 通用兄弟选择器

选择器 ~ 选择器 {}<br>
获取元素后面所有符合条件的兄弟
````CSS
#p1 ~ .c1 {color: red;}
````

- 属性选择器

```css
/* 允许通过元素所附带的属性，及其值来匹配页面元素，很精准 attr 表示匹配任意属性 */
[attr] {}  /* 匹配有 attr 这个属性的元素 */
[attr1][attr2] {}  /* 匹配同时拥有 attr1 和 attr2 属性的元素 */
[attr=value] {}  /* 匹配拥有 attr 并且值为 value的元素 */
elem[attr=value] {} /* 匹配拥有 attr 并且值为 value 的 elem 元素 */
elem[attr1][attr2] {}

/* 模糊属性值的查询 */
[attr^=value] /* 匹配以 attr 值 value 开头的元素 */
[attr$=value] /* 匹配以 attr 值 value 结尾的元素 */
[arr*=value] /* 匹配 attr 值中含有 value 的元素 */
[attr~=value] /* 匹配 attr 值中含有 value 这个单词的元素 */
```

- 伪类选择器
```css
目标伪类
  在锚点被激活时，让锚点元素应用样式
  :target {}

结构为类
  选择器:first-child {}
  匹配的元素是属于其父元素的第一个子元素(找大哥)
  同时，这个大哥还需要符合选择器的要求

选择器: last-child {}
  匹配的元素是属于其父元素的最后一个子元素(找小弟)
  同时，这个小弟还需要符合选择器的要求

选择器: nth-child(n) {}
    n 从 1 开始

:empty
  匹配内部没有任何元素的标签，包括文本，空格，回车，都不能有

:only-child {}
  匹配属于其父元素的唯一子元素

否定伪类 :not(selector) 
```

- 伪元素
```css
/* 匹配元素首航首个字符 */
  :first-letter 或者 ::first-letter

/* 匹配元素的首航 */
:first-line 或者 ::first-line
/* 当首航与首字符发生了冲突，应用首字符的样式 */

/* 匹配用户选择的文本[这里必须是双 ::] */
::selection {}
/* 这里的样式，只能修改文本颜色和背景颜色 */

/*
  伪元素选择器，内容生成
  生成的是一个元素
  可以设置这个元素的显示方式，设置这个元素的文本内容
  以及所有可以使用的样式
  :before 或者 ::before 代表的是内容去最靠前的部分
  content 中只能给字符串和图片
*/
div::before {
  content: "可写内容区";
  display: block;
  color: red;
  background-color: purple;
  width: 100px;
  height: 100px;
}

/* :after 或者 ::after 匹配到某个元素内容区最后的位置 */
    
/* 
  伪元素添加内容，可以解决的问题
  外边距溢出
*/
#d1::before {
  content: "";
  display: table;
}

/* 解决高度坍塌 */
#d1::after {
  content: "";
  display: block;
  cleat: both;
}
```

## 弹性布局

- 什么是弹性布局
::: tip
  弹性布局，是一种布局方式
  主要解决的是某个元素中子元素的布局方式
  让页面布局更加灵活
:::

### 弹性布局专有的名词解释
    
- 容器
::: tip
  要发生弹性布局的子元素，他们的元素，称为容器，就是设置 display: flex 的那个元素
:::

- 项目 
::: tip
  要发生弹性布局的子元素们，叫做项目，就是设置了 display: flex 的元素的子元素们
::: 

- 主轴
::: tip
  - 项目排列方向的一根轴，称之为主轴
  - 如果项目们是按照水平排列，那么只主轴就是 x 轴
  - 如果项目们按照垂直排列，那么主轴就是 y 轴
  - 项目们在主轴的排列顺序，成为主轴起点和主轴的终点
::: 

- 交叉轴
::: tip
  - 与主轴垂直的一根，叫做交叉轴
  - 项目们在交叉轴的排列顺序，称为交叉轴的起点和终点
::: 

## 语法

将元素设置成弹性容器之后，他们所有的子元素，都会变成弹性项目
```css
display: flex /* 将块级元素设置称为容器 */
inline-flex   /* 将行内元素设置为容器 */
```

:::warning
注意:
  - 元素设置为 flex 容器后，容器的 text-align，vertical-align 失效
  - 项目的 float，clear 失效
:::

- 容器的属性
```css
设置主轴的方向: flex-direction
取值 row 默认值，主轴是 X 轴，主轴起点在左端
    row-reverse 主轴是 x 轴，主轴起点在右端
    column 主轴是 y 轴，主轴起点在顶部
    column-reverse 主轴是 y 轴，主轴起点在底部
```

- 设置项目的换行: flex-wrap
```css
取值 nowarp 默认值，空间不够，不换行，项目会缩小
    wrap 空间不够时，项目不缩小，换行
    wrap-reverse 项目换行，并反转
```

上面两个属性的简写: flex-flow: direction wrap;

- 定义项目在主轴上的对齐方式: justify-content
```css
取值 flex-start 默认值，主轴起点对齐
    flex-end 主轴的终点
    center 主轴的中心
    space-around 每个外边距相同，两端有空白
    space-between 两端对齐，两端无空白
```

- 项目们在交叉轴上的对齐方式: `align-items`
```css
取值 flex-start 默认值，交叉轴起点对齐
    flex-end 交叉轴终点对齐
    center 交叉轴中间对齐
    baseline 基线，通 flex-start类似
    stretch 项目不写高，充满整个容器
```

- 项目属性

设置在项目中的属性，只会影响当前项目，不影响其它项目

:::tip
* 项目顺序: order
  - 定义项目排列的顺序，值越小。越靠近起点。默认值为 0 
  - 取值: 我单位数值
:::

:::tip
* flex-grow
  - 如果容器有足够大的剩余空间，项目将按照比例放大(比例不准确)
  - 取值: 无单位的数字 默认值 0
:::

:::tip
* flex-shrink
  - 如果容器空间不够，项目将按比例缩小(比例不准确)
  - 取值: 无单位数字 默认值 1 取值越大，缩小的越快
:::

:::tip
* align-self
- 定义某一个项目在交叉轴上的对齐方式,不影响其它项目
- 取值 flex-start 默认值，交叉轴起点对齐
```css
flex-end /* 交叉轴终点对齐 */
center /* 交叉轴中间对齐 */
baseline /* 基线，通 flex-start类似 */
stretch /* 项目不写高，充满整个容器 */
auto /* 使用 align-items 定义的值 */
```
:::

## 转换

#### 什么是转换

:::tip
  - 改变元素在页面中的位置，大小，角度，形状
  - 2D 转换，只在 x 轴和 y 轴上发生转换
  - 3D 转换，增加了 z 轴的转换效果
:::

#### 转换属性
```css
transform
取值: none 默认值，无任何效果
转换函数 transform-function
转换函数 transform-function: 位移，旋转，放大，倾斜，3D 旋转
```

#### 转换原点
```css
transform-origin
转换原点会影响元素的旋转时的效果
取值: 以 px 为单位的数值
      %
      关键字  left/center/bottom  top/center/bottom
```

#### 2D 转换

- 位移: transform: translate(x, y)
```css
取值: translate(x) 和 translateX(x)
        x 轴位移 +往右  -往左
      translateY(y)
        y 轴位移 +往下  -往上
      translate(x, y)
        同时设置 x 轴和 y 轴的位移
```

- 缩放: transform: scale(n)
```css
取值 scale(n) 同时设置 x 轴和 y 轴的比例
    scale(x,y) 分别设置 x 轴和 y 轴的比例
    scalX(x) 单独设置 x 轴的比例
    scaleY(y) 单独设置 y 轴的比例
    n > 1 放大
    n = 1 不变
    0 < n < 1缩小
    -1 < n < 0 缩小并反转
    n < -1 放大并反转
```

- 旋转: transform: rotate(ndeg)
```css
n   +顺时针  -逆时针
注意: 
  1. 旋转的转换，会被转换原点影响效果
  2. 旋转就是连同坐标轴一起旋转的，会影响旋转之后的位移方向
```

- 倾斜: transform: skew(ndeg)
```css
skew(ndeg) 等同于 skewX(ndeg)
    /* 让元素向 x 轴发生倾斜，实际上改变的是 y 轴的角度 */
    值 ndeg 为正的  y轴逆时针
    ndeg 为负       y轴顺时针

skewY(ndeg)
    /* 让元素向着 y 轴发生倾斜，实际上改变的是 x 轴的角度 */
    值 ndeg为正    y轴顺时针
    为负           y轴逆时针
```

- 3D 转换，3D 转换都是模拟出来的
```css
/* 
  透视距离
    模拟人的眼睛到 3D 转换元素之间的距离
    透视距离不同，看到的效果就不通
    perspective: px 此属性要写在 3D转换元素的父元素上
*/

3D 旋转: transform
  取值
  rotateX(ndeg)
    以 x 轴为中心轴，旋转元素(烤羊腿，老式爆米花几机)
  rotateY(ndeg)
    以 y 轴为中心轴，旋转元素(旋转门，旋转木马)
  rotateZ(ndeg)
    以 z 轴为中心轴，旋转元素(电风扇，摩天轮)
  rotate(x, y, z, ndeng)
    x，y，z 取值为 0 ，代表不旋转
    x，y，z>0 代表旋转
```

#### 过渡

让 css 的值，在一段时间内平缓的变化

- 指定参与过渡的属性: transition-property
:::tip
  取值 all 所有支持过渡属性都参与<br>
  单独写某个 css 属性，多个之间用逗号分开

支持属性
  1. 颜色属性
  2. 大多数取值为具体数字的属性
  3. 阴影
  4. 转换
  5. visibility
:::

- 指定过渡时长: transition-duration: s/ms
```css
  指定多长时间完成次此过渡操作
```

- 过渡时间曲线函数
```css
transiton-timing-function:
  取值
    1. ease 默认值，慢速开始，中间加速，慢速结束
    2. linear 匀速
    3. ease-in 慢慢开始，一直加速
    4. ease-out 快速开始，一直减速
    5. ease-in-out 慢速开始，慢速结束，中间加速在减速
```

:::tip
 延迟执行: transition-delay: s/ms
:::

- 过渡代码编写的位置
```
  写在原来的效果中，过渡效果有去有回
  写在 hover 中，过渡效果有去无回
```

- 过渡的简写方式
```css
  transition: propery duration timing-function delay;
```

## 动画,多个过渡效果放在一起

#### 关键帧

    1. 个动画执行的时间点
    2. 在这时间点上的样式

#### 动画的使用步骤

- 使用关键帧定义动画
```css
@keyframes 动画名称 {
  0% {}
  ....
  100% {}
}
```

- 调用动画
```css
/* 执行动画的名称 */
  animation-name

/* 动画持续时长 */
  animation-duration

/* 动画时间曲线函数 */
  animation-timing-function: ease linear ease-in....

/* 延迟执行 */
  animation-delay
```

- 动画的其它属性
```css
/* 动画播放的次数 */
  animation-iteration-count
    取值  具体的播放次数
    infinite  无限

/* 动画的播放顺序 */
  animation-direction
  取值 normal  默认值 0% ~ 100%
      reverse  100% ~ 0%
      alternate 轮流播放，奇数次正向，偶数次逆向

/* 动画的简写方式 */
  animation: name duration timing-function delay count direction

/* 最简方式 */
  animation: name duration

/* 动画在播放前后显示的状态 */
  animation-fill-mode
  取值 1. backwards 动画播放之前延迟时间内，显示动画的第一帧
      2. forwards 动画播放结束之后，停留在最后一帧
      3. both 1和2的合体
      4. none 默认值，不填充状态

/* 动画的播放与暂停 */
  animation-play-state
  取值 running 开始
      paused  暂停
```

- 动画的兼容性
```css
  /* 如果低版本浏览器，想使用动画，需要在动画声明的时候添加前缀 */
  @keyframes 动画名称 {}
  @-webkit-keyframes 动画名称 {}
  @-o-keyframes 动画名称 {}
  @-ms-keyframes 动画名称 {}
  @-moz-keyframes 动画名称 {}
```

- animate.css
:::tip
  项目中，一般使用第三方动画库 animate.css
  1. 下载 <a href="https://animate.style/" target="_blank">animate.css</a>
  2. 在页面中导入
  3. 调用动画名称
:::

## CSS 的优化
:::warning
1. 减少服务器的压力
2. 提升用户体验

1. css优化原则<br>
  尽量减少 http 的请求个数<br>
  在页面的顶部引入 css 文件<br>
  将 css 和 js 写在外部单独文件中

2. css 代码优化<br>
   合并样式(能写群组，就不单写，能用简写，就不单独定义属性)<br>
   缩小样式文件的大小(能重用的尽量重用，减少样式重写)<br>
   避免出现空的 href 和 src<br>
   代码压缩
:::

## css reset 和 normalize.css

#### 什么是 css reset
:::tip
  由于不同浏览器，对 html 元素的默认样式解析不同<br>
  我们在开发 css 之前，把大多数默认样式统一重置(格式化)<br>
  然后在写代码。这个行为叫做css reset
:::

#### normalize.css
:::tip
  是 css reset 的一种优质的替代方案<br>
  css 地址: <a href="https://necolas.github.io/normalize.css/8.0.1/normalize.css" target="_blank">normalize</a><br>
  Github 地址: <a href="https://github.com/necolas/normalize.css" target="_blank">normalize GitHub</a>
:::

#### css reset 和 normalize.css 的区别
:::tip
  css reset 太激进，太暴力<br>
  normalize.css 比较温和
:::
