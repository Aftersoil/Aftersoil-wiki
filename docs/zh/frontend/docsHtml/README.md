
## Web 基础知识

    HTML5 大前端技术 网页  app  桌面程序  数据可视化  VR
    网页(pc,pad,phone) app wx  服务器 数据库 



html5 html4, XHtm1.0 升级版
    
    XHtm1.0  语法严谨 



web 与  internt

    app  pipe  
    www服务  world wide web万维网 服务
    BBS  论坛
    Email 邮件  telnet 远程登录  FTP 上传和下载


下载
  C/S  
    
    c:client  客户端  s:server  服务器      
    代表作品 QQ  .exe

  B/S

    b:browser 浏览器 s:server  服务器
    代表作品  各类网站


c/s 和 b/s 的区别

    c/s 需要升级
    b/s 不需要升级



web运行原理

    运行在internet 一种b/s结构应用程序 
    wed的工作原理：基于 浏览器 和 服务器  以及 通信协议 来实现的数据的传输和展示

通信协议

    规范了数据是如何打包和传递的



服务器

    功能  存储数据  接收用户的请求并给出响应
  	提供了程序的运行环境 具备安全功能


服务器产品
	
    TomCat     （java）
      Apache	   (php)
      llS	    (.net)   


服务器端技术
	
  Java  php   nodeJs  .net   python 


# Html 

什么是 HTML 

    HTML  Htper Text Makup Langusge

超文本标记语言

    java  和   javaScript          JS

网景

    IE  Jscript  -- JS        

每一种标签都有自己独特的功能



上班第一天 看文档

    1 接口规范文档
    2 命名规则文档
    3 编码要求  1:3   1:2   





## 文档类型


    !doctype  html
      
    <meta charset="utf8"/> 元数据  定义网页全局信息  charset="utf-8";
    
    body bgcolor text 
    
    hr size="4px" width="50%" align="left "


​    
​    预格式化标记<pre></pre>


​    
​    特殊字符  &nusp &copy &reg &times X;  sup sub
​    div 用于页面布局    
​    
​    span  同一行文字使用不同样式  使用span




## 元素的显示方式


    行内块  table  flex 



## 图像和链接

    img src="图片路径/url"
    
    图床 节省本地存储空间    
    缺点 不稳定   
    
    url    //统一资源定位符   肌肉记忆 代码
    
    绝对路径    
    完整路径
    使用任何网络资源的时候使用绝对路径
    
    通信协议 / 主机名/ 文件目录结构/ 文件名称
    
    优点 不占用本地存储空间
    缺点 不稳定

## 使用本机资源使用绝对路径 项目中不许使用

    <img src="c:\08.png">  


## 相对路径

  参照物 访问图片

    1 兄弟关系  直接写文件名
    2 子集目录
    先进入兄弟文件夹  再引入图片  src="img/image/10.png"
    3 父级目录 使用../返回父级目录  src="../../img/07.png"


    img 标签属性 
    
    alt 图片资源出现错误 显示文本

### 如果设置的宽高比  不符合图片本身的宽高比  图片会发生失真
### 宽高只设置一个另外自适应


# 链接

## 语法

    a href="..."  target="_self"    _blank  

## 返回顶部 
    a href="#"  
a 标签执行JS
    
      <a> href="javascript:show()"></a>

# 锚点 

  锚点是什么

  页面生做的一个记号  

  通过 a 标签 跳转到这个记号

定义锚点
    
    使用a标签跳转 lorem  假文

连接到锚点

    <a href="#hz">hz</a>

定义锚点
    
    <a name="hz"> </a>

## h5 写法  不浪费a标签


连接到锚点

    <a href="#hz">hz</a>
定义锚点

    <a id="hz"> </a>


//——————————————————————————
6800
VUE--angular --react   学好	12k
有效代码量    
25k   40k   45k   50k    代码量保证薪资
         8000
IT行业
涨薪速度 NO1    2年  6000*2.5
精致   互联网     6K  15K
封闭式开发   3个月  练人 14000
避免笛卡尔积  内联左联会产生笛卡尔积  发生便是致命
	      乘法    基站崩溃
\\——————————————————————————


# 表格  

## 表格语法

html 渲染规则
从上往下逐行渲染  一行三列   

    <table>
          <tr>			行--table row     
      <td></td>   	列--table data
      <td></td>
      <td></td>
        </tr>
    </table>

简写方式    表格   保存内存 再统一渲染 

    table>tr*3>td*4>a{12332} 


属性  	

    border 	边框线
    width	宽
    height 	高
    align  设置表格本身的水平方式
    bgcolor
    border-color   
    cellpadding 单元格的内边距(内容到边框编距)
    cellspacing  设置单元格的外边距(边框到边框的距离)




### Tr的属性    

    valign垂直   align水平    top/bottom/ middle  
### Td的属性   

    width 设置单元格宽度    height 会影响当前行  和其他
    colspan  跨列


colspan 

    指定单元格开始  横向向右合并N个单元格  n包含自己被合并的单元格要删除掉

rowspan 跨行

    从指定单元格开始 纵向向下合并N个单元格
    n包含自己被合并的单元格要删除    一列 下下 


表格的标题

    caption    紧跟table


行/列的标题

  行列标题
    
    th  代替td 内容字体加粗   水平居中


表格复杂应用

    行分table  thead    tbody   tfoot










#  列表


让数据有条理的显示在数据之前添加标识
但现在页面布局 经常会用到无序列表

    ol  li  有序列表  order list         list item 


列表组成

