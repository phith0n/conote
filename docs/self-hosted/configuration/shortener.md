---
title: 短网址配置
sidebar_position: 60
description: URL shortener related configuration
---

完整的CoNote短网址配置如下：

```yaml
shortener:
  enable: true
  short_domain: "short.domain.tld"
  hashids_salt: "DEFAULT_SHORTENER_SALT"
```

网址缩短经常会被用于受长度限制的一些漏洞的利用中，比如XSS、SSRF等。

但并不是所有用户都需要这个功能，所以可以通过`enable`字段来控制是否启用。当`enable`为`false`时，剩余的配置项会被忽略。

- `short_domain` 字符串类型，指定网址缩短时使用的域名，比如`ab.cd`
- `hashids_salt` 字符串类型，用于生成短网址的唯一标识

:::info

`hashids_salt` 用于生成端网站的唯一标识，如果不希望该功能生成的URL被其他人遍历，这里请填写一个健壮的随机字符串。

:::

:::danger

一旦 `hashids_salt` 设置后，请勿随意修改，否则会导致已生成的短网址失效。

:::
