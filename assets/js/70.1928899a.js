(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{523:function(s,a,t){"use strict";t.r(a);var e=t(14),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"数据的存储形式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据的存储形式"}},[s._v("#")]),s._v(" 数据的存储形式")]),s._v(" "),t("h2",{attrs:{id:"数据的存储形式-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据的存储形式-2"}},[s._v("#")]),s._v(" 数据的存储形式")]),s._v(" "),t("p",[s._v("内存/文件/第三方服务器/数据库服务器")]),s._v(" "),t("h2",{attrs:{id:"什么是数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#什么是数据库"}},[s._v("#")]),s._v(" 什么是数据库")]),s._v(" "),t("p",[s._v("数据库是按照一定的形式来组织，存储数据，目的是为了对数据操作——增删改查")]),s._v(" "),t("ul",[t("li",[s._v("数据库发展历史")])]),s._v(" "),t("p",[s._v("网状数据库 -> 层次型数据库 -> 关系型数据库 -> 非关系型数据库")]),s._v(" "),t("ul",[t("li",[s._v("关系型数据库逻辑结构")])]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("Server -> Database -> Table -> Row -> Column\n服务器 -> 数据库 -> 数据表 -> 行 -> 列\n")])])]),t("p",[t("img",{attrs:{src:"https://images.aftersoil.xyz/wiki/image/MySQL/mysql-structure.png",alt:"alt text"}})]),s._v(" "),t("h2",{attrs:{id:"mysql-数据库"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-数据库"}},[s._v("#")]),s._v(" MySQL 数据库")]),s._v(" "),t("p",[s._v("Oracle:  MySQL"),t("br"),s._v("\nMartin:  MariaDB")]),s._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.apachefriends.org/download.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("XAMPP"),t("OutboundLink")],1)])]),s._v(" "),t("p",[s._v("服务器套装，包含有多款服务器软件mysql、apache")]),s._v(" "),t("h2",{attrs:{id:"mysql部署结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql部署结构"}},[s._v("#")]),s._v(" MySQL部署结构")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("服务器端：负责存储/维护数据 —— 银行服务器机房\n  C:/xampp/mysql/bin/mysqld.exe   启动文件\n  确保端口3306不被占用\n\n客户端：负责连接数据库，并发起增删改查——ATM机\n  C:/xampp/mysql/bin/mysql.exe  客户端工具\n")])])]),t("h2",{attrs:{id:"使用客户端连接服务器端-结尾不能使用分号"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用客户端连接服务器端-结尾不能使用分号"}},[s._v("#")]),s._v(" 使用客户端连接服务器端(结尾不能使用分号)")]),s._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[s._v("mysql.exe  -h127.0.0.1  -P3306  -uroot  -p\n\n-h  "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v("      服务器的域名/IP地址\n-P  port      端口号\n-u  user      用户名\n-p  password  密码\n\nmysql  -uroot   简写形式\n")])])]),t("h2",{attrs:{id:"mysql-常用管理命令-必须以分号结尾"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mysql-常用管理命令-必须以分号结尾"}},[s._v("#")]),s._v(" MySQL 常用管理命令(必须以分号结尾)")]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 显示服务器上当前所有的数据库     ")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("databases")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 退出连接")]),s._v("\nquit"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 数据库名;  进入指定的数据库")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("use")]),s._v("  \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 显示当前数据库中所有的数据表")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("show")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("tables")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 描述表中有哪些列(表头)")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),s._v("  表名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("  \n")])])]),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("练习")]),s._v(" "),t("ul",[t("li",[s._v("尝试连接数据库，故意写错各个部分，查看错误信息")]),s._v(" "),t("li",[s._v("别进入"),t("code",[s._v("test")]),s._v("和"),t("code",[s._v("mysql")]),s._v("数据库查看有多少个数据表")])])]),s._v(" "),t("h2",{attrs:{id:"sql命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql命令"}},[s._v("#")]),s._v(" SQL命令")]),s._v(" "),t("p",[t("code",[s._v("SQL: Stuctured Query Language")]),s._v("，结构化查询语言，用于操作关系型数据库服务器")]),s._v(" "),t("ul",[t("li",[s._v("SQL命令的两种执行方式")])]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("ul",[t("li",[s._v("交互模式：客户端输入一行，点击回车，服务器端执行一行，适用于临时性的查看数据。")]),s._v(" "),t("li",[s._v("脚本模式: 把要执行的多行SQL命令写在一个脚本文件中，一次性的提交给服务器执行，适用于批量的操作数据。")])])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[s._v("mysql  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uroot "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" C:"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("xampp"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("…"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01.")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("sql")]),s._v("   回车\n")])])]),t("h2",{attrs:{id:"sql语法规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sql语法规范"}},[s._v("#")]),s._v(" SQL语法规范")]),s._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[s._v("TIP")]),s._v(" "),t("ul",[t("li",[s._v("一条SQL语句可以跨越多行，以英文的分号结尾。")]),s._v(" "),t("li",[s._v("假如某一条语句出现语法错误，则此条语句以及后边所有的语句不会再执行。")]),s._v(" "),t("li",[s._v("SQL命令不区分大小写，习惯上数据库关键字用大写，非关键字用小写。")]),s._v(" "),t("li",[s._v("SQL命令可以使用单行注释"),t("code",[s._v("(#...)")]),s._v("和多行注释"),t("code",[s._v("(/*…*/)")]),s._v("，注释的内容不会被服务器所执行")])])]),s._v(" "),t("h2",{attrs:{id:"常用的sql命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用的sql命令"}},[s._v("#")]),s._v(" 常用的SQL命令")]),s._v(" "),t("ul",[t("li",[s._v("丢弃指定的数据库，如果存在的话")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),s._v("  jd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("创建新的数据库")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v("  jd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("进入创建的数据库")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("USE")]),s._v("  jd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("创建保存数据的表")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("CREATE")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("TABLE")]),s._v("  student"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n  sid  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  name  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("8")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  sex  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VARCHAR")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  score  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INT")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("插入数据")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DROP")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DATABASE")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("IF")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("EXISTS")]),s._v("  jd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("丢弃指定的数据库，如果存在的话")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INSERT")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("INTO")]),s._v("  student  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("VALUES")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tom'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'M'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'87'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("查询数据")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("  student"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("更改数据")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("UPDATE")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SET")]),s._v(" upwd "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'888888'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" phone "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'19912345678'")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v(" uid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'1'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("ul",[t("li",[s._v("删除数据")])]),s._v(" "),t("div",{staticClass:"language-sql extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sql"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DELETE")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("user")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("  uid "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h2",{attrs:{id:"课后任务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#课后任务"}},[s._v("#")]),s._v(" 课后任务")]),s._v(" "),t("details",{staticClass:"custom-block details"},[t("summary",[s._v("练习")]),s._v(" "),t("ul",[t("li",[s._v("编写脚本文件"),t("code",[s._v("xz.sql")]),s._v("，先丢弃再创建数据库，进入该数据库，创建保存用户数据的表"),t("code",[s._v("user")]),s._v("，包含编号"),t("code",[s._v("uid")]),s._v("，用户名"),t("code",[s._v("uname")]),s._v("，密码"),t("code",[s._v("upwd")]),s._v("，邮箱"),t("code",[s._v("email")]),s._v("，手机"),t("code",[s._v("phone")]),s._v("，性别"),t("code",[s._v("sex")]),s._v("，真实姓名"),t("code",[s._v("userName")]),s._v("，注册时间"),t("code",[s._v("regTime")]),s._v("，是否在线"),t("code",[s._v("isOnline")]),s._v("；插入5条数据，查询结果")]),s._v(" "),t("li",[t("strong",[s._v("预习mysql中的列类型，"),t("RouterLink",{attrs:{to:"/other/download/Rear-end.html"}},[s._v("手册第11章")])],1)])])])])}),[],!1,null,null,null);a.default=r.exports}}]);