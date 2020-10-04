# Date 对象

用于对日期时间的存储和计算

## 创建Date对象

```js
var d = new Date('2019/6/19 10:48:50')
var d1 = new Date(2019,5,19,10,48,50) // 1月~12月范围 0~11
var d2 = new Date()  // 存储当前的系统时间
var d3 = new Date(24*60*60*1000)  // 存储距离计算机元年毫秒数
```

## 获取存储的日期时间

```js
var d = new Date('2019/6/19 10:56:30');
//获取存储的日期时
console.log( d.getFullYear() );
console.log( d.getMonth()+1 );// 0~11
console.log( d.getDate() );
console.log( d.getHours() );
console.log( d.getMinutes() );
console.log( d.getSeconds() );
console.log( d.getMilliseconds() );// 毫秒
console.log( d.getDay() );// 0~6  星期日~星期六
console.log( d.getTime() );// 获取距离计算机元年毫米数
```

## 获取本地字符串格式

```js
toLocaleString()       // 2019-6-19 14:09:30
toLocaleDateString()   // 2019-6-19
toLocaleTimeString()   // 14:09:30

var d = new Date();
console.log( d.toLocaleString() );
console.log( d.toLocaleDateString() );
console.log( d.toLocaleTimeString() );
```

## 修改日期时间

```js
setFullYear  / setMonth / setDate / setHours / setMinutes
setSeconds / setMilliseconds / setTime
// setTime使用后，所有的日期时间都有可能会被覆盖


var d1 = new Date('2019/6/19 15:20:30');
//修改年份
d1.setFullYear(2018);
d1.setMonth(8);// 0~11
//三天后
// 获取当前的日期，再加3，替换原来的日期
d1.setDate( d1.getDate() + 3 );

console.log(d1)
```

## 复制(克隆)Date对象

```js
var d1 = new Date();
var d2 = new Date(d1);// 克隆d1对象
```

## Number 对象

```js
// 将数据转为数值型，返回对象
new Number(值)  

// 将数据转为数值型，返回数值
Number(值)

// 最大值
Number.MAX_VALUE

// 最小值
Number.MIN_VALUE   

// 取小数点后n位
toFixed(n)    

// 将数值转为字符串，同时可以设置进制，n就是设置的进制，2 8 16...
toString(n)  


var num1 = 2;
var num2 = Number(true);
//构造函数
var num3=new Number(null);
console.log(num3,typeof num3);
console.log(num3+2);

console.log(Number.MAX_VALUE);  // 最大值
console.log(Number.MIN_VALUE);  // 最小值

var num4 = 2*3.14*5
var num4 = 0.1+0.2;
var num5 = 2999;
console.log(num5.toFixed(2)); // 取小数点后n位

var num6=13; // 0xd
console.log( num6.toString(2) );
```

## Boolean 对象

```js
// 将数据转为布尔型，返回对象
new Boolean(值)  

// 将数据转为布尔型，返回布尔型
Boolean(值)  

// 转数据隐式转换为布尔型
!!值   


var b1=true;
//NaN 0 '' undefined null
var b2 = Boolean(NaN);
var b3 = Boolean([]);
var b4 = new Boolean(3);
var b5 =!![];// 隐式转换为布尔型

console.log(b5);
console.log(b4, typeof b4);
```

## 错误处理

:::tip
[语法错误](#语法错误)`(SyntaxError)`: 错误的使用了中文符号，缺少括号   
[引用错误](#引用错误)`(ReferenceError)`: 使用了未声明的变量    
[类型错误](#类型错误)`(TypeError)`: 错误的使用了小括号()   
[范围错误](#范围错误)`(RangeError)`: 参数的使用超出了范围    
[自定义错误](#自定义错误) `throw` '自定义的错误信息'    
说明：第一种错误出现后，一行代码都不执行；其它的错误出现后，会影响后边代码的执行。
:::

## 语法错误

```js
// JS程序执行前，检查是否有语法错误
console.log(1);

//语法错误
var a = 1；
```

## 引用错误

```js
// 引用错误，使用未声明的变量
console.log(a);
var b = 2;
var person = {
 ename:'tom'
}

b();
// 类型错误,错误的时候使用了括号
person.ename();
```

## 范围错误

```js
var arr = new Array(-3);
```

## 自定义错误

```js
var num = 'abc';
// 如果num不是数字，抛出自定义错误
// 先调用Number转数值 NaN
if( isNaN(num) ){ 
  // 判断是否为NaN not a number
  throw '请提供一个数字';
}
```

## 处理错误

```js
try{
  // 可能出现的错误（类型/引用/范围/自定义错误）
}catch(err){ 
  // 如果try中代码保错，才会执行这里边的代码
  // 会把错误信息交给err
  // 不会再阻止代码往后执行
}

// 处理错误
// 要求提供的数字5~10之间
var num = 7;
// 尝试执行
try{
  if(num > 10){
    throw '太大了';
  }
}catch(err){
  // 只有try中的代码报错，才会执行catch中的代码，错误信息交给err
  console.log(err + '：请输入一个5到10之间的数字');
}

console.log(2);
```

::: details 练习
- 计算2019年6月21日距离国庆节还有?天?时?分?秒
:::
