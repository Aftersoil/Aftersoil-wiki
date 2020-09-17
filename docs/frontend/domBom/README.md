# DOM and BOM

## Dom


## 什么是 DOM:

DOM: 专门操作网页内容的一套函数和对象
         
DOM 还是一个标准 由 W3C 制定
         
         
## 为什么：
    广义 JS = ECMAScript + DOM + BOM 
    核心语法: 操作网页内容  访问浏览器软件
    
    要想操作网页内容 为页面添加交互效果 其实只能用DOM 函数和对象 
问题：
        
        早起DOM没有标准
解决：

         W3C制定了统一的DOM函数和对象的标准 几乎所有浏览器 100%兼容
        特例：IE8

何时: 
        只要操作网页内容 为网页添加交互行为 只能用DOM 



包括:5件事: 增删改查  事件绑定


## DOM树

什么是: 
        在内存中 集中保存一个网页的所有内容的树形结构 
          
为什么: 
        
        树形结构是最直观的保存上下级包含关系的数据结构。而网页中Html标签 刚好也是父子级嵌套的上下级包含关系。在内存中 都是在一个棵树型结构上的。

如何：
        
        1. 当浏览器读取到一个html文件时 会先在内存中创建一个document对象，作为整个树的根对象


​        
        2. 开始扫描html中每个元素 文本等内容 没扫描到一项内容 就在 document下对应位置创建一个节点(node)对象。 



## 查找元素

不需要查找 就可直接获得:
    
    document.doucmentElement  <html>
    document.head             <head>
    document.body             <body>


​           
# 按节点间 关系查找 

树上的每个节点都是不孤立存在的。 都和上下左右的节点之间各种各样的关系 可相互访问到

## 包括：

节点树：
    
包含所有节点内容的完整结构
    
2大类关系


## 父子关系

            节点.parentNode 获得当前节点的父节点
            
            节点.childNodes 获得当前父节点下的所有直接子节点的集合
            
                强调:childNodes返回的是一个类数组对象 今后称为集合。 
            
            父节点.firstChild获得父节点下的第一个直接子节点。
            
            父节点.lastChild获得父节点下的最后一个直接子节点。


​        
## 兄弟关系

        节点.previousSibling 获得当前节点平级的前一个相邻的兄弟节点
                
        节点.nextSibling  当前节点平级下一个相邻的兄弟节点


​                    
问题: 
​        
        同时包含看不见的换行和空字符,也是节点对象 严重干扰查找


​                    
解决: 
## 元素树

       元素树:仅包含元素节点的树型结构。

说明: 
    
    元素树不是一棵新树,而是原来节点树中添加了指向元素节点的新属性而形成的一个一棵子数结构。

2 大类关系


父子关系

        元素.parentElement 获得当前元素的父元素
        说明：也可以用parentNode
       
        父元素.children 获得当前父元素下的所有直接子元素的集合
            强调:children返回的是一个类数组对象 今后称为集合。 
       
        父元素.firstElementChild获得父节点下的第一个直接子元素。
       
        父元素.lastElementChild获得父节点下的最后一个直接子元素。

兄弟关系
    
    元素.previousElementSibling 获得当前元素平级的前
    一个相邻的兄弟元素
    
    元素.nextElementSibling  当前元素平级下一个相邻的兄弟元素


​                
## 总结：

    今后只要按节点之间关系查找 都用元素树的属性代替节点树的旧属性。

何时：

今后只要已经获得一个节点对象,找周围附近的节点时。就用节点关系查找




# 笔试: 
    手写背过 定义一个函数 遍历一个指定的父元素下的所有后代元素
    
    1.定义一个函数 仅遍历直接子元素 
    
    2.如果当前子元素有更下级直接子元素 则对当前子元素继续调用当前函数 查找子元素的直接子元素


​            





# 按照HTML特征查找
四种
 1. 按id属性查找

     ````
     var 元素 = document.getElementById("id");
     按整个页面查找id为指定名称的一个元素 
     返回值 如果找到 返回一个元素对象
     没有找到 返回null
     强调 只能用document调用 不能随意在元素上调用 
     ````

2. 按标签查找   

        var 集合 = 父元素.document.getElementsByTagName("标签名");
        在指定的父元素下查找所有标签名为指定标签名的后代元素
        返回值 如果找到 返回多个元素组成的集合
                如果没找到 返回空集合:[].length=0
        1. 可在任意父元素下查找 通常指定某个父元素下查找后代 是为了减少查找范围,提高查找效率。
        2. 不止查找直接子元素而是在所有后代中查找
            比如：nav.getElementBy 

