# webpack 概述

> 本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

从 webpack v4.0.0 开始，可以不用引入一个配置文件。然而，webpack 仍然还是<a href="https://www.webpackjs.com/configuration/" target="_blank">高度可配置</a>。在开始前你需要先理解四个核心概念：

* 入口(entry)
* 输出(output)
* loader
* 插件(plugins)

本文档旨在给出这些概念的高度概述，同时提供具体概念的详尽相关用例。

作用：

* 可以把 ES6 规范转为 ES5 规范，让浏览器可以直接执行
* 可以有效减少网络请求的文件数量：请求优化的一种方式
* 图片打包：剔除掉没有用的图片，减少垃圾数据

## JS模块化写法

为了防止引入多个js文件，产生全局变量污染，出现冲突的情况
把js代码的每个功能点剥离出来，形成单独的模块，后期做维护代码时，都可以直接替换单独模块而不修改整体代码，可维护性高

复用性强：同一个模块，可以引入到多个位置，复制操作，减少重复代码的编写

模块化的解决规范：
* CommonJS 使用在Node.js服务器上，是一个同步的
* CMD 使用在客户端浏览器上，是一个异步的
* AMD 使用在客户端浏览器上，是一个异步的
* ES6 JS原生，可以使用在 前端+后端 都可以

## ES6

可以到处任意多个对象，必须在服务器运行，否则会报错

```js
// 导出单个
export var a = 1;
export function add(x, y) {
  return x + y;
}
export class Stu {
  name() {
    return `你好世界`;
  }
}

// 导入单个
import { a, add, Stu } from './export.js';
console.log(a)

// 导出多个
export {
  name,
  age,
  // 通过 as 可以起别名
  sex as gender
}

// 导入多个
import * as temp from './exprot.js'
console.log(temp.name)

// 使用者可以省略 as *
export default {
  name,
  age,
  // 通过 as 可以起别名
  sex as gender
}

import temp from './exprot.js'

/**
 * 注意：
 * 导入的格式 import {} from ''
 * 和 export 对象的单词 import
 * from 从...里导出
 * from 后必须填路径，带有js结尾，是文件名
 * {} 中可以自定义填写想要引入的内容
 * 因为 ES6 一个文件中可以导出多个值，使用者不一定都用到，那么就可以自定义引入想要的值
 * 
 * 测试：这是ES6不是NodeJS，不能使用 Node xx.js来执行
 * 使用浏览器，需要通过 html 文件显示，ES6是新特性，低版本浏览器基本不支持需要加一个 type="module" 的属性，让浏览器知道这是新特性
 */
```
