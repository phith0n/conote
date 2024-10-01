---
title: RMI日志
sidebar_position: 60
description: RMI logs
---

所有对你的域名以及其子域名的任何RMI请求，都会记录在RMI日志中：

![](@site/static/docs/rmilog_list.png)

点击“How to use RMI log”，可以查看相关用法。你RMI地址是：

```
rmi://<conote-addr>:1099/<your domain>/<custom data>
```

其中：

- `<conote-addr>` CoNote平台IP地址，或者是任何指向CoNote的域名
- `<your domain>` 你的任意一个专属域名或其任意子域名。CoNote使用其确认日志的所有者，必填项
- `<custom data>` 任意数据，不是必须选项

我们在测试JNDI等漏洞时，将你的rmi链接传入，如果能够收到RMI日志，说明目标存在JNDI注入漏洞。

<div className="comment_block">
  <p>虽然JNDI注入的利用受到Java版本的限制，但用CoNote中RMI或LDAP日志检测JNDI注入不受版本限制，Java 17仍然可以使用。</p>

  <p>JNDI注入限制版本关系：</p>

  ![](@site/static/docs/jndi_limit.png)
</div>

## 日志内容

在RMI日志列表中，你可以看到5列数据：

- **TIME**: 接收到RMI日志的时间
- **PATH DOMAIN**: RMI地址中的`<your domain>`
- **PATH VALUE**: RMI地址中的`<custom data>`
- **DECLARED IP**: RMI协议中客户端宣称的IP地址，一般是客户端的内网IP
- **IP**: 客户端IP地址

## References

JNDI版本限制图片来自于：[参考文档](https://m0d9.me/2020/07/16/JNDI%EF%BC%9AJNDI-RMI%20%E6%B3%A8%E5%85%A5%E5%8F%8A%E7%BB%95%E8%BF%87JDK%E9%AB%98%E7%89%88%E6%9C%AC%E9%99%90%E5%88%B6/)
