---
title: GeoIP2配置
sidebar_position: 120
description: GeoIP2 related configuration
---

GeoIP2 是 MaxMind 提供的一种 IP 地理信息数据库，CoNote 使用 GeoIP2 来确定 IP 地址的地理位置。

完整的CoNote GeoIP2配置如下：

```yaml
geoip2:
  filename: ./data/geoip2.mmdb
  key: YOUR_GEOIP2_KEY
```

## 数据库文件

GeoIP2 数据库是一个独立的二进制文件，这里通过`filename`指定文件的路径。

由于 CoNote 基于 Docker 部署，为了保证 Docker 容器销毁或迁移时不影响数据，最好将该文件放在 `./data` 目录下，比如`./data/geoip2.mmdb`。

## 下载数据库文件

第一次 CoNote 启动时，如果发现这个文件不存在，CoNote 会自动从 MaxMind 下载数据库文件，并保存到指定目录。[MaxMind GeoIP2 数据库文件](https://dev.maxmind.com/geoip/geolite2-free-geolocation-data)是支持免费下载的，但需要注册账号并获取到 License Key。

![](@site/static/docs/geoip2.png)

将该 key 填入到 CoNote 的配置文件中，CoNote 会自动下载数据库文件。

:::warning

如果启动CoNote时没有填写geoip2的key，或使用了错误的key，CoNote将无法正确获取所有IP地址的位置。容器内并没有内置、默认的GeoIP2数据库文件。

:::

## 数据库更新

CoNote 会定期检查数据库文件是否需要更新，如果需要更新，CoNote 会自动从 MaxMind 下载最新的数据库文件，并替换掉旧的数据库文件。
