# Html5

## html5 新特性

视频 与 绘图

    html5 w3c组件 2014 退出一组网页中技术总称
    
    非常丰富/外观/绘图/游戏/特效/多对多聊天/...
    
    重点(视频/canvas绘图/webSocket)

## Hml5新特性(视频)

基础知识

- 视频文件格式:.mp4.flv.webm.ogg...

- 解码器:如果浏览器播放指定格式视频需要安装此种格式视频对应的
  解码器(软件)

    a.mp4 --> 浏览器安装 MP4 解码器
    
    解决方案:"格式工厂" x.mp4 -> x.flv -> x.webm

### 标准语法:

```html
<video src="视频文件路径">
    您的浏览器版本太低.请升级
</video>

兼容语法
#注意事项: 准备多个视频文件
  
<video>
    <source src="x.mp4"/>
    <source src="x.flv"/>
    <source src="x.webm"/>
    浏览器版本过低请升级
</video>
```

### html5新特性(视频)--属性在 video 元素添加

- 常见属性

  - controls  显示播放视频原生控件(兼容性差)

    loop  循环播放   muted 静音播放  

    preload 预加载策略

    ```html
        none:不预加载任何数据
        metadata:只预加载原数据 (视频长时/视频第一个画面/视频高度/宽度)
        auto:加载原数据并且加载一定时长视频(默认)
    ```
    
    autoplay  自动播放视频(大多数浏览器支持差)
    
    poster: 在播放视频之前显示一张图片(广告)
            如果视频暂停不再显示



### Js 常见属性方法

```js
#必须通过js程序获取:“视频对象”,才能执行如下属性方法

-volume:1     音量(0~1)

-playbackRate 回访速率(播放速度)
                整数:大于1快放 小于1慢播

-play()       播放视频

-pause()      暂停播放

-paused       表示当前视频播放状态
                true  表示视频暂停
                false 表示正在播放
```

### html5 新特性(视频) 

属性在video事件

```js
canplaythrough 当视频加载结束后 | 可以播放时 | 触发事件
  
    duration:视频时长(秒)
  
ended    当前视频播放结束(一次)
  
timeupdate  视频正在播放中(多次) 4/s
  
    currentTime:当前播放时间点
```

### html5 新特性(视频)--属性在video样式

```js
video 元素有一种样式与图片通用 object-fit
此属性指定视频在区域内如何显示
   
fill: 填充  默认值:将视频拉伸操作填满整个父元素
   
contain: 包含   保持原有视频比例,父元素空白区域
   
conver:覆盖    保持原有视频比例,宽度或高度至少有一个与父元素一致
```





## Html5 新特性-绘图-canvas

```js
#将复杂的数据转换图形方式呈献给用户
   
-网页中绘图三种技术
   
(1) svg 用户线段组件图形: 针对2D矢量图 
    特点:矢量图可以无限放大和缩小并且不失帧,
    缺点:颜色不丰富
   
(2) canvas 用像素点组件图形:针对2D位图
    特点:位图可以不能放大和缩小并且失真,
    缺点:颜色细腻 
   
(3) webgl  3D 位图
```

### Html5 新特性-绘图-canvas-(坐标系,单词多)

    # 注意事项:完成 html5 技术路径不要用jquery.js

### Html5 新特性-绘图-canvas-创建画布

```js
(1) 通过标签创建画布
    <canvas id="c3" width="500" height="400"></canvas>
    #注意事项:画布宽度和高度一定用js或者属性添加
    #不能css样式来赋值(变形) 

(2) 通过js获取画布

    var c3=document.getElementById("c3");
```


```js
(3) 通过画布获取(画笔对象-上下文对象)

    var ctx=c3.getContext("2d");  画笔
```


​    
### 新特性-绘图-canvas-矩形

