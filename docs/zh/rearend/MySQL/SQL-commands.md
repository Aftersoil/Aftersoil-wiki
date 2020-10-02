# SQL 命令

## 标准SQL语句分类

```sql
DDL: Data Define Language 定义数据结构
 CREATE/DROP/ALTER

DML: Data Manipulate Language 操作数据
 INSERT/UPDATE/DELETE

DQL: Data Query Language 查询数据
 SELECT

DCL: Data Control Language 控制用户权限
 GRANT(授权)/REVOKE(收权)
```

## 计算机存储字符

- 如何存储英文字符
:::tip
- `ASCII`: 总共有128个，对所有的英文字母和符号进行了编码。
- `Latin-1`: 总共有256个，兼容`ASCII`码，同时对欧洲符号进行了编码。`MySQL`默认使用这种编码。
:::

- 如何存储中文字符
:::tip
- `GB2312`: 对常用的6千多汉字进行了编码，兼容`ASCII`码
- `GBK`: 对2万多汉字进行了编码，同时兼容`GB2312`
- `Unicode`: 对世界上主流国家的常用语言进行了编码，兼容`ASCII`码，不兼容`GB2312`、`GBK`。具体分为`utf-8`，`utf-16`，utf-32存储方案。
:::

- 解决`MySQL`存储中文乱码
:::tip 
- `SQL`脚本另存为的编码
- 客户端连接服务器端的编码`(SET NAMES UTF8)`
- 服务器端创建数据库使用的编码`(CHARSET=UTF8)`
:::

## MySQL 中的列类型

创建数据表的时候，指定的列可以存储的数据类型

```sql
CREATE  TABLE  t1( nid  列类型 );
```

## 数值型  引号可加可不加

```sql
-- 微整型，占1个字节，范围-128~127
TINYINT  

-- 小整型，占2个字节，范围-32768~32767
SMALLINT  

-- 整型，占4个字节，范围
INT  
-- -2147483648~2147483647

-- 大整型，占8个字节，范围很大
BIGINT  

-- 单精度浮点型，占4个字节，最多3.4E38,可能产生计算误差。
FLOAT  

-- 双精度浮点型，占8个字节，范围比BIGINT大的多，可能产生计算误差。
DOUBLE  

-- 定点小数，不会产生计算误差，M代表总的有效位数（不包含小数点），D代表小数点后的有效位数
DECIMAL(M, D)

-- 布尔型，只有两个值TRUE、FALSE，真正存储的时候，列类型会变成TINYINT，TRUE和FALSE变成了1和0，使用的时候也可以直接插入1和0。常用于只有两个值的数据。 例如性别、是否在线、是否注册、是否为会员…
BOOL  
```

::: danger 
注意事项：`TRUE`和`FALSE`不能加引号
:::

## 日期时间型 必须加引号

```sql
DATE  日期型  ‘2019-12-31’
TIME  时间型   ’14:53:30’
DATETIME  日期时间型   ‘2019-12-31 14:53:30’
```

## 字符串类型 必须加引号

```sql
-- 变长字符串，不会产生空间浪费，操作速度相同比较慢，M最大值是65535
VARCHAR(M)  

-- 定长字符串，可能存在空间浪费，操作速度比较快，M最大值是255；用于存储固定长度的数据，例如身份证号码、手机号码等。
CHAR(M)  

-- 大型变长字符串，M最多2G
TEXT(M)  
```

|  | `CHAR(5)` | `VARCHAR(5)` |
| :---: | :----: | :----: |
| a | a\0\0\0\0 | a\0 |
| ab | ab\0\0\0 | ab\0 |
| 一 | 一\0\0\0\0 | 一\0 |
| 一二 | 一二\0\0\0 | 一二\0 |

```sql
-- TB  GB  MB  KB  Byte  Bit
-- 1Byte = 8Bit(位)

CREATE  TABLE  t1(
  id  INT,
  age  TINYINT,
  commentCount  INT,
  salary DECIMAL(8,2),   -- 999999.99
  phone  CHAR(11),
  article  VARCHAR(5000),
  sex  BOOL,
  ctime  DATETIME
);
```

::: details 练习
- 编写脚本文件`02_xz.sql`，先丢弃再创建数据库，设置存储的编码为`utf8`，进入该数据库，创建保存笔记本数据的表`laptop`，包含编号`lid`，标题`title`，价格`price`，库存量`stockCount`，上架时间`shelfTime`，是否显示在首页`isIndex`；插入若干条数据。
- 创建保存员工的表`temp`，包含编号`eid`，姓名`ename`，性别`sex`，生日`birthday`，工资`salary`，所属部门编号`deptId`，插入若干条数据。
:::

## 列约束

MySQL 在插入数据的时候，进行特定的验证；只有满足条件才允许插入，否则被认为是非法插入。

例如：一个人的性别只能是男或者女，一个人的成绩0~100

```sql 
CREATE  TABLE  t1( eid 列类型 列约束 );
```

## 主键约束——PRIMARY KEY

声明了主键约束的列上值不能出现重复，一个表中只能有一个主键，通常加在编号列，表中查询的记录会按照编号从小到大排序，加快查找速度。

::: warning
注意事项：声明了主键约束后就不允许在插入NULL值。
```
NULL 表示空，在插入数据时，无法确定要保存的数据。例如：无法确定员工的生日，工资都可以使用NULL
```
:::

## 课后任务

::: details 练习
- 创建保存笔记本分类的表`laptop_family`，包含`fid`，`fname`名称，`laptopCount`数量，插入若干条数据
- 创建保存笔记本数据的表`laptop`，包含`lid`，`title`，`price`，`spec`规格，`detail`详情，`shelfTime`上架时间，`isOnsale`是否在售，`familyId` 所属分类编号； 插入若干条数据
- **)预习mysql中的列类型**
:::
