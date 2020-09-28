# Node
# ES6

ECMAScript   
(1) 块级作用域  
    
```javascript
使用let关键字声明变量 阻止变量提升 添加到块级作用域中 成为局部变量
let不允许重复赋值

块级作用域: {},if,else,while,for...
```
(2) 参数增强
    
```javascript
给参数设置默认值
function add(a,b,c=0){
    .....
}
```

(3) 箭头函数

```javascript
回调函数另一种写法 不等价于匿名函数

sort((a,b)=>{
  return a-b;
});

只有一行代码 而且是return的形式 
可以省略为 sort((a,b)=>a-b);
```

(4)模板字符串 
    
```javascript
`在模板字符串之间放任何形式的字符 ${JS表达式}`
```








# NodeJs

  服务器端  Ryan Dahl开发  
  Goole V8引擎Js运行环境

## Node.js特点

```javascript
简单避免过度设计
单线程逻辑处理   
非阻塞的一部I/O处理  IO输入输出   比JAVA PHP 快很多
事件驱动编程		
无锁机制 不会产生死锁	
支持数百万个并发连接  同时在线访问量数万个访问量 比Java PHP 多几万倍    

1 硬件方面     
2 服务器集群 多买几台服务器
```



## JS 与 nodeJs区别


```javascript
1- Js 运行在浏览器端 存在多种浏览器解释器 容易产生兼容性问题
  
	NodeJs运行在服务器端 只有V8引擎一种解释器 不存在兼容性问题
  
2- 两者都有内置对象,自定义对象  宿主对象(不相同)

3 JS浏览器端的交互效果 NodeJs用于服务器端操作 例如创建web服务器,操作数据库，操作数据库  文件操作
```


## NodeJs执行方式

    脚本模式  node c:/xampp/...01.js  回车
    
    交互模式  node  回车  进入交互模式  
    
    两次Ctrl+c  或者  .exit
    
    每次只有一个工作  单线程  多个
    node默认每次只有一个   


### Node.js 适用场景

    基于社交网络大规模web应用(属于I/O密集型)




Node.js 适合搭建编译器IO操作为主  响应速度快 易于扩展网络应用例如
    
```javascript
-命令行工具
-带有GUI界面本地应用程序
-交互式终端程序
-单元测试工具
-基于社交网络大规模Web应用  【重】 
-Web Scoket服务器
-TCP / UDP套接字程序
-客户端Javascript编译器

不适合
NodeJs不适合CPU密集型应用 例如
-深层次的嵌套和递归
-复杂加密和解密算法
-高可靠性运算
-严格内存管理
-数据挖掘和数据分析
NodeJS只占用CPU 1核
```








#  全局对象
(1)  进程对象 

    global/process/console/Buffe

(2) process对象

    进程  执行程序的时候   操作系统分配的内存空间
    process.arch  查看当前CPU架构
    process.platform 查看当前操作系统
    process.env  查看环境变量
    process.version node版本号
    process.pid 查看当前进程的编号
    process.kill() 进程编号


(3) 打印


    console.log/info
    /warn
    /error
    /time   计时
    /timeEnd
    
    console.time('for')
    
      需要计时的程序体...
    
    console.timeEnd('for')



## Buffer 缓冲区

```javascript
//创建 Buffer
var  buf = Buffer.alloc(6,'abcdef'); //第一个参数5个字符

//读取 Buffer 转换为字符串
console.log(String(butf)); // toString()
```



## 模块 

NodeJs 下模块分为 自定义模块 核心模块 第三方模块 

自定义模块

​	每个文件都是一个模块

​	NodeJs自动为每个文件添加了构造函数 所有的代码被构造函数所包含

功能体 文件(模块)封装  

```javascript
(function(exports,require,module,__filename,__dirname){
  require: 引入目录形式的模块 路径开头
  module: 当前模块
  module.exports.a=1  //导出内容 fn=fn 
})
```


模块系统

```javascript
require: 引入目录形式的模块 路径开头返回一个对象
module: 指代当前模块对象
module.exports:当前模块的导出对象
exports:指代 module.exports
__filname:当前模块的绝对目录和模块名称
__dirname:当前模块的绝对目录
```


模块引入
name | 以路径开头的 | 不以路径开头的模块 | 333 |
:-: | :-: | :-: | :-: | :-:
文件模块 |require('./circle.js') 常:用引入自定义的模块后缀名.js可以省略| 	require('04_2')会到当前目录下的node_modules中寻找04_2目录 如果找不到 | ddd | eee| 
目录模块往上一级查找 指定顶级目录常用于引用第三方模块 | require('./02_2')到02_2下寻找 package.json 文件中main属性对应的文件名称找不到会引入index.js| 如果找不到 往上一级查找指定顶级目录 常用于引入第三方模块 | iii | 000|


​    


​		
​			    

# 包和npm
CommonJs 规范   JS向服务器端发展遵循这个规范

```javascript
包(package) 就是一个没目录模块
npm 管理包的工具
```

第三方包
    
```javascript
npm 包管理工具      npm   -v  
查看版本
express 包 NodeJS 30多万

npmJs
mysql  npm install mysql
```


    cd 切换目录
    下载 cd    目录拷贝
    当前目录Shift+ 单机右键 powershell窗口


# npm 安装(下载)

    npm install 包名称  回车
    自动安装到所在目录下的 node_modules


​    npm  init  -y
​    初始化一个package.json文件用于记录安装的包相关信息
​    用于记录安装包
​    

```javascript
 npm install 回车
 自动安装package.json 中记录包名称以及版本号
```







# querystring  模块 

