---
title: 个人域名
sidebar_position: 3
description: Generate or bind domains
---

首次登录时，你需要生成或绑定至少一个个人专属域名，才能开始使用大部分CoNote功能。

## 生成个人域名

在首页可以看到你个人的所有“专属域名”：

![](@site/static/docs/dashboard.png)

点击右侧“Add new”按钮添加新的域名，选择一个域名后缀，并点击“Save“：

![](@site/static/docs/generate_domain.png)

CoNote会为你生成一个该后缀的随机子域名。包括自定义域名，每个用户可以最多拥有6个域名。

<div className="comment_block">
  为防止域名被WAF、HIDS等安全设备拦截，官方主域名可能会不定时变动，请不要依赖该域名做长期服务。
</div>

## 自定义域名

由于官方域名可能会发生变化导致你的专属域名失效，你可以购买自己的顶级域名并绑定到CoNote，将该域名作为你的专属域名使用。

在任意域名销售平台购买顶级域名：

![](@site/static/docs/buy_domain.png)

购买域名后，将域名的NS记录设置为：

- `ns1.leavesongs.com`
- `ns2.leavesongs.com`

![](@site/static/docs/ns_records.png)

等待一段时间后，使用`dig`查看域名的NS记录是否为CoNote：

```shell
dig -t NS your.domain.tld
```

![](@site/static/docs/ns_dig.png)

如果记录已经生效，回到CoNote中，添加自定义域名即可：

![](@site/static/docs/bind_domain.png)
