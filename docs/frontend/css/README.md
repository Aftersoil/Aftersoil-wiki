# CSS 概述

## 什么是 css

css:`cascading style sheets`
层叠样式表，级联样式表，简称为样式表

## css 作用

设置html网页中元素的样式

## HTML 与 css 的关系
:::tip
- `html`：负责网页的搭建，内容的展示(素颜)
- `css`:负责网页的修饰。(亚洲四大邪术)
- 对于元素样式的修饰，W3C建议使用`css`而不用`html`的属性
- `html`的属性，代码不能重用，没有可维护性
:::

![alt text](https://images.aftersoil.xyz/wiki/image/css/cascading-style-sheets.png)

## CSS 的语法规范

## 使用 css 的方式

## 行内样式(内联样式)

将`css`的样式写在元素的`style`属性中

```css
color: red;    /* 字体颜色 */
background-color：yellow; /* 背景颜色 */
font-size:32px;     /* 字号大小 */
```

语法：`<any style="样式声明"></any>`

```
样式声明  由样式属性和样式值组成    
          样式属性:值;
```

:::tip
- 内联样式不能重用
- 内联样式优先级最高
- 在项目中，基本不用，只有在学习和测试中使用
:::

## 内部样式

在`head`标签中，使用`<style>`定义内部样式

语法:
```html
<head>
 <style>
   选择器{样式声明;样式声明;}
   选择器{样式声明}
 </style>
</head>
```

选择器就是页面能够使用当前样式的条件

`div{}  p{}  img{}  span{}`

:::tip
- 总结：内部样式，只能在本页面重用
- 内部样式在项目中用的少，主要用于学习和测试
:::

## 外部样式

单独创建一个`.css`文件，在`html`文件中的`head`标签里    
使用`link`标签引入这个`css`文件

```html
<link rel="stylesheet" href="my.css">
```

其中`rel`属性必须写，不写就不生效     
项目中大批量的使用外部样式，但是，学习中用的少

## css 样式的特性

## 继承性

:::tip
- 大部分的`css`效果是可以直接被子元素继承的
- 必须是有层级嵌套关系的元素，才能继承。孩子继承父亲。
- `a`标签的字体颜色，是不继承的
:::

## 层叠性

:::tip
可以为一个元素定义多个样式      
如果**样式属性不冲突**的时候，可以同时作用到这个元素上
:::

## 优先级

:::tip
- 当样式属性冲突时，根据优先级去应用样式。
- 默认优先级，有高到低
  - 内联样式
  - 内部样式和外部样式，使用就近原则
  - 浏览器默认样式
- 解释型语言---代码逐行从上往下运行，后执行会覆盖之前执行的
:::

## 调整优先级
:::tip
- `!important` 规则
  ```css
  h2 {
    color: red !important;
  }
  ```
- 写在值和；之间，前面要有空格
- 意义，我这个值是最重要的，其它的值不要覆盖我
- 如果有多个`!important;`，那么还是遵循就近原则
:::

## 基础选择器 **重点**

## 选择器的作用

:::tip
- 规范了页面中哪些元素能够使用定义好的样式
- 选择器就是一个条件，符合这个条件的元素，可以应用这个样式
:::

## 选择器详解

## 通用选择器

`*{样式声明}`

```css
* {
  margin: 0;
  padding: 0
} 
/* 所有元素内外边距清0 */
/* 如果取值为0，可以省略单位 */
```

## 元素选择器，标签选择器

```css
div {
  color: red;
}
```

:::tip
- 页面中所有对应元素，都应用这个样式
- 设置页面中某种元素的默认样式
  ```css
  ex:p {} 
  img {} 
  span {}
  ```
特殊用法：`body{margin:0;padding:0;}`
  - `body`以及`body`内的元素，都会内外边距清0
:::

## id 选择器，专属定制

只对当前页面，一个元素生效    
`<any id="id值"></any>`     
`#id值{}`

:::tip
总结：一般id选择器在项目中很少单独使用，通常会作为子代选择器和后代选择器一部分。
:::

## 类选择器

:::tip
- 定义页面上某个或者某类元素的样式
- 是一个公共样式，谁想使用，就用class调用一下
- 声明类选择器
  `.类名{样式声明}`
- 类名的特点
  - 必须有点
  - 类名不能以数字开头
  - 只能使用- _两种符号
- 引用类名
  `<any class="类名"> 引用时，没有点`
:::

- 特殊用法

:::tip
- 多类选择器  
- 一个元素引用多个类选择器      
  `<any class="类名1 类名2 类名3 .....">`
:::

- 分类选择器

:::tip
- 更精准的确定使用这个样式元素
- 增加了选择器的权值？？？坑
:::

类名1.类名2{}   
匹配同时引用类名1，和类名2的元素    

```css
/* <div class="font36 text-danger">Lorem</div> */

.font36.text-danger {
  font-style: italic;
}
```

元素名.类名{} 

```css
h4.font36 {
  background-color: red;
}
/* <h4 class="font36">Lorem  amet.</h4> */
```

匹配引用了`font36`这个类的`h4`元素

## 群组选择器

将多个选择器放在一起，定义公共样式（选择器之间使用,连接）     
选择器1，选择器2，选择器3........{样式声明}

## 后代选择器

通过元素的后代关系匹配元素      
后代关系：一级嵌套或者多级嵌套      
语法: `选择器1 选择器2 选择器3....{样式声明}`

## 子代选择器

子代关系：就是一级嵌套关系    
语法：`选择器1>选择器2>....{样式声明}`    
子代选择器和后代选择器可以混写    
```css
div > p span {
  background-color: purple;
}
```

## 伪类选择器

:::tip
- 匹配元素不同状态的选择器
- 伪类选择器，都是以:开头
- 匹配未访问的链接
  - 选择器:`link{样式声明}`
- 匹配访问后的链接
  - 选择器:`visited{样式声明}`
- 鼠标悬停
  - 选择器:`hover{样式声明}`
- 元素激活状态，鼠标按住元素不抬起
  - 选择器:`active{样式声明}`
- `:focus` 匹配获取焦点元素状态
:::

:::details 伪类示例
```html
<!doctype html>
<html>
<head>
  <title></title>
  <meta charset="utf-8">
  <style>
    .text-danger{color:red;}
    p.text-danger{background-color:yellow;}
    div,#d2,p{color:green;}
    #d1{background-color:red;}
    #d2{background-color:blue;}
    #d3{background-color:purple;}
    #content li a{color:red;}
    /* div p span{background-color:red;}*/
    /* div>p>span{background-color:orange;} */
    div>span{background-color:yellow;}
    div>p span{background-color:purple;}
    div>span{background-color:red;}
    div>p>span{background-color:yellow;}
    div>p span span{background-color:blue;}
    /*a的未点击状态*/
    a:link{color:red;}
    /*a访问后的状态*/
    a:visited{color:yellow;}
    /*鼠标悬停时的状态*/
    a:hover{color:blue;}
    /*激活状态*/
    a:active{color:purple;font-size:40px;}
  </style>
</head>
<body>
  <h2>伪类选择器</h2>
  <a href="http://www.sina.com">新浪</a>
  
  <br> <hr> <br>

  <div>
    <span>11111</span> 
    <p>
      <span>22222       
        <span>33333</span>  
      </span>
    </p>
  </div>

  <br><hr><br>

  <div>
    <span>这是div中的span</span>
    <p>
      这是div中的p
      <span>这是div中的p中span</span>
    </p>
  </div>

  <br><hr><br>
  
  <ul id="content">
    <li><a href="#">小香香</a></li>
    <li><a href="#">TF口红</a></li>
    <li><a href="#">五菱宏光</a></li>
    <li><a href="#">GTR</a></li>
    <li><a href="#">粉色大G</a></li>
  </ul>

  <a href="">1111</a>
  <a href="">2222</a>
  <a href="">3333</a>
  <div id="d1">lorem</div>
  <span id="d2">lorem</span>
  <p id="d3">lorem</p>

  <div class="text-danger">Lorem ipsum dolor sit amet.</div>
  <p class="text-danger">Lorem ipsum dolor sit amet.</p>
</body>
</html>
```
```html
<!doctype html>
<html>
<head>
  <title></title>
  <meta charset="utf-8">
  <style>
    img{width:200px;height:200px;}
    img:hover{width:200px;height:20px;}
    /*17：05~17：20休息*/
    input:focus{background-color:yellow;}
  </style>
</head>
<body>
  <input type="text"><br>
  <img src="image/02.png" alt="">
  <img src="image/03.png" alt="">
  <img src="image/04.png" alt="">
  <img src="image/05.png" alt=""><br>
  <img src="image/06.png" alt="">
  <img src="image/07.png" alt="">
  <img src="image/08.png" alt="">
  <img src="image/09.png" alt=""><br>
  <img src="image/10.png" alt="">
  <img src="image/11.png" alt="">
  <img src="image/12.png" alt="">
  <img src="image/13.png" alt=""><br>
  <img src="image/14.png" alt="">
  <img src="image/15.png" alt="">
  <img src="image/16.png" alt="">
  <img src="image/17.png" alt=""><br>
</body>
</html>
```
:::

## 选择器的权值问题

选择器默认自带权值，权值越高，优先级越高

```
!important      >1000
内联样式         =1000
id选择器         =100
class和伪类      =10
元素选择器       =1
*通用选择器      =0
继承的样式       无权值
```

::: details 权值计算示例
```html
<!doctype html>
<html>
<head>
  <title></title>
  <meta charset="utf-8">
  <style>
    #d1 .c2 span{color:yellow;}
    .c1 #d2 span{color:blue;}
    div .c2 #d3{color:red;}
    div,p,#d1,#d2,span,.c1,.c2{color:red;}
    div>div>div>div>div>div>div>div>div>div>div{color:red;}/*9*/
    .c4{color:purple;}/*10*/
  </style>
</head>
<body>
  <div>
    <div>
      <div>
        <div>
          <div>
            <div>
              <div>
                <div>
                  <div>
                    <div>
                      <div class="c4">1111111</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="d1" class="c1">
    <p id="d2" class="c2">
      <span id="d3" class="c3">权值的计算</span>
    </p>
  </div>
</body>
</html>
```
:::

:::tip
权值的总结    
- 当一个选择器中含有多个选择器时，需要将所有的选择器权值进行相加，然后比较，权值大的优先显示
- 权值相同，就近原则
- 群组选择的权值，单独计算，不能相加
- 样式后面添加`!important`，直接获取最高优先级
  - 内联样式不能添加`!important`
- 选择器权值的计算，不会超过自己的最大数量级
- 100个元素(1)选择器相加，不会大于10
:::
