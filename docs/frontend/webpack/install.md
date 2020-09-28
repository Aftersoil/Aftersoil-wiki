# webpack 安装

安装webpack和本地安装
```sh
// 此文件夹安装
npm i -D webpack webpack-cli
```

查看安装版本
```sh
webpack -v

webpack --version
```

## webpack 使用

在目录下创建一个固定名称的文件 `webpack.config.js`，此文件用于添加 webpack 打包的相关配置

把使用 ES6 写法的 js 文件打包成 ES5 格式通用版本。存放在 dist 文件夹下

## JS 打包

```js
module.exports = {
  // mode 模式，可选值：
  // production 产品  删除了空格和注释，缩小文件大小
  // development 开发 带有空格和注释，便于阅读
  mode: "production",
  // entry 入口，代表你要打包的 js 文件路径
  entry: "./src/js/index.js",
  // output 出口，规定打包之后的文件存放在哪里
  output: {
    // filename 文件名
    filename: "bundle.js",
    // path 文件存放的路径
    // __dirname 是 node.js 提供的一个属性，代表文件所在的目录，绝对路径
    path: __dirname + "/dist"
  }
}
```

* 通过 cmd，按照 webpack.config.js 文件中的配置，进行自动打包操作
* 切换到当前文件下
* `npx webpack`
* 执行完毕后，到 dist 文件夹下查看是否多出来一个 bundle.js 文件
* 使用 `npx webpack` 即可实现打包，打包之后的 js 文件在 dist 文件夹下

## CSS打包

* 下载安装依赖 
```sh
npm i -D css-loader style-loader
```

* 下载完毕再次运行打包目录
```js
module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  // webpack 本事只能对 js 文件进行打包，对其它类型文件打包时，必须进行特殊设置
  module: {
    // rules 规则，规范 
    rules: [
      {
        // 注意是 test 不是 test！！
        // 监听 .css 结尾的文件
        test: /\.css$/,
        // 下载安装依赖工具才可以，此处css两个依赖工具 style-loader  css-loader
        use: ['style-loader', 'css-loader']
      }
    ]
  }
}
```

在 index.js 文件中引入 css

```js
import style from './../css/index.css'
```

## 图片打包

安装依赖
```sh
npm i -D file-loader  url-loader

file-loader：作用是只把用到图片拷贝到 dist 目录下，过滤掉不用的图片，减小项目体积

url-loader：可以把小于指定大小的图片使用 base64 进行转码，把图片转换为字符串存储，把超过指定图片大小，依然采用file-loader方式处理

即url-loader是file-loader的升级版本
```

```js
module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader', // file-loader 或 url-loader
        // 默认图片出现在dist下方并为了防止重名会改名称，可以通过配置来导出指定文件夹下，维持原有名称
        options: {
          // [name] 代表原图片名称
          // [ext] 代表图片原后缀名
          name: 'img/[name].[ext]',
          // 限制大小 8192B -> 8KB
          // 即 8KB 分割线，小于的转 base64 存储，大于的依然是拷贝方式
          limit: 8192
        }
      }
    ]
  }
}
```

## 打包html

> 打包时，需要把html文件复制到dist文件夹下，并且手动修改文件中的各种相对路径，才能让html文文件可以用，这个操作如果每次都需要手动进行，会非常复杂麻烦

安装插件
```sh
npm i -D html-webpack-plugin
```

```js
// 引入模块 Node.js 写法
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: "development",
  entry: "./src/js/index.js",
  output: {
    filename: "bundle.js",
    path: __dirname + "/dist"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: 'img/[name].[ext]',
          limit: 8192
        }
      }
    ]
  },
  // 设定要加载的插件
  plugins: [
    new htmlWebpackPlugin({
      // 指定要操作的html文件
      template: './index.html'
    })
  ]
}
```

会自动拷贝index.html到dist目录下，并引入js代码

## 自动化 live servre

:::tip
自动监听文件的修改，并且如果有修改就会自动打包并且还会自动刷新页面（与live server一样）
:::

安装插件

```sh
npm i -D webpack-dev-server  与vscode的live server 一样
```

修改新的配置文件 package.json

```shell
"scripts": {
  "test": "echo \"Error: no test specified\" && exit 1",
  // --open 代表打开默认的浏览器
  "dev": "webpack-dev-server --open"
},
```

新的打包命令：`npm run dev`，浏览器会自动弹出，然后修改代码会实时刷新

## webpack 打包

改代码必须放在 webpack.config.js 中

```js
// 打包 js 和 压缩
const path = require('path');

/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const GitRevisionPlugin = require('git-revision-webpack-plugin');
const gitRevisionPlugin = new GitRevisionPlugin();
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  // production
  mode: 'development',
  bail: true,
  devtool: 'source-map',

  entry: {
    'sitio': './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'source', 'js'),
    filename: '[name].min.js',
    publicPath: '/'
  },

  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  },

  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              compact: true,
              presets: ['@babel/preset-env']
            }
          }
        ]
      }
    ]
  },

  // plugins: [
  //   new BundleAnalyzerPlugin({
  //     logLevel: 'warn',
  //     reportFilename: 'video-report.html',
  //     analyzerMode: 'static',
  //     openAnalyzer: false,
  //   }),
  // ],

  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  }

};
```
