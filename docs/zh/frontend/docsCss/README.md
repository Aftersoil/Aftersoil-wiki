# Css

复杂选择器  love hine
    
    :link  :visited :hover :active :focus

# 目标伪类

    在锚点被激活时 让锚点元素 
    div:target{}
    
    绑定锚点
    <a href="#hz" id="hy"></a>
    <div id="hz">lorem</div>
    
     :target{}   锚点激活时 


# 结构伪类   -- 项目用的较多

    p:first-child{cholor:#f00;}  属于其父元素的第一个子元素(找大哥)
    同时 这个大哥还需要符合选择器的要求
     
    p:last-child{cholor:#f00;}  属于其父元素的最后一个·子元素(找小弟)
    同时 这个小弟还需要符合选择器的要求
    
    p:nth-child(n){color:#00f;}  n从 1 开始





## :empty   

  匹配内部没有任何元素标签  包括文本，空格 回车 都不能有

  文本，空格 回车 dom 称为 文本节点
## :only-child 

    匹配其父元素 唯一子元素 
    
    div{<a>ee</a>}


    添加否定
    a:not(:only-child){bakcgound-color:#f00;}


# Task

    创建4*4 表格    400px*400px
    第一行 背景为 蓝色
    最后一行背景 黄色
    三行二列 背景 #f0f





# 伪元素选择器

匹配元素的首行首字符

    :first-letter 或者  ::first-letter

匹配元素的首行
    
    :first-line 或者 ::first-line

  当 首行 和首字符 发生了冲突  应用首字符的样式

匹配用户选择的文本

   这里必须是双::

      ::selection{}  

   只可以更改 背景颜色和字体颜色

伪元素选择器  内容生成 必须背 


    ::before      可将内容转为块  
      
    生成的是一个元素
    可以设置这个元素的显示方式，使用content:设置这个元素文本内容
      
    以及所以有可以使用的样式
      
    content 中只能给字符串和url(图片);
      
    :before 或者 ::before 代表的是内容区域中 最靠前的部分

 

    div::before{
      content:"蒙奇.D.路飞说";
      display：block;
      color:#f00;
      background:#0ff;
      width:100px; height:100px;
      }
     
    p::after{content:"----蔡徐坤";}  

匹配到某元素区域最后的位置

使用伪元素可以解决的问题

解决外边距溢出 在父级元素中添加  before  类型
display: table;

     #d1::before{
            content: "";
            display: table;
        }

解决高度坍塌   儿子出国了

     #d2::after{
            content: "";
            display: block;
            clear: both;
        }













# 弹性布局   flex

    display:flex;   弹性布局   

## 设么是弹性布局

    弹性布局   是一种布局方式
    主要解决某个元素中  子元素 中的布局方式  
    让页面布局更加灵活


## 弹性布局转有的名词解释

    父元素设置了 flex 父元素称为容器
    父元素设置了 flex 子元素被称为项目


## 主轴x

    项目们在容器中排列的方向称为主轴

# 主轴

    主轴起点为左侧
    主轴终点为右侧

交叉轴，就是与主轴垂直的一条轴

# 容器 

    要发生弹性布局的子元素  是他们的父元素 称为容器
    就是设置display:flex的那个元素

# 项目
    要发生弹性布局的子元素们 叫项目
    就是设置了display:flex 的元素的子元素们  


​    
# 主轴
    项目们排列方向的一根轴  称为主轴
    如果项目们是按照水平排列 那么主轴是x轴
    如果项目们按照垂直排列  那么主轴就是y轴
    项目们在主轴排列的顺序 称为主轴起点和主轴的终点


# 交叉轴
    与主轴垂直的一根轴 叫做交叉轴
    项目们在交叉轴的排列顺序，称为交叉轴的起点和终点

## 语法 

### 将元素设为弹性容器之后 他的所有子元素 都会变成弹性项目

    disply:flex; 将块级元素设置为容器
    inline-flex 将行内元素设置为容器


# 默认主轴 x 轴 

### 注意

    元素设置为flex容器后 容器的text-align，vertical-align失效
    项目的 float clear失效


# 容器的属性 

    设置主轴的方向  row x轴   -reverse 反转
   flex-direction: //row ;     column


# 单词必背

# flex-direction
    取值 row 默认值 主轴是x轴  主轴起点在左端
        row-reverse 主轴是 x 轴 主轴的起点在右端
        column   主轴是y轴  主轴起点在顶部
        column-reverse  主轴是y 主轴起点在底部


# 设置自动化行	            -reverse

# flex-wrap:nowrap; /wrap      

    取值 默认值  nowrap  空间不够时  不换行   项目会自动缩小	
        wrap  空间不够时 项目不缩小  换行
        wrap-reverse 项目换行，并反转


上面两个属性的简写
      
      flex-flow:direction wrap;



# 定义项目在主轴上的对齐方式
     justify-content:flex-start;   //

# justify-content

    取值  1 flex-start 默认值  主轴起点对齐
          2 flex-end 主轴终点对齐
          3 center 主轴中心
          4  space-around 每个外边相同，两端有空白
          5  space-between 两端对齐，两端无空白



## 设置项目们 在交叉轴上的对齐方式

# align-items：

  取值
      1 flex-start  默认值  交叉轴起点对齐
      2 flex-end  交叉轴终点对齐
      3 center 交叉轴中间对齐
      4 baseline   基线  flex-start 类似
      5 stretch    项目不写高  充满容器整个高度


## 项目属性  

    设置 在项目中的属性 只会影响当前项目
    不影响其他项目


### 项目顺序

      1, order  定义项目排序的顺序   值越小  越靠近起点   默认值为0

取值  无单位数字

# flex-grow    增长
如果容器 有足够大的剩余空间  项目按比例放大（比例不准确）
    
    flex-grow: 1;   flex-grow:10; flex-grow:1;


    取值  无单位数字  默认值  0

# flex-shrink  缩小

如果容器空间不够 项目按比例缩小（比例不准确）

    取值  无单位数字   默认值是 1    取值越大 缩小的越快


# align-self
定义某一个项目在交叉轴上的对齐方式  不影响其他项目
   取值

    1 flex-start  默认值  交叉轴起点对齐
    2 flex-end  交叉轴终点对齐
    3 center 交叉轴中间对齐
    4 baseline   基线  flex-start 类似
    5 stretch    项目不写高  充满容器整个高度
    6   auto  使用 align-items  定义的值  


前程无忧     智联招聘

项目
div #content >div*6

    display:flex;  flex-wrap:wrap;
    justify-content:space-bewteen

# 弹性盒模型比浮动更重要



# Css hack


    由于不同的浏览对css 的解析认知是不同的 会导致同一份css在不同的浏览器生成的页面效果不同
    我们要针对不同的浏览器 写不同的css代码
    这种写不同css代码的过程叫做 css hack

tmooc 有相关视频

    -webkit-
    -ms-
    -moz-
    -o-

# 转换（重点*******）
## 什么是转换  

    改变元素在页面中的位置  大小  角度  形状(预判不出来)


    2D转换  只在x轴 和 y轴 发生转换    
    3D转换  增加了z轴的转换效果

# 转换属性


tranfrom
取值      
          
          1.none 默认值  无任何转换效果
          2.转换函数 transform-function


# 2D 转换

## 位移
    transform：translate(150px )；
    取值 1 translate(x) 和 translateX();
            x 轴位移   +右  -往左
    translateY(y)
            y轴位移   + 往下   -往上
    translate（x，y）同时设置x轴 和 y轴 位移

## 缩放


    transform: scale(0.5,2);
    取值 scale(n)   同时设置x轴 和y轴的比例
           scale(x,y)  分别设置 x 和 y 轴的比例
   	n>1 放大     n=1  不变     
                0<n<1  缩小   0.5
               -1<n<0  缩小并反转
	  n<-1  放大并反转

##  旋转

    transform：rotate (n deg)； 
    n  + 顺时针     - 逆时针
    
    注意：
      1 旋转的转换 会被转换原点影响效果
      2 旋转是连同坐标轴一起旋转的 会影响旋转后的位移方向

##  倾斜

     transform:skew(ndeg)


​     
    skew(ndeg)等同于skewX(xdeg)
      
      让元素向着x轴发生倾斜  实际上改变的是y轴的角度
      值 ndeg 为 正     y轴逆时针
      值 ndeg 为 负     y轴顺时针
    skewY(ydeg)
     
     让元素向着y轴发生倾斜  实际上改变的是x轴的角度   
      值 ndeg 为 正    y轴为顺时针
      值 ndeg 为 负     y轴为逆时针
      
    skew(x,y)





# 3D转换  



## 透视距离

  模拟人的眼睛到3D转换元素之间的距离

  透视距离不同  看到的效果就不同

   perspective:px   此属性要写3D转换元素的父元素上


## 3D  旋转
    transform 
### 取轴

   rotateX(ndeg) 

   以x轴为中心  旋转元素（烤羊腿 老式爆米花）

   rotateY(ndeg) 

   以y轴为中心 旋转元素（旋转门 钢棍舞）

   rotateZ(ndeg) 

   以z 轴 为中心轴  旋转元素（电风扇  摩天轮）

   rotate(x,y,z,ndeg) 
   x，y，z取值为0 代表不参与旋转
   x， y ， z>0 代表参与旋转


# 过渡（重点***********************）

  让css的值  在一段时间内平缓的变化
    
        transition-property

  取值 all 所有支持过渡属性都参与
    	
  单独写在某个css属性  多个属性间用空格分开
  支持过渡的属性

      1 颜色属性
      2 大多数取值为具体数字的属性
      3 阴影  
      3 转换
      5 visibility  

 ## 指定过渡时长

    transition-duration:   s/ms; 
    指定多长时间完成此次过渡操作

 ## 过渡时间曲线函数    
      ease    linear 匀速    ease-in  慢速开始     ease-out  快开 
      
      transition-timing-function：ease；
      
      ease     默认值    慢速开始   中间变快  慢速结束

   

    linear   匀速
    ease-in  慢慢开始  一直加速
    ease-out 快速开始   一直减速
    ease - in -out 慢速开始  慢速结束   中间先加速 再减速

  ## 延迟执行

   transition-delay: 2s; s/ms

# 过渡代码编写的位置

    写在原来的选择器中 过渡效果有去有回
    下载 hover 中   过渡有去无回

## 过渡简写方式

    transition：all  4s   linear  2s;
       
    transition:  property  duration 
       
    timing-function delay;	

### 最简方式  

      transition: duration;


## 过渡 

      起始点     →     终止点

## 动画
多个点

      点  →   点   →   点   →    点


# 欺骗眼睛    24张图/1s   

  	  每秒24帧  

                  每秒12帧

css  元素的样式

css  引入帧         




# 动画  		

  多个过渡效果放到一起

##  关键帧

    1 动画指定的时间点
    2 在这个时间点上的样式

# 动画的使用步骤

  ## 使用关键帧定义动画

    @keyframes 动画名称{
    
          0%{
          .....
          }
        
        100%{
          ......
        }
      }

# 调用动画
1 选中要执行动画的名称

     animation-name

2  动画持续时长 

      animation-duration

3 动画的时间曲线函数

      animation-timg-function:ease/linear ease-in/..

4 延迟执行.

    animation-delay


#  动画的其他属性


   动画播放次数

        animation-iteration-count:3;   

   取值    具体的播放次数
              ineinite; 
    
    动画的播放顺序
    
    animation-direction：normal；  /
    
    alternate    
    
    取值 normal  默认值 0%~100%
            reverse  100%~0%
            alternate  轮流播放  奇数次正向  偶数次逆向


#  动画简写方式

    animation: name  duration  timing-function  delay  count direction


## 最简方式

    animation: name  duration



# 动画播放前后状态

      animation-fill-mode:;

## 取值

      1 backwards 动画播放之前的延迟时间内 显示动画的第一帧
       
      2 forwards 动画播放结束之后 停留在最后一帧
       
      3 both   1和2 合体
       
      4 none  默认值

  div:hover

动画播放与暂停

      animation-play-state:paued;








# 转换函数  

transform-function:位移，旋转 放大 倾斜 
改变角度

    transform:rotate(45deg)  

转换原点
    
    transform-origin:right top;


转换原点会影响元素旋转时的效果


# 动画的兼容性

低版本浏览器  

想使用动画需要在动画声明的时候添加前缀 


# @keyframes

    @-webkit-keyframes     -o-  -ms- -moz-  




# 第三方动画库
  animate.css

  项目中一般使用第三方动画库 animate.css
  在页面中导入
## 调用动画名称



# Css 优化的目的
css 优化的目的

    1 减少服务器压力     
    2 提升用户体验

## css  优化的原则

    尽量减少 http 请求个数   
    在页面顶部 引入css文件
    将  css 和 js 写在外部单独文件中

# css 代码优化
   合并样式（能写群组 就不单写   能用简写 就不单独定义属性）

   缩小样式文件的大小（能重用的尽量重用，减少样式重写）

   避免出现空的 href  和 src

   代码压缩   


# css reset   和  normalize.css

## 什么是 css reset    

     由于不同浏览器  对html 元素的默认样式解析不同
     我们在开发css之前  把大多数默认样式统一重置(格式化)
     然后再写代码  这个行为叫做 css rest	*{margin：0；padding：0；}
## normalize.css

     是 css  reset 一种优质的替代方案 

## css reset 和 normalize 区别

       css  reset  太激进  太暴力
       normalize.css 比较温和	



# Css 优化    避免像服务器的请求数据

## css  sprites

    合并多个背景图像 到一个单独图像 然后 通过
    background-image 和 background-position 进行调整

## image  maps： 

    结合多个图像到一个单独图像
    有效减少http请求的个数
    
          div{
                width:50px； height: 50px;
                background-img:url(s1.jpg);
                background-repate ：repate；       
            }
            d1{background-position: 0   0;}



# BootStrap

## 响应式布局 （css3）

### 什么是响应式网页

    Responsive  web page 响应式网页
    可以根据浏览器设备不同（pc，pad，phone）
    而自动改变布局 图片  文字效果  不影响用户体验

### 响应式页面 必须做到以下几件事

    1 布局   不能固定元素宽度  必须使用流式布局 (默认+浮动) + 弹性布局 
    
    2 文字和图片大小随着容器大小变化
       
    3 媒体查询技术


screen  and  屏幕大小  


    xl  > = 1200   
    lg >=992px  <=1199px      大屏        
    
    pad   phone      
    md >=768px  <=991px     中屏 
    sm >=576px  <=767px    小屏
    xs <=575px      

print 
  /* pc  >=992px  */
        
        
        @media  screen  and (min-width:992px){
            div{
                	.....
            }
        }


​        
        /* pad 768<px<=pad<=991px */
        @media screen and (min-width:768px) and (max-width:991px){
            div{
                  ....
            }
        }


​       
        /* phone <767px */
        @media screen and (max-width:767px){
            div{
                	.....
            }
        }




原始响应式



  大屏 1200px 
    
        pc >=992
        
        pad   768<px  and  <991px
        
        phon  <767px  






<hr/>

练习  02_ex


            创建 div 200px * 200px  背景随意    鼠标悬停时
            该元素向右偏移200px  向下偏移200px  旋转135deg   向x轴倾斜45deg 并且放大1.5倍

面试题
      
      使用css  让一个div 在任何情况下都处于屏幕的中心
      left 50%  top 50%
      transform：translate(-100px,-100px);  
      宽高偏移自身的一半  
      就是屏幕的中心点








# 什么是响应式 

智能的根据用户行为 或者使用设备  环境进行相应的布局
    尽量不使用定位
    响应式页面的构成
    
          流式网格布局
  	      可伸缩的图片和文字
 	      css3 Media Query 技术
	
## 响应式布局

什么是响应式 

     响应式网页必须做到的几件事
     
     布局  使用流式布局（默认文档流+浮动）+ 弹性+ 栅格布局
     
     文字和图片  大小 跟随容器大小改变
     媒体查询技术（css3）
     代码复杂程度  几何性增加
     复杂网页 不适合使用响应式

## 如何测试响应式网页

  1 使用真实设备

     好处   真实可靠  
     缺点   成本高  测试任务量巨大 

   					暴力测试   随机 每个像素点  每秒点击20次

  2 使用第三方模拟软件测试   

     好处  方便快捷  
     缺点  测试效果有限  有待进一步测试

  3 使用chrome 自带测试模拟器	
    
       好处 简单方便
       坏处  测试效果十分有限	

  4 编写响应式布局（重点*********************）

     视口  viewport        最大可视化区域   

   手机适配 

      视口的设置  如果项目需要在移动端运行 需要设置视口
    
    meta  name="viewport" content ="width=device-width, 
    initial-scale=1.0,maximum-scale=1.0,user-scalable=0">

   

    width=device-width 设置视口宽度等于设备宽度
       
    initial-scale=1.0，设置视口宽度能否缩放   1.0 代表不能
       
    maximum-scale=1.0，   设置视口最大缩放比例  1.0最大1倍
    
    user-scalable=0      设置是否允许用户缩放视口  0 不允许


# 视口最简写法

      <meta  name="viewport"  content="width=device-width,initial-scale=1">


所有的内容文字图片都是用相对尺寸(尽量)  少使用绝对值

## 流式布局+弹性布局 +媒体查询（栅格布局）完成响应式布局

# 媒体查询 

    Css3   Media Query  做响应式必备技术
    Media：媒体  浏览网页的设备
  	  设备： screen（pc/pad/phone）
  	           TV/print    

    根据浏览网页的设备不同（尺寸 反向，硬件，解析度等),有选择的 执行一部分css样式
    忽略其他css样式	 




/* PC */

    @media screen and (min-width:992px){}
/* ipad */

    @media screen and (min-width:768px) and (max-width:991px){}
/* phon <=767px */

    @media screen and (max-width:767px){}



# BootStrap

     1 如何使用boot
      
     2 全局css
      
     3 组件+js插件
      
     4 定制sass
      
     5 boot 项目
      
     Bootstrap  移动设备优先 web 项目


额外知识点   

库--小，工具  JQuery

Css   Js    

框架      半成品的项目

XS  超小屏

    @media(min-width:576){                SM    小屏
        .container{
          max-width:540px;
      }
    }


    @media(min-width:768){                MD  中屏
        .container{
          max-width:720px;
      }
    }


    @media(min-width:992px){             LG  大屏
      .container{
        max-width:960px; 
      }
    
    @media(min-width:1200px)             XL 超大屏
      .container{
        max-width:1140px;       
        }
    }



# 全局css 样式

     container  定宽容器 每种不同分辨率下 
     定义了了写死的max-width  同时 有左右15px 内边距 水平居中   无法接触边界保持水平居中

   

      container-fluid    变宽容器  根据不同分辨率的屏幕 宽度永远是屏幕的100%
    
        boot 支持4种屏幕  xl/lg/md/sm     不支持xs
        boot  中  1 rem   = 16px  
        boot  中 css reset  使用的是 normalize.css方案




# 按钮相关的class 
    .btn  基本类  定义了 行内块 字号  文本对齐  边框 过渡等 

### 按钮颜色   信息   主要  次要  深色  浅色

    .btn-danger  红色
    .btn-success  绿色
    .btn-warning  黄色
    .btn-info  藏青
    .btn-primary  蓝色
    .btn-secondary 灰色
    .btn-dark   深色
    .btn-light   浅色

### 不同边框的按钮 


    .btn-outline-danger/warning/info/dark/light...

###  不同按钮大小

    .btn-sm  .btn-lg                 padding  0.5rem  1rem;
    
    .btn-block   块级     .btn-block + btn-block{margin-top:0.5rem;}
    
    btn-link  带下划线链接


#  图片相关

    .img-fluid{    
      max-width:100%;    //原始图片100%
      height:auto;     //根据父元素
    }


    //图片最大缩放不可超过父级100%
    
    .rounded		添加圆角  0.25
    .rounded-circle 	圆形
    .img-thumbnail	添加内部边距和边框
    .img-fluid    	响应式图片 图片可以缩放 但是最大不能超过原始大小


​    						
# 字体相关
      .text-lowercase{
           text-transfrom: lowercase !important;
        }
      
      .text-danger/warning/info/muted...文字颜色
      
      .h1~.h6  文本字号加粗
      
      .text-uppercase/lowercase/capitalize 文本大小写转换   / 首字母大写
      
      .text-left/right/center 文本对齐
      
      .text-*-left/right/center   *:sm/md/lg  媒体查询
      
      .text-justify    两端对齐  没有媒体查询
 ————————————————————————————


      @media(min-width:768px;){ 
          .text-md-left{
          text-align:left !important;
        }
        .text-md-right{
          text-align:right !important;
        }
        .text-md-center{
          text-align:center !important;
        }
      }



      @media(min-width:576px){
          .text-sm-left{
          text-align:left !important;
        }
        .text-sm-right{
          text-align:right !important;
        }
        .text-sm-center{
          text-align:center !important;
        }
      }
————————————————————————

Css3   画❥怎么画

# 列表相关 
      ul 
          .list-unstyled   去点  左内边距清零
          .list-group  列表组  边框圆角
      
      li  .list-group-item   列表项  边框  首元素 和  尾元素的圆角 颜色
    
      .list-group-item:first-child{
        border-top-left-radius：0.25rem；  4px
      }
      .list-group-item:first-child{
        border-bottom-left-radius：0.25rem；  4px
      }


    激活项  .active
    禁用项  .disabled


# table相关class

      table   基本类 为  table本身的后代布局 
      table-bodered   为 table 本身和后代添加边框
      
      table-warning/sucess 表格的颜色
      
      table-hover  带悬停效果的表格
      
      table-striped 隔行变色
    
    .table-dark.table-striped tbody tr:nth-of-type(odd){}


    .table-responsive-*    *:  sm/md/lg/xl
    		    响应式布局的表格  写在table父元素上




# 辅助类  

## 边框 

   .border-0   属性    
          
    .border-top/right/bottom/left-0  去掉某一个方向的边框

   基本类   .border  灰色实线的边框

  	.boder-top/right/bottom/left 单边的灰色实线边框	

   边框颜色

      .border-danger/warning/success...


# 浮动

      .float-left/right/none
       响应式浮动

   

      .float-*-left/right/none  *:sm /md /lg/ xl
       
      .clearfix 解决高度坍塌 写在父元素上

# 显示 

   visible   visiblity:visible    

   visibliy  visibility:hidden


# 背景颜色 

     .bg-primary/danger/warning/success....

#  圆角

    .rouned/.rounded-0  
    .rounded-top/right/bottom/left 设置某个方向的两个圆角

# 尺寸

      w-25/50/75/100    width:25%/50%/75%/100%
      其他宽度需要自己定义
       
      h-25/50/75/100 同上
      mw-100/mh-100    max-width:100%; max-height:100%;


# 外边距

      m/mt/mr/mb/ml/mx 左右/my-*-auto 上下/0/1/2/3/4/5
    
        0:0rem
        1.25rem
        2:0.5rem
        3:1rem
        4:1.5rem
        5:3rem


​      
      p/pt/pb/pl/px/py-*-0/1/2/3/4/5 内边距 无auto
      ": sm/md/lg/xl


      mt-sm-1 mt-md-2  mt-lg-3 mt-xl-4



      mt-sm-3    


响应式
    
      .m-sm-0

# 栅格布局   重点***************

## boot 的使用


# 栅格布局

### web  页面中  布局方式有三种

    table     	div+css  			  boot的栅格


优点
   简单 容易控制	语义正确，渲染效率高	  简单 容易控制
   语义错误,渲染 	语义正确 渲染效率高 

缺点

      控制起来很麻烦 尤其在	  支持响应式
      效率低		响应式布局中		  非常复杂的页面不建议使用





# 栅格理论

栅格--数学概念

  找一个数字  这个数字最小 

  最多公倍数   12     1-12-2-6-3-4

  把所有的布局看成一个row

  每行分为12 col    1:1:1:1     3 3 3 3

      .row{
        display:flex;
        flex-wrap:wrap;
        margin-right:-15px;
        margin-left:-15px;
      }
    
    .col-xl-auto{
      position:relative;
      width:100%;
      min-height:1px;
      padding-right:15px;
      padding-left: 15px;
    }
    
    .col-1{
    flex：0 0 8.333333%；
    max-width: 8.33333%;
    }

# 栅格的概念

  我把每一行布局 分成12份

  元素的占地宽度  靠份数定义  

## 栅格属性	

     1 必须放在.container
     2 每一个row,弹性 主轴x  可以换行  有-15px 的左右外边距
     3 使用.col-n 来声明子元素 在row中占几份
        所有col自带左右 15px 的内边距 

## 响应式的栅格布局 

    一行 4列     大屏幕  1:1:1:1
       	
     中屏幕  两个一行   1:1 / 1:1
      	 
     小屏幕   每一个单独一行 

col-*-n  *:xl/lg/md/sm  n:1-12

在不同屏幕下 占一行的n份

ex：col-lg-3  col-sm-6


# .col

     使用.col类  不添加数字  自动处理布局
     没有给col 平均分配空间 col 可以超过12个  并 且不换行

# boot  媒体查询的兼容性问题

     @media(min-width: 1200px){}
     @media(min-width: 992px){}
     @media(min-width: 768px){md}
     @media(min-width: 576px){sm}

# 中屏向上兼容

    @media screen and(min-width:768px) and (max-width:991px)

# boot 媒体查询的兼容性 问题

      boot 中媒体查询  小屏幕向大屏幕兼容
      sm 兼容 md/lg/xl
      md 兼容 lg/xl
      lg 兼容 xl

# 列偏移

    offset-*-n       *:sm/md/lg/xl   n:0~11
    col 向右偏移n份

# 栅格嵌套

     请在 col 中 单独写出 div.row


# 弹性布局

    d-*-none/inline/block/inline-block/flex
    一个容器设置为弹性 text-align失效
   ## 主轴方向
      flex-*-row/row-reverse /column/column-reverse 
   ## 项目在主轴上的排列方式

      justify-content-*-between/around/start/end/between/center


# 表单

## 表单元素的排列方向

     .form-group  堆叠表单 垂直排列
    
     .form-inline    内联表单  水平 排列（弹性）

## 表单控件样式

     .form-control  input 元素的基本类
    	块级  w100 字体  背景 边框 过渡
       
     .col-form-label/-sm/-lg  设置 输入文本与边框的距离
       
     对于 checkbox  的样式
     父级 .form-check （相对定位）
     子级 .form-check-input(绝对定位)	
     form-text  0.25上外边距   转块级 


# 组件


## 总结

    boot中的事件  关注两件事
       
          事件是如何触发的 自定义属性触发  触发方式是这个属性的值
    
          事件触发的目标
            button 绑定目标  data-target="#id"
          
          a  绑定目标  href="#id"  

# 按钮组 

    基本结构  
       div>.btn*n
    
       外层div添加类  btn-group 横向按钮组
    
      	               btn-group-vertical 纵向按钮组
    
       使用btn-group-lg/sm  调整按钮组大小

# 下拉菜单
  ## 样式  

        div.dropdown   相对定位
       
        >button.dropdown-toggle          画向下小三角   
       
        ul.dropdown-menu                      
        
        display:none;

  ## 事件   

        什么行为触发的事件
     
        自定义属性定义事件
     
        事件触发后操作的目标 
        
       button  data-toggle="dropdown" 以
       droupdown的方式切换 
       
       事件目标：ul 由于 ul 和 button 被 div.dropdown 包裹
         
      点击 button  会自动更改ul的状态  不需要单独写目标

# 信息提示框

  # 样式

     div.alert.alert-info		alert 基本类  
     
     aleft-danger/info...颜色
     
     	.alert-dimissble  		配合子子元素的.
       close类使用
     
     >span.close			取消的小叉叉右浮动

# 事件

    给 span(小叉叉)添加自定义属性  
      data-dismiss="alert"
    
    事件的目标不用写   默认是span 的元素 div.alert  


# 导航


  导航  ul>li
        
  导航栏 div>ul>li  

  ## 水平导航

      导航  ul.nav>li.nav-item>a.nav-link
      ul.nav                  弹性布局 去点   
      
      主轴方向 默认x轴         
      
      >li.nav-item         配合 ul.nav-justified  元素项目等宽显示
     
      >a.nav-link          块级  内边距撑开  hover，focus 等

  ## 选项卡导航

     导航样式
     
     ul.nav.nav-tabs>li.item>a.nav-link  
     .nav-tabs 让水平导航  变为选项卡导航

 ## 显示内容

     div.tab-content>div.tab-pane
     
     div.tab-content   没有任何样式  作为子代选
     择器的路径
     
     div.tab-pane   与父元素配合  让当前元素  
     
     display:none
    
    .active 与 .tab-content 配合 让当前元素显示  

## 事件  

     <a data-toggle="tab" href="#table1" class="nav-link"> item-n1 </a>
    
      给 div.tab-pane 添加 id  把 id 放到对应a  标签的href中
      
     定义事件触发之后指定的目标


  #  nav-tab/胶囊导航

    ul.nav.nav-pills
    
    li.nav-item
    
    a.nav-link  data-toogle="pill" href="#对应id"
    
    内容  div.tab-content>div.tab-pane   

# 导航栏 (重点)   折叠导航栏

      .navbar-expand-lg.navbar-nav{
        flex-direction:row;
      }

### 默认垂直显示   添加navbar-expand-lg向上兼容  横向显示  

        div.navbar.navbar-expand-*   默认弹
        性   默认主轴为x
        
        ul.navbar-nav   默认弹性 主轴为y
        父级div的 navbar-expand-* 与子级 ul.
        
        navbar-nav组成后代选择器  对ul的主轴方向进行了
# 控制

    比如  navbar-expand-md  当屏幕 w>768px  ul的主轴方向为row 所有li横向显示  
    当屏幕w<768px  ul的主轴方向默认为column  所有li横向显示   
    
    li.nav-item   
    a.nav-link


## 折叠导航栏  

    button  data-toggle="collapse"   data-target="#div的id"
    div.collapse  display:none 隐藏
    button 

## 卡片

    div.card>
          div.card-header
          div.card-body
          div.card-footer
    
    如果在card中a标签  那么a可以使用 card 提供的样式  card-link
    
    对于card来说  除了div.card  其他都可以省略


# 进阶

手风琴效果（卡片+折叠）
## 注意

    .collapse 不能和.card-body在同一个div上 
    不然会隐藏/显示的时候  会发生卡顿

## 解决方案 

    div.collapse>div.card-body


# 多个折叠部分可以同时打开

    解决方案 在最外层  添加 div#parent 所有的卡
    片都在这个div中
       
    在所有div.collapse 上  添加事件  data-parent="#parent"
       
    这样就可以保证  在div#parent中  同时最多只有一个折叠区域是打开状态



# 折叠导航栏

            <div class="navbar-expand-sm">
                <div class="collapse navbar-collapse"></div>
            </div>
    
            conllapse: display:none;
                .navbar-expand-sm.navbar-collapse{  sm 以上的 屏  显示
                    display:flex !important;
                }
    
      div.navbar.navbar-expand-*.bg-dark.navbar-dark
内部三部分
      
      a.navbar-brand  不隐藏 显示在最前面的菜单
      button.navbar-toggler>span,navbar-toggle-icon  折叠按钮
     
     div.collapse.navbar-collapse    折叠的导航
    > ul.navbar-nav>li.nav-item>a.nav-link
功能解释


 navbar-dark  

    对最外层div 没有任何影响  告诉内部的
        .navbar-brand 和 .navbar-nav 和  .navbar-toggler-icon
        告诉他们  导航栏是深色的  你们要用浅色文字



.navbar-expand-* 和 .navbar-collapse 配合


    .navbar-sepand-* .navbar-collapse{display:flex}
    所以只要屏幕符合*的要求   这里div 就是显示状态 
    屏幕不符合*号的要求   这个选择器就失效
    
    div按照 .collapse 的样式 隐藏
    简单来说 .navbar-expand-* 和 .
    
    navbar-collapse 中的*  决定了菜单在什么屏幕下显示
    什么屏幕下隐藏




# 媒体对象


## 图片      

        <div class="media border rounded p-3">
                    <img src="../">
                    <div class="media-body ml-3">
                        <h4>心心赛高</h4>
                        <p>赤井心 fash style</p>
                        <button class="btn btn-primary w-25 text-white">播放</button>
                    </div>
              </div>



media   



# 焦点轮播图

图片轮播  

  div.carousel		相对定位

        >div.carousel-inner	相对定位 宽度100%  溢出隐藏
        >div.carousel-item.active	display:none .active ：显示
        >img.w-100	如果不是宽度 100%  右边箭头会出去


# 事件

    给 div.carousel 添加 data-ride="carousel"  轮播图就可以动了



# 左右箭头
      div.carousel
        >a.carousel-control-prev/next
          data-slide="prev/next" href="#id"
          >span.carousel-control-prev-icon




由于boot 给默认的左右箭头不符合我们的需求
所以样式需要重写  


      .carousel-control-prev,
            .carousel-control-next{
                width: 4%;
                height: 20%;
                background-color: #aaa;
                border-radius: 0.5rem;
                top: 40%;
            } 





## 轮播指示器 

      ul.carousel-indicators   定位  弹性布局
            >li.active .catousel-indicators 设置li的宽高度
        由于 boot 默认宽度不符合我们的需求 需要重写
    
    .carousel-indicators li{
                width: 0.3rem; height: 0.3rem;
                background-color: #fff;
                margin-left: 0.4rem;
                margin-right: 0.4rem;
                border-radius: 50%;
            }
            .carousel-indicators .active{
                background-color: #0aaeed;
            }

事件 
        
        li  data-slide-to="图片的index" 从 0开始 
  	    data-target="#id"




# 模态框
        <h1>模态框</h1>
        <button class="btn btn-info">打开模态框</button>
        <div class="modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header"></div>
                    <div class="modal-body"></div>
                    <div class="modal-footer"></div>
                </div>
            </div>
        </div>

<hr>

        <h1>模态框</h1>
              <button  data-toggle="modal" data-target="#d1" class="btn btn-info">打开模态框</button>
              <div id="d1"  class="modal">
                  <div class="modal-dialog">
                      <div class="modal-content">
                          <div class="modal-header">
                              <h4>信息收集</h4>
                          </div>
                          <div class="modal-body">
                              请输入姓名<input type="text">
                          </div>
                          <div class="modal-footer">
                              <button data-dismiss="modal" class="btn btn-danger">关闭</button>
                          </div>
                      </div>
                  </div>
              </div>




# 其他组件

## 巨幕  

    巨大的内边距和边框背景色
       
    div.jumbotron

## 徽章 

      基本类 badge
      
      徽章颜色  badge-danger/warning..
      
      胶囊徽章  badge-pill


Task

        1  导航 （水平导航  选项卡导航  胶囊导航）
        2  手风琴效果
        3  折叠导航栏
        4  焦点轮播图



# 其他组件


## 分页

   基本结构

      ul.pagination
          >li.page-item
              >a.page-link
    
    li的修饰类  .active 激活
                .disabled 禁用


​      
      .page-item .page-link{
                border-radius: 0.25rem;
            }
      
      .page-item+.page-item{
                margin-left: 0.5rem;
            }

重写样式


## 面包屑导航  每一项要有层级关系 

        ul.breadcrumb>li.breadcrumb-item

   中间的连接符号可以自己定义
  ## 重写样式
      .breadcrumb-item+.breadcrumb-item::before{
        content:">";
      }



# 进度条

       div.progress   进度条的槽
           >div.progress-bar  进度条的进度需要自己加宽度

  带条纹的进度条 

      带动画进度条 progress-bar-animated


# BootStrap 重点  响应式+栅格布局+SCSS

# 定制
  ## scss 是什么

    css 是一种脚本语言  没有动态语言的特征
    
    css 语法不够强大  没有变量和合理的样式复用机制  导致难以维护
    
    我们需要使用动态样式语言  赋予css的新特性
    
    1 SCSS / SASS(scss兼容sass，scss更接近css语法)
    
    2 stylus
    
    3  less
# SCSS  功能

   scss 是一款强化 css的辅助工具

   他和 css 的语法很像  在css 的基础增加了变量嵌套混合 导入  函数等高级功能

   这些拓展命令  让css 更加强大且优雅

   scss 运行在服务器端  

   浏览器不认识.scss文件  需要转换成.css才能被浏览器解析执行
# Scss的使用

   scss在服务器端使用

   1  安装 nodeJs解析器  v8.11 以上 
   2  cmd 控制台输入 npm install -g  node-sass



# scss 文件转换css文件

   ## 单文件转换

     在项目目录下  按住shift 右键打开 powershell
     输入  node-sass  scss/01.scss  css/01.css   
     	   
                  要转换的 scss 文件  转换后的css文件
      
      node-sass  sass/01.scss css/01.css


# 转换批量sass文件

     node-sass  scss -o css
             scss文件夹名称  -o  css文件名称

## 单文件的监听
### 自动监听转换

    node-sass -w  scss/01.scss css/01.css

开启一个监听 注视着scss/01.scss文件 
一旦这个文件被保存（ctrl+s） 自动转换成css/01.
css文件


## 多个文件监听

      node-sass -w scss -o  css



# 工作中

     1 只做自己熟悉的业务
     2 不停的挑战新的业务/技术

# SCSS 基础语法

  变量

      使用$符号创建变量  变量名可以包含-_命名规则基本与css 选择器相同
      
      尽量做到见名知意
      
      1 变量声明时  可以引用其他变量名
      2 变量如果声明在{}内 就只能在这个{}内使用
      3 !default 规则
      
      如果此变量之前声明过值  就是用之前声明的值
      如果此变量之前没有声明过  就是使用现在的值
      
      $jd_red:#111 !default;

# 嵌套
      #content{
        font-size：12px；
        div.to{
            color:red;
        }
      }    
