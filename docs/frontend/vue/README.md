# VUE  2.X

## 什么是Vue

```
什么是: 第三方开发的渐进式的基于MVVM设计模式的纯前段js框架 
```

渐进式: 
```
可逐步在项目中引入Vue的各项功能
且可与其他技术混用————今后极力不推荐
基于MVVM设计模式:?
纯前段: 没有后端技术,Vue照样执行
```

js 框架: 

```
  已经具有核心功能的半成品项目代码。
```

开发人员只需要根据具体业务的需求,添加定制自己个性化的那一部分代码即可！



## 原生DOM VS 函数库 vs 框架

```
原生 DOM: 优点: 兼容性各个平台
        缺点: 繁琐

函数库: 优点: 简化原生DOM中每一步操作的代码长度
缺点:  没有减少步骤！

框架: 优点: 彻底简化了开发的步骤！
      
      缺点: 不兼容性旧浏览器
            需要开发人员彻底转变思路！
```

何时: 

```
  今后所有以数据为主的项目,都可用Vue框架
```

##  如何使用Vue

下载: https://www.vuejs.org

2种: 

1.现在独立的Vue.js文件 

````
用<script></script></script>引入网页中
````

初学者使用,学习单项Vue的技能

版本:2.5

2个版本:

````
1.开发板: 未压缩, 非常完备的错误提示

2.生产版: 压缩, 去掉了完备的错误提示
````

### 使用 vue.js:

引入 vue.js

```js
 <script src="js/vue.js">
```
```js
1. 编写界面 
        1. 所有界面内容必须包裹在一个唯一的父元素内
        2. 找到页面中所有可能变化的位置用{{变量名}}方法临时占位
    
2. 编写自定义js程序:

        1. 定义data对象 其中包含所有页面所需的变量及其初始值.页面需要几个变量,data中就要定义几个属性变量

        2. 创建new Vue对象 将界面和保存所有变量的data对象绑定起来
    
             	var vm =new Vue({
                    el:"#app", //el后跟的是要监控的部分的父元素的原则器 
                    data:data,//让 new Vue 同时监控data中变量的变化

                }) 
    
    结果:

1 new Vue 会自动将data中的初始值替换界面中所有{{变量}}的位置

2. 只要data中的变量值发生变化 new Vue 会自动将新变量值 更新到页面中去{{变量}}位置
```


​                
```js
3. 添加交互行为:
             
        DOM 4步
             
      	1. 查找触发事件的元素: 不用程序找 用肉眼找到就行
             
        2. 绑定事件处理函数:
        
        	1. 不用js绑定 而是手动在界面中的要点击的元素上添加: <button @click="处理函数名">
                       
            2. Vue规定所有事件处理函数需要集中定义在 new Vue()中的 metheods:{内}
                  
                    new Vue({
                     	         ...,
                                metheods:{
                                处理函数名(){
                                想操作 data的数据 this.变量
                            }
                          }

                    })

             3. 查找要修改的元素:彻底不用自己找
             4. 修改元素: Vue中都是通过遥控方式修改元素的:修改data中的变量值 可自动更新界面中的元素内容。--- 绑定
```

  # 问题: 
    传统Web开发重复代码量太大! 效率太低！

  ## 为什么:

传统Web开发分为三部分组成

     1.HTML 专门编写网页内容的静态语言
     
    2.CSS 专门编写网页样式的静态语言
     
    3.JS 专门为网页添加交互行为的程序语言
     
    问题: HTML 和 Css 都是 静态语言 缺少程序语言必须的要素,比如: 变量,分支,循环..,太弱
    导致js必须承担所有查找 修改操作！
解决:

现代Web前段开发重新划分三步:

视图/界面(View):


    1. HTML+CSS
    2. 增强了 HTML 和 Css 的功能  比如提供了变量,分支,循环等这些程序必备功能
           因为,HTML和Css功能增强了 所以大大减轻了Js的负担！ 

  



    2. 模型数据(Model):其实就是用一个data对象 统一保存这个界面所需的所有变量。
    因为数据集中保存,所以及其便于维护！

  



    3. 控制器(ViewModel):自动实现模型数据 data中的内容和界面(View)中的内容 实时同步！
        控制器已经封装了传统的增删改查的功能 所以几乎避免了一切重复操作！ 
            比如:   今后Vue中几乎没有任何查找操作了！
                    都是以遥控方式代替手工查找元素
                    只要修改data中的变量 界面中的内容自动更新.

## Vue是如何实现 MVVM的

## VUE绑定的原理


  new Vue()中其实包含两大子系统:
        
  ### 响应系统 

  什么是:

    实时监控data中变量的变化 并能在变量发生变化时 自动发送通知。

  原理:
```js
   1.将data放入 new Vue()中后,new Vue()自动为每个变量添加了访问器属性.这些访问器属性 直接隶属于new Vue()对象 保护/监控中的变量。
  而且所有访问器属性中的set方法中,都内置了通知机制 只要试图修改data中的 变量 都要经过访问器属性,自然就会自动触发通知。
```

### 虚拟DOM树

什么是: 

Vue 内存中仅保存可能变化的DOM元素和可能变化的属性的简化版DOM树

为什么: 
    真实 DOM 树, 无关的数据太多！ 遍历查找的速度太慢
            
     虚拟DOM树的优点:
         1.小,仅包含可能变化的元素 和 可能变化的属性   
         2.快,遍历快
         3.自动,虚拟DOM树已经封装了增删改查的操作。
         4. 效率高,仅修改可能受影响的元素和可能受影响的属性.多数无关的元素和属性 不受影响
    
    原理:
         形成: 首次new Vue()时 传入了 el:"#app"参数
                然后 new Vue()找到#app这个父元素,扫描其内部的子元素 边扫描边创建虚拟DOM树 仅保存可能变化的元素和可能变化的属性
                首次将data中的变量 替换DOM树中的{{}}语法
    
          当变量变化时:
                首先触发这个变量的访问器set方法 发出通知 通知虚拟DOM树 那个变量发生变化
    
          然后new Vue()遍历虚拟DOM树 找到可能发生变化的元素和属性
          最后,利用已经封装好的DOM的增删改查方法,找到发生变化的元素和属性 修改属性

#  绑定语法    

什么是: 

  在页面中使用{{变量}}标记哪些可能发生变化的

  学名: 插值语法: interpolation


    何时:   
        
        只要页面中一个位置的内容 可能根据变量的变化而自动变化时 都是用{{变量}}来占位
    
    结果:
        
        1.所有标有{{变量}}的元素,都被加入虚拟DOM树中
        2.当变量变化时,根据{{}}中的变量名 判断当前元素是否受影响 如果受影响。则自动更新该元素的内容。


​    
​    如何:{{}}除了可以写死一个变量外 还可编写任意正确的有返回值的js表达式————用法同模板字符串中的${...}
​      
​      比如:{{算术运算}}{{比较运算}}{{三木运算}}{{调用函数}} {{创建对象/访问对象的属性}} {{访问数组的元素}}
​      
      不能放程序结构: if else while for do while



# 指令


    什么是: 为HTML增加强功能的特殊属性
    
    为什么: 传统HTML缺少程序必须的要素 比如: 变量,函数,分支,循环等,导致js重复操作量巨大。
    
    何时: 今后在Vue中,想在HTML里也实现比如分支 循环 等功能时
    
    包括: 共 13 个

### v-bind：

什么是: 
```
专门绑定元素的属性值
```

为什么: 
```
{{}}只能绑定元素的内容 不能绑定元素的属性值
```

何时: 

```
只要元素的属性值需要根据变量自动变化时,都用v-bind.
```

如何:

```
<元素 v-bind:属性="js 表达式其实简写为:属性">
```
强调:

  1. 加了:属性 值中不可用在家{{}}

  2. 加了:的属性,""就是{{}}的作用 ""中不但可以写值/变量,而且也可以写js表达式



# 控制元素的显示和隐藏

控制一个元素的显示和隐藏

````html
  <元素  v-show="条件表达式" >
  <div v-show="isLogin">你好：Kiven</div>
````

  调整css中display属性，DOM已经加载，只是CSS控制没有显示出来。

结果: 

如果条件表达式执行结果为true 则当前元素显示--自动将v-show替换为 display:block  / 反之  false    display:none



### 控制两个元素的二选一显示隐藏

  问题: v-show 如果控制多个元素多选一显示隐藏,必须把判断条件
  在每个元素上都重复写一遍,代码繁琐！

解决: 

#### v-if v-else


```vue
如何:
       <元素 1 v-if="判断条件">
       <元素 2 v-else>
  
  结果:
      如果判断条件返回true 就显示第一个元素,删除第二个元素
      反之 
      如果判断条件返回false 就显示第二个元素,删除第一个元素
  强调:
      1.两个元素之间不能插入其他元素
      2.v-else 不需要属性值
```



### 控制多个元素多选一显示隐藏 



  #### v-else-if

`````vue
  <元素 1 v-if="条件 1">
  <元素 2 v-else-if="条件 2">
  <元素 3 ...> 
  <元素 n v-else> 
  原理:
      从上向下依次判断每个v-if或v-else-if后的条件
      只要不满足救删除该元素
      只有满足条件就保留下来用于显示
      如果判断走到了下一个元素 隐含着上一个元素条件肯定不满足

  强调:

         1. 两个元素之间不能插入其他元素
         2.   v-else 不需要属性值

`````

  ### 总结:v-show vs v-if

  v-show 采用 display:none  隐藏元素 - 效率高,因为未改变DOM树结构

```vue
  v-if 采用直接删除元素隐藏元素 - 效率略低
```


```vue
v-if： 判断是否加载，可以减轻服务器的压力，在需要时加载。
v-show：调整css dispaly属性，可以使客户端操作更加流畅。
```

## 三目:

```vue
1 一个条件, 2件事, 二选一执行：
    
    条件?操作1:操作2
```


​        
​    2 多个条件, 多选一执行:
​        
```vue
        条件1?操作1:
    
        条件2?操作2:
    
            操作3
    
    其实: ? 代替的是if  :代替的是else
        
        if(条件1)
            操作1
        else if (条件2)
            操作2
        else 
            操作3
```







```        
总结:
    1. 只要绑定元素内容:{{}}
    2. 只要绑定元素属性值: :属性={{}}
    3. 只要控制一个元素的显示隐藏: v-show
    4. 只要控制两个元素,二选一显示隐藏: v-if v-else
    5. 只要控制多个元素,对选一显示隐藏: v-if v-else-if v-else
```

# 指令 

反复生成多个相同结构的元素

前提:一定有一个数组或一个数值,让你可参照着反复生成元素内容
            
```html
    <要反复生成的元素 v-for="(item,i)of 数组或数值">
            在<子元素>中可以使用item和 i 作为要绑定的值..
    </要反复生成的元素>
```

## 模板写法

```html
     <li v-for="item in items">
            {{item}}
    </li>
```

## JS 写法

```js
    var app=new Vue({
        el:'#app',
        data:{
            items:[20,23,18,65,32,19,54,56,41]
        }
    })
```


原理:
    数组中有几个元素,vue在扫描时 就会创建几个相同结果的元素。 
    每遍历数组中的一个元素,就可以获得两个值第一个变量item 获得数组中当前元素的值,第二个变量i获得当前正在遍历数组元素的下标位置。

 强调:
      1. 想重复生成那个元素,v-for就放在那个元素上！

    v-for=" of  " 原理和js中的 for of 完全一样,只不过js
      中的 for of 只能获得元素的内容 无法获得元素的下标, 而
      vue中的  v-for of 即可获得内容 又可获得下标.


  坑: vue 中要修改数组中某个元素,让页面自动更新 决不能用下标修改  必须用API修改。 因为vue不监控下标 只监控API调用

    3.问题: 没有数组 只有数量 也想反复生成多个相同结构的元素
      解决:vue中的v-for of 后不但可以写数组 而且可以写数字！ js的for of 肯定不行！


​    
## 排序

```js
我们已经顺利的输出了我们定义的数组，但是我需要在输出之前给数组排个序，那我们就用到了Vue的computed:属性。
        
            var app=new Vue({
                    el:'#app',
                    data:{
                        items:[20,23,18,65,32,19,54,56,41]
                    },
                    computed:{
                        sortItems:function(){
                            return this.items.sort();
                        }
                    }

                })
```


```js
在computed里新声明了一个对象sortItems，如果不重新声明会污染原来的数据源，
这是Vue不允许的，所以你要重新声明一个对象。

    var app = new Vue ({
        el:'#app',
        data:{
            items:[20,23,18,65,32,19,5,56,41]
        }
    })
```

