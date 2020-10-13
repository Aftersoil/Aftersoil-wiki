# 微信公众平台 -- 小程序
小程序:轻量app 无需下载就可使用用完即走

微信⼩程序，简称⼩程序，英⽂名 Mini Program Mini Program ，是⼀种不需要下载安装即可使⽤的应⽤，它实现 了应⽤“触⼿可及”的梦想，⽤⼾扫⼀扫或搜⼀下即可打开应⽤

## 小程序 

.为什么是微信⼩程序

1. 微信有海量⽤⼾，⽽且粘性很⾼，在微信⾥开发产品更容易触达⽤⼾； 

2. 推⼴app或公众号的成本太⾼。 

3. 开发适配成本低。 

4. 容易⼩规模试错，然后快速迭代。

5. 跨平台。

## 环境准备

### 账户主体类型

(1)个人
(2)企业或机构:(证明)  微信支付/卡包/附近小程序  

`````
#登录 微信公众平台(左侧开发菜单->开发设置->appid 复制)
#appid 开发者钥匙
`````

#下载最新版本开发者工具

``````js
https://mp.weixin.qq.com/
``````

#编译所有代码重新编译执行看最终结果
#预览将 将所有代码上传微信服务器通过扫描二维码看程序结果
#上传 将项目上传微信等待审核(发布)
#详情:调试基础库  2.2.4(2.2.5)

常见错误

(1)权限错误
(2)云开发 未定义 不用理会
(3)addEventListener 不用理会

## ⼩程序结构目录

| 结构 | 传统web    | 微信⼩程序 |
| ---- | ---------- | ---------- |
| 结构 | HTML       | WXML       |
| 样式 | CSS        | WXSS       |
| 逻辑 | Javascript | Javascript |
| 配置 | ⽆         | JSON       |

`````
|—pages			- 页面文件夹
	|-index		- 首页
		|-index.js
		|-index.json -首页配置文件
		|-index.wxml
		|-index.wxss
	|-logs		- 日志页面
		|-logs.js
		|-logs.json
		|-logs.wxml
		|-logs.wxss
|-utils		-第三方工具js
	|-util.js	
|-app.js	- 项目全局 入口文件
|-app.json	- 全局配置文件
|-app.wxss	- 全局样式文件
|-project.config.json	-项目配置文件
|-sitemap.json	-微信索引配置文件
`````

⼀种是全局的app.json 

 ⻚⾯⾃⼰的 page.json

## app.json

app.json 是当前⼩程序的全局配置，包括了⼩程序的所有⻚⾯路径、界⾯表现、⽹络超时时间、底 部tab等。

````json
{  "pages":[    "pages/index/index",    "pages/logs/logs"  ],  "window":{    "backgroundTextStyle":"light",    "navigationBarBackgroundColor": "#fff",    "navigationBarTitleText": "WeChat",    "navigationBarTextStyle":"black"  } }
````

字段的含义

1. pages 字段⽤于描述当前⼩程序所有⻚⾯路径，这是为了让微信客⼾端知道当前你的⼩程序 ⻚⾯定义在哪个⽬录。 
2. window 字段定义⼩程序所有⻚⾯的顶部背景颜⾊，⽂字颜⾊定义等。 

## page.json

这⾥的`page.json page.json` 其实⽤来表⽰⻚⾯⽬录下的`page.json page.json`这类和⼩程序⻚⾯相关的配置。

如顶部颜⾊、是否允许下拉刷新等等。

⻚⾯的配置只能设置` app.json app.json`中部分`window`配置项的内容，⻚⾯中配置项会覆盖`app.json app.json` 的 window  中相同的配置项。

