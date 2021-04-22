# 数组

## 判断对象中是否含有某个属性

```js
对象.属性名 === undefined  true-> 不存在  false-> 存在
对象.hasOwnPropery('属性名')  true-> 存在   false-> 不存在
'属性名'  in  对象   true-> 存在   false -> 不存在

// 练习
var obj = {
  name: '张三',
  age: 18
};

obj.hasOwnProperty('name'); // --> true
obj.hasOwnProperty('id');   // --> false
```

## 对象中的方法

```js
var person={
  ename: 'tom',
  say: function(){
    // 访问当前对象的属性名，this指代当前所在的对象
    this.ename    
  }
}

// 调用对象中的方法
person.say()   
```

::: details 练习
- 创建一个圆对象，添加属性半径和圆周率，添加计算周长和面积两个方法，返回计算的结果。最后调用
:::

## 数组

是有多个元素组成的集合，每个元素就是一个数据

## 创建数组

- 常规方式

```js
// 创建数组并给数组元素赋值
var array = new Array();
array[0] = "Aftersoil";
array[1] = "wiki";
array[2] = "Sitio";
```

- 数组字面量
```js
// 字面-隐式创建
var array = ["Aftersoil", "wiki", "Sitio"];
```

::: details 练习
- 创建数组，包含有多个商品的名称; 创建数组，包含多个城市的名称
:::

```js
// 访问数组中的元素
数组[下标]   // 下标从 0 开始，不存在的元素返回 undefined
```

- 内置构造函数
```js
var array = new Array("Aftersoil", "wiki", "Sitio");

// new Array(3)  初始化元素个数为3，可以添加更多个元素
```

::: details 练习
- 创建数组，包含有若干个图书名称；创建数组，初始化长度为5，添加5个场上位置。
:::

- 创建数组并给数组元素赋值

```js
数组.length  // 获取数组中元素的个数
// 在数组的末尾添加元素   
// 数组[ 数组.length ] = 值;
```

::: details 练习
- 创建一个空数组，使用数组长度添加多个国家名称
:::

- 数组的分类

```js
// 分为关联数组和索引数组
// 索引数组以0以上的整数作为下标
// 关联数组以字符串作为下标，只能单独的添加元素
```

## 遍历数组

## for-in

```js
for(var key in 数组){
  // key  下标
  // 数组[key]  下标对应的元素
}

// 既可以遍历关联数组，也可以遍历索引数组

var array = ["Aftersoil", "wiki", "Sitio"];
for(var key in array){
  console.log(key)
  console.log(array[key])
}
```

## 循环

```js
for(var i=0;i<数组.length;i++){
  // i 下标
  // 数组[i]  下标对应的元素
}

// 只能遍历索引数组
```

::: details 练习
- 创建数组，包含有多个国家，把所有的'中国'改为'china'
- 创建数组，包含有多个国家，查询出中国出现的次数
- 创建数组，包含多个数字，获取数组中的最大值
- 创建函数getAvg，传递一个参数(数组)，返回平均值。
:::

## 数组API(方法) 

```js
// API 应用程序编程接口，预定义好的一些方法或者函数

// 将数组中的元素按逗号组合成字符串
toString()         

// 将数组中的元素按指定的字符组合成字符串，默认是逗号
join('-')          

//拼接多个数组
concat(arr1,arr2)  

// 截取数组中的元素，start开始的下标，end结束的下标，不包含end本身，如果是负数，表示倒数。end为空截取到最后。
slice(start,end)   

// 删除数组中的元素，start开始的下标，count删除的长度，value删除后补充的元素；count为空删除到最后，start为负数表示倒数；返回删除的元素，原数组会发生变化。
splice(start, count, value1,value2..)  
```

::: details 练习
- 创建数组a~g组成，每个字符是一个元素；分别截取cd，f，b；把截取的结果拼接成一个新数组
- 创建数组a~h，每个字母是一个元素，删除de，替换f为m，在下标为1的位置插入字母z
:::

## 数组练习视频

### 视频 1

<div class="video">
  <video src="https://images.chibamai.xyz/wiki/video/js-array/1.mp4" controls preload></video>
</div>

### 视频 2

<div class="video">
  <video src="https://images.chibamai.xyz/wiki/video/js-array/2.mp4" controls preload></video>
</div>

### 视频 3

<div class="video">
  <video src="https://images.chibamai.xyz/wiki/video/js-array/3.mp4" controls preload></video>
</div>

## 课后任务

::: details 练习
- 使用遍历数组，实现翻转数组中元素
- 使用冒泡排序将数组中的元素从小到大排序 
  - 冒泡排序
- **预习字符串API**
:::
