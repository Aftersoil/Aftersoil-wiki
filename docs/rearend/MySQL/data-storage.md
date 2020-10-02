# 数据的存储形式

## 数据的存储形式

内存/文件/第三方服务器/数据库服务器

## 什么是数据库

数据库是按照一定的形式来组织，存储数据，目的是为了对数据操作——增删改查

- 数据库发展历史

网状数据库 -> 层次型数据库 -> 关系型数据库 -> 非关系型数据库

- 关系型数据库逻辑结构 

```
Server -> Database -> Table -> Row -> Column
服务器 -> 数据库 -> 数据表 -> 行 -> 列
```

![alt text](https://images.aftersoil.xyz/wiki/image/MySQL/mysql-structure.png)

## MySQL 数据库

Oracle:  MySQL    
Martin:  MariaDB

- [XAMPP](https://www.apachefriends.org/download.html)

服务器套装，包含有多款服务器软件mysql、apache

## MySQL部署结构

```
服务器端：负责存储/维护数据 —— 银行服务器机房
  C:/xampp/mysql/bin/mysqld.exe   启动文件
  确保端口3306不被占用

客户端：负责连接数据库，并发起增删改查——ATM机
  C:/xampp/mysql/bin/mysql.exe  客户端工具
```

## 使用客户端连接服务器端(结尾不能使用分号)

```sh
mysql.exe  -h127.0.0.1  -P3306  -uroot  -p

-h  host      服务器的域名/IP地址
-P  port      端口号
-u  user      用户名
-p  password  密码

mysql  -uroot   简写形式
```

## MySQL 常用管理命令(必须以分号结尾)

```sql
-- 显示服务器上当前所有的数据库     
show databases;  

-- 退出连接
quit;  

-- 数据库名;  进入指定的数据库
use  

-- 显示当前数据库中所有的数据表
show  tables;  

-- 描述表中有哪些列(表头)
desc  表名称;  
```
::: details 练习
- 尝试连接数据库，故意写错各个部分，查看错误信息
- 别进入`test`和`mysql`数据库查看有多少个数据表
:::

## SQL命令

`SQL: Stuctured Query Language`，结构化查询语言，用于操作关系型数据库服务器

- SQL命令的两种执行方式

:::tip
- 交互模式：客户端输入一行，点击回车，服务器端执行一行，适用于临时性的查看数据。
- 脚本模式: 把要执行的多行SQL命令写在一个脚本文件中，一次性的提交给服务器执行，适用于批量的操作数据。
:::

```sql
mysql  -uroot < C:/xampp/…../01.sql   回车
```

## SQL语法规范

:::tip
- 一条SQL语句可以跨越多行，以英文的分号结尾。
- 假如某一条语句出现语法错误，则此条语句以及后边所有的语句不会再执行。
- SQL命令不区分大小写，习惯上数据库关键字用大写，非关键字用小写。
- SQL命令可以使用单行注释`(#...)`和多行注释`(/*…*/)`，注释的内容不会被服务器所执行
:::

## 常用的SQL命令

- 丢弃指定的数据库，如果存在的话

```sql
DROP  DATABASE  IF  EXISTS  jd;
```

- 创建新的数据库

```sql
CREATE  DATABASE  jd;
```

- 进入创建的数据库

```sql
USE  jd;
```

- 创建保存数据的表

```sql
CREATE  TABLE  student(
  sid  INT,
  name  VARCHAR(8),
  sex  VARCHAR(1),
  score  INT
);
```

- 插入数据

```sql
DROP  DATABASE  IF  EXISTS  jd;
```

- 丢弃指定的数据库，如果存在的话

```sql
INSERT  INTO  student  VALUES('1', 'tom', 'M', '87');
```

- 查询数据

```sql
SELECT  *  FROM  student;
```

- 更改数据

```sql
UPDATE  user  SET upwd = '888888', phone = '19912345678' WHERE uid = '1';
```

- 删除数据

```sql
DELETE  FROM  user  WHERE  uid = '2';
```

## 课后任务

::: details 练习
- 编写脚本文件`xz.sql`，先丢弃再创建数据库，进入该数据库，创建保存用户数据的表`user`，包含编号`uid`，用户名`uname`，密码`upwd`，邮箱`email`，手机`phone`，性别`sex`，真实姓名`userName`，注册时间`regTime`，是否在线`isOnline`；插入5条数据，查询结果
- **预习mysql中的列类型，[手册第11章](/other/download/Rear-end.html)**
:::