```javascript
查询字符串 浏览器向服务器发送请求 传递数据一种形式

const querystring = require('querystring') 引入模块

let str = ?keyword=手机&enc=utf-8  ? 后查询数据 & 多个

let obj = querystring.parse(str) 将查询字符串解析为对象

let str1 =  querystring.stringify(obj) //将对象格式化查询字符串  %E6%89%12%93&eb=utf8

```

parse() 将查询字符串解析为对象

stringfiy() 将对象格式化为查询字符串

​	

# url模块(处理解析url)

   https://www.jd.com :80/list.html?lid=5 //请求文件信息?编号详情 


```javascript
 const url = require('url'); //引入url模块
 let str = http://www.jd.com:80/list.html?lid=5 //请求文件信息?编号详情 

 var obj = url.parse(str) 将URL解析为对象
 
 let obj2 = {
     protocol:'https',
     hostname:'www.taobao.com',
     port:'8080',
     pathname:'list.html',
     query:'lid=5&pname=dell'
 }
 //格式化为Url
 let obj2 = url.format(obj2);
 
 Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.tmooc.cn:80',
  port: '80',
  hostname: 'www.tmooc.cn',
  hash: null,
  search: '?lid=5',
  query: 'lid=5',
  pathname: '/detail.html',
  path: '/detail.html?lid=5',
  href: 'https://www.jd.com.com:80/detail.html?lid=5'
}

```



#### 参数解析

 protocol  协议
 hostname 主机名  域名/ip地址
 port   端口号
 pathname  请求文件路径名称
 query  查询字符串 对应的是对象
 format() 格式化URl

    https: 加密协议  不会被拦截   收费







#  全局函数

parseInt/parseFloat/isNaN/isFinite/eval..

global.setTimeout

全局函数都可以通过global调用
  (1) 一次性定时器

```javascript
    开启
    var timer = global.setTimeout(()=>{},3000);
    间隔时间到 执行一次回调函数 单位是毫秒  //广告
    清除
   	global.clearTimeout(timer)
```

(2)周期性定时器

```javascript
var timer= global.setInterval(()=>{},3000)
    每隔一段是时间执行一次回调函数  //广告
global.clearInterval(timer)
```

只可以运行在nodejs 端

(3)立即执行定时器

```javascript
  回调函数先执行事件队列
  var timer=global.setImmediate(()=>{
    console.log(1)//先
  });
  console.log(2)//后      
  global.clearImmediate(timer);

  事件队列的开头执行
```



(4)立即执行

```javascript
process.nextTick(()=>{});
在主程序的后边执行
```



### 单线程

几核CPU 也就有几个线程

nodeJs 只有单线程    回调函数

主程序内容先执行 后执行事件队列内容

//耗时操作 都放到事件队列中

事件队列 回调函数 先放到事件队列




# fs模块(文件操作)    

  文件包含文件和目录  统称文件

```javascript
  使用模块先引入
  const fs = require('fs');

  cd 必须先进入当前文件目录 
  
  查看文件状态
  fs.stats(path,callback) 
  
  fs.stats('01.js',function(err,stats){
      console.log(stats)
  })
```


      path 文件路径
      callback 回调函数 用于获取
        err  可能产生的错误信息 
        stats 具体的文件状态

执行结果

````javascript
Stats {
  dev: 135415406,
  mode: 33206,
  nlink: 1,
  uid: 0,
  gid: 0,
  rdev: 0,
  blksize: undefined,
  ino: 281474977589076,
  size: 896, //大小
  blocks: undefined,
  atimeMs: 1585858794493.5378, 
  mtimeMs: 1573198767472.8367,
  ctimeMs: 1585761878754.9795,
  birthtimeMs: 1585761878753.9734,  //出生时间
  atime: 2020-04-02T20:19:54.494Z,
  mtime: 2019-11-08T07:39:27.473Z,
  ctime: 2020-04-01T17:24:38.755Z,
  birthtime: 2020-04-01T17:24:38.754Z 
}
````



# 同步(sync)和异步 

	同步
	等待前边的代码执行完 才执行后边的代码 回阻止后边代码的执行 通过返回值
	来获取结果
	
	异步  放在事件队列中操作   
	不会阻止后边代码执行 后边的操作可以先执行不必等待前边的操作结束 通过
	回调函数来获取结果
	
	API 中 只要参数含有callback 他就是异步的 // 通过回调函数  事件队列中执行
	Sync 就是同步的  // 通过返回值获取结果  在主程序种执行


## fs模块

查看文件状态

```javascript
fs.stat(path,callback)/statSync(pach)
kb 小 statSync(pach) 
```

  


创建目录

```javascript
fs.mkdir(path,callback)/mkdirSync(path)
```


移除目录
    
```javascript
fs.rmdir(path,callback)/rmdirSync(path)
```



读取目录

```javascript
fs.readdir(path,callback)/fs.reddirSync(path)
  callback
    err  可能产生的错误    if(err) throw 
  result 读取的结果 格式为数组
```

  


创建文件/写入文件/

清空写入
```javascript
fs.writeFile(path,data,callback)/writeFileSync(path,data)

data 要写入的数据

如果文件不存在 会创建文件并写入数据;
如果文件已经存在 会清空文件中内容 然后写入数据 

fs.writeFile('1.txt','1',(err)=>{
    if(err) throw err;
    console.log("文件写入成功");
})
```

追加写入
```javascript
fs.appendFile(path,data,callback)/appendFileSync(path,data)
如果文件不存在 就会创建文件 然后写入数据
  如果文件已经存在 会再文件的末尾写入数据
  
arr = ['html5','css3','canvas','svg','nodejs','mysql'];
for(var i = 0; i<arr.length; i++){
    fs.appendFile('data.txt',arr[i]+'\n');
}
```

  练习： 创建数组 每一个元素是一个课程名称, 遍历数组分别获取元素,
	将数据使用同步方法写入到文件 data.txt