3. 按class查找

        var 集合 = 父元素.getElementByClassName("类名");
        在指定父元素内 查找class属性中包含指定类名所有元素
        返回值 如果找到 返回多个元素组成的集合
                如果没找到 返回空集合:[].length=0
        强调: 
            1.可限制在任意父元素内查找 减少查找范围。
            2. 不仅查找直接子元素 且在所有后代中查找
            3. 如果一个元素同时被多个class修饰 则使用其中一个class 就可以
                找到该元素  无需所有Class都满足

4. 按name属性来查找

          var 集合 = document.getElementsByName("name");
          在整个网页中查找name属性值为指定name名的元素
          返回值: 如果找到 返回多个元素组成的集合
                  如果没有找到 返回空集合:[].length=0
              强调
                  只能用documen调用 不能用随意一个父元素调用
              何时： 
                  在表单中查找表单元素时
          问题: 所有返回集合的查找函数 在任何情况下都返回一个集合
          即使只找到一个元素 也放在一个集合中返回
          集合


## 用选择器当条件查找元素：
1. 只查找一个符合条件的元素
   
        var 元素 = 父元素.querySelector("任意复杂选择器")
        在指定的父元素下查找符合选择器要求的一个元素
        
        返回值: 如果找到 返回一个元素对象
            如果没找到 返回-1
    
2.  查找多个符合条件的元素
   
        var 集合=父元素.querySelectAll()
        强调: 在指定的父元素下查找符合选择器要求的多个元素
        
        返回值: 如果找到 返回一个元素对象
            如果没找到 返回空集合:[].length=0;
        
        强调:
        	1. 可以任意父元素调用来限制查找的范围
            2.()中的选择器参数 不用每次都写完整 只要以.前父元素为起点开始写就行！


```html
<ul>ul.querySelectAll("li li");
    <li>
        <ul>
            <li>
            <li>
            <li>

                3. 不仅限于查找直接子元素 且在所有的后代中查找符合条件的 
```


# 总结:
1. 不需要查找就可直接获得

                    document.doucmentElement  <html>
                    document.head             <head>
                    document.body             <body>

2. 属性

        1. 父子关系
        元素.parentElement     
        父元素.children
        父元素.firstElementChild
        父元素.lastElementChild
        
        2. 兄弟关系
        
        元素.previousElementSibling 
        元素.nextElementSibling 
    
        3.  按照HTML特征查找
        
            var 元素 = document.getElementById("id");
            var 集合 = 父元素.getElementsByTagName("标签名");
            var 集合 = 父元素.getElementByClassName("class名"); var 集合 = document.getElementsByName("name名");
    
        4.  按选择器查找
        
            var 元素 = 父元素.querySelector("任意")
            var 集合 = 父元素. querySelectorAll("元素")      


DOM 优化之一:

        如果只用一个条件就可以找到想要的元素时
        尽量使用  getElementByxxx()函数查找 —— —— 效率高
        只有查找条件复杂时 才按选择器查找 —— —— 效率低  


作业: 
    
    1. 页面上完全相同多个按钮 不确定和数量 
        点那个按钮 弹出自己是第几个 






# 修改
# 添加/删除



## 修改:
3 样:

1. 内容

        1.获取或修改原始的HTML片段 元素.innerHTML
        2. 获取或修改纯文本内容: 元素.textContent
            以上两个获得的都是双标记 开始标记和结束标记之间的内容
            问题：表单元素是单标记,没有结束标记 所以也就没有innerHTML 和 textContent
        3. 获取或设置表单元素的内容:表单元素.value
    
2. 属性
1. HTML标准属性
        

什么是 
        
        HTML标准中规定的那些字符串类型的属性 比如 id class title value name  herf...

# 获取或修改HTML标准属性 2 种方式

## 早期核心DOM函数4个 

        元素.getAttribute("属性名") 获取属性值
    
        元素.setAttribute("属性名","新值") 修改属性值
    
        var bool = 元素.hasAttribute("属性名")判断元素是否包含该属性
        
        元素.removeAttribute("属性名")移除元素上的指定元素


​            
## 后来的HTML DOM 函数:

## 什么是HTMLDOM:

        是在旧版基础上 对部分常用函数和常用对象提供的简化版函数。
        
        做的第一个简化 每个元素对象中都提前预置好了所有HTML标准属性 只不过  值暂时为"".
            今后在操作Html标准属性时 用 元素.元素名


​        
        获取属性值: 元素.属性名
        
        修改属性值: 元素.属性名=值
            强调 只要修改标准属性 值必须是字符串，如果不是字符串 DOM会自动转为字符串 


​        
        判断是否包含指定属性:元素.属性名!="",说明包含  因为所有标准属性的默认值是""
        
        移除属性 元素.元素名="";
            只要把元素的属性值改为空字符串 则当前属性失效

特例 html中 
        
        <元素 class="类名" JS中不能用.Class 因为class 是js的关键词  

凡是 操作html 中的class属性 一律更名为ClassName 

Js中操作className等效于操作Html 中的class属性class

问题 以上函数 只能操作字符串类型的HTML标准属性 无法操作bool类型的HTML属性 
    2. 状态属性
            
        什么是: HTML 标准中规定 值为 bool类型的三大属性 disabld selected  checked multiple...
            
        特征 所有状态属性在HTML中使用时 都不带=和属性值 加上 就起作用 去掉就失去作用


​        
    如何操作:
            
        不能用核心DOM 4个函数
        只能用 . 访问:
                比如: 
                    禁用一个按钮: btn.disabled=true
                        相当于:
                            <button disabled>....
                    启用一个按钮: btn.disabled=false
                    
                    选中一个按钮: btn.checked
                            cnb.checked=true;
                        
                补: CSS 中有一组状态伪类
                    :disabled  :checked :selected  
                   
                    专门用于选中处于某种状态的伪类:
                    比如: input:checked 选择的是被选中的input元素
                    
                    button:disabld 选择是被禁用的
                    按钮

## 自定义扩展属性 
什么是自定义扩展属性: 
    
    html 标准中没有规定的 程序员自发添加的属性
    
    何时: 2 个经典用途
       
        1. 在客户端临时缓存数据
            比如: data-target="id 值";
       
        2. 代替其他选择器 来选择触发事件的元素 为元素绑定事件。
       
    比如: data-toggle = "dropdown";  
    
            如何:
                1. 为元素添加自定义扩展属性:
                    行业规范:<元素  data-自定义属性名="值">
    
                2. 用自定义扩展属性作为查询条件 只能用属性选择器:
                    [data-属性名=值]
    
                3. 获取或修改自定义属性的值:
    
                    不能用.访问 自定义扩展属性:
    
                        因为自定义扩展属性 是程序员在html标准之外, 后天添加的自定义属性 则HTMLDOM元素对象中就不包含这些自定义扩展属性
    
                    1. 可以用核心DOM    (没有兼容性问题)
                    
                    元素.getAttribute("data-属性名");
                    
                    元素.setAttribute("data-属性名");


​                
                为什么:getAttribute()每次都去HTML代码中查找属性

HTML5标准规定:

            可以元素 .属性名
            其中   dataset 可以自动收集页面上
            所有 data-开头的自定义扩展属性 这就是为什么自定义扩展属性名习惯上都要带data-前缀的原因！

 3. 自定义扩展属性:
        
        定义:<元素 data-自定义属性="值"
        获取或修改:
     
        元素.getAttribute("data-属性名")
     
        元素.getAttribute("data-属性名","值")


HTML5: 元素.dataset.属性名


​                           
# 样式:  
    修改内联样式
            元素.style.backgroundColor="red";
    强调 - 换驼峰明名 
    
    问题: 元素.style仅包含内联样式 不包含样式表的样式 所以如果用.style.css属性 也只能获得内联样式
    ,无法获得样式表中定义的样式


​    
    解决: 获得计算后的样式
        什么是计算后的样式: 最终应用到这个元素上的所有样式的集合
        
    何时: 今后只要获取样式 都要获取计算后的样式
    
    如何: 2 步:
        
        1. 先获得计算后的样式对象
        
            var style = getComputedStyle(元素);
        
            获得指定元素计算后的完整样式对象
        
            强调:getComputedStyle是内置的全局函数 可直接使用！
        
            返回值 是一个包含所有css属性值的巨大的对象 
        
        2. 才是从样式对象中提取想要的css属性:
            
            var 属性值=style.css属性
            强调: 计算后的样式 都是只读的 
                因为样式的来源不确定 不确定有多少元素正在共享该属性 所以不允许
                擅自修改

