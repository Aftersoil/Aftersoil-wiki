# JavaScript (基础)

  1) 背景知识: 历史 现状 特点  应用场景
  2) 搭建开发环境
  3) 常亮和变量
  4) 数据类型
  5) 运算符
  6)逻辑结构
  7)通用小程序
  8)函数和对象
  9)第三方框架,库

### JS 概述

  1) 1995 年 最早出现 Netscape 浏览器中 脚本语言

  2) 1997 年 ECMA 制定统一的标准 ECMAScript

  3) 2009 年 遵循CommonJS规范  开始向服务器端发展

现状

   既可以运行在客户端浏览器 也可以运行在

特点:

````
解释性语言 
弱类型语言  
跨平台  
基于对象
````

应用场景 

    网页交互
    移动APP
    桌面GUI应用
    命令行应用
    企业服务器端应用
    2D 绘图 和 3D 
    WEB VR
    WEB AR

  浏览器端  服务器端

### JS 语法规范

    1 区分大小写
      
    2 每行代码结束分号必须加
      
    3 //单行注释  /**/多行注释


  命名规范


    变量名可以 数字 字母 美元符 下划线 组成 不能以数字开头
    
    关键字和保留字不能作为变量名


  变量注意

    var a; 未赋值 为 undefined
    声明多个变量用,隔开


  常量 
     一旦声明 不可重新赋值
      const PI = 3.14

## 数据类型

  原始类型 和 引用类型
  原始类型 为数值型 字符串型 布尔型 未定义型 空

1) 数值型
分为整型 和 浮点型

    整数 4字节   浮点8字节
    八进制  以0开头
    十六进制 以0X 开头 a~f 代表 10~15 不区分大小写
    0XFF -> 255


    浮点型分为定点和指数型小数
    3140  3.14e3 指数
    -0.314 3.14e-1
    3.14 

  typeof 检测数据类型

`````js
  charCodeAt()
`````

  2) 字符串型


    数据被引号包含  不区分单双引号


  3) 布尔型

```js
true/false
```
  程序真和假
      是否登录  是否注册  是否成年


  4) 未定义型 

    声明变量 未赋值 结果 undefined

  5) 空 ———— null
    只有一个值 null 将会和引用类型一起使用

JS 加号作用

  执行+运算
  执行字符串拼接

强制转换 如果转换失败为 NAN 不是一个数字

## 数据类型转换

  1) 隐式转换
      在运行的过程中 自动的发生转换

```js
1 数字加字符串 数字被转成字符串
	2+‘3’  //23

2 数字+布尔   布尔转为数字
	3+true //4

3 布尔+字符串  字符串型
```

## 强制转换

Number()

```js
Number('2')//2
Number('2a')//NAN
Number(true)//1
Number(undefined)//NAN
Number(null)//0
```

强制转换整型

````
parseInt()
````


  常用于将字符串或数字转换为整型 其他数据返回NAN 如果转换字符串开头是非数字 则返回NaN

强制转换浮点型

````
parseFloat()
````


  同上

强制将数值型和布尔型 转换 字符串型

````js
  num.toString()
````

## 运算符

```js
表达式： 由运算符连接的操作数据 所组成的形式
运算符分为算术运算符 比较运算符 逻辑运算符 位运算符

+ - * / % ++ -- 
```

  比较运算符
    <   >   <=   >=  ==  !=  !==  ===

```js
  '3' > '10' 两个字符串比较的是首个Unicode码
  3 < '10a' //false
  3 == '10a' false
  NaN 和任何值比较(> < >= <=  == === !== !=)都返回false
```



## 逻辑运算符

```js
  &&  并且 关联两个条件都满足 结果为 true
  ||  或者 关联两个条件满足其余 结果为true
  !   非 取反
```

## 短路逻辑

  && 当第一个为false  不需要执行第二个
  || 当一个条件为true 就不需要执行第二个

以下程序是否会报错


```js
num > 5  && console.log(a);
  
num < 1 || console.log(a);
```


位运算 了解

1 10 11 100 101 110 111 1000 1001 1010

100101  



## 赋值运算

````js
= += -= *= /= %= 
````

## 三目运算


```js
一目  一个运算符连接一个数据 -- ++ ！
二目 一个运算符连接两个数据 + - * / 。。。
三目 两个运算符连接三个数据  
    true==false ?  true ? false
```

## 浏览器端函数

```js
alert()弹出框  prompt() 输入框  默认字符换类型
```

## 选择语句

### if 

```js
if(true){
  条件表达式
}

if(true)  Let num
```


```js
if (!str) 这家伙很懒 什么也没留下
```

### if else

```js
  if(true == false){
        Yas！！
  }else if(true == 1){
        Yas！！
  }else{
    No！
  }
```

