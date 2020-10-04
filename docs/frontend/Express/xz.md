# xz 项目(后端)

使用技术 [NodeJS](/rearend/MySQL/)，[Express](/frontend/Express/)，[MySQL](/rearend/MySQL/)     
xz 项目后端接口开发，[注册路由](#注册路由)，[登陆路由](#登陆路由)，[检索用户](#检索用户)，[修改用户](#修改用户)，[用户列表](#用户列表)，[删除用户](#删除用户)

**[用户后端操作代码](/other/download/Rear-end.html)**

## app.js

```js
const express = require('express');
// 引入body-parser中间件
const bodyParser = require('body-parser');
// 引入用户路由器
const userRouter = require('./routes/user.js');
// 创建web服务器
var app = express();
// 监听端口
app.listen(8080);

// 托管静态资源到public目录下
app.use( express.static('public') );

// 使用body-parser中间件
app.use( bodyParser.urlencoded({
  extended: false
}) );

// 使用路由器，挂载到/user下
// /user/reg
app.use('/user', userRouter);
```

- [数据库连接池](/frontend/Express/middleware.html#使用连接池)

## 使用路由

```js
const express = require('express');
// 引入连接池模块
const pool = require('../pool.js');
// 创建路由器对象
var router = express.Router();
```

## 注册路由

```js
router.post('/reg', function(req, res) {
  // 获取post请求的数据
  var obj = req.body;
  console.log(obj);

  // 验证每一项是否为空
  // 如果用户名为空
  if(!obj.uname){
    res.send({
      code: 401,
      msg: 'uname required'
    });

	  // 结束函数执行
	  return;
  }

  if(!obj.upwd){
    res.send({
      code: 402,
      msg: 'upwd required'
    });
    
    return;
  }

  if(!obj.phone){
    res.send({
      code: 403,
      msg: 'phone required'
    });

	  return;
  }

  if(!obj.email){
    res.send({
      code: 404,
      msg: 'email required'
    });

	  return;
  }
  
  // 执行SQL语句
  pool.query('INSERT INTO xz_user SET ?',[obj],function(err,result){
    if(err) throw err;

    console.log(result);
    // 如果插入成功
	  if(result.affectedRows > 0) {
	    res.send({
        code: 200,
        msg: 'reg suc'
      });
    }
    
  }); 
});
```

## 登陆路由

```js
router.post('/login', function(req, res) {
  // 获取数据
  var obj = req.body;
  console.log(obj);

  // 验证数据是否为空
  if(!obj.uname){
    res.send({code:401,msg:'uname required'});
	  return;
  }
  
  if(!obj.upwd){
    res.send({code:402,msg:'upwd required'});
	  return;
  }

  // 执行SQL语句
  //查询是否有用户名和密码同时的数据
  pool.query('SELECT * FROM xz_user WHERE uname=? AND upwd=?',[obj.uname, obj.upwd], function(err, result) {
    if(err) throw err;
    console.log(result);
  
    // 判断登陆成功还是失败
    if(result.length > 0){
      // 有元素，成功
      res.send({
        code: 200, 
        msg: 'login suc'
      });
    }else{
      // 没有元素，失败
      res.send({
        code: 201,
        msg: 'uname or upwd error'
      });
    }

  });
});
```

## 检索用户

```js
router.get('/detail', function(req, res) {
  // 获取数据
  var obj = req.query;
  console.log(obj);

  // 验证数据是否为空--15:14
  if(!obj.uid){
    res.send({
      code: 401,
      msg: 'uid required'
    });

	  return;
  }

  // 执行SQL语句
  pool.query('SELECT * FROM xz_user WHERE uid=?', [obj.uid], function(err, result) {
    if(err) throw err;
    res.send(result);
  });
});
```

## 修改用户

```js
router.post('/update', function(req, res) {
  // 获取数据
  var obj = req.body;
  console.log(obj);

  // 验证数据为空
  // 遍历对象，访问每个属性
  var i = 400;
  for(var key in obj){
	  i++;
    console.log(key, obj[key]);
	  // 如果属性值为空，提示属性名必须
    if(!obj[key]){
      res.send({
        code: i, 
        msg: key + ' required'
      });

      return;
	  }
  }

  // 执行SQL语句
  // 取出用户编号
  var uid = obj.uid;
  // 删除对象中的编号属性
  delete obj.uid;
  console.log(obj);

  pool.query('UPDATE xz_user SET ? WHERE uid=?', [obj, uid], function(err, result) {
    if(err) throw err;
    console.log(result);

    //判断是否修改成功
    if(result.affectedRows>0){
      res.send(
        {code: 200,
        msg: 'update suc'
      });
    }else{
      res.send(
        {code: 201,
        msg: 'update error'
      });
    }

  });
});
```

## 用户列表

```js
router.get('/list', function(req, res) {
  // 获取数据
  var obj = req.query;
  console.log(obj);

  // 验证为空，设置默认值
  var count = obj.count;
  var pno = obj.pno;

  if(!count){
    count = 2;
  }

  if(!pno){
    pno = 1;
  }

  // 转整型
  count = parseInt(count);
  pno = parseInt(pno);

  // 计算开始
  var start = (pno-1) * count;

  // 执行SQL语句
  pool.query('SELECT * FROM xz_user LIMIT ?,?', [start, count], function(err, result) {
    if(err) throw err;
    res.send(result);
  });
});
```

## 删除用户
```js
router.get('/delete', function(req, res) {
  // 获取数据
  var obj = req.query;
  console.log(obj);

  // 是否为空
  if(!obj.uid){
    res.send({
      code: 401,
      msg: 'uid required'
    });

	  return;
  }

  // 执行SQL语句
  pool.query('DELETE FROM xz_user WHERE uid=?', [obj.uid], function(err, result) {
  
    if(err) throw err;
    console.log(result);
    
    // 判断是否删除成功
    if(result.affectedRows > 0){
      res.send(
        {code: 200,
        msg: 'del suc'
      });
    }else{
      res.send(
        {code: 201,
        msg: 'del err'
      });
    }

  });
});


//导出路由器对象
module.exports=router;
```

## 课后任务

::: details 练习
- 商品模块，[商品数据表](/other/download/Rear-end.html)，[商品接口说明文档](/other/download/Rear-end.html)
  ```
  列表   详情(检索)   添加   修改  删除
  ```
:::
