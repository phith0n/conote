---
title: 全局配置
sidebar_position: 20
description: Global configuration
---

CoNote的全局配置包含下面两个：

- `debug` boolean类型，指定是否开启调试模式。开启后，会输出更多的日志信息，推荐仅在开发环境中开启
- `secret_key` string类型，请指定一个随机字符串，作为系统密钥

:::danger

`secret_key` 用于系统所有签名和加密场景，一旦泄露或设置过于薄弱，将导致用户身份伪造等安全问题。

:::