```js
(1)绘制空心矩形(描边)

    ctx.strokeRect(x,y,w,h)
    x,y  空心矩形左上角位置
    w,h  空心矩形的宽度和高度

(2)绘制实心矩形(填充矩形)

    ctx.fillRect(x,y,w,h);

(3)设置实心样式

	ctx.fillStyle="#f00";
    ctx.fillRect(0,0,100,80)生效
    ctx.strokeRect(0,0,100,80)不生效
    
(4)设置空心样式
    
    ctx.strokeStyle="#00f"; 

(5)清空矩形范围内所有元素
	
	ctx.clearRect(x,y,w,h);

  清空画布中所有元素 ctx.clearRect(0,0,500,400)
```
    练习 销售统计图



### 背景颜色谨慎使用,修改方案

(1) 添加透明度,使颜色柔和

    ctx.globalAlpha=0.3

    样式  
    object-fit     fill 填充(拉伸)
                          contain 包含
                          cover 覆盖 原有比例裁切


 绘图  作用: 将复杂数据转换图形方式来显示

        网页中   svg 2d矢量图   canvas 2d位图  
        webgl  3d位图

 开发流程  

```js
      通过标签创建画布   <canvas id="c3"></canvas>
      通过js获得画布对象 
      通过画布对象获得画笔(上下文对象) var ctx = c3.getContext("2d")

    矩形 ctx.strokeRect(x,y,w,h)描边  ctx.fillRect(x,y,w,h)实心  
        ctx.strokeStyle   ...
```


————————————————

### Html5 新特性--canvas绘图-文本

常用方法与属性

```js
    -ctx.storkeText(str,x,y) 绘制描边空文字
    str: 绘制文本
```

x,y:字符串左上角位置(以文本基线为准)

```js
    -ctx.fillText(str,x,y)  绘制填充文字 
    -ctx.font="20px 字体"
    -ctx.textBaseline="top" 调整文本基线( top/alphabetic/bottom)
```

### html5 新特性--canvas绘图-路径

```js
路径:绘制不规则图形(复杂)
   
    path:由多个坐标点组件任意图形 图形本身不可见
         可以描边或者填充
   
-ctx.beginPath(); 开始一条新路径(上一条路径结束)
-ctx.moveTo(x,y); 移动到指定点(x,y)
-ctx.lineTo(x,y); 从当前点到指定点绘制一条直线(x,y)
-ctx.stroke();  描边
-ctx.fill() 填充
-ctx.closePath() 闭合一条路径(结束点到开始点画一条直线)
   
-ctx.arc(cx,cy,r,start,end) 绘制一条圆拱形
cx,cy 圆心位置(x,y)
r   半径    
   
start   开始的角度
end     结束的角度
   
#参数 start,end 不使用常用角度完成设置 使用弧度设置
#角度 0~360   弧度 0~2PI
#采用角度转换为弧度  90 角度*Match.PI/180=弧度
```

练习 1: 使路劲创建可以动态前进的圆环进度条 

练习 2: 创建张嘴笑脸 再绘制闭嘴笑脸
        1 秒切换一张

### Html5 新特性--canvas绘图-图像

图片可以使用img标准显示网页为什么用canvas[复杂]

图片位置:一个软件项目上所有图片保存服务器

```js
    1. 图片版权
    2. 图片数量巨大
```
### 操作过程将图片绘制在canvas画布上

```js
    (1)创建图像对象           var p3 = new Image();

    (2)下载图像              p3.src = "p3.png"

    (3)为图片绑定事件下载成功 p3.onload = function(){}

    (4)绘制图片              ctx.drawImage(p3,x,y,w,h)

#p3 图片对象
#x,y 图片或者文本或者图片左上角位置(原始大小图片)
#w,h 图片宽度和高度(拉伸)
```

### Html5 新特性--canvas绘图-变形

canvas绘制时对图片进行旋转操作

```js
    -rotate(deg)   旋转

    (1) 旋转画布对象
    (2) 旋转轴心在画布原点
    (3) 旋转角度会有累加操作
    (4) deg不同角度弧度
    
    -translate(x,y)  移动原点
```

 原则:

什么时候使用如下两个方法

当画布上绘制一个以上元素时必须使用下面方法

````
-save()  保存画笔状态(原点;角度;颜色)
-restore()  恢复到画笔保存时状态(原点;角度;颜色;..)
````