读取文件  

```javascript
  fs.readFile(path,callback)/fs.readFileSync(path)
  	  callback
	      err
		  data 读取文件 格式为buffer
   
   fs.readFile('data.txt'(err,data)=>{
       if (err) throw err;
       console.log(data.toString())
   })
```
删除文件

```javascript
  fs.unlink(path,callback)/unlinkSync('path')
```



判断文件是否存在
	 fs.existsSync('path')

```javascript
 练习 判断data.txt 是否存在 如果存在 则删除
 
let res = fs.existsSync('data.txt');
console.log(res);
if(res==true){
	fs.unlinkSync('data.txt')
		console.log('删除成功')
}


if(fs.sxistsSync('data.txt')){
	//如果存在进行删除
	fs.unlinkSync('data.txt')
}

 
```

​	

拷贝文件

````javascript
fs.copyFile(src,dest,callback)/copyFileSync(src,dest,callback)
````




# 文件流 内存读取  ReadStream

```javascript
fs.createReadStream(文件路径) 创建可读流

readStream.on('data',function(chunk){})

当有数据流入  自动触发事件
通过回调函数来获取 chunk就是获取的数据流

readStream.on('end',function(){})

当读取结束 自动触发时间
pipe 管道,可将数据从可读流添加到可写流
```





执行代码：

```javascript
const fs = require('fs'); //引入fs模块

var readStream = fs.createReadStream('02_fs.js'); // 1.1 创建可读流


readStream.setEncoding('utf8'); // 1.2 设置编码utf8
 
readStream.on('data',function(chunk){  //1.3 获取数据流 
  	console.log(chunk);
});

readStream.on('end',function(){  // 1.4 事件：监听是否读取结束
    console.log('读取结束')
})
```

##### 服务器端的拷贝

使用可读流和可写流 拷贝文件

创建可读流
```javascript
var readStream = fs.createReadStream('02_fs.js');
```

创建可写流
```javascript
var writeStream = fs.createWriteStream('fork.txt');
```

读取的流通过管道放入到写入流

```javascript
readStream.pipe(writeStream);
```





# http协议 超文本传输协议  


  浏览器和Web服务器的通讯协议


```javascript
Network
Response 响应  服务器给浏览器
Request 请求   浏览器给服务器
```


(1) 通用头信息

```tex
Request URL: 请求的URL 对应的浏览器地址栏 向服务器获取哪些内容

Request Method:GET   请求的方法 获取内容的方法

get 获取/post 传递
  
StatusCode: 200 OK;  响应的状态码
1**:正在响应  3**: 响应重定向  跳转另一个URL
2**:成功响应  4**: 客户端请求错误
5**:服务器端错误

  Remote Address: 请求服务器的IP地址及端口号
```
(2) 响应头信息
	
    连接方式
    Connection: keep-alive  持久连接
    Content-Encoding:gzip   压缩形式 
    Content-Type:text/html  响应的文件类型
    Location: 跳转的URL 常配合状态码 3**使用


(3) 请求头信息
	
    Accept 浏览器接受的文件类型有哪些
    Accept-Encoding:接收的压缩形式有哪些
    User-Agent: 客户端使用的浏览器版本

(4) 请求主体
	
  可有可无  浏览器响服务器端发送请求传递的数据




# http模块 
模拟浏览器向web服务器发请求 还可以创建web服务器

http模块

​	模拟浏览器向web服务器发送请求 还可以创建 web服务器



(1)模拟浏览器
```javascript
const http = require('http');

http.get(url,callback)发送请求
  url 请求的URL
  callback 回调函数 获取服务器端的响应
    res 响应的对象
    res.statusCode 获取相应的状态码
    res.on('data',function(chunk){
      console.log(chunk.toString())
    })
    
    事件:监听服务器端是否有数据传输过来
    chunk 就是传输数据 格式为buffer

```

执行代码

````javascript
引入http
const http = require('http');

http.get('http://www.tmooc.cn',function(res){
	//res: 相应的对象
	console.log(res.statusCode);
	// 获取相应的内容  数据流
	// 事件 监听是否有数据流
	res.on('data',function(chunk){
		console.log(chunk.toString());
	})
});

参数解析
    向web服务器发送请求  get 获取
    参数1 请求的URL
    参数2 获取响应
````



### 创建web服务器

    const http = require('http'); //引入http模块


    创建web服务
    var app=http.createServer();
    
    设置监听的端口
    app.listen(8080);
    
    监听浏览器请求
    app.on('request',function(req,res){
      获取请求对象
      req 请求的对象
        req.url 请求的url 获取端口号后边的部分
        req.method 请求的方法
        req.headers 请求的头信息 //不重要
    
      res  响应的对象
        res.write()设置响应的内容
        res.writeHead(状态码,头信息对象)
        
        //重定向跳转
        res.writeHead(302,{
        	Loaction:'http//www.tco.cn'
        })
        
        res.end() 结束并发送响应到浏览器
    });

### Test

创建web服务器 监听端口 8080 接收浏览器的请求, 根据请求作出不同的相应

http://127.0.0.1:8080/reg

/login 相应内容 this is Login page

/reg  相应内容 this is reg page

/study 跳转到 this is study page

#### 执行代码:



执行代码

