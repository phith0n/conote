---
title: DNS日志
sidebar_position: 50
description: DNS logs
---

所有对你的域名以及其子域名的任何DNS请求，都会记录在DNS日志中。

![](@site/static/docs/dnslog_list.png)

支持的DNS请求类型包括但不限于如下类型：

- A
- AAAA
- CNAME
- TXT
- MX
- ...

值得注意的是，虽然DNS日志中有IP地址，但因为DNS查询方式是递归查询，该地址仅能表示距离CoNote服务器最近一次查询的服务器地址，并不能找到root cause在哪台服务器。