画图时:如果画布中有多个(一个以上)元素 画之前先保存状态 
画之后:恢复状态(元素之间不受影响)



复习:

```js
路径  ctx.beginPath()  ctx.closePath()  ctx.moveTo()   ctx.lineTo() 
ctx.arc(cx,cy,r,start,end)
角度*Match.PI/180

图片
new Image()
p3.src = "res/p3.png"
p3.onload=function(){
    ctx.drawImage(p3,x,y,w,h)
}
```

```js
变形:
ctx.rotate(15*Match.PI/180)
ctx.translate(x,y) 移动原点() 

ctx.save()
ctx.restore() 
```



###  Html5 canvas 绘图（弹幕）

弹幕:专业视频网站常用功能 

    当用户在观看视频希望(参与感)发表自己想法
    发表内容转文字浮动视频上方

###  理解用户操作

    (1) 输入文字  修改文字大小; 修改文字颜色
    (2) 用户点击“发送按钮” 将内容系显示视频上方

### 2.6 (弹幕)-index.html

    1. 视频元素: video{底层}  z-index:0
       
    2. 画布元素: canvas{上层} z-index:1
       
    3. 创建输入区域
        [输入文字区域;文字大小下拉列表;文字颜色下拉列表;发送按钮]
    4. 加载main.js文件 
    5. 加载msg.js

    保存在服务器端
    var p3 = new Image() 
    
    p3.src = "res/p3.png";
    
    p3.onload=function(){
        ctx.drawImage(p3,x,y,w,h)
    }
    
     变形
    
    ctx.rotate(15*Math.PI/180); 画笔旋转 旋转累加效果 默认旋转轴心在原点的0,0
    
    ctx.translate(x,y)  修改原点
    移动原点
    
    ctx.save()
    
    ctx.restore()

### 项目工作流程!!!
    (1)遇到问题:如果发送文字过多效率有一定影响(内存溢出);  
    
    解决方案:池子
    (2)创建程序结构
    :当设计大规则项目采用方式:单一原则(一个程序完成一种任务)
    
    #第一个程序:index.html
    1. 创建元素 显示视频 画布
    2. 加载其他 Js
    
    #第二个程序:msg.js 完成所有弹幕任务
    #第三个程序:main.js 程序入口程序:调用msg.js

2.6 (弹幕)-index.html

    1. 视频元素: video{底层}  z-index:0
    2. 画布元素: canvas{上层} z-index:1
    3. 创建输入区域
        [输入文字区域;文字大小下拉列表;文字颜色下拉列表;发送按钮]
    4. 加载main.js文件 
    5. 加载msg.js

2.3:html5 新特性 --- 弹幕需要数据 --- msg

````
(1) 每一个弹幕中文需要位置(x,y)
(2) 每一个弹幕中文字(m)
(3) 每一个弹幕中文字颜色(color)
(4) 每一个弹幕中文字大小(font)
(5) 每一个弹幕中文字速度(spd)
(6) 每一个弹幕中文字(状态 alive true 显示 false 隐藏)
(7) 100 个弹幕
````

## Html5 新特性 --- 程序调用流程
````
-msg.js  所有与弹幕相关的数据函数
````

### 节省内存(原型)

(1) 创建弹幕的构造函数 var msgObj = function(){}
    x y m  color font spd ...

(2) 创建弹幕实例化函数 msgObj.prototype.init = function(){}
    
    x,y,m,color,font,spd 赋初始值(开始之前的值)

(3) 创建弹幕绘制函数 msgObj.prototype.draw=function(){}
    依据上面 x,y...把弹幕绘制到画布上
...


-main.js 创建弹幕对象并且调用相关函数

    function game(){
        init();
        gameloop();
    }
    
    function init(){
        负责创建弹幕对象并且调用init方法
        msg = new msgObj();
        msg.init();
    }


    function gameloop(){
        创建定时器调用gameloop 
        msg.draw();
    }
      
    document.body.onloat= game;  


-index.html




## Html5 新特性--定时器

