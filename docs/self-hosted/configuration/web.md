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

- `addr` 指定 Web 服务器的监听地址，如果指定为空字符串，则表示监听所有地址（包含IPv4和IPv6）
- `http_port` 指定 Web 服务器的 HTTP 端口
- `https_port` 指定 Web 服务器的 HTTPS 端口

由于使用的是Docker部署，所以监听地址通常指定为空字符串。这里的端口修改后，我们也需要保证`docker-compose.yml`中对应端口也进行修改。

## 主域名

- `main_domain` 指定 CoNote 的主域名，比如 `example.com`，通常用于生成邮件地址、OAuth应用、API等场景
- `base_domains` 指定 CoNote 的备用域名，比如 `example.com`，通常用于生成邮件地址、OAuth应用、API等场景



