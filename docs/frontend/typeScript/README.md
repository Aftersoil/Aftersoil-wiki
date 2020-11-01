# TypeScript

**简介**

TypeScript 其实就是 JavaScript 的超集，也就是说 TypeScript 是建立在 JavaScript 之上的，最后都会转变成 JavaScript。

**必备依赖**

`node.js`

1. **全局安装 typeScript**

   ````bash
   npm install typescript -g || yarn global add typescript
   ````

2. **建立项目目录和编译 TS 文件**

   `Demo1.ts`

   ````typescript
   function kiven() {
     let web: string = "Hello World";
     console.log(web);
   }

   kiven();
   ````

   cmd

   `tsc Demo1.ts`  转换

   `node Demo1.js`  输出

3. **ts-node 的安装和使用**

   全局安装

   ````bash
   npm install -g ts-node
   ````

   命令中直接输入如下命令

   ```typescript
   ts-node Demo1.ts
   ```

   使用`ts-node`就可以直接看到编写结果



## 数据类型

- Undefined :

  赋予任何值的时候，他就是Undefined类型

  `````js
  //声明数值类型的变量age，但不予赋值
  var age:number
  console.log(age)
  `````

- Number:数值类型;

  ````typescript
  var age:number = 18
  var stature:number = 178.5
  console.log(age)
  console.log(stature)
  ````

- string : 字符串类型;

  ````typescript
  var kiven:string = "kiven.com"
  console.log(kiven)
  ````

- Boolean: 布尔类型；

  ````typescript
  var b:boolean = true
  var c:boolean = false
  ````

- enum：枚举类型；

  变量的结果是固定的几个数据时

  ````typescript
  enum REN{ nan , nv ,yao}
  console.log(REN.yao)  //返回了2，这是索引index，跟数组很想。
  ````

  枚举赋值

  ````typescript
  enum REN{
      nan = '男',
      nv = '女',
      yao= '妖'
  }
  console.log(REN.yao)  //返回了妖 这个字
  ````

- any : 任意类型，一个牛X的类型；

  程序中不断变化着类型，又不想让程序报错

  ````typescript
  var t:any =10
  t = "kiven"
  t = true
  console.log(t)
  ````

- void：空类型；



- Array : 数组类型;

- Tuple : 元祖类型；

- Null ：空类型。



## 函数

### 定义函数

`````js
function searchXiaoJieJie(age:number):string{
    return '找到了'+age+'岁的小姐姐'
}
var age:number = 18
var result:string = searchXiaoJieJie(age)
console.log(result)
`````

需要注意的是：

1. 声明（定义）函数必须加 function 关键字；
2. 函数名与变量名一样，命名规则按照标识符规则；
3. 函数参数可有可无，多个参数之间用逗号隔开；
4. 每个参数参数由名字与类型组成，之间用分号隔开；
5. 函数的返回值可有可无，没有时，返回类型为 void；
6. 大括号中是函数体。

### 形参和实参

#### 形参的使用

定义了形参也就规定了此函数的参数个数和参数类型，规范了函数。

````typescript
function searchXiaoJieJie(age:number):string{
    return '找到了'+age+'岁的小姐姐'
}
````

#### 实参的使用

`````typescript
var result:string = searchXiaoJieJie(age)
`````

每一个实参的类型要与对应的形参类型一致。

### 函数参数

函数的形参分为：可选形参、默认形参、剩余参数形参等。

1. 可选参数的函数

   这种参数，在定义函数的时候通过`?`标注。

   `````typescript
   function searchXiaoJieJie2(age:number,stature?:string):string{

       let yy:string = ''
       yy = '找到了'+age+'岁'
       if(stature !=undefined){
           yy = yy + stature
       }
       return yy+'的小姐姐'

   }

   var result:string  =  searchXiaoJieJie2(22,'大长腿')
   console.log(result)
   `````

2. **有默认参数的函数**

   不传递参数的时候，给一个默认值，而不是`undefined`

   ````typescript
   function searchXiaoJieJie2(age:number=18,stature:string='大胸'):string{

       let yy:string = ''
       yy = '找到了'+age+'岁'
       if(stature !=undefined){
           yy = yy + stature
       }
       return yy+'的小姐姐'

   }

   var result:string  =  searchXiaoJieJie2()
   console.log(result)
   ````

3. **有剩余参数的函数**

   传递给函数的参数个数不确定。

   `````typescript
   function searchXiaoJieJie3(...xuqiu:string[]):string{

       let  yy:string = '找到了'
       for (let i =0;i<xuqiu.length;i++){
           yy = yy + xuqiu[i]
           if(i<xuqiu.length){
               yy=yy+'、'
           }
       }
       yy=yy+'的小姐姐'
       return yy

   }

   var result:string  =  searchXiaoJieJie3('22岁','大长腿','瓜子脸','水蛇腰')
   console.log(result)
   `````

### 函数参数&&返回类型定义

#### 简单类型定义

demo5.ts

````typescript
function getTotal(one: number, two: number) {
  return one + two;
}
const total = getTotal(1, 2);
````

代码写错

```typescript
function getTotal(one: number, two: number) {
  return one + two + "";
}
const total = getTotal(1, 2);
```

`total`的值就不是`number`类型  不会报错

函数的返回值加上类型注解

````typescript
function getTotal(one: number, two: number): number {
  return one + two;
}
const total = getTotal(1, 2);
````

尽量让自己的代码更加严谨。

函数无返回值时定义方法

定义一个`sayHello`的函数

````typescript
function sayHello(): void {
  console.log("hello world");
}
````

给他一个类型注解`void`，代表没有任何返回值。

#### never 返回值类型

如果一个函数是永远也执行不完的，就可以定义返回值为`never`

抛出异常

```js
function errorFuntion(): never {
  throw new Error();
  console.log("Hello World");
}
```

 死循环

