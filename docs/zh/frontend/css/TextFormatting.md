# 文本格式化

- 文本颜色: color

- 文本对齐方式: text-align
```
取值: left/center/right/justify
注意: 1. 一个元素写了 text-align，控制的是内部的文本
      2. 这个元素自己想对齐 margin: 0 auto
      3. text-align 对是行内元素的孩子，都生效
      4. 孩子如果是块级元素，只会继承 text-align，而块级元素不会居中显示
```

- 行高: line-height
```
取值: xp 为单位的数字
特型: 如果行高的数值，大于字体的大小，那么改行高文本将在指定的行高内部，成垂直居中的对齐方式显示
行高，一般设置成容器高度相同的值，确保文字在容器垂直居中显示
如果文字发生折行，不建议使用行高做垂直居中
```

- 文字的线条修饰: text-decoraction
```
取值: none 默认值，无线条
      underline 下划线
      overline  上划线
      line-through 删除线
```

- 首航缩进: text-indent
```
取值: 以 px 为单位的数字
```

- 文本阴影: text-shadow
```
取值: x y blur color
```

## 表格

- 表格的常用样式
```
尺寸，边框，背景，字体，文本，内外边距
设置 table 的边框，只设置最外边一圈边框
```

- td/th
```
尺寸，边框，背景，文字，文本，内边距都会有效
外边距无效

vertical-align: 设置单元格内部文字的对齐方式
    取值: top/middle/bottom
    对 tr/td/th 有效，对 table 无效

table: 特殊的显示方式
    显示方式: 行内元素，块级元素，行内块，table
    table 是一种特殊的表现方式
    单元格内容较多，尺寸较小，单元格大小以内容为标准
    单元格内容较少，尺寸较大，单元格大小以尺寸为标准
    table 在浏览器的渲染方式: 先加载到浏览器内存中，在一次性画在页面上
```

- 表格的特有属性
```
1. 边框的合并和分离  border-collapse
  取值: sparate 默认值，边框的分离状态
        collapse 边框合并状态

2. 边框的边距 border-spacing: x y
  去值: 以 px 为单位的数字
  前提，表格必须是分离状态，才有效border-collapse: sparate;

3. 表格的标题 <caption></caption>
  caption-side:
  取值 top/bottom

4. 设置表格的显示规则: table-layout
  取值 auto 默认值，自动表格布局
      td 的大小以内容和尺寸较大为准
      fixed 固定布局
      td 就以尺寸为准
    
  表格自动布局和固定布局的区别
    > 自动布局                    
      - 单元格的大小会自动适应内容
      - 表格复杂时，加载速度较慢
      - 自动布局比较灵活
      - 适用于不确定没列大小，并且不复杂的表格
    > 固定布局
      - 单元格取决于设置的值
      - 任何情况下，都是逐行渲染，渲染速度快
      - 固定表格布局不够灵活
      - 适用于明确知道每列大小的表格
```

## 定位

定义在元素在页面的位置

```
定位  相对，绝对，固定定位 position

取值: 
  1. static 默认，静态(默认文档流)
  2. relative 相对定位
  3. absolute  绝对定位
  4. fixed     固定定位

当一个元素设置了 position 属性，并设置为 relative/absolute/fixed 其中一种时，这个元素已被称为已定位元素，已定位元素解锁了 4 个偏移属性 top/right/bottom/left
```

定义的分类: 

