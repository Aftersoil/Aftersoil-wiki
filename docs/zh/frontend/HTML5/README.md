# HTML 5

html5新特性(视频(**重点**)与绘图(**重点**))     

html5 w3c组件 2014 推出一组网页中技术总称

非常丰富/外观/绘图/游戏/特效/多对多聊/....

**重点**: (视频/canvas绘图/webSocket)

## html5 新特性(视频)

基础知识

- 视频文件格式: `.mp4 .flv .webm .ogg ...`
- 解码器:如果浏览器播放指定格式视频需要安装
  - 此种格式视频对应解码器 (软件)
  - `a.mp4`  --> 浏览器安装 `mp4`解码器
  - 解决方案:"格式工厂" `x.mp4->x.flv->x.webm`

- 标准语法: 

```html
<video src="视频文件路径">
  您的浏览器版本太低，请升级！
</video>
```

- 兼容语法

:::warning
注意事项:准备多个视频文件
:::

```html
<video>
  <source src="x.mp4"/>
  <source src="x.flv"/>
  <source src="x.webm"/>
  浏览器版本太低，请升级!
</video>
```

## html5新特性(视频)--属性在`video` 元素添加

- 常见属性

```html
controls   显示播放视频原生控件(兼容性差)
loop       循环播放
muted      静音播放

preload    预加载策略
  none:不预加载任何数据
  metadata:只预加载元数据
    (视频长时/视频第一个画面/视频高度和宽度)

auto:     加载元数据并且加载一定时长视频(默认)
autoplay  自动播放视频(大多数浏览器支持差)
poster:   在播放视频之前显示一张图片(广告)
          如果视频暂停广告不再显示
```

## js常见属性方法

必须通过js 程序获取:"视频对象"才能执行如下属性方法

```js
-volume:1     // 音量(0~1)
-playbackRate // 回放速率(播放速度)  
              // 整数:大于1快放 小于1慢播
-play()       // 播放视频
-pause()      // 暂停播放
-paused       // 表示当前视频播放状态
  true        // 表示视频暂停
  false       // 表示视频正在播放
```
:::tip
- 为视频元素绑定鼠标离开与移入事件 
  - 鼠标移入视频区域显示图片 `res/play.png`
  - 鼠标移出视频区域隐藏图片
- 为图片绑定点击事件
  - 播放视频与暂停播放视频切换
- 视频暂停播放时显示广告，如果播放时隐藏广告
:::

## html5新特性(视频)--属性在`video`事件

```js
canplaythrough   // 当视频加载结束后可以播放时触发事件(一次)
  duration:      // 视频时长(秒)
  ended          // 当前视频播放结束(一次)
  timeupdate     // 视频正在播放中(多次)  4/s
  currentTime:   // 当前播放时间点
```

## html5新特性(视频)--属性在`video`样式(重点)

```js
video // 元素有一种样式与图片通用 object-fit
  // 此属性指定视频在区域内如何显示
fill:     // 填充 默认值:将视频拉伸操作填满整个父元素
contain:  // 包含   保持原有视频比例,父元素空白区域
conver:   // 覆盖    保持原有视频比例,宽度或高度至少有一个
  // 与父元素一致
```

## html5新特性-绘图-`canvas`-(重点)

将复杂数据转换图形方开呈现给用户

- 网页中绘图三种技术

:::tip
- svg  用户线段组件图形：针对2D矢量图
  - 特点:矢量图可以无限放大和缩小并且不失真,
  - 缺点:颜色不丰富
- canvas 用像素点组件图形：针对2D位图
  - 特点:位图可以不能放大和缩小并且失真,
  - 缺点:颜色细腻
- webgl  3D位图
:::

## html5新特性-绘图-`canvas`-(坐标系,单词多)

![alt text](https://images.aftersoil.xyz/wiki/image/HTML5/canvas.png)

注意事项:完成 `html5`技术路径不要用`jquery.js`

## html5新特性-绘图-`canvas`-创建画布

- 通过标签创建画布
```html
<canvas id="c3" width="500" height="400"></canvas>
<!-- 注意事项:画布宽度和高度一定用js或者属性添加  -->
<!-- 不能css样式来赋值 (变形) -->
```

- 通过js获取画布
```js
var c3 = document.getElementById("c3");
```

- 通过画布获取(画笔对象-上下文对象)
```js
var ctx = c3.getContext("2d");
```

## html5新特性-绘图-`canvas`-矩形

- 绘制空心矩形(描边矩形)

```js
ctx.strokeRect(x, y, w, h);
x,y   // 空心矩形左上角位置
w,h   // 空心矩形宽度和高度
```

- 绘制实心矩形(填充矩形)

```js
ctx.fillRect(x, y, w, h);
```

- 设置实心样式
```js
ctx.fillStyle = "#f00";
ctx.fillRect(0,0,100,80);      // 生效
ctx.strokeRect(0,0,100,80);    // 不生效
```

- 设置空心样式
```js
ctx.strokeStyle = "#00f";
```

- 清空矩形范围内所有元素

```js
ctx.clearRect(x, y, w, h);
```

清空画布中所有元素 `ctx.clearRect(0, 0, 500, 400)`
