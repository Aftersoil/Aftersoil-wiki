# SCSS

css 是一种脚本语言，没有动态语言特征<br>
css 语法不够强大，没有变量和合理的样式服用机制，导致难以维护<br>
我们需要使用动态的 样式语言，赋予 css 新的特性

常见的动态样式语言
  1. <a href="https://www.sass.hk/" target="_b">scss/sass</a>(scss 兼容 sass，scss 跟接近 css 语法)
  2. <a href="https://stylus.bootcss.com/" target="_b">stylus</a>
  3. <a href="http://lesscss.org/" target="_b">less</a>

## scss 的功能

scss 是一款强化 css 的辅助工具<br>
它和 css 语法很象，在 css 的基础上增加了变量，嵌套，混合，导入，函数等高级功能。这些扩展，让 css 更加的强大优雅

scss 运行在服务端<br>
浏览器不认识 .scss 文件，需要转换成 .css 才能被浏览器解析执行

## scss 的使用

scss 是在服务端使用
1. 安装 nodejs 的解析器  v8.11.1 以上
2. 在线安装  cmd 控制台输入 npm install -g node-sass
3. 无网安装 把安装包中的文件，复制到 nodejs 安装目录下

:::tip
cmd 中输入 node-sass -v 检查版本号
打印出版本号，就是成功
:::

## scss 文价转换成 css 文件

- 单文件转换
```sh
在项目目录下，按住 shift，右键打开 powershell
输入 node-sass  scss/01.scss   css//01.css
  要转换的scss文件   转换后的css文件
```

- 对文件转换
```sh
node-sass scss -o css
  node-sass  scss文件夹名称  -o  css文件夹名称
```

- 单文件的监听
```sh
node-sass -w scss/01.scss css/01.css
开启一个监听，注视这 01.scss 文件
一旦这个文件保存,自动转换成 01.css文件
```

- 多文件监听
```sh
node-sass -w scss -o css
```

## scss 基础语法

## 变量

使用 $ 符号创建变量，变量名可以包含 - _ 命名规则基本与 css 选择器相同，尽量做到见名知意

:::warning  
注意:
  1. 变量声明时，可以引用其它变量
  2. 变量如果声明在 {} 内，就只能在这个 {} 内使用
  3. !default 规则  
    - 如果此变量之前声明过值，就使用之前声明的变量
    - 如果此变量之前没有声明过值，就是用现在的值
    - $jd_red: red !default;
:::

## 嵌套
1. 后代选择器的嵌套写法

- 伪类选择器的嵌套
```scss
.mybtn {
  &:hover{}
}
// 嵌套需要 & 占位符，如果没有占位符，选择器和伪类选择器之间会多一个空格，导致选择器整个失效
```

- 群组的嵌套
```scss
nav, div, h1 {
  a {
    color: #fff;
  }
}
```

- 属性的嵌套
```scss
div {
  border: {
    style: solid; 
    width: 10px; 
    color: #fff
  };
}
```

## 导入
在 scss 语法中。如果 scss 文件，以下划线，那么这个 scss 就别称为局部 scss 文件

- 局部 scss 文件的特点
:::tip
1. 每一个局部 scss 文件，就是一个小模块
2. scss 在转换 css 的时候，不会转换局部 scss 文件
3. 我们一般会在全局 scss 文件中，导入局部 scss 文件
4.  导入的语法 @import 局部 scss 文件名称(不带下划线，不带后缀名)这样生成一个统一的 css 文件
5. 导入局部 scss 中的变量，可以在被导入的文件中使用
:::

## 混合器
:::tip
把多个选择器都会用到的样式，封装进一个混合器中<br>
需要使用的时候，调用混合器，实现代码的重用

声明混合器
  `@mixin 混合器名称(参数1, 参数2,....) {样式}`

调用混合器
  `@include 混合器名称(实参1, 实参2,...)`
:::

:::warning
注意: 混合器使用最多的场合，css hack
:::

## 继承
:::tip
一个选择器，可以完全使用另外一个选择器的样式
使用关键字 @extend 选择器名; 继承样式
:::

## 运算符 + - * / %

scss 可以自动在几种单位之间转换数值
前提是，单位可以转换  rem em %就不能转换


- 加法
:::tip
字符串拼接的时候，如果使用有双引号的 + 无双引号的，结果有双引号<br>
如果使用无双引号 + 又双引号，结果无双引号
:::

- 减号
:::tip
减号会被自动解析为变量的一部分
所以 scss 中减法，要前后加空格
:::

- 除法
:::tip
scss 中 / 的作用，除法，分隔符<br>
在 scss 中，以下情况会被认为是除法
1. 如果运算符两边的数字 是变量或者函数的返回值
2. 运算式被小括号包裹，是除法
3. 除法运算式，是其它算术运算的一部分
:::

- 字符串的插值操作
```scss
content: "liangliang ate #{200 + 100} baozis"
  #{} 做插值
```

- 颜色运算
```scss
// 分段运算
#rrggbb + #rrggbb = #rr+rr  gg+gg  bb+bb
rgb(a,b,c) + rgb(d,e,f) = rgb(a+b, b+e, c+f)
rgba //的算法
    // 计算两个 rgba 的时候，要求 alpha 必须相等，才能运算
```

## 内置函数
```scss
// scss 定义了很多函数，有些函数直接可以在 css 语句中使用

// 1. rgba 就是 scss 函数
  hsl(hue, saturation, lightness)
  hue 色调 0~360  0~120  120~240  240~360
  saturation 饱和度 0~100%
  lightness 亮度    0~100%

// 2. 数学函数
  round($val) // 四舍五入
  ceil($val)  // 向上取整
  floor($val) // 向下取整
  min($v1, v2...) // 最小值
  max($v1, $v2..) // 最大值
  random()  // 随机数

// 3. 字符串函数
  unquote($str) // 去掉 $str 的引号
  quote($str)   // 加上 $str 的引号
  to-upper-case("abc") // 变大写
  to-lower-case("ABC") // 变小写

// 4. 自定义函数
  @function get-width($a, $b) {
    @return min($a, $b);
  }

// 关键字 function return 加 @ 参数加 $
```

## 指令
```scss
@if ($type == sum) {
    color: red;
} @else if ($type == moon) {
    color: blue;
} @else {
    color: orange;
}

// 条件的小括号，可加，可以不加
```
