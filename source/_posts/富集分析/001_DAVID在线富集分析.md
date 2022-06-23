---
title: DAVID富集分析(一)
categories:
	- 生物信息学
	- 富集分析
---
转自https://blog.csdn.net/xiaobai1_1/article/details/103596474

原帖所用的是旧版的DAVID 因为各种原因，我用原帖的基因编号进行分析并没能得到同样的结果，故操作步骤与原帖相似，但重新选取了分析的基因。在一般的富集分析中被分析的基因往往来自于某一或一些列实验中差异分析的结果。

# 1.使用DAVID 进行 GO/ KEGG 富集分析

  a.打开DAVID官网：https://david.ncifcrf.gov/
  
  b.点击上侧功能菜单：shortcut to DAVID Tools 进入Function Annotation
  
  c.进入到如下的页面中，页面中的大红框中就是进行分析所用的主要操作区域。进入分析页面后，通过如下三步即可完成分析：
提交基因列表 --> 选定提交列表类型 --> 开始分析

  `用本文件夹下 用于练手的基因文件 可跳过d步骤，e步骤中选择数据类型为ENSEMBL_TRANSCRIPT_ID`

  d.在 “Enter Gene List” 中上传基因列表，格式是每行一个基因。按照 DAVID 的要求，总的基因个数不得超过 3000 个。我们这里去GO数据库以glyoxylate cycle为关键词对搜索出的蛋白进行分析。（以该循环内的蛋白为例）选中所需的蛋白（全部）点击Download，选择bioentity_internal_id 项，实际就是蛋白的UniProtAccession编号。
  
  这一步是为了获取用于分析的原数据，也可以使用本文档的 000_差异分析 中获得的蛋白，ENSEMBL_TRANSCRIPT_ID 数据进行富集分析
  
  ![image](https://user-images.githubusercontent.com/102901955/166140079-c8902b77-a27e-432c-98cd-464a71edc6d3.png)
  
  然后通过https://biodbnet-abcc.ncifcrf.gov/db/db2db.php （一个基因格式转换的工具网站） 进行ID转换，input选择UniProtAccession， output选择AffyID，后将d步骤的UniProtAccession编号复制入转换框中进行转换
  
  ![image](https://user-images.githubusercontent.com/102901955/166141328-e64b162a-fa97-48a8-ae69-7ec69e0dd4a4.png)

  
  结果如下图
  
  ![image](https://user-images.githubusercontent.com/102901955/166141337-a3df761f-ae5c-460f-a623-f2e1a5829b9b.png)

  
  这种转换可能会产生缺项。
 
  
  e.“Select Identifier” 中选择上传的基因类型，因为我们上传的是AffyID，所以在下拉菜单中选择 “AFFYMETRIX_3PRIME_IVT_ID”。
  
  f.在 “List Type” 中有两个单选框，我们统一选择 “Gene List” 这一项。
  
  g.点击 “Submit List” 即可
  
  ![image](https://user-images.githubusercontent.com/102901955/166141385-45260d50-3960-47da-b02d-170dd9834381.png)
  
  h.提交基因列表之后，经过几秒钟的等待，如果分析顺利，就会弹出一个提示：Please note that multiple species have been detected in your gene list. 
    这句话的意思就是在我们提交的基因列表中检测到多个物种，需要我们选择相应的物种。
    点击弹出框中的 “确定”，然后在 “List” 中的选择相应物种，于本次分析使用的是人类细胞，
    故这里我们选择 “Homo sapiens”，（读者可根据自己研究物种的类型进行选择）并点击下方的 “Select Species” 即可。

   
  i.在功能富集分析的结果中有多个折叠栏，其中 Gene_Ontology 这一折叠栏中有有三个栏目：GOTERM_BP_FAT、GOTERM_CC_FAT、GOTERM_MF_FAT 就是我们想要的 GO 功能富集分析结果。
    而 Pathways 里面有一个 KEGG_PATHWAY 就是我们要的结果。找到 BP、CC、MF 和 KEGG 对应的详细结果， 点击每个栏目后面的 “Chart” 即可。
   ![20191218161843663](https://user-images.githubusercontent.com/102901955/166135146-40de1cb7-b8d7-4201-af5b-211f8ab3346b.png)
  
  j.点击 “Chart” 之后，即可出现如下图所示的结果，这里面有几列数据分别是：Category、Term、RT、Genes、Count、%、P-Value 和 Benjamini。
    这几列中我们比较关心的是：Term（GO语义）、P-Value（P值）、Count（基因数）、%（基因比例）点击红框中的 Download File 即可。
    打开一个新的网页，新打开的网页就是分析结果的文本文件，可以下载或者导入到作图软件中进行后续的操作。

  ![image](https://user-images.githubusercontent.com/102901955/166141475-d371c498-c404-4bad-ab8c-004398b9b026.png)






    