`````typescript
function forNever(): never {
  while (true) {}
  console.log("Hello kiven");
}
`````

#### 函数参数为对象(解构)

当一个函数的参数是对象  定义参数对象的属性类型`javaScript`

```js
function add({ one, two }) {
  return one + two;
}
const total = add({ one: 1, two: 2 });
```

参数加`类型注解`

```typescript
function add({ one, two }: { one: number, two: number }): number {
  return one + two;
}
const three = add({ one: 1, two: 2 });
```

参数是对象，并且里边只有一个属性

````typescript
function getNumber({ one }: { one: number }): number {
  return one;
}
const one = getNumber({ one: 1 });
````



### 三种函数的定义方式

#### 函数声明法

使用function关键字和函数名去定义一个函数。

`````typescript
function add(n1:number,n2:number):number{
    return n1+n2
}
`````

#### 函数表达式

函数表达式法是将一个函数赋值给一个变量

这个变量名就是函数名。

`````typescript
var add = function(n1:number,n2:number):number{
    return n1+n2
}
console.log(add(1,4))
`````

#### 箭头函数

箭头函数定义的函数一般都用于回调函数中。

````typescript
var add = (n1:number,n2:number):number=>{
    return n1+n2
}
console.log(add(1,4))
````

### 函数中变量作用域

每个变量都有一个起作用的范围，这个范围就是变量的作用域。在TypeScript语言中变量作用域划分是以函数为标准的。

``````typescript
function zhengXing():void{
    var yangzi = 'King'
    console.log(yangzi)
}
zhengXing()
console.log(yangzi)
``````

函数里用`var`定义一个`yangzi`的变量,我们再函数的外部读取这个变量，你会发现是读取不到的。

### 全局变量and局部变量

- **局部变量**：函数体内定义的变量就是局部变量。
- **全局变量**: 函数体外 定义的变量就是全局变量。

#### 局部变量和全局变量重名

当局部变量与全局变量重名的时候，在函数体内是局部变量起作用；如果重名，就有变量提升

#### let关键字变量的作用域

作用域的划分是以一对大括号作为界限的

使用let关键字的变量就是一个块级作用域变量

`````typescript
function zhengXing():void{
   var yangzia:string = '刘德华'
   {
        let  yangzib:string = '小沈阳'
        console.log('凯文整形成了'+yangzib+'的样子')
   }

    console.log('凯文整形成了'+yangzia+'的样子')
    console.log('凯文整形成了'+yangzib+'的样子')
}
zhengXing()
`````

## 数组

TypeScript中的数据分为值类型和引用类型。

### 初识引用类型

````typescript
let kiven = {
    name:'凯文',
    website:'kiven.com',
    age:18,
    saySometing:function(){
        console.log('为了前端技术')
    }
}
console.log(kiven.name)
kiven.saySometing()
````

引用类型，例如：Array（数组）、String（字符串）、Date（日期对象）、RegExp（正则表达式)

### 初始化数组的两种方法

**声明数组的方法**

```````typescript
let arr1:number[ ]     //声明一个数值类型的数组
let arr2:Array<string>  //声明一个字符串类型的数组
```````

**给数组赋值**

数组是存储大量数据的集合，声明数组之后，需要给数组存储数据。这时候有两种方法：

- 字面量赋值法：直接使用“[ ]”对数组进行赋值。
- 构造函数赋值法：

**字面量赋值法**

````typescript
//定义一个空数组，数组容量为0
let arr1:number[] = []
//定义一个数组时，直接给数组赋值
let arr2:number[] = [1,2,3,4,5]
//定义数组的同时给数组赋值
let arr3:Array<string> = ['kiven','凯文','金三胖']
let arr4:Array<boolean> = [ true,false,false]
````

【注】TypeScript中指定数据类型的数组只能存储同一类型的数组元素。

**构造函数赋值法**

````typescript
let arr1:number[] = new Array()
let ara2:number[] = new Array(1,2,3,4,5)
let arr3:Array<string> = new Array('kiven','凯文','金三胖')
let arr4:Array<boolean> = new Array(true,false,false)
````

### 多种类型如何定义

``````typescript
const arr: (number | string)[] = [1, "string", 2];
``````

### 对象类型的定义

````typescript
const xiaoJieJies: { name: string, age: Number }[] = [
  { name: "King", age: 18 },
  { name: "Tom", age: 28 },
];
````

**定义一个`Lady`的别名。**

``````typescript
type Lady = { name: string, age: Number };
``````

改变形式

````typescript
type Lady = { name: string, age: Number };

const xiaoJieJies: Lady[] = [
  { name: "King", age: 18 },
  { name: "Tom", age: 28 },
];
````

定义类限制数组

````typescript
class Madam {
  name: string;
  age: number;
}

const xiaoJieJies: Madam[] = [
  { name: "King", age: 18 },
  { name: "Tom", age: 28 },
];
````

## 元组

元组和数组类似，但是类型注解时会不一样。

````typescript
const xiaojiejie: [string, string, number] = ["dajiao", "teacher", 28];
````

数组中的每个元素类型的位置给固定住了，这就叫做元组。

### 元组的使用

数据源`CSV`

严谨的编程就需要用到元组

`````typescript
"dajiao", "teacher", 28;
"liuying", "teacher", 18;
"cuihua", "teacher", 25;
`````

``````typescript
const xiaojiejies: [string, string, number][] = [
  ["dajiao", "teacher", 28],
  ["liuying", "teacher", 18],
  ["cuihua", "teacher", 25],
];
``````







## 字符串

字符串的两种类型

- 基本类型字符串：由单引号或者双引号括起来的一串字符串。
- 引用类型字符串：用new 实例化的 String类型。

1. 定义字符串

   `````
   let kiven:string = '凯文'
   let kivena:String = new String("kiven.com")
   console.log(kiven)
   console.log(kivena)
   `````

2. 获取字符串长度

   ````typescript
   kiven.length
   ````