| 属性                         | 类型     | 默认值  | 描述                                                         |
| ---------------------------- | -------- | ------- | ------------------------------------------------------------ |
| navigationBarBackgroundColor | HexColor | #000000 | 导航栏背景颜⾊，如` #000000`                                 |
| navigationBarTextStyle       | String   | white   | 导航栏标题颜⾊，仅⽀持 `black` /`white`                      |
| navigationBarTitleText       | String   |         | 导航栏标题⽂字内容                                           |
| backgroundColor              | HexColor | #ffffff | 窗⼝的背景⾊                                                 |
| backgroundTextStyle          | String   | dark    | 下拉loading的样式，仅⽀持`dark` / `light`                    |
| enablePullDownRefresh        | Boolean  | false   | 是否全局开启下拉刷新。详⻅`Page.onPullDownRefresh`           |
| onReachBot`tomDistance       | Number   | 50      | ⻚⾯上拉触底事件触发时距⻚⾯底部距离，单位为px。 Page.onReachBottom |
| disableScroll                | Boolean  | false   | 设置为true则⻚⾯整体不能上下滚动；只在⻚⾯配置中有 效，⽆法在  app.json 中设置该项 |

## sitemap 配置

 微信 索引优化

## 创建网页(组件)

`````js
app.json 全局配置文件   
pages:[] 当前项所有网页配置信息
pages:[
    "pages/exam03/exam03",
    "pages/exam04/exam04"
]
`````

# 模板语法

## WXML

小程序没有使用html 标签使用xml(可扩展标记语言)wxml

WXML（WeiXin Markup Language）是框架设计的⼀套标签语⾔，结合基础组件、事件系统，可以构 建出⻚⾯的结构。

**常见标签**

| 标签            | 解释                                   |
| --------------- | -------------------------------------- |
| <view></view>   | 相当于 div  块级元素           |
| <text></text>   | 相当于 span p  行内元素 |
| <image></image> | 相当于 image   图片            |
| <form></form>   | 表单                                   |

文本特殊属性 `selectable = 'true';`  此文本内容可以选中复制

​    #常见错误:end tag mission 没有结束标签

```````js
<image src="1.jpg" lazy-load="true"></image>
```````

- lazy-load="true" 懒加载(提升项目效率方法)
- 等待图片下载成功后显示图片内容

### 常⻅组件

`view,text,rich-text,button,image,navigator,icon,swiper,radio,checkbox。 text,button,image,navigator,icon,swiper,radio,checkbox`。 等

### text

| 属性名     | 类型    | 默认值 | 说明         |
| ---------- | ------- | ------ | ------------ |
| selectable | Boolean | false  | ⽂本是否可选 |
| decode     | Boolean | false  | 是否解码     |

### image

| 属性名    | 类型    | 默认值      | 说明         |
| --------- | ------- | ----------- | ------------ |
| src       | String  |             | 图⽚资源地址 |
| mode      | String  | scaleToFill | 图⽚裁剪     |
| lazy-load | Boolean | false       | 图⽚懒加载   |

mode 有效值

mode 有 13种模式，其中 4种是缩放模式，9种是裁剪模式。

| 模式 | 值           | 说明                                                       |
| ---- | ------------ | ---------------------------------------------------------- |
| 缩放 | scaleToFill  | 不保持纵横⽐缩放图⽚，使图⽚的宽⾼完全拉伸⾄填满 image元素 |
| 缩放 | aspectFit    | 保持纵横⽐缩放图⽚，使图⽚的⻓边能完全显⽰出来。           |
| 缩放 | aspectFill   | 保持纵横⽐缩放图⽚，只保证图⽚的短边能完全显⽰出来。       |
| 缩放 | widthFix     | 宽度不变，⾼度⾃动变化，保持原图宽⾼⽐不变                 |
| 裁剪 | top          | 不缩放图⽚，只显⽰图⽚的顶部区域                           |
| 裁剪 | bottom       | 不缩放图⽚，只显⽰图⽚的底部区域                           |
| 裁剪 | center       | 不缩放图⽚，只显⽰图⽚的中间区域                           |
| 裁剪 | right        | 不缩放图⽚，只显⽰图⽚的右边区域                           |
| 裁剪 | top left     | 不缩放图⽚，只显⽰图⽚的左上边区域                         |
| 裁剪 | top right    | 不缩放图⽚，只显⽰图⽚的右上边区域                         |
| 裁剪 | bottom left  | 不缩放图⽚，只显⽰图⽚的左下边区域                         |
| 裁剪 | bottom right | 不缩放图⽚，只显⽰图⽚的右下边区域                         |



## WXSS

`WXSS( WeiXin Style Sheets WeiXin Style Sheets )`是⼀套样式语⾔，⽤于描述 WXML的组件样式

CSS相⽐，`WXSS`扩展的特性有：

- 响应式⻓度单位 rpx
- 样式导⼊

移动端像素

- UI 设计师     :设计稿(图片)        物理像素
- 前端工程师    : 将设计稿转网页      逻辑像素

示例:iphone6(2)/iphone6(3) plus

`````
逻辑像素 * dpr = 物理像素
iphone6 375 * 2 = 物理像素 750 
`````

### 尺⼨单位 

`rpx rpx （responsive pixel）`:可以根据屏幕宽度进⾏⾃适应

 1rpx = 0.5px = 1物理像素 1rpx = 0.5px = 1物理像素 。

| 设备         | rpx换算px(屏幕宽度/750) | px换算rpx(750/屏幕宽度) |
| ------------ | ----------------------- | ----------------------- |
| iPhone5      | 1rpx = 0.42px           | 1px = 2.34rpx           |
| iPhone6      | 1rpx =0.5px             | 1px = 2rpx              |
| iPhone6 Plus | 1rpx =0.552px           | 1px = 1.81rpx           |

使⽤步骤：

1. 确定设计稿宽度pageWidth 

2. 计算⽐例 `750rpx` =`pageWidth px 750rpx `，因此 `1px`=`750rpx/pageWidth` 。 
3. 3.在less⽂件中，只要把设计稿中的 `px =>750/pageWidth rpx` 即可。

### 样式导⼊

可以和less中的导⼊混⽤。

使⽤ @import @import 语句可以导⼊外联样式表，只⽀持相对路径。

**⽰例代码:**

````css
/** common.wxss **/ 
.small-p {  
    padding:5px; 
}
````

`````css
/** app.wxss **/ 
@import "common.wxss"; 
.middle-p {  
    padding:15px; 
}
`````

### 选择器

`【注】⼩程序 不⽀持通配符  *`

⽬前⽀持的选择器有：

| 选择器           | 样例                | 样例描述                                     |
| ---------------- | ------------------- | -------------------------------------------- |
| .class           | ` .intro`           | 选择所有拥有`class=intro`的组件              |
| #id              | `#firstname`        | 选择所有拥有`id=firstname`·的组件            |
| element          | `view`              | 选择所有`view`组件                           |
| element, element | `view,checkbox`     | 选择所有文档的`view`组件和所有`checkbox`组件 |
| nth-child(n)     | `view:nth-child(n)` | 选择某个索引标签                             |
| ::after          | `view::after`       | 在`view`后边插入内容                         |
| ::before         | `view::before`      | 在`view`前面插入内容                         |

