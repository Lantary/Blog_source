---
title: ibus在pycharm中不能进行汉字输入的问题
categories:
	- 日常使用中的问题
date: 2022-06-27
---
## 问题描述

在使用pycharm过程中，发现pycharm没有办法输入中文，且ibus输入法的候选框一直在左下角，不跟随光标位置。
在网络上搜索了一下，目前中文互联网上能搜索到的大部分解决方案因为版本问题多多少少都有些问题。
所以这里写一篇基于我使用版本确实有效的一个解决方案。并且指出我在用其他方案来解决时遇到的问题

## 解决方案

打开pycharm  ---->> help ---->> Edit Custom VM Options 

在出现的交互窗中输入

 ```
 -Drecreate.x11.input.method=true
 ```
重启pycharm 可以正常的输入中文，但是光标跟随问题仍未解决。目前为之还没有找到很好的解决方案

## 其他方案

### 1.[修改pycharm.sh文件](https://blog.csdn.net/weixin_39628498/article/details/110485125)

该方法尝试最大的问题是我的pycharm是从snap中下载的。
而通过snap安装的软件，赋予的权限特别高，无论怎么改它的权限，都没有办法写入。
chmod命令，chattr命令都试过了，没有用。

### 2.[加载第三方插件的方法](https://zhuanlan.zhihu.com/p/342670244)

这个方案尝试过程中，遇到的最大问题是本版本pycharm搜索不到choose runtime 需要自己手动下载。
而且文章中给的JBR文件链接也是无效的。
这里提供一个[choose runtime](https://plugins.jetbrains.com/plugin/12836-choose-runtime/versions)的手动下载链接。
下载后在pycharm插件界面本地添加插件添加choose runtime即可。

需要注意的是，这个方案的尝试中，我确实成功了。
但是也只是解决了pycharm中不能输入中文的问题。
光标不跟随问题仍不能解决。
并且按这个方案做完之后 pycharm 中 markdown 插件会出bug，直接失效。
这里写出来仅供参考。





## 版本信息
```
Distributor 		 Ubuntu 22.04 LTS  
Codename: 		 jammy  
架构: 			 x86_64  
ibus框架：		 IBus 1.5.26
ibus输入法：		 IBus 智能拼音 1.12.1
pycharm:		 community_11.0.15
```
## 参考链接

https://blog.csdn.net/m0_54032194/article/details/119081008