### 常用字符串Api

####  查找字符串

头部查找字符串直接使用indexOf

基本语法：`str.indexOf(subStr)`

字符串没有找到，则返回-1。返回的都是字符串的下标

#### 截取字符串

基本语法如下：

```typescript
str.substring(startIndex,[endIndex])
```

#### **替换字符串**

基本语法如下：

`````typescript
str.replace(subStr,newstr);
`````

## 日期对象

````typescript
let d:Date = new Date()
console.log(d)
````

`````bash
2018-09-06T06:48:12.504Z
`````

### 传递表示年月日时分秒的变量

```typescript
let d:Date = new Date(year,month,day,hours,minutes,seconds,ms);
```

- year 表示年份，4位数字。
- month表示月份，数值是0(1月)~11(12月)之间的整数。
- day 表示日期。数值是1~31之间的整数。
- hours 表示小时，数值是0-23之间的整数。
- minutes 表示分钟数，数值是0~59之间的整数。
- seconds 表示秒数，数值是0~59之间的整数。
- ms 表示毫秒数，数值是0~999之间的整数。

## 正则表达式

比如g是全局修饰符，i是忽略大小写，m是多行模式。

`````typescript
let reg1:RegExp = new RegExp("kiven")  //表示字符串规则里含有kiven
console.log(reg1)
let reg2:RegExp = new RegExp("kiven",'gi')
console.log(reg2)
`````

**字面量法**

````js
let reg3:RegExp = /kiven/
let reg4:RegExp = /kiven/gi
````

### RegExp中的常用方法

RegExp对象包含两个方法：test( )和exec( ),功能基本相似，用于测试字符串匹配。

- **test(string)** ：在字符串中查找是否存在指定的正则表达式并返回布尔值，如果存在则返回 true，不存在则返回 false。
- **exec(string)** : 用于在字符串中查找指定正则表达式，如果 exec() 方法执行成功，则返回包含该查找字符串的相关信息数组。如果执行失败，则返回 null。

````typescript
let reg1:RegExp =  /kiven/i
let website:string = 'kiven.com'
let result:boolean = reg1.test(website)
console.log(result)    //true
````

`exec`的使用方法

````typescript
let reg1:RegExp =  /kiven/i
let website:string = 'kiven.com'
console.log(reg1.exec(website))
//[ 'kiven', index: 0, input: 'kiven.com' ]
````

## 面向对象编程

### 类定义

`````typescript
class XiaoJieJie{
    name:string;
    age:number;
    constructor(name:string,age:number){
        this.name = name
        this.age = age
    }
    say(){
        console.log('小哥哥好')
    }
}
let jiejie:XiaoJieJie = new XiaoJieJie('范冰冰',18)
console.log(jiejie)
jiejie.say()
`````

`constructor`为构造函数

作用是给类中封装的属性进行赋值。

#### 类继承

`````typescript
class lady{
  content = 'Hi ,帅哥'
  sayHello() {
    return this.content
   }
}

class Xiaomeimei extends lady {
  sayHello() {
    return super.sayHello()+'. 你好'//调用父类
  }
  sayLove() {
    return + "I Love you"
  }
}

const goodess = new Xiaomeimei()
console.log(goodess.sayHello());
console.log(goodess.sayLove());
`````

#### 类的访问类型

`````typescript
// 类的访问类型
class Person {
  name: string;
}
const person = new Person()
person.name = 'kiven'
console.log(person.name)
`````

#### 修饰符

- public:公有修饰符，可以在类内或者类外使用public修饰的属性或者行为，默认修饰符。
- protected:受保护的修饰符，只允许再类的内部被调用，外部不允许调用
- private : 私有修饰符，允许在类内及继承的子类中使用

`````typescript
class XiaoJieJie2{
    public sex:string
    protected name:string
    private age:number
    public constructor(sex:string,name:string,age:number){
        this.sex=sex
        this.name=name
        this.age=age
    }
    public sayHello(){
        console.log('小哥哥好')
    }

    protected sayLove(){
        console.log('我爱你')
    }
}

var jiejie2:XiaoJieJie2 = new XiaoJieJie2('女','热巴',22)

console.log(jiejie2.sex)
console.log(jiejie2.name)   //报错
console.log(jiejie2.age)    //报错
jiejie2.sayHello()
jiejie2.sayLove()    //报错
`````

##### 只读属性修饰符

使用readonly修饰符将属性设置为只读，只读属性必须在生命时或者构造函数里被初始化

`````typescript
class Man{
    public readonly sex:string = '男'
}
var man:Man = new Man()
man.sex='女'
`````

#### 类的构造函数

类被初始化·是 自动执行的一个方法

`````typescript
//类的构造函数

class Person{
  constructor(public name:string){}
}

class Teacher extends Person {
  // 子类 如果使用constructor  必须实现 父类方法
  constructor(public age: number) {
    super('kiven')
  }
}

const teacher= new Teacher(18)
console.log(teacher.name)
console.log(teacher.age)
`````

子类只要写 构造函数 必须	`super`  才可不报错

#### 类的Getter Setter

```js
class Nvhai {

  constructor(private _age:number){}
  get age(){
      return this._age-10
  }
  set age(age:number){
    this._age=age
  }
}

const nvhai = new Nvhai(28)
nvhai.age=25
console.log(nvhai.age)
```

`setter`也是可以保护私有变量

````typescript
 set age(age:number){
    this._age=age+3
  }
````

静态类

````typescript
class Gir {
  static sayLove() {
    return 'I love you!'
  }
}
console.log(Gir.sayLove())
````

#### 抽象类

````typescript
class Waiter {}

class BaseTeacher {}

class seniorTeacher {}
````

定义抽象方法