自己编写一个方法sortNumber，然后传给我们的sort函数解决这个Bug


```js
function sortNumber(a,b){
    return      a-b
}

用法:

computed:{
    sortItems:function(){
        return this.items.sort(sortNumber);
    }
}
```

实现了真正的数字排序，这是在工作中非常常用的，一定要学好，记住。

# 对象的循环输出

定义个数组

```js
students:[
    {name:'PanPaN',age:32},
    {name:'Panda',age:30},
    {name:'PanPaN',age:21},
    {name:'King',age:45}
]
```


在模板中输出

```html
<ul>
    <li v-for="student in students">
        {{student.name}} - {{student.age}}
    </li>
</ul>
```

加入索引序号：


```js
// 数组对象方法排序:
function sortByKey(array,key){
    return array.sort(function(a,b){
        var x=a[key];
        var y=b[key];
        return ((x<y)?-1:((x>y)?1:0));
    });
}
```

有了数组的排序方法，在computed中进行调用排序


```js
sortStudent:function(){
	return sortByKey(this.students,'age');
}
```

vue低版本中 data里面的items和computed里面可以一样，但是高版本，是不允许相同名称。




# 绑定事件

```vue
 <元素 v-on:事件名="处理函数"> 可简写为 @事件名="处理函数"
   
        <button v-on:click="jianfen">减分</button>
        <button @click="jianfen">减分</button>
   
说明: 如果处理函数不需要参数,可省略()
         
        如果处理函数需要参数 也可加(实参值,...)
         如果处理函数需要获得事件对象
        
1. 不需要再绑定时传参

2. 只在methods中定义函数时添加第一个形参e即可 

3. e获得的对象和DOM中的事件对象 e, 完全一样 .

4.如果处理函数既需要获得参数,有需要获得事件对象时 就要在绑定时 既提供实参值 提供$event 
其中$event是vue中独有的关键词 代表DOM中的事件对象.
```

## 绑定其它事件

然后绑定回车事件，回车后把文本框里的值加到我们的count上

```js
<input type="text" v-on:keyup.enter="onEnter"   v-model="secondCount">
```

v-model 数据源

Js 代码

```js
onEnter:function(){
    this.count=this.count+parseInt(this.secondCount);
}
```




# 绑定HTML片段内容

    问题:{{}} 不能用于绑定html片段 如果{{}}绑定的是 HTML片段 不会解析其中的内嵌标签和特殊符号 而是尽量保持原样显示
    
        解决: 今后 凡是绑定HTML片段 都用v-html 
        强调: v-html 是指令 应该放在开始标签


# 需要注意的是：在生产环境中动态渲染HTML是非常危险的

    因为容易导致XSS攻击。所以只能在可信的内容上使用v-html，永远不要在用户提交和可操作的网页上使用。 完整代码



# 防止用户短暂看到{{}}

问题:如果vue加载慢,可能导致用户看到{{}}语法
        
解决:cloak 隐藏

```js
1. v-cloak 指令:
          专门用于 new Vue加载完毕之前 临时隐藏个别元素 

如何 2 步: 
               
      1. 问题: 因为v-cloak自己不带隐藏样式,所以 要先在<style> 中 属性选择器 为 有v-cloak 添加隐藏样式 ,vue 在加载完之后 会自动移除所有元素上的v-cloak属性。
                
      2. 在要隐藏的元素上 添加v-cloak属性 不要给属性值.
         适用于暂时隐藏大片内容复杂的元素
                
       问题: v-cloak 是彻底隐藏 
```


​            
​     2.  如果希望保持其他样式,仅内容暂时隐藏
​               
​    v-text="表达式"  
​               
     原理: 
           如果vue没有加载完,v-text="属性",反正浏览器也不认识,自然元素中就没有任何显示.
           当Vue加载完 解析到v-text时 才为当前元素填充文本内容


​          
  ## 总结: 

          今后,尽量用v-text代替{{}},绑定普通文本内容 如果字符串需要动态生成,
          
          而且拼接逻辑比较复杂,首选{{}}+v-cloak隐藏
         
          如果父元素中子元素内容结构复杂,想全部隐藏这部分元素及其子元素时,首选v-cloak;

  ````
  只在页面加载时 自动绑定一次 之后 即使变量变化 也不自动更新页面.
    原理:只在首次扫描真实DOM树时 替换一次内容 且并没有将这个元素添加到虚拟DOM树       所以 今后变量变化 不会再扫描这个元素
  ````


  ### 保持内容中的{{}}不被编译:
    何时:刚巧内容正文中有不希望被替换的{{}}
       v-pre

​    

# 监视函数:

 什么是:	当一个变量值 发生改变时 自动触发的函数
 何时:		 如果希望当一个变量值改变时 立刻自动执行一个操作。

```js
如何:
    new Vue({
        el:"选择器",
        data:{ 变量 }
        methods:{函数},
        watch:{
            变量名(){...}
        }
    })  
    
强调:
    
    要监视那个变量的变化 就要将监视函数的名字起的和那个要监视的变量名一样!
    触发:watch中的函数  会在data中同名变量发生改变时自动触发
```




​    

# 双向绑定: V-model

  单向绑定:只能从模型到界面的绑定(M->V)
      
  双向绑定: 既能从模型到界面的绑定(M->V),又能将界面的修改 自动更新回模型中(V->M)
      
  何时:只要绑定表单元素的值时 都用双向绑定 因为只有表单元素才让用户手动修改内容.

# 简单的双向数据绑定的代码

html 

````html
<div id="app">
    <p>原始文本信息：{{message}}</p>
    <h3>文本框</h3>
    <p>v-model:<input type="text" v-model="message"></p>
</div>
````

javascript


```js
var app=new Vue({
    el:'#app',
    data:{
        message:'hello Vue!'
    }
})
```


# 修饰符
```js
v-model.lazy // 懒加载 离开触发

.lazy：取代 imput 监听 change 事件。
.number：输入字符串转为数字。
.trim：输入去掉首尾空格。
```

## 文本框 和 文本域

```html
<input type="text" v-model="message">

<textarea cols="30" rows="10" v-model="message"></textarea>
```

# 多按钮绑定一个值

```js
<!-- 注册 多选框 绑定一个值  -->
<h3>多选按钮绑定一个值</h3>
<input type="checkbox" id="isTrue" v-model="isTrue">
    <label for='isTrue'>{{isTrue}}</label>

var app = new Vue({
    el:'#app',
    data:{
        message:"hello world",
        isTrue:true
    }
})
```


## 多选 绑定一个数组

```html
多选 绑定一个数组
<h3>多选绑定一个数组</h3>
<p>
    <input type="checkbox" id="Kiven" value="Kiven" v-model="web_Names">
    <label for="JSPang">Kiven</label><br/>

    <input type="checkbox" id="Panda" value="Panda" v-model="web_Names">
    <label for="JSPang">Panda</label><br/>

    <input type="checkbox" id="PanPan" value="PanPan" v-model="web_Names">
    <label for="JSPang">PanPan</label>
<p>{{web_Names}}</p>
</p>
```




```js
var app = new Vue({
    el:'#app',
    data:{
        message:"hello world",
        isTrue:true,
        web_names:[]
    }
})

<!-- 或取 选择内容  -->
```


# 单选绑定数据


```html
<h3>单选按钮绑定</h3>

<input type="radio" id="one" value="男" v-model="sex">
<label for="one">男</label>

<input type="radio" id="two" value="女" v-model="sex">
<label for="one">女</label>

<p>{{sex}}</p>
```


```js
var app = ({
    el:'#app',
    data:{
        message:"hello world",
        isTrue:true,
        sex:'男'
    }
})
```




## 单选按钮: 

1  value是提前写死的 选中不选中 value都是 固定不变的 所以v-model不能写在value上
          
2  因为选中不选中时修改的是checked属性 所以v-model绑定的就是checked属性‘
            

```html
<input type="radio" value="1" v-model:checked="变量"> 男
<input type="redio" value="0" v-model:checked="变量"> 女
```

      M -> V 绑定时: 用变量的值和每个value做比较   
              如果变量的值等于当前radio的value值 则当前radio选中！
      
              如果变量的值不等于当前radio的value值 则当前radio不选中！
      V - M绑定时:当选中项改变时 会用当前选中的radio的value值 更新到data中变量中
## 复选框单用:

```html
因为复选框在选中或取消选中时 改的是 checked 属性 所以 v-model也要绑定在checked 属性上
因为复选框单用,没有value,所以选中时 会自动将true 更新到变量中 如果没有选中 会将false更新到变量
        
            M -> V 绑定时 也是绑定bool值 
			<input type="checkbox" v-model:checked="变量">同意

原理:
凡是带有 v-model:的元素 都自动添加事件处理函数:oninput或onchange。在自动绑定的事件处理函数中,内置了自动修改data中变量的方法.----信任
```


## 单选列表


每一项的value都是写死的每个option上的,所以 v-model 一定不会写在每个option上 

选中项切换时 改的时value属性 所以v-model应该写在select的value上

`````
  <select v-model:value="变量">
      <option value="写死的value">
`````

````
当 M -> V 绑定时  用变量的值和每个option的值做比较 如果变量的值等于那个option的值 那么  这个option就被选中.

当 选中项改变时 将当前选中的option的value值 更新回变量中  

简写: 其实,之前所有 v-model:属性名="变量"中的":属性名"都可省略. v-model可自动根据所在元素的不同 自动决定绑定那个属性
````

比如: v-model="变量"
        
```html
如果出现文本框中

input v-model="变量名"
自动绑定的就是value属性 

如果出现在checkbox中:

<input type="checkbox" v-model="变量">

自动绑定的就是checked
```


# V-bind 绑定标签属性
  v-bind是处理HTML中的标签属性的，

```html
<div id="app">
    <img v-bind:src="imgSrc"  width="200px">
</div>
```

js

```js
var app=new Vue({
    el:'#app',
    data:{
        imgSrc:'http://baidu.com/wp-content/uploads/2017/02/vue01-2.jpg'
    }
})
```


## v-bind 缩写

```html
<!-- 完整语法 -->
<a v-bind:href="url"></a>
<!-- 缩写 -->
<a :href="url"></a>
```


​                        

# 绑定样式:

    何时:如果程序需要频繁单独调整一个元素的单个css属性时 采用绑定style属性:
    比如游戏中 控制元素上下左右移动 

### 绑定单个css属性:2种

```html
1. 将元素的style属性 当做一个字符串值来绑定
       
       <元素 :style="变量">
       data:{
       变量:"left:200px;.."
       }  
  
    问题: css属性都混在一个字符串中 不便于操作单个css属性
```


​        
```js
2 将style 作为一个对象来绑定:
        
        <元素 :style={left:left,top:top}>
          data:{
              变量:{
                  left:"10px",
                  top="10px"
              }
          }  
    
结果 
        
      也是自动将变量的值放入对象中 并翻译为一个字符串整体 
      
      问题 增多了data中的变量  不便于维护  强烈不推介

     说明:如果元素中包含部分不需要变化的内联样式:style和style其实可并存  不变的css属性 放在style中  变化的css属性放在:style中
```


​           
```html
比如: <div style="position:fixed":style="popStyle">
结果: 两个style合并一处
```

## 绑定class

```js
何时:  如果批量应用一批样式时 首选绑定class

如何:  
      1. 将整个class作为一个大的字符串绑定
            问题: 不便于操作其中一个class
       
      2. 将class属性看做一个对象结构来绑定:
            
            <元素  :class="变量">
            <div :class="className">1、绑定classA</div>
            
            data:{
                变量:{
                    class1:true/false,
                    class2:true/false,
                    class3:true/false
                }
            }
            
结果 所有值为true 的class 最后拼接成一个完整的字符串 赋值给class属性
```

## 绑定class中的数组

```html
 <div :class="[classA,classB]">3、绑定class中的数组</div>
```

绑定classA并进行判断，在isOK为true时显示样式，在isOk为false时不显示样式。

```html
<div :class="{classA:isOk}">2、绑定class中的判断</div>

<div>
    <input type="checkbox" id="isOK"   v-model="isOk">
    <label for="isOk">{{isOK}}</label>
</div>
```

## 三元表达式判断

```html
<div :class="isOk?classA:classB">4、绑定class中的三元表达式判断</div>
```

## 绑定style

```html
<div :style="{color:red,fontSize:font}">5、绑定style</div>
```

## 用对象绑定style

```html
<div :style="styleObject">6、用对象绑定style样式</div>        
```