定时器: 一次性定时器/周期性定时器

    requestAnimationFrame 智能定时器

次定时器主要使用范围:动画和游戏中

特点:
        setTimeout(fn,500);
        setInterval(fn,500); 周期性调用fn函数间隔500ms 

两台电脑: 新 12ms  旧 600ms 

解决方案:
    requestAnimationFrame 智能计算当前浏览器效率 11ms,计
    算600ms  按照不同浏览器设置间隔时间


### 实现功能平滑

```js
    使用方法  requestAnimationFrame=setTimeout 

    标准语法

            requestAnimationFrame(fn)
```


如何周期性调用定时器完成游戏

```js
        function f1(){
            requestAnimationFrame(f1);
            ...
            ...
        }
        f1();
```


## Html5 新特性-svg--echarts

```js
                    canvas        svg
    绘图类型          2D位图        2D矢量图  
    如何绘制          使用js代码     标签 
    事件绑定          只能绑定在画布 每个图形都可绑定事件 
    应用场景          网页特效;游戏  地图
```

# Html5 新特性-svg--echarts

## Svg 图形创建流程

1 创建画布标签

```html
<svg id="c3" width="500" height="400"> </svg>
```


2 添加圆环标签

```html
<circle cx="" cy="" r="" fill="" stroke=""></circle>

cx,cy 圆心坐标  r 半径  fill填充  stroke描边
```


通过js在svg画布上动态创建元素

```js
1. 字符串拼接方式来创建元素

    var str="<circle></circle>" 
    svg.innerHTML=str;
     
```

```js
2. 通过创建对象方式
var c=document.createElementNs("http://www.w3.org/2000/svg","circle")  #指定元素 svg 标准

svg.appendChild(c);
```
3. 为元素添加属性获取属性
   
        ```js
        设置与获取属性只能采用核心DOM方法不能用使用 HTMLDOM
        #核心 DOM circle.getAttribute("属性名",值)
        ```



### 讲解创建画布标签--直线

```js
    <line x1="" y1="" x2="" y2="" stroke-width="" stroke="" stroke-linecap=""></line>

    x1="" y1=""  起点坐标
    x2="" y2=""  终点坐标
    stroke-width="" 边线宽度
    stroke=""    边线样式
    stroke-linecap=""  边线顶端样式 round 圆角
```

## Html5 新特性 --svg-echarts 拖动-API-WebWorker

#### Html5 新特性 --svg-(折线/渐变特效对象/滤镜)

```html
<polyline points="50,50 70,55 60,66" stroke="" stroke-width=""></polyline>
```

#points -一组坐标点

渐变特效对象:
        一种特效样式(从一种颜色慢慢过滤到另一种颜色效果)

渐变特效对象:
            
```html
(1)创建渐变对象 <defs>
(2)在指定图形应用

        <defs>
            <linearGradient id="g3" x1="" y1="" xy="" y="">
            <stop offset="" stop-color="">
            </linearGradient>
        </defs>

<rect fill="url(#g3)"></rect>
<ANY fill="url(#g3)" stroke="url(#g3)"></ANY>

            x1="" y1=""  起点坐标  (1)写像素 0,0  500,0  (2)写百分比 0% 0% 100%  
            x2="" y2=""  终点坐标 

            stop 偏移点
            offset 偏移量 0%   30%
            stop-color 颜色点 
```





## Html5 新特性--svg--(滤镜)

### 滤镜也是一种特效对象: 模糊滤镜

```html
<defs>
    <filter id="f3">
        <feGaussianBlur stdDeviation="数字">
    </filter>
</defs>
```

### 数字模糊级别 1~10  (5)

```html
<ANY filter="url(#f3)"></ANY>
```


## Html5 新特性--echarts


百度提供第三方绘图库

如果需要快速创建功能简单外观复杂图像考虑echarts

### 何时使用第三方库绘制

    (1) 外观精美
    (2) 图形比较复杂

### 何时自己完成图形

    (1) 功能复杂【特效/游戏】

## Html5 新特性--echarts(重点)--使用