# 总结： 想修改一个元素的css属性

            元素.style.css属性=值
            想获取一个元素的css属性
            getComputedStyle(元素).css属性 

# 总结:
1. 内容
  
        1. 原始html片段: .innerHTML 
        2. 纯文本:.textContent
        3. 表单元素内容:.value

2. 属性:

    1.html 标准属性:
        
            核心DOM：.getAttribute()
                    .setAttribute()
                    .hasAttribute()
                    .removeAttribute()
            HTML DOM: 也可用.改 
                 1. 状态属性: 只能用.改
                 2. 自定义扩展属性:
3 .样式: 
                  
            1. 修改内联样式 元素.style.css 属性值=""; 
            
            2. 获取:getComputedStyle(元素).css属性     

问题: 

    修改样式时,style.css 属性一句话只能改一个css属性 而网页中一个效果的变化 
    
    可能同时涉及多个css属性 如果用style.css属性=值 修改 代码会很繁琐 而且加样式时
    繁琐一次 去掉样式时同样繁琐！



## 解决: 

        当批量修改样式时 用className修改是最划算的！


​    

# 添加/删除
    HTML DOM
    BOM 

## 添加/删除
        1.添加:3步
                
        1. 创建一空元素
            
            var a = document.cerateElement("a");
            强调: 只能用document调用
            
            问题: <a></a>
            
            2. 为空元素添加属性和内容
              
                a.herf = "http://tmooc.cn";
                a.innerHTML = "go to tmooc" 
              
                问题: 网页上依然看不见a
              
                因为: 网页的排版和绘制,都是DOM树为依据。而新
              
                依据 而新创建的元素对象 还没有加载到DOM树上 排版引擎和绘图引擎
                不知道多了新元素 自然还不会画到页面上
        
        3. 将空元素挂载到DOM树
        
                    3种:
                        
                        1.追加一个父元素下的所有子元素的末尾
                            父元素.appendChild("新元素")
                                    追加
                        
                        2.插入一个父元素下的某个子元素之前  
                            父元素.insertBefore("新元素,现有元素")


​                        
                        3.替换父元素下一个现有的旧元素
                            父元素.replaceChild("新元素,旧元素");
                    
                    强调: 将新元素挂载到DOM树上 都要先找到它的父元素,由父元素调用
                    函数 将新元素添加到自己的子元素中
       
        2.删除  
              父元素.removeChild(子元素)


# HTML DOM 常用对象

HTML DOM 对常用的比较复杂的元素,提供了一些简写的函数和属性

## 1. Image 对象: 代表页面上一个<img>元素

        唯一的简化: 创建<img>元素：var img = new Image()   
            代替: var img = document.cerateElement("img");
            强调: new Image() 只创建<img>元素 不负责挂载 还需要多一句
            appendChild()....将<img>元素挂载到DOM树上

## 2. Select/Option

            Select 对象: 代表页面上一个<select>元素
        
        属性 
        
            1. selecredindex 获得当前选中的option在整个select下的
            位置 下标。
        
            .value 获得当前选中的option的value属性值
            如果option上没有value属性 则返回option的内容文本代替  
        
            .options 获得当前select下所有option对象的集合
        
            .options.length 获得当前select下共有几个option 对象
        
            .length == .option.length 也可以获得当前select下所有option对象
        
        方法: 
            
            .add(option)向select下添加一个option对象
            
            .remove(i)移除 i 位置的 option对象。


## Option 对象: 

        表页面上一个<option>元素
    
        唯一简化: 创建<option>元素:
            
            var  opt = new Option(内容文本,value 属性值); 
            相当于:
            
                var opt = document.cerateElement("option");
            
                opt.innerHTML="文本内容";
            
                opt.value = "属性值"


​            
​            
## 4. Table/...

        Table 从上到下完整结构4级: table 行分组  tr td

