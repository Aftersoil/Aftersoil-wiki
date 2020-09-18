# box-sizing

  定义盒子模型的计算方式

  box-sizing: content-box; 默认值<br>
  元素占地宽度 = 左外边距 + 左边框 + 左内边距 + 内容区域宽度 + 右内边距 + 右边框 + 右外边距
  
  box-sizing: border-box;<br>
  元素占地宽度 = 左外边距 + width + 右外边距 

## 背景 backgtound-image

- 背景平铺 backgtound-repeat:

```
取值: repeat  默认平铺
      no-repeat 不平铺
      repeat-x  水平方向平铺
      repeat-y  垂直方向平铺
```

- 背景图片的定位  backgtound-position: x, y;

```
取值: px为单位的数字
      %
      关键字  left/right/center  top/buttom/center
```

- 景图片大小  backgtound-size

```
取值: 取两个值，分别设置宽高
      取一个值，是设置宽，让高自适应
      xp 为单位的数字
      %
      cover 覆盖，要求容器被全部填满，图片显示不全没关系
      contain 包含，让容器可以完全包含整张图片，图片必须完整，容器如果有空白区没关系
```

- 背景图片固定  backgtound-attrchment

```
取值: scorll 默认值，背景图片跟随页面滚动条二滚动
    fixed 固定，背景图相对于页面位置固定，不会跟随页面滚动条滚动，但只会在圆容器区域显示
```


- 简写方式 background
```
取值: color image repant attrchment position
```

## 渐变

渐变是指多种颜色，平缓变化的一种效果

- 渐变分类
```
1. 线性变形，以直线的方式来填充渐变色
2. 径向渐变，以圆形的方式来填充渐变色
3. 重复渐变，将线性，径向渐变重复几次实现
```

- 线性渐变 bbackground-image: liner-gradient(方向，色标1，色标2...)
```
取值: 
  方向 angle: to bottom   to right   to left   to top
  角度值
      0deg   to top
      90deg  to right
      180deg to bottom
      270deg to left

  色标color-point: 取值
    颜色 + 位置
    1. 只写颜色不写位置，一般用于只有两个色标，对应开头和结尾
    2. 颜色 + px 单位的数字
    3. 颜色 + %
```

- 径向渐变  background-image: radial-gradient(半径 at 圆心，色标1, 色标2,...)
```
半径取值: px 为单位的数字
圆心取值: 1. 以 px 为单位数字 x y
          2. x% y%
          3. 关键字: x: left/center/right
                      y: top/center/bottom
色标取值: 1. 颜色 + px 颜色的填充，就与半径没有关系了
          2. 颜色 + % 这里的位置，就是半径 %
```

- 重复渐变
```
1. 线性重复渐变 background-image: repeating-linear-gradient()
2. 径向重复渐变 background-image: repeating-radial-gradient()
```

- 线性渐变的方向，发生了改变
```
top/right/bottom/left!
```

## 浏览器兼容问题(ie8.0 以下不兼容)

为了兼容低版本浏览器，写 css 代码，叫做 css hack
渐变属性，兼容底版本浏览器写法

- 添加前缀
```
chrome/safari    -webkit-
firefox          -moz-
IE               -ms-
opear            -o-
```

## 文本格式化

- 字体属性
```
字体大小:  font-size
取值: px/pt/em/rem 为单位的数字
```

- 设置字系列: font-family
```
取值: pc 中字体库里有的字体，如果字体名称带有空格，必须加 "" 引号，多个字体名称用逗号隔开
```

- 字体加粗: font-weight
```
取值: lighter
      normal
      bold
      bolder
无单位，100 的整倍数，最大值 1000
```

- 字体样式: font-style
```
取值: italic/normal
```

- 小型大写字母: font-variant
```
取值: small-caps
```

- 简写模式: font: style variant weight size family;
```
最简写法: font: size family;
```

## 写 css 的思路

从上往下写，从左往右写，从里往外写<br>
找到目标元素，写样式步骤

```
1. 尺寸，大体位置
2. 边框，背景
3. 文字相关
4. 微调(margin padding)
```