`````typescript
abstract class Girl{
    abstract skill()  //因为没有具体的方法，所以我们这里不写括号
}

class Waiter extends Girl{
    skill(){
        console.log('先生，请喝水！')
    }
}

class BaseTeacher extends Girl{
    skill(){
        console.log('先生，来个泰式按摩吧！')
    }
}

class seniorTeacher extends Girl{
    skill(){
        console.log('先生，来个SPA全身按摩吧！')
    }
}
`````

### 继承和重写

继承：允许我们创建一个类（子类），从已有的类（父类）上继承所有的属性和方法，子类可以新建父类中没有的属性和方法。

`````typescript
class kiven{
    public name:string
    public age : number
    public skill: string
    constructor(name:string,age:number,skill:string){
        this.name = name
        this.age = age
        this.skill = skill
    }
    public interest(){
        console.log('找小姐姐')
    }
}

let kivenObj:kiven = new kiven('凯文',18,'web')
kivenObj.interest()
`````

`extends`关键字就是继承的重点

`````typescript
class JsShuai extends kiven{
    public xingxiang:string = '帅气'
    public zhuangQian(){
        console.log('一天赚了一个亿')
    }
}

let shuai = new JsShuai("技术帅",5,'演讲')
shuai.interest()
shuai.zhuangQian()
`````

### 类方法的重写

````typescript
class JsShuai extends kiven{
    public xingxiang:string = '帅气'
    public interest(){
        super.interest()
        console.log('建立电商平台')
    }
    public zhuangQian(){
        console.log('一天赚了一个亿')
    }
}
````

super关键字调用了父类的方法，实现了技能的增加。

### 接口

定义接口的关键字是`interface`

````typescript
interface Husband {
    sex:string
    interest:string
}
let myhusband:Husband ={ sex:'男',interest:'看书、作家务'}
console.log(myhusband)
````

#### 接口方法

没有进行接口优化代码

`````typescript
const screenResume = (name: string, age: number, bust: number) => {
  age < 24 && bust >=90 && console.log(name+"进入面试")
  age >=24 || bust <90 && console.log(name+"你被淘汰")
}
//查看
const getResume = (name: string, age: number, bust: number) => {
  console.log( name+'年龄是'+age)
  console.log( name+'胸围是'+bust)
}
screenResume('珈百璃', 18, 59)
screenResume('波多野结衣', 18, 94)
`````

接口优化

```typescript
//接口类型注解
interface Girl {
  name: string;
  age: number;
  bust: number;
}
```

`````typescript
const screenResume = (girl: Girl) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
  girl.age > 24 || (girl.bust < 90 && console.log(girl.name + "你被淘汰"));
};

const getResume = (girl: Girl) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "胸围是：" + girl.bust);
};
const girl = {
  name: "桥本环奈",
  age: 18,
  bust: 94,
};

screenResume(girl);
getResume(girl);
`````

#### 可选参数的接口

````typescript
interface Husband {
    sex:string
    interest:string
    maiBaoBao?:Boolean //可选参数接口
}
let myhusband:Husband ={ sex:'男',interest:'看书、作家务',maiBaoBao:true}
console.log(myhusband)
````

#### 规范函数类型接口

`````typescript
interface  SearchMan{
    (source:string,subString:string):boolean
}
let mySearch:SearchMan
mySearch = function(source:string,subString:string):boolean{
    let flag =source.search(subString)
    return (flag != -1)
}

console.log(mySearch('高、富、帅、德','胖')) //false
`````

#### 接口和类型别名的区别

类型别名可以直接给类型，比如`string`，而接口必须代表对象。

`类型别名`

````
type Girl1 = stirng;
````

`girl`

````typescript
const girl = {
  name: "桥本环奈",
  age: 18,
  bust: 94,
};
````

#### 允许加入任意值

````typescript
interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
  [propname: string]: any;
}
````

属性的名字是字符串类型，属性的值可以是任何类型

#### 接口的方法

````typescript
interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
  [propname: string]: any; //属性名称string  类型任何
  say(): string;
}
````

`````typescript
const girl = {
  name: "波多野结衣",
  age: 18,
  bust: 94,
  waistline: 21,
  sex: "女",
  say() {
    return "欢迎光临 ，红浪漫洗浴！！";
  },
};
`````

#### 接口限制类

`````typescript
// 接口限制类
class Xiaojiejie implements Girl {
  name: "小仓唯"
  age: 18
  bust: 94
  waistline: 21
  sex: "女"
  say() {
    return "欢迎光临 ，红浪漫洗浴！！";
  }
}
`````

`implements` 关键字

#### 接口间的继承

`Teacher`接口，继承于`Person`接口。

```typescript
interface Teacher extends Girl {
  teach(): string;
}
```

`````typescript
const getResume = (girl: Teacher) => {
  console.log(girl.name + "年龄是：" + girl.age);
  console.log(girl.name + "胸围是：" + girl.bust);
  girl.waistline && console.log(girl.name + "腰围是：" + girl.waistline);
  girl.sex && console.log(girl.name + "性别是：" + girl.sex);
};
`````

传值必须有`Teach`方法

````typescript
const girl = {
  name: "桥本环奈",
  age: 18,
  bust: 94,
  waistline: 21,
  sex: "女",
  say() {
    return "欢迎光临 ，红浪漫洗浴！！";
  },
  teach() {
    return "我是一个老师";
  },
};
````



### 命名空间

命名空间，又称内部模块，被用于组织有些具有内在联系的特性和对象。

````typescript
namespace shuaiGe{
    export class Dehua{
        public name:string = '刘德华'
        talk(){
            console.log('我是帅哥刘德华')
        }
    }
}

namespace bajie{
    export class Dehua{
        public name:string = '马德华'
        talk(){
            console.log('我是二师兄马德华')
        }
    }
}

let dehua1:shuaiGe.Dehua   = new shuaiGe.Dehua()
let dehua2:shuaiGe.Dehua   = new bajie.Dehua()
dehua1.talk()
````



## TypeScript 静态类型

