# 字符串 API

## 数组 API

对数组元素排序，默认是按照Unicode码从小到大排序

```js
sort(function(a, b){
  return a-b;    //按照数字从小到大排序
  //return b-a;  //按照数字从大到小排序
});

push()   // 往数组的末尾添加元素，返回数组的长度
pop()    // 删除数组末尾的元素，返回删除的元素
pop()    // 删除数组末尾的元素，返回删除的元素
shift()  // 删除数组开头的元素，返回删除的元素
```

::: details 练习
- 创建数组，包含有多个员工数据(对象)，包含属性有编号、姓名、工资
:::

## 二维数组

数组中的每个元素也是数组

```js
var  arr = [ 
  [],
  [],
  [],
  ... 
]
// 访问二维数组中的元素   arr[下标][下标]
```

## 字符串

包装对象: 目的是让原始类型像引用类型一样，具有属性和方法。    
JS提供了3中包装对象: `String、Number、Boolean`

将任意数据转为字符串

```js
new String(值)  // 返回对象  使用和字符串没有区别
    String(值)  // 返回字符串

//包装成字符串对象
var str1 = new String(3);
//console.log(str1, typeof str1);
//console.log(str1 + 'b');
//将任意的数据转为字符串
var str2=String(true);
//console.log(str2, typeof str2);
var str3 = 'a';
```

## 转义字符

转换字符的意义    
用法：放在要转换意义的字符前边
```js
//  \'   将特殊意义的引号转成普通字符
//  \n  将字符n转换成换行符
//  \t   将字符t转换成制表符(tab键效果)

//转义字符  \
console.log('It\'s a dog');
console.log('hello \no world');
console.log('a\tb');
console.log('welcome to chi\\na');
```

## 字符串 API

```js
var str = 'javascript';


// 获取字符串的长度
length
console.log( str.length );
console.log( str[0] );


// 获取下标对应的字符，也可以使用数组形式  字符串[下标]
charAt() 
console.log( str.charAt(1) );
// 遍历字符串，获取每个字符
for(var i = 0; i < str.length; i++){
  console.log( str.charAt(i) )
}


// 查找某个字符串出现的下标，value要查找的字符串，start开始的下标，默认是0，如果找不到返回-1
indexOf(value,start) 
// 获取某个字符串的下标
console.log( str.indexOf('a',2) );


// 查找某个字符串最后一次出现的下标，找不到返回-1
lastIndexOf(value)  
// 倒着查找
console.log( str.lastIndexOf('m') );


// 将英文字母转大写
toUpperCase()  
//转大写
console.log( str.toUpperCase() );


// 将英文字母转小写
toLowerCase()
//转小写
console.log( str.toLowerCase() );


// 截取字符串，start开始的下标，end结束的下标，不包含end本身，end为空截取到最后，负数表示倒数。
slice(start, end) 
// 截取字符串
console.log( str.slice(4) );
console.log( str.slice(4,7) );
console.log( str.slice(-3,-1) );


// 截取字符串，start开始的下标，count截取的长度，如果count为空，截取最后；start为负数表示倒数。
substr(start, count)  
//按长度来截取
console.log( str.substr(4,3) );
console.log( str.substr(4) );
console.log( str.substr(-3,2) );


// 截取字符串，start开始的下标，end结束的下标，如果end为空截取到最后，如果下标为负数自动转成0。
substring(start, end) 
console.log( str.substring(4) );
console.log( str.substring(4,7) );
//负数转为0
console.log( str.substring(-3,-1) );
console.log( str.substring(3,1) );


/**
 * 对比slice和substring
 * slice中下标允许使用负数表示倒数，substring下标负数自动转成0；slice中下标的顺序start小于end，substring中下标大小不分顺序。
 */


// 将数组按照指定的分割符转为字符串
join(sep)
var arr=['a','b','c'];
// 将数组按照指定的分割符转为字符串
console.log( arr.join('-') );


// 将字符串按照指定的字符分割成数组，sep是指定的字符
split(sep)  
var str='a-b-c';
console.log( str.split('-') );
```

::: details 练习
- 声明变量保存字符串，判断该字符串是否为邮箱格式(@)，如果有打印'合法的邮箱'，否则打印'非法的邮箱'
- 声明变量保存4个英文字母，使用无限循环弹出提示框，输入验证码(不区分大小写)，如果输入正确，结束循环。
- 声明变量保存邮箱，分别截取用户名和服务器名称
- 声明变量保存省份证号，截取出生的年月日和性别，打印 '小然的生日为1980年11月11日 性别男'
- 截取字符串，start开始的下标，end结束的下标，如果end为空截取到最后，如果下标为负数自动转成0。
- 使用split获取邮箱的用户名和服务器名称
:::

## 匹配模式(掌握)

作用：用于查找、替换字符串

```js
var str='xiaoran产于上世纪七八十年代,Xiaoran至今性能依然强劲,xiaoran一顿饭能吃10盘羊肉,XIAORAN是一个美男子';

// indexOf
console.log( str.search('XIAORAN') );

// 用于查找满足条件的第一个的下标，类似于indexOf，如果找不到返回-1   /xiaoran/i  
search(value)  
console.log( str.search(/XIAORAN/i) );

// 用于查找满足条件的字符串，返回一个数组
match(value)  
console.log( str.match(/XIAORAN/ig).length );

// 查找并替换，value1要查找的字符串，value2要替换的字符串
replace(value1,value2)  
console.log( str.replace(/xiaoran/gi,'***') );

// 忽略大小写
i->ignore  
// 全局查找
g->global  
```

## Math对象

不需要创建，可以直接使用

```js
PI        // 取圆周率
abs()     // 取绝对值
floor()   // 向下取整
ceil()    // 向上取整
round()   // 四舍五入取整
max()     // 取一组数字最大
min()     // 取一组数字最小
pow()     // 取 x 的 y 次幂
random()  // 取随机数   >=0   <1

//获取圆周率
console.log( Math.PI );

// 取绝对值 
console.log( Math.abs(18-21) );

// 向上取整
console.log( Math.ceil(5.01) );

// 向下取整
console.log( Math.floor(4.999) );

// 四舍五入取整
console.log( Math.round(4.49) );

// 取一组数字的最大值
console.log( Math.max(23, 9, 78, 45, 6) );

// 取一组数字的最小值
console.log( Math.min(23, 9, 78, 45, 6) );

// x 的 y 次幂
console.log( Math.pow(5,2) );

// 取随机  >=0  <1
console.log( Math.random() );
```

## 课后任务

::: details 练习
- 将一句英文每个单词的首字母大写，其余小写 
- 随机产生 0~9 之间的一个整数
- **预习Date对象**
:::