(1) 下载  

````js
    npm install echarts
````

(2) 创建容器(显示图形)

```html
    <div id="main" style="width:500px;height:400px">
        <!-- canvas> 第三方库 </canvas> -->
    </div>
```


(3)加载          
```js
    echarts.min.js
```

(4)程序  获取容器  

```js
    var main = document.getElementBId("main");
```
(5)创建 
```js
    echarts 对象 var mychart = echarts.init(main);
```
(6)创建 option 选项 
```js
    var option = {}; # 只需要将数据添加 option
```
(7)将option 添加到 echarts 对象 
```js
    mychar.setOption(option)
```

#柱状统计图


```js
    var option={
        title:{text:"入门实例柱状统计图"}
            xAxis:{data:["衬衫","裤子","袜子","雪纺衫"]},
            yAxis:{},#动态变化由下方数据源指定
            series:[{type:"bar",data:[100,100,10,1]}]
    }

            #title: 顶部标签

            #xAxis: x轴数据

            #series 数据源

            #type:"bar"
```

绘制图像类型:
            
```js
        bar 柱状统计图  line折线
        pie 饼图   gauge 仪表图
```

# Html5 新特性--拖放API

PC端项目--拖动上传图片

移动端项目--(自拍/相册)

### Drag & Drop 拖动和释放

-拖动源对象(会动)-触发三个事件

```js
dragstart 拖动开始
drag    拖动中
dragend  拖动结束
```


整个过程:dragstart*1+drag*n+dragend*1

-拖动目标对象(不动)-触发四个事件(!!)

```js
dragenter 拖动进入
dragover 拖动悬停 # 默认行为:悬停事件结束后立即触发离开
#阻止事件默认行为

dragleave 拖动离开
drop   拖动和释放
整个过程 1:dragenter*1+dragover*n+dragleave*1 
整个过程 2:dragenter*1+dragover*n+drop*1
```

# Html5  新特性---Web Worker

---理论多代码少(3行)

    程序: 指可以被CPU执行代码 程序存储在磁盘上 1.html 
    进程: 将程序调用内存中并且分配指定空间 在内存中的程序称为进程
    线程: 进程内部是由多个线程组件(内存)
    
    chrome浏览器
    
    一个chrome浏览器进程内部至少有6个线程负责向服务器发送请求获取资源(资源{网页/图片/视频/...}请求线程)
    
    一个线程负责绘制所有资源并且执行js程序  UI主线程

问题:用户很长时间看不到网页

    解决方案:创建新线程帮助UI主线程执行耗时的js任务 
            UI主线程负责绘制网页
            创建Worker对象
    
    标准语法
        var w = new Worker("js 任务路径")
    
            #创建 Worker 对象
    
            #创建新线程执行js任务

### Worker程序实现数据传递
### UI 线程(html)将数据发送Worker(05.js)线程

    UI 发数据
    var w = new Worker("js/05.js");
    w.postMessage("123");
    
    Worker 收数据
    onmessage = function(event){
        event.data
    } 
### 注意事项

(1) Worker线程执行代码中不能包含任何DOM/BOM元素
    
    #操作网页中 DOM/BOM 只能交给UI主线程
    
    #其他线程不能操作 DOM/BOM 担心混乱



计算用户输入的累加和

2.x:html5 新特性 websoket(重点)--多对多聊天室
2.x:html5 新特性 webStroage
2.x:html5  网页游戏





# WebSocket

服务器发送数据给浏览器(响应消息)

一次请求对应一次响应 如果没有请求就没有响应

金融行业(股票/期货/汇率/...)多长时间请求一次

## 新解决方案方式:新协议 WebSocket
### websocket工作方式:广播和收听

- 适用范围: 金融;弹幕;聊天室;客服...

## Html5新特性     WebSocket   

    服务器端:node.js socket.io 最方便最简单
       
    客户端:浏览器原生对象  websocket功能少
            第三方:socket.io
    
    #socket.io 多对多聊天室




· 服务器端 下载第三方模块(socket.io)  01_socketapp.js
```js
npm i socket.io
```

