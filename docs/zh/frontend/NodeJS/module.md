# NodeJS 模块

```js
require:      // 引入模块，返回一个对象
module:       // 指代当前的模块对象
module.exports: // 当前模块的导出对象
exports:      // 指代module.exports
__filename:   // 当前模块的绝对目录和模块名称
__dirname:    // 当前模块的绝对目录
```

## 模块引入

|  | 以路径开头 | 不以路径开头 |
| --- | ---- | --- |
| 文件模块 | `require('./circle.js')` 常用于引入自定义的模块，后缀名.js可以省略 | `require('url') `常用于引入官方提供的核心模块 |
| 目录模块 | `require('./02_2')` 到`02_2`下寻找`package.json`文件中`main`属性对应的文件名称，如果找不到引入`index.js` | `require('04_2')` 会到当前目录下的`node_modules`中寻找`04_2`目录，如果找不到，往上一级查找指定顶级目录；常用于引入第三方模块 |

## 包和npm

`CommonJS`是一种规范，JS向服务器端发展就遵循了这个规范。      
包`(package)`就是一个目录模块   
`npm`: 用于管理包的工具

- 切换目录

```sh
cd  # 完整路径
# 在指定的目录空白区域，按住shift键，单击鼠标邮件，选择'在此处打开powershell窗口'
```

## 使用 npm 安装(下载)

```sh
npm  install  包名称    # 回车
```

自动安装到所在目录下的node_modules中

```sh
npm  init  -y  # 初始化一个package.json文件,用于记录安装的包相关信息
```

```sh
npm  install    # 回车  
```

自动安装`package.json`中记录的包名称以及版本号

[npm官网](https://www.npmjs.com)

## npm 切换镜像源

meteor从1.3版本开始支持直接使用npm,对于开发者来说是个福音。但是npm的连接地址建议换成淘宝npm镜像的地址，原因只有一个，那就是下载速度快

默认的npm下载地址：[http://www.npmjs.org/](http://www.npmjs.org/)      
淘宝npm镜像的地址：[https://npm.taobao.org/](https://npm.taobao.org/)

- 临时使用淘宝源
```sh
npm --registry https://registry.npm.taobao.org install node-red-contrib-composer@latest
```

- 全局配置切换到淘宝源

```sh
npm config set registry https://registry.npm.taobao.org
```

- 全局配置切换到官方源

```sh
npm config set registry http://www.npmjs.org
```

- 查看 npm 配置信息
```sh
npm config list
```

- 检测是否切换镜像源

```
npm info underscore
```

## `querystring `模块

查询字符串：浏览器向服务器发请求，传递数据的一种方式

```js
// jd.com/Search?keyword=手机&enc=utf-8

parse()      // 将查询字符串解析为对象
stringify()  // 将对象格式化为查询字符串
```

- 使用

```js
// 引入查询字符串模块
const querystring = require('querystring');

// 查询字符串
var str='keyword=手机&enc=utf8';

// 把查询字符串解析为对象
var obj = querystring.parse(str);
console.log(obj);

// 把对象格式化为查询字符串
var str2 = querystring.stringify(obj);
console.log(str2);

var str='lid=5&pname=apple';
// 解析为对象
var obj = querystring.parse(str);

console.log(obj.lid, obj.pname);
```

## `url`模块

```js
parse()     // 将URL解析为对象
  protocol  // 协议
  hostname  // 主机名 域名/ip地址
  port      // 端口号
  pathname  // 请求的文件路径名称
  query     // 查询字符串

format()   // 将对象格式化为URL
```

:::warning
注意：`query`中对应的是对象
:::

## 使用 `url` 模块
```js
// 引入url模块
const url = require('url');
// 处理和解析URL
var str='http://www.tmooc.cn:80/detail.html?lid=5';

// 把URL解析为对象
var obj = url.parse(str);
console.log(obj);

var obj2 = {
  protocol: 'https',
  hostname: 'www.tmooc.cn',
  port: '8080',
  pathname: 'detail.html',
  query:{
    lid: 5,
	  pname: 'dell'
  }
}

// 把对象格式化为URL
var str2 = url.format(obj2);
console.log(str2);
```

## 全局函数

`parseInt/parseFloat/isNaN/isFinite/eval...`

## 一次性定时器

```js
// 开启
var timer = global.setTimeout( ()=>{
  console.log('嘣嘣嘣！');
},3000 );
// 当间隔时间到了，执行一次回调函数; 单位是毫秒

// 清除
clearTimeout(timer)
```

## 周期性定时器

```js
// 开启
var timer = setInterval( function(){
  console.log('嘀嘀嘀!');
},2000 );
// 每隔一段时间，执行一次回调函数

// 清除
clearInterval(timer)
```

## 立即执行

```js
// 开启
var timer = setImmediate(function(){
  console.log(1);
});

// 清除
clearImmediate(timer)
```

在事件队列的开头执行

## 立即执行

```js
process.nextTick(function(){
  console.log(3);
});

console.log(2);
```

在主程序的后边执行

## 同步(sync)和异步

:::tip
- 同步：等待前边的代码执行完，才能执行后边的代码；会阻止后边代码的执行，通过返回值来获取结果。
- 异步：不会阻止后边代码执行，后边的操作可以先执行，不必等待前边的操作结束，通过回调函数来获取结果。
:::

## fs模块(文件操作)

## 查看文件状态

`fs.stat(path, callback)` / `statSync(path)`

```js
// 引入fs模块
const fs = require('fs');
// 查看文件的状态
// 参数1: 路径
// 参数2: 回调函数,获取结果
fs.stat('01_homework.js', function(err, stats){
  // err: 可能产生的错误
  if(err) throw err;
  // stats: 具体的结果
  console.log(stats);
});


// 查看文件的状态
// 通过返回值获取结果
var rs = fs.statSync('01_homework.js');
console.log(rs);
```

## 创建目录

`fs.mkdir(path, callback)` / `mkdirSync(path)`

```js
fs.mkdir('mydir',function(err){
  if(err) throw err;
});

// 同步方法创建mydir2
fs.mkdirSync('mydir2');
```

## 移除目录

`fs.rmdir(path, callback)` / `rmdirSync(path)`

```js
// 移除目录
fs.rmdir('mydir',function(err){
  if(err) throw err;
});

// 同步方法移除mydir2
fs.rmdirSync('mydir2');
```

## 读取目录

`fs.readdir(path, callback)` / `readdirSync(path)`

```js
fs.readdir('mydir',function(err,result){
  if(err) throw err;
  // result 读取的文件列表
  console.log(result);
});

var res = fs.readdirSync('mydir');
console.log(res);
```

## 创建文件/写入文件

`fs.writeFile( path, data, callback )` / `writeFileSync(path,data)`

:::tip
`data`要写入的数据    
如果文件不存在，会创建文件并写入数据；   
如果文件已经存在，会清空文件中内容，然后写入数据    
:::

```js
fs.writeFile('1.txt', '1', function(err){
  if(err) throw err;
  console.log('文件写入成功');
});
```

## 追加写入文件 `fs.appendFile`

`fs.appendFile(path, data, callback)` / `appendFileSync(path, data)`

:::tip
如果文件不存在，会创建文件，然后写入数据    
如果文件已经存在，会再文件的末尾写入数据    
:::

```js
fs.appendFile('2.html', 'hello\n', function(err) {
  if(err) throw err;
  console.log('写入成功');
});
```

```js
// 练习：创建数组，每个元素是一个课程名称，遍历数组，分别获取元素，将数据使用同步方法写入到文件data.txt
var arr=['html', 'css', 'js', 'nodejs', 'mysql'];

for(var i = 0; i < arr.length; i++){
  // 数组元素 arr[i]
  // 使用同步追加写入
  fs.appendFileSync('data.txt', arr[i] + '\n');
}
```

## 读取文件

`fs.readFile(path, callback)` / `readFileSync(path)`

```js
fs.readFile('data.txt', function(err, data) {
  if(err) throw err;
  // data：读取的数据，格式为buffer 
  console.log( data.toString() );
});

// 使用同步方法读取2.html
var data = fs.readFileSync('2.html');
console.log( data.toString() );
```

## 删除文件

`fs.unlink(path, callback)` / `unlinkSync(path)`

```js
fs.unlink('1.txt',function(err){
  if(err) throw err;
  console.log('文件删除成功');
});

//使用同步删除文件  unlinkSync
fs.unlinkSync('2.html');
```

## 判断文件是否存在

`fs.existsSync(path)`

```js
var res = fs.existsSync('mydir');
console.log(res);
```

```js
// 判断data.txt 是否存在，如果存在，则删除
if( fs.existsSync('data.txt') ){
  // 如果存在，删除
  fs.unlinkSync('data.txt');
}
```

## 文件流 

`fs.createReadStream`

```js
var readStream = fs.createReadStream(文件路径)  //创建可读流

readStream.on('data', function(chunk){
  // 当有数据流入，自动触发事件；
  // 通过回调函数来获取 ，chunk就是获取的数据流
})

readStream.on('end', function(){
  // 当读取结束，自动触发事件
  // pipe  管道，可以将数据从可读流添加到可写流
})
```

```js
// 文件流
const fs = require('fs');
// 创建可读流
var readStream = fs.createReadStream('02_fs.js');

// 设置编码为utf8
readStream.setEncoding('utf8');

// 获取数据流
// 事件：监听是否有数据流
// 使用回调函数来获取数据流
readStream.on('data', function(chunk) {
  // chunk每次读取的数据
  console.log(chunk);
});

// 事件：监听是否读取结束
readStream.on('end', function() {
  console.log('读取结束');
});


// 使用可读流和可写流，拷贝文件
// 创建可读流
var readStream = fs.createReadStream('webstorm2017.rar');
// 创建可写流
var writeStream = fs.createWriteStream('1.rar');
// 把读取的流通过管道放入到写入流
readStream.pipe(writeStream);
```

## 课后任务

::: details 练习
- 获取URL中查询字符串的数据
  - `https://www.tmooc.cn:80/course.html?cid=17&cname=web`
- **预习同步和异步，`http协议`  `http模块`**
:::
