(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{612:function(t,s,a){"use strict";a.r(s);var e=a(12),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"sql-命令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql-命令"}},[t._v("#")]),t._v(" SQL 命令")]),t._v(" "),a("h2",{attrs:{id:"标准sql语句分类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#标准sql语句分类"}},[t._v("#")]),t._v(" 标准SQL语句分类")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[t._v("DDL: "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Data")]),t._v(" Define "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Language")]),t._v(" 定义数据结构\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DROP")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ALTER")]),t._v("\n\nDML: "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Data")]),t._v(" Manipulate "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Language")]),t._v(" 操作数据\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),t._v("\n\nDQL: "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Data")]),t._v(" Query "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Language")]),t._v(" 查询数据\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("\n\nDCL: "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Data")]),t._v(" Control "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("Language")]),t._v(" 控制用户权限\n "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("GRANT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("授权"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("REVOKE")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("收权"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"计算机存储字符"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#计算机存储字符"}},[t._v("#")]),t._v(" 计算机存储字符")]),t._v(" "),a("ul",[a("li",[t._v("如何存储英文字符")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("ASCII")]),t._v(": 总共有128个，对所有的英文字母和符号进行了编码。")]),t._v(" "),a("li",[a("code",[t._v("Latin-1")]),t._v(": 总共有256个，兼容"),a("code",[t._v("ASCII")]),t._v("码，同时对欧洲符号进行了编码。"),a("code",[t._v("MySQL")]),t._v("默认使用这种编码。")])])]),t._v(" "),a("ul",[a("li",[t._v("如何存储中文字符")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("GB2312")]),t._v(": 对常用的6千多汉字进行了编码，兼容"),a("code",[t._v("ASCII")]),t._v("码")]),t._v(" "),a("li",[a("code",[t._v("GBK")]),t._v(": 对2万多汉字进行了编码，同时兼容"),a("code",[t._v("GB2312")])]),t._v(" "),a("li",[a("code",[t._v("Unicode")]),t._v(": 对世界上主流国家的常用语言进行了编码，兼容"),a("code",[t._v("ASCII")]),t._v("码，不兼容"),a("code",[t._v("GB2312")]),t._v("、"),a("code",[t._v("GBK")]),t._v("。具体分为"),a("code",[t._v("utf-8")]),t._v("，"),a("code",[t._v("utf-16")]),t._v("，utf-32存储方案。")])])]),t._v(" "),a("ul",[a("li",[t._v("解决"),a("code",[t._v("MySQL")]),t._v("存储中文乱码")])]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("SQL")]),t._v("脚本另存为的编码")]),t._v(" "),a("li",[t._v("客户端连接服务器端的编码"),a("code",[t._v("(SET NAMES UTF8)")])]),t._v(" "),a("li",[t._v("服务器端创建数据库使用的编码"),a("code",[t._v("(CHARSET=UTF8)")])])])]),t._v(" "),a("h2",{attrs:{id:"mysql-中的列类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-中的列类型"}},[t._v("#")]),t._v(" MySQL 中的列类型")]),t._v(" "),a("p",[t._v("创建数据表的时候，指定的列可以存储的数据类型")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v("  t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" nid  列类型 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"数值型-引号可加可不加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数值型-引号可加可不加"}},[t._v("#")]),t._v(" 数值型  引号可加可不加")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 微整型，占1个字节，范围-128~127")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TINYINT")]),t._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 小整型，占2个字节，范围-32768~32767")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SMALLINT")]),t._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 整型，占4个字节，范围")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- -2147483648~2147483647")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 大整型，占8个字节，范围很大")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BIGINT")]),t._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 单精度浮点型，占4个字节，最多3.4E38,可能产生计算误差。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FLOAT")]),t._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 双精度浮点型，占8个字节，范围比BIGINT大的多，可能产生计算误差。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DOUBLE")]),t._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 定点小数，不会产生计算误差，M代表总的有效位数（不包含小数点），D代表小数点后的有效位数")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECIMAL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" D"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 布尔型，只有两个值TRUE、FALSE，真正存储的时候，列类型会变成TINYINT，TRUE和FALSE变成了1和0，使用的时候也可以直接插入1和0。常用于只有两个值的数据。 例如性别、是否在线、是否注册、是否为会员…")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BOOL")]),t._v("  \n")])])]),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("注意事项："),a("code",[t._v("TRUE")]),t._v("和"),a("code",[t._v("FALSE")]),t._v("不能加引号")])]),t._v(" "),a("h2",{attrs:{id:"日期时间型-必须加引号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#日期时间型-必须加引号"}},[t._v("#")]),t._v(" 日期时间型 必须加引号")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATE")]),t._v("  日期型  ‘"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),t._v("’\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TIME")]),t._v("  时间型   ’"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("’\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATETIME")]),t._v("  日期时间型   ‘"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2019")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("14")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("53")]),t._v(":"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("30")]),t._v("’\n")])])]),a("h2",{attrs:{id:"字符串类型-必须加引号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串类型-必须加引号"}},[t._v("#")]),t._v(" 字符串类型 必须加引号")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 变长字符串，不会产生空间浪费，操作速度相同比较慢，M最大值是65535")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 定长字符串，可能存在空间浪费，操作速度比较快，M最大值是255；用于存储固定长度的数据，例如身份证号码、手机号码等。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 大型变长字符串，M最多2G")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TEXT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("M"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  \n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}}),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("code",[t._v("CHAR(5)")])]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[a("code",[t._v("VARCHAR(5)")])])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("a")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("a\\0\\0\\0\\0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("a\\0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("ab")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ab\\0\\0\\0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("ab\\0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("一")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("一\\0\\0\\0\\0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("一\\0")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[t._v("一二")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("一二\\0\\0\\0")]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[t._v("一二\\0")])])])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- TB  GB  MB  KB  Byte  Bit")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 1Byte = 8Bit(位)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v("  t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  id  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  age  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TINYINT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  commentCount  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INT")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  salary "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DECIMAL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("-- 999999.99")]),t._v("\n  phone  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  article  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VARCHAR")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  sex  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BOOL")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  ctime  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DATETIME")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("练习")]),t._v(" "),a("ul",[a("li",[t._v("编写脚本文件"),a("code",[t._v("02_xz.sql")]),t._v("，先丢弃再创建数据库，设置存储的编码为"),a("code",[t._v("utf8")]),t._v("，进入该数据库，创建保存笔记本数据的表"),a("code",[t._v("laptop")]),t._v("，包含编号"),a("code",[t._v("lid")]),t._v("，标题"),a("code",[t._v("title")]),t._v("，价格"),a("code",[t._v("price")]),t._v("，库存量"),a("code",[t._v("stockCount")]),t._v("，上架时间"),a("code",[t._v("shelfTime")]),t._v("，是否显示在首页"),a("code",[t._v("isIndex")]),t._v("；插入若干条数据。")]),t._v(" "),a("li",[t._v("创建保存员工的表"),a("code",[t._v("temp")]),t._v("，包含编号"),a("code",[t._v("eid")]),t._v("，姓名"),a("code",[t._v("ename")]),t._v("，性别"),a("code",[t._v("sex")]),t._v("，生日"),a("code",[t._v("birthday")]),t._v("，工资"),a("code",[t._v("salary")]),t._v("，所属部门编号"),a("code",[t._v("deptId")]),t._v("，插入若干条数据。")])])]),t._v(" "),a("h2",{attrs:{id:"列约束"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#列约束"}},[t._v("#")]),t._v(" 列约束")]),t._v(" "),a("p",[t._v("MySQL 在插入数据的时候，进行特定的验证；只有满足条件才允许插入，否则被认为是非法插入。")]),t._v(" "),a("p",[t._v("例如：一个人的性别只能是男或者女，一个人的成绩0~100")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CREATE")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("TABLE")]),t._v("  t1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(" eid 列类型 列约束 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"主键约束-primary-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#主键约束-primary-key"}},[t._v("#")]),t._v(" 主键约束——PRIMARY KEY")]),t._v(" "),a("p",[t._v("声明了主键约束的列上值不能出现重复，一个表中只能有一个主键，通常加在编号列，表中查询的记录会按照编号从小到大排序，加快查找速度。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),a("p",[t._v("注意事项：声明了主键约束后就不允许在插入NULL值。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("NULL 表示空，在插入数据时，无法确定要保存的数据。例如：无法确定员工的生日，工资都可以使用NULL\n")])])])]),t._v(" "),a("h2",{attrs:{id:"课后任务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#课后任务"}},[t._v("#")]),t._v(" 课后任务")]),t._v(" "),a("details",{staticClass:"custom-block details"},[a("summary",[t._v("练习")]),t._v(" "),a("ul",[a("li",[t._v("创建保存笔记本分类的表"),a("code",[t._v("laptop_family")]),t._v("，包含"),a("code",[t._v("fid")]),t._v("，"),a("code",[t._v("fname")]),t._v("名称，"),a("code",[t._v("laptopCount")]),t._v("数量，插入若干条数据")]),t._v(" "),a("li",[t._v("创建保存笔记本数据的表"),a("code",[t._v("laptop")]),t._v("，包含"),a("code",[t._v("lid")]),t._v("，"),a("code",[t._v("title")]),t._v("，"),a("code",[t._v("price")]),t._v("，"),a("code",[t._v("spec")]),t._v("规格，"),a("code",[t._v("detail")]),t._v("详情，"),a("code",[t._v("shelfTime")]),t._v("上架时间，"),a("code",[t._v("isOnsale")]),t._v("是否在售，"),a("code",[t._v("familyId")]),t._v(" 所属分类编号； 插入若干条数据")]),t._v(" "),a("li",[a("strong",[t._v(")预习mysql中的列类型")])])])])])}),[],!1,null,null,null);s.default=n.exports}}]);