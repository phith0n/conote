import React, { useState } from "react";
import clsx from "clsx";
import Translate, { translate } from "@docusaurus/Translate";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.scss";

const features = [
  {
    title: translate({ id: "homepage.features.stable.title", message: "Stable" }),
    imageUrl: "img/features/trust.svg",
    description: translate({
      id: "homepage.features.stable.description",
      message: "Project CoNote is started on 2017, made public on 2021, version 2.0 released on 2024.",
    }),
  },
  {
    title: translate({ id: "homepage.features.professional.title", message: "Professional" }),
    imageUrl: "img/features/professional.svg",
    additionalClass: styles.featureImageProfessional,
    description: translate({
      id: "homepage.features.professional.description",
      message: "CoNote is specifically designed for cyber security testing and Bug Bounty, developed by experts with over 10 years of experience in the cyber security field.",
    }),
  },
  {
    title: translate({ id: "homepage.features.community.title", message: "Community" }),
    imageUrl: "img/features/community.svg",
    description: translate({
      id: "homepage.features.community.description",
      message: "CoNote was born from the requirements of the cyber security community, improves gradually with community feedback.",
    }),
  },
];

function Feature({ imageUrl, title, description, additionalClass }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className="col col--4 padding-horiz--lg">
      {imgUrl && (
        <div className="text--center">
          <img className={clsx(styles.featureImage, additionalClass)} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Banner() {
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <Link
          to='#'
          title={translate({ id: "homepage.hero.logoLink.title", message: "點我直接閱讀最新一篇日誌" })}
        >
          <img className={styles.heroLogo} src={useBaseUrl("/img/icon-large.png")} alt="Website Logo" />
        </Link>
        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>
            <Translate id="homepage.hero.title">CoNote</Translate>
          </h1>
          <p
            className={styles.heroTagline}
            dangerouslySetInnerHTML={{
              __html: translate({
                id: "homepage.hero.tagline",
                message: "<strong>CoNote</strong> - All in one cybersecurity utility platform",
                description: "Homepage hero tagline, can contain simple html tags",
              }),
            }}
          />
          <div className={styles.buttons}>
            <Link
              className={clsx("button button--outline button--primary button--lg", styles.btnCta)}
              to='#'
            >
              <Translate id="homepage.hero.button.learnMore">Learn More</Translate>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

function ModulesIntro() {
  return (
    <section className={clsx("padding-vert--lg", styles.bgModulesIntro)}>
      <div className="container">
        <div className="module-intro-block margin-vert--lg">
          <div><h3>🟢 Domains</h3>
            <ul>
              <li>Exclusive built-in domains</li>
              <li>Custom domains</li>
            </ul>
          </div>
          <div><h3>🟡 HTTP</h3>
            <ul>
              <li>Web request logs</li>
              <li>Web content served</li>
              <li>Automatic wildcards HTTPS Certificates</li>
            </ul>
          </div>
          <div><h3>🔵 DNS</h3>
            <ul>
              <li>DNS request logs</li>
              <li>IPv6 support</li>
              <li>DNS rebinding test support</li>
            </ul>
          </div>
          <div><h3>🔴 <em>JNDI</em> injection</h3>
            <ul>
              <li>RMI request logs</li>
              <li>LDAP request logs</li>
            </ul>
          </div>
          <div><h3>🟤 Link Shortener</h3>
            <ul>
              <li>IDN domain name (length &lt;= 3)</li>
              <li>Password protected link support</li>
            </ul>
          </div>
          <div><h3>🟣 Disposable Email</h3>
            <ul>
              <li>Exclusive built-in Emails</li>
              <li>Custom domain Emails</li>
              <li>Email content sandbox</li>
            </ul>
          </div>
          <div><h3>🟠 XSS Receiver</h3>
            <ul>
              <li>Encrypted communication</li>
              <li>WASM based payload</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className={clsx("padding-vert--lg", styles.bgFeatures)}>
      <div className="container">
        <div className="row">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
      <div className="flex-center--wrap margin-vert--md">
        <Link
          className={clsx("button button--outline button--primary button--lg", styles.btnCta)}
          to='https://govuln.com'
          target='_blank'
        >
          <Translate id="homepage.features.button.startReading">Go to community</Translate>
        </Link>
      </div>
    </section>
  );
}

function Preview() {
  return (
    <section className={clsx("padding-vert--lg", styles.bgPreview)}>
      <div className="container">
        <div className="text--center margin-top--lg">
          <h1>
            <Translate id="homepage.Preview.title">Preview</Translate>
          </h1>
        </div>
        <div className="row">
          <img className={styles.previewImage} src={useBaseUrl("/img/preview-1.png")} alt="Preview Image"/>
        </div>
      </div>
      <div className="flex-center--wrap margin-vert--md">
        <Link
          className={clsx("button button--outline button--primary button--lg", styles.btnCta)}
          to='#'
        >
          <Translate id="homepage.Preview.button.seeMoreCharts">More Previews</Translate>
        </Link>
      </div>
    </section>
  );
}

export default function Home() {
  const title = translate({ id: "homepage.title", message: "Home" });
  const description = translate({
    id: "homepage.description",
    message: "CoNote - All in one cybersecurity utility platform",
  });

  return (
    <Layout title={title} description={description}>
      <Banner />
      <main>
        <ModulesIntro />
        <Preview />
        <Features />
      </main>
    </Layout>
  );
}