### ⼩程序中使⽤less

原⽣⼩程序不⽀持 less less ，其他基于⼩程序的框架⼤体都⽀持，如`wepy` ， `mpvue` ， `taro` 等。 

1. 编辑器`vscode`
2. 安装插件`easyless`

Vsdoce 设置配置项

```json
 "less.compile": {        
     "outExt":       
     ".wxss"    
 }
```



# 数据绑定

普通写法

`Wxml`

````html
<view> {{ message }} </view>
````

`Js`

`````json
Page({
    data: {    
        message: 'Hello MINA!'  
    } 
})
`````

组件属性	

````jsx
<view id="item-{{id}}"> </view>
````

````jsx
Page({  
    data: {    
        id: 0  
    } 
})
````

`bool类型`

```jsx
<checkbox checked="{{false}}"> </checkbox>
```

# 运算

## 三元运算

````jsx
<view hidden="{{flag ? true : false}}"> Hidden </view>
````

## 算数运算

```jsx
<view> {{a + b}} + {{c}} + d </view>
```

``````jsx
Page({  
    data: {    
        a: 1,    
        b: 2,    
        c: 3
    }
})
``````

## 逻辑判断

`````jsx
<view wx:if="{{length > 5}}"> </view>
`````

## 字符串运算

```jsx
<view>{{"hello" + name}}</view>
```

``````jsx
Page({  
    data:{    
        name: 'MINA'  
    } 
})
``````

花括号和引号之间如果有空格，将最终被解析成为字符串

# 列表渲染

## wx:for

项的变量名默认为item `wx:for-item` 可以指定数组当前元素的变量名

下标变量名默认为index `wx:for-index` 可以指定数组当前下标的变量名

- `wx:key` ⽤来提⾼数组渲染的性能

- `wx:key` 绑定的值 有如下选择

   1. `string string`类型，表⽰循环项中的唯⼀属性如

      `````js
      list:[{id:0,name:"炒饭"},{id:1,name:"炒面"}]
      wx:key="id"
      `````

  2. 保留字 `*this`，它的意思是 `item`  本⾝ ，`*this` 代表的必须是 唯⼀的字符串和数组。

     ````js
     list:[1,2,3,4,5]
     wx:key="*this"
     ````

代码：

````jsx
<view wx:for="{{array}}" wx:key="id">  {{index}}: {{item.message}} </view>
````

````js
Page({  
    data: {    
        array: [{      
            id:0,      
            message: 'foo',    
        }, 
        {      
            id:1,      
            message: 'bar'    
        }]  
    } 
})
````

`block`

渲染⼀个包含多节点的结构块 block最终不会变成真正的dom元素

`````jsx
<block wx:for="{{[1, 2, 3]}}" wx:key="*this" >  
    <view> {{index}}: </view>  
    <view> {{item}} </view> 
</block>
`````

# 条件渲染

## wx:if

在框架中，使⽤来判断是否需要渲染该代码块：

```wx
wx:if="{{condition}}"
```

``````html
 <view wx:if="{{false}}">1</view>  
 <view wx:elif="{{true}}">2</view>  
<view wx:else>3</view>
``````

## hidden

```jsx
<view hidden="{{condition}}"> True </view>
```

不频繁切换用`wx:if`（页面结构移除掉）
频繁切换⽤ `hidden`(添加样式实现)——display: none;  不可以和display 一起使用

不常使⽤`wx:if`

# 事件绑定

通过bind关键字来实现。如` bindtap` ，`bindinput` ` bindchange`等
不同的组件⽀持不同的事件，具体看组件的说明即可。 

`wxml`

````js
<input bindinput="handleInput" />
````

page

````js
Page({  // 绑定的事件  
    handleInput: function(e) {    
        console.log(e);    
        console.log("值被改变了");  
        this.setData(){
            num: e.detail.vule  //改变内部数据
        }
    } 
})
````

特别注意

1. 绑定事件时不能带参数  不能带括号 错误写法

   ````jsx
   <input bindinput="handleInput(100)" />
   ````