```javascript
const fs = require('fs');
//1.1 引入zilb模块
const zlib=require('zlib ');
//引入http模块
const http=require('http');
//创建web服务器
var app = http.createServer();
//监听端口号
app.listen(8080)

//接收浏览器请求
app.on('request',(req,res)=>{
    //根据请求作出相应
    // res.write('this is Homepage')
    // res.end()
    if(req.url=='/login'){
        res.write('this is  loginPage')
        res.end();
    }else if(req.url=='/reg'){
        res.write('this is  regPage')
        res.end();
    }else if(req.url=='/study'){
       res.writeHead(302,{
           Location:'http://www.tmooc.cn'
       })
        res.end()
        //如果请求url是/index相应 tmooc.html
    }else if(req.url=='index'){
          
        /*   方法  1  
 
        //异步读取文件
        var data = fs.readFileSync('tmooc.html');
        //响应内容
        res.write(data.toString());
        res.end();
        //解决 响应内容乱码
        */

		// 方法2 数据流   压缩技术  
        //设置响应头信息 告诉浏览器 响应的内容按照网页去解析
        res.writeHead(200,{
            'Content-Type':'text/html',
            // 设置压缩类型
            'Content-Encoding':'gzip'
        });

        //使用压缩形式
        //2.1创建gzip压缩
        var gzip=zlib.createGzip();

        //4 使用读取流读取文件并响应到浏览器
        fs.createReadStream('tmooc.html').pipe(gzip).pipe(res);
		
    }

})
```






#### 响应压缩 提高服务器性能



##### 1.1 引入zilb模块

```javascript
  const zlib=require('zlib ');
```

#####  1.2 设置压缩内容形式

```javascript
'Conten-Encoding':'gzip'   //注意是在相应头中定义
```

#####  1.3 创建压缩

```javascript
var gzip = zlib.createGzip();
```

#####   使用读取流读取文件并响应到浏览器

```javascript
fs.createReadStream('tmooc.html').pipe(gzip).pipe(res);
```

 

# Express 

 基于nodeJs平台,快速,开放,极简的web开发框架	

  www.expressjs.com.cn 中文官网

  安装

```javascript
npm install express
```



## 创建web服务器

引入express 模块

```javascript
  const express=require('express');
```

创建web服务器
```javascript
   var app=express();
```

监听端口

````javascript
	app.listen(8080); 
````

根据请求作出响应

```javascript
app.get('/login',function(req,res){
	res.send('这是登陆的页面'); 
});
```



## 路由

浏览器向 web 服务发出请求,web服务器根据请求的url和请求的方法作出响应
三要素: 请求的url 请求的方法 响应(回调函数)

res  响应对象

````javascript
send() 设置并发送相应的内容  路由中只能响应一次
sendFile() 响应文件,要求使用绝对路径  __dirname+'/tmooc.html'
redirect() 响应的重定向 跳转到另一个url
````

req 请求的对象

````javascript
method 请求的方法
url 请求的url
headers  请求的头信息
query   获取请求的查询字符串形式的数据 格式为对象
params  获取路由传递的数据 设置路由中接收数据的名称
````



### 路由传参

#### Get

```javascript
//路由  请求方法 get 请求url:/shoping 响应并发送
app.get('/shopping/:price',function(req,res){
	// 获取路由的数据
	console.log(req.params);
	res.send('这是购物车');
})

app.get('/admin/:uname/:upwd',function(req,res){
	// 获取路由数据字符串
	console.log(req.params);
	res.send('欢迎用户:'+req.params.uname);
});
```

#### Post

```javascript

app.post('/mylogin',(req,res)=>{
	res.send('登录成功')
    req.on('data',function(mydata){
      格式化查询为字符串,需要解析为对象
      把查询字符串转对象
		var str = mydata.toString();
      	mydata.toString() 
    });
})


```

*//练习 使用express 创建web服务器 创建路由 请求方post请求url:/login,响应一个文件login.html到浏览器端。*

html

````html
<h1>请登录</h1>
<!-- for 表单标签 用于提交到服务器
	method: 设置请求的方法  post/get
	action: 设置请求的url
	name: 用于接收表单输入的数据
	-->
<form method="post" action="/myloging">
	用户:<input type="text" name="uname"><br>
	密码:<input type="text" name="upwd">
	<input type="submit">
</form>
````



````javascript
const express = require('express');
创建web服务器
var app=express();
app.listen(8080);
获取请求
app.post('/myloging',function(req,res){
	//获取post请求数据
	//事件:
	req.on('data',function(mydata){
		//buffer数据-> 查询字符串
		//console.log(mydata.toString());
		
        //把查询字符串转对象
		var str = mydata.toString();
		
        
		var obj = querystring.parse(str);
		
		console.log(obj);
	})
	res.send('请求成功');
})


````

#### get 和 post 请求

在浏览器 地址栏直接输入url 默认是get请求

传递数据使用查询字符串  浏览记录可能被浏览器缓存

post请求需要使用表单提交来完成(现阶段) 




##  路由器 

路由在使用的过程中 不同模块下的路由可能出现相同url;
把同一个模块下的路由放到特定的路由器

1 创建路由器

  路由器是express下的一个功能


```javascript
const express = require('express');

//创建路由器对象

var router=express.Router();

//路由器添加路由

//get  /list

router.get('/list',function(req,res){
    res.send('这是用户列表')
});
  
导出路由对象
module.exports=router;
```

2  在web服务器中使用

````javascript
const express = require('express');
//引入路由器模块   

// 自定义模块 必须加./
const userRouter=require('./user.js');

//创建web服务器
var app=express();

//监听端口 
app.listen(8080);


挂载路由
app.use('/user',userRouter);
// 参数 1: 挂载的url
// 参数 2: 要挂载的路由器

````



### Test

创建路由,请求的方法：get 请求url:/study,响应内容并发送
浏览器传递数据
http://127.0.0.1:8080/shopping/4999

1 创建路由器

product.js

````javascript
//引入服务器
const express = require('express');	
// 创建路由对象
var router = express.Router();

//添加路由
router.get('/list',function(req,res){
	res.send('这是商品列表');
});

router.get('/update',function(req,res){
	res.send('修改商品列表');
});

router.get('/datele',function(req,res){
	res.send('删除商品列表');
});


