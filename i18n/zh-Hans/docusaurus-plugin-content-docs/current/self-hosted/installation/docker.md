---
title: 使用Docker安装
sidebar_position: 22
description: Install CoNote using Docker and Docker Compose
---

## 自动生成 Docker 环境

:::info

使用[**这个小助手**](../generate.mdx)可以辅助生成 docker-compose.yaml 和 config.yaml 配置文件，下载后解压放在任意目录下，直接执行`docker compose up -d`即可启动CoNote服务。

:::

生成并下载配置文件后，使用 docker compose 命令运行容器：

```bash
docker compose up -d
```

在第一次运行容器时，CoNote会自动尝试连接数据库，并初始化表和数据。

上述环境运行后，当前目录会存在如下文件：

```
.
├── config.yaml
├── data
├── docker-compose.yml
└── postgres
```

其中，`config.yaml` 是 CoNote 的配置文件； `data` 是 CoNote 的数据目录，其中包含用户上传的文件、接收到的邮件、https证书等； `postgres` 是 PostgreSQL 的数据目录。

CoNote 运行后，可以通过**你的主域名**访问 CoNote。关于主域名、端口、https 证书等配置，请参考[配置文件](../configuration/introduce.md)。

## 手工创建 Docker 环境

当然，我们也可以手工创建配置文件。CoNote 的配置文件包含下面两个：

- config.yaml
- docker-compose.yml

config.yaml 包含所有 CoNote 相关的配置，具体内容请参考[配置文件](../configuration/introduce.md)。

docker-compose.yml 文件用于配置 Docker 容器，推荐内容如下：

```yaml
services:
  web:
    image: vulhub/conote2:latest
    ports:
      - "80:80"
      - "443:443"
      - "25:25"
      - "587:587"
      - "53:53/tcp"
      - "53:53/udp"
      - "1099:1099"
      - "389:389"
      - "636:636"
    volumes:
      - ./config.yaml:/opt/conote2/config.yaml
      - ./data:/opt/conote2/data
    restart: unless-stopped
    environment:
      - POSTGRES_HOST=db
      - POSTGRES_PORT=5432
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=conote
    networks:
      - conote
  db:
    image: postgres:16-alpine
    volumes:
      - ./postgres:/var/lib/postgresql/data
    ports:
      - "127.0.0.1:5432:5432"
    restart: unless-stopped
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=conote
    networks:
      - conote

networks:
  conote:
```
