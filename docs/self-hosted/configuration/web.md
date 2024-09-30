---
title: Web配置
sidebar_position: 40
description: Web related configuration
---

完整的CoNote Web配置如下：

```yaml
web:
  addr: ""
  http_port: 80
  https_port: 443
  main_domain: "main.domain.tld"
  file_basedir: ./data/attachment
  token_valid_time: 2592000
  allow_register: false
  base_domains:
    - base.domain.tld
```

## 监听地址与端口

- `addr` 字符串类型，指定 Web 服务器的监听地址，如果指定为空字符串，则表示监听所有地址（包含IPv4和IPv6）
- `http_port` 整型，指定 Web 服务器的 HTTP 端口
- `https_port` 整型，指定 Web 服务器的 HTTPS 端口

由于使用的是Docker部署，所以监听地址通常指定为空字符串。这里的端口修改后，我们也需要保证`docker-compose.yml`中对应端口也进行修改。

## 文件存储

- `file_basedir` 字符串类型，指定存储Web相关附件的目录

由于 CoNote 基于 Docker 部署，为了保证 Docker 容器销毁或迁移时不影响数据，最好将该目录指定为 `./data` 目录的子目录，比如`./data/attachment`。

## 用户相关配置

- `token_valid_time` 整型，指定用户登录后的有效时间，单位为秒
- `allow_register` 布尔类型，指定是否允许用户注册

## 域名

- `main_domain` 字符串类型，指定 CoNote 的主域名，主域名是外部用于访问 CoNote 控制台的域名，比如 `note.leavesongs.com`
- `base_domains` 字符串列表，指定用户可以使用的“根域名”。用户接收HTTP、DNS等各种请求时，都会使用这些域名所生成的子域名。（当然，用户也可以绑定自己的域名）

### 购买域名并配置NS记录

首先，随便准备两个域名同时指向当前服务器，比如`ns1.leavesongs.com`和`ns2.leavesongs.com`。然后在域名销售平台购买域名：

![](@site/static/docs/buy_domain.png)

然后将该域名的NS记录设置为这两个指向当前服务器的域名，比如：

![](@site/static/docs/ns_records.png)

配置完成后，这个域名就可以作为`base_domains`中的域名使用。

:::tip

有关NS域名的相关配置，请参考[DNS配置](./dns.md)。

:::