// 导出路由对象
module.exports = router;
````

2 创建web服务器

````javascript
const express = require('express');
const productRouter = require('./product.js')
var app = express();//创建web服务器
app.listen(8080);

//使用路由器
// 路由级中间件使用
app.use('/product',productRouter);
````



# 中间件 

  为主要的业务逻辑服务  接收到请求 以及作出响应
  应用级中间件 路由级中间件  内置中间件 第三方中间件
  错误处理中间件


## 路由器中间件

	  app.use('/user',userRouter)

## 应用级中间件

也称为自定义中间件 是一个函数(回调函数);

```js
app.use('/reg',function(req,res,next){
  拦截url为/reg的路由
  next是一个函数 表示执行下一个中间件或者路由
  next()
})
```


## 内置中间件

把所有的静态资源托管到某个目录 如果浏览器请求静态资源 自动到该目录下寻找 无需创建路由

```js
app.use( express.static('托管的目录'))
```

​	// 把所有的静态资源(htmll,css,js 图片等文件)托管到某一个目录 public 下
​	// 当浏览器请求静态资源,会自动到public目录下寻找,不需要再创建单独的路由响应文件

`````
app.use( express.static('public'));
app.use( express.static('files'));
`````

练习把静态资源托管到file目录

```
app.use(express.json());
```

用于处理请求体中json数据

## 第三方中间件
body-parser中间件使用
1) 下载安装

```js
	npm instass body-parser;
```

2) 引入中间件模块
	    

```js
  const bodyParser=require('body-parser');
```

3) 使用中间件
    
    
```js
    将post请求数据解析为对象
    app.use(bodyParse.urlencoded({ 
      不使用第三方 的qs模块解析查询字符串为对象 而是使用querystring模块
      extended:false 
    }))
```

4) 在post请求的路由中 req.body 返回对象	



## Test

*创建web服务器 托管静态资源到public目录下 浏览器向服务器请求login.html, 请求方法 post 请求url:/mylogin*

```javascript
const express = require('express');
const querystring = require('querystring'); 

//引入 boody-parser中间件
const bodyParser=require('body-parser');
let app = express();
app.listen(8080);

// 托管静态资源到public 目录
app.use(express.static('public'))

// 使用body-parser中间件

// 将post请求的数据解析为对象
app.use(bodyParser.urlencoded({
	extended:false   // 不使用第三方qs模块,而是使用核心模块querystring来解析查询字符串为对象
}));

//根据表单的请求 创建对应的路由
 app.post('/mylogin',(req,res)=>{ 
	// 获取post 请求的数据  s使用body-parser中间件  不需要解析字符串
	/*
	req.on('data',function(mydata){
		//console.log(mydata.toStrong)
		var obj = querystring.parse(mydata.toString());
		console.log(obj);
	});
	*/
	
	console.log(req.body)

	res.send('登录成功')
});
```



## 获取数据的方式

| 名称     | 形式              | 获取(路由)                     |
| -------- | ----------------- | ------------------------------ |
| get      | ?lid=1&pname=dell | req.query                      |
| 路由传递 | /shopping/4999    | req.params                     |
| post     | 无法通过url查看   | 前提需要使用中间件 body-parser |




# Mysql模块


```javascript
mysql.exe -h127.0.0.1  -P3306 -uroot -p
```


引入mysql模块

```javascript
const mysql = require('mysql');
```


创建连接对象
```javascript
 const connection=mysql. createConnection({
     host:'127.0.0.1',
     port:'3306',
     user:'root',
     passworld:'root',
     database:'xz'		
 });
```

建立连接

```javascript
connection.connect();
```



## 执行sql语句

```javascript
  connection.query(sql语句,calback)
    err 可能产生的错误
    result SQl语句的执行结果

  执行删除 修改 插入返回对象,如果返回对象的属性中 affectedRows 大于0 说明执行成功
  
  执行查询返回数组 
```

````javascript
connection.query('DELETE FROM emp WHERE eid=3',function(err,result){
	//err 可能产生的错误
	//result SQL语句的结果

	if(err) throw err;
	console.log(result);
});
````

affectedRows 大于0 说明执行成功



## 登录查询

用户名和密码同时满足的结果 返回一条数据

```javascript
SELECT * FROM user WHERE uname='root' AND upwd='123456' or 1=1; //OR 1=1 SQL注入 执行登录成功
```


```javascript
delete from emp where eid=5 or 1=1;  
//测试 删除表中所有数据 	
```

## 防止攻击
SQl注入 

? 占位符,过滤传入的值 防止被sql注入

表中插入数据


```javascript
connection.query('INSERT INTO emp VALUES(?,?,?,?,?,?)',[4,'abcd',1,'1997-9-2',800,20],function(err,result){
  if(err) throw err;
  console.log(result);
})
```

mysql 内部脚本化

#### 直接将对象插入数据库

mysql模块  封装后的 SET

不是标准的sql语句 

```javascript
  var emp={
    eid:5,
    ename:'ccc',
    birthday:'1995-8-3',
    sex:2,
    salary:9000,
    deptId:20
  }

  connection.query('INSERT INTO emp SET ?',[emp],function(err,result){
    if(err) throw err;
    console.log(result);
  });
  
 关闭连接
 connection.end()
```


关闭连接 



长时间开启影响服务器性能


connection.end();

使用连接池

```js
  connectionLimit 用于设置连接池的大小 默认15个

  var pool=mysql.createPool({});
```


执行SQL语句

```js
  pool.query(sql语句,callback)
```



执行代码


#  使用连接池连接

```js
  const mysql=require('mysql');
```


创建连接池对象


```js
var pool=mysql.createPool({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'root',
  database:'tedu',
  connectionLimit:20 // 设置连接池的大小 小型博客
});
```



