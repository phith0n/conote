---
title: XSS平台
sidebar_position: 120
description: XSS probe and report
---

在测试XSS漏洞时，我们需要从目标浏览器中读取一些信息，此时需要借助XSS模块。

![](@site/static/docs/xss_report.png)

## 创建XSS探针

在XSS Probe列表页面，点击“Add new”创建一个新的XSS探针，创建完毕后，点击右侧分享图标，可以看到js文件路径：

![](@site/static/docs/xss_share.png)

在存在XSS的页面插入该js，漏洞触发后，即可在这个XSS探针页面中查看到报告。

## XSS报告

每份XSS报告包含如下内容：

- 页面完整URL
- 用户IP地址
- 浏览器信息
- 时间
- Cookie
- Local Storage
- Session Storage
- 页面HTML源码

如果某一项没有数据，将不会显示。