TypeScript 的一个最主要特点就是可以定义静态类型(Static Typing)

### 如何定义

```js
const count: number = 1;
```

### 自定义静态类型

```typescript
interface Xiaojiejie{
  uname: String;
  age: Number;
}

const nai: Xiaojiejie = {
  uname: "桥本环奈",
  age: 18,
}

console.log(nai.age);
```

如果使用了静态类型，不仅意味着变量的类型不可以改变，还意味着类型的属性和方法也跟着确定了

大大提高了程序的健壮性

### 基础静态类型&&对象类型

#### 基础静态类型

```typescript
const count : number = 918;
const myName ：string = 'kiven'
```

类似这样常用的基础类型还有: `null`,`undefinde`,`symbol`,`boolean`,`void`

#### 对象类型

````typescript
const xiaoJieJie: {
  name: string,
  age: number,
} = {
  name: "King",
  age: 18,
};
console.log(xiaoJieJie.name);
````

经典的对象类型

**对象类型也可以是数组**

`````typescript
const xiaojiejie: String[] = ["波多野结衣", "花泽香菜"]
`````

数组里的内容必须是字符串

**用类的形式，来定义变量**

```typescript
class Person {}
const dajiao: Person = new Person();
```

**定义一个函数类型，并确定返回值**

```typescript
//定义函数类型 并确定返回值
const huaze :() => string = () => { return "花泽香菜"}
```

**对象类型可以有几种形式：**

- 对象类型
- 数组类型
- 类类型
- 函数类型

## 类型注解&&类型推断

### (type annotation)类型注解

````typescript
let count: number;
count = 123;
````

`count`变量就是一个数字类型，这就叫做`类型注解

### (type inferrence) 类型推断

```typescript
let countInference = 123;
```

TypeScript 自动把变量注释为了`number`（数字）类型

### 工作(潜规则)

- 如果 `TS` 能够自动分析变量类型， 我们就什么也不需要做了
- 如果 `TS` 无法分析变量类型的话， 我们就需要使用类型注解

不用写类型注解的例子：

````typescript
const one = 1;
const two = 2;
const three = one + two;
````

再来看一个用写类型注解的例子：

````typescript
function getTotal(one, two) {
  return one + two;
}
const total = getTotal(1, 2);
````

因为这里的`one`和`two`会显示为`any`类型。

必须加一个`类型注解`

````js
function getTotal(one: number, two: number) {
  return one + two;
}
const total = getTotal(1, 2);
````

TypeScript 也可以推断出对象中属性的类型

````typescript
const XiaoJieJie = {
  name: "刘英",
  age: 18,
};
````

### 数组类型注解

`````typescript
// 数组类型注解
const numberArr: number[] = [1, 2, 3]
const arr: (number | string)[] = [1, 'string', 2]
`````

````typescript
const xioameimei:{name:string,age:number}[] = [
  { name: '桥本环奈', age: 18 },
  { name: '小仓唯', age: 18 }
]
````

*`type alias` 类型别名*

`````typescript
type Lady={name:string,age:number}
const xiaojiejie:Lady[] = [
  { name: '桥本环奈', age: 18 },
  { name: '小仓唯', age: 18 }
]
`````

*类的形式 进行注解*

`````typescript
class Madam {
  name: string;
  age: number;
}

const xiaomeimei:Madam[] = [
  { name: '桥本环奈', age: 18 },
  { name: '小仓唯', age: 18 }
]
`````

## 联合类型和类型保护

所谓联合类型，可以认为一个变量可能有两种或两种以上的类型。关键符号是`|`

`````typescript
interface Waiter {
  anjiao: boolean;
  say: () => {};
}
interface Teacher {
  anjiao: boolean;
  skill: () => {};
}
function judgeWho(animal: Waiter | Teacher) {}
`````

```typescript
function judgeWho(animal: Waiter | Teacher) {
  animal.say();
}
```

如果直接写一个这样的方法，会报错因为`judgeWho`不能准确的判断联合类型具体的实例是什么。

概念叫做`类型保护`

### 类型保护

#### 类型断言

类型断言就是通过断言的方式确定传递过来的准确值

```````typescript
interface Waiter {
  anjiao: boolean;
  say: () => {};
}

interface Teacher {
  anjiao: boolean;
  skill: () => {};
}