Table 对象采用逐级管理的方式

    Table管行分组:
        
        添加行分组:
            var thead = table.createTHead(); 
                一句话定两句话
                1 var thead = document.cerateElement("thead");
                2 table.appendChild(thead) 
            
            var tbody = table.createTBody();
            var tfoot = table.createTFoot();    
        
        删除行分组:
            
            table.deleteTHead();
            table.deleteTFoot();
            
            获取行分组:
                table.tHead;
                table.tFoot;
                table.tBodies[0]
                    |-tBodies:
                        [
                                    
                                |-tbody 
                                |-tbody
                        ]
            因为HTML中规定 一个table 下可以有多个tbody！ 所以tbody对象都是放在
            table对象的tbodies集合中管理的  并不是直接隶属于table。

   


    行分组管着行:
        
        添加行: var tr = 行分组.insertRow(i)
            在当前行分组内, i 位置 添加一个新行
            等于以前两句话:
        
                var tr = document.cerateElement("tr");
        
        行分组.appendChild(tr);
          
            强调: 如果i位置已经有行 则现有行向后顺移一行 新行插入才当前i位置
            固定套路:2个
            1. 末尾追加一行:
                var tr = 行分组.insertRow()
            2. 开头插入一行: 
                var tr = 行分组.insertRow(0) 
        
        删除行：行分组.deleteRow(i);
        
            删除行分组中的i行
            问题: i 要求必须是当前行在行分组内的相对下标位置。行在行分组内的相对位置
            只能靠肉眼判断,无法用程序自动获得！
                
        其实: 每个行对象tr 都是一个.rowIndex属性 记录了这一行在整个表中
                    的下标位置
        
        问题2: 行分组.deleteRow()需要一个行分组的相对下标。
        tr.rowindex自动
        
        获得的是行在整个表中的绝对下标位置。 很有可能错位！ 因为表格中很可能有表头行。 所以 tr.rowIndex不能用在行分组.deleteRow()中
                
        解决: 今后只要删除行:
                
            table.deleteRow(tr.rowIndex);   
            
            因为主语换做table后 deleteRow需要的 刚好是 行在 table 内的相对位置 而tr.rowIndex获得的刚好也是行在table中的位置。 两者就配对儿了
        
        获取行：
            行分组.rows
            行分组中将所有行对象 都保存在一个rows集合中管理


​        
        行管着格:
            添加格: var td=tr.insertCell() 
                                    格
            一句话定两句话
                var td = document.cerateElement("td");
                
                tr.appendChild(td);


​            
            固定套路:行末尾追加一格;
                var td=tr.insertCell()
            
            删除格： tr.deleteCell()
            
            获取格: tr.cells[i]
                tr 将内部所有td 元素对象 都集中保存在cells集合中管理


​        
# 补: 确认框:
    什么是确认框: 有两个选项的对话框
    
            如何:
                var  bool = confirm("消息提示")
                        确定
    
                如果用户确定 就返回 true 
    
                如果用户点取消 返回false


​                            
## 5. Form/表单
    Form 对象:
        Form 对象:
            获取:  
            document对象 已将将当前页面上所有from对象收集到了
            forms数组中。
            document.forms[i 或 id]


​            
            属性：.elements 获得表单中所有表单元素对象的集合
            
            强调: .elements中只能获得表单元素
            .elements.length 可获得表单中表单的个数
            
            .length == .elements.length 获得表单中表单元素
            的个数


​        
        表单元素对象:
        
            获取: 不带name的表单元素
                form.elements[i 或 id 或 name] 
        
            有name的表单元素:
                form.name 名
        
            方法: 表单元素.focus()
                    让表单元素自动获得焦点

# 优化: 

        尽量减少操作DOM树的次数
        
        为什么 只要修改一次DOM树 会导致重排重绘
        如果频繁重排重绘制 会出现闪屏
# 解决:
        1. 如果同时添加父元素和子元素,应该现在内存中将
        子元素先添加到父元素中 最后再将父元素整体一次
        性添加到DOM树 ———— 只重排重绘一次！ 
    
        1. 如果父元素已经在页面上了, 要添加多个平级子元素 
        应该找一个临时的爹: 文档片段对象 先将多个平级子元素 在任何情况下都返回一个集合
        内存中 添加到文档片段对象中 再将文档片段对象整体一次性添加DOM
        树上 ———— 也只重排重绘一次
                        
        什么是文档片段: 内存中临时保存多个平级子元素的虚拟父元素


​    
何时: 只要 父元素已经在页面上了, 要添加多个平级子元素 

        如何: 3步 
        1. 创建文档片段
            var frag = document.createDocumentFragment();
                                创建   文档     片段 


​        
        2. 将子元素添加到文档片段中
            frag 对象是一个虚拟对象,所以 用法和真实父元素完全一样
                比如： frag.appendChild(新元素); 
                            
        3. 将文档片段对象一次性添加到DOM树
            
            真实父元素.appendChild(frag);
    
        问题: 文档片段会不会成为页面上实际的元素
        答 不会 文档片段在将子元素添加到DOM树后,就会自动释放 不会成为实际页面元素 