```js
                var  app = new Vue({
                    el:"#app",
                    data:{
                        className:'classA',
                        isOk:true,
                        classA:'classsA',
                        classB:'classB',
                        red:'red',
                        font:'20px',
                        styleObject:{
                            color:'green',
                            fontSize:'16px'
                        }
                    }
                })
```



# v-pre 指令

```html
在模板中跳过vue的编译，直接输出原始值。就是在标签中加入v-pre就不会输出vue中的data值了。

            <div v-pre>{{message}}</div>
            
            原样输出 不进行渲染

这时并不会输出我们的message值，而是直接在网页中显示{{message}}
```


# v-cloak指令

```js
在vue渲染完指定的整个DOM后才进行显示。它必须和CSS样式一起使用，

        [v-cloak] {
            display: none;
        }
```


​        
```js
<div v-cloak>{{ message }}</div>
```



# v-once 指令
在第一次DOM时进行渲染，渲染完成后视为静态内容，跳出以后的渲染过程。

```html
常用
    渲染完毕显示内容

            <div v-once>第一次绑定的值：{{message}}</div>
            <div><input type="text" v-model="message"></div>
```




## 总结:

1. 元素内容变化:{{}}

2. 元素属性值变化:v-on 或 :

3. 一个元素显示隐藏:v-show

4. 两个元素显示隐藏: v-if  v-else

5. 多个元素显示隐藏: v-if v-else-if  v-else

6. 根据数组或整数 反复生成多个相同结构的元素:v-for:key

7. 绑定事件:v-on 或 @

8. 只要绑定html片段只用v-html

9. 暂时隐藏一部分元素 避免用户短暂看到{{}}:v-cloak

10. 暂时隐藏一个元素的内容 但保留结构和样式时:v-text




## 总结:

### 做vue效果的基本步骤

    1. 先做静态页面 需要切换的class 先写死
    2. 定义或获取数据保存在data中:
       1. 如果ajax请求来的数据 就直接放在data中
       
       2. 如果除了ajax请求来的数据 界面还需要其他数据就在data中补充个别变量
       
       3. 修改静态页面:
          1. 内容可能变化 用{{}}
       
          2. 属性哪可能变化就用:
       
          3. 为写死的class或显示隐藏效果添加绑定条件: 比如：class="三目"或v-show="条件"或v-if="条件"等
      
        4.先不要绑定事件 先在控制台,手动修改data中变量的值,
        测试界面动态效果是否正常.
        <!--**************************************** -->
      
        1. 如果第4步页面效果切换正常,才开始:
            查找触发事件的元素 添加事件绑定,也可以利用事件委托
            也可利用冒泡 原理和DOM中利用冒泡一样
            在事件处理函数中 不需要查找要修改的元素 都是通过修改data中的变量 来自动更新页面  


​    
<!-- 常用內部指令学完 -->
——————————————————————————————————————————————————————————————————————————————————————————————————————

#  vue2.0 全局API

什么是？

    全局API并不在构造器里，而是先声明全局变量或者直接在Vue上定义一些新功能
    
    Vue内置了一些全局API，比如我们今天要学习的指令Vue.directive。
    
    说的简单些就是，在构造器外部用Vue提供给我们的API函数来定义新的功能。


## 自定义一个全局的指令

Vue.directive( );

```html
<div id="app">
    <div v-kiven="color">{{num}}</div>
    <p><button @click="add">ADD</button><panda>
</div>
```


```js
<!-- el DOM元素   binding -->
Vue.directive("kiven",function(el,binding){
    el.style="color:"+binding.value;  

    console.log(binding)
})
```


```js
var app = new Vue({
    el:'#app',
    data:{
        num:10,
        color:'green'
    },
    methods:{
        add:function(){
            this.num++;
        }
    }
})
```



el: 指令所绑定的元素，可以用来直接操作DOM。

binding: 一个对象，包含指令的很多信息。

vnode: Vue编译生成的虚拟节点。

## 自定义指令的声明周期

自定义指令有五个生命周期（也叫钩子函数）

    分别是 bind,inserted,update,componentUpdated,unbind
    
            bind:只调用一次，指令第一次绑定到元素时调用，用这个钩子函数可以定义一个绑定时执行一次的初始化动作。
    
            inserted:被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于document中）。
    
            update:被绑定于元素所在的模板更新时调用，而无论绑定值是否变化。通过比较更新前后的绑定值，可以忽略不必要的模板更新。
    
            componentUpdated:被绑定元素所在模板完成一次更新周期时调用。
    
            unbind:只调用一次，指令与元素解绑时调用。
    
            Vue.directive("kiven",function(el,binding){


​                   
```js
            bind:function(){//被绑定
                console.log('1 - bind');
            },
            inserted:function(){//绑定到节点
                console.log('2 - inserted');
            },
            update:function(){//组件更新
                console.log('3 - update');
            },
            componentUpdated:function(){//组件更新完成
                console.log('4 - componentUpdated');
            },
            unbind:function(){//解绑
                console.log('1 - bind');
            }
        
         })
```



# Vue.extend 构造器的延申

    Vue.extend 返回的是一个“扩展实例构造器”,也就是预设了部分选项的Vue实例构造器。
    经常服务于Vue.component用来生成组件
    当在模板中遇到该组件名称作为标签的自定义元素时，
    
    会自动调用“扩展实例构造器”来
    
    生产组件实例，并挂载到自定义元素上。
    
    html


​        
```php+HTML
<author></author>
<!-- 建议使用ID 绑定 -->

<div id="author"></div>
```

Js


```js

var authorExtend = Vue.extend({
    template:"<p><a :href="authorURL">{{authorName}}</a></p>"
    data:function(){
    return {
        authorName:'JsPang',
        authorURL = 'http://jspang.com'
    }
}
});
```



```js
new authorURL().$mount('author');
new authorURL().$mount('#author');
```



# Vue.set 全局操作
    Vue.set 的作用就是在构造器外部操作构造器内部的数据、属性或者方法

html


```html
<div id="app">
    {{count}}
</div>

<p><button onclick="add()">add</button></p>
```



Js

```js
function add(){
    Vue.set(outData,'count',2);
    app.count++;
    outData.count++;
}
```


```js
let outData={
    count : 1,
    godds:'car'
}

var app = new Vue({
    el:'#app',
    data:outData
})
```


在外部改变数据的三种方法：

```js
1、  用Vue.set改变

    function add(){
        Vue.set(outData,'count',4);
    }
```


```js
2、用Vue对象的方法添加

    app.count++;
```


​    
```js
3、直接操作外部数据

    outData.count++;
```


  Vue.set 存在的意义

  由于Javascript的限制，Vue不能自动检测以下变动的数组。

            当你利用索引直接设置一个项时，vue不会为我们自动更新。
            当你修改数组的长度时，vue不会为我们自动更新。


html

```html
<h1>Vue.set 全局操作</h1>
<hr>
<div id="app">
    <ul>
        <li v-for=" aa in arr">{{aa}}</li>
    </ul>

</div>
<button onclick="add()">外部添加</button>
```



JS 

```js
<script type="text/javascript">

    function add(){
    console.log("我已经执行了");
    app.arr[1]='ddd';
    //改变 数组的值 无法改变
    //Vue.set(app.arr,1,'ddd');
}
var outData={
    arr:['aaa','bbb','ccc']
};
var app=new Vue({
    el:'#app',
    data:outData
})
</script>
```

我们的界面是不会自动跟新数组的，

我们需要用Vue.set(app.arr,1,’ddd’)来设置改变，vue才会给我们自动更新，
这就是Vue.set存在的意义。


#  Vue的生命周期 (钩子函数)

执行代码  //单页比较常用

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <script type="text/javascript" src="../assets/js/vue.js"></script>
        <title>构造器的声明周期</title>
    </head>
    <body>
        <h1>构造器的声明周期</h1>
        <hr>

        <div id="app">
            {{message}}
            <p><button @click="jia">加分</button></p>
        </div>

        <button onclick="app.$destroy()">销毁</button>
```


```js
<script type="text/javascript">

    var app=new Vue({
        el:'#app',
        data:{
            message:1
        },
        methods:{
            jia:function(){
                this.message ++;
            }
        },
        //创建之前
        beforeCreate:function(){
            console.log('1-beforeCreate 初始化之后');
        },
        <!-- 创建好 之后添加lonad动画 -->
        created:function(){
        console.log('2-created 创建完成');
    },

        // 挂在DOM树
        beforeMount:function(){
            console.log('3-beforeMount 挂载之前');
        },

            <!-- 挂在之后 -->
                mounted:function(){
                    console.log('4-mounted 被创建');
                },
                beforeUpdate:function(){
                     console.log('5-beforeUpdate 数据更新前');
                 },
                updated:function(){
                     console.log('6-updated 被更新后');
                 },

                 <!-- 路由特殊用途 -->
                 activated:function(){
                       console.log('7-activated');
                   },
                 deactivated:function(){
                        console.log('8-deactivated');
                   },
                 beforeDestroy:function(){
                         console.log('9-beforeDestroy 销毁之前');
                   },
                 destroyed:function(){
                        console.log('10-destroyed 销毁之后')
                  }

			})
    </script>
</body>
</html>
```



# Template 模板制作

```js
1 写在选项的模板

    var app=new Vue({
        el:'#app',
        data:{
            message:'hello Vue!'
        },
        template:`
    <h1 style="color:red">我是选项模板</h1>
    `
    })

2 写在 template标签里的模板

    这种写法更像是在写HTML代码，就算不会写Vue的人，也可以制作页面。

        <template id="demo2">
                <h2 style="color:red">我是template标签模板</h2>
        </template>

        <script type="text/javascript">
            var app=new Vue({
                el:'#app',
                data:{
                    message:'hello Vue!'
                },
                template:'#demo2'
            })
        </script>
```


```js
 3 写在 script 标签里的模板
    
    这种写模板的方法，可以让模板文件从外部引入。
        必须这么写 x-template

    <script type="x-template" id="demo3">
        <h2 style="color:red">我是script标签模板</h2>
    </script>
```


```js
<script type="text/javascript">
    var app=new Vue({
        el:'#app',
        data:{
            message:'hello Vue!'
        },
        template:'#demo3'
    })

</script>
```

# Component 初始组件

Vue component。其实组件就是制作自定义的标签

一 , 全局化注册组件
    全局化就是在构造器的外部用Vue.component来注册，我们注册现在就注册一个的组件来体验一下。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <script type="text/javascript" src="../assets/js/vue.js"></script>
        <title>component-1</title>
    </head>
    <body>

        <h1>component-1</h1>
        <hr>
        <div id="app">
            使用该标签
            <jspang></jspang>
        </div>

        <script type="text/javascript">

            //注册全局组件   组件名称 
            Vue.component('jspang',{
                对象 
                template:`<div style="color:red;">全局化注册的jspang标签</div>`
            })

            var app=new Vue({
                el:'#app',
                data:{
                }
            })

        </script>
    </body>
</html>
```




    javascript里注册了一个组件，在HTML中调用了他

二  局部注册组件局部

​    局部注册组件局部注册组件和全局注册组件是向对应的，局部注册的组件只能在组件注册的作用域里进行使用，其他作用域使用无效。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <script type="text/javascript" src="../assets/js/vue.js"></script>
        <title>component-1</title>
    </head>
    <body>

        <h1>component-1</h1>
        <hr>

        <div id="app">
            <panda></panda>
        </div>

        <script type="text/javascript">
            var app=new Vue({
                el:'#app',
                <!-- 定义局部组件 -->
                components:{
                "panda":{
                template:`<div style="color:red;">局部注册的panda标签</div>`
            }
          }
   		})
        </script>
    </body>
</html>
```

局部注册其实就是写在构造器里，但是你需要注意的是，构造器里的components 是加s的，而全局注册是不加s的。


## 组件  与  指令 的区别

    组件注册的是一个标签，而指令注册的是已有标签里的一个属性。在实际开发中我们还是用组件比较多，指令用的比较少。因为指令看起来封装的没那么好，这只是个人观点。

## Component 组件props属性设置

```js
    定义属性并获取属性值
        
        定义属性我们需要用props选项，加上数组形式的属性名称，
        例如：props:[‘here’]

        在组件的模板里读出属性值只需要用插值的形式，
        例如{{ here }}.
```

执行代码

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <script type="text/javascript" src="../assets/js/vue.js"></script>
        <title>component-2</title>
    </head>
    <body>
        <h1>component-2</h1>
        <hr>

        <div id="app">
            <panda here="China"></panda>
        </div>

        <script type="text/javascript">
            var app=new Vue({
                el:'#app',
                components:{
                    "panda":{
                        template:`<div style="color:red;">Panda from {{ here }}.</div>`,
                        props:['here']`

           			 }
            }
		})
        </script>
    </body>
