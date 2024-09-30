---
title: LDAP设置
sidebar_position: 90
description: LDAP related configuration
---

完整的CoNote LDAP配置如下：

```yaml
ldap:
  addr: ""
  port: 389
  tls_port: 636
```

- `addr` 字符串类型，指定 LDAP 服务监听的地址，如果指定为空字符串，则表示监听所有地址（包含IPv4和IPv6）
- `port` 整型，指定 LDAP 服务器的端口，通常为389
- `tls_port` 整型，指定 LDAP 服务器的TLS端口，通常为636

由于使用的是Docker部署，所以监听地址通常指定为空字符串。这里的端口修改后，我们也需要保证`docker-compose.yml`中对应端口也进行修改。