执行SQL语句
     
```js
  pool.query('SELECT * FROM emp',(err,result)=>{
    if(err) throw err;
    console.log(result);
  });
```

执行SQL语句 删除员工表编号为5的数据

```js
pool.query('DELETE FROM emp WHERE eid=?',[5],(err,result)=>{
  if(err) throw err;
  console.log(result);
});
```



# 项目SQL 语句执行

## Demo01

创建web服务器 (路由器 路由) 托管静态资源到public  创建文件 add.html 点击提交  将数据插入到 tedu 下数据表 dept中

get       /add

app.js    

```js
const express = require('express');
const mysql = require('mysql');
创建web服务器
var  app = express();
app.listen(8080);


//添加中间件托管
app.use(express.static('public'));
//连接数据库
var pool=mysql.createPool({
	host:'127.0.0.1',
	post: 3306,
	user:'root',
	password:'root',
	database:'tedu',
	connectionLimit:20
})


//根据表单的提交创建对应的路由

app.get('/add',function(req,res){
	// 如何获取get  // boty 获取post //parmat url // 后的数据
	var obj=req.query;
	console.log(obj);
	// 执行SQL语句 将数据插入到数据库中
	pool.query('INSERT INTO dept SET ?',[obj],(err,result)=>{
		if(err) throw err;
		console.log(result);
		//如果插入成功 才响应
		if(result.affectedRows>0){
			res.send('注册成功');
		}
	});
	
})

```

public 

​		> index.html

```html

<form method="get" action="/add">
	编号:<input type="text" name="did"> <br>
	名称:<input type="text" name="dname"> 
	<input type="submit">
</form>
```

server

​		> dept.sql

````sql
DROP DATABASE  IF EXISTS tedu;

SET NAMES UTF8;

CREATE DATABASE tedu CHARSET=UTF8;

USE tedu;

CREATE TABLE dept(
	did INT NOT NULL,
	dname VARCHAR(3) NOT NULL
)CHARSET=UTF8;
````



## Demo02

````js
node_module	 相关包依赖
public  --  静态html
routers --  路由逻辑实现
app.js -- 服务启动
pool -- 连接池
````

app.js

```js
const express = require('express');
//服务器中引入中间件

//引入 body-Parser 
const bodyParser = require('body-parser');

//创建web服务器
var  app=express();
//监听端口
app.listen(8080);


//使用body-parser中间件
app.use( bodyParser.urlencoded({
	extended:false
}));



//引入用户路由器
const userRouter = require('./routes/user.js')
//引入登录路由器


// 静态资源到 目录
app.use(express.static('public'));
// 创建网页  



// 使用路由器 挂载到/user下
app.use('/user',userRouter);
```

pool 创建连接池

```js
// 引入mysql 
const mysql = require('mysql');
// 创建连接池
var pool = mysql.createPool({
	host:'127.0.0.1',
	post:'3306',
	user:'root',
	password:'root',
	database:'xz',
	connectionLimit:20
});

//导出连接池对象
module.exports=pool;
```

routers

​		>  user.js  主要逻辑代码实现区域

````js
const express =require('express');
//引入连接池模块
const pool = require('../pool.js')


//创建路由器
let router=express.Router();


路由逻辑代码
[router]

//导出对象
module.exports=router;
````

注册路由 [router]

```js
// 注册路由
router.post('/reg',(req,res)=>{
	var obj=req.body;
	console.log(obj);
	//1.2 验证每一项是否为空
	// 如果用户名为空
	let obj = req.body;
    let code = 401;
    for (let key in obj) {
        if (!obj[key]) { 
            res.send({
                code: code,
                msg :`${key} Not Null`
            })
            return;
        }
    }
    
	//1.3 执行sql语句
	pool.query('INSERT INTO xz_reg SET ?',[obj],function(err,result){
		if(err) throw err;
		console.log(result);
		// 如果数据插入成功
		if(result.affectedRows>0){
			res.send({code:200,msg:'reg suc'});
		}

	});	
});
```

html

````html
<form method="post" action="/user/reg">
<h1>用户注册</h1>
	用户名:<input type="text" name="uname"><br>
	密码:<input type="text"  name="upwd"><br>
	手机:<input type="text" name="phon"><br>
	邮箱:<input type="text" name="email"><br>
	<input type="submit" value="注册">
</form>
````

登录路由  [router]

````js
// 登录路由
router.post('/login',(req,res)=>{
	var obj = req.body;
	console.log(obj);
	//查询是否有用户名和密码同时的数据 查看数据库已有的数据
	pool.query('SELECT * FROM xz_login WHERE uname=? AND upwd = ?',[obj.uname,obj.upwd],(err,result)=>{
		if (err)  throw err;
		console.log(result);
		// 判断扥登录成功还是失败
		if(result.length>0){//有元素执行
			res.send({code:200,msg:'login suc'});
		}else{//没有元素 失败
			res.send({code:201,msg:'uname and upwd error'
			});
		}
	});
});
````

html

````html
<h2>用户登录</h2>
<form method="post" action="/user/login">
	用户<input type="text" name="uname"><br>
	密码<input type="text" name="upwd">
	<input type="submit" value="登录">
</form>
````



检索用户  [router]

```js
// 检索用户
router.get('/datail',(req,res)=>{
	//3.1获取数据
	var obj = req.query;
	console.log(obj);
	//3.2 验证数据是否为空
	if(!obj.uid){
		res.send({
			code:401,msg:'uid required' 
		});
		return;
	}

	//执行sql语句
	pool.query('SELECT * FROM xz_reg WHERE uid=?',[obj.uid],(err,result)=>{
		if(err) throw err;
		res.send(result);
		console.log(result);
	})
});
```