2. 事件传值通过标签⾃定义属性的⽅式和`value`

   ```jsx
   <input bindinput="handleInput" data-item="100" />
   ```

3. 事件触发时获取数据

   ````js
    handleInput: function(e) {    
        // {item:100}   
        console.log(e.currentTarget.dataset)          // 输入框的值   	
        console.log(e.detail.value);  
    }
   ````

 ## 实现双向数据绑定

`Wxml`

`````html
<input type="text" bindinput="handleInput"/>
<view>
  您所输入的:"{{num}}"  
</view>

`````

`JS`

````js
Page({
  data: {
    num:0
  },  
  handleInput(e){
    this.setData({
      num:e.detail.value
    })
  }
})
````

### 实例二

**加减按钮**

`Wxml`

`````html
<button bindtap="hadleTap" data-operation="{{1}}">+</button>
<button bindtap="hadleTap" data-operation="{{-1}}">-</button>
<view>
  添加 or 减少
  {{num}}
</view>
`````

`Js`

`````js
 hadleTap(e){
    const operation = e.currentTarget.dataset.operation;
    console.log(e)
    this.setData({
      num: this.data.num + operation
    })
  },
`````



# 内置组件

## swiper

**内置轮播图组件**

**默认宽度 100% ⾼度 150px**

| 属性名                 | 类型    | 默认值         | 说明                 |
| ---------------------- | ------- | -------------- | -------------------- |
| indicator-dots         | Boolean | false          | 是否显⽰⾯板指⽰点   |
| indicator-color        | Color   | rgba(0,0,0,.3) | 指⽰点颜⾊           |
| indicator-active-color | Color   | #000000        | 当前选中的指⽰点颜⾊ |
| autoplay               | Boolean | false          | 是否⾃动切换         |
| interval               | Number  | 5000           | ⾃动切换时间间隔     |
| circular               | Boolean | false          | 是否循环轮播         |

 `swiper`滑块视图容器

### swiper-item

滑块  （默认宽度和⾼度都是100%）

**轮播图执行源码:**

`Wxml`

``````html
<!-- 宽高算法 -->
<!-- 
    1 找到原图宽高 等比给定宽高
    1125*352px
    swiper 宽度 / swiper 高度 = 原图的宽度 / 原图高度
    swiper 高度 = swiper 宽度 * 原图高度/ 原图宽度
    height: 100vw * 352 / 1125
 -->
<swiper autoplay interval="1000" circular indicator-dots="true" indicator-active-color="pink">
  <swiper-item>
      <image mode="widthFix"  src="//img.alicdn.com/imgextra/i1/6000000005762/O1CN01RvSI151sR2l4FYm4C_!!6000000005762-0-octopus.jpg"/>
  </swiper-item>
   <swiper-item>
      <image mode="widthFix" src="//img.alicdn.com/imgextra/i1/6000000003634/O1CN01XkL17h1ciPvkUalkW_!!6000000003634-2-octopus.png"/>
   </swiper-item>
   <swiper-item>
      <image mode="widthFix" src="//aecpm.alicdn.com/imgextra/i1/2200632723342/O1CN015t8YZq1aYgH8c8FO9_!!2200632723342-0-alimamazszw.jpg"/>
   </swiper-item>
</swiper>
``````

`css`

`````css
swiper{
  width: 100%;
  height: calc(100vw * 352 / 1125);
}
image{
  width: 100%;
}
`````

【注】 注重效果本身

## TabBar 

小程序自带  底部`TabBar`

`app.json`

````js
 "tabBar": {  //至少两个 列表项
    "list": [
      {
      "pagePath": "pages/index/index",  //跳转目标页
      "text": "Home",		
      "iconPath": "icon/_home.png",	
      "selectedIconPath": "icon/home.png"	//选中 ICON
      },
      {
        "pagePath": "pages/imges/imges",
        "text": "Image",
        "iconPath": "icon/_img.png",
        "selectedIconPath": "icon/img.png"
      },
    ]
  },
````

## TopBar

扩展   不是内置

`Wxml`

```html
<view class="topTabSwiper">
  <view class='tab {{currentData == 0 ? "tabBorer" : ""}}' data-current = '0' bindtap="checkCurrent" >推荐</view>
  <view class='tab {{currentData == 1 ? "tabBorer" : ""}}' data-current = '1' bindtap="checkCurrent" >热点</view>
  <view class='tab {{currentData == 2 ? "tabBorer" : ""}}' data-current = '2' bindtap="checkCurrent" >关注</view>
</view>

<swiper current="{{currentData}}" class="swiper" style="height:600px;"duration="300" bindchange="bindchange">
    <swiper-item><view class="swiper_con" >Welcome come to 推荐</view></swiper-item>
    <swiper-item><view class="swiper_con" >Welcome come to 热点</view></swiper-item>
    <swiper-item><view class="swiper_con" >Welcome come to 关注</view></swiper-item>
</swiper>
```

`Wxss`

