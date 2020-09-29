# form 表单

作用    
- 提供可视化的输入控件      
- 收集用户输入的信息  并提交请求给服务器

:::tip
总结    
form 自带提交请求收集数据的功能   
ajax提交请求 需要自己去收集数据  使用ajax 不要使用 form
:::

## from 组成

前端使用的接口 需要后台开发者先完成     
前端开发人员需要等待后端开发人员完成接口才能进行编码等待

前段 提供表单控件   与用户交互的可视化控件 接口/user_login    
后端 后台的接口对提交的数据进行处理 

服务器开发人员  写接口 逻辑 连数据库

## form 表单的使用  
```html
<form action="接口url" method="提交的方法"><form>
<!--
action
  定义表单提交时发送的动作（向那个url发送）
	没有值默认发送给本页面

method
  get 默认值  特点 明文提交  提交的内容会显示到地址上
    get 提交的数据 有大小限制  最大2kb
      使用时机 向服务器要数据的时候使用
  ​    
  post 特点 隐式提交 提交的内容会显示到地址栏
    post提交数据没有大小限制
    使用时机 传递数据给服务器的时候使用
-->
```

## 其他方法---使用form表单 目前不许使用delete，put option
```
delete put option ---ajax 才能使用
```

## enctype   
作用	
    
指定表单数据的编码方式    
允许将什么样的数据提交给服务器 

取值
```html 	
text/plain            允许提交普通字符给服务器 

multipart/form-data   允许提交文件给服务器
```

必背 `application/x-www-form-urlencoded`

允许提交 任意字符给服务器(文件不能为空) 

## 表单控件 在form 表单中能够与用户进行交互的可视化控件 

### 分类  
```html
input     标签   基础9中   h5 新标签 10中
textarea  多行文本域
select 和 option 下拉选择框  
```

## input 元素

属性  
```html
<input type="" name="" value="" disabled>
<!-- 
  type      执行input元素的类型
  name      为控件定义名称  把名称提供给服务器端时候用  如果form表单想提交数据必须写name属性
  value     控件的值 传递给服务器的值	
  disabled  禁用 
-->
```

## 文本和密码框

属性
```html
<input type="passwoad" maxlength="16" placeholder="请输入密码">
<!-- 
  maxlength    最大长度      readonly 只读 无值属性 可提交
  placeholder  占位符提示符    
-->
```

## 按钮
```html
<button type="button">Click Me!</button>
<!--
  submit  将表单数据收集整理发送服务器
  reset  将当前表单恢复到初始状态
  button 无功能  配合事件调用JS代码使用
  附加知识点  h5
  button  代替 submit 
-->
```

## 单选/复选  name 分组使用
```html
<input type="radio" name="sex" value="male" checked>男<br>
<input type="radio" name="sex" value="female">女
<!--
radio      单选按钮必须有Value才能使用提交数据
checked    默认选中
checkbox   多选  
必须有Value 才能向服务器提交数据
-->

<!-- 多选 -->
<input type="checkbox" name="vehicle" value="Bike">苹果
<input type="checkbox" name="vehicle" value="Car">香蕉

<!-- 
  隐藏域   hidden   用户不可见
  想把数据提交给服务器 但是不想展示给用户看   数据放入隐藏域 
-->

<input type="hidden" name="uid"/>
```

## 文件选择框  上传文件使用
```html
<input type="file">

<!-- 注意 使用文件选择框需要保证form属性 -->

method="post"
enctype="multipart/form-data"

<!-- 属性 multiple  多重 无值属性  可配合多选文件 -->
```

## 多行文本框 
```html
<textarea cols="" row="">内容</textarea> 

<!-- 
  允许录入多行文本
  cols   rows  根据计算机硬件不同   不同展示 不准确
-->
```

## 下拉选项
```html
<select>
  <option value ="volvo">Volvo</option>
  <option value ="saab">Saab</option>
  <option value="opel">Opel</option>
  <option value="audi">Audi</option>
</select>

<!--
如果option 没有 value 属性 n 那么提交的 select 的 value 就是选中的 option 的内容
有 value 选择 option 的 value

属性 
  size ="4"  size>1 变成滚动选择框2
  multiple 滚动选择框 可实现多选 
-->
```

## 其他元素
```html
<!-- lable  替代form  中 span    进行input的关联   -->
<input  id="r" type="radio"  name="gender">
<label for="r">不透露</label>

<!--
控件分组
  fieldset 包含线
legend 基本信息
-->
```

## 浮动框架 

在一个html中引入其他html文件

```html
<iframe src="/index.html"></iframe>

<!-- 
  标准属性
  class, contenteditable, contextmenu, dir, draggable, id, irrelevant, 
  lang, ref, registrationmark, tabindex, template, title
-->

<!--
  src               引入路径  
  frameborder       框架边框
  scrolling="no"    设置滚动条
-->
```
实例 <a href="https://www.w3school.com.cn/tiy/t.asp?f=html_iframe" target="_blank">内联框架</a> 本例演示如何创建内联框架（HTML 页中的框架）

##  新表单元素
```html
<input type="email"  name="uemail">

<!--
有@符号 @前后有内容 

正则进行判定
  1 必须有@和.
  2 @不能是第一位
  3 .不能是最后一位
  4 @和.之间有内容
-->
```

## 搜索类型
```html
<input type="search">  <!-- 快速清除 -->

<!-- 
  url 类型

  type="url"    		type="tel"
  验证 http：//开头      	移动设备使用时会弹出虚拟键盘
-->
```

## 数字类型
```html
<input type="number" max min step="步长">
```

## 范围类型
```html
type range      max       min       step步长
```

## 颜色类型
```html
<input type="color">
```

## 日期类型 月份类型  周类型        

```html
<input type="date month week">

<input type="date">
<input type="month">
<input type="week">
```
