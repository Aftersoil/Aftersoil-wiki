# canvas

## html5新特性--canvas绘图-文本(重点)

- 常用方法与属性
```js
ctx.strokeText(str, x, y);   // 绘制描边文字(空心)
str:    // 绘制文本
x,y:    // 字符串左上角位置(以文本基线为准)

ctx.fillText(str, x, y);   // 绘制填充文字(实心)
ctx.font = "19px SimHei";  // 前面文本大小/字体
ctx.textBaseline = "top";  // 调整文本基线[top/alphabetic/bottom]
```

## html5新特性--canvas绘图-路径 (重点)

路径:绘制不规则图形 (复杂)      
`path`:由多个坐标点组件任意图形,图形本身不可见      
可以描边或者填充

```js
ctx.beginPath();   // 开始一条新路径(上一条路径结束)
ctx.moveTo(x, y);   // 移动到指定点(x,y)
ctx.lineTo(x, y);   // 从当前点到指定点绘制一条直线(x,y)
ctx.stroke();      // 描边
ctx.fill();        // 填充
ctx.closePath();   // 闭合一条路径(结束点到开始点画一条直线)
ctx.arc(cx, cy, r, start, end);     // 绘制一条圆拱形

cx,cy  // 圆心位置(x, y)
r      // 半径
start  // 开始角度
end    // 结束角度

// 参数start,end 不使用常用角度完成设置，使用弧度设置
// 角度 0~360    弧度0~2PI
// 采用角度转换弧度  90角度*Math.PI/180=弧度
```

## html5新特性--canvas绘图-图像 (重点)

图片可以使用img标准显示网页为什么用`canvas`[复杂]       
图片位置:一个软件项目所有图片保存服务器
- 图片版权
- 图片数量巨大

- 操作过程将图片绘制`canvas`画布上
:::tip
- 创建图像对象`p3 = new Image();`
- 下载图像 `p3.src = "p3.png"; `2ms
- 为图片绑定事件下载成功  `p3.onload = function(){...}`
- 绘制图片                `ctx.drawImage(p3,x,y)`
- 绘制图片                `ctx.drawImage(p3,x,y,w,h)`
:::

```
p3   图片对象
x,y  图片或者文本或者图片左上角位置(原始大小图片)
w,h  图片宽度和高度(拉伸)
```

## html5新特性--canvas绘图-变形 (重点)

`canvas`绘制时对图片进行旋转操作      
`-rotate(deg)`         旋转
- 旋转画笔对象
- 旋转轴心在画布原点
- 旋转角度会有累加操作
- deg不同角度弧度         

`translate(x,y) `  移动原点(移动轴心)到指定位置

原则:什么时候使用如下两个方法       
当画布上绘制一个以上元素时必须使用下面方法    

- `save()`            保存画笔状态(原点;角度;颜色;...)
- `restore()`          恢复到画笔保存时状态(原点;角度;颜色;..)

画图时:如果画布中有多个(一个以上)元素,画之前先保存状态        
画之后恢复状态(元素之间不会受到影响)

## html5新特性--canvas绘图-变形 (弹幕)

- 弹幕:专业视频网站常用功能
:::tip
- 当用户在观看视频希望(参与感)发表自己想法
- 情绪/观点
- 发表内容转文字浮动视频上方
:::

- 理解用户操作
:::tip
- 输入文字 修改文字大小;修改文字颜色
- 用户点击"发送按钮" 将内容显示视频上方
:::

- 项目工作流程!!!

:::tip
- 遇到问题:如果发送文字过多效率有一定影响
  - 解决方案:池子
- 创建程序结构
  - 当设计大规则项目采用方式:
  - 单一原则(一个程序完成一种任务)
- 第一个程序:`index.html`
  - 创建元素 显示视频 画布
  - 加载其它 js
- 第二个程序:`msg.js` 完成所有弹幕任务(一家餐厅)
- 第三个程序:`main.js` 项目入口程序:调用`msg.js` 方法(大楼主管)
:::

## html5新特性-- -变形 (弹幕)-index.html

:::tip
- 视频元素：`video`    底层 `z-index:0`
- 画布元素:  `canvas`  上层 ` z-index:1`
- 创建输入区域  
  [输入文字区域;文字大小下拉列表;文字颜色下拉列表;发送按钮]
- 加载`main.js` 文件(主管)
- 加载`msg.j`s  文件(一家餐厅)
:::

## 弹幕视频

## 视频1 

<div class="video">
  <video src="https://images.chibamai.xyz/wiki/video/HTML5/1.mp4" controls preload></video>
</div>

## 视频2

<div class="video">
  <video src="https://images.chibamai.xyz/wiki/video/HTML5/2.mp4" controls preload></video>
</div>

## 视频3 

<div class="video">
  <video src="https://images.chibamai.xyz/wiki/video/HTML5/3.mp4" controls preload></video>
</div>

## 视频4 

<div class="video">
  <video src="https://images.chibamai.xyz/wiki/video/HTML5/4.mp4" controls preload></video>
</div>

## 视频5 

<div class="video">
  <video src="https://images.chibamai.xyz/wiki/video/HTML5/5.mp4" controls preload></video>
</div>

## 视频6 

<div class="video">
  <video src="https://images.chibamai.xyz/wiki/video/HTML5/6.mp4" controls preload></video>
</div>
