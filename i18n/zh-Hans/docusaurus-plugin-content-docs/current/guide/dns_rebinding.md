---
title: DNS Rebinding
sidebar_position: 100
description: DNS Rebinding
---

在测试一些漏洞时，我们需要用到DNS rebinding技巧。CoNote提供一个域名，在DNS请求时会依次解析到你填写的IP地址中：

![](@site/static/docs/dns_rebinding.png)

比如这里，在8秒内请求该域名，我们获得如下解析结果：

![](@site/static/docs/dig.png)

## 设置间隔时间

超过8秒后，DNS rebinding顺序将被重置，8秒后的DNS请求将再次返回第0个结果，在该页面还可以更新“DNS rotate interval”。
