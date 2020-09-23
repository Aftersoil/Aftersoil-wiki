

# Nuxt.js


    Nuxt.js简单的说是Vue.js的通用框架
    最常用的就是用来作SSR（服务器端渲染）
    
    就是Vue.js原来是开发SPA（单页应用）的，但是随着技术的普及，
    
    很多人想用Vue开发多页应用，并在服务端完成渲染。
    
    这时候就出现了Nuxt.js这个框架，她简化了SSR的开发难度
    
    还可以直接用命令把我们制作的vue项目生成为静态html。


# 服务器端渲染到底有什么好处？

    最主要的原因时SPA（单页应用）不利于搜索引擎的SEO操作。


    比如你作一个新闻网站，流量的一个主要来源是通过百度、谷歌、bing这些搜索引擎。
    
    但是它们对SPA的抓取并不好，特别是百度根本没法抓取到SPA的内容页面，所以我们必须把我们的应用在服务端渲染成适合搜索引擎抓取的页面，再下载到客户端。
    
    那Nuxt.js适合作新闻、博客、电影、咨询这样的需要搜索引擎提供流量的项目。
    
    如果你要作移动端的项目，就没必要使用这个框架了。（其实Nuxt.js个人觉的是一个解决方案）

## 如果你是一个Vuer（vue程序员），那不会这个框架，说明你的技能没有全部点亮

# 什么是SSR？

    SSR，即服务器渲染，就是在服务器端将对Vue页面进行渲染生成html文件，将html页面传递给浏览器。


# SSR两个优点：

    SEO 不同于SPA的HTML只有一个无实际内容的HTML和一个app.js，SSR生成的HTML是有内容的，这让搜索引擎能够索引到页面内容。


    更快内容到达时间 传统的SPA应用是将bundle.js从服务器获取，然后在客户端解析并挂载到dom。而SSR直接将HTML字符串传递给浏览器。大大加快了首屏加载时间。


## Nuxt.js 主要关注的是应用的 UI渲染。

## Nuxt.js是特点（优点）：

    基于 Vue.js
    自动代码分层
    服务端渲染
    强大的路由功能，支持异步数据
    静态文件服务
    ES6/ES7 语法支持
    打包和压缩 JS 和 CSS
    HTML头部标签管理
    本地开发支持热加载
    集成ESLint
    支持各种样式预处理器： SASS、LESS、 Stylus等等



# nuxt.js安装

    npm install vue-cli -g


# 当前目录创建项目

    vue init nuxt/starter


##  安装项目依赖

    npm install 


## 启动服务

    npm run dev
    
    localhost:3000







##  目录结构讲解


            |-- .nuxt                            // Nuxt自动生成，临时的用于编辑的文件，build
            |-- assets                           // 用于组织未编译的静态资源入LESS、SASS 或 JavaScript
            |-- components                       // 用于自己编写的Vue组件，比如滚动组件，日历组件，分页组件
            |-- layouts                          // 布局目录，用于组织应用的布局组件，不可更改。
            |-- middleware                       // 用于存放中间件
            |-- pages                            // 用于存放写的页面，我们主要的工作区域
            |-- plugins                          // 用于存放JavaScript插件的地方
            |-- static                           // 用于存放静态资源文件，比如图片
            |-- store                            // 用于组织应用的Vuex 状态管理。
            |-- .editorconfig                    // 开发工具格式配置
            |-- .eslintrc.js                     // ESLint的配置文件，用于检查代码格式
            |-- .gitignore                       // 配置git不上传的文件
            |-- nuxt.config.json                 // 用于组织Nuxt.js应用的个性化配置，已覆盖默认配置
            |-- package-lock.json                // npm自动生成，用于帮助package的统一性设置的，yarn也有相同的操作
            |-- package-lock.json                // npm自动生成，用于帮助package的统一性设置的，yarn也有相同的操作
            |-- package.json                     // npm包管理配置文件






# 配置路由端口
package.json

```js
// 配置 路由 端口防止冲突
"config":{
    "nuxt":{
        "host":"127.0.0.1",
        "port":"3000"
    }
},
```

# 配置全局CSS
/assets/css/normailze.css

````js
html{
    color:red;
}
````

## 定义一个全局的CSS来初始化我们的页面渲染
/nuxt.config.js

```js
css:['~assets/css/normailze.css'],
```



# 配置webpack的loader

在nuxt.config.js里是可以对webpack的基本配置进行覆盖的，

比如现在我们要配置一个url-loader来进行小图片的64位打包。