function judgeWho(animal: Waiter | Teacher) {
  //如果存在
  if (animal.anjiao) {
    (animal as Teacher).skill();
  }else{
    (animal as Waiter).say();
  }
}
```````

#### in 语法

我们还经常使用`in`语法来作类型保护，比如用`if`来判断`animal`里有没有`skill()`方法。

`````typescript
function judgeWhoTwo(animal: Waiter | Teacher) {
  if ("skill" in animal) {
    animal.skill();
  } else {
    animal.say();
  }
}
`````

##### typeof 语法

`add` 方法

`````typescript
function add(first: string | number, second: string | number) {
  return first + second;
}
`````

不做任何的类型保护，只是相加 产生报错

正确写法

````typescript
function add(first: string | number, second: string | number) {
  if (typeof first === "string" || typeof second === "string") {
    return `${first}${second}`;
  }
  return first + second;
}
````

#### instanceof 语法

类型保护的是一个对象

`````typescript
class NumberObj {
  count: number;
}
`````

未添加类型保护【报错】

```typescript
function addObj(first: object | NumberObj, second: object | NumberObj) {
  return first.count + second.count;
}
```

正确写法

`````typescript
function addObj(first: object | NumberObj, second: object | NumberObj) {
  if (first instanceof NumberObj && second instanceof NumberObj) {
    return first.count + second.count;
  }
  return 0;
}
`````

`instanceof`语法进行判断，instanceof 只能用在类上。

## Enum 枚举类型

如果在程序中能灵活的使用枚举(`enum`),会让程序有更好的可读性

低级

```typescript
function getServe(status: number) {
  if (status === 0) {
    return "massage";
  } else if (status === 1) {
    return "SPA";
  } else if (status === 2) {
    return "dabaojian";
  }
}
const result = getServe(0);
console.log(`我要去${result}`);
```

中级

````typescript
const Status = {
  MASSAGE: 0,
  SPA: 1,
  DABAOJIAN: 2,
};

function getServe(status: any) {
  if (status === Status.MASSAGE) {
    return "massage";
  } else if (status === Status.SPA) {
    return "spa";
  } else if (status === Status.DABAOJIAN) {
    return "dabaojian";
  }
}

const result = getServe(Status.SPA);

console.log(`我要去${result}`);
````

高级

``````typescript
enum Status {
  MASSAGE,
  SPA,
  DABAOJIAN,
}

function getServe(status: any) {
  if (status === Status.MASSAGE) {
    return "massage";
  } else if (status === Status.SPA) {
    return "spa";
  } else if (status === Status.DABAOJIAN) {
    return "dabaojian";
  }
}

const result = getServe(Status.SPA);

console.log(`我要去${result}`);
``````

### 枚举类型的对应值

```typescript
const result = getServe(1);
```

枚举类型是有对应的数字值的，默认是从 0 开始的

`````typescript
console.log(Status.MASSAGE);
console.log(Status.SPA);
console.log(Status.DABAOJIAN);
`````

结果就是`0,1,2`。那这时候不想默认从 0 开始，而是想从 1 开始

`````typescript
enum Status {
  MASSAGE = 1,
  SPA,
  DABAOJIAN,
}
`````

枚举通过下标反查

````typescript
console.log(Status.MASSAGE, Status[1]);
````

## 函数泛型

联合类型 Demo

简单的`join`方法 ，字符串的基本拼接

````typescript
function join(first: string | number, second: string | number) {
  return `${first}${second}`;
}
join("kiven", ".com");
````

**实现需求**

就是`first`参数如果传的是字符串类型，要求`second`也传字符串类型

### 初始泛型概念-generic

泛型：[generic - 通用、泛指的意思],那最简单的理解，泛型就是泛指的类型。

泛型的定义使用`<>`

```typescript
function join<kiven>(first: kiven, second: kiven) {
  return `${first}${second}`;
}
join < string > ("kiven", ".com");
```

如果要是`number`类型

就直接在调用方法的时候进行更改

`````typescript
join < number > (1, 2);
`````

### 泛型中数组的使用

如果传递过来的值要求是数字，如何用泛型进行定义

第一种是直接使用`[]`，

`````typescript
function myFun<ANY>(params: ANY[]) {
  return params;
}
myFun < string > ["123", "456"];
`````

第二种是使用`Array<泛型>`

```typescript
function myFun<ANY>(params: Array<ANY>) {
  return params;
}
myFun < string > ["123", "456"];
```

经常使用`<T>`来作泛型的表示

### 多个泛型的定义

定义多个泛型，比如第一个泛型用`T`,第二个用`P`代表。

```typescript
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join < number, string > (1, "2");
```

泛型在造轮子的时候经常使用，因为造轮子很多东西都需要灵活性。

如果函数定义了多个泛型，使用时要对应的定义出具体的类型。

### 泛型的类型推断

```typescript
function join<T, P>(first: T, second: P) {
  return `${first}${second}`;
}
join(1, "2");
```

## 类中泛型

### 基本类

类`SelectGirl` 类的构造函数中(constructor)

```typescript
class SelectGirl {
  constructor(private girls: string[]) {}
  getGirl(index: number): string {
    return this.girls[index];
  }
}

const selectGirl = new SelectGirl(["桥本环奈", "小仓唯", "珈百璃"]);
console.log(selectGirl.getGirl(1));
```

编写复杂代码的时候，会经常使用泛型。

```typescript
class SelectGirl {
  constructor(private girls: string[] | number[]) {}
  getGirl(index: number): string | number {
    return this.girls[index];
  }
}
```

### 初始类的泛型

用泛型重构代码

用`<>`编写

````typescript
//使用泛型。
class SelectGirl<T> {
  constructor(private girls:T[]) {}
  getGirl(index: number):T {
    return this.girls[index];
  }
}
// 通过推断方式 判断类型
// 需要在实例化对象的时候，对泛型的值进行确定
const selectGirl = new SelectGirl<string>(["桥本环奈", "小仓唯", "珈百璃"]);
console.log(selectGirl.getGirl(1));
````

### 泛型中的继承

要求返回是一个对象中的`name`

`````typescript
return this.girls[index].name;
`````

写一个`Girl`的接口

每个接口里都要有 `name` 属性

````typescript
interface Girl {
  name: string;
}
````

有了接口后用`extends`关键字实现泛型继承

`````typescript
class SelectGirl<T extends Girl> {
 ...
}
`````

这句代码的意思是泛型里必须有一个`name`属性，因为它继承了`Girl`接口。

因为我们`getGirl`方法的返回类型还不对，这时候应该是一个`string`类型才对

`````typescript
interface Girl {
  name: string;
}

//使用泛型。   继承必须返回 name
class SelectGirl<T extends Girl> {
  constructor(private girls:T[]) {}
  getGirl(index: number):string {
    return this.girls[index].name;
  }
}
// 通过推断方式
const selectGirl = new SelectGirl([
  { name: "桥本环奈" },
  { name: "小仓唯" },
  { name: "珈百璃" },
]);

console.log(selectGirl.getGirl(1));
`````

`SelectGirl`类中使用了泛型

有一个约束条件，这个类型，必须要有一个`name`属性

### 泛型约束

泛型可以是任意类型，可以是对象、字符串、布尔、数字都是可以的

```typescript
interface Girl {
  name: string;
}

