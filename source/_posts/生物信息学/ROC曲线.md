---
title: ROC曲线
categories:
	- 生物信息学
	- ROC曲线
date: 2022-05-20
---

* [一、什么是ROC曲线](#一什么是roc曲线)
  * [1\.相关概念](#1相关概念)
  * [2\.ROC曲线](#2roc曲线)
  * [3\.AUC面积](#3auc面积)
* [二、ROC曲线如何绘制](#二roc曲线如何绘制)
  * [1\.算法介绍](#1算法介绍)
  * [2\.用R进行ROC曲线的绘制](#2用r进行roc曲线的绘制)
    * [1\.简单绘制ROC曲线](#1简单绘制roc曲线)
    * [2\.将两个ROC曲线绘制在一张图中，并添加标签](#2将两个roc曲线绘制在一张图中并添加标签)

# 一、什么是ROC曲线

ROC曲线实际上就是一种用于评价所建立的模型优劣性的二维图像

<br></br>

## 1.相关概念 

1.真阳性(TP)：实际为正类，模型预测为正类

2.假阳性(FP)：实际为负类，模型预测为正类

3.真阴性(TN)：实际为负类，模型预测为负类

4.假阴性(FN)：实际为正类，模型预测为负类

5.精确率： 真阳性 / (真阳性 + 假阳性) | 表示模型中预测的正类中实际为正类的比例，

6.召回率： 真阳性 / (真阳性 + 假阴性) | 与灵敏度相同

7.特异度： 真阴性 / (真阴性 + 假阳性) | 表示所有负类中被模型分对的比例，衡量了模型对负类的识别能力

8.灵敏度： 真阳性 / (真阳性 + 假阴性) | 表示所有正类中被模型分对的比例，衡量了模型对正类的识别能力

9.正确率： (真阳性 + 真阴性) / (真阳性 + 假阳性 + 真阴性 + 假阴性) | 表示模型预测正确的样本占总体的比例

10.预测概率：在模型对样本做出预测时，预测结果往往不是固定的，会呈现一个预测概率，即某样本在某一模型的预测下有p的概率为正类，1-p的概率为负类。最后模型会输出一个预测概率。

11.阈值：为了让模型得到准确的结果，可以设置一个阈值。例如，当某样本在模型预测概率大于 一个定值 时，我们认为这个样本为正类。这个值即阈值。 

## 2.ROC曲线

ROC曲线是以灵敏度与特异度为指标对某一模型作出评价的二维图像。

以 `1 - 特异度` 作为横坐标，也可以称为伪正类率(False positive rate， FPR)，表示模型对负类的识别能力，数值越小，模型对负类识别能力越好。

以  `灵敏度` 作为纵坐标 ， 也可以称为真正类率(True positive rate， TPR) ，表示模型对正类的识别能力，数值越大，模型对正类识别能力越好

例如下图中蓝线是某一模型的ROC曲线。


![image](https://user-images.githubusercontent.com/102901955/167638460-05012c00-69d3-4272-bfe0-4fee206c42a9.png)


红线的含义为 随机预测。即预测为正类与负类的概率为均为0.5左右，正负类判定取决于阈值。

而蓝线为某一模型的ROC曲线，表示当调整阈值使TPR(或FPR)为某一值时，TPR与FPR的关系符合曲线的函数关系。

举例来讲，在蓝色点处，表示在阈值设置为某一值时，TPR为0.9，而FPR为0.4。实际应用过程中，我们可以根据需求(更加需求TPR,还是FPR)来设置阈值。


## 3.AUC面积

AUC面积是指ROC曲线与 x = 1 与 x 轴 所围成区域的面积，即图中绿色部分。

![image](https://user-images.githubusercontent.com/102901955/167867291-c8deeddf-af02-4f42-bf52-8a7afddff16d.png)

AUC面积往往用于衡量一个模型的预测性的优劣，因为ROC曲线涉及阈值的选择，在一定情况下使用ROC曲线衡量不是很好比较。

一般地认为AUC面积越大，则模型的预测性越好。

# 二、ROC曲线如何绘制
<br></br>

## 1.算法介绍

这一部分是为了加深ROC曲线的理解，在用R绘制曲线过程中实际并不需要从0开发算法，有现成的包可以使用。

![image](https://img-blog.csdnimg.cn/2545fb9435984bc8b54e7ce92e92a398.gif#pic_center)

如图所示是一种ROC曲线的常用算法，先将预测概率按序排列。由上向下设置阈值，模型预测的正类数量会按梯度增加，依据这个规律计算处特异度与灵敏度，记录于内存之中，最后绘图。

## 2.用R进行ROC曲线的绘制

这里要介绍pROC包。一个专门用于绘制ROC曲线的模块。

其中有一个函数 `roc()` 可以用于计算ROC曲线各个阈值下的敏感度与特异度

=======数据格式======

![image](https://user-images.githubusercontent.com/102901955/167880563-cbc141ce-5d9d-403a-91a0-915bc8416601.png)

===================

即最后roc函数计算的数据格式要如上图所示

roc(v1, v2) 

v1 -训练集中实际正类还是负类的列向量

v2 -训练集中模型预测为正类的预测概率

### 1.简单绘制ROC曲线

```R
# 加载R包
library(pROC)
library(ggplot2)

# 读取数据
df = read.delim("https://www.bioladder.cn/shiny/zyp/bioladder2/demoData/ROC/demo.txt",# 这里读取了网络上的demo数据，将此处换成你自己电脑里的文件
                header = T    # 指定第一行是列名
)

# ROC计算
rocobj <- roc(df[,1], df[,2])

# 绘图
plot(rocobj, col = "red", legacy.axes = T, print.auc = T, print.thres = T)

"""
print.auc    -增加AUC面积
print.thres  -增加临界点
legacy.axes  -更改横坐标(以 1-敏感度 还是 敏感度 为横坐标)

"""

```
### 2.将两个ROC曲线绘制在一张图中，并添加标签

```R
# 读取数据及ROC计算同 ###1 步骤。 

# 绘图
plot(rocobj_1, col = "red", legacy.axes = T, print.thres = T)                                             
plot(rocobj_2, col = "blue", legacy.axes = T, print.thres = T, add = T)
legend("bottomright", legend = c("roc1 AUC-0.731", "roc2 AUC-0.612"), col = c("red", "blue"), lty = c(1, 1))  # 添加图例

"""
====
plot:
rocobj_1, rocobj_2  -表示通过roc函数所计算出来的数据集
add                 -表示添加曲线,添加该参数后不会覆盖原图像,而是添加新的曲线到图像上
====
legend:
"bottomright"       -设置标签所在位置
legend              -设置标签的名字, 可以通过手动添加AUC数字
lty                 -改变标签线的类型, 可以设置通过与plot图像一一对应.

"""