就可以在nuxt.config.js的build选项里进行配置。


```js
build: {

    loaders:[
        {
            test:/\.(png|jpe?g|gif|svg)$/,
            loader:"url-loader",
            query:{
                limit:10000,
                name:'img/[name].[hash].[ext]'
            }
        }
    ],

        /*
            ** Run ESLint on save
            */
        extend (config, { isDev, isClient }) {
        if (isDev && isClient) {
            config.module.rules.push({
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /(node_modules)/
            })
        }
    }
}
```


# 路由配置 和 参数传递


在about文件夹下新建index.vue文件

```html
<template>
    <div>
        <h2>About Index page</h2>
        <ul>
            <li><a href="/">Home</a></li>
        </ul>
    </div>
</template>
```


在news文件夹下新建index.vue文件，并写入下面的代码：

```html
<template>
    <div>
        <h2>News Index page</h2>
        <ul>
            <li><a href="/">Home</a></li>
        </ul>
    </div>
</template>
```


修改原来的pages文件夹下的index.vue，删除没用的代码，写入下面链接代码：
```html
<template>
    <div>
        <ul>
            <li><a href="/">HOME</a></li>
            <li><a href="/about">ABOUT</a></li>
            <li><a href="/news">NEWS</a></li>
        </ul>
    </div>
</template>

<script>

    export default {
        components: {

        }
    }
</script>
```



# nuxt-link 标签

​	<nuxt-link>标签（vue中叫组件）。首页的<a>标签替换成<nuxt-link>


# params传递参数
pages下的Index.vue文件，给新闻的跳转加上params参数，传递3306ID。

```html
<li><nuxt-link :to="{name:'news',params:{newsId:3306}}">NEWS</nuxt-link></li>
```

news文件夹下的index.vue里用$route.params.newsId进行接收

```js
    <template>
    <div>
        <h2>News Index page</h2>
        <p>NewsID:{{$route.params.newsId}}</p>
        <ul>
            <li><a href="/">Home</a></li>
        </ul>
    </div>
    </template>
```



# Nuxt 的动态路由和参数校验

以下画线为前缀的Vue文件就是动态路由，然后在文件里边有 $route.params.id来接收参数。

/pages/news/_id.vue

```html
    <template>
    <div>
        <h2>News-Content [{{$route.params.id}}]</h2>
        <ul>
            <li><a href="/">Home</a></li>
        </ul>
    </div>
    </template>
```

/pages/news/index.vue进行修改


```html
        <template>
            <div>
                <h2>News Index page</h2>
                <p>NewsID:{{$route.params.newsId}}</p>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/news/123">News-1</a></li>
                    <li><a href="/news/456">News-2</a></li>
                </ul>
            </div>
        </template>
```



​    




## 路由切换效果(动画)


## 渐隐渐现的效果

/assets/css/main.css(没有请自行建立)

```css
    .page-enter-active, .page-leave-active {
        transition: opacity 2s;
    }
```


```css
    .page-enter, .page-leave-active {
        opacity: 0;
    }
```

## nuxt.config.js里加入一个全局的css文件

```js
    css:['assets/css/main.css'],
```

# 注意

<nuxt-link>组件来制作跳转链接

```html
<li><nuxt-link :to="{name:'news-id',params:{id:123}}">News-1</nuxt-link></li>
```


# 单独设置页面动效


## 页面组件的配置中加入transition字段即可


在全局样式assets/main.css 中添加以下内容。

```css
.test-enter-active, .test-leave-active {
    transition: all 2s;
    font-size:12px;

}
.test-enter, .test-leave-active {
    opacity: 0;
    font-size:40px;
}
```

## 然后在about/index.vue组件中设置


```js
export default {
    transition:'test'
}
```


​        
# Nuxt的默认模板和默认布局


    第一种方法是作一个公用的组件出来，第二种方法是修改默认模版。
    
    这两种方法各有利弊，比如公用组件更加灵活，但是每次都需要自己手动引入；模版比较方便，但是只能每个页面都引入。
    
    这节课我们就学习一下如何使用Nuxt的默认模版和默认布局功能



##  Nuxt为我们提供了超简单的默认模版订制方法，

只要在根目录下创建一个app.html就可以实现了。

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        {{ HEAD }}
    </head>
    <body>
        <p>Kiven.com</p>
        {{ APP }}
    </body>
