---
title: 管理CoNote服务
sidebar_position: 25
description: Manage CoNote service
---

## 重启CoNote服务

```bash
docker compose restart
```

## 停止CoNote服务

```bash
docker compose stop
```

完全停止CoNote服务并删除容器、网络等：

```bash
docker compose down -v
```

此时，所有CoNote相关的容器、网络等都会被删除。但是由于数据文件默认存储在当前目录下，所以数据不会丢失。重新执行`docker-compose up -d`即可重新启动CoNote服务。

## 迁移CoNote数据

由于使用Docker管理，迁移服务非常简单，只需要将包含`docker-compose.yml`文件的目录完整复制到其他服务器即可。

在新服务器上重新运行CoNote服务：

```bash
docker compose up -d
```