</html>

代码定义了panda的组件，并用props设置了here的属性值，
在here属性值里传递了China给组件。 最后输出的结果是红色字体的Panda from China.
```


## 属性中 带'-'的处理方法
```js
props里如果写成props:[‘form-here’]是错误的
    我们必须用小驼峰式写法props:[‘formHere’]。

html
   
         <panda from-here="China"></panda>

js

         var app=new Vue({
            el:'#app',
            components:{
                "panda":{
                    template:`<div style="color:red;">Panda from {{ here }}.</div>`,
                    props:['fromHere']
                }
            }
        })
```


        少用-为好

# 在构造器里向组件中传值

把构造器中data的值传递给组件，我们只要进行绑定就可以了。就是我们第一季学的v-bind:xxx.

 Html文件：

```html

绑定值
<panda v-bind:here="message"></panda>
```



​    javascript文件


```js
var app=new Vue({
    el:'#app',
    data:{
        message:'SiChuan' 
    },
    components:{
        "panda":{
            template:`<div style="color:red;">Panda from {{ here }}.</div>`,
            props:['here']
        }
    }
})
```



# Component 父子组件关系

在实际开发中我们经常会遇到在一个自定义组件中要使用其他自定义组件，这就需要一个父子组件关系。
 构造器外部写局部注册组件

    局部组件的编写放到了构造器内部，如果组件代码量很大，会影响构造器的可读性，造成拖拉和错误。
    把组件编写的代码放到构造器外部或者说单独文件。
 html


```html
<div id="app">
    <panda></panda>
</div>
```

​    先声明一个对象,对象里就是组件的内容。


```js
var Kiven = {
    template:`<div>Panda from China!</div>`
}

声明好对象后在构造器里引用就可以了。
components:{
    "Kiven":Kiven
}
```



# 父子组件的嵌套 

我们先声明一个父组件，比如叫kiven，然后里边我们加入一个city组件，

我们来看这样的代码如何写

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <script type="text/javascript" src="../assets/js/vue.js"></script>
        <title>component-3</title>
    </head>
    <body>

        <h1>component-3</h1>
        <hr>

        <div id="app">
            <jspang></jspang>  
        </div>
        <script type="text/javascript">

            var city={
                template:`<div>Sichuan of China</div>`
            }

            var jspang = {

                template:`<div>
                            <p> Panda from China!</p>
                            <city></city>
                      </div>`,
                <!-- 声明标签  -->
                components:{
                "city":city
            	}
            }

            var app=new Vue({
                el:'#app',
                components:{
                    "Kiven":Kiven
                }

            })

        </script>
    </body>
</html>
```


​                

 # Componetnt 标签

    标签是Vue框架自定义的标签，
    它的用途就是可以动态绑定我们的组件，根据数据的不同更换不同的组件

1.我们先在构造器外部定义三个不同的组件，分别是componentA,componentB和componentC.


```js
        var componentA={
            template:`<div>I'm componentA</div>`
        }
        
        var componentB={
            template:`<div>I'm componentB</div>`
        }
        
        var componentC={
            template:`<div>I'm componentC</div>`
        }     
```

2.我们在构造器的components选项里加入这三个组件。

```js
        components:{
            "componentA":componentA,
            "componentB":componentB,
            "componentC":componentC,
        }
```

3 在html里插入component标签，并绑定who数据，根据who的值不同，调用不同的组件。


```html
<component v-bind:is="who"></component>
```

   对应构造器中

````js

var app=new Vue({
    el:'#app',
    data:{
        who:'componentA'
    }
````



## 执行源码

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <script type="text/javascript" src="../assets/js/vue.js"></script>
        <title>component-4</title>
    </head>
    <body>
        <h1>component-4</h1>
        <hr>
        <div id="app">
            <component v-bind:is="who"></component>
            <button @click="changeComponent">changeComponent</button>
        </div>

        <script type="text/javascript">
            var componentA={
                template:`<div style="color:red;">I'm componentA</div>`
            }
            var componentB={
                template:`<div style="color:green;">I'm componentB</div>`
            }
            var componentC={
                template:`<div style="color:pink;">I'm componentC</div>`
            }

            var app=new Vue({
                el:'#app',
                data:{
                    who:'componentA'
                },
                components:{
                    "componentA":componentA,
                    "componentB":componentB,
                    "componentC":componentC,
                },

                methods:{
                    changeComponent:function(){
                        if(this.who=='componentA'){
                            this.who='componentB';
                        }else if(this.who=='componentB'){
                            this.who='componentC';
                        }else{
                            this.who='componentA';
                        }
                    }
                }
            })
        </script>
    </body>
</html>
```





# 构造器选项

## propsData Option 全局扩展的数据传递

propsData 不是和属性相关  他用在全局扩展时进行传递数据

全局扩展的知识，作一个的扩展标签出来。

代码如下：

```html
<body>
    <h1>PropsData Option Demo</h1>
    <hr>
    <header></header>

    <script type="text/javascript">
        var  header_a = Vue.extend({
            template:`<p>{{message}}</p>`,
            data:function(){
                return {
                    message:'Hello,I am Header'
                }
            }
        }); 

        <!-- 进行挂在  挂在为 header标签 -->
            new header_a().$mount('header');

    </script>
</body>
```

​    扩展标签已经做好了，这时我们要在挂载时传递一个数字过去，我们就用到了propsData。


    三步解决传值：
    
        1.在全局扩展里加入props进行接收。propsData:{a:1} 
    
        2.传递时用propsData进行传递。props:[‘a’] 
    
        3.用插值的形式写入模板。{{ a }} 完整代码：


```js
var  header_a = Vue.extend({
    template:`<p>{{message}}-{{a}}</p>`,
    data:function(){
        return {
            message:'Hello,I am Header'
        }
    },

    props:['a']

}); 

new header_a({propsData:{a:1}}).$mount('header');
```


​            
​    propsData在实际开发中我们使用的并不多，我们在后边会学到Vuex的应用，
​    
​    他的作用就是在单页应用中保持状态和数据的。



# computed Option  计算选项

    computed 的作用主要是对原数据进行改造输出。改造输出：包括格式的编辑，大小写转换，顺序重排，添加符号……。
    格式化输出结果
    原始数据是price:100 但是我们输出给用户的样子是(￥100元）
    不污染原始数据
```js
computed:{
    newPrice:function(){
        return this.price='￥' + this.price + '元';
    }
}
```

 执行代码：


```html
<body>
    <h1>Computed Option 计算选项</h1>
    <hr>
    <div id="app">
        {{newPrice}}
    </div>

    <script type="text/javascript">

        var app=new Vue({
            el:'#app',
            data:{
                price:100
            },

            computed:{
                newPrice:function(){
                    return this.price='￥' + this.price + '元';
                }
            }

        })
    </script>
</body>
```


##  计算属性反转数组

```js
没有排序的新闻列表，是按照日期正序排列的。
var newsList=[
    {title:'香港或就“装甲车被扣”事件追责 起诉涉事运输公司',date:'2017/3/10'},
    {title:'日本第二大准航母服役 外媒：针对中国潜艇',date:'2017/3/12'},
    {title:'中国北方将有明显雨雪降温天气 南方阴雨持续',date:'2017/3/13'},
    {title:'起底“最短命副市长”：不到40天落马，全家被查',date:'2017/3/23'},
];
```

computed里的javascript代码：我们用js原生方法给数组作了反转。

```js
computed:{
    reverseNews:function(){
        return this.newsList.reverse();
    }
}

总结：computed 属性是非常有用，在输出数据前可以轻松的改变数据。
```



# Methods Option  方法选项

```html
<body>
    <h1>methods Option</h1>
    <hr>
    <div id="app">
        {{ a }}
        <p><button @click="add">add</button></p>
    </div>

    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                a:1
            },
            methods:{
                add:function(){
                    this.a++
                }
            }
        })
    </script>
</body>
```

## methods中参数的传递

```html
在methods的方法中进行声明，比如我们给add方法加上一个num参数，就要写出add:function(num){}.

调用方法时直接传递，比如我们要传递2这个参数，我们在button上就直接可以写。
<button @click=”add(2)”></button>.
```


```html
<body>
    <h1>methods Option</h1>
    <hr>
    <div id="app">
        {{ a }}
        <p><button @click="add(2)">add</button></p>
    </div>

    <script type="text/javascript">
        var app=new Vue({
            el:'#app',
            data:{
                a:1
            },

            methods:{

                add:function(num){
                    if(num!=''){this.a+=num}
                    else{this.a++}
                }

            }
        })
    </script>
</body>
```

### methods 中的 $event参数

```html
传递的$event参数都是关于你点击鼠标的一些事件和属性。我们先看看传递的方法。

传递：

<button @click=”add(2,$event)”>add</button> 。
```

# native 给组件绑定构造器原生事件

特别常用

    在实际开发中经常需要把某个按钮封装成组件，然后反复使用
    
    如何让组件调用构造器里的方法，而不是组件里的方法。
    
    就需要用到我们的.native修饰器了。
```js
声明btn对象：

    var btn={
        template:`<button>组件Add</button>`     
    }

在构造器里声明：

    components:{
        "btn":btn
    }

用.native修饰器来调用构造器里的add方法

<p><btn @click.native="add(3)"></btn></p>
```

作用域外部调用构造器里的方法

​    这种不经常使用，如果你出现了这种情况，说明你的代码组织不够好。

```html
<button onclick="app.add(4)" >外部调用构造器里的方法</button>
```


# Watch 选项 监控数据

    温度大于26度时，我们建议穿T恤短袖，温度小于26度大于0度时，我们建议穿夹克长裙，温度小于0度时我们建议穿棉衣羽绒服。

实例属性写watch监控


```js
我们watch写在构造器的外部，这样的好处就是降低我们程序的耦合度，使程序变的灵活。

app.$watch('xxx',function(){})
```


​            
```js
<!-- 实例编写 -->
app.$watch('temperature',function(newVal,oldVal){

    if(newVal>=26){
        this.suggestion=suggestion[0];
    }else if(newVal<26 && newVal >=0)
    {
        this.suggestion=suggestion[1];
    }else{
        this.suggestion=suggestion[2];
    }

})
```


​                


#  Mixins 基本使用


执行代码

```html
<body>

    <h1>Mixins Option Demo</h1>
    <hr>

    <div id="app">
        <p>num:{{ num }}</p>
        <P><button @click="add">增加数量</button></P>

    </div>

    <script type="text/javascript">

        //额外临时加入时，用于显示日志

        var addLog={

            updated:function(){
                console.log("数据放生变化,变化成"+this.num+".");
            }
        }

        var app=new Vue({

            el:'#app',
            data:{
                num:1
            },

            methods:{
                add:function(){
                    this.num++;
                }
            },

            mixins:[addLog]//混入
        })
    </script>
</body>
```



从执行的先后顺序来说，都是混入的先执行，然后构造器里的再执行

    这并不是方法的覆盖，而是被执行了两边。


​    
当混入方法和构造器的方法重名时，混入的方法无法展现

## 全局API混入方式

```js
需要这段代码的地方直接引入js，就可以拥有这个功能了。我们来看一下全局混入的方法：

Vue.mixin({
    updated:function(){
        console.log('我是全局被混入的');
    }
})
```

# Extends Option扩展选项

​    扩展实例

```html


<body>
    <h1>Extends Optin Demo</h1>
    <hr>
    <div id="app">
        {{message}}
        <p><button @click="add">add</button></p>
    </div>    
    <script type="text/javascript">

        var bbb={
            created:function(){
                console.log("我是被扩展出来的");
            },

            methods:{
                add:function(){
                    console.log('我是被扩展出来的方法！');
                }
            }
        };
        var app=new Vue({
            el:'#app',

            data:{
                message:'hello Vue!'
            },

            methods:{
                add:function(){
                    console.log('我是原生方法');
                }
            },

            extends:bbb
        })

        <!-- 先实现原生 -->
            <!-- 后实现扩展方法 -->
    </script>
</body>
```


​                                       


​                                          

## delimters 选项

    delimiters的作用是改变我们插值的符号。Vue默认的插值是双大括号{{}}。
    delimiters:['${','}']

<!-- //////////////////////////////////////////////// -->
# 实例和内置组件

    Vue和Jquery.js一起使用


     1、下载并引入jquery框架
                
    	<script  type="text/javascript" src="../assets/js/jquery-3.1.1.min.js"></script>



试着作一个案例，在DOM被挂载后修改里边的内容。

```js
<body>
    <h1>Early Examples Demo</h1>
