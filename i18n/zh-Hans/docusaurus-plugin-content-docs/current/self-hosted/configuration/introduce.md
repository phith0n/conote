---
title: 配置文件
sidebar_position: 10
description: CoNote configuration file
---

CoNote 使用 YAML 格式来配置文件，下面是一个完整配置文件的示例：

```yaml
debug: false
secret_key: "DEFAULT_SECRET_KEY"

# Database related config
database:
  database_url: postgres://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:${POSTGRES_PORT}/${POSTGRES_DB}

# Web server related config
web:
  addr: ""
  http_port: 80
  https_port: 443
  main_domain: "main.domain.tld"
  file_basedir: ./data/attachment
  token_valid_time: 2592000
  allow_register: false
  base_domains:
    - base.domain.tld

# DNS server related config
dns:
  addr: ""
  port: 53
  external_ip: 1.2.3.4
  ns1_domain: ns1.domain.tld
  ns2_domain: ns2.domain.tld
  rebinding_domain: rebinding.domain.tld

shortener:
  enable: true
  short_domain: "short.domain.tld"
  hashids_salt: "DEFAULT_SHORTENER_SALT"

# SMTP server related config
smtp:
  addr: ""
  port: 25
  tls_port: 587
  basedir: ./data/email
  email_domains:
    - example.domain.tld

rmi:
  addr: ""
  port: 1099

ldap:
  addr: ""
  port: 389
  tls_port: 636

acme:
  enable: true
  basedir: ./data/acme

# user limitation related config
limitation:
  domain: 6
  email_domain: 5
  email_box: 20

# GeoIP2 related config
geoip2:
  filename: ./data/geoip2.mmdb
  key: DEFAULT_GEOIP2_KEY

google:
  enable: true
  client_id: DEFAULT_GOOGLE_CLIENT_ID
```

请分别阅读后续文档，了解每个配置项的详细信息。
