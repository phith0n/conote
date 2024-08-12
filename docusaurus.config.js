const currentYear = new Date().getFullYear();
const startYear = 2017;
const siteYear = startYear === currentYear ? String(startYear) : `${startYear} - ${currentYear}`;

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "CoNote",
  tagline: "All in one cybersecurity utility platform",
  url: "https://note.leavesongs.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: "CoNote",
  projectName: "CoNote2",
  // i18n: {
  //   defaultLocale: "zh-Hans",
  //   locales: ["zh-Hans", "en"],
  //   localeConfigs: {
  //     "zh-Hans": { label: "简体中文" },
  //     en: { label: "English" },
  //   },
  // },
  themeConfig: {
    // algolia: {
    //   apiKey: '',
    //   indexName: '',
    // },
    image: "img/banner.png", // Relative to "static" directory
    colorMode: {
      defaultMode: "light",
      respectPrefersColorScheme: true,
    },
    // announcementBar: {
    //   id: 'welcom_to_new_site', // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    // },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/dracula"),
    },
    docs: {
      sidebar: {
        hideable: true
      }
    },
    navbar: {
      hideOnScroll: true,
      // style: 'primary', // or 'dark'
      title: "CoNote",
      logo: {
        alt: "Website Logo",
        src: "img/icon-large.png",
        srcDark: "img/icon-large.png",
      },
      items: [
        {
          to: "/",
          label: "Home",
          activeBaseRegex: "^/?$",
        },
        {
          type: "doc",
          docId: "guide/introduce",
          label: "Guide",
        },
        {
          type: "doc",
          docId: "api",
          label: "API"
        },
        {
          to: "about",
          label: "About",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      // style: 'dark',
      links: [
        {
          items: [
            {
              html: `
                <img src="/img/icon-large.png" alt="CoNote2" title="CoNote2" class="footer-logo"/>
              `,
            },
          ],
        },
        {
          title: "Test",
          items: [
            {
              label: "Link 1",
              to: "#",
            },
            {
              label: "Link 2",
              to: "#",
            },
          ],
        },
        {
          title: "Created by phith0n",
          items: [
            {
              label: "Blog",
              href: "https://www.leavesongs.com",
            },
            {
              label: "Govuln",
              href: "https://govuln.com",
            },
            {
              label: "Github",
              href: "https://github.com",
            },
          ],
        },
        {
          title: "Others",
          items: [
            {
              label: "Contact us",
              to: "about#contact",
            },
            {
              label: "Sponsorship",
              href: "https://github.com/sponsors/phith0n",
            },
          ],
        },
      ],
      copyright: `Copyright © ${siteYear} Powered by CoNote`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: "docs",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
  plugins: ["docusaurus-plugin-sass"],
};