<hr>
        <div id="app">
            {{message}}
                </div>

<script type="text/javascript">
    var app=new Vue({
        el:'#app',
        data:{
            message:'hello Vue!'
        },
        //在Vue中使用jQuery
        mounted:function(){
            $('#app').html('我是jQuery!');
        }
    })
</script>
</body>
```



# 实例调用自定义方法

在Vue的构造器里我们写一个add方法

```js
实例的方法调用它。

构造器里的add方法：

methods:{
    add:function(){
        console.log("调用了Add方法");
    }
}
```

## 实例调用：

    app.add();




## $mount方法

```js
$mount方法是用来挂载我们的扩展的，我们先来复习一下扩展的写法。

然后用$mount的方法把jspang挂载到DOM上，我们也生成了一个Vue的实例

<body>
    <h1>Examples Method Demo</h1>
<hr>
        <div id="app">
            {{message}}
                </div>

<script type="text/javascript">
    var jspang = Vue.extend({
        template:`<p>{{message}}</p>`,
        data:function(){
            return {
                message:'Hello ,I am Kiven'
            }
        }
    })
//          挂在结束后 才可以使用JQ
var vm = new jspang().$mount("#app")
</script>
```



## $destroy()
```js
一个button按钮，点击后卸载整个挂载。

    <p><button onclick="destroy()">卸载</button></p>

        function destroy(){
        vm.$destroy();
    }

$destroy()后边必须要有括号
```

## $nextTick() 数据修改方法

```js
当Vue构造器里的data值被修改完成后会调用这个方法，
也相当于一个钩子函数吧，和构造器里的updated生命周期很像。

function tick(){
    vm.message="update message info ";

    vm.$nextTick(function(){
        console.log('message更新完后我被调用了');
    })
}
```


​    
#  实例事件

<!-- 外部调用执行必须添加() -->
## $on 在构造器外部添加事件。

```js
app.$on('reduce',function(){
    console.log('执行了reduce()');
    this.num--;
});
```

    $on接收两个参数，第一个参数是调用时的事件名称，第二个参数是一个匿名方法。

## 如果按钮在作用域外部，可以利用$emit来执行

```js
//外部调用内部事件
function reduce(){
    app.$emit('reduce');
}
```

## $once执行一次的事件


```js
app.$once('reduceOnce',function(){
    console.log('只执行一次的方法');
    this.num--;

});
```

## $off关闭事件

```js
//关闭事件
function off(){

    app.$off('reduce');

}
```

 


 # 内置组件 slot讲解

 Vue 构造器里的data中给出了信息 


```js
data:{
    jspangData:{
        bolgUrl:'http://jspang.com',
        netName:'技术胖',
        skill:'Web前端'
    }
},
```



## <template></template>标签的方式定义了组件：

```html
<template id="tmp">
    <div>
        <p>博客地址：</p>
        <p>网名：</p>
        <p>技术类型：</p>

    </div>
</template>
```

## 用slot功能让组件接收传递过来的值，并在模板中接收显示。

 slot的使用需要两步：
      1、在HTML的组件中用slot属性传递值

```html
<jspang>
    <span slot="bolgUrl">{{KivenData.bolgUrl}}</span>    
    <span slot="netName">{{KivengData.netName}}</span>    
    <span slot="skill">{{KivenData.skill}}</span>    
</jspang>
```

 2、在组件模板中用标签接收值。             

```html
<template id="tmp">
    <div>
        <p>博客地址：<slot name="bolgUrl"></slot></p>
        <p>网名：<slot name="netName"></slot></p>
        <p>技术类型：<slot name="skill"></slot></p>

    </div>
</template>
```


## 执行代码

```html
<body>
    <h1>Slot content extend Demo</h1>
    <hr>
    <div id="app">

        <jspang>
            <span slot="bolgUrl">{{KivenData.bolgUrl}}</span>    
            <span slot="netName">{{KivenData.netName}}</span>    
            <span slot="skill">{{KivenData.skill}}</span>    
        </jspang>

    </div>
    <template id="tmp">
        <div>
            <p>博客地址：<slot name="bolgUrl"></slot></p>
            <p>网名：<slot name="netName"></slot></p>
            <p>技术类型：<slot name="skill"></slot></p>

        </div>
    </template>

    <script type="text/javascript">
        var jspang={
            template:'#tmp'
        }

        var app=new Vue({
            el:'#app',
            data:{
                jspangData:{
                    bolgUrl:'http://Kiven.com',
                    netName:'Kiven',
                    skill:'Web前端'
                }
            },
            components:{
                "Kiven":Kiven
            }
        })
    </script>
</body>            
```

何时: 当一个常用的DOM操作 , Vue没有提供对应的指令时
如何:    

```js
1. 向vue 中添加一种新的自定义指令
Vue.direction("指令名",{
    inserted(domELem){
        对domELem执行常用的DOM操作
    }
})

结果:

1.在vue类型中就多出一种新的指令

2.将来在运行时 当vue扫描到那个DOM元素上带有这个自定义指令,就自动触发内部的inserted函数 自动获得当前dom元素对象 然后再 inserted 函数 自动获得当前dom元素对象,然后再inserted函数 对当前dom元素执行想要的操作。
```


​        
​    2. 使用自定义指令: 和使用官方指定是一样的  只不过不用带参数。
​    
​    <元素 v-指令名>
​    
    强调: 使用指定时  必须还要加v-前缀


## 计算属性:

什么是: 

    不实际保存属性值 仅通过其他属性计算获得属性值

   computed

何时:

```js
只要一个属性的值不是现成的 而需要通过其他属性计算 才能获得!

    如何: 2步
    1. 定义计算属性 根据其他属性的值 动态计算获得自己的属性

    new Vue({
        el:'选择器',
        data:{变量},
        methods:{ 函数 },
        watch:{ 监视函数 },
        computed:{
            属性名(){
                //计算属性本质是一个函数 但是 函数名确是名词！
                通过data中其他比变量 计算获得统计结果并返回。
                return 计算结果
            }
        }
    })
reduce
2. 使用计算属性进行绑定

计算属性用法,和普通属性完全一样！
强调不要加()
```


​        
​    computed vs methods
​    methods 中的函数 反复调用 几次 就需要重复计算几次 如果反复使用效率低
​    
​    computed中的计算属性 只在首次使用时 计算一次
​    之后即使重复使用计算属性,也不会重复计算 效率高
​    Vue 会缓存计算属性的计算结果。
​    
    只有计算属性依赖的变量发生变化 才重新计算一次 重新缓存计算结果反复使用



## 总结：

        1 如果希望使用计算结果这个值时 首选计算属性
    
        2 如果希望执行一系列操作动作时 首选 methods 




## 过滤器:

   1. 什么是: 专门对原始类型的值进行加工后再显示的函数 
   
   2. 为什么:
          
           因为有些数据库中保存的原始值 人是看不懂的 所以需要加工后 在给人看
          
            比如: 性别！ 日期和时间  状态！
        何时 只要是原始属性,必须经过加工后 才能给人看时

        如何:

        ```js
        1.添加过滤器
        Vue.filter("过滤器",function(oldVal){ 
            return 处理后的新值
        }) 
        
        2. 使用过滤器:
        在绑定语法中 :{{变量|过滤器}}   
        ​```
        
        过滤器还可以加参数：
        1.添加过滤器时 就要额外多写一个形参
        
        ​```js
        
        Vue.filter("",function(oldVal,其他形参...){
            return  根据不同的实参值返回不同的结果  
        }) 
        ​```
        使用过滤器时,可加()传入实参值:
        
        ​```js
        在绑定语法中 :{{变量|过滤器(实参值,)}}
        
        强调: 第一个实参值 就写在实参列表的第一个位置，不会覆盖过滤器函数定义的第一个形参oldVal 而是自动传给过滤器函数第二个形参变量。 过滤器第一个形参,永远接到的是变量的原始值.   
        ​```
        
        多个过滤器可以连用:
        
        使用过滤器时,多个过滤器可用|连接
        强调: 后一个过滤器收到的不一定是原始值 而是前一个过滤器处理后的中间产物
        ```


​        

## axios
  什么是: 专门发送ajax请求的js函数库

  为什么: 发送ajax请求

    1.编写原始ajax四步:繁琐
    
    2.自己封装ajax函数:功能弱
    
    3.jQuery中有ajax函数: $.ajax()
    在Vue通常不会用到jquery库 所以仅仅为了一个ajax函数 将整个jQuery库引入项目 小题大做！
    
    4. Vue官方提供了vue-resource模块; 已不再更新
    
    5. Vue官方推介使用第三方函数库:axios



    何时: 今后只要在vue中发送ajax请求 都可用 axios


​    
​    说明: axios其实是独立的函数库 并不仅仅局限于vue中！


​    
```js
如何: 
  
  1.发get请求:
  
        axios.get("服务器接口地址",
        {   
            params:{
                参数:值,
                ...:...
            }
        }.then(result=>{
            result.data   才是服务器端返回的结果！
        })
    )  
    
  2. 发 post 请求
        补 如果服务端发给出的接口是post类型 可用postman软件先测试一下
   
    axios.get(
            "服务器接口地址",
            "查询字符串"
            //本来字符串
            //比如:"uname=dingding&upwd=123456" 不推荐
            推荐: 对象语法 qs.min
            但是必须借用一个工具 //querystring
            Qs的stringfiy函数可将对象转为查询字符串格式
            //<script src="js/qs.min.js">
            Qs.stringify({
                变量 1:值1,
                变量 2:值2
            })
            转换之后:"变量=1值1 & 变量2=值2"
        ).then(result=>{
            result.data   才是服务器端返回的结果！
        })
```

# 组件(Component):

 什么是: 拥有专属的HTML Css Js 和数据的可重用页面独立区域

为什么: 重用！

何时: 只要发现一个功能区域需要反复使用 都要先封装为组件.

如何:   

 1. 创建一个组件

```js


Vue.Component("组件名",{
    //每个组件内都是一个完整的小社会
    //new Vue中能写什么 组件中就能写什么！

    - el:"选择器"-,
        template:`HTML片段,必须包在一个唯一的父元素内,—— —— 因为组件的HTML片段不是只用一次 而是反复复制到页面				上  用了几次 就复制几次 所以这最初的一次HTML片段·定义,就称为今后的模板`

     - data:{变量} -,

     data(){
        return {
            变量:值1
            ...:...
        }
    } ,
        
   ———— 因为每重用一次组件 都需要一个新创建的数据,而不是和之前创建的混用！
    所以 每使用一次组件时 都自动调用data()函数 返回一个为本次组件专门创建专属的新对象

    methods:{函数}
    watch:{监视函数}
    computed:{计算属性}
})  
```

2. 反复使用: 

    组件其实就是一个可重复使用的自定义的HTML标签而已.<组件名/>
    
    强调:如果组件名由多个单词组成:
    不要用驼峰命名:因为组件名就是标签名 而HTML不区分大小写 所以拼写相同 但是大小写不同,是不能区分不同标签的
    
    所以,如果组件名由多个单词组成 可用-分割多个单词:<my-header>..


原理:

    1.new Vue()在扫描真实DOM树时 发现组件标签
    2. 在Vue家里找到组件标签同名的组件类型
    3. 用组件类型中的template HTML片段  代替界面中组件标签的位置
    4. 为这个位置的组件标签 创建一个专属的data{}对象
    5. new Vue()发现几处组件标签    就用组件中的HTML模板片段 代替几处组件标签 就反复调用几次 data()重复创建几个相同的data对象给没处组件 专属使用时 互不干扰




## 组件化开发:
    什么是组件化开发: 将来所有的页面,都是由组件组成的
    拿到页面后 第一件事就是划分组件
    
    为什么:
           1. 便于分工和协作
           2. 松耦合
    
    何时: 今后几乎所有的前段项目都是组件化开发
    
    如何: 
            1. 将一个页面划分成多个组件 并创建多个组件类型
            2. 在一个html中 将分头编写的多个组件,再组合起来
 原理: 

````
 1. new Vue()会扫描主页面 只要碰到组件标签 就会用组件的模板片段代替标签所在的位置  
````

     2. 替换后, 为防止有更子一级组件 还会重复扫描更替换上来的组件模板内容 如果发现更子一级组件标签 则继续替换.

   问题: Vue.component()创建的是全局组件！ 没有使用限制

   解决:  组件的分类:

    1.根组件: new Vue()
    2.全局组件: 可以用到任何页面的任何位置 没有先限制
    3.子组件:仅能在一个指定的父组件内使用的组件            
   如何:2步:

```js
1.创建子组件:
1.内部结构和全局组件是完全一样的。、
2.但是要将全局组件降级为普通的js对象 且子组件的对象名必须用驼峰命名

2. 为父组件添加 components:

父组件{
    template:`...`,
        data(){return{}},
        ....
        components:{
            子组件对象名,比如:todoAdd,todaList
        }
    Vue会自动将 todoAdd-><todp-add>
        自动翻译
} 
```

## SPA: Single Page Application

  什么是: 一个应用程序中 只有一个完整的HTML页面 

    其他所谓的页面  其实都是一些较大的组件而已 所谓的页面跳转 其实是更换不同的组件加载而已

 为什么: 

 ## SPA Vs 多页面
        1. 请求次数:
            多页面应用 没换一次网页都需要重新请求服务器 重新下载网页文件————增加了请求次数  增大了服务器负担 同时也增加了用户等待
    
            单页面应用 在首次请求页面时 就把所有的组件一起下载下来 今后 切换页面其实就是在客户端本地切换不同组件显示而已 不需要反复请求服务器 ———— 减少了请求次数 减轻了服务器的负担 避免了切换页面等待的时间 提高了用户体验
    
        2. 加载效率:
            多页面应用 每换一次网页都需要重建整颗DOM树 效率低！
            单页面应用 因为只替换页面中部分内容 不需要重建整颗DOM树 所以效率高！
    
        3. 公共资源:
            多页面应用 因为每个页面都包含<link><script> ,所以 每更换一次页面都重新请求这些公共资源————也增加了请求次数 增大了服务器负担 也增加了用户等待的时间
            单页面应用 因为唯一完整的index.html  文件只在首次记载时 下载一次<link> 和 <script>也仅在首次加载时下载一次. 之后更换页面组件 不会重新加载<link>和<script> 减少了请求次数 减轻了服务器的负担 避免了切换页面等待的时间 提高了用户体验
    
        4.  页面过渡效果:
                多页面应用不可能实现页面过渡效果,因为两个.html文件不可能并存在一个浏览器窗口内！
                 单页面应用, 因为所有组件都是以元素方式 保存在客户端 所以完全可以通过 定位 CSS3 变换的方式 实现页面组件之间的切换效果.          


        5. 首屏加载效率: ———— SPA的缺点
            多页面应用 首屏只需要下载第一个页面的内容 其他页面内容暂时不需要下载 所以 首屏加载快
    
            单页面应用 首屏就要把所有的组件内容都下载下来  所以首屏加载慢————已解决: 配合打包工具webpack 让组件的js文件异步延迟加载: 先加载首屏组件用着 其他组件js在后台异步下载 不影响首屏下载速度 



   ## 如何实现: 4 种
```js
    1. 创建一个唯一完整的HTML页面,应该包含new Vue()
 
         引入: <script src="js/vue.js"> 
                <script src="js/vue-router.js"> </script>
        在<div id="app">内:添加占位符
               <router-view/>
 
    2. 创建多个组件:
 
          需求中有几个页面 就创建几个子组件来包含页面的内容 
          多个页面公用的组件,才创建为全局组件 并在各个页面中需要的位置引入全局组件标签.
        
    3. 创建路由字典和路由器对象:
 
          路由字典: 保存一组相对路径和组件名对应关系的数组:
            var router=[
                {path:"/index",component:index},//默认路径
                {path:"/index",component:index},
                {path:"/detalis",component:detalis},
                {path:"/login",component:detalis},
                {path:"/*",component:{
                    template:`<h2>404:Not Found </h2>`
                }}
            ]
        
        问题: router 只是一个字典 无法完成替换组件的动作:
        路由器对象:
        
            创建路由器对象 将路由字典装入路由器对象中,

            原理:
        
                路由器对象始终监视地址栏中的url地址后的#锚点地址变化。(Vue 客户端路由采用的是锚点地址)
                只要锚点地址变化 立即从理由字典中 找到对应的组件 替换唯一完整的HTML中的<router-view>区域

    4. 将所有的页面组件,路由器都引入唯一完整的HTML中 
    还要将路由器对象 装入new Vue({}) 
```



## 路由跳转: 2种:

1. 在HTML中: 不准再用a

```html
<router-link to="/相对路径">文本</router-link> 
自动翻译成
<a href="#/相对路径">文本<router-view>
```

2. js中:

```js
 this.$router.push("/相对路径")  
```


​       
  路由传参:3步:

```js
       1.接收参数的页面字典中就要配置参数:
            {path:"/detalis/:lid",component:detalis,props:true} 
                            变量名
                其中: props:true 让url中参数动称为props中的自定义属性
                结果: props:["lid"]这个lid就可自动接到url中的值

        2. 在要接收参数的目标组件中 添加与路由参数相同的自定义属性变量:
        
            var details={
                ...
                props:["lid"]这个lid就可自动接到url中的值 在 details也
                页面内 像普通变量一样使用
            }
        
        3. 跳转时: 应该在相对路径之后加“/参数值”
            强调:
                   1.  不要有？
                   2.  不要写参数名=
                   3.  /直接跟参数名
```

 脚手架必选三项
```js
        Babel  Router Vuex   
        vue history模式  没有# 
        npm run serve 启动开发服务器 
```

# 脚手架:

```js
什么是脚手架： 已经包含标准项目文件夹结构和核心功能代码的半成品项目
为什么:
    1. 简化开发:
    2. 标准化开发:

何时:

今后几乎所有项目的创建 都是用脚手架代码 比如: nodejs expess,vue,微信小程序,
    ,ng,react, 所以今后 每学一项新技术, 首先要找到脚手架代码！
```

如何: 2步：

安装

    npm i -g @vue/cli

用脚手架生成工具为本次项目生成一套脚手架结构代码：

````
vue create 项目名 
````

```js
在vscode 中调试脚手架代码:
    1. 打开vscode -> 文件 -> 打开文件夹 -> 选项目文件夹
    2. 右键单击package.json 文件 选在终端中打开
    3. 在终端输入 npm run serve
    4. 按 ctrl  点链接：http://localhost:8080
    结果自动打开浏览器,显示正在调试的页面
```

  ## 脚手架的项目结构:

```html
public 文件夹:
    不需要编译和打包的文件 都要放在public文件下

    包括:
    1. 唯一的index.html页面
    2. 图片文件夹 视频 影音 压缩比例最小
    3. 从第三方下载的已经压缩过的通用的库
        bootstrap.min.css
        jquery-1.11.3.min.js
        bootstrap.min.js

4. 在唯一完整的 index.html 开头  引入公共的css或js库

src 文件夹:
一切我们自己编写的内容都要放在 src 文件夹下

包括:
    页面组件都要放在views文件夹下
    全局组件/子组件都要放在components文件夹
    自己编写的公共的css 和 js 库 都要放在assets下 

比如:
base.css  基本样式

App.vue相当于之前的<div id = "app">

main.js 相当于之前的 new Vue({})
    
    很多配置,都需要在 main.js 中的 new Vue()之前
    定义好, 才能 new Vue()
    比如: 
    1. 全局组件的创建
    2. axios的配置和引用

router.js 相当于之前的路由字典和路由器

    当修改了页面的结构 添加了新页面组件,或删除了旧的页面组件
    都要在router.js中配置路由字典
```

## 一个 .vue文件的内容:

```js
  1. 一个.vue文件就是一个组件 要创建几个组件 就要添加几个
  .vue文件
  
  2. 每个vue文件中 都包含3样东西:
  
      1. HTML:
        每个组件的HTML片段 都写在 一个 
        <template></template> 内 ———— 相当于之前组件对象中
        的 template:`HTML片段`属性,且不再放在字符串中
        有了提示和颜色显示
  
      2. 组件对象的js: 
          export default{
              除了没有template外,其余和之前完全一样！
          } 
          但是,Vue脚手架采用的是模块化开发！
          回顾: node中的模块:
             
        1. 如果封装了一个pool模块 其中包含一个query函数。如果
              想让别人使用这个模块的内容必须module.exports 将内容以
              对象形式抛出
                      function query(...){...}
                      module.exports={query} 
        2.别人想使用 pool 模块中的query, 就要用require()引入
              亮哥抛出的模块 然后才能调用模块对象中的用法
    
              var  pool = require("../pool.js")
    
                  pool.query()
```

  ## Vue 脚手架里的模块化开发要求:
```js
    1. 每个组件其实都是一个模块对象 组件对象定义好后
    都要用 export default{...}抛出
        代替了 module.exports=

    2. 任何想使用这个组件对象的地方,都要用import 变量 from "路径/组件.vue"
    先引用组件对象,并起别名,才能使用。
        import 变量  from 代替了 const 变量 = require("...")
```

## CSS

```js
  1. 可直接将 css  代码写在<style  scoped></style>内部
      scoped 可自动为每个选择器加一个统一的随机的前缀!与其他组件的即使同名的class自动
      区分。 比如: .fade{...} 会被 scoped 翻译为: .fade[随机父组件名]{....}

      问题: css 和 HTML.js 混搭不便于维护。

  2. 在assets/css 文件夹中独立编写css文件, 再在<style></style>标签内,用@import url(...)
  引入！ 
      问题: scoped 失效,只能靠自己的书写习惯来避免组件间样式冲突.
```


​                    

    全局组件:指多个页面公用的功能
    
    子组件:必须包含在父组件内的组件
        
    所谓的页面组件 其实也是子组件:
    
    		var 页面={...}
    
    只不过页面组件代表的是一个较大的    完整的页面功能 用途不一样而已

## cli: 命令行工具 

````
npm run server
启动开发服务器
````

Compiled 编译

npm i -save axios


## router.js

```js
{path:"/*", component:{ template:`<h1>404 NotFound</h1>`}}
   
报错: 不支持临时编译模板
答
    脚手架代码中的 router.js 中的某一条路由地址对象里的component属性后 不能接一个临时的{template:`html片段`},因为脚手架代码不支持临时编译模板 所有模板都提前放在正式的.vue文件中。
```



1. 生命周期
2. $router and $route
3. 如何配置axios的基本url地址 


##  生命周期
```js
 每个组件(根组件,全局组件,子组件)都有自己的一套加载过程————称为组件的生命周期

    包括: 4个阶段
            1. 创建 create: 仅创建了 new Vue()或组件对象 同时创建了组件对象中的data对象
       
            2. 挂载 mount: 开始扫描真实DOM树 形成虚拟DOM树,并首次替换绑定内容为data中的变量值.
       
            3. 更新 update: 在任何位置修改了data中的变量值 就会触发更新阶段
       
            4. 销毁 : 只在调用$destroy()函数 销毁组件时 才触发销毁阶段

    为什么: 有些事儿 必须在指定的阶段 自动被调用执行
    比如: 当组件对象创建后 自动发送ajax请求 加载数据
    如何:
     
        vue 中每个生命周期的执行阶段前后 都有一个钩子函数

    包括:
        beforeCreate() Created()  beforeMount() mounted() 
```



## $router vs $route

    问题:  一个带参数的路由地址 仅修改参数值,不修改相对路名 整个页面刷新的,无法加载新参数值对应的内容。
    因为单页面应用！


​    
​    解决方案一: 地址栏中参数值变化 说明props中的变量值个跟着变了！ 可以在watch中 监视变量,只要props变量变化,就重新查找数据,修改data中的变量 引发更新页面。
​    
​    解决方案二: 监视地址栏中的参数$route
​    $route 
​        DOM 中有location 对象代表地址栏 可获得地址栏中的信息
​        
        Vue中有$route代表地址栏!
            比如:不用props获得参数lid
                 也可以this.$route.params.lid    
                     this.lid


    $route VS $router
        $router 是路由器对象 专门执行跳转动作的对象
        $route 是封装地址栏信息的对象是保存数据的不执行操作

# 如何配置axios的基本url地址:

```js
问题: 服务器端部署位置的地址 经常发生变化.如果客户端每个.vue文件中 都要写完整的域名/相对地址 那么每次服务端地址修改,都要修改所有.vue中的请求地址————想到那个不方便@

    解决: main.js中
        axios.defaults.baseURL="http://服务器地址"
    其他.vue中
  
    this.axios.get("/相对地址",参数).then(...)
    结果: 将来运行时 会将baseURL+/相对地址 形成完整地址
    而如果服务端地址变化,则只需要修改main.js 中 baseURL一处,就可切换不同服务器！
```

  

```js
1. main.js：
   axios.defaults.baseURL="http://localhost:5050";
  
2. Index.vue:
    this.axios.get("/index")
  
3. Details.vue:
    this.axios.get("/details",...)
```





 ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————  

细致 脚手架

#  Vue-Cli

        Vue-cli是vue官方出品的快速构建单页应用的脚手架


        webpack，npm，nodejs，babel

