---
title: 用户创建
sidebar_position: 30
description: User creation
---

CoNote 暂时没有提供管理员相关功能，在初始化完成后，需要通过命令行来创建用户。

创建一个用户：

```bash
docker compose exec web ./conote2 createuser --email admin@example.org --password admin888 --username admin
```

如果用户邮箱是 Google 邮箱，则可以省略 `--password` 和 `--username` 参数:

```bash
docker compose exec web ./conote2 createuser --email example@gmail.com
```

这样用户可以通过 Google 登录。

:::info

如何启用 Google 登录，请参考[Google 登录](../configuration/google.md)相关文档。

:::
