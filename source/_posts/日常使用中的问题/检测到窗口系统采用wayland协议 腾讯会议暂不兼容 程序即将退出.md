---
title: 检测到窗口系统采用wayland协议 腾讯会议暂不兼容 程序即将退出
categories:
	- 日常使用中的问题
---

## 问题描述及解决办法

ubuntu系统中下载了腾讯会议官方版本的deb包，安装后无法打开。弹窗警告 “检测到窗口系统采用wayland协议 腾讯会议暂不兼容 程序即将退出”

```shell
sudo vim /etc/gdm3/custom.conf
#WaylandEnable=false 的注释井号去掉
sudo service gdm3 restart
```


## 版本信息

Distributor ID: Ubuntu  
Description: Ubuntu 22.04 LTS  
Release: 22.04  
Codename: jammy  
架构: x86_64  
腾讯会议: linux 3.8.0.2(2022-06-07)

## 参考链接

https://blog.csdn.net/m0_52640673/article/details/124911402






