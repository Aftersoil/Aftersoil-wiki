# Markdown 图片

Markdown 图片语法格式如下：

```md
![alt 属性文本](图片地址)

![alt 属性文本](图片地址 "可选标题")
```

- 开头一个感叹号 !
- 接着一个方括号，里面放上图片的替代文字
- 接着一个普通括号，里面放上图片的网址，最后还可以用引号包住并加上选择性的 `'title'` 属性的文字。

```md
![RUNOOB 图标](https://images.aftersoil.xyz/aftersoil/chrome-pwa-icon/chrome-192x192.png)

![RUNOOB 图标](https://images.aftersoil.xyz/aftersoil/chrome-pwa-icon/chrome-192x192.png "RUNOOB")
```

![alt text](https://images.aftersoil.xyz/wiki/image/MarkDowm/md-image-1.png)

当然，你也可以像网址那样对图片网址使用变量

```md
这个链接用 1 作为网址变量 [RUNOOB][1].
然后在文档的结尾为变量赋值（网址）

[1]: http://static.runoob.com/images/runoob-logo.png
```

![alt text](https://images.aftersoil.xyz/wiki/image/MarkDowm/md-image-2.png)

Markdown 还没有办法指定图片的高度与宽度，如果你需要的话，你可以使用普通的 `<img>` 标签。

```md
<img src="https://images.aftersoil.xyz/aftersoil/chrome-pwa-icon/chrome-192x192.png" width="50%">
```

![alt text](https://images.aftersoil.xyz/wiki/image/MarkDowm/md-image-3.png)
