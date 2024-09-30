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

在使用 docker compose 启动 CoNote 时，我们可以将数据库配置信息写入到环境变量中，比如：

```yaml title="docker-compose.yml"
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

这样，在配置文件中就可以使用 `${POSTGRES_HOST}`、`${POSTGRES_PORT}`、`${POSTGRES_USER}`、`${POSTGRES_PASSWORD}`、`${POSTGRES_DB}` 等环境变量来引用环境变量中的值，比如：

```yaml title="config.yaml"
database:
  database_url: postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}
```

此时，即使数据库连接信息发生变化，也不需要频繁修改配置文件，只需要修改`docker-compose.yml`文件中的环境变量即可。

:::info

值得注意的是，只有数据库连接信息这一个配置项**允许**使用环境变量，其他配置项中不会解析环境变量。

:::