## 安装

    npm install vue-cli -g

## 初始化项目

    vue init 命令初始化项目
    
        init：表示我要用vue-cli来初始化项目
    
        <template-name>：表示模板名称，vue-cli官方为我们提供了5种模板，
    
        webpack-一个全面的webpack+vue-loader的模板，功能包括热加载，linting,检测和CSS扩展。  常用
    
        webpack-simple-一个简单webpack+vue-loader的模板，不包含其他功能，让你快速的搭建vue的开发环境。
    
        browserify-一个全面的Browserify+vueify 的模板，功能包括热加载，linting,单元检测。
    
        browserify-simple-一个简单Browserify+vueify的模板，不包含其他功能，让你快速的搭建vue的开发环境。

## 在实际开发中

一般我们都会使用webpack这个模板，那我们这里也安装这个模板，

在命令行输入以下命令：

    vue init webpack vuecliTest


```js
Project name :项目名称 

Project description:项目描述

Author：作者，如果你有配置git的作者，他会读取。

Install vue-router? 是否安装vue的路由插件  Y

Use ESLint to lint your code? 是否用ESLint来限制你的代码错误和风格。我们这里不需要输入n，如果你是大型团队开发，最好是进行配置。
```


​    setup unit tests with Karma + Mocha? 是否需要安装单元测试工具Karma+Mocha，我们这里不需要，所以输入n。
​    

    Setup e2e tests with Nightwatch?是否安装e2e来进行用户行为模拟测试，我们这里不需要，所以输入n。



进入我们的vue项目目录。

```
cd vuecliTest 
```

安装我们的项目依赖包，

````
npm install 
````

也就是安装package.json里的包，如果你网速不好，你也可以使用cnpm来安装。

开发模式下运行我们的程序

`````
npm run dev 
`````

### Vue-cli 项目目录结构讲解


    vue-cli脚手架工具就是为我们搭建了开发所需要的环境，为我们省去了很多精力。有必要对这个环境进行熟悉，我们就从项目的结构讲起。


                .
                |-- build                            // 项目构建(webpack)相关代码
                |   |-- build.js                     // 生产环境构建代码
                |   |-- check-version.js             // 检查node、npm等版本
                |   |-- dev-client.js                // 热重载相关
                |   |-- dev-server.js                // 构建本地服务器
                |   |-- utils.js                     // 构建工具相关
                |   |-- webpack.base.conf.js         // webpack基础配置
                |   |-- webpack.dev.conf.js          // webpack开发环境配置
                |   |-- webpack.prod.conf.js         // webpack生产环境配置
                |-- config                           // 项目开发环境配置
                |   |-- dev.env.js                   // 开发环境变量
                |   |-- index.js                     // 项目一些配置变量
                |   |-- prod.env.js                  // 生产环境变量
                |   |-- test.env.js                  // 测试环境变量
                |-- src                              // 源码目录
                |   |-- components                     // vue公共组件
                |   |-- store                          // vuex的状态管理
                |   |-- App.vue                        // 页面入口文件
                |   |-- main.js                        // 程序入口文件，加载各种公共组件
                |-- static                           // 静态文件，比如一些图片，json数据等
                |   |-- data                           // 群聊分析得到的数据用于数据可视化
                |-- .babelrc                         // ES6语法编译配置
                |-- .editorconfig                    // 定义代码格式
                |-- .gitignore                       // git上传需要忽略的文件格式
                |-- README.md                        // 项目说明
                |-- favicon.ico 
                |-- index.html                       // 入口页面
                |-- package.json                     // 项目基本信息

### package.json 

        dependencies字段和devDependencies字段
    
        dependencies字段指项目运行时所依赖的模块；
    
        devDependencies字段指定了项目开发时所依赖的模块；

### webpack配置相关

我们在上面说了运行npm run dev 就相当于执行了node build/dev-server.js

说明这个文件相当重要，先来熟悉一下它。 我贴出代码并给出重要的解释。

##### dev-server.js

```js
// 检查 Node 和 npm 版本
require('./check-versions')()

// 获取 config/index.js 的默认配置
var config = require('../config')

// 如果 Node 的环境无法判断当前是 dev / product 环境
// 使用 config.dev.env.NODE_ENV 作为当前的环境

if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)

// 使用 NodeJS 自带的文件路径工具
var path = require('path')

// 使用 express
var express = require('express')

// 使用 webpack
var webpack = require('webpack')

// 一个可以强制打开浏览器并跳转到指定 url 的插件
var opn = require('opn')

// 使用 proxyTable
var proxyMiddleware = require('http-proxy-middleware')

// 使用 dev 环境的 webpack 配置
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic

// 如果没有指定运行端口，使用 config.dev.port 作为运行端口
var port = process.env.PORT || config.dev.port

// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware

// 使用 config.dev.proxyTable 的配置作为 proxyTable 的代理配置
var proxyTable = config.dev.proxyTable

// 使用 express 启动一个服务
var app = express()

// 启动 webpack 进行编译
var compiler = webpack(webpackConfig)

// 启动 webpack-dev-middleware，将 编译后的文件暂存到内存中
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: webpackConfig.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

// 启动 webpack-hot-middleware，也就是我们常说的 Hot-reload
var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        hotMiddleware.publish({ action: 'reload' })
        cb()
    })
})

// proxy api requests
// 将 proxyTable 中的请求配置挂在到启动的 express 服务上
Object.keys(proxyTable).forEach(function (context) {
    var options = proxyTable[context]
    if (typeof options === 'string') {
        options = { target: options }
    }
    app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
// 使用 connect-history-api-fallback 匹配资源，如果不匹配就可以重定向到指定地址
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
// 将暂存到内存中的 webpack 编译后的文件挂在到 express 服务上
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
// 将 Hot-reload 挂在到 express 服务上
app.use(hotMiddleware)

// serve pure static assets
// 拼接 static 文件夹的静态资源路径
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// 为静态资源提供响应服务
app.use(staticPath, express.static('./static'))

// 让我们这个 express 服务监听 port 的请求，并且将此服务作为 dev-server.js 的接口暴露
module.exports = app.listen(port, function (err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')

    // when env is testing, don't need open it
    // 如果不是测试环境，自动打开浏览器并跳到我们的开发地址
    if (process.env.NODE_ENV !== 'testing') {
        opn(uri)
    }
})
```

##### webpack.base.confg.js

#### webpack的基础配置文件

```js
...
...
module.export = {
    // 编译入口文件
    entry: {},
    // 编译输出路径
    output: {},
    // 一些解决方案配置
    resolve: {},
    resolveLoader: {},
    module: {
        // 各种不同类型文件加载器配置
        loaders: {
            ...
            ...
            // js文件用babel转码
            {
                test: /\.js$/,
                loader: 'babel',
                include: projectRoot,
                // 哪些文件不需要转码
                exclude: /node_modules/
            },
            ...
            ...
        }
        },
        // vue文件一些相关配置
        vue: {}
    }
```

### .babelrc

Babel解释器的配置文件，存放在根目录下。

Babel是一个转码器，项目里需要用它将ES6代码转为ES5代码。

```js
{
    //设定转码规则
    "presets": [
        ["env", { "modules": false }],
        "stage-2"
    ],
        //转码用的插件
        "plugins": ["transform-runtime"],
            "comments": false,
                //对BABEL_ENV或者NODE_ENV指定的不同的环境变量，进行不同的编译操作
                "env": {
                    "test": {
                        "presets": ["env", "stage-2"],
                        "plugins": [ "istanbul" ]
                    }
                }
}
<!-- 执行代码 -->

    {
    "presets": [
        ["env", {
            "modules": false,
            "targets": {
                "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
            }
        }],
        "stage-2"
    ],
    "plugins": ["transform-vue-jsx", "transform-runtime"]
}
```

### .editorconfig

该文件定义项目的编码规范，编译器的行为会与.editorconfig文件中定义的一致，

并且其优先级比编译器自身的设置要高，这在多人合作开发项目时十分有用而且必要。

```js
root = true

[*]    // 对所有文件应用下面的规则
charset = utf-8                    // 编码规则用utf-8
indent_style = space               // 缩进用空格
indent_size = 2                    // 缩进数量为2个空格
end_of_line = lf                   // 换行符格式
insert_final_newline = true        // 是否在文件的最后插入一个空行
trim_trailing_whitespace = true    // 是否删除行尾的空格
这是比较重要的关于vue-cli的配置文件，当然还有很多文件，我们会在以后的文章中讲解。
```

## 解读Vue-cli 的模板

    vue-cli应该有了基本的了解，这节我们主要了解一下Vue-cli的模板操作，
    
    包括增加模板，修改模板，以及一个常规模板的基本结构。


```js
1.  npm run build 命令

    如何把写好的Vue网页放到服务器上，那我就在这里讲解一下，主要的命令就是要用到npm run build 命令。
    
    我们在命令行中输入npm run build命令后，vue-cli会自动进行项目发布打包。
    
    你在package.json文件的scripts字段中可以看出，你执行的npm run build命令就相对执行的 node build/build.js 。
```

## package.json的scripts 字段：


```js
"scripts": {
    "dev": "node build/dev-server.js",
    "build": "node build/build.js"
},

在执行完npm run build命令后，在你的项目根目录生成了dist文件夹，这个文件夹里边就是我们要传到服务器上的文件。
```


## dist文件夹下目录包括：

    index.html主页文件:因为我们开发的是单页web应用，所以说一般只有一个html文件。
    static 静态资源文件夹：里边js、CSS和一些图片。

## main.js 文件解读

main.js是整个项目的入口文件,在src文件夹下：


```js
import Vue from 'vue'      
import App from './App'
import router from './router'

Vue.config.productionTip = false   //生产环境提示，这里设置成了false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})

通过代码可以看出这里引进了App的组件和的模板

它是通过 import App from ‘./App’这句代码引入的。 

我们找到App.vue文件，打开查看。
```

## App.vue文件

```html
<template>
    <div id="app">
        <img src="./assets/logo.png">
        <router-view></router-view>
    </div>
</template>
<script>
    export default {
        name: 'app'
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
```

## App.vue文件

我们可以分成三部分解读


```html
<template></template>标签包裹的内容：这是模板的HTMLDom结构，里边引入了一张图片和

<router-view></router-view>标签，<router-view>标签说明使用了路由机制。我们会在以后专门拿出一篇文章讲Vue-router。

<script></script>标签包括的js内容：你可以在这里些一些页面的动态效果和Vue的逻辑代码。

<style></style>标签包裹的css内容：这里就是你平时写的CSS样式，对页面样子进行装饰用的，需要特别说明的是你可以用<style scoped></style>来声明这些css样式只在本模板中起作用。
```

## router/index.js 路由文件

引用在app.vue中我们看到了路由文件，虽然router的内容比较多，但是我们先简单的看一下。下篇文章我们就开始讲Vue-router。

```js
import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        }
    ]
})
```

import Hello from ‘@/components/Hello’这句话， 文件引入了/components/Hello.vue文件。

    这个文件里就配置了一个路由，就是当我们访问网站时给我们显示Hello.vue的内容。



## Hello.vue文件解读：

        以后我们大部分的工作都是写这些.vue结尾的文件


```html
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
            <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
            <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
            <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
            <br>
            <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
        </ul>

        <h2>Ecosystem</h2>
        <ul>
            <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
            <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
            <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
        </ul>
    </div>
</template>

<script>

    export default {
        name: 'hello',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
```



# scoped  准许效果在当前页面使用




——————————————————————————————————————————————————————————————————————————————————————————————————————————————————





# Vue-router

下载

    npm install vue-router --save-dev

## src/router/index.js


```js
import Vue from 'vue'   //引入Vue
import Router from 'vue-router'  //引入vue-router
import Hello from '@/components/Hello'  //引入根目录下的Hello.vue组件

Vue.use(Router)  //Vue全局使用Router

export default new Router({
    routes: [              //配置路由，这里是个数组
        {                    //每一个链接都是一个对象
            path: '/',         //链接路径
            name: 'Hello',     //路由名称，
            component: Hello   //对应的组件模板
        }
    ]
})
```

** 增加一个Hi的路由和页面 **

对路由的核心文件熟悉后，我们试着增加一个路由配置，我们希望在地址栏输入 http://localhost:8080/#/hi 的时候出现一个新的页面，先来看一下我们希望得到的效果。

在src/components目录下，新建 Hi.vue 文件。

文件要包括三个部分<template><script>和<style>。文件很简单，只是打印一句话。