````html
<h2>检索用户</h2>
<form method="get" action="/user/datail">
	编号:<input type="text" name="uid">
	<input	type="submit">
<form>
````

用户修改  [router]

````js

// 用户修改
router.post('/update',(req,res)=>{
	var obj = req.body;
	//数据获取
	console.log(obj)
	//验证数据为空
	// 批量验证  遍历
	var i=400;
	for(var key in obj ){
		console.log(key,obj[key]);
		i++; //设置状态码
		//如果属性值为空 提示属性名必须
		if(!obj[key]){
			res.send({code:i,msg:key+' required'})
			return;
		}
	}

    
	// 取出用户编号
	var uid = obj.uid;
	// 删除对象中的编号属性
	delete obj.uid 
	pool.query('UPDATE xz_reg SET ? WHERE uid=?',[obj,uid],(err,result)=>{
		if(err) throw err;
		//console.log(result);
		if(result.affectedRows>0){
			res.send({code : 200,msg:'update suc'});
		}else{
			res.send({code : 201,msg:'update error'});
		}
	});
	
});
````

````html
<h1>用户修改</h1>
<form method="post" action="/user/update">
	编号<input type="text" name="uid"><br/>
	手机<input type="text" name="phon"><br/>
	邮箱<input type="text" name="email"><br/>
	姓名<input type="text" name="uname">
	<input type="submit">
</form>
````



用户列表分页  [router]

````js
// 用户列表
router.get('/list',(req,res)=>{
	// 5.1 获取数据
	var obj = req.query;
	console.log(obj);
	//res.send('用户列表');	 这里卡了半节课   
	//5.2 验证为空 设置默认值
	var count = obj.count;
	var pno = obj.pno;
	count = parseInt(count);
	pno = parseInt(pno);
	if(!count){
		count=2;
	}
	if(!pno){
		pno=1;
	}
	//console.log(count,pno);
	//转整形
	
	//计算开始
	var start = (pno-1)*count;
	
	//执行sql语句
	pool.query('SELECT * FROM xz_reg LIMIT ?,?',[start,count],(err,result)=>{
		if(err) throw err
		res.send(result);
	});
});
````

````html
<h2>用户列表<h2>
<form method="get"  action="/user/list" >
	大小:<input type="text" name="count"><br> 
	页码:<input type="text" name="pno">
	<input type="submit">
</form>
````



删除用户 [router]

````js
router.get('/delete',(req,res)=>{
	// 获取数据
	var obj=req.query;
	console.log(obj);
	
	if(!obj.uid){
		res.send({code:'401',msg:'uid error'});
		return;
	}
	// 执行sql语句
	pool.query('DELETE FROM xz_reg WHERE uid=?',[obj.uid],(err,result)=>{
		if(err) throw err;
		console.log(result);
		if(result.affectedRows>0){
			res.send({code:200, msg:'del'});
		}else{
			res.send({code:201,msg:'del error'})
		}
	});
})
````

html

```html
<h2>删除用户列表</h2>
<form method="get" action="/user/delete">
	编号: <input type="text" name="uid">
	<input type="submit">
<form>
```





## 项目文件目录  （第二种写法）

````js
node_module	 相关包依赖
public  --  静态html
routers --  路由逻辑实现
app.js -- 服务启动
pool -- 连接池
````

app.js

````js
const express = require('express');
const bodyParser = require('body-parser');

//引入自定义模块
const register = require("./routes/reg.js");
const login = require("./routes/login.js")
const detail = require("./routes/detail.js")
const update = require("./routes/update.js")
const list = require("./routes/list.js")
const del = require("./routes/del.js")

//创建web服务器 监听
//端口
let app = express();
app.listen(8080);



//使用body-parser中间件
app.use( bodyParser.urlencoded({
    extended: false 
}))


// 使用路由器挂载到 user下
app.use('/user', register);
app.use("/user", login);
app.use("/user", detail);
app.use('/user', update);
app.use("/user", list);
app.use("/user", del);

// 静态文件
app.use(express.static('public'));
````

pool.js

````js
 // 引入mysql 模块
const mysql = require("mysql");

// 创建连接池
var pool = mysql.createPool({
    host: '127.0.0.1',
    post: '3306',
    user: 'root',
    password: 'root',
    database: 'xz_lpy',
    connectionLimit: 20
});

module.exports = pool;
````

routers

​		> reg.js

```js
const express = require("express");

const pool = require("../pool");

// 创建路由
let router = express.Router();


//注册路由
router.post("/reg", (req, res) => {
    let obj = req.body;
    let code = 401;
    for (let key in obj) {
        if (!obj[key]) { 
            res.send({
                code: code,
                msg :`${key} Not Null`
            })
            return;
        }
        
    }

    // 向数据库中插入数据


    pool.query("INSERT INTO xz_reg SET ?", [obj], (err, result) => {
        if (err) throw err;
        // console.log(result);
        // console.log("数据插入成功");


        // 如果数据插入成功响应状态码

        if (result.affectedRows > 0) {
            res.send({
                code: 200,
                msg: "reg suc"
            });
        }

    });

});
// 导出路由
module.exports = router;
```

````html
 <form method="POST" action="/user/reg">
        <ul>
            <li>用户名:<input type="text" name="uname"></li>
            <!-- <li>编&nbsp;&nbsp;号:<input type="text" name="id"></br></li> -->
            <li>密&nbsp;&nbsp;码:<input type="password" name="upwd"></li>
            <li>邮&nbsp;&nbsp;箱:<input type="text" name="email"></li>
            <li>电&nbsp;&nbsp;话:<input type="text" name="phone"></li>
            <li><input type="submit" id="sub" value="注册"></li>
        </ul>
    </form>
````

​			> login.js

````js
const express = require("express");
const mysql = require("../pool");