· 客户端  下载第三方模块(socket.io)  01_socket.html
```js
https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js
```



# 服务器端程序

(1) 创建 web 服务器

```js
var app = reuqire("http").createServer();
```

(2) 创建 socketio 服务器对象

```js
var io = require("socket.io")(app);
```

(3) 监听端口

```js
app.listen(3000);
```

(4) 为 io 对象绑定事件 connection (当客户连接服务器)触发此事件
    
```js
io.on("connection",(socket)=>{
    #console.log("有客户连接服务器...");
    #socket 为当前客户创建专属服务员...
})
```



# 客户端程序
(1) 创建socket对象并且连接服务器
```js
var clientSocket = io("ws://127.0.0.1:3000");

#ws:WebSocket
#127.0.0.1 服务器端程序所有机器地址
#3000 服务器端运行端口号
```







##  客户端发送数据给服务器 (一对一)

```js
socket.io 发送与接收数据采用方式事件绑定与事件触发机制
服务器(收)

socket.on("message",(data)=>{
    console.log(data);
})
```


客户端(发)

````
clientSocket.emit("message","初次见面请多关照");
#emit:触发指事件
````

#======================================
   服务器端发送数据给客户端(一对一)
    客户端(收)

    clientSocket.on("server",(data)=>{})
      
    服务器(发)
    socket.emit("server","发送消息");

#===========================================

    #广播消息:服务器向所有客户端发送消息
    客户端(收)
    clientSocket.on("list",(data)=>{});
    
    服务器(发)
    io.emit("list","明天开始大降价");


#==========================================
   #服务器端默认事件:disconnect
   #当客户端关闭浏览器默认触发事件(客户端离开了);





业务需求
1:广播新人加入
#以下两步多次执行
2:接收客户消息(聊天)
3:广播所有人
4:当用户关闭浏览器广播某人离开...

## Html5新特性 WebSocket(重点)--多对多聊天室

```js
server/03_chart_app.js

client/03_chart.html
```


# Html5新特性  webStroage

解决问题:在客户端 浏览器 中保存用户 专用 数据
作用:登录用户昵称;购物车;....

注意事项:webSocket 客户端不要存储安全级别高数据
安全级别高数据 用户密码:uid;


```js
    客户端存储方式                      服务器端存储方式
    (不安全;数据量少)                   (安全/海量/高速查询)
    (1)cookie                           (1) 数据库
    优点:兼容性好   
    缺点:操作复杂;1kb
    (2)Flash                           (2) session 对象(数据量少)
    缺点:依赖flash播放器    
    (3)WebStroage                      (3) data.txt
    优点:操作简单;8Mb
    缺点:兼容性
    (4)IndexDB 不标准                   (4) 内存数据库,文档数据库
```



# WebStroage 
————————————————————————————————
 WebStroage 存储数据依赖两个对象

 sessionStorage

```js
sessionStorage 对象存储范围在当前会话当前会话中所有网页 都可以使用sessionStorage 保存,但是
如果会话结束 数据就丢失！
注意事项:会话结束(关闭浏览器-关闭标签),退出浏览器失效
```

localStorage
    此对象保存数据用户保存



## WebStroage 操作数据方法和属性以上两个对象通用

```js
    (1) 保存数据 setitem(key,value);  #key 键  value值
    (2) 获取数据    var value = getitem(key);
    (3) 删除指定数据    removeite(key)
    (4) 清空所有数据    clear()
    (5) 数据长度        length
```




练习: 02_save.html 保存数据    03_get.html 获取数据


            2.5:html5 新特性 网页游戏


```js
        2.5:html5新特性 网页游戏
        #分析功能实现
            -蓝色大海背景
            -紫色海葵左右摆动(重点-难点)
            -海葵创建食物(难点);
            -大鱼负责吃食物   吃蓝色100分  吃橙色200分
            -小鱼跟着大鱼游戏

        2.6:目录结构
        game                游戏主目录
                            js  游戏代码
                            src 游戏所有图片
                            index.html 入口文件
```