//使用泛型。   继承必须返回 name
class SelectGirl<T extends number | string> {
  constructor(private girls:T[]) {}
  getGirl(index: number):T {
    return this.girls[index];
  }
}
// 通过推断方式
const selectGirl = new SelectGirl<string>(["桥本环奈", "小仓唯", "珈百璃"]);
console.log(selectGirl.getGirl(1));
```

泛型必须是`string`或者`number`类型

关键字`extends`来进行约束

```````typescript
class SelectGirl<T extends number | string> {
  //.....
}
```````

## 命名空间

`TSWeb` 空文件

1. 建立好文件夹后，打开 VSCode，把文件夹拉到编辑器当中，然后打开终端，运行`npm init -y`,创建`package.json`文件。

2. 生成文件后，我们接着在终端中运行`tsc -init`,生成`tsconfig.json`文件。

3. 新建`src`和`build`文件夹，再建一个`index.html`文件。

4. 在`src`目录下，新建一个`page.ts`文件，这就是我们要编写的`ts`文件了。

5. 配置`tsconfig.json`文件，设置`outDir`和`rootDir`(在 15 行左右)，也就是设置需要编译的文件目录，和编译好的文件目录。

   `````json
   "outDir": "./build",
   "rootDir": "./src",
   `````



6. 然后编写`index.html`，引入`<script src="./build/page.js"></script>`,当让我们现在还没有`page.js`文件。

7. 编写`page.ts`文件，加入一句输出`console.log('kiven.com')`,再在控制台输入`tsc`,就会生成`page.js`文件

8. 再到浏览器中查看`index.html`文件，如果按`F12`可以看到`kiven.com`，说明我们的搭建正常了。

`````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="./build/page.js"></script>
    <title>Document</title>
  </head>
  <body></body>
</html>
`````

`TypeScript`来进行编写

### 没有命名空间

用类的形式在`index.html`中实现`header`,`content`和`Footer`部分，类似我们常说的模板。

`page.ts`

````typescript
class Header {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Header";
    document.body.appendChild(elem);
  }
}

class Content {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Content";
    document.body.appendChild(elem);
  }
}

class Footer {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Footer";
    document.body.appendChild(elem);
  }
}

class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
````

`tsc`进行编译

修改`index.html`文件  `<body>`标签里引入`<script>`标签，并实例化`Page

``````html
<body>
  <script>new Page();</script>
</body>
``````

`./build/page.js`文件可以看出全部都是`var`声明的变量）。

**过多的全局变量会让我们代码变的不可维护**

只要有`Page`这个全局变量就足够了，剩下的可以模块化封装起来，不暴露到全局。

### 命名空间的使用

`命名空间`这个语法，很类似编程中常说的模块化思想

比如`webpack`打包时

命名空间声明的关键词是`namespace` 比如声明一个`namespace Home`,需要暴露出去的类，可以使用`export`关键词

````````typescript
namespace Home {

  class Header {
    constructor() {
      const elem = document.createElement('div')
      elem.innerHTML = "This is Header"
      document.body.appendChild(elem);
    }
  }

  class Content {
    constructor() {
      const elem = document.createElement('div')
      elem.innerHTML = "This is Content"
      document.body.appendChild(elem);
    }
  }

  class Footer {
    constructor() {
      const elem = document.createElement('div')
      elem.innerHTML = "This is Footer"
      document.body.appendChild(elem);
    }
  }

  // 实例化
  export class Page {
    constructor() {
      new Header();
      new Content();
      new Footer();
    }
  }

}

````````

TS 代码写完后，再到`index.html`文件中进行修改，用命名空间的形式进行调用，就可以正常了。

写完后，记得用`tsc`编译一下，当然你也可以使用`tsc -w`进行监视了，只要有改变就会进行重新编译。

`````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <!-- 引入 -->
    <script src="./build/page.js"></script>
    <title>Document</title>
  </head>
  <body>
    <!-- 引入自定义标签 -->
    <script>
      new Home.Page()
    </script>

  </body>
</html>
`````

浏览器中进行查看  可以看到现在就只有`Home.Page`

其他的`Home.Header`...这些都是得不到的

只有`Home.Page`是全局的，其他的都是模块化私有的。

### 深入命名空间

单独写一个`components`的文件，然后进行组件化。

在`src`目录下新建一个文件`components.ts`

`````typescript
namespace Components {
  //导出组件
  export class Header {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Header";
      document.body.appendChild(elem);
    }
  }

  export class Content {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Content";
      document.body.appendChild(elem);
    }
  }

  export class Footer {
    constructor() {
      const elem = document.createElement("div");
      elem.innerText = "This is Footer";
      document.body.appendChild(elem);
    }
  }
}
`````

导出后就可以在`page.ts`中使用这些组件

`````typescript
namespace Home {
  export class Page {
    constructor() {
      new Components.Header();
      new Components.Content();
      new Components.Footer();
    }
  }
}
`````

`tsc`进行重新编译

必须要在`index.html`里进行引入`components.js`文件

`````typescript
<script src="./build/page.js"></script>
<script src="./build/components.js"></script>
`````

**多文件编译成一个文件**

打开`tsconfig.json`文件，然后找到`outFile`配置项

如果设置了它，就不再支持`"module":"commonjs"`

改成`"module":"amd"`

`````typescript
{
  "outFile": "./build/page.js"
}
`````

配置好后，删除掉`build`下的`js`文件，然后用`tsc`进行再次编译。

删掉`index.html`文件中的`component.js`  可以正常运行

```````html
<!-- <script src="./build/components.js"></script> -->
<script src="./build/page.js"></script>
```````



### 子命名空间

````typescript
namespace Components {
  export namespace SubComponents {
    export class Test {}
  }

  //someting ...
}
````

## 使用 import 语法

修改 `components.ts` 文件

写成 `ES6` 的 `export` 导出模式

