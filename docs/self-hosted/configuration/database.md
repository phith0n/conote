---
title: 数据库配置
sidebar_position: 30
description: Database configuration
---

CoNote 使用 PostgreSQL 作为数据库，在配置文件中使用完整的 URL 形式来指定数据库连接信息，比如：

```yaml
database:
  database_url: postgres://postgres:postgres@db:5432/conote
```

在使用docker环境启动时，我们可以将数据库配置信息写入到环境变量中，比如：

```yaml filename="docker-compose.yml"
services:
  web:
    image: vulhub/conote2:latest
    ...
    environment:
      - POSTGRES_HOST=db
      - POSTGRES_PORT=5432
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=postgres
      - POSTGRES_DB=conote
    ...
```

在配置文件中，可以使用`${POSTGRES_HOST}`、`${POSTGRES_PORT}`、`${POSTGRES_USER}`、`${POSTGRES_PASSWORD}`、`${POSTGRES_DB}`等环境变量来引用环境变量中的值，比如：

```yaml
database:
  database_url: postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}
```

这样，即使数据库连接信息发生变化，也不需要频繁修改配置文件，只需要修改`docker-compose.yml`文件中的环境变量即可。