总结:  优化:
       
        1. 尽量减少操作DOM树的次数
        2. 查找：如果只要一个条件就可以找到元素时
            
            首先按HTML特征查找:getElementsByXXX
            如果查找条件复杂时: 
                用选择器查找
                    querySelector()和querySelectorAll()
        
        3. 添加删除: 
            
            如果同时添加父元素和子元素, 应该先将内存中的子元素添加到父元素中
            ,最后 再将父元素一次性添加到DOM树 
            如果父元素已经在页面上了,应该先在内存中创建文档片段对象,
            将所有平级子元素添加到文档片段中 最后在将文档片段一次性添加
            到父元素上
    
        4. 修改时: 能一次修改完成的,就不分两句话修改！
            比如 元素.style.width="200px"
                    元素.style.width="100px"
            其实： 元素.style.cssText = "width:200px;height:100px";


​               
# BOM： Browser Object Model

    什么是: 专门操作或访问浏览器软件的一批函数和对象
    
    何时: 只要想获取浏览器软件的信息 , 或操作浏览器窗口时
    
    如何:
        包括:
            1.最大的对象: window
                3个角色
                    1.代替ECMAScript中的global充当全局作用域对象 
                        所有我们自己声明的全局变量和全局函数默认都在window中
                   
                    2.包含了所有ECMAScript,DOM 和 BOM 的函数对象 
                        比如:window.Array window.alert window.document
                        封装BOM 和 DOM API


​                    
                    3.代表着当前正在打开的浏览器窗口
                        比如: 获取浏览器窗口的大小
                        
                        1. 完整大小 (********)
                           window.outerWidth 
                           window.outerHeight
                        
                        2. 文档显示区大小:
                            window.innerWidth  (阴影也算)
                            window.innerHeight

##   打开和关闭窗口
    1. 打开窗口:4中需求
        
        1.在当前窗口打开,可后退:
        html:<a herf="url"target="_self">
        js: window.open("url","_self")


​        
        2.在当前窗口打开,禁止后退:
        js: location.replace("url");


​        
        3.在新窗口打开,可打开多个:
        html:<a herf="url"target="_blank">
        js: window.open("url","_blank")
        
        1. 在新窗口打开, 只能打开一个: 
        
            html:<a herf="url"target="自定义窗口名">
            js: window.open("url","自定义窗口名")


​        
            原理:
        
                1. 在浏览器中 每个窗口都有一个name属性 唯一标识一个窗口
        
                2. a 的 target 属性 其实是在新窗口起名字(name属性)
        
                3. 浏览器规定:同名的窗口只能开一个! 后打开的同名窗口会覆盖
                先打开的同名窗口
                有两预定特殊意义的窗口名:
        
                    _self: 自动获得当前窗口name给新窗口--新窗口覆盖旧窗口
        
                    _blank: 空白 不给新窗口指定窗口名 而是靠浏览器随机生成--
                    新窗口名字一定不重复
    
                后退:保存当前窗口打开后 成功访问过的所有url的数组  history

# BOM

    window 包含:
        history  前进后退
        
        location 地址栏
        
        document 其实就是DOM中的document对象
        
        navigator 浏览器配置信息
        
        screen  显示设备信息
        
        event  事件处理机制

## history:
        什么是: 保存当前窗口打开后 成功访问过得url的
        
        历史记录数组
        
        何时: 只要用程序自动前进后退 都使用history
        
        如何: history.go(n);
        
              比如: 前进一步:history.go(1);
                    后退一次:history.go(-1);
                        有时后退一次不管用 可histroy.go(-2); 
                    刷新:history.go(0);

## location:

        什么是: 专门保存地址栏中的地址信息 以及提供跳转操作的方法的对象
       
        何时:
             1.希望获得地址栏中url信息时
             2. 希望执行一些特殊的跳转操作时
             
            如何:
            
                1. 获取地址栏里的url信息:
                    location.herf 完整的url
                    location.protocol 协议
                            .host 主机名+端口号
                            .hostname 主机名
                            .port 端口号
                            .pathname 相对路径
                            .search 获得?查询字符串以及之后的查询字符
                            
                            .hash  获得#锚点地址


