---
title: DNS配置
sidebar_position: 50
description: DNS related configuration
---

完整的CoNote DNS配置如下：

```yaml
dns:
  addr: ""
  port: 53
  external_ip: 1.2.3.4
  ns1_domain: ns1.domain.tld
  ns2_domain: ns2.domain.tld
  rebinding_domain: rebinding.domain.tld
```

## 监听地址与端口

- `addr` 字符串类型，指定 DNS 服务器的监听地址，如果指定为空字符串，则表示监听所有地址（包含IPv4和IPv6）
- `port` 整型，指定 DNS 服务器的监听端口，通常为53

由于使用的是Docker部署，所以监听地址通常指定为空字符串。这里的端口修改后，我们也需要保证`docker-compose.yml`中对应端口也进行修改。

## 外部IP

- `external_ip` 字符串类型，请设置为当前服务器的外网IP地址

## NS域名

- `ns1_domain` 字符串类型，指定 DNS 服务器的NS记录的第一个域名，比如`ns1.leavesongs.com`
- `ns2_domain` 字符串类型，指定 DNS 服务器的NS记录的第二个域名，比如`ns2.leavesongs.com`

这两个域名都需要指向当前服务器。在[Web配置](./web.md)中，我们也会用到这两个域名。

## 重绑定域名

- `rebinding_domain` 字符串类型，指定测试 DNS 重绑定漏洞时使用的域名

这个域名请设置为`base_domains`中的一个域名的子域名，比如：

```yaml
web:
  ...
  base_domains:
    - example.com

dns:
  ...
  rebinding_domain: r.example.com
```
