---
title: ACME设置
sidebar_position: 100
description: ACME related configuration
---

ACME（Automatic Certificate Management Environment）是 Let's Encrypt 等证书颁发机构提供的一种自动化证书管理协议。CoNote 在内部使用 ACME 协议来获取和管理 TLS 证书。

完整的CoNote ACME配置如下：

```yaml
acme:
  enable: true
  basedir: ./data/acme
```

- `enable` 布尔类型，指定是否开启ACME客户端，如果这里设置为`false`，那么CoNote将不会自动申请和更新TLS证书
- `basedir` 字符串类型，指定ACME客户端生成的证书等文件的存储目录

由于 CoNote 基于 Docker 部署，为了保证 Docker 容器销毁或迁移时不影响数据，最好将该目录指定为 `./data` 目录的子目录，比如`./data/acme`。
