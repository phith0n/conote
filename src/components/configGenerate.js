import React, { useState, useEffect } from "react";
import JSZip from "jszip";
import DomainListInput from "./DomainListInput";

// 安全的随机字符串生成函数
function generateSecureRandomString(length = 32) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const array = new Uint8Array(length);
  crypto.getRandomValues(array);
  return Array.from(array, (byte) => characters[byte % characters.length]).join(
    ""
  );
}

const ConfigGenerate = () => {
  const [config, setConfig] = useState({
    mainDomain: "",
    nsDomain1: "",
    nsDomain2: "",
    baseDomains: [],
    ipAddress: "",
    allowRegistration: false,
    enableShortener: false,
    shortDomain: "",
    geoIPKey: "",
    enableGoogleLogin: false,
    googleClientId: "",
  });

  useEffect(() => {
    const savedConfig = sessionStorage.getItem("configGenerateState");
    if (savedConfig) {
      setConfig(JSON.parse(savedConfig));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem("configGenerateState", JSON.stringify(config));
  }, [config]);

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setConfig((prevConfig) => ({
      ...prevConfig,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  function generateCompose() {
    const postgresPassword = generateSecureRandomString(12);
    return `services:
  web:
    image: vulhub/conote2:latest
    ports:
      - "80:80"
      - "443:443"
      - "25:25"
      - "587:587"
      - "53:53/tcp"
      - "53:53/udp"
      - "1099:1099"
      - "389:389"
      - "636:636"
    volumes:
      - ./config.yaml:/opt/conote2/config.yaml
      - ./data:/opt/conote2/data
    restart: unless-stopped
    environment:
      - POSTGRES_HOST=db
      - POSTGRES_PORT=5432
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=${postgresPassword}
      - POSTGRES_DB=conote
    networks:
      - conote
  db:
    image: postgres:16-alpine
    volumes:
      - ./postgres:/var/lib/postgresql/data
    ports:
      - "127.0.0.1:5432:5432"
    restart: unless-stopped
    environment:
      - POSTGRES_USER=postgres
      - POSTGRES_PASSWORD=${postgresPassword}
      - POSTGRES_DB=conote
    networks:
      - conote

networks:
  conote:`;
  }

  function generateConfig() {
    // Remove empty strings from baseDomains
    const filteredBaseDomains = config.baseDomains.filter(
      (domain) => domain.trim() !== ""
    );
    const rebindDomain =
      config.baseDomains.length > 0 ? `rebinding.${config.baseDomains[0]}` : "";
    return `debug: false
secret_key: "${generateSecureRandomString(32)}"

# Database related config
database:
  database_url: postgres://\${POSTGRES_USER}:\${postgresPassword}@\${POSTGRES_HOST}:\${POSTGRES_PORT}/\${POSTGRES_DB}

# Web server related config
web:
  addr: ""
  http_port: 80
  https_port: 443
  main_domain: ${JSON.stringify(config.mainDomain)}
  file_basedir: ./data/attachment
  token_valid_time: 2592000
  allow_register: ${config.allowRegistration}
  base_domains: ${JSON.stringify(filteredBaseDomains)}

# DNS server related config
dns:
  addr: ""
  port: 53
  external_ip: ${JSON.stringify(config.ipAddress)}
  ns1_domain: ${JSON.stringify(config.nsDomain1)}
  ns2_domain: ${JSON.stringify(config.nsDomain2)}
  rebinding_domain: ${JSON.stringify(rebindDomain)}

shortener:
  enable: ${config.enableShortener}
  short_domain: ${JSON.stringify(config.shortDomain)}
  hashids_salt: "${generateSecureRandomString(12)}"

# SMTP server related config
smtp:
  addr: ""
  port: 25
  tls_port: 587
  basedir: ./data/email
  email_domains: ${JSON.stringify(filteredBaseDomains)}

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
  key: ${JSON.stringify(config.geoIPKey)}

google:
  enable: ${config.enableGoogleLogin}
  client_id: ${JSON.stringify(config.googleClientId)}`;
  }

  const downloadConfig = () => {
    const configYaml = generateConfig();
    const composeYaml = generateCompose();

    const zip = new JSZip();
    zip.file("config.yaml", configYaml);
    zip.file("docker-compose.yml", composeYaml);

    zip.generateAsync({ type: "blob" }).then((content) => {
      const url = URL.createObjectURL(content);
      const a = document.createElement("a");
      a.href = url;
      a.download = "conote-config.zip";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    });
  };

  return (
    <>
      <form className="space-y-4">
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            主域名
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-1"
            placeholder="main.domain.tld"
            required
            value={config.mainDomain}
            onChange={handleChange}
            name="mainDomain"
          />
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            主域名用于在外部访问CoNote后台，可以是任何域名，需要指向CoNote的IP地址。
          </p>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            IP地址
          </label>
          <input
            type="text"
            value={config.ipAddress}
            onChange={handleChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-1"
            placeholder="1.2.3.4"
            name="ipAddress"
          />
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            CoNote服务器的外网IP地址。
          </p>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            NS1域名
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-1"
            placeholder="ns1.domain.tld"
            required
            value={config.nsDomain1}
            onChange={handleChange}
            name="nsDomain1"
          />
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            NS域名会在NS记录中返回，可以是任何域名，其指向CoNote服务器。
          </p>
        </div>
        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            NS2域名
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-1"
            placeholder="ns2.domain.tld"
            required
            value={config.nsDomain2}
            onChange={handleChange}
            name="nsDomain2"
          />
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            NS域名至少有两个，且不相同，比如<code>ns1.leavesongs.com</code>和
            <code>ns2.leavesongs.com</code>。
          </p>
        </div>
        <DomainListInput
          label="基础域名列表"
          domains={config.baseDomains}
          setDomains={(newDomains) =>
            setConfig({ ...config, baseDomains: newDomains })
          }
          placeholder="base.domain.tld"
          helperText="基础域名用于Web、DNS、RMI、LDAP等日志使用，也会同时作为临时邮箱的域名使用，需要设置NS记录指向CoNote服务器。"
        />

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            MaxMind License Key
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-1"
            placeholder="maxmind_license_key"
            value={config.geoIPKey}
            onChange={handleChange}
            name="geoIPKey"
          />
          <p
            id="helper-text-explanation"
            className="mt-2 text-sm text-gray-500 dark:text-gray-400"
          >
            CoNote 会从 MaxMind 下载 IP 地址数据库文件，请在
            <a
              href="https://dev.maxmind.com/geoip/geolite2-free-geolocation-data"
              target="_blank"
              rel="noopener noreferrer"
            >
              MaxMind 官网
            </a>
            注册账号并免费获取 License Key。
          </p>
        </div>
        <div className="mb-5">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={config.allowRegistration}
              onChange={handleChange}
              className="sr-only peer"
              name="allowRegistration"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              允许注册
            </span>
          </label>
        </div>
        <div className="mb-5">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={config.enableShortener}
              onChange={handleChange}
              className="sr-only peer"
              name="enableShortener"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              开启网址缩短功能
            </span>
          </label>
        </div>
        {config.enableShortener ? (
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              短域名
            </label>
            <input
              type="text"
              value={config.shortDomain}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-1"
              placeholder="short.domain.tld"
              name="shortDomain"
            />
            <p
              id="helper-text-explanation"
              className="mt-2 text-sm text-gray-500 dark:text-gray-400"
            >
              如果开启网址缩短功能，需要设置一个短域名，其指向CoNote的IP地址。
            </p>
          </div>
        ) : null}
        <div className="mb-5">
          <label className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={config.enableGoogleLogin}
              onChange={handleChange}
              className="sr-only peer"
              name="enableGoogleLogin"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              开启Google登录
            </span>
          </label>
        </div>
        {config.enableGoogleLogin ? (
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Google Client ID
            </label>
            <input
              type="text"
              value={config.googleClientId}
              onChange={handleChange}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring-1"
              placeholder="xxxx.apps.googleusercontent.com"
              name="googleClientId"
            />
            <p
              id="helper-text-explanation"
              className="mt-2 text-sm text-gray-500 dark:text-gray-400"
            >
              如果需要开启Google登录，请参考
              <a
                href="https://support.google.com/cloud/answer/6158849"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google OAuth 文档
              </a>
              创建一个 OAuth 应用，并在此处填写其 Client ID （无需 Client
              Secret）。
            </p>
          </div>
        ) : null}
        <div>
          <button
            type="button"
            onClick={downloadConfig}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 cursor-pointer"
          >
            生成并下载配置文件
          </button>
        </div>
      </form>
    </>
  );
};

export default ConfigGenerate;