````css
/* pages/toptabbar/toptabbar.wxss */
.tab{
  float: left;
  width: 33.3333%;
  text-align: center;
  padding: 10rpx 0;
}
.topTabSwiper {
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  zoom: 1;
}
 
.topTabSwiper:after {
  content: "";
  clear: both;
  display: block;
}
 
.tabBorer {
  border-bottom: 1px solid #f00;
  color: #f00;
}
 
.swiper {
  width: 100%;
}
 
.swiper_con {
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 80rpx 0;
}
````

`Js`

````js
Page({
 
  /**
   * 页面的初始数据
   */
  data: {
      currentData : 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },
  //获取当前滑块的index
  bindchange:function(e){
    const that  = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent:function(e){
    const that = this;
 
    if (that.data.currentData === e.target.dataset.current){
        return false;
    }else{
 
      that.setData({
        currentData: e.target.dataset.current
      })
    }
  }
})
````



## navigator

导航组件 类似超链接标签

| 属性名    | 类型   | 默认值   | 说明                                                         |
| --------- | ------ | -------- | ------------------------------------------------------------ |
| target    | String | self     | 在哪个⽬标上发⽣跳转，默认当前⼩程序，可选值 self/miniProgram |
| url       | String |          | 当前⼩程序内的跳转链接                                       |
| open-type | String | navigate | 跳转⽅式                                                     |

**open-type 有效值：**

| 值           | 说明                                                         |
| ------------ | ------------------------------------------------------------ |
| navigate     | 保留当前⻚⾯，跳转到应⽤内的某个⻚⾯，但是不能跳到 tabbar ⻚⾯ |
| redirect     | 关闭当前⻚⾯，跳转到应⽤内的某个⻚⾯，但是不允许跳转到 tabbar ⻚⾯。 |
| switchTab    | 跳转到 tabBar ⻚⾯，并关闭其他所有⾮ tabBar ⻚⾯             |
| reLaunch     | 关闭所有⻚⾯，打开到应⽤内的某个⻚⾯                         |
| navigateBack | 关闭当前⻚⾯，返回上⼀⻚⾯或多级⻚⾯。可通过getCurrentPages()获取当 前的⻚⾯栈，决定需要返回⼏层 |
| exit         | 退出⼩程序，target=miniProgram时⽣效                         |

### 执行源码

`Wxml`

```html
<navigator url="/pages/swiper/swiper">轮播图页面</navigator>
<navigator url="/pages/toptabbar/toptabbar">TabTabar页面</navigator>
<navigator open-type="redirect" url="/pages/swiper/swiper"> 当前页面跳转</navigator>
<navigator open-type="switchTab" url="/pages/index/index">TabTabar页面</navigator>
<navigator open-type="redirect" url="/pages/swiper/swiper"> 当前页面跳转</navigator>
<navigator open-type="switchTab" url="/pages/index/index">TabTabar页面</navigator>
<navigator open-type="reLaunch" url="/pages/index/index"> reLaunch 随便跳</navigator>
```



## rich-text

可以将字符串解析成 对应标签，类似  vue中   v-html 功能

代码

`````jsx
// 1   index.wxml  加载 节点数组 
<rich-text nodes="{{nodes}}" bindtap="tap"></rich-text> 
// 2 加载 字符串 
<rich-text nodes='<img src="https://developers.weixin.qq.com/miniprogram/assets/images/head_global_z_@all.p ng" alt="">'></rich-text> 
 
// index.js     
Page({  
    data: {    
        nodes: [{     
            name: 'div',      
            attrs: {        
                class: 'div_class',        
                style: 'line-height: 60px; color: red;'      
            },      
            children: [{        
                type: 'text',        
                text: 'Hello&nbsp;World!'      
            }]    
        }]  
    },  
    tap() {    
        console.log('tap')  
    } 
})
`````

### nodes属性

 nodes 属性⽀持 `字符串`和 `标签节点数组`

| 属性     | 说明       | 类型   | 必填 | 备注                                     |
| -------- | ---------- | ------ | ---- | ---------------------------------------- |
| name     | 标签名     | string | 是   | ⽀持部分受信任的 HTML 节点               |
| attrs    | 属性       | object | 否   | ⽀持部分受信任的属性，遵循 Pascal 命名法 |
| children | ⼦节点列表 | array  | 否   | 结构和 nodes ⼀致                        |

⽂本节点：type = text

| 属性 | 说明 | 类型   | 必填 | 备注 |
| ---- | ---- | ------ | ---- | ---- |
| text | ⽂本 | string | 是   | 是   |

- `nodes`   不推荐使⽤ `String`类型，性能会有所下降。
-  `rich-text`   组件内屏蔽所有节点的事件。 
- `attrs `  属性不⽀持 `id` ，⽀持`class `。 
- `name` 属性⼤⼩写不敏感。 如果使⽤了不受信任的 `HTML` 节点，该节点及其所有⼦节点将会被移除。 
- `img`  标签仅⽀持⽹络图⽚

## button

``````html
<button  
      type="default"  
      size="{{defaultSize}}" 
      loading="{{loading}}"  
      plain="{{plain}}" 
>  
    default 
</button>
``````

| 属性      | 类型    | 默认值  | 必 填 | 说明                                            |
| --------- | ------- | ------- | ----- | ----------------------------------------------- |
| size      | string  | default | 否    | 按钮的⼤⼩                                      |
| type      | string  | default | 否    | 按钮的样式类型                                  |
| plain     | boolean | false   | 否    | 按钮是否镂空，背景⾊透明                        |
| disabled  | boolean | false   | 否    | 是否禁⽤                                        |
| loading   | boolean | false   | 否    | 名称前是否带 loading 图标                       |
| form-type | string  |         | 否    | ⽤于组件，点击分别会触发组件的 submit/reset事件 |
| open-type | string  |         | 否    | 微信开放能⼒                                    |

size 的合法值

| 值      | 说明     |
| ------- | -------- |
| default | 默认⼤⼩ |
| mini    | ⼩尺⼨   |

type 的合法值

| 值      | 说明 |
| ------- | ---- |
| primary | 绿⾊ |
| default | ⽩⾊ |
| warn    | 红⾊ |

form-type 的合法值

| 值     | 说明     |
| ------ | -------- |
| submit | 提交表单 |
| reset  | 重置表单 |

open-type 的合法值

| 值             | 说明                                                         |
| -------------- | ------------------------------------------------------------ |
| contact        | 打开客服会话，如果⽤⼾在会话中点击消息卡⽚后返回⼩程序，可以从 bindcontact 回调中获得具体信息，具体说明 |
| share          | 触发⽤⼾转发，使⽤前建议先阅读使⽤指引                       |
| getPhoneNumber | 获取⽤⼾⼿机号，可以从bindgetphonenumber回调中获取到⽤⼾信息， 具体说明 |
| getUserInfo    | 获取⽤⼾信息，可以从bindgetuserinfo回调中获取到⽤⼾信息      |
| launchApp      | 打开APP，可以通过app-parameter属性设定向APP传的参数具体说明  |
| openSetting    | 打开授权设置⻚                                               |
| feedback       | 打开“意⻅反馈”⻚⾯，⽤⼾可提交反馈内容并上传⽇志，开发者可以登 录⼩程序管理后台后进⼊左侧菜单“客服反馈”⻚⾯获取到反馈内容 |

## icon

| 属性  | 类型          | 默 认 值 | 必 填 | 说明                                                         |
| ----- | ------------- | -------- | ----- | ------------------------------------------------------------ |
| type  | string        |          | 是    | icon的类型，有效值：success, success_no_circle,info,warn,waiting,cancel, download, search, clear |
| size  | number/string | 23       | 否    | icon的⼤⼩                                                   |
| color | string        |          | 否    | icon的颜⾊，同css的color                                     |

**代码:** 

`JS`

``````js
Page({  
    data: {    
        iconSize: [20, 30, 40, 50, 60, 70],    
        iconType: [      
            'success', 'success_no_circle', 'info', 'warn', 'waiting', 'cancel', 'download', 'search', 'clear'    
        ],    
        iconColor: [      
            'red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'    
        ],  
    } 
})
``````

`wxml`

````html
<view class="group">  
    <block wx:for="{{iconSize}}">    
        <icon type="success" size="{{item}}"/>  
    </block> 
</view>
 
<view class="group">  
    <block wx:for="{{iconType}}">    
        <icon type="{{item}}" size="40"/>  
    </block> 
</view>
 
<view class="group">  
    <block wx:for="{{iconColor}}">    
        <icon type="success" size="40" color="{{item}}"/>  
    </block> 
</view>
````



## radio

可以通过 color属性来修改颜色

需要搭配 radio-group⼀起使用

`JS`

`````js
Page({
  onShareAppMessage() {
    return {
      title: 'radio',
      path: 'page/component/pages/radio/radio'
    }
  },

  data: {
    items: [
      {value: 'USA', name: '美国'},
      {value: 'CHN', name: '中国', checked: 'true'},
      {value: 'BRA', name: '巴西'},
      {value: 'JPN', name: '日本'},
      {value: 'ENG', name: '英国'},
      {value: 'FRA', name: '法国'},
    ]
  },

  radioChange(e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)

    const items = this.data.items
    for (let i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value === e.detail.value
    }

    this.setData({
      items
    })
  }
})
`````

`Wxml`

```html
<view class="page-body">
  <view class="page-section">
    <view class="page-section-title">默认样式</view>
    <label class="radio">
      <radio value="r1" checked="true"/>选中
    </label>
    <label class="radio">
      <radio value="r2" />未选中
    </label>
  </view>


  <view class="page-section">
    <view class="page-section-title">推荐展示样式</view>
    <view class="weui-cells weui-cells_after-title">
      <radio-group bindchange="radioChange">
        <label class="weui-cell weui-check__label" wx:for="{{items}}" wx:key="{{item.value}}">

          <view class="weui-cell__hd">
            <radio value="{{item.value}}" checked="true"/>
          </view>
          <view class="weui-cell__bd">{{item.name}}</view>
        </label>
      </radio-group>
    </view>
  </view>
</view>
```

## checkbox

`JS`

```js
Page({
  onShareAppMessage() {
    return {
      title: 'checkbox',
      path: 'page/component/pages/checkbox/checkbox'
    }
  },

  data: {
    items: [
      {value: 'USA', name: '美国'},
      {value: 'CHN', name: '中国', checked: 'true'},
      {value: 'BRA', name: '巴西'},
      {value: 'JPN', name: '日本'},
      {value: 'ENG', name: '英国'},
      {value: 'FRA', name: '法国'}
    ]
  },

  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)

    const items = this.data.items
    const values = e.detail.value
    for (let i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false

      for (let j = 0, lenJ = values.length; j < lenJ; ++j) {
        if (items[i].value === values[j]) {
          items[i].checked = true
          break
        }
      }
    }

    this.setData({
      items
    })
  }
})
```

`Wxml`

````html
<view class="container">
  <view class="page-body">
    <view class="page-section page-section-gap">
      <view class="page-section-title">默认样式</view>
      <label class="checkbox">
        <checkbox value="cb" checked="true"/>选中
      </label>
      <label class="checkbox">
        <checkbox value="cb" />未选中
      </label>
    </view>
  
    <view class="page-section">
      <view class="page-section-title">推荐展示样式</view>
      <view class="weui-cells weui-cells_after-title">
        <checkbox-group bindchange="checkboxChange">
          <label class="weui-cell weui-check__label" wx:for="{{items}}" wx:key="{{item.value}}">
            <view class="weui-cell__hd">
              <checkbox value="{{item.value}}" checked="{{item.checked}}"/>
            </view>
            <view class="weui-cell__bd">{{item.name}}</view>
          </label>
        </checkbox-group>
      </view>
    </view>
  </view>
  
</view>
````

# ⾃定义组件

## 创建⾃定义组件

类似于页面，一个自定义组件由 ` json` `wxml` `wxss` ` js` `js `4个文件组成

在⽂件夹内 `components/myHeader`，创建组件名为 `myHeader`

## 声明组件

需要在组件的` json`⽂件中进⾏⾃定义组件声明

`myHeader.json`

````js
{  "component": true }
````

## 编辑组件

同时，还要在组件的`wxml`⽂件中编写组件模板，在` wxss`⽂件中加⼊组件样式
`slot` 表⽰插槽，类似vue中的`slot`
`myHeader.wxml`

```html
<!-- 这是自定义组件的内部WXML结构 --> 
<view class="inner">  
    {{innerText}}    
    <slot></slot> 
</view>
```

【注意】：在组件`wxss`中不应使用ID选择器、属性选择器和标签名选择器。

`myHeader.wxss`

````css
/* 这里的样式只应用于这个自定义组件 */ 
.inner {  
	color: red; 
}
````

## 注册组件

在组件的` js` ⽂件中，需要使⽤`Component()` 来注册组件，并提供组件的属性定义、内部数据和 ⾃定义⽅法

`myHeader.js `

`````js
Component({  
    properties: {   
        // 这里定义了innerText属性，属性值可以在组件使用时指定    
        innerText: {      // 期望要的数据是 string类型      
            type: String,
            value: 'default value',  
        }  
    },  
    data: {    
        // 这里是一些组件内部数据    
        someData: {}  
    },  
    methods: {    
            // 这里是一个自定义方法    
        customMethod: function(){}  
    } 
})
`````

## 声明引⼊⾃定义组件

⾸先要在⻚⾯的` json `⽂件中进⾏引⽤声明。还要提供对应的组件名和组件路径

`index.wxml`

````js
{    
    // 引用声明  
    "usingComponents": {   
        // 要使用的组件的名称     
        // 组件的路径    
        "my-header":"/components/myHeader/myHeader"  
    } 
}
````

⻚⾯中使⽤⾃定义组件

`````html
<view>  <!-- 以下是对一个自定义组件的引用 --> 
    <my-header inner-text="Some text">    
        <view>用来替代slot的</view>    
    </my-header> 
</view>
`````

## 其他属性

### 定义段与⽰例⽅法

`Component` 构造器可⽤于定义组件，调⽤ `Component` 构造器时可以指定组件的属性、数据、⽅法 等

| 定义段     | 类型       | 是 否 必 填 | 描述                                                         |
| ---------- | ---------- | ----------- | ------------------------------------------------------------ |
| properties | Object Map | 否          | 组件的对外属性，是属性名到属性设置的映射表，参⻅下⽂         |
| data       | Object     | 否          | 组件的内部数据，和  properties ⼀同⽤于组件的模板渲 染       |
| observers  | Object     | 否          | 组件数据字段监听器，⽤于监听 properties 和 data 的变 化，参⻅ 数据监听器 |
| methods    | Object     | 否          | 组件的⽅法，包括事件响应函数和任意的⾃定义⽅法，关于 事件响应函数的使⽤，参⻅ 组件事件 |
| created    | Function   | 否          | 组件⽣命周期函数，在组件实例刚刚被创建时执⾏，注意此 时不能调⽤  setData 参见 组件⽣命周期 |
| attached   | Function   | 否          | 组件⽣命周期函数，在组件实例进⼊⻚⾯节点树时执⾏，参 ⻅ 组件⽣命周期 |
| ready      | Function   | 否          | 组件⽣命周期函数，在组件布局完成后执⾏，参⻅ 组件⽣命 周期   |
| moved      | Function   | 否          | 组件⽣命周期函数，在组件实例被移动到节点树另⼀个位置 时执⾏，参⻅ 组件⽣命周期 |
| detached   | Function   | 否          | 组件⽣命周期函数，在组件实例被从⻚⾯节点树移除时执 ⾏，参⻅ 组件⽣命周期 |

## 组件-⾃定义组件传参

1. ⽗组件通过属性的⽅式给⼦组件传递参数 
2. ⼦组件通过事件的⽅式向⽗组件传递参数

### 过程

1. ⽗组件 把数据  { {tabs}}  传递到 ⼦组件的  `tabItems`  属性中 
2. ⽗组件 监听  `onMyTab` 事件 
3. ⼦组件 触发  bindmytap  中的  mytap  事件 
   1. ⾃定义组件触发事件时，需要使⽤`triggerEvent`  ⽅法，指定 事件名 事件名 、`detail` 对象

4. ⽗-> ⼦ 动态传值  this.selectComponent("#tabs") ；

#### ⽗组件代码

`page.wxml`

````js
<tabs tabItems="{{tabs}}" bindmytap="onMyTab" >  内容-这里可以放插槽 </tabs>
````

`page.js `

````js
 data: {    
     tabs:[      
         {name:"体验问题"},      
         {name:"商品、商家投诉"}    
     ]  
 },  
 onMyTab(e){    
   console.log(e.detail);  
 },
````

#### ⼦组件代码

`com.wxml`

`````jsx
 <view class="tabs">  
    <view class="tab_title"  >   
        <block  wx:for="{{tabItems}}" wx:key="{{item}}">      
            <view bindtap="handleItemActive" data-index="{{index}}">{{item.name}}</view>    	</block>  
    </view>  
    <view class="tab_content">    
        <slot></slot>  
    </view> 
</view>
`````

`com.js`

````js
// com.js 
Component({  
    properties: {    
        tabItems:{      
            type:Array,      
            value:[]    
        }  
    },  
    /**   * 组件的初始数据   */  
    data: {  },
 
  /**   * 组件的方法列表   */  
    methods: {    
        handleItemActive(e){      
            this.triggerEvent('mytap','haha');    
        }  
    } 
})
````

## ⼩结

1.  标签名 是 中划线的⽅式
2.  属性的⽅式 也是要中划线的⽅式 
3.  其他情况可以使⽤驼峰命名 
   1.  组件的⽂件名如  `myHeader.js` 的等 
   2. 2. 组件内的要接收的属性名 如  `innerText`

[更多>>](https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html)



# ⼩程序⽣命周期

关于小程序前后台的定义和小程序的运行机制，请参考运行机制章节

## 应⽤⽣命周期

| 属性           | 类型     | 默认值 | 必填 | 说明                     |
| -------------- | -------- | ------ | ---- | ------------------------ |
| onLaunch       | function |        | 否   | 监听⼩程序初始化。       |
| onShow         | function |        | 否   | 监听⼩程序启动或切前台。 |
| onHide         | function |        | 否   | 监听⼩程序切后台。       |
| onError        | function |        | 否   | 错误监听函数。           |
| onPageNotFound | function |        | 否   | ⻚⾯不存在监听函数。     |

## ⻚⾯⽣命周期

| 属性              | 类型     | 说明                                      |
| ----------------- | -------- | ----------------------------------------- |
| data              | Object   | ⻚⾯的初始数据                            |
| onLoad            | function | ⽣命周期回调—监听⻚⾯加载                 |
| onShow            | function | ⽣命周期回调—监听⻚⾯显⽰                 |
| onReady           | function | ⽣命周期回调—监听⻚⾯初次渲染完成         |
| onHide            | function | ⽣命周期回调—监听⻚⾯隐藏                 |
| onUnload          | function | ⽣命周期回调—监听⻚⾯卸载                 |
| onPullDownRefresh | function | 监听⽤⼾下拉动作                          |
| onReachBottom     | function | ⻚⾯上拉触底事件的处理函数                |
| onShareAppMessage | function | ⽤⼾点击右上⻆转发                        |
| onPageScroll      | function | ⻚⾯滚动触发事件的处理函数                |
| onResize          | function | ⻚⾯尺⼨改变时触发，详⻅ 响应显⽰区域变化 |
| onTabItemTap      | function | 当前是 tab ⻚时，点击 tab 时触发          |

