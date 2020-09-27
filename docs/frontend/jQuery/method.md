# 方法使用

## 回顾属性选择器 css 中已有的
````text
[属性名]
[属性名 = 值]
[属性名 ^= 值]
[属性名 $= 值]
[属性名 *= 值]
````
      
## jQuery 新增
```` 
用元素的内容文本作为查找条件
当元素的 class 或其它选择器无法区分这个元素时，就可以考虑用元素内容作为判断条件
  1. :contains(文本)  选择元素内容中包含指定文本的元素
  2. :has(选择器) 选择子元素中包含符合条件元素的父元素

可见性过滤:
  1. visible 选择所有可见的元素
  2. hidden 选择所有隐藏的元素
````


## 2. 修改

- 修改样式
````css
/*
1. 获取修改内联样式
  DOM: 元素.style.css属性 = "值"
  jq中: $元素.css("css属性", "值")

    简写: 控制显示隐藏
      $元素.show() 等效于 .css("display", "block")
           .hide() 等效于  .css("display", "none")
  
  DOM 中获取样式不能用 .style，应为 .style 只能获得内联样式。所以 DOM 中被迫使用 getComputedStyle() 来获取计算后的样式

  jQuery 中的 .css() 可自动切换 .style 和 getComputedStyle()。使用 .css() 即可修改样式，也可以获取所有样式
    .css() 内部自动判断
      如果没有给新的 css 属性值，就调用 getComputedStyle() 自动执行获取操作
      如果给了新的 css 属性值，就自动切换成 .style.css 属性，执行操作
    
2. 专门操作 class 函数
  $元素.addClass("类名...")
  $元素.removeClass("类名...")
  let bool = $元素.hasClass("类名") 判断一个元素是否包含某个 class

  简化: 因为经常需要在有和没有某个 class 之间来回切换元素样式，所以今后，只要反复切换一个元素的 class 时，可简写为 $元素.toogleClass("");
    toogleClass 不能代替 addClass
*/
````

## 3. 按节点关系查找

1. 父子关系
````
DOM: 元素.parentNode
     元素.childern
     元素.firstElementChild
     元素.lastElementChild

jQ 中 $元素.parent()
      $元素.children(["选择器"])
````

2. 兄弟关系
````
DOM: 元素.nextElementSibling
     元素.previousElementSibling

jQ 中: $元素.next() 之后一个兄弟元素
       $元素.nextAll() 之后所有兄弟元素
       $元素,prev() 之前一个兄弟元素
       $元素.prevAll() 之前所有兄弟元素
       $元素.siblings(["选择器"])  除当元素外，所有平级的兄弟元素(不分前后)
````

## 4. 添加/删除/替换/克隆

1. 添加新元素
````css
/*
DOM 3步
  1. 创建空元素
  2. 设置关键属性
  3. 将新元素添加到 DOM 数

jq 中 2 步:
  1. 用 $(html片段) 就可以创建片段中所有元素
    let $a = $(`<a href="www.baidu.com">百度</a>`)  
  2. 依然需要将新元素添加到 DOM 树上
    jq 中: $父元素.append($新元素)
            $父元素.prepend($新元素) 开头插入
            $现有元素.before($新元素)
            $现有元素.after($新元素)  之后插入
            $现有元素.replaceWith($新元素)
*/
````

2. 删除元素
````css
/*
DOM: 父元素.removeChild(子元素)
jq 中: $任意元素.remove()

补充: .is()
  专门判断一个元素是否符合条件
  向判断一个元素是否符合指定的条件时
    let bool $元素.is("选择器")
    如果 $ 元素符合"选择器"条件要求，则返回 true
    如果 $ 元素不符合"选择器"条件要求，则返回 false
*/
````