# 伪类选择器的嵌套 
      .mybtn{
          &:hover{} 
      }
  嵌套是需要&占位符  如果没有占位符  选择器和伪类选择器之间会多一个空格
  导致选择器   整个失效

# 群组的嵌套
    nav,div,h1{ a{color:#fff}}

# 属性的嵌套
//属性的嵌套

    div{
        border: {style:solid;width:10px;color:#00f;};
    }

练习   使用属性嵌套  味蕾嵌套
        
        
         一个 200px*200px 的div  红色背景  方形 鼠标悬停时 过渡到黄色背景  且为圆形
       使用 scss编写


# 导入

  在scss 语法中  如果scss 文件 以下划线 开头 那么这个sass就被称为局部scss文件

  ## 局部sass文件的特点

      1 每一个局部scss文件 就是一个  小模块 
      2 scss 在做转换css 的时候 不会转换局部 scss 文件
      3 我们一般会在全局 scss 文件中 导入局部scss文件
         导入的语法 "@import"  局部scss 文件名称 ( 不带下划线 不带后缀 )
        这样生成一个统一的css文件
      4 局部scss 中的变量  可以在被导入的文件中使用

## 混合器

    把多个选择器 都会用到的样式  封装进 一个混合器中 
    需要使用的时候  调用混合器   实现代码的重用
## 声明混合器

      @ mixin 混合器名称（参数1，参数2.....）{
      样式... 
      }
调用混合器

    @include 混合器名称（参数1，参数2.....）；




//混合器

      @mixin my_border($color,$radius,$outline){
          border: 1px solid $color;
          border-radius: $radiu;
          outline: $outlin;
      }
    
      p{
          color: #ff0;
          @include my_border(#0f0,30%,0);
      }


# 注意 混合器使用最多的场合 css hack

      @mixin linear_grediant($color1,$color2) {
          background:-webkit-linear-gradient(bootom,$color1,$color2);
          background:-o-linear-gradient(bootom,$color1,$color2);
          background:-ms-linear-gradient(bootom,$color1,$color2);
          background:-moz-linear-gradient(bootom,$color1,$color2);
      }
    
      @include linear_grediant(#ff0,#0ff);


# 继承

  一个选择器  可以完全使用另外一个选择器样式 
  使用关键字  @extend 选择器名称;  继承样式

      运算符 + - *  /  %
      + -  / 

  

    scss 可以自动在几种单位之间转换数值
    
    前提是  单位可以转换  rem em % 就不能转换

# 加法   
    //字符串拼接
    p::before{
        content: "Microsoft"+yahei;
        font-family:A + "rial";
    }
 字符串拼接时 如果有双引号的 + 无双引号 结果有双引号

 如果使用无双引号 + 又双引号  结果无双引号

# 减法

      减号 会被 自动解析为变量的一部分
      所以scss 中的减法，要前后加空格
      width: $my-width - $min-width;   


# 除法

      scss中  / 的作用  除法  分隔符
      在scss, 以下情况会被认为是除法
      1 如果运算符两边的数字 是变量或者函数的返回值 
      2 运算式被小括号包裹 认为是除法
      3 除法运算式 是其他算术运算式的一部分  认为是除法


## 字符串的插值操作 

      content:"liangliang ate #{200+100} baozis";
    #{} 做插值

## 颜色的运算 

      分段运算 
      #rrggbb+#rrggbb=#rr+rr  gg+gg bb+bb
      rgb(a,b,c)+rgb(d,e,f) = rgb(a+b,b+e,c+f)
      rgba 的算法
      计算两个tgba的时候  要求alpha 必须相等



## 内置函数   typeof


scss 定义了很多函数  有些函数直接可以在css语句中使用
    rgba就是 scss 函数

        hsl（hue,saturation,lightness）
        hue 色调    0~360   0~120  120~240  240~360
        saturation  饱和值     0~100%
        lightness 亮度      0~100%

# 数学函数
      round($val) 四舍五入
      ceil($val)     向上 取整
      floor($val)  向下取整   
      min($v1,$v2...)
      max($v1,$v2...)
      random()

# 字符串函数  splite
    unquote($str)  去掉$str的引号
    quote($str)   
    to_upper_case("abc"); 变大写
    to_lower_case("ABC"); 变小写


# 自定义函数
        function get_width(){
    
        return a-b
      }
    
      @function get_width($a,$b){
            @return $a-$b;
        }

关键字  function  return 加 @， 参数加$

        @if(){
      }@else{
      
      }
    
      @if $type==sun {
            color:#00f;
        }@else if $type==moon {
            color: #0af;
        }@else{
            color: #ff0;
        }

括号可写可不写


# 1rem == 16px


​    

# 项目总结

响应式布局适用于不太复杂的页面

写响应式 要考虑多个屏幕下的对齐

主要使用栅格布局 完成响应式

手写媒体查询配合栅格

    row--自带-15px 左右外边距
    col-- 自带 15px 左右内边距
    
    boot 的媒体查询 向上兼容
    mr-md-2 mr-lg-0
    响应式网页  不使用定位

















  			

