### switch-case

   是一种特殊多项分支语句 
   通常是一个

```js
  switch(5){
    case 1:  
      语句1
      break;
    ....
    case 5:  
      语句5
      break;
    default:
      都为false 执行 default 后语句
  }

  break 避免语句穿透
```

## 循环

  循环: 重复执行相同的或相似代码
  循环两要素  
      循环条件 循环次数
      循环体 重复执行的相同或相似代码

### While  

````js
i = 0
  while(i <= 100){
    num += i;
    i++
  }

break 结束当前循环 不执性后续代码
continue 跳过后边循环体 继续执行增量 也就是下次循环
````

### do-While

```js
do{
  循环体
}while(循环条件)

var i = 1;
var  num = 0;

do{
  if(i %2 == 0){
    sum += i
  }
  i++;
}while(i<=10);
```


不管true 或 false 先执行一遍循环体

### for 

```js
for (var  j = 1; j<= 10 ; j++){
    控制行
      for(var i = 1,str=''; i<=8; i++){
          控制列
          str += "*";
      }
      console.log(str)
}
```

打印九九乘法表

```js
for(var  i = 1; i<=9; i++>){

    for(var j = 1,str=''; j<=i; j++>){
        str+=j+"*"+i+ "="+(j*i)+" ";
    }
}
```

## 创建函数

函数

````js
  isNaN(数据)/parseInt/parseFloat/Number/prompt/...
````

函数分为系统函数和自定义函数

function: 功能体 函数() 可以接收若干个数据 返回处理结果 用于封装反复执行的代码

(1)创建普通函数
```js
function fn(number){ //形参
	......
}
fn(666)//实参
```

形参未被赋值为 undefined 
多个参数由,隔开

return max>c?max:c;


### return 和 break 用法比较


```js
break 用于结束 switch 语句 还可以提前结束循环

return 用于函数中的返回值 可以结束函数后续代码执行

  if(){
    return  true;
  }
  return false
  //省略else
```



# 作用域

    变量或函数的可访问范围 分为两种
    
      全局作用域: 在全局使用var声明 的变量 可以在任意访问到
    
      函数作用域  在函数内var声明的变量 只能在函数内部访问的到 

   变量提升

    JS 程序执行前 会将var关键字声明的变量提前到所在作用域的最前边 但是赋值还是在原来的位置

  函数作用域

    函数的可访问范围,在全局作用域下创建的函数可以在任意位置访问 在函数作用域下创建的函数只能在函数内部访问

  函数提升

    和变量提升一样 JS程序执行前 会把function 关键字创建的函数提升到所在作用域最前边 在调用时才会执行函数体中代码



# 递归
  在函数内部调用自身 默认是一个无限循环
  使用: 要有跳出条件 结合rerun使用

```js
  1~任意整数之和

  function getSum(n){
    //跳出条件
    if(n == 1) return 1;
    return n+getSum(n-1);
  }
```


## 斐波那契数列

```js
  function fib(n){
    // 找出跳出条件 当 n 为 1 &&  n 为 2 返回 1
    if(n === 1 || n === 2){
      return 1;
    } 
      return fib(n-1)+fib(n-2)
  }

  console.log(fib(20));
  //fib(5)
  //fib(4)+fib(3)
  //fib(3)+fib(2)+fib(2)+fib(1)
```


# 函数

函数声明

```js
function fn1(){}
```


函数表达式


```js
var fn2 = function(){  }
```

### 对比 函数声明 和 函数表达式区别

    函数声明创建函数存在提升 可以任意位置创建
    
    函数表达式使用变量创建时 只存在变量提升 不存在函数提升 只能先创建再调用

### 匿名函数自调用

目的: 创建函数作用域包裹 防止污染全局

```js
(function(a,b){
    函数体
    console.log(a,b)
}(3,,5))
```

### 回调函数
把匿名函数以实参的形式传递 意味着形参就是传递的匿名函数名称


```js
function fn(a){
  // a = function(){}
  调用函数a 执行传递函数的代码
  a();
}
fn(function(){
  .....
});
```

## 全局函数

```js
parseInt()/parseFloat()

encodeURL() 对中文编码

decodeURL()/解码

isFinite() 检测一个值是否为有限值

eval() 执行字符串中的表达式

eval('1+2')
```




# 对象
  属性引用类型数据

    对象: 是一组属性(property)和方法(method)的集合

JS 中的对象

````
内置对象: JS 提供的
宿主对象： 根据不同的执行环境划分
自定义对象 自己创建的对象
````

 (1) 使用对象字面量创建对象

