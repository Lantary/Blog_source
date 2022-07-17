---
title: ubuntu系统下将matepad11作为副屏
categories:
	- 日常使用中的问题
date: 2022-07-16
---

### 问题描述

电脑需要一个第二屏幕，而买来的平板暂时用不到。所以想要将平板作为电脑的副屏使用。

### 解决方案

这里提供的解决方案是基于软件deskreen而实现。deskreen软件是一款通过游览器共享屏幕的软件。在电脑端部署一个虚拟的显示器，然后用deskreen网络共享这个虚拟屏幕就可以实现分屏。

1. deskreen下载安装
    
    [[此处下载]](link2)
    
    下载linux的deb包后，cd到下载目录
    ```
   sudo dpkg -i deb的名字.deb
   ```
    打开deskreen，需要保证你的平板和电脑在同一个wifi下，然后部署完虚拟屏幕后进行，下一步操作。
    
    ![p1][p1]
    
    如果是先进行虚拟屏幕部署，然后在打开deskreen，可能会因为deskreen开在虚拟屏幕而无法看到。


2. 虚拟屏幕部署

    > 需要注意： 此虚拟部署方案适用于带集成显卡的inter芯片。Nvidia GPU 请看参考链接

    下载[VDL Monitor](link1)到系统。ubuntu下打开终端，cd到你喜欢的文件夹。输入如下命令：

   ```
   git clone https://github.com/dianariyanto/virtual-display-linux.git
   
   cd virtual-display-linux
   
   sudo chmod 777 vdl-monitor
   ```
   
    确定你电脑能配置的清晰度。通过 `xrandr` 命令查询电脑支持的清晰度。更改 `virtual-display-linux` 文件夹下的 `vdl-monitor.conf` 中的清晰度。
 
   ```
    # config for screen 1
    screen1="1366x768"

    # config for screen 2
    #screen2="1366x768"
   ```
       
   
3. 屏幕链接

   更改完成后，用平板扫描deskreen的二维码进行链接。在电脑端允许后。

    ![p2][p2]
    
    点击整个屏幕分享。此时会出现第二屏幕的选项，点击第二屏幕即可完成部署。
    
    ![p3][p3]

### 版本信息

```
芯片          inter i5-7200U CPU @ 2.50GHz
系统          ubuntu 22.04
deskreen     deskreen_2.0.3_amd64 
VDL          v0.1-alpha
```
    
   
### 参考链接 

[[1] vnc, teamviewer, anydesk组件 实现方案](https://www.twblogs.net/a/5cb3844abd9eee48d788b399/?lang=zh-cn)

[[2] DESKREEN](https://deskreen.com/lang-zh_CN#features)

[[3] 虚拟屏幕部署方案](https://github.com/pavlobu/deskreen/discussions/86)

[[4] Nvidia GPU虚拟屏幕部署方案](https://github.com/dianariyanto/virtual-display-linux/issues/9#issuecomment-786389065)

[link1]: https://github.com/dianariyanto/virtual-display-linux
[link2]: https://deskreen.com/lang-zh_CN#page-top

[p1]: https://deskreen.com/img/steps/1.jpg
[p2]: https://deskreen.com/img/steps/3.jpg
[p3]: https://deskreen.com/img/steps/4.jpg