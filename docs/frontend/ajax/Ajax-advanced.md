# Ajax 高级

## 代参数的`get`方法

```js
xhr.open("get", url, true)
url="/demo/get_login?uname="+$uname+"&upwd="+$upwd;


function	login(){
 //获取页面上用户的用户名和密码
 var $uname = uname.value;
 var $upwd = upwd.value;
 //使用ajax访问服务器，并接受请求
 //1.创建xhr异步对象
 var xhr= new XMLHttpRequest();
 //4.绑定监听，接受响应
 xhr.onreadystatechange = function() {
  if(xhr.readyState == 4 && xhr.status == 200){
     var result = xhr.responseText;
     alert(result);
   }
  }

 //2.创建请求，打开连接
 xhr.open("get","/demo/get_login?uname=" + $uname + "&upwd=" + $upwd, true);
  //3.发送请求
  xhr.send();
}
```

## `restful`规则的接口

`restful`接口定义规则     
/接口名称/:参数值&:参数值

:::warning
注意，使用`restful`不能把非空验证放到后台。
:::

而要把非空验证在前端完成

## `post`传参

:::warning
注意
- `xhr.send(formdata)`必须带着请求主体发送    
  - 请求主体就是一个字符串    
  - `var formdata="uname="+$uname+"&upwd="+$upwd;`    
- 在`xhr.open`和`xhr.send`之间，设置请求头信息    
  - 把`content-type`设置为可以发送特殊字符    
  - `xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");`
:::

![alt text](https://images.aftersoil.xyz/wiki/image/ajax/post.png)

## `json`解析

`json`是以`js`对象，或者`js`对象数组为表现形式字符串

```js
// json 串
// JavaScript object notation
// js     对象  表象方式
// json 的来源


// 1.可以手写json串
var str=" { 'uid': 123 } ";

// 2.当服务器操作数据库之后，得到的result，在传递给前端之后自动就变成一个json
```

## `json`解析

:::tip
- 把json字符串转换成js对象/js对象数组，这个行为就叫json解析
- 做json解析的目的，因为要对数据，使用js的api进行处理
:::

## `json`字符串的格式

:::tip
- `json`中用一对`{}`来表示一个对象
- `json`中所有的属性名称，必须使用双引号括起来
  使用单引号，不会发生错误，但是建议使用双引号
- `json`中的属性值，如果是字符串，也要带双引号
- 整个`json`是一个字符串，所以最外层要是用单引号包裹
:::

## `json`解析语法

```js
var arr = JSON.parse(result);
// arr 就是一个js的对象数组，可以使用js的数组操作模式了
```

## `xml`解析

```
eXtensible markup language
可拓展的   标记    语言
```
所有的标签，属性都是自己定义    
`xml`就是做数据传递的，不用于数据展示

## `xml`语法

:::tip
- 首行做版本声明
  - `<?xml version="1.0" encoding="utf-8"?>`
- `xml`标记，都是自己命名，只有双标记，没有单标记
- `xml`标记，严格区分大小写，开始标记和结束标记必须一致
- 每个`xml`文档，有且只有一对根标记
:::

![alt text](https://images.aftersoil.xyz/wiki/image/ajax/xml.png)

## 错误总结

- 数据库没有开启

![alt text](https://images.aftersoil.xyz/wiki/image/ajax/database.png)

- 缺少括号

![alt text](https://images.aftersoil.xyz/wiki/image/ajax/kuohao.png)

出乎意料的结尾，login这个方法未定义   
说明login方法中缺少}

- 符号错误

![alt text](https://images.aftersoil.xyz/wiki/image/ajax/list.png)
