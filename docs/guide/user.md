---
title: 登录
sidebar_position: 20
description: User login
---

所有用户管理功能均需要登录后使用：

![](@site/static/docs/login.png)

## 注册（未开放）

如果注册开放，在登录页面下侧会看到“注册”链接，点击后跳转到注册页面：

![](@site/static/docs/register.png)

如果注册没有开放，将会看到错误信息：

![](@site/static/docs/register_close.png)

## 登录

你可以使用如下三种登录方式：

- 账号密码登录
- Google登录
- Govuln登录

如果你在CoNote中账户使用的邮箱是Google邮箱，将可以使用Google登录，这是最方便的登录方式，无需保存任何密码。

<div className="comment_block">
  值得注意的是，CoNote虽然支持第三方登录，但并不代表只要拥有Google账号或Govuln账号即可登录CoNote。只有在CoNote拥有账号才能登录CoNote。
</div>

### Govuln绑定

[Govuln](https://govuln.com)是『代码审计知识星球』官方网站，星球用户可以在[用户中心](https://govuln.com/user/profile/email/)绑定你的邮箱。如果该邮箱与CoNote平台账号的邮箱相同，即可使用Govuln登录。

### CoNote 1.0 账号迁移

老版本CoNote账号已全部迁移到CoNote 2.0中，但老版本账号密码无法直接在CoNote 2.0中使用。

此时，你有下列方法登录CoNote 2.0：

- 如果你在老版本CoNote中使用Google邮箱，则可以直接使用Google登录新版本CoNote
- 如果你拥有Govuln账号，请在Govuln中绑定与CoNote相同的邮箱，绑定后则可以使用Govuln登录新版本CoNote
- 如果你不满足上述条件，只能使用密码登录，需要联系[phith0n](https://github.com/phith0n)重置密码
