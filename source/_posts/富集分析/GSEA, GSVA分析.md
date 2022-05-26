---
title: GSEA,GSVA分析
categories:
	- 生物信息学
	- 富集分析
---
一种富集分析

# 一、什么是GSEA
<br></br>
## 1.GSEA(基因集富集分析)

GSEA也是一种富集分析方式，与GO和KEGG富集分析相似却也有不同。一般的富集分析(GO与KEGG富集分析)更加关注少数几个显著变化的基因，在分析中往往要确定一个阈值，去除显著性或富集程度在阈值下基因。只选取头部的几个基因。这样的分析方法有可能会将基因变化量不大但又有重要生物学意义的一些基因忽略。而GSEA 在分析过程中不需要设置阈值，会将差异分析结果按log(FC)排序。关注的是基因表达量相近的基因数量。GSEA分析方法，可以有效的保留一般富集分析在设置阈值时去除的一些生物信息。GSEA是用一个预先定义的基因集中的基因来评估在与表型相关度排序的基因表中的分布趋势，从而判断其对表型的贡献。

## 2.GSEA结果图解析

![image](https://user-images.githubusercontent.com/102901955/168717081-1d444516-10c4-4638-a01e-a9889efd3966.png)

以上图为例，GSEA 的结果图一般分为三个部分

1.第一部分: Enrichment Score, 也就是主图像的纵轴, 表示基因的富集程度, 计算方式是每当有一个在通路中的基因(黑线)则ES累加一个值, 每当有一个不在通路中的基因(非黑线部分)则ES减一个值, 最后做出曲线. 即在通路中的基因相邻越近, 曲线"斜率"越大, 基因越分散, 曲线"斜率"越小. 通常会显出一个山坡图, 若山顶为于红色区域, 说明GSEA结果为该通路上调表达. 反之则为下调表达. 

2.第二部分: 横坐标, 红蓝条表示的是输入的基因集, 红色部分表示差异分析中log(FC)为正, 蓝色部分表示差异分析中log(FC)为负. 黑线表示与选取的通路相关的基因, 本例中黑线即表示CHRXP11 通路相关的基因. 

3.第三部分: Ranked list metric 表示的也是差异分析中不同基因log(FC)的量, 将横坐标中的红蓝图量化表达出来. 

## 3.GSEA R语言实现

1.数据格式

![image](https://user-images.githubusercontent.com/102901955/169223848-ed0e5293-f179-4cdf-a288-37046819a6c5.png)

需要一个键名为基因ENTREZID, 键值为logFC的字典格式向量, K可以用下面代码构造字典, 其中df_all的logFC列为 差异分析后的logFC值, ENTREZID列为对应基因的ENTREZID编号
```R
gene_fc <- df_all$logFC                                  # 构造字典向量
names(gene_fc) <- df_all$ENTREZID                        # 构造字典向量
```

2.代码
```R
# 加载R包
library(enrichplot)      # 用于画图
library(clusterProfiler) # GSEA分析

# 导入文件
df = read.csv("路径")

# GAEA
df_all <- df_all[order(df_all$logFC, decreasing = T), ]  # 数据按logFC排列
gene_fc <- df_all$logFC                                  # 构造字典向量
names(gene_fc) <- df_all$ENTREZID                        # 构造字典向量
KEGG <- gseKEGG(gene_fc, organism = "mmu")               # 人类样本organism参数为hsa 详情见http://www.genome.jp/kegg/catalog/org_list.html

# 绘图
gseaplot2(
  KEGG,                           # gseaResult object，即GSEA结果
  "mmu00830",                     # 富集的ID编号，选择表示的通路
  title = "Retinol metabolism",   # 标题
  color = "green",                # GSEA线条颜色
  base_size = 11,                 # 基础字体大小
  rel_heights = c(1.5, 0.5, 1),   # 副图的相对高度
  subplots = 1:3,                 # 要显示哪些副图 如subplots=c(1,3) -只要第一和第三个图，subplots=1 -只要第一个图
  pvalue_table = FALSE,           # 是否添加 pvalue table
  ES_geom = "line"                # running enrichment score用线还是用点ES_geom = "dot"
)

```


<br></br>
# 二、什么是GSVA
<br></br>

## 1.GSVA(基因集变异分析)

GSVA 是一种基因富集分析算法. 输入数据是表达矩阵, 与一般的富集分析不同, GSVA不需要对样品进行分组, 它可以先进行通路的富集, 形成一个以通路为行名, 样品为列名的表达矩阵. 是一种非参数的无监督分析方法, 主要用来评估芯片和转录组的基因集富集结果. 主要是通过将基因在不同样品间的表达量矩阵转化成基因集在样品间的表达量矩阵, 从而来评估不同的代谢通路在不同样品间是否富集. 

## 2.GSVA结果解释

GSVA分析的结果是一个表达矩阵, 常见的结果可视化为制作热图, 热图的含义这里不做赘述. 

## 3.GSVA R语言实现

1.导入的数据结构

<figure class = "half">
    <img src = "https://user-images.githubusercontent.com/102901955/169063653-e5c0315d-0296-4a79-bfee-af60834bf9b6.png">
    <img src = "https://user-images.githubusercontent.com/102901955/169064832-f85b88b0-58dc-46fe-bd1e-43563ccf7357.png">
</figure>

表达矩阵: 导入的数据格式如上图所示, 行名为样本编号, 列名为Gene Symbol ID, 单元格内值为log2化的表达量. 原始数据可以在GEO数据库中找到.
基因集:   导入的数据如下图所示, 格式为gmt, 可以在[MSigdb](https://www.gsea-msigdb.org/gsea/msigdb/genesets.jsp)上找到常用的基因集, 也可以自己制作.

2.代码

```R
# 加载R包
library(GSVA)            # 用于GSVA分析
library(GSEABase)        # 用于读取文件
library(pheatmap)        # 制作热图

# 文件读取
setwd("工作路径")                                   # 设置工作路径
keggSet = getGmt("基因集文件路径")                  # 读取基因集文件
expmatrix_data = read.table(                       # 读取表达矩阵
  "表达矩阵路径", 
  header = TRUE,                                         
)
```
如果格式不对, 自行调整
```R
# GSVA分析
gsva_data <- gsva(
  expr = as.matrix(exp_new),         # 输入表达矩阵
  gset.idx.list = keggSet,           # 输入基因集
  method = "gsva",                   # 选择算法
  kcdf = "none"                      # 选择CDF计算模型,正态，高斯还是泊松
)
```
GSVA分析的算法见参考连接, ?gsva可以查看更多参数, 一般来说log2化的矩阵计算模型选用正态, 没有进行log2化的选泊松
```R
# 绘制热图
pheatmap(
  gsva_data,
  show_colnames = T,
  show_rownames = T,
  kmeans_k = NA
)
```





##

# 参考连接
[GSEA R绘图 代码](https://zhuanlan.zhihu.com/p/358168557)

[GSVA算法介绍](https://zhuanlan.zhihu.com/p/355879724)


