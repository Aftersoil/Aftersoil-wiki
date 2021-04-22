# Ajax

## URL

```
https://wiki.aftersoil.xyz/index.html
结构：协议 + 主机名称 + 目录结构 + 文件名称

URL完整的结构

<scheme>://<user>:<pwd>@<host>:<port>/<path>;

<params>?<query>#<frag>
```

## scheme

方案，协议。以哪种方式获取服务器资源

不区分大小写。常见的协议 `http`、`https`、`ftp`、`file`

![alt text](https://images.chibamai.xyz/wiki/image/ajax/scheme.png)

## `<user>:<pwd>`

登陆这个服务器的用户名和密码

## host

```
主机名称 127.0.0.1  ip地址
        www.baidu.com  域名

表示你要访问的服务器，在网络上具体的门牌号码
```

## port

```
端口号  在主机上，程序开启服务，会对应一个唯一的端口号
端口号理论最大值  0~65535   不要修改 0~1024 的端口
```

## path

路径，结构目录，资源在服务器上存放的位置

## params

参数，跟踪状态的参数  保存在`session/cookie`

## query

`get`方法提交请求时，问号后面的查询字符串

## `#<frag>`

[锚点](/frontend/HTML/HTML.html#锚点)

## HTTP协议

:::tip
- `HyperText Transfer Protocol` 超文本传输协议    
- 规范了数据是如何打包和传递的(专门用于传递`html`文件)    
- `HTTP`协议的历史，我们目前使用的版本 `http/1.1`   
:::

![alt text](https://images.chibamai.xyz/wiki/image/ajax/HTTP.png)

## web 请求原理

![alt text](https://images.chibamai.xyz/wiki/image/ajax/web.png)

## 消息/报文 `Message`

![alt text](https://images.chibamai.xyz/wiki/image/ajax/message.png)

:::tip
请求消息`Request Message`(请求起始行，请求头，请求主体)     
响应消息`Response Message`(响应起始行，响应头，响应主体)
:::

## 请求消息`Request Message`

:::tip
请求消息，客户端发送给服务器的数据块      
由三部分组成，请求起始行，请求头，请求主体
:::

## 请求起始行

`HTTP`协议规定的请求的方法和`Restful`规则中的方法对比   
`Restful API`是一种规则，利用`http`的已有的4个方法定义了4个行为，使用这个4个行为发送请求

| `HTTP`协议规定的请求的方法 | `Restful`规则中的方法 |
| :---:| :----: |
| `get` 明文传参，上限`2kb`，向服务器要数据的时候使用，无请求主体 | `get` 查数据的时候  无请求主体 后台 `req.query` |
| `post` 隐式传参,无大小限制，给服务器数据的时候使用，有请求主体 | `post` 创建(增) 有请求主体   后台 `req.body` |
| `put` 放置文件到服务器，一般会被禁用 | `put` 修改，有请求主体  后台 `req.body` |
| `delete` 把服务器上某个文件删除，一般会被禁用 | `delete` 删除，无请求主体   后台 `req.query` |

<!-- [协议版本号]()    
[请求的url]() -->

## 请求头

- `Host: www.tmooc.cn `    
客户端告诉服务器。我要访问`www.tmooc.cn`这个主机。

- `Connection: keep-alive`    
客户端告诉服务器，请开启持久链接

- `User-Agent:`     
告诉服务器，我这个浏览器的类型和版本号  

- `Accept-Encoding: gzip`   
告诉服务器，我这个浏览器可以接收的压缩文件的格式

- `Accept-Language: zh-CN`    
告诉服务器，我这个浏览器可以接收的自然语言的类型

- `Referer: http://www.tmooc.cn/`   
告诉服务器，当前的请求，是来源于哪个页面

## 请求主体

`formdata`    
`get/delete`没有请求主体    
`post/put`有请求主体    

## 响应消息`Response Message`

响应消息，服务器发送给客户端的数据块    
由三部分组成，响应起始行，响应头，响应主体

## 响应起始行

`HTTP/1.1 200 OK`

协议版本号 http/1.1

## 响应状态码

```
服务器告诉客户端，服务器的响应状态码是什么
1XX, 正在请求，提示信息
2XX, 200 响应成功
3XX, 301 永久重定向
     302 临时重定向
     304 请求未改变，命中缓存
4XX, 404 not found 请求资源不存在
     403 权限不够
     405 请求方法不被允许
5XX, 500服务器代码出错
```

原因短句，对响应状态码简短的说明

## 响应头

- `Date: Thu, 04 Jul 2019 07:48:02 GMT`  格林威治时间   
告诉浏览器，服务器响应的时间

- `Connection: keep-alive`    
服务器告诉浏览器，我已经打开了持久链接

3. `Content-Type: text/html`    
告诉浏览器，响应主体的类型是什么
```
text/html     响应回来的数据是html文本
text/css      响应回来的数据是css文本
application/javascript js文本
application/xml   xml文本
application/json  json 文本
image/jpg
image/png
image/gif
```

## 响应主体

服务器传递给浏览器的数据

总结

![alt text](https://images.chibamai.xyz/wiki/image/ajax/contemt.png)

## 缓存

![alt text](https://images.chibamai.xyz/wiki/image/ajax/cache.png)

客户端将服务器响应回来的数据    
进行自动的保存    
当再次访问的时候，直接使用保存的数据

- 缓存的优点

:::tip
- 减少冗(rong)余的数据传输，节省了客户端的流量
- 节省服务器带宽
- 降低了对服务器资源的消耗和运行的要求
- 降低了由于远距离传输而造成的加载延迟
:::

## 缓存原理，新鲜度和过期

![alt text](https://images.chibamai.xyz/wiki/image/ajax/cache-principle.png)

:::tip
- 请求--无缓存--连接服务器--存缓存--客户端渲染
- 请求--有缓存--够新鲜--使用缓存--客户端渲染
- 请求--有缓存--不新鲜--连接服务器确认是否过期--没过期--更新缓存新鲜度--客户端渲染
- 请求--有缓存--不新鲜--连接服务器确认是否过期--过期--连接服务器--存缓存--客户端渲染
:::

## 操作缓存，需要前端和后端都写代码

缓存相关的消息头    
`Cache-Control: max-age=0`   单位是`s`    
从服务器将文档传到客户端之时起    
此文档处于新鲜的秒数，是一个相对时间

## 修改请求消息头

```html
<meta http-equiv="Cache-Control" content="max-age=3600">

<!-- 语法： -->
<meta http-equiv="消息头属性名称" content="值">
```

## `HTTP` 性能优化

`HTTP` 的连接过程   
发送请求-->建立连接-->服务器处理请求-->访问资源-->构建响应-->发送响应-->记录日志

## `http`连接的性能优化

:::tip
- 减少连接创建的次数(开启持久连接)
- 减少请求的次数(代码设计更合理)
- 提高服务器端运行的速度
- 尽可能的减少响应数据的长度
:::

## 安全的`HTTP`协议，`HTTPS`

`HTTPS`，是安全版本的`http`协议   
`S:SSL`为数据通信提供安全支持

1. 客户端发送请求--->ssl层加密--->服务器接收到加密文件--->SSL层解密，得到请求明文，对请求做处理    
2. 服务器发送响应--->SSL层加密---->客户端得到加密文件--->ssl层解密，得到响应明文，解析执行响应内容

## `DOM`操作(简单`DOM`操作)

`ajax`提交请求，不使用`form`表单    
但是`form`表单自带收集数据的功能    
如果不用`form`，就没有自动收集数据的功能了    
我们需要使用`js` 的`dom`操作，手写代码，收集数据

## 完整的`JavaScript`的组成

1. js核心代码：`ECMA Script  ES6`
2. `DOM Document object Model` 文档对象模型   
  就是为了能够操作html中元素的(内容，值，样式)
3. `BOM Browser object Model` 浏览器对象模型    
  让js能够动态操作浏览器

## 使用js的dom获取页面数据

- 找到元素对象

```js
// 获取html的元素对象
var obj = document.getElementById("元素id")；
// document--->当前html文档的对象
```

- 获取/修改这个元素的值/内容

## URL 视频

<div class="video">
  <video src="https://images.chibamai.xyz/wiki/video/ajax/url.mp4" controls preload></video>
</div>
