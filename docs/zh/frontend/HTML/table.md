# 表格 

## 表格语法

html 渲染规则
从上往下逐行渲染  一行三列   

```html
<table>
  <tr>			    <!-- 行--table row -->     
    <td></td>   	<!-- 列--table data -->
    <td></td>
    <td></td>
  </tr>
</table>
```

简写方式: 表格   保存内存 再统一渲染 

```html
table>tr*3>td*4>a{12332} 
<!-- 编辑器下写完后按 tab 键既可以 -->
```

## 属性  	
```html
border 	      边框线
width	        宽
height 	      高
align         设置表格本身的水平方式
bgcolor       规定规定表格的背景颜色
border-color  表格边框颜色
cellpadding   单元格的内边距(内容到边框编距)
cellspacing   设置单元格的外边距(边框到边框的距离)
```

## Tr的属性
```html
valign  垂直   
align   水平
top/bottom/ middle
```

## Td的属性   
```
width     设置单元格宽度
height    会影响当前行  和其他
colspan   跨列
```

## colspan 

指定单元格开始  横向向右合并N个单元格  n包含自己被合并的单元格要删除掉

## rowspan 跨行

从指定单元格开始 纵向向下合并N个单元格    
n包含自己被合并的单元格要删除    一列 下下 


## 表格的标题

`caption` 紧跟 `table`


## 行/列的标题

行列标题    
`th` 代替 `td` 内容字体加粗   水平居中


## 表格复杂应用

```
行分table  thead    tbody   tfoot
```

## 列表

让数据有条理的显示在数据之前添加标识    
但现在页面布局 经常会用到无序列表

```html
ol  li  有序列表  order list         list item 
```

## 有序列表
```html
<ol type="属性">
  <li>标题1</li>
  <li>标题2</li>
  <li>标题3/li>
</ol>

<!-- 属性  -->
<!-- type=:  i  I  a  A  1  -->
<!-- start="I" 开始 -->
```

## 无序列表  unorder  list

```html
<ul type="属性">
  <li>标题1</li>
  <li>标题2</li>
  <li>标题3/li>
</ul>

<!-- 属性  -->
<ul type="square  none  circle disc">
```

:::tip      
ul 项目中使用非常频繁  常用于一组相似的内容进行布局和排版
:::


## 列表的嵌套

:::warning
在类表中嵌套其他元素    
【注】所有的嵌套元素必须写在li中
:::

## 定义列表  h5属性新标签

```html
<dl>
   <dt>计算机</dt>
   <dd>用来计算的仪器 ... ...</dd>
   <dt>显示器</dt>
   <dd>以视觉方式显示信息的装置 ... ...</dd>
</dl>
<!--
  dl 名词  
  dt 解释   
  dd 内容
-->
```

## 结构标记

- 用于网页布局  `div  `
- h5 新出了一批结构标记 代替 `div` 做布局
- 这些结构 与 `div` 作用一模一样 只是增加了可读性

## 常用结构标记
```html
<!-- header 定义网页头部  某区域的头部 -->
<header></header>

<!-- nav 定义网页导航    -->
<nav></nav>

<!-- aside 定义侧边栏    -->
<aside></aside>

<!-- section 定义网页主体内容    -->
<section></section>

<!-- footer  定义网页底部  某区域底部 -->
<footer></footer>
```
