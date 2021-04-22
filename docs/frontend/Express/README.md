# Express

基于[nodejs](/frontend/NodeJS/)平台，快速、开放、极简的web开发框架      
[中文官网](www.expressjs.com.cn)

## 安装express

```sh
npm  install  express
```

## 创建web服务器

```js
const express = require('express'); // 引入express模块
var app = express();  // 创建web服务器
app.listen(8080);     // 监听端口
```

## 路由

浏览器向web服务器发请求，web服务器根据请求的url和请求的方法来作出响应。

三要素：请求的url，请求的方法，响应(回调函数)

- `res` 响应的对象: 
:::tip
`send()`  设置并发送响应的内容，路由中只能使用一次    
`sendFile()`  响应文件，要求使用绝对路径  `__dirname`   
`redirect()`  响应的重定向，跳转到另一个`url`   
:::

- `req`  请求的对象
:::tip
`method`  请求的方法    
`url`   请求的`url  `   
`headers`   请求的头信息    
`query`   获取请求的查询字符串形式的数据，格式为对象    
`params`  获取路由传递的数据    
:::   

- 设置路由中接收数据的名称
```js
//练习：创建路由，请求url: /，请求方法:get，自动跳转到  /study
app.get('/',function(req,res){
  //跳转
  res.redirect('/study');
});

// 一个路由只能处理一个请求
// 请求: 请求url，请求的方法
// 请求方法：get   请求url:  /login
app.get('/shopping/:price', function(req, res){
  req.params  // 获取传递的数据，格式为对象
});

// 浏览器传递数据
// http://127.0.0.1:8080/shopping/4999
```

## 获取post请求的数据

```js
req.on('data', function(mydata){ // 通过事件
  mydata.toString()  // 格式为查询字符串，需要解析为对象
});
```

- 实例

```js
const express=require('express');
const querystring=require('querystring');
// 创建web服务器
var app=express();
// 监听端口
app.listen(8080);

// 根据提交按钮的请求，创建对应的路由
// post  /mylogin   响应'登陆成功'
app.post('/mylogin', function(req, res) {
  //获取post请求数据
  //事件：
  req.on('data', function(mydata) {
	  //buffer数据->查询字符串
    //console.log(mydata.toString());
    //把查询字符串转为对象
    var str=mydata.toString();
    var obj=querystring.parse(str);
    console.log(obj);
  });

  res.send('登陆成功');
});
```

##  get和post请求

在浏览器地址栏直接输入`url`，默认就是`get`请求，传递数据使用查询字符串，浏览记录可能被浏览器缓存。    
`post`请求需要使用表单提交来完成(现阶段)，获取数据使用事件


## 路由器

路由在使用的过程中，不同模块下的路由可能出现相同的url; 把同一个模块下的路由放到特定的路由器。

## 创建路由器

```js
// 1.路由器是express下的一个功能
const express = require('express');
// 2.创建路由器对象
var router = express.Router();

// 3.往路由器中添加路由
router.get('/list', function(req, res) {
  res.send('这是用户列表');
});

// 4.导出路由器对象
module.exports=router;
```

## 在web服务器中使用

```js
// 2.1引入路由器模块
const userRouter = require('./user.js');

// 2.2使用路由器，挂载到特定的url
app.use('/user', userRouter);

// 路由
// 使用路由器，把用户下的所有路由挂载到/user下
// 挂载：在url的前边添加 /user
//  /user/list   /user/delete
// 参数1: 挂载的url
// 参数2: 要挂载的路由器
```

## 浏览器向服务器请求过程

![alt text](https://images.chibamai.xyz/wiki/image/NodeJS/Browser-request.png)

<div class="video">
  <video src="https://images.chibamai.xyz/wiki/video/NodeJS/post.mp4" controls preload></video>
</div>

## 课后任务

::: details 练习
- 练习：创建web服务器，创建商品路由器，添加路由，挂载到`/product`
  ```
  列表             删除             修改
  /product/list   /product/delete  /product/update
  ```
- **复习[MySQL](/rearend/MySQL/)的[SQL语句](/rearend/MySQL/data-storage.html#常用的sql命令)**
:::
