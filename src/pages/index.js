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
          title={translate({ id: "homepage.hero.logoLink.title", message: "" })}
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
              className={clsx("button button--outline button--primary button--lg margin-right--sm", styles.btnCta)}
              to='#'
            >
              <Translate id="homepage.hero.button.learnMore">Learn More</Translate>
            </Link>
            <Link
              className={clsx("button button--outline button--primary button--lg", styles.btnCta)}
              to='#'
            >
              <Translate id="homepage.hero.button.conote">Go to CoNote</Translate>
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
          <div>
            <h3>🟢 <Translate id="homepage.intro.domains.title">Domains</Translate></h3>
            <ul>
              <li><Translate id="homepage.intro.domains.list0">Exclusive built-in domains</Translate></li>
              <li><Translate id="homepage.intro.domains.list1">Custom domains</Translate></li>
            </ul>
          </div>
          <div>
            <h3>🟡 <Translate id="homepage.intro.http.title">HTTP</Translate></h3>
            <ul>
              <li><Translate id="homepage.intro.http.list0">Web request logs</Translate></li>
              <li><Translate id="homepage.intro.http.list1">Web content served</Translate></li>
              <li><Translate id="homepage.intro.http.list2">Automatic wildcards HTTPS Certificates</Translate></li>
            </ul>
          </div>
          <div>
            <h3>🔵 <Translate id="homepage.intro.dns.title">DNS</Translate></h3>
            <ul>
              <li><Translate id="homepage.intro.dns.list0">DNS request logs</Translate></li>
              <li><Translate id="homepage.intro.dns.list1">IPv6 support</Translate></li>
              <li><Translate id="homepage.intro.dns.list2">DNS rebinding test support</Translate></li>
            </ul>
          </div>
          <div>
            <h3>🔴 <Translate id="homepage.intro.jndi.title">JNDI injection</Translate></h3>
            <ul>
              <li><Translate id="homepage.intro.jndi.list0">RMI request logs</Translate></li>
              <li><Translate id="homepage.intro.jndi.list1">LDAP request logs</Translate></li>
            </ul>
          </div>
          <div>
            <h3>🟤 <Translate id="homepage.intro.shortener.title">Link Shortener</Translate></h3>
            <ul>
              <li><Translate id="homepage.intro.shortener.list0">IDN domain name (length &lt;= 3)</Translate></li>
              <li><Translate id="homepage.intro.shortener.list1">Password protected link support</Translate></li>
            </ul>
          </div>
          <div>
            <h3>🟣 <Translate id="homepage.intro.email.title">Disposable Email</Translate></h3>
            <ul>
              <li><Translate id="homepage.intro.email.list0">Exclusive built-in Emails</Translate></li>
              <li><Translate id="homepage.intro.email.list1">Custom domain Emails</Translate></li>
              <li><Translate id="homepage.intro.email.list2">Email content sandbox</Translate></li>
            </ul>
          </div>
          <div>
            <h3>🟠 <Translate id="homepage.intro.xss.title">XSS Receiver</Translate></h3>
            <ul>
              <li><Translate id="homepage.intro.xss.list0">Encrypted communication</Translate></li>
              <li><Translate id="homepage.intro.xss.list1">WASM based payload</Translate></li>
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
            <Translate id="homepage.preview.title">Preview</Translate>
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
          <Translate id="homepage.preview.button.seeMoreCharts">More Previews</Translate>
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
