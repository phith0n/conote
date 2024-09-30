---
title: Google登录
sidebar_position: 130
description: Google login related configuration
---

CoNote 支持使用账号密码登录或者 Google 登录，以方便用户快速登录。

完整的CoNote Google登录配置如下：

```yaml
google:
  enable: true
  client_id: YOUR_GOOGLE_CLIENT_ID
```

将`enable`设置为`true`，则开启 Google 登录。

:::info

虽然可以通过这个配置开启 Google 登录，但是仍需要用户在 CoNote 中拥有合法账号且其使用了 Google 邮箱。

:::

`client_id` 是 Google 登录的客户端 ID，可以在 Google Cloud Console 中创建，创建方法可以参考[Google 官方文档](https://support.google.com/cloud/answer/6158849)。
