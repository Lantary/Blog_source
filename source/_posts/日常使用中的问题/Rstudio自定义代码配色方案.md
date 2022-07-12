---
title: Rstudio自定义代码配色方案
categories:
	- 日常使用中的问题
date: 2022-07-01
---

## 问题描述
Rsutido 中默认的代码配色方案变量和函数是没有区分的。所以想要一个自定义代码配色的方案

## 解决方案
因为只需要区分开函数和变量，所以可以让便量为默认色-"白色"，而函数给一个高亮。
在Rstudio中，函数高亮是有可以直接实现的选项的。
选择 TOOL -->> Global Option -->> Code -->> Display 中，勾选Highlight R function call。

![p1](https://raw.githubusercontent.com/Lantary/Private_warehouses/main/Rstudio%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BB%A3%E7%A0%81%E9%85%8D%E8%89%B2%E6%96%B9%E6%A1%88_p1.png)

如果只是需求将变量和函数名分开，那么到这里为止就结束了。
但是如果你对Rstudio默认主题中的函数高亮颜色不满意想要修改，那么可以通过以下方式。

1. 确定你现在所使用的配色方案可以在TOOL -->> Global Option -->> Appearance 中查看

![p2](https://raw.githubusercontent.com/Lantary/Private_warehouses/main/Rstudio%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BB%A3%E7%A0%81%E9%85%8D%E8%89%B2%E6%96%B9%E6%A1%88_p2.png)

3. 在你Rstudio的安装目录下找到对应名字的[ .rtheme]文件，我的文件夹在./Rstudio/resources/themes下
4. 复制一份更名，打开后找到 `.ace_support.ace_function` 即为函数颜色设置的设置条目。

![p3](https://raw.githubusercontent.com/Lantary/Private_warehouses/main/Rstudio%E8%87%AA%E5%AE%9A%E4%B9%89%E4%BB%A3%E7%A0%81%E9%85%8D%E8%89%B2%E6%96%B9%E6%A1%88_p3.png)

6. 更改文本开头的  `rs-theme-name:` 然后用Rstudio Add新设置的主题文件就可以了


## 版本信息
```
操作系统		ubuntu22
Rstudio		2022.02.3+492
```


## 参考链接
[1] https://community.rstudio.com/t/colour-additional-functions-within-an-editor-theme/4428