</html>
```

## 注意

    HEAD和APP都需要大写，如果小写会报错的。

如果建立了默认模板后，记得要重启服务器，
否则你的显示不会成功；但是默认布局是不用重启服务器的。

## 默认布局

和默认模板类似的功能还有默认布局，但是从名字上你就可以看出来，默认布局主要针对于页面的统一布局使用

它在位置根目录下的layouts/default.vue


```html
<template>
    <div>
        <p>kiven.com  kiven的博客</p>
        <nuxt/>
    </div>
</template>
```

报错

    不允许操作，lstat'C：\ Users \ Master \ Desktop \ Early_learn \ Early_learning \ NewTechnique \ SEO \ Nuxt \ NuxtDemo \ .nuxt \ mixins
解决： 重启Vscode 服务器

# Nuxt 建立错误页面
layouts文件夹下建立一个error.vue文件，

```html
<template>
    <div>
        <h2 v-if="error.statusCode==404">404页面不存在</h2>
        <h2 v-else>500服务器错误</h2>
        <ul>
            <li><nuxt-link to="/">HOME</nuxt-link></li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:['error'],
    }
</script>
```



代码用v-if进行判断错误类型，需要注意的是这个错误是你需要在<script>里进行声明的，

如果不声明程序是找不到error.statusCode的。




#  个性meta设置

````
页面的Meta对于SEO的设置非常重要，比如你现在要作个新闻页面，那为了搜索引擎对新闻的收录，
需要每个页面对新闻都有不同的title和meta设置。

直接使用head方法来设置当前页面的头部信息就可以了。

我们现在要把New-1这个页面设置成个性的meta和title。

pages/news/index.vue页面的链接进行修改一下，

传入一个title，目的是为了在新闻具体页面进行接收title，形成文章的标题。
````

/pages/news/index.vue

```html
<li><nuxt-link :to="{name:'news-id',params:{id:123,title:'Kiven.com'}}">News-1</nuxt-link></li>
```


## 修改/pages/news/_id.vue
根据传递值变成独特的meta和title标签。


```js
<template>
    <div>
    <h2>News-Content [{{$route.params.id}}]</h2>
<ul>
        <li><a href="/">Home</a></li>
            </ul>
</div>
</template>
<script>
            export default {

validate ({ params }) {
    // Must be a number
    return /^\d+$/.test(params.id)
},

    data(){
        return{
            title:this.$route.params.title,
        }
    },
        //独立设置head信息
        head(){
            return{
                title:this.title,
                meta:[
                    {hid:'description',name:'news',content:'This is news page'}
                ]
            }
        }
}

</script>
```


​    


为了避免子组件中的meta标签不能正确覆盖父组件中相同的标签而产生重复的现象，
建议利用 hid 键为meta标签配一个唯一的标识编号。



异步方法获取数据
#  asyncData 方法获取数据

在项目中需要在初始化页面前先得到数据，也就是我们常说的异步请求数据。

创建远程数据
myjson.com
    接口数据

```js
{
    "name": "Kiven",
    "age": 18,
    "interest": "I love coding!"
}
```

安装Axios

    npm install axios --save


# ansycData的promise方法

我们在pages下面新建一个文件，叫做ansyData.vue。

```html
            <template>
                <div>
                    <h1>姓名：{{info.name}}</h1>
                    <h2>年龄：{{info.age}}</h2>
                    <h2>兴趣：{{info.interest}}</h2>
                </div>
                </template>
                <script>
                import axios from 'axios'
                export default {
                data(){
                    return {
                        name:'hello World',
                    }
                },
                asyncData(){
                    return axios.get('https://api.myjson.com/bins/8gdmr')
                    .then((res)=>{
                        console.log(res)
                        return {info:res.data}
                    })

                }
                }
                </script>
```


​    
# 更前端的写法  async await


```html
<template>
    <div>
        <h1>姓名：{{info.name}}</h1>
        <h2>年龄：{{info.age}}</h2>
        <h2>兴趣：{{info.interest}}</h2>
    </div>
</template>
<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                name:'hello World',
            }
        },
        async asyncData(){
            let {data}=await axios.get('https://api.myjson.com/bins/8gdmr')
            return {info: data}

        }
    }
</script>
```

## 静态资源和打包

````
npm run generate
生成静态文件

static文件夹下面

“~”就相当于定位到了项目跟目录
打包也是正常的


 <div><img src="~static/logo.png" /></div>   
````

​           


# 打包静态HTML并运行

Nuxt.js制作完成后，你可以打包成静态文件并放在服务器上，进行运行。

在终端中输入：

```js
npm run generate
```

dist文件夹下输入live-server就可以了。




