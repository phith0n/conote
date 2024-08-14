---
title: 临时邮箱
sidebar_position: 110
description: Disposable Email
---

CoNote提供邮箱模块，用户可以生成随机的临时邮箱，也可以绑定自己的域名作为域名邮箱：

![](@site/static/docs/email.png)

## 生成临时邮箱

点击右侧Email Domains中的域名即可生成临时邮箱，包括自定义域名邮箱在内每个用户最多拥有20个邮箱。

## 域名邮箱

你可以绑定自己的域名作为域名邮箱。此时分为两种情况：

1. 你的域名已经绑定到CoNote作为专属域名使用（NS记录指向CoNote）
2. 你的域名没有绑定到CoNote

第一种情况，你无需做任何事情，直接在下方添加邮箱即可，CoNote会自定帮你处理MX记录。

第二种情况，你需要在域名DNS解析商处，增加一个MX记录指向`note.leavesongs.com`：

![](@site/static/docs/mx.png)

等解析记录生效后，在Email页面添加该域名后缀的邮箱地址即可。
