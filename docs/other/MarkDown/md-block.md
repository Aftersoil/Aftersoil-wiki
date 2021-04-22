# Markdown 区块

Markdown 区块引用是在段落开头使用 `>` 符号 ，然后后面紧跟一个空格符号：

```md
> 区块引用
> 菜鸟教程
> 学的不仅是技术更是梦想
```

显示结果如下：

![alt text](https://images.chibamai.xyz/wiki/image/MarkDowm/md-block-1.png)

另外区块是可以嵌套的，一个 `>` 符号是最外层，两个 `>` 符号是第一层嵌套，以此类推：

```md
> 最外层
> > 第一层嵌套
> > > 第二层嵌套
```

显示结果如下：

![alt text](https://images.chibamai.xyz/wiki/image/MarkDowm/md-block-2.png)

## 区块中使用列表

```md
> 区块中使用列表
> 1. 第一项
> 2. 第二项
> + 第一项
> + 第二项
> + 第三项
```

显示结果如下：

![alt text](https://images.chibamai.xyz/wiki/image/MarkDowm/md-block-3.png)

## 列表中使用区块

如果要在列表项目内放进区块，那么就需要在 `>` 前添加四个空格的缩进。

```md
* 第一项
    > 菜鸟教程
    > 学的不仅是技术更是梦想
* 第二项
```

![alt text](https://images.chibamai.xyz/wiki/image/MarkDowm/md-block-4.png)
