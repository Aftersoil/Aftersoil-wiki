# AJAX XHR

## 简单的dom操作

由于`ajax`不使用`form`
而`form`具有自动收集数据的功能。
不使用`form`，就需要使用`dom`手写代码收集数据

- 获得承载数据的元素对象

```js
<input type="text" id="uname">
var obj = document.getElementById("uname ");
```

- 通过这个元素对象获取/修改数据

```js
// 1.input对象的数据，是使用value属性
obj.value = "123";   // 设置
var res = obj.value; // 获取

// 2.所有的双标签，使用innerHTML属性 获取/修改 数据
obj.innerHTML="123";     // 设置
var res = obj.innerHTML;  // 获取
```

- ES6的简化

ES6提出，可以使用元素的`id`直接代表整个元素的对象   
所以，代码简化为如下
```js
<input type="text" id="msg">
<h4 id="h"></h4>

h.innerHTML = msg.value; 
```

- `innerHTML`详解

使用`innerHTML`可以动态给双标签添加内容
这里的内容，指可以添加其他元素

- 事件

通过用户的行为来激发的操作，就是事件

```js
onclick  // 单击
onblur   // 焦点移除事件，元素失去焦点，马上调用js
onfocus  // 获取焦点事件，元素获得焦点，马上调用js
```

## ajax

## 同步 `Synchronous`

在一个任务进行时，不能开启其他任务    
同步访问：浏览器在向服务器发送请求，只能等待服务器的响应，不能做其他事情    

出现场合
:::tip
1. 地址栏输入`url`，访问页面
2. `a`标签的跳转
3. `form`提交
:::

## 异步`Asynchronous`

在一个任务开启时，可以同时进行其他任务    
异步访问：浏览器向服务器发送请求时，用户还能在页面上做其他操作    

出现场合
:::tip
1. 用户名注册的验证
2. 百度的搜索建议
3. 股票软件
:::

## 什么是 Ajax

`Asynchronous  JavaScript  and  xml`
异步的  `js ` 和  `xml`(数据承载方式)   
本质：使用`js`提供的异步对象`XMLHttpRequest`    
异步的向服务器提交请求    
并且接受服务器响应回来的数据

## 使用ajax

1. [创建异步对象](#创建异步对象)
2. [创建请求](#创建请求)
3. [发送请求](#发送请求)
4. [接收响应数据](#接收响应数据)

## 创建异步对象

```js
var xhr = new XMLHttpRequest();
```

## 创建请求

```js
xhr.open(method, url, isAsyn);
xhr.open("get", "http://127.0.0.1:8080/login", true);

// method: 请求的方法，注意必须是字符串的形式"get" "post"
// url: 请求的url，注意必须是字符串
// isAsyn: 是不是要使用异步，boolean值，true/false
```

## 发送请求

```js
xhr.send(formdata);
// 注意，get方法，没有formdata请求主体
// 所以在使用get方法时，这里的参数可以不填写，也可以写null
```

## 接收响应数据

```js
xhr.readyState // 属性

// 用于表示xhr对象的请求状态，一共5个状态
//   0：请求尚未初始化
//   1:  已经打开服务器连接，正在发送请求
//   2：接收响应头
//   3：接收响应主体
//   4：响应数据接收完毕
```

## Ajax 请求代码

```js
function show(){
  //1.创建异步对象
  var xhr = new XMLHttpRequest();
  console.log(xhr);
  
  //4.绑定监听，接收响应
  xhr.onreadystatechange=function(){
    // onreadystatechange全程会调用4次
    // 我们关注xhr.readyState==4
    // 目的是，我们只要最后一次
    if(xhr.readyState == 4&&xhr.status == 200){
      //接收响应
      var result = xhr.responseText;
    }
  }

  //2.打开连接，创建请求
  xhr.open("get", "http://127.0.0.1:8080/login", true);

  //3.发送请求
  xhr.send(null);
}
```

## 错误总结

- 跨域错误

![alt text](https://images.chibamai.xyz/wiki/image/ajax/access.png)

会出现跨域错误。要使用服务器开启页面的方式打开

- 404，接口或者资源位置出错，前后台代码都需要排查

- 500 服务器代码错误，黑窗口会给你提示

- 不显示不报错----------一步一打桩

## 课后任务

::: details 练习
- 使用dom动态完成下面表格，数据。   
  ![alt text](https://images.chibamai.xyz/wiki/image/ajax/exercise.png)
:::