let Login = express.Router();



Login.post("/login", (req, res) => {
    // 获取数据
    var obj = req.body;
    console.log(obj);
    //判断是否为空
    if (!obj.uname) { 
        res.send({
            conde: 401, msg: "userName required"
        });
        return;
    }
    if (!obj.upwd) { 
        res.send({
            conde: 402, msg: "Pwssord required"
        });
        return;
    }
    // 执行sql语句
    let sql = "SELECT * FROM xz_reg WHERE username = ? AND pwd =?";
    mysql.query(sql, [obj.uname, obj.upwd], (err, result) => {
        if (err) throw err;
        console.log(result);
        // 判断登录是否成功
        if (result.length > 0) {
            res.send({
                conde: 200,
                msg: "Login snc"
                    
            })
        } else {
            res.send({
                conde: 201,
                msg: "Login err"
            })
        }

    });

});


module.exports = Login; 
````

````html
<form method="POST" action="/user/login">
    <ul>
        <li> 用户名:<input type="text" name="uname"></br></li> 
        <li> 密&nbsp;&nbsp;码:<input type="password" name="upwd"></br></li>
        <li> <input type="submit" id="sub" value="登录"></li>
    </ul>
    <a class="pok" href="../index.html">Back to homee >></a>
</form>
````

​			> List

````js
const express = require("express");
const mysql = require("../pool");

let list = express.Router();
list.get("/list", (req, res) => {
    let obj = req.query;
    /*
    let NumObj = {
        count : parseInt(obj.count),
        pno : parseInt(obj.pno)
    }

    let cont = numObj.cont ? numObj.cont : 5;  // 大小
    let pno = numObj.pno ? numObj.pno : 1; 

    */
    let count = obj.count;
    let pno = obj.pno;
    count = parseInt(count);
    pno = parseInt(pno);
    //console.log(NumObj.count, NumObj.pno);
    
    // 计算页码 为空添加默认值
    if (!count) {
        count = 2;
    }
    if (!pno) { 
        pno = 1;
    }

    // 计算页码开始
    let start = (pno - 1) * count;

    // sql语句
    let sql = "SELECT *FROM xz_product LIMIT ?,?";
    mysql.query(sql, [start,pno], (err, result) => {
        if (err) throw err;
        res.send(result);
    });


});

module.exports = list;
````

````html
<form method="GET" action="/user/list">
    <strong>产品分页:</strong>
    大小 :<input type="text" name="count"><br>
    页码 :<input type="text" name="pno"><br>
    <input  type="submit" id="sub" value="Select">
</form>
````

​			> detail.js

````js
const express = require("express");
const mysql = require("../pool");

let detail = express.Router();
detail.get('/detail', (req, res) => {
    let obj = req.query;  
    if (!obj.id) { 
        send({
            code: 200,
            msg: "请输入查询编号"
        });
        return;
    }
    // 查询返回数据


    let sql = "SELECT * FROM xz_product WHERE id = ?";
    mysql.query(sql, [obj.id], (err, result) => {
        if (err) throw err;

        // 判断是否有值
        if (result.length > 0) {
            res.send(result)
        } else { 
            res.send({
                code: 201,
                msg : "查询商品不存在"
            })
        }
    })

  
});
module.exports = detail;
````

````html
 <form method="GET" action="/user/detail">
         <strong>商品查询:</strong>
         编号:<input type="text" name="id"><br>
         <input  type="submit" id="sub" value="Select">
 </form>
````

​		> del.js

````js
const express = require("express");
const mysql = require("../pool");

let del = express.Router();

del.get("/del", (req,res) => { 
    let obj = req.query;
    
    if (!obj.id) { 
        res.send({
            code: 201,
            msg: "编号不允许为空"
        });
        return;
    }

    // 执行sql语句
    let sql = "DELETE FROM xz_reg WHERE id";
    mysql.query(sql, [obj.id], (err,result)=>{ 
        if (err) throw err;
        console.log(result);

        if (result.affectedRows > 0) {
            res.send({
                code: 200,
                msg: "删除成功"
            })
        } else { 
            res.send({
                code: 201,
                msg: "删除失败"
            });
        }


    })

})

module.exports = del;
````

````html
<form method="GET" action="/user/detail">
        <strong>商品查询:</strong>
        编号:<input type="text" name="id"><br>
        <input  type="submit" id="sub" value="Select">
</form>
````

​		> update.js

````js
const express = require("express");
const mysql = require("../pool");

let update = express.Router();

update.post('/update', (req, res) => {
    var obj = req.body;
    
    let code = 401;
    for (let key in obj) { 
        
        if (!obj[key]) { 
            res.send({
                code: code,
                msg: `${key} 不允许为空 `
            });
            return;
        }
        code++;
    }
    var  id = obj.id;
    delete obj.id;
    // 使用sql 修改数据
    let sql = "UPDATE xz_reg SET ? WHERE  id = ? ";
    mysql.query(sql, [obj,id], (err,result) => { 
        if (err) throw err;
        if (result.affectedRows > 0) {
            res.send({
                code: 200,
                msg: "修改成功"
            })
        } else { 
            res.send({
                code: 201,
                msg: "修改失败"
            })
        }
    })
});

module.exports = update;
````



````html
<form method="POST" action="/user/update">
        <li>编&nbsp;&nbsp;号:<input type="text" name="id"></li>
        <li>用户名:<input type="text" name="uname"></li>
        <li>密&nbsp;&nbsp;码:<input type="text" name="upwd"></li>
        <li>邮&nbsp;&nbsp;箱:<input type="text" name="email"></li>
        <li>电&nbsp;&nbsp;话:<input type="text" name="phone"></li>
        <input type="submit" id="sub" value="修改">
</form>
````



































   

   


​	

​	


