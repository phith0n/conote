---
title: Web日志
sidebar_position: 40
description: Web logs
---

所有对你的域名以及其子域名的任何HTTP请求，都会记录在Web日志中。

![](@site/static/docs/weblog_list.png)

> 用户可以在个人设置里选择是否忽略“Web File”模块相关日志，如果忽略，对于这部分路径的请求将不会被记录。

## HTTP详情

点击“Detail”按钮可以查看某次请求的详情，其中包含：

- 请求方法（Method）
- 请求完整路径
- 所有HTTP Headers
- 请求Body
- 请求方IP地址（支持IPv4和IPV6）
- 请求方物理地址（根据[MaxMind GeoIP2](https://dev.maxmind.com/geoip)识别）
- 请求时间

![](@site/static/docs/http_detail.png)

点击“Download”可下载请求原始Body。

## Body编码与解码

默认情况下，因为请求Body可能存在非ascii字符，如中文、二进制文件等，这类信息中的非ascii字符将以`.`显示。

点击Decode body by中的按钮，可以对Body进行解码，可选择的解码方式有：

- **Raw**：显示原始Body
- **Unicode**：显示UTF-8后的内容（比如中文字符）
- **URL**：显示URL解码后的内容

使用Unicode解码后的Body：

![](@site/static/docs/unicode_body.png)
