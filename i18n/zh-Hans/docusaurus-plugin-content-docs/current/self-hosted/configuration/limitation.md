---
title: 用户权限与限制
sidebar_position: 110
description: User limitation related configuration
---

由于 CoNote 是多用户系统，我们可以对每个用户允许使用的最大资源进行限制，以防止某些用户占用过多资源。

现阶段支持的限制如下：

- `domain` 整型，指定用户可以绑定或生成的域名数量
- `email_domain` 整型，指定用户可以绑定的邮箱域名数量
- `email_box` 整型，指定用户可以创建的邮箱数量

完整的CoNote限制配置如下：

```yaml
limitation:
  domain: 6
  email_domain: 5
  email_box: 20
```