```js
export class Header {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Header";
    document.body.appendChild(elem);
  }
}

export class Content {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Content";
    document.body.appendChild(elem);
  }
}

export class Footer {
  constructor() {
    const elem = document.createElement("div");
    elem.innerText = "This is Footer";
    document.body.appendChild(elem);
  }
}
```

三个类就都已经用`export`导出了，也就是说可以实现用`import`进行引入了

`修改 page.ts 文件`

`````typescript
import { Header, Content, Footer } from "./components";
export class Page {
  constructor() {
    new Header();
    new Content();
    new Footer();
  }
}
`````

`tsc`进行编译

可以看到编译好的代码都是`define`开头

这种代码在浏览器中是没办法被直接运行

需要其他库(`require.js`)

**Require.js 的 CDN 地址： https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js**

### 引入 require.js

```js
<script src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.js"></script>
```

这时候就可以解析`define`这样的语法

`page.ts`中加入`default`关键字，如果不加是没办法直接引用到的。

`tsc`进行编译一下

`export default`这种形式的语法，需要在`html`里用`require`来进行引入。

### require 方式引入

因为你已经加入了`require.js`这个库，所以现在可以直接在代码中使用`require`了

```typescript
<body>
  <script>
    require(["page"], function (page) {
      new page.default();
    });
  </script>
</body>
```

## 用 Parcel 打包Ts代码

### 建立一个新项目

1. 新建立一个项目`TSTest`
2. 打开终端，输入`npm init -y`,创建`package.json`文件
3. 在终端中输入`tsc --init`,创建`tsconfig.json`文件
4. 修改`tsconfig.json`配置`rootDir`和`outDir`.
5. 新建`src`文件夹，在里边建立`index.html`,`page.ts`文件
6. 编写`index.html`文件，并引入`page.ts`文件
7. 编写`page.ts`文件。

`index.html` 文件代码：

`````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="./page.ts"></script>
    <title>Document</title>
  </head>
  <body></body>
</html>
`````

`page.ts` 文件代码：

````typescript
const teacher: string = "kiven";
console.log(teacher);
````

这时候我们并不能正常的预览出效果

需要`Parcel`

### Parcel 的安装和使用

````typescript
yarn add --dev parcel@next
````

安装好以后，打开`package.json`文件

实例版本`^2.0.0-beta.1`

`package.json`

````json
{
  "scripts": {
    "test": "parcel ./src/index.html"
  },
}
````

使用`parcel`对`index.html`进行编译

终端输入`yarn test`

这说明`Parcel`会自动对`index.html`中引入的`TypeScript`文件进行编译



## Ts使用JQuery

TypeScript 的代码中使用其他类库

涉及到一个类型文件(Type file)的问题

### 引入 JQuery 框架库

在`TSTest`文件夹的`src`目录下，引入`JQuery`文件

这里采用`CDN`的形式进行引入

````typescript
<script src="https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.js"></script>
````

有了 jquery 框架，就可以在`TypeScript`文件中进行使用`JQuery`的语法\

`page.ts`

````typescript
const teacher: string = "kiven";
console.log(teacher);

$(function () {
  alert("kiven");
});
````

#### 安装 types/jquery(解决方法)

第一种：就是安装别人写好的文件

npm 进行安装。

````typescript
npm i @types/jquery
````

第二种:简单粗暴`page.ts`

直接在`page.ts`文件的头部加入这句代码：

``````typescript
declare var $: any;
``````

第三种：自己写一个`.d.ts`声明文件的类库

## tsconfig.json

### 生成 tsconfig.json 文件

终端 输入 `tsc --init`

用来配置如何对`ts`文件进行编译的 typescript 的编译配置文件。

`demo.ts`

````typescript
const person: string = "kiven";
````

直接运行`tsc`命令，这时候`tsconfig.json`才起作用

·`tsconfig.json`

`````json
 "removeComments": true,   //生成js 文件是否附带注释
`````

### include 、exclude 和 files

只编译  一个固定文件

使用 include 配置

`tsconfing.json`

````json
{
  "include":["demo.ts"],
  "compilerOptions": {
      //any something
      //........
  }
}
````

使用 exclude 配置

`````json
{
   "exclude":["demo2.ts"],
  "compilerOptions": {
      //any something
      //........
  }
}
`````

`include`是包含的意思，`exclude`是不包含

使用 files 配置

```````json
{
  "files":["demo.ts"],
  "compilerOptions": {
      //any something
      //........
  }
}
```````

### compilerOptions 配置项

#### removeComments 属性

设置为`true`在`js`中不显示注释。



#### strict 属性

`strict`属性如果设置为`true`,要按照`TypeScript`最严格的规范来写

####  noImplicitAny 属性

`noImplicitAny`属性的作用是，允许你的注解类型 any 不用特意表明

设置为`noImplicitAny:true`,意思就是值就算是 any（任意值），你也要进行类型注释。

``````typescript
function Kiven(name: any) {
  return name;
}
``````



#### strictNullChecks 属性

`strictNullChecks`设置为`false`,它的意思就是，**不强制检查 NULL 类型。**

```````typescript
const kiven: string = null;
```````

配置了“不强制检验 null 类型”。如果你设成`strictNullChecks:true`，这时候就报错了。

#### rootDir 和 outDir

工作中我们希望打包的`js`都生成在特定的一个文件夹里,比如`build`。

这时候你就可以通过配置`outDir`来配置

所有的 `ts` 文件都放到 `src` 下

配置文件就应该这样写。

```````typescript
{
    "outDir": "./build" ,
    "rootDir": "./src" ,
}
```````

#### sourceMap 属性

Source map 就是一个信息文件，里面储存着位置信息。

也就是说，转换后的代码的每一个位置，所对应的转换前的位置。

有了它，出错的时候，除错工具将直接显示原始代码，而不是转换后的代码

#### noUnusedLocals 和 noUnusedParameters

开启`noUnusedLocals：true`，开启后我们的程序会直接给我们提示不能这样编写代码，有没有使用的变量。