[1. 普通流定位](#1)
[2. 浮动定位](#1)
[3. 相对定位](#1)
[4. 绝对定位](#1)
[5. 固定定位](#1)

### 普通流定位 (默认文档流定位)
```
  1. 每个元素在页面上都有自己的空间
  2. 每个元素都是从父元素的左上角开始渲染
  3. 行内元素和行内块在同一行显示，从左往右，一行放不下，折行
  4. 块级元素独占一行，从上往下排列
```

### 浮动定位
```
让块级元素横向显示: float
  取值 
    - left 左浮动，让元素浮动停靠在父元素的左边，或者其它以浮动元素的后面
    - right 右浮动，让元素停靠在父元素的右边，或者其它浮动元素的后面
    - none 默认值，不浮动

浮动的特点: 
  - 元素一旦浮动，改元素脱离文档流 (不占页面空间，后面元素上前补位)
  - 浮动元素，会在当前行，靠左/右，停靠在父元素的边缘，或者是其它以浮动元素的边缘
  - 父元素横向显示不下的部分所有浮动元素时，显示不下部分会自动换行，默认去距离当前行距离最近的位置
  - 浮动，解决多个块级元素横向在一行显示的问题

浮动定位引发的特殊情况: 
  - 浮动元素的占位问题
  - 当父元素一行显示不下所有浮动元素时，最后显示不下会换行。默认去距离当前行最近的一行。但是，已浮动元素会根据自己的浮动方向占据位置，导致被挤下去的元素，会躲开被占据的位置，在下方显示
  - 元素一旦浮动，如果元素没有定义宽度，那么浮动之后，元素的宽度靠内容撑开
  - 元素一旦脱离文档流，会变成块级元素，尺寸，垂直外边距离都生效

脱离文档流，意味着什么
 - 不占页面空间
 - 后续元素上前补位
 - 变成块元素

清除浮动效果(清除浮动效果)
  前面的浮动元素脱离文档，需要我上前补位
  设置了清除浮动之后，我就不上前补位
  clear:
    取值: 1. none 不清除浮动
          2. right 清除之前右浮动元素给我的影响
          3. letf 清除之前左浮动元素给我带来的影响
          3. both 清除左右元素给我带来的影响

高度坍塌
  父元素如果不设置高度，高度默认就是内容撑起来的，如果内部所有元素都浮动，那么父元素认为内部就没有内容了所以高度为 0
  
解决方案
  - 给父元素设置高度。弊端，很多时候，不知道确切的高度
  - 父元素也浮动。弊端，父元素的兄弟元素，会受到影响
  - 正确的解决方案. 在最后一个子元素的后面追加一个空的块级元素，给这个元素设置clear: both
  - 那么这个元素停留在文档流中，父元素的高度可以找到它
  - 这个元素不会被前面的浮动元素覆盖
  - 这个元素不写高，没有内容，那么默认宽度是父元素的 100% 高度为 0 ，不影响父级高度
```

### 相对定位: position: relative
```
配合偏移属性实现定位
相对定位，没有脱离文档流
如果相对定位元素，不写偏移属性，效果与没写定位一样，不影响任何布局，只是把这个元素变成已定位元素
相对定位，相对自己原来的位置偏移某个距离
1. 元素本身，位置微调(类似 margin )
2. 一般作为绝对定位的祖先元素
```

### 绝对定位: position: absolute
```
配合偏移量使用
绝对定位，脱离文档流
绝对定位元素，如果祖先级没有；已定位元素，那么就相对与 body 左上角，执行偏移量
绝对定位元素，会相对与离之间最近的祖先级，已定位元素的左上角进行偏移
绝对定位，由于脱离文档流，产生如下效果
1. 页面不占空间，后续元素上前补位
2. 绝对定位的元素，会变成块级
3. 没有写宽度元素，发生绝对定位后，宽度靠内容撑开
```

### 固定定位: position: fixed
```
  配合偏移属性使用
  将元素固定在页面上某个位置，不会随着滚动条滚动，发生变化，一直固定在页面的可视区域
```

## 显示方式

- 显示方式
```
决定元素在网页中的表现形式(块级，行内，行内块，table)
语法: display
取值: 1. block 让元素以块级的方式显示
      2. inline 让元素以行内的方式显示
      3. inline-block 让元素以行内块的方式显示
      4. table 让元素以 table 的方式显示
      5. none 让元素隐藏，脱离文档流，不占位置
```

- 显示效果: visibility
```
取值: 1. visible 默认的，可见的
      2. hidden 隐藏
```

- 透明度: opacity
```
取值 0 ~ 1  1是不透明 0是全透明
```

- 垂直对齐方式
```
vertical-align 一般只有两个地方使用
table 中使用 取值 top/middle/bottom
设置 table 中的内容对齐方式
img 中使用
设置图片前后文字的垂直对齐方式
取值 top/middle/bottom  baseline 基线 默认值
一般项目中通常会将所有的图片与文字垂直对齐方式，更改为非基线对齐
```

- 光标: cursor
```
取值: default 默认值
      pointer 小手
      text    文本
      help    帮助
      wait    等待
```

- 列表的样式属性
```
1. 列表标识项 list-style-type
  取值: 1. disc 默认值
        2. none 去掉标识项
        3. circle
        4. square

2. 列表项设置为图片 
  list-style-image: url(图片的位置)

3. 列表项的位置
  ul 默认自带山下边距(chrome 解析 16px)
    自带左内边距(chroem 解析 40px)
  
4. list-style-position
  可以设置列表项在 li 里，或者设置列表在内边距里
  取值  outside 默认值 在内边距，在 li 外
        inside 在 li 里
```

## 堆叠顺序
```
- 默认的堆叠顺序，html 元素后写的堆叠顺序高
- 手动调整堆叠顺序 z-index: 整数
- 堆叠顺序对父子关系无效，儿子永远在爹的上面
- 只有已定位元素，可以设置堆叠顺序
```