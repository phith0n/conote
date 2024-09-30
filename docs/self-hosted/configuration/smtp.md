---
title: SMTP设置
sidebar_position: 70
description: SMTP related configuration
---

SMTP模块即可以记录收到的SMTP请求，也可以作为“匿名邮箱”或“临时邮箱”使用。

完整的CoNote SMTP配置如下：

```yaml
smtp:
  addr: ""
  port: 25
  tls_port: 587
  basedir: ./data/email
  email_domains:
    - example.domain.tld
```

## 监听地址与端口

- `addr` 字符串类型，指定 SMTP 服务监听的地址，如果指定为空字符串，则表示监听所有地址（包含IPv4和IPv6）
- `port` 整型，指定 SMTP 服务器的端口，通常为25
- `tls_port` 整型，指定 SMTP 服务器的TLS端口，通常为587

由于使用的是Docker部署，所以监听地址通常指定为空字符串。这里的端口修改后，我们也需要保证`docker-compose.yml`中对应端口也进行修改。

## 附件存储地址

- `basedir` 字符串类型，指定邮件存储的目录，每封新邮件都会以eml的格式保存在该目录下

由于 CoNote 基于 Docker 部署，为了保证 Docker 容器销毁或迁移时不影响数据，最好将该目录指定为 `./data` 目录的子目录，比如`./data/email`。

## 内置邮件域名

- `email_domains` 字符串数组，指定邮件发送的域名，比如 `example.domain.tld`

当用户使用“匿名邮箱”或“临时邮箱”模块时，需要生成随机邮件地址，这个 `email_domains` 就用于指定这些邮件地址的域名。

通常这部分域名，可以保持和 `web.base_domains` 中的域名一致，比如：

```yaml
web:
  ...
  base_domains:
    - example.com
    - example.org

smtp:
  ...
  email_domains:
    - example.com
    - example.org
```

这样，我们购买的域名，既可以作为Web的域名，也可以作为SMTP的域名，CoNote会在内部自动处理MX相关记录。

### 配置MX记录

如果你没有使用 `web.base_domains` 中的域名，而是使用其他没有绑定到 CoNote 中的域名，则需要手动配置MX记录，配置方法就是将这个域名的 MX 记录指向 CoNote 。