```js
var{
  name:'tom',
  sex:'true'
}

使用大括号创建空对象
属性名和属性值之间用冒号隔开
多组属性之间用逗号隔开
属性名中的引号可可加可不加 如果含有特殊字符必须加
```

  (2) 访问对象中的属性

```js
对象.属性名
对象['属性名']
如果访问的属性名不存在 返回undefined
```

  (3) 使用内置构造函数创建对象

```js
var  car = new Object();

car.brand = '五菱';
car.color = 'red';
car['price'] = 5000;
```

### 遍历访问

  访问对象每一个属性

```js
for(let key in  car ){
  console.log(key,car[key])
  key 代表对象中每个属性
  对象[key] 通过属性名或者对应属性值
}  
```


判断对象中是否含有某个属性
```js
对象.属性名 === undefined true-> 不存在 false->存在

对象.hasOwnPropery('属性名')  true-> 存在 false -> 不存在

‘属性名’ in 对象  true->存在  false->不存在
```


```js
if(!person.hasOwnProperty('salary')){
  person.salary=8000;
}
```

### 对象中的方法

```js
  var person = {
    ename = 'tom',
    say:function(){
      this.ename    //this 指代当前所在的对象
    }
  }
  person.say()
```






# 数组
  数组是多个元素组成的集合 每个元素都是一个数据

  1 数据字面量

```js
  var arr = ['tom','try','fuck']

  //访问
  arr[0]
  //修改
  arr[2] = 'error';
  //添加
```

  访问数组中的元素

```js
数组[‘下标’]  下标从0开始 不存在返回undefined
```


  2 内置构造函数

```js
var laptop = new Array('tom','red','let');
```


```js
var course = new Array();
course[0] = 'let';
course[1] = 'var';
```


  数组长度

````
  course.length() 
````

末尾添加

````
    course[course.length] = 'fuck'
````

### 数组的分类

    分为关联数组和索引数组
    索引数组0以上的整数作为下标
    关联数组以字符串作为下标 只能单独的添加元素

### 遍历数组

  for-in   
```js
  for(let key in 数组){
    key 下标
    数组[key] 下标对应的元素
  }

既可以遍历关联数组也可以遍历索引数组
```

   for

```js
  for(let i = 0; i<arr.length; i++){
    i[下标]
    数组[i] 下标对应的元素
  }

  只能遍历索引数组
```

### 数组API(方法)


  API 应用程序 编程接口 预定好的一些方法或者函数

```js
arr.toString();  将数组中的元素逗号组合成字符串

join('_') 将数组中的元素按照指定字符组成字符串 默认是,号
  
concat(arr1,arr2) 拼接过个数组
  
arr.slice(start,end) 截取数组中的元素 

start 开始的下标  end 结束的下标  
不包含end本身 如果负数表示倒数
end 为空 截取到最后

arr.sort() 从大到小排序
```


```js
arr.push('tom'); 末尾追加 返回长度

arr.pop(); 删除末尾一个元素 返回删除元素

unshift(); 数组开头添加 返回长度

shift(); 开头删除
```

冒泡排序  对数字从小到大

```js
var arr = [23,9,3,99,12];

外层循环控制 循环轮数

for(let i = 1; i<arr.length; i++){

    内层循环控制每轮比较次数

    for(let j = 0; j<arr.length-i;j++){
      
      如果当前元素大于下一个元素则位置交换

      if(arr[j]>arr[j+1]){
        
        var tmp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = tmp;
      
      }
    }

}

console.log(arr)
```

从小到大排序
    
```js
arr.sort(function(a,b) return a-b )  
```

从大到小排序

```js
 arr.sort(function(a,b) return b-a )  
```

### 二维数组__

```js
var pro = [
    ['tom','kiev','set'],
    ['google','fox','king']
];
```

  访问  arr[下标][下标]

## 字符串

  包装对象 目的是让原始类型向应用类型一样 具有属性和方法

  JS提供3中包装对象: String Number Boolean

```js
new String(值) 返回对象  使用和字符串无区别
String(值) 返回字符串
```

  转义字符 \'
    特殊意义转换普通字符
    \n \t

```js
str.length  获取字符串长度

str.charAt(1) 获取字符串字符

str.indexOf('s',2) 返回字符串下标 ,开始查找的位置    -1
```


    str.lastIndexOf('m') 倒着查找
    
    str.substring(start,end) 截取字符串 start 开始的下标 end结束的下标 如果end为空截取到最后 如果下标为负数自动转换为0

  对比 slice 和 substring

```js
slice 中下标为负数表示倒数 substring下标为负数自动转成0 slice 中的下标的顺序start 小于 end  substring中下标部分顺序
```

匹配模式

```js
i 不区分大小写  g 重头找到尾
str.search(/Yin Jingle/i) 不区分大小写查找  

str.match(/xiaomin/) 查找
```


