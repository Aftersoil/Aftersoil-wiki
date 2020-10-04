# 中间件

为主要的业务逻辑服务；接收到请求，以及做出响应    
[路由级中间件](#路由级中间件)、[应用级中间件](#应用级中间件)、[内置中间件](#内置中间件)、[第三方中间件](#第三方中间件)、错误处理中间件

#### 路由级中间件

路由器的使用

#### 应用级中间件

也称为自定义中间件，是一个函数(回调函数)

```js
app.use( '/reg', function(req,res,next){   } )

// 拦截url为/reg的路由；  
// next是一个函数，表示执行下一个中间件或者路由
```

- 实例

```js
const express = require('express');
var app = express();
app.listen(8080);

// 验证是否为空
// 参数1：要拦截的url(给谁用)
// 参数2: 回调函数，处理请求
app.use('/reg',function(req, res, next) {
  console.log('验证了是否为空');
  // 如果为空，响应一句话
  // res.send('用户名不能为空');
  // 执行下一个中间件或者路由
  next();
});

// 练习：创建中间件，验证用户名是否可用
app.use('/reg', function(req, res, next) {
  console.log('验证了用户名是否为空');
  next();
});

// 注册路由  get  /reg
app.get('/reg', function(req, res) {
  res.send('注册成功');
});
```

#### 内置中间件

把所有的静态资源托管到某个目录，如果浏览器请求静态资源，自动到该目录下寻找，无需创建路由      
`app.use( express.static('托管的目录') )`

```js
const express = require('express');
var app = express();
app.listen(8080);

// 把所有的静态资源(html、css、js、图片等文件)托管到 public 目录下
// 当浏览器请求静态资源，会自动到public目录下寻找，不需要再创建单独的路由响应文件
app.use( express.static('public') );
app.use( express.static('files') );
```

#### 第三方中间件

`body-parser`中间件使用

- 下载安装
```sh
npm install body-parser
```

- 引入中间件模块

```js
const bodyParser = require('body-parser');
```

- 使用中间件

将`post`请求数据解析为对象

```js
app.use( bodyParser.urlencoded({
  extended: false // 不使用第三方的qs模块解析查询字符串为对象，而是使用querystring模块
}) )
```

- 在`post`请求的路由中

```js
req.body  // 返回对象
```

- 实例

```js
//练习: 创建web服务器，托管静态资源到public目录下，浏览器向服务器请求login.html
const express = require('express');
// const querystring = require('querystring');
// 引入body-parser中间件
const bodyParser = require('body-parser');
var app = express();
app.listen(8080);

// 托管静态资源到public目录
app.use( express.static('public') );

// 使用body-parser中间件
// 将post请求的数据解析为对象
app.use( bodyParser.urlencoded({
  extended: false  // 不使用第三方的qs模块，而是使用核心模块querystring来解析查询字符串为对象
}) );

//根据表单的请求，创建对应的路由
app.post('/mylogin', function(req, res) {
  // 获取post请求的数据

  // req.on('data', function(mydata) {
  //   console.log(mydata.toString());
	// var obj = querystring.parse( mydata.toString() );
	//   console.log(obj);
  // });
  
  // 使用插件简化版本
  console.log(req.body);
  res.send('登陆成功');
});
```

## 获取数据的方式

| 名称 | 形式 | 获取（路由）|
| ---- | ---- | ---- |
| get | `lid=1&pname=dell` | `req.query` |
| 路由传递 | `/shopping/4999` | `req.params` |
| post | 无法通过url查看 | req.body<br> 前提需要使用中间件[`body-parser`](#第三方中间件) |

## MySQL模块

```sql
-- mysql.exe -h127.0.0.1 -P3306 -uroot -p
-- mysql -uroot
INSERT INTO emp VALUES(...)
DELETE FROM emp WHERE eid=5;
UPDATE emp SET upwd='1234',sex=0 WHERE eid=4;
SELECT * FROM emp;
```

:::tip
执行删除、修改、插入返回对象，如果返回对象的属性中`affectedRows`大于0，说明执行成功。     
执行查询返回数组      
用户名和密码同时满足的结果，返回一条数据
:::

- SQL 注入

```sql
-- 示例
SELECT * FROM user WHERE uname='root' AND upwd='123456' or 1=1;
```

```js
// 创建连接对象
var connection = mysql.createConnection({})
// 建立连接
connection.connect()
//执行SQL语句
connection.query(sql语句, callback)
  err     // 可能产生的错误
  result  // SQL语句的执行结果
// 关闭连接
connection.end()
```

- MySQL 实例

```js
//引入mysql模块
const mysql=require('mysql');
//创建连接对象
var connection=mysql.createConnection({
  host:'127.0.0.1',
  port:'3306',
  user:'root',
  password:'',
  database:'tedu'  //连接后使用的数据库
});
//建立连接
connection.connect();

//执行SQL语句
connection.query('DELETE FROM emp WHERE eid=3', function(err, result) {
  // err 可能产生的错误
  // result  SQL语句的结果
  if(err) throw err;
  console.log(result);
});

// 修改编号为10的数据，性别改为1，工资改为5000
connection.query('UPDATE emp SET sex=1,salary=5000 WHERE eid=10',function (err, result){
  if(err) throw err;
  console.log(result);
});

// 查询员工表所有的数据
connection.query('SELECT * FROM emp', function(err, result){
  if(err) throw err;
  console.log(result);
});

// 往员工表中插入数据 对象
connection.query(`INSERT INTO emp VALUES(NULL,'sty',1,'1999-7-1',8000,20)`, function(err, result){
  if(err) throw err;
  console.log(result);
});

// 使用占位符，过滤传入的值，防止 SQL 注入
connection.query('INSERT INTO emp VALUES(?,?,?,?,?,?)', [null, 'abcd', 1, '1997-9-2', 8000, 20], function(err, result){
  if(err) throw err;
  console.log(result);
})

// 直接将对象插入数据库
var emp = {
  ename: 'ccc',
  birthday: '1995-8-3',
  sex: 0,
  salary: 9000
}

connection.query('INSERT INTO emp SET ?', [emp], function(err, result){
  if(err) throw err;
  console.log(result);
});

//关闭连接
connection.end();
```

## 使用连接池

```js
// 使用连接池连接
const mysql = require('mysql');
// 创建连接池对象
var pool = mysql.createPool({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: '',
  database: 'tedu',
  connectionLimit: 20 // 设置连接池的大小
});

// 执行SQL语句

// pool.query('SELECT * FROM emp',function(err,result){
//   if(err) throw err;
//   console.log(result);
// });

// 执行SQL语句，删除员工表编号为5的数据
pool.query('DELETE FROM emp WHERE eid=?', [5], function(err, result) {
  if(err) throw err;
  console.log(result);
});
```
