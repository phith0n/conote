---
title: RMI设置
sidebar_position: 80
description: RMI related configuration
---

完整的CoNote RMI配置如下：

```yaml
rmi:
  addr: ""
  port: 1099
```

- `addr` 字符串类型，指定 RMI 服务监听的地址，如果指定为空字符串，则表示监听所有地址（包含IPv4和IPv6）
- `port` 整型，指定 RMI 服务器的端口

由于使用的是Docker部署，所以监听地址通常指定为空字符串。这里的端口修改后，我们也需要保证`docker-compose.yml`中对应端口也进行修改。
