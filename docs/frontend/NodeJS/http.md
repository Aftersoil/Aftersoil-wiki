# http 协议

浏览器和web服务器之间的通信协议

## 通用头信息

:::tip
`Request URL`: 请求的`URL`,对应浏览器地址栏；向服务器获取哪些内容   
`Request Method`: 请求的方法，获取内容的方法 `get/post`   
`Status Code`: [响应的状态码](/frontend/ajax/#响应起始行)   
`Remote Address`：请求的服务器的IP地址及端口号
:::

- 响应的状态码
```
1**：正在响应，还没有结束
2**：成功的响应
3**：响应的重定向，跳转到另一个URL
4**：客户端请求错误
5**：服务器端错误
```

## [响应头信息](/frontend/ajax/#响应头)

:::tip
`Connection`: 连接方式，`keep-alive` 持久连接   
`Content-Encoding`: 内容压缩形式， `gzip`   
`Content-Type`: 响应的文件类型    
`Location`: 跳转的URL,常配合着状态码3**使用         
:::

## [请求头信息](/frontend/ajax/#请求头)

:::tip
`Accept`: 浏览器接收的文件类型有哪些      
`Accept-Encoding`: 接收的压缩形式有哪些     
`User-Agent`: 客户端使用的浏览器版本      
:::

## [请求主体](/frontend/ajax/#请求主体)

可有可无，浏览器向服务器发请求传递的数据

## http 模块

模拟浏览器向web服务器发请求，还可以创建web服务器

## 模拟浏览器

```js
http.get(url, callback)  // 发送请求
  url  // 请求的URL 
  callback  // 回调函数，获取服务器端的响应

  res  // 响应的对象
  res.statusCode  // 获取响应的状态码
  res.on('data', function(chunk){   })
    // 事件: 监听服务器端是否有数据传输过来
    // chunk  就是传输的数据，格式为buffer
```

- 实例

```js
// 引入http模块
const http=require('http');
// 向web服务器发请求
// 参数1: 请求的URL
// 参数2: 获取响应
http.get('http://www.weather.com.cn/data/sk/101010100.html', function(res){
  // res:响应的对象
  // 响应的状态码
  console.log( res.statusCode );
  // 获取响应的内容
  // 事件：监听是否有数据流响应
  res.on('data', function(chunk){
    console.log(chunk.toString());
  })
});
```

## 创建web服务器

```js
var app = http.createServer(); // 创建web服务器

app.listen(8080);// 设置监听的端口

// 监听浏览器的请求
app.on('request', function(req,res){
  req           // 请求的对象
    req.url     // 请求的url，获取端口号后边的部分
    req.method  // 请求的方法
    req.headers // 请求的头信息
  res  响应的对象
    res.write()  // 设置响应的内容
    res.writeHead( 状态码, 头信息对象 )
    res.end()    // 结束并发送响应到浏览器
})
```

- 实例

```js
// 引入http模块
const http = require('http');

// 创建web服务器
var app = http.createServer();

// 设置监听的端口
app.listen(8080);

// http://127.0.0.1:8080
// http://localhost:8080
// 接收请求，根据请求作出响应
// 事件：一旦有请求，自动触发事件
// 回调函数: 服务器作出响应
app.on('request', function(req, res){
  // req: 请求的对象，获取所有请求
  // 请求的URL，请求的方法
  console.log(req.url, req.method);

  // 请求的头信息
  console.log(req.headers);
  
  // res: 响应的对象，作出具体响应
  // 设置响应的内容
  // res.write('this is homepage');
  // 设置响应的头信息和状态码
  res.writeHead(302,{
    Location:'https://wiki.aftersoil.xyz'// 跳转
  });

  // 结束并发送响应内容到浏览器
  res.end();
});
```

## 使用zlib模块对服务器端响应压缩

```js
// 引入zlib模块
const zlib = require('zlib');
// 设置内容的压缩形式
'Content-Encoding': 'gzip'
// 创建gzip压缩
var gzip = zlib.createGzip();
// 使用读取流读取文件并响应到浏览器
fs.createReadStream('tmooc.html').pipe(gzip).pipe(res)
```

-- 实例

```js
// 引入http模块
const http = require('http');
// 引入fs模块
const fs = require('fs');
// 引入zlib模块（用于压缩）
const zlib = require('zlib');
// 创建web服务器
var app = http.createServer();
// 监听端口8080
app.listen(8080);

// 监听浏览器的请求
app.on('request', function(req, res) {
  // 根据请求来作出响应
  // console.log(req.url);
  // 如果/login 响应
  if(req.url === '/login') {
    res.write('this is login page');
	  res.end();
  } else if(req.url === '/reg') {// 如果 /reg
    res.write('this is reg page');
	  res.end();
  } else if(req.url === '/study') {// 如果 /study
    // 跳转
	  res.writeHead(302,{
      Location:'http://www.tmooc.cn'
    });
    
    res.end();
  } else if(req.url === '/index'){
    // 如果请求的url是/index，响应文件tmooc.html到浏览器
	  // 设置响应头信息，告诉浏览器响应的内容按照网页去解析
    res.writeHead(200,{
      'Content-Type': 'text/html',
      'Content-Encoding': 'gzip'  // 设置压缩类型
    });

    // //1.1同步读取tmooc.html文件
    // var data = fs.readFileSync('tmooc.html');
    // //1.2读取的内容作为响应内容
    // res.write( data.toString() );
    // //1.3结束并发送
    // res.end();

    // 使用压缩
    // 创建gzip压缩
    var gzip = zlib.createGzip();
    // 创建可读流读取文件tmooc.html
    // 通过管道把可读流放入到压缩中
    // 把压缩后的内容响应到浏览器
	  fs.createReadStream('tmooc.html').pipe(gzip).pipe(res);
  }
});
```

## 课后任务

::: details 练习
- 创建web服务器，监听端口8080，接收浏览器的请求，根据请求作出不同的响应 `http://127.0.0.1:8080/reg`
  ```
  /login     响应内容    this  is  login page
  /reg       响应内容    this  is  reg  page
  /study     跳转到      https://wili.aftersoil.xyz
  ```
- **预习`express`**
:::