##  有序列表

        ol  li 

属性 
    
      type=:  i  I  a  A  1 
    
      start="I" 开始 

## 无序列表   unorder  list

      ul li     
      
      type  square  none  circle disc



    ul 项目中使用非常频繁  常用于一组相似的内容进行布局和排版



 # 列表的嵌套

 ## 在类表中嵌套其他元素 
 ## 【注】所有的嵌套元素必须写在li中


## 定义列表  h5属性新标签

    dl 名词  dt 解释   dd 内容


——————————————————————————————————————

# 结构标记

用于网页布局  div  

    h5 新出了一批结构标记 代替div做布局
    
    这些结构 与div作用一模一样 只是增加了可读性


常用结构标记
    
      header     定义网页头部  某区域的头部
      
      nav  定义网页导航   
      
      aside 定义侧边栏   
      
      section 定义网页主体内容   
      
      footer  定义网页底部  某区域底部
      
      article  定义与文字相关的内容  论坛回帖评
      论  
      
      hgroup 定义文件中区块相关信息
      
      figure 定义一组媒体内容以及标题
      
      figcaption 定义figure元素中的标题
      
      dialog  定义一个对话框

——————————————————————————————————————————————————


# form 表单
作用
	
    1 提供可视化的输入控件
      2 收集用户输入的信息  并提交请求给服务器
总结 
    
    form 自带提交请求收集数据的功能
    ajax提交请求 需要自己去收集数据  使用ajax 不要使用 form

## from 组成

	前端使用的接口 需要后台开发者先完成  
	前端开发人员需要等待后端开发人员完成接口才能进行编码
	等待
	
	前段 提供表单控件   与用户交互的可视化控件 接口/user_login
	后端 后台的接口对提交的数据进行处理 
	
	服务器开发人员  写接口 逻辑 连数据库

## form 表单的使用  

    <form action="接口url" method="提交的方法"><form>

action

  定义表单提交时发送的动作（向那个url发送）
	没有值默认发送给本页面

method

    get  默认值  特点 明文提交  提交的内容会显示到地址上

  



    get 提交的数据 有大小限制  最大2kb
      使用时机 向服务器要数据的时候使用


​    
​    post  特点 隐式提交 提交的内容会显示到地址栏
​    
​    post提交数据没有大小限制
​      使用时机 传递数据给服务器的时候使用



## 其他方法---使用form表单 目前不许使用delete，put option

  delete put option ---ajax 使用



# enctype   
作用	
    
    指定表单数据的编码方式
      允许将什么样的数据提交给服务器 

取值 	
    text/plain 允许提交普通字符给服务器 
	  
    multipart/form-data 允许提交文件给服务器


必背application/x-www-form-urlencoded  

    允许提交 任意字符给服务器(文件不能为空) 



## 表单控件 在form 表单中能够与用户进行交互的可视化控件 

### 分类  

    input  标签   基础9中   h5 新标签 10中
    textarea 多行文本域
    select 和option 下拉选择框  


# input 元素

属性  

    type  执行input元素的类型
    name 为控件定义名称  把名称提供给服务器端时候用 
    如果form表单想提交数据必须写name属性
    Value 控件的值 传递给服务器的值	
    disabled 禁用 



# 文本和密码框
属性

    maxlength  最大长度      readonly 只读 无值属性 可提交
    placeholder  占位符提示符    


# 按钮

    submit  将表单数据收集整理发送服务器
    reset  将当前表单恢复到初始状态
    button 无功能  配合事件调用JS代码使用
    附加知识点  h5
    button  代替 submit 

# 单选/复选  name 分组使用

    radio     
    单选按钮必须有Value才能使用提交数据
    checked 默认选中
    checkbox  多选  
    必须有Value 才能向服务器提交数据


隐藏域   hidden   用户不可见 

想把数据提交给服务器 但是不想展示给用户看   数据放入隐藏域

    <input type="hidden" name="uid"/>


提交订单

# 文件选择框  上传文件使用

    type="file"

注意 使用文件选择框需要保证form属性

  method="post"
  enctype="multipart/form-data"

属性 multiple  多重 无值属性  可配合多选文件



# 多行文本框 


textarea 

    允许录入多行文本  

  cols   rows  根据计算机硬件不同   不同展示 不准确

# 下拉选项

select  option 

    如果option 没有value 属性  n那么提交的select 的value 就是选中的option的内容
    有value 选择option的value

属性 
    
    size ="4"  size>1 变成滚动选择框2
    multiple 滚动选择框 可实现多选 



其他元素

    lable  替代form  中 span    进行input的关联  
    <input  id=“r” type="radio"  name="gender">
    <label for="r">不透露</label>

控件分组

    fieldset 包含线
      legend 基本信息





# 表单

其他元素 

    label 
    fieldset

# 浮动框架 

      在一个html中引入其他html文件

iframe
      
      src  引入路径  
      frameborder 框架边框
      scrolling=“no”  设置滚动条

#  新表单元素

    input type="email"  name="uemail"
    
    有@符号 @前后有内容 


正则进行判定
    
    1 必须有@和.
    2 @不能是第一位
    3 .不能是最后一位
    4 @和.之间有内容



# 搜索类型

    input type="search"  快速清除
    
    url 类型
    
    type="url"    		type="tel"
    验证 http：//开头      	移动设备使用时会弹出虚拟键盘


# 数字类型

      type number       max       min       step步长
# 范围类型

      type range      max       min       step步长

# 颜色类型

      type color

# 日期类型          月份类型       周类型        

      type date	       month          week  




​	








