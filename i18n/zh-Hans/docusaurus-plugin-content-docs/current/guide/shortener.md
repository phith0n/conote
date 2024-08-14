---
title: URL缩短器
sidebar_position: 90
description: URL link shortener
---

在漏洞测试过程中，有时会因为URL过长受到限制。CoNote提供一个IDN域名`mhz.pw`作为域名缩短服务。

<div className="comment_block">
  IDN域名是指国际化域名（Internationalized Domain Name），这类域名允许包含非ASCII字符，比如中文、阿拉伯文、俄文等语言的字符。

  IDN域名在内部通过一个称为“Punycode”的编码转换过程来与现有的DNS系统兼容。Punycode是一种特殊的编码方式，用于将包含国际字符的域名转换成由ASCII字符组成的字符串，这样就可以在现有的域名系统中进行解析。

  部分Unicode字符使用Punycode解码时会被转换成普通ascii字符，比如`㎒`和`㎺`。
</div>

在浏览器中，`mhz.pw`可以使用`㎒.㎺`表示，在部分字符串为unicode类型的语言中，其长度仅为3:

![](@site/static/docs/mhz_pw.png)

## 创建链接

点击Create创建短链接：

![](@site/static/docs/link_shorten.png)

除了URL以外，可以选择两个额外选项：

- **Reserve Params**: 跳转时是否保留参数 
- **Secret**: 对短链接增加一个密码

### Reserve Params

在勾选“Reserve Params”后，我们访问`http://mhz.pw/link?id=1`，id参数与其值跳转时会保留在新的URL中。

### Secret

在勾选“Secret”后，生成的短链接后会增加一个冒号和密码，如`http://mhz.pw/1:JqDu0PvW`，只有密码正确才能跳转。
