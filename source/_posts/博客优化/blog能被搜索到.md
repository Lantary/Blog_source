---
title: hexo框架下的博客提交至google搜索
categories:
	- 博客优化
date: 2022-07-10
---

### 博客优化内容

对于刚建立的博客来说，谷歌往往不能或者不会收录你的博客，为了使自己的博客可以被谷歌所检索到。我们需要主动向谷歌提供网址信息。

### 优化方案

谷歌提供了如何向谷歌提交搜索的方法，同样bing，搜狗，百度等搜索引擎也有相同的提交方案。
如果你想你的博客被全网搜索到，那么你需要在主流的搜索引擎上分别提交你的网址。要注意的是百度的提交原理跟其他搜索引擎有所不同。这篇博客只以谷歌搜索为例子。以下操作均在 [[Google Search Console]][link1] 中完成。

#### 1.验证网站所属

进入 [[Google Search Console]][link1] 后会显示

![piture_1][p1]

输入你博客的地址后点击继续。

![piture_2][p2]

选择验证网站所有权信息的方式。这里需要注意如果你的bolg是以hexo框架搭建的。 那么最好不要选择第一种 `HTML文件验证` 的方式。 因为hexo会自动编译你下载的HTML文件，使其失效，若想要用这种验证方式，那么需要在hexo编译完后，再添加HTML文件。 即在 `hexo g` 后，再添加HTML文件。且你每一次部署都需要如此操作十分麻烦。故不推荐。

这里用第二种方式 `HTML标记` 进行验证。 复制content中的内容到主题中的配置文件 `_config.yml` 。 在属性 `google_site_verification:` 后添加content后的内容

![piture_3][p3]

最后通过验证如图所示。

![piture_4][p4]

#### 2.添加sitemap文件到博客

向博客中添加站点地图的方式有很多。这里推荐一种用插件实现的方案。 首先要在你的博客根目录下下载插件。
```
npm install hexo-generator-sitemap --save
```
插件安装完成后，在public中文件夹中会生成一个 `sitemap.xml`，如果没有请重新编译一下 `hexo g` 再进行检查。 同时修改博客根目录下的站点配置文件 `_config.yml` 中的 url 属性，将你的主页网站输入到url中。

```
# URL
## Set your site url here. For example, if you use GitHub Page, set url as 'https://username.github.io/project'
url: https://lantary.github.io/
permalink: :year/:month/:day/:title/
permalink_defaults:
pretty_urls:
  trailing_index: true # Set to false to remove trailing 'index.html' from permalinks
  trailing_html: true # Set to false to remove trailing '.html' from permalinks
```
重新编译部署 `hexo g -d`。在谷歌站点地图中输入sitemap.xml后提交即可。

![piture_5][p5]

#### 3.其他网站索引添加

其他网站添加索引的方式与谷歌搜索类似，如果是bing则可以直接使用[[Google Search Console]][link1]的数据

### 版本信息
```
博客框架		hexo-cli_4.3.0
主题		next_7.8.0
网站挂载于	github
```



	

### 参考链接

[[1] 解决验证问题](https://javahikers.github.io/2019/06/16/personal-blog-being-included-in-google/)

[[2] 提交sitemap](https://zhuanlan.zhihu.com/p/100922816)


[link1]: https://search.google.com/search-console/about

[p1]: https://raw.githubusercontent.com/Lantary/Private_warehouses/main/hexo%E6%A1%86%E6%9E%B6%E4%B8%8B%E7%9A%84%E5%8D%9A%E5%AE%A2%E6%8F%90%E4%BA%A4%E8%87%B3google%E6%90%9C%E7%B4%A2/p1.png
[p2]: https://github.com/Lantary/Private_warehouses/blob/main/hexo%E6%A1%86%E6%9E%B6%E4%B8%8B%E7%9A%84%E5%8D%9A%E5%AE%A2%E6%8F%90%E4%BA%A4%E8%87%B3google%E6%90%9C%E7%B4%A2/p2.png?raw=true
[p3]: https://raw.githubusercontent.com/Lantary/Private_warehouses/main/hexo%E6%A1%86%E6%9E%B6%E4%B8%8B%E7%9A%84%E5%8D%9A%E5%AE%A2%E6%8F%90%E4%BA%A4%E8%87%B3google%E6%90%9C%E7%B4%A2/p3.png
[p4]: https://raw.githubusercontent.com/Lantary/Private_warehouses/main/hexo%E6%A1%86%E6%9E%B6%E4%B8%8B%E7%9A%84%E5%8D%9A%E5%AE%A2%E6%8F%90%E4%BA%A4%E8%87%B3google%E6%90%9C%E7%B4%A2/p4.png
[p5]: https://github.com/Lantary/Private_warehouses/blob/main/hexo%E6%A1%86%E6%9E%B6%E4%B8%8B%E7%9A%84%E5%8D%9A%E5%AE%A2%E6%8F%90%E4%BA%A4%E8%87%B3google%E6%90%9C%E7%B4%A2/p5.png?raw=true