​               
                2. 执行跳转操作
               
                   1.在当前窗口打开 可后退:
               
                     location.herf="新url"
                     或location.assign("新url")
                     或location="新url" 
                     都等效于:window.open("url","_self")
               
                   2. 单签窗口打开 禁止后退
                
                       location.replace("新url")
                
                   3. 刷新页面2种
                
                        1. 普通刷新:优先从浏览器缓存中获取资源,缓存中
                        过期或没有时 才去服务器重新获取
                    
                        history.go(0)
                        location.reload()
                    
                        F5 
                    
                        缓存中取
                        问题: 可能即使刷新后 也无法获得服务器上的新内容


​                    
                    2. 强制刷新 始终跳过浏览器缓存 总是从服务器端获取新内容:
                      
                       location.reload(true);
                      
                       问题: 每次都去服务器拿 慢且增大服务器压力！


    navigator:
    
        什么是: 保存浏览器配置信息的对象
        何时:    获取浏览器配置信息时
    
        包括:
    
            1 判断浏览器是否安装某个插件
                什么是插件: 为浏览器添加新功能的小软件
    
                如何判断是否安装了某个插件:
                    浏览器中所有已安装的插件信息都保存在navigator 的 plugius集合中。插件名就是插件信息在集合中的下标名
                    可以强行访问插件名下标,如果返回undefined
                    说明未安装
    
            2 判断浏览器的名称和版本号
                浏览器名称和版本号都包含在一个navigator的userAgent属性中。
                但是:userAgent是一个巨大的字符串 我们需要通过字符串查找的方式判断浏览器的名称和版本号
                如何:

# 事件:

    什么是: 
            
        浏览器自动触发的 或用户手动触发的页面内容状态的改变
    
    事件属性:
        
        每个元素上都有一批以onXXX开头的事件属性用于提前保存事件处理函数 当事件发生时 浏览器会自动找到该事件属性上绑定的处理函数自动执行。
    
    事件处理函数: 当事件发生时 想要自动执行的函数
         
    何时: 只要希望事件发生时 能自动执行一项任务


​    
         如何: 
            1.绑定事件处理函数
    
                1 HTML 中:
                    <ANY no 事件名="JS语句";>
                    问题:
                         不便于维护 和 重用 
    
                2. js中 用赋值方式绑定:
    
                      DOM元素.on 事件名= function(){...}; 
    
                        问题: 一个事件属性,只能绑定一个事件处理函数。如果多次绑定处理函数 最后一个可以生效。
             
                3. js 中用添加事件监听对象的方式:
             
                            添加  事件 监听
                   DOM 元素.addEventListener("事件名",事件处理函数)
             
                   原理:
                        1.其实浏览器中有一个事件监听对象队列。
             
                        2. 每为一个DOM元素 绑定一个事件处理函数,就会在监听对象队列中添加一个新的监听对象。
    
                        DOM元素.on事件=function也是事件监听对象的意思,但是 第二次执行=function时 不是新增一个对象 而是找到原监听对象替换
                        。
                        DOM元素.addEventlistener是不管当前元素有没有这个事件的处理函数 都增加一个新的监听对象
    
             3. 当事件发生时 浏览器会遍历整个监听对象的队列,找到符合条件的 监听对象 执行其中处理函数。 
                        
            2. 当事件发生时 浏览器自动调用 对应元素上的对应事件处理函数执行
            
    3.移除事件监听:
        DOM元素.removeEventListener("事件名",原处理函数对象) 
       
        强调: 如果一个处理函数可能要被移除 那么在绑定时就不要使用匿名函数 要有有名称的函数进行绑定   
        
        btnShoot.removeEventListener("click",shoot2)


​        
# BOM 事件模型 *********
什么是: 
        
        从事件发生开始 到所有处理函数触发完,所经历的整个过程。

包括3个阶段

                1. 捕获 由外向内,依次记录各级父元素上绑定的处理函数———— 只记录,不执行
                2. 目标触发: 先触发目标元素上的处理函数
                   目标元素: 最初想点击的元素 
                3. 冒泡执行: 由内向外 依次触发捕获阶段记录的各级父元素上的处理函数 

事件对象: ******
        
    什么是: 当事件发生时 浏览器自动创建的 保存事
            件信息的对象


