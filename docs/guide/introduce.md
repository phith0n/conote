---
title: 快速上手
sidebar_position: 10
description: Introduce CoNote
---

<p class="text--light subtitle">多功能信息安全测试套件。</p>

## 什么是CoNote?

CoNote作为一个多功能信息安全测试套件，让我们在安全测试、代码审计、Bug Bounty的过程中更方便地确认漏洞的存在，并快速构建复现漏洞的POC。

## 功能与特性

- 多用户支持
- 内置子域名与绑定用户自定义域名（多达**6个**）
- HTTPS Wildcards证书自动申请与续期
- 反连日志服务
  - HTTP日志
  - DNS日志
  - RMI日志
  - LDAP日志
  - SMTP日志
- Web内容与文件服务
- IDN域名缩短服务（长度低至**3字符**）
- 临时邮箱服务
- 自定义域名邮箱服务
- XSS平台
  - 加密通信
  - 基于WASM的Payload生成

## 使用方法

CoNote全新2.0版本分为云版本和自建版本，云版本地址：[https://note.leavesongs.com/](https://note.leavesongs.com/)，自建服务器搭建方法请参考：[自建CoNote服务器](../self-hosted/introduce.mdx)。

云版本未对外开放注册，推荐搭建自己的CoNote服务器，也能更好地保护自己的测试过程不受其他用户影响。
