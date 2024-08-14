---
title: Web文件服务器
sidebar_position: 80
description: Web file server
---

在漏洞测试中，我们经常会遇到需要下载一些临时数据，比如如下场景：

- JNDI注入利用时加载远程类
- Blind XXE加载远程DTD
- XSS构造恶意Web页面
- 利于`ClassPathXmlApplicationContext`加载恶意Spring配置文件

Web File模块就可以用于放置任意类型的Web文件：

![](@site/static/docs/webfile.png)

在Web File具有如下功能：

- 文件名（实际就是HTTP请求Path）
- 编写或上传文件内容
- 文件Content-Type
- HTTP返回状态码
- HTTP返回头