```js
str.replace(/XXX/gi,'***') 查找并替换
```



# Math 对象
```js
不需要创建直接使用
  Math.PI 
  Math.ads()  绝对值
  Math.ceil() 上取整
  Math.floor() 下取整
  Math.round() 四舍五入
  Math.max() 最大值
  Math.min() 最小值
  Math.pow(5,2)  5^2
  Math.random()  默认0~1 

Math.random()*10  = 0~9.9 
向下取整 
```


# data 对象
  1 创建Data对象
```js
  new Date('2019/5/9 10:48:50' )
  new Date() 存储当前系统时间
  new Data(24*60*60*100) 存储距离计算机元年毫秒数

  var d = new Date()
  d.getFullYear()  年
  d.getMonth()+1  月
  d.getData()   日
  d.getHours()  小时
  d.getMinutes()  分钟
  d.getSeconds()  秒
  d.getMillisecodes()  秒
  d.getDay()  星期
  d.getTime 距离计算机元年毫秒数
```


```js
  if(moth<10){
    moth=‘0’+moth;
  }
```


```js
  d.toLocaleString() 获取本地日期时间
  d.toLocaleDataString() 本地日期
  d.toLocaleTime() 获取本地时间time
```

距离 目标日期还有多少天 多少 时 分 秒

```js
  var target = new Date('2020/3/18');
  var now = new Date();

  两个日期相差毫秒数
  target.getTime()-now.getTime()
  
  var d = target-now
```


```js
  秒
  d = Math.floor(d / 1000);

  天
  var day = Math.floor(d/(24*60*60));

  去除天数 小时
  var hour =  d%(24*60*60);//不满24小时
  
  换算小时
  hour = Math.floor(hour/3600)

  去除小时
  获取分钟
  var minute = d % 3600
  minute = floor(minute/60)

  去除分钟获取相差秒数
  var second = d % 60;
```

```js
获取当前日期再加3 替换原来日期
d1.setDate(d1.getData()+3)
```



# Number 对象
```js
new Number(值)  将数据转换为数值型 返回对象
Number(值) 将数据转为数值型 返回数值
Number.MAX_VALUE 最大值
Number.MIN_VALUE 最小值
to.Fixed(n) 取小数点后n位
toString(n) 将数值转为字符串 同时可以设置禁止 n 就是 
```

# Boolean
```js
new = Boolean()  返回对象
Boolean() 返回布尔型
!0
```


# 错误处理

```js
语法错误(SyntaxError)  错误使用中文符号 缺少括号
引用错误(ReferenceError) 使用未声明变量
类型错误(TypeError) 错误使用小括号
范围错误(RangeError)  参数使用超出范围
```

第一种错误出现后 一行代码都不执行 

其他错误出现后 会影响后续代码执行


自定义错误

```js
var num = '10';
if(isNaN(num)){
  throw '请提供一个数字';
}
```


不影响后续代码执行
      
```js
  try{
    if(num>10){
      throw '太小了'
    }

  }catch(err){ //只有try 代码报错才会执行catch中的代码

    console.log(err)

  }
```























# Date


```js
计算2020年1月24日 距离除夕还有 ？天 ？ 时？ 分？ 秒？
var  start = new Date();
var traget = new Date('2020/1/24');
//计算两个日期相差的毫秒数
var d = traget - start;
// 相差的值单位转为秒
var d = Math.floor(d/1000);
console.log(d);  

// 相差的天数  每天除一天  24*60*60
var day = Math.floor(d/(24*60*60));
//  去除天数  相差的小时
var hours = d%(24*60*60);
//  相差的小时				/3600
var hour = Math.floor(hours/(60*60))
// /去除小时  相差的分钟 /3600
var minute = d%(60*60);
//  计算相差的分钟
var minute = Math.floor(minute/60);
// 相差秒钟
var second = d%60;

console.log(
'距离2019年除夕还有'+
tow(day)+'天'+
tow(hour)+'时'+
tow(minute)+'分'+
tow(second)+'秒'
);

function tow(n){
  /*	
  if(n<10){
  return	'0'+n;
  }else{
  return	n;
  }
  */
  return	 n<10 ? '0'+n : n;
}
```
````````javascript

# Js核心代码 


    1  js 核心代码 ECMA Script ES6
    
    2 DOM Document object Model  文档对象模型
        就是为了能够操作html中元素的（内容 值 样式）
   
    3 BOOM Browser object Model 浏览器对象模型
        浏览器对象模型 让Js

    2 js 的 dom 获取页面数据
      1 找到元素对象
          获取html 元素对象
          var obj=document.getElementBId("元素id")；
          document --- > html 文档对象	

        var put = document.getElementById("uname");




````````