​        
        何时 2种:
            1. 希望获得事件相关的信息时
            2. 如果希望改变事件模型的默认行为时
                
                如何使用: 
                    1.不用自己创建! 只要获取即可
                        事件对象 总是作为处理函数的第一个参数自动传入。 —————— 信任      
                        //e 形参
                        当事件发生时:
                              //  window 创建event对象
                                                 ↓
                            // DOM 元素.on事件名{event}
                        DOM.onclick=function(e){
                           // e 获得window自动创建的event
                        }
                    2.取消冒泡
                        e.stopPropagation();
                          停止  蔓延


3. 事件委托(delegate)/利用冒泡

    优化:  尽量减少事件监听的个数
    因为:  浏览器触发事件时采用的是遍历队列的方式。队列中监听对象多，遍历查找的速度就可能慢 事件相应的速度就可能延迟 队列中监听对象 遍历查找速度就可能快 事件响应的速度就快！
    
    如何: 今后只要多个平级子元素都要绑定相同的事件时,
    只要将事件在父元素绑定一次 所有子元素都可以通过冒泡
    原理共享父元素的事件使用!
    
    难题:
        1.每个按钮做的事儿不一样,如何获得实际点击的目标
        元素？
        
        错误 this 不能用了
        
        正确  用e.target代替this
            e.target 是始终保存目标元素的特殊属性。
        不随冒泡改变
        一旦拥有别无所求 
    
        2. 如何鉴别目标元素是否是想要的
            凡是执行正式操作之前   添加验证判断是否自己是想要的  e.target.nodeName==BUTTON




        优点 
                1.无论多个子元素都可共享一个事件处理函数
                
                2.即使动态添加的元素也可添加共享事件、


## 阻止默认行为 

     什么是: 有些元素身上自带一些默认行为:
        比如:<a herf="#"> 默认回到顶部
    
        如何:
         e.preventDefault();  


## 鼠标位置:3组

        1. 相对于屏幕左上角的位置:
            e.screenX,e.screenY
            屏幕
        
        2. 相对于文档显示区左上角的位置
            e.clientX,e.clientY
                客户端
        
        3. 相对于当前事件元素的左上角的偏移量
            e.offsetX,e.offsetY
                偏移


​              
​                                
​                            
​                        
​                
​                        









# 总结DOM优化

        1. 查找: 如果只要一个条件就可找到DOM元素时 首选 getElementByXXXX 返回的是动态集合 一条数据
            如果查找条件复杂 首选 选择器条件查找  返回的是静态集合 多条数据
            例如 元素.style.cssText="width:200;height:300px";
            代替 元素.style.width="200px" .style.width="200";


​        
​        
        2. 修改样式 能一句话修改 就不用两句话修改  重排重
        
        3. 添加元素 为了减少重排重绘  仅减少操作DOM数的次数
        
        4. 如果同时添加父元素和子元素 先将子元素添加父元素 最后再将父元素一次性添加DOM树上  
            如果父元素已创建 需要同时添加多个平级子元素 应该创建文档片段,将子元素先加入文档片段 最后在一次性将文档片段添加DOM树
        
        5. 尽量减少事件监听的个数: 事件委托 
            遍历挨个访问 效率低 
                1. 将事件绑定在父元素上一份 所有子元素冒泡共用
                2. 用e.target 代替 this
                3. 判断e.target 的特征 只有符合条件的目标元素才能执行后续正常的操作。


​    
## 页面滚动事件:

        1.  绑定页面滚动事件 window.onscroll=function(){...}
      
        2.  获得页面滚动的距离:其实就是页面超出文档显示区的距离
                var scrollTop=document.body.scrollTop||document.document.doucmentElement.scrollTop
        
        3.  用程序动态滚动到指定位置:window.scorllTo(横向滚动位置,纵向滚动到的位置)
            window.scrollTo(0,纵向滚动到的位置)
            window.scrollBy(0,纵向滚动的距离 增量)


​    


Task 
    
    1. 将location.search 转为对象
        地址栏:http://localhost:3000/register?
        uname=dingding&upwd=123344&favs=runing&favs=swimming&favs=basketball
        location.search 会拿到 
        ?
        uname=dingding&upwd=123344&favs=runing&favs=swimming&favs=basketball
        定义一个函数 function search2Obj(strSearch){
            返回一个对象
        } 
        var obj=search2Obj(str);
        console.log(obj);
        /*obj:{
            uname:"dingding",
            upwd:"1232343",
            favs:[" runing",....]
        }*/
    
    //要求: search 字符串中变量名不确定变量个数   






​            

​    




​            