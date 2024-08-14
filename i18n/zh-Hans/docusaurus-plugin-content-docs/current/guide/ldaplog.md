---
title: LDAP日志
sidebar_position: 70
description: LDAP logs
---

所有对你的域名以及其子域名的任何LDAP请求，都会记录在LDAP日志中：

![](@site/static/docs/ldaplog_list.png)

点击“How to use LDAP log”，可以查看相关用法。你LDAP地址是：

```
ldap://45.32.43.49:389/<your domain>/<custom data>
```

其中：

- `<conote-addr>` CoNote平台IP地址，或者是任何指向CoNote的域名
- `<your domain>` 你的任意一个专属域名或其任意子域名。CoNote使用其确认日志的所有者，必填项
- `<custom data>` 任意数据，不是必须选项

与[RMI日志](rmilog.md)类似，我们在测试JNDI等漏洞时，将你的LDAP链接传入，如果能够收到LDAP日志，说明目标存在JNDI注入漏洞。

> 暂时只支持LDAP不支持LDAPs协议，等待后续支持。

## 日志内容

在LDAP日志列表中，你可以看到6列数据：

- **TIME**: 接收到LDAP日志的时间
- **PATH DOMAIN**: LDAP地址中的`<your domain>`
- **PATH VALUE**: LDAP地址中的`<custom data>`
- **SEARCH DN**: LDAP协议中认证部分的用户名，在JNDI注入场景为空
- **PASSWORD**: LDAP协议中认证部分的密码
- **IP**: 客户端IP地址
