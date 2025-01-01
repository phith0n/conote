---
title: FTP设置
sidebar_position: 95
description: FTP related configuration
---

当前 CoNote 具有FTP服务，但是并没有FTP日志模块，FTP服务仅用于文件下载。我们在[Web文件服务器](../../guide/webfile.md)中，可以找到每个文件的FTP链接。

完整的CoNote FTP配置如下：

```yaml
ftp:
  addr: ""
  port: 21
  data_port_range: [50010, 50030]
```

- `addr` 字符串类型，指定 FTP 服务监听的地址，如果指定为空字符串，则表示监听所有地址（包含IPv4和IPv6）
- `port` 整型，指定 FTP 服务器的端口，通常为21
- `data_port_range` 数组类型，指定 FTP 数据传输的端口范围，比如`[50010, 50030]`

由于使用的是Docker部署，所以监听地址通常指定为空字符串。这里的端口修改后，我们也需要保证`docker-compose.yml`中对应端口也进行修改。

:::info

CoNote FTP服务默认使用被动模式，所以需要配置一个端口范围，CoNote会随机在端口范围中选择一个端口进行数据传输。

:::
