# MySQL 基础

## 课程体系

:::tip
阶段1(服务器端): 项目导入 / [数据库](/rearend/MySQL/) / [JS 基础](/frontend/javaScript/) / NodeJS   
阶段2(前端核心技术): [HTML](/frontend/javaScript/) / AJAX / [CSS](/frontend/CSS/) / [BootStrap](/frontend/BootStrap/)   
阶段3(前端进阶技术): JS高级 / DOM&BOM / [jQuery](/frontend/jQuery/) / VueJS   
阶段4(H5移动开发): HTML5 / 微信开发 / HybridAPP    
阶段5(框架技术): AngularJS  /ReactJS / Python
:::

## Windows 中常用的快捷键

```sh
Alt+Tab： 切换窗口
Window+d：显示/隐藏桌面
Window+r：打开"运行"窗口   cmd/mspaint/calc…
Window+e: 打开“资源管理器”
Alt+F4：  关闭当前的窗口
```

## 软件工程

计算机

:::tip
- 程序设计
  - Ada -> bug -> debug
- 软件作坊
  - IBM -> dos(软件) -> Microsoft -> Bill Gates -> Windows
- 软件工程
  - 软件工程就是在给定成本、进度的前提下，开发出具有有效性、可维护性、可重用性、可移植性、可追踪的软件产品。
  - 软件过程/软件生命周期
:::

## 软件生命周期

- 1) 软件定义期
  - (1)可行性研究阶段——《可行性研究报告》
  - 技术、经济、市场、人力、时间、回报率、政策、风俗…
  - (2)需求分析阶段——《软件需求说明书》
    - 功能性需求、非功能性需求
- 2) 软件开发期
  - (3)概要设计阶段——《概要设计说明书》 架构师
    - 技术选型、数据结构设计、功能模块划分
  - (4)详细设计阶段——《详细设计说明书》 设计师
    - 模块实现细节、属性、方法、算法
  - (5)编码实现阶段 —— 《项目开发进度报告》
    - UI设计师 —— 出效果图
    - 前端工程师 —— 把效果图转换成html、css、js格式
    - 后端工程师 —— 准备项目中的数据
  - (6)项目测试阶段——《项目测试报告》
- 3) 软件维护期
  - (7)项目部署阶段
    - 部署到服务器
  - (8)项目维护阶段

## web项目中的服务器

服务器Server: 为客户端提供各种服务的功能强大的计算机

- 访问服务器 
:::tip
服务器地址：域名/IP地址   
对应服务的端口号    
提供该服务使用的协议  
:::

![alt text](https://images.aftersoil.xyz/wiki/image/MySQL/server.png)

## 访问自己电脑上的web服务器

```
启动web服务器   点击 /webServer/start.cmd
127.0.0.1  自己电脑的IP地址
localhost  自己电脑的域名
http://127.0.0.1:80
http://localhost:80
```

## 获取自己电脑在局域网的IP地址

```sh
ipconfig 
```

`http://(ip地址):80`  通过局域网IP地址访问服务器(可以让其它电脑访问)

## 课后任务

::: details 练习
- 将一句英文每个单词的首字母大写，其余小写 
- [MySQL 5.1参考手册.chm](/other/download/Rear-end.html)
- **预习MySQL数据库**
:::
