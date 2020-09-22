# 其它组件

## 分页
```css
ul.pagination
  >li.page-item
    >a.page-link
  
li 的修饰类 .active 激活
            .disabled 禁用
```

## 面包屑
```css
ul.breadcrumb > li.breadcrumb-item
中间的连接符号可以自己定义
.breadcrumb-item + .breadcrumb-item::before {content: ">";}
```

## 进度条
```
div.progress     进度条的槽
  > div.progress-bar 进度条的进度需要自己写宽度
    背景 bg-danger....

带条纹的进度条  progress-bar-striped
带动画的进度条  progress-bar-animated

BootStrap 重点: 响应式 + 栅格 + SCSS
```