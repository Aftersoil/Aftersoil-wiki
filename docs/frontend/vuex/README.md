# Vuex
<!-- 数据仓库 状态管理器 -->

    vuex是一个专门为vue.js设计的集中式状态管理架构
    data中的属性需要共享给其他vue组件使用的部分，就叫做状态。

## 引入vuex  

```js
npm   install vuex --save

因为这个包我们在生产环境中是要使用的。 必须添加 --save
```

## 使用我们vuex

引入之后用Vue.use进行引用。

```js
Vue.use(Vuex);
```



 ## ** 入门小Demo **

1. 新建一个vuex文件夹（这个不是必须的），并在文件夹下新建store.js

            ```js
            import Vue from 'vue';
    import Vuex from 'vuex';
    
    ```
    
    ```
    
2. 引入之后用Vue.use进行引用。

                Vue.use(Vuex);

3. store.js文件里增加一个常量对象

                const state={
                    count:1
                }

4. export default 封装代码，让外部可以引用。

                export default new Vuex.Store({
                    state
                
                })

5. components文件夹下，名字叫count.vue
模板中用$store.state.count输出count 的值


```js
<template>
    <div>
    <h2>{{msg}}</h2>
<hr/>
        <h3>{{$store.state.count}}</h3>
</div>
</template>
<script>
            import store from '@/vuex/store'
export default{
    data(){
        return{
            msg:'Hello Vuex',

        }
    },
    store  //注意这里必须暴露出去

}
</script>
```




6. 在store.js文件中加入两个改变state的方法

        ```js
        const mutations={
            add(state){
                state.count++;
            },
            reduce(state){
                state.count--;
            }
        }
        ```



mutations是固定的写法，意思是改变的




7. 在count.vue模板中加入两个按钮，并调用mutations中的方法。

        ```js
        <div>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button>
        </div>
        ```




# state 访问状态对象

const state ，这个就是我们说的访问状态对象

stroe.js中的值，赋值给我们模板里data中的值
         
## 有三种赋值方式：

### 一、通过computed的计算属性直接赋值

```js
computed属性可以在输出前，对data中的值进行改变，我们就利用这种特性把store.js中的state值赋值给我们模板中的data值。

computed:{
    count(){
        return this.$store.state.count;
    }
}
```

### 二、通过mapState的对象来赋值

```js
我们首先要用import引入mapState。

import {mapState} from 'vuex';

然后还在computed计算属性里写如下代码：

computed:mapState({
    count:state=>state.count
})
```

### 三、通过mapState的数组来赋值 

```js
computed:mapState(["count"])
```

这个算是最简单的写法了，在实际项目开发当中也经常这样使用。




# Mutations修改状态
    写方法改变state

## ** $store.commit( ) **

```html
<button @click="$store.commit('add')">+</button>
<button @click="$store.commit('reduce')">-</button>
```

## store.js文件

```js
const mutations={
    add(state){
        state.count++;
    },
    reduce(state){
        state.count--;
    }
}
```



## *传值*

store.js文件里给add方法加上一个参数n


```js
const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
        state.count--;
    }
}
```

在Count.vue里修改按钮的commit( )方法传递的参数  

```js
<p>
    <button @click="$store.commit('add',10)">+</button>
	<button @click="$store.commit('reduce')">-</button>
</p>
```

## ** 模板获取Mutations方法 **

```js
实际开发中我们也不喜欢看到$store.commit( )这样的方法出现
```

两步就可以了：

```js
1.在模板count.vue里用import 引入我们的mapMutations：

 	import { mapState,mapMutations } from 'vuex';

2.在模板的<script>标签里添加methods属性，并加入mapMutations

methods:mapMutations([
    'add','reduce'
]),

    模板使用

<button @click="reduce">-</button>
```


# ** getters基本用法：**

```js
计算过滤操作

store.js里用const声明我们的getters属性。

const getters = {
    count:function(state){
        return state.count +=100;
    }
}
```

# 写好了gettters之后，我们还需要在Vuex.Store()里引入

```js
 export default new Vuex.Store({
        state,mutations,getters
    })
```

# 模板页对computed进行配置

    改造时我们使用ES6中的展开运算符”…”。


            computed:{
                ...mapState(["count"]),
                count(){
                    return this.$store.getters.count;
                }
            },


# mapGetters简化模板写法

```JS
首先用import引入我们的`mapGetters

import { mapState,mapMutations,mapGetters } from 'vuex';
```




## 在computed属性中加入mapGetters


```JS
...mapGetters(["count"])
```



# actions 异步修改状态

    actions和之前讲的Mutations功能基本一样

但是:
         actions 异步
         Mutations 同步


## store.js中声明actions

        actions是可以调用Mutations里的方法


```JS
const actions ={
    addAction(context){
        context.commit('add',10)
    },
    reduceAction({commit}){
        commit('reduce')
    }
}
```

context：上下文对象，这里你可以理解称store本身。

{commit}：直接把commit对象传递过来，可以让方法体逻辑和代码更清晰明了


# 注意编写完必须暴露出去


```JS
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})
```


# ** 模板中的使用**
```HTML
count.vue模板中

<p>
    <button @click="addAction">+</button>
    <button @click="reduceAction">-</button>
</p>
```

## 改造一下我们的methods方法

```JS
import {mapState,mapMutations,mapGetters, mapActions} from 'vuex';

methods:{
    ...mapMutations([  
        'add','reduce'
    ]),
        ...mapActions(['addAction','reduceAction'])
},
```


## ** 增加异步检验 ** 

```JS
setTimeOut(()=>{context.commit(reduce)},3000);
console.log('我比reduce提前执行');
```



# module 模块组


## ** 声明模块组： **

vuex/store.js中声明模块组

```JS
const moduleA={
    state,mutations,getters,actions
}
```



## 修改原来 Vuex.Stroe里的值：

```JS
export default new Vuex.Store({
    modules:{a:moduleA}
})
```



## ** 在模板中使用 **

```HTML
<h3>{{$store.state.a.count}}</h3>
```


## 如果想用简单的方法引入


```JS
computed:{
count(){
    return this.$store.state.a.count;
	}
},
```