```html
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default {
        name: 'hi',
        data () {
            return {
                msg: 'Hi, I am JSPang'
            }
        }
    }
</script>
<style scoped>

</style>
```



## 引入 Hi组件

我们在router/index.js文件的上边引入Hi组件

```js
import Hi from '@/components/Hi'
```

## 增加路由配置：

在router/index.js文件的routes[]数组中，新增加一个对象，代码如下。

```js
{
    path:'/hi',
    name:'Hi',
    component:Hi
}
```

## router-link 制作导航

```html
<router-link to="/">[显示字段]</router-link>
```

### vue-router 配置子路由

### 执行操作

#### ** App.vue代码**

```HTML
<p>导航 ：
    <router-link to="/">首页</router-link> | 
    <router-link to="/hi">Hi页面</router-link> |
    <router-link to="/hi/hi1">-Hi页面1</router-link> |
    <router-link to="/hi/hi2">-Hi页面2</router-link>
</p>
```

#### ** 改写components/Hi.vue页面 **

把Hi.vue改成一个通用的模板，加入<router-view>标签
给子模板提供插入位置。“Hi页面1” 和 “Hi页面2” 都相当于“Hi页面”的子页面，

### ** components/Hi.vue**

,就是第5行的代码，其他代码不变。

```html
    <router-view> </router-view>
```

*在components目录下新建两个组件模板 Hi1.vue 和 Hi2.vue *

   H1.vue

```html
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>
<script>
    export default {
        name: 'hi',
        data () {
            return {
                msg: 'Hi, I am Hi1!'
            }
        }
    }
</script>
```

  Hi2.vue


```html
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
    </div>
</template>
<script>
    export default {
        name: 'hi',
        data () {
            return {
                msg: 'Hi, I am Hi2'
            }
        }
    }
</script>
```

#### 修改router/index.js代码

```js
children:[
    {path:'/',component:xxx},
    {path:'xx',component:xxx},
]
```

#### 执行代码

```js
children字段后边跟的是个数组，数组里和其他配置路由基本相同，需要配置path和component。

具体看一下这个子路由的配置写法。

import Vue from 'vue'   
import Router from 'vue-router'  
import Hello from '@/components/Hello'  
import Hi from '@/components/Hi' 
import Hi1 from '@/components/Hi1' 
import Hi2 from '@/components/Hi2' 

Vue.use(Router) 

export default new Router({
    routes: [             
        {                    
            path: '/',        
            name: 'Hello',     
            component: Hello   
        },{
            path:'/hi',
            component:Hi,
            children:[
                {path:'/',component:Hi},
                {path:'hi1',component:Hi1},
                {path:'hi2',component:Hi2},
            ]
        }
    ]
})
```



# Vue-router 参数传递

## ** 一、用name传递参数 **

    两步完成用name传值并显示在模板里：

1. 在路由文件src/router/index.js里配置name属性。

    ```js
    routes: [
        {
        path: '/',
        name: 'Hello',
        component: Hello
        }
    ]
    ```


2. 模板里(src/App.vue)用$route.name的形势接收，比如直接在模板中显示：

    ```html
    <p>{{ $route.name}}</p>
    ```
    
    

<!-- name 作用 -->

## ** 二、通过<router-link> 标签中的to传参 **

```js
<router-link>标签中的to属性进行传参

<router-link :to="{name:xxx,params:{key:value}}">valueString</router-link>

name：就是我们在路由配置文件中起的name值。
params：就是我们要传的参数，它也是对象形势，在对象里可以传递多个值。
```

## src/App.vue

把hi1页面的<router-link>进行修改。

```js
<router-link :to="{name:'hi1',params:{username:'jspang'}}">Hi页面1</router-link>
```


​    
把src/reouter/index.js文件里给hi1配置的路由起个name,就叫hi1.

```js
{path:'/hi1',name:'hi1',component:Hi1},
```


最后在模板里(src/components/Hi1.vue)用$route.params.username进行接收.

```js
{{$route.params.username}}
```


​                    

# 单页面多路由操作

src/App.vue

```html
<router-view ></router-view>
<router-view name="left" style="float:left;width:50%;background-color:#ccc;height:300px;"></router-view>
<router-view name="right" style="float:right;width:50%;background-color:#c0c;height:300px;"></router-view>
```

router/index.js


```js

import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            components: {
                default:Hello,
                left:Hi1,
                right:Hi2
            }
        },{
            path: '/Hi',
            components: {
                default:Hello,
                left:Hi2,
                right:Hi1
            }
        }

    ]
})
```

## 注意是 components

一个是默认的‘/’，另一个是’/Hi’

新建Hi1.vue和Hi2.vue页面就可以了。 

  Hi1.vue  


```js
<template>
    <div>
    <h2>{{ msg }}</h2> 
</div>
</template>

<script>
        export default {
name: 'hi1',
    data () {
    return {
        msg: 'I am Hi1 page.'
    }
}
}
    </script>
```

Hi2.vue


```js
<template>
    <div>
    <h2>{{ msg }}</h2> 
</div>
</template>

<script>
        export default {
name: 'hi2',
    data () {
    return {
        msg: 'I am Hi2 page.'
    }
}
}
    </script>
```

## App.vue中配置<router-link>

```html
<router-link to="/">首页</router-link> 
<router-link to="/hi">Hi页面</router-link> 
```




# Vue-router 利用url传参
实际开发也是有很多用URL传值的需求

## ** :冒号的形式传递参数 ** 


​    /src/router/index.js文件里配置路由。            
```js
export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component:HelloWorld
        },{
            () 中可添加正则表达式
        path:'/params/:newsId(\\d+)/:newsTitle',
        component:Params
        }

         ]
 })
```

src/components目录下建立我们params.vue组件


```html
<template>
    <div>
        <h2>{{ msg }}</h2>
        <p>新闻ID：{{ $route.params.newsId}}</p>
        <p>新闻标题：{{ $route.params.newsTitle}}</p>
    </div>
</template>

<script>
    export default {
        name: 'params',
        data () {
            return {
                msg: 'params page'
            }
        }
    }
</script>
```

## App.vue文件里加入<router-view>标签。

```js
可以直接利用url传值

<router-link to="/params/198/jspang website is very good"> params </router-link>
```


# vue-router 的重定向-redirect

    开发中有时候我们虽然设置的路径不一致，但是我们希望跳转到同一个页面，
    
    或者说是打开同一个组件。这时候我们就用到了路由的重新定向redirect参数。


## ** redirect基本重定向 **

```js
/src/router/index.js 把原来的component换成redirect参数就可以

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component:HelloWorld
        },{
            path:'/params/:newsId(\\d+)/:newsTitle',
            component:Params
        },{
            path: '/goHome',
            redirect:'/'
        },{
            带参跳转
            path: '/goParams/:newsId(\\d+)/:newsTitle',
            redirect:'/params/:newsId(\\d+)/:newsTitle'
        }

    ]
})
```

App.vue

````html
<router-link to="/goHome">goHome</router-link>
<router-link to="/goParams/911/I like vue.js">goParams</router-link>
````



# alias别名使用

```js
使用alias别名的形式，我们也可以实现类似重定向的效果。
```

##  路由配置文件（/src/router/index.js）

```js
{
    path: '/hi1',
    component: Hi1,
    alias:'/Kiven'
}
```
## 配置我们的<router-link>

起过别名之后，可以直接使用<router-link>标签里的to属性，进行重新定向。


```html
<router-link to="/Kiven">Kiven</router-link>
```


## ** redirect和alias的区别 **

redirect：仔细观察URL，redirect是直接改变了url的值，把url变成了真实的path路径。

alias：URL路径没有别改变，这种情况更友好，让用户知道自己访问的路径，只是改变了<router-view>中的内容。




# 路由的过渡动画

```html
想让路由有过渡动画，需要在<router-view>标签的外部添加<transition>标签，标签还需要一个name属性。

    <transition name="fade">
        <router-view ></router-view>
    </transition>
```

## ** css过渡类名 ** 

组件过渡过程中，会有四个CSS类名进行切换

    这四个类名与transition的name属性有关，比如name=”fade”,会有如下四个CSS类名：
    
    fade-enter:进入过渡的开始状态，元素被插入时生效，只应用一帧后立刻删除。
    fade-enter-active:进入过渡的结束状态，元素被插入时就生效，在过渡过程完成后移除。
    fade-leave:离开过渡的开始状态，元素被删除时触发，只应用一帧后立刻删除。
    fade-leave-active:离开过渡的结束状态，元素被删除时生效，离开过渡完成后被删除。
    
    从上面四个类名可以看出，fade-enter-active和fade-leave-active在整个进入或离开过程中都有效，
    
    所以CSS的transition属性在这两个类下进行设置。

## App.vue页面里加入四种CSS样式效果

```css
.fade-enter {
    opacity:0;
}
.fade-leave{
    opacity:1;
}
.fade-enter-active{
    transition:opacity .5s;
}
.fade-leave-active{
    opacity:0;
    transition:opacity .5s;
}
```


过渡模式mode：

    in-out:新元素先进入过渡，完成之后当前元素过渡离开。
    out-in:当前元素先进行过渡离开，离开完成后新元素过渡进入。

# mode的设置 和 404 页面的设置

index.js 下的mode 配置

```js
export default new Router({

    mode:'history',

    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component:HelloWorld,
            alias:'/home1'
        }
    ]
})
```

## ** mode的两个值 **

histroy:当你使用 history 模式时，URL 就像正常的 url，例如 http://jsapng.com/lms/，也好看！

hash:默认’hash’值，但是hash看起来就像无意义的字符排列，不太好看也不符合我们一般的网址浏览习惯。

## ** 404页面的设置： **

    用户会经常输错页面，当用户输错页面时，我们希望给他一个友好的提示，为此美工都会设计一个漂亮的页面，这个页面就是我们常说的404页面。
    
    vue-router也为我们提供了这样的机制

## 路由配置文件（/src/router/index.js）：

```js
    {
        path:'*',
        component:Error
    }
```

这里的path:’*’就是找不到页面时的配置，component是我们新建的一个Error.vue的文件。



# 新建404页面：
在/src/components/文件夹下新建一个Error.vue的文件。

```html
<template>
    <div>
        <h2>{{ msg }}</h2>
    </div>
</template>
<script>
    export default {
        data () {
            return {
                msg: 'Error:404'
            }
        }
    }
</script>
```


# 路由中的钩子

##  ** 路由配置文件中的钩子函数 **

路由配置文件（/src/router/index.js）中写钩子函数。

beforeEnter,就是在进入此路由配置时

```js
routes: [
    {
        path:'/params/:newsId(\\d+)/:newsTitle',
        component:Params,
        beforeEnter:(to,from,next)=>{
            console.log(to);//取得内容
            console.log(from);
            // 不写next() 无法进行跳转
            next(false);//{path:'/'} 跳转其他路由
        }
    }
```



三个参数：

    to:路由将要跳转的路径信息，信息是包含在对像里边的。
    from:路径跳转前的路径信息，也是一个对象的形式。
    next:路由的控制参数，常用的有next(true)和next(false)。{path:'/'} 跳转其他路由

## ** 写在模板中的钩子函数 ** 

params.vue

```js

<script>
    export default {
        data() {
            return {
                msg:'Parmas pages'
            }
        },
        beforeRouteEnter: (to, from, next) => {
            console.log("准备进入params路由模板")
            next()
        },
         beforeRouteLeave: (to, from, next) => {
             console.log("准备离开params路由模板")
             next()
         }

        }
</script>
```


# 编程式导航

    <router-link>

## ** this.$router.go(-1) 和 this.$router.go(1) **

router.go(-1)代表着后退

1. 我们先在app.vue文件里加入一个按钮，按钮并绑定一个goback( )方法

        <button @click="goback">后退</button>


2. 在我们的script模块中写入goback()方法，并使用this.$router.go(-1),进行后退操作。

    ```dart
    
    <script>
        export default {
            name: 'app',
                methods:{
                    goback(){
                        this.$router.go(-1);
                    }
                }
            }
        </script>
    
    ```

router.go(1):代表着前进

## this.$router.push(‘/xxx ‘)


        这个编程式导航都作用就是跳转，比如我们判断用户名和密码正确时，需要跳转到用户中心页面或者首页，都用到这个编程的方法来操作路由。

1. 点击按钮后回到站点首页。

      ```html
      <button @click="goHome">回到首页</button>
      <script>模块里加入goHome方法
      ```


```vue
  并用this.$router.push(‘/’)导航到首页  

  export default {
      name: 'app',
      methods:{
          goback(){
              this.$router.go(-1);
          },
          goHome(){
              this.$router.push('/');
          }
      }
  }
```















