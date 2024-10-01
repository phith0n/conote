---
title: 使用Docker安装
sidebar_position: 22
description: Install CoNote using Docker and Docker Compose
---

## 获取镜像

```bash
docker pull vulhub/conote:latest
```

## 运行容器

:::tip

在运行容器之前，请先创建config.yaml文件，并将其放置在当前目录下。关于配置文件的具体内容，请参考[配置文件](../configuration/introduce.md)。

:::

CoNote使用PostgreSQL作为数据库，因此推荐使用docker-compose.yml文件来运行CoNote与数据库容器，推荐配置如下：

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

使用docker compose命令运行容器：

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

## 访问CoNote

CoNote 运行后，可以通过**你的主域名**访问 CoNote。关于主域名、端口、https 证书等配置，请参考[配置文件](../configuration/introduce.md)。
