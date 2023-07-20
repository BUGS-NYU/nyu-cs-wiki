// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NYU CS Wiki',
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://nyucswiki.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BUGS', // Usually your GitHub org/user name.
  projectName: 'NYU CS Wiki', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/BUGS-NYU/nyu-cs-wiki/tree/main/',
        },
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'NYU CS Wiki',
        logo: {
          alt: 'BUGS',
          src: 'img/logo.svg',
          srcDark: 'img/logo_white.svg',
          width: 32,
          height: 32,
        },
        items: [
          {
            type: 'doc',
            docId: 'All/intro',
            position: 'left',
            label: 'All Students',
            items : [

              {
                type: 'docSidebar',
                sidebarId: 'allSidebar',
              },

            ],
          },
          {
            type: 'doc',
            docId: 'CAS/intro',
            position: 'left',
            label: 'CAS',
            items : [

              {
                type: 'docSidebar',
                sidebarId: 'casSidebar',
              },

            ],
          },
          {
            type: 'doc',
            docId: 'Tandon/intro',
            position: 'left',
            label: 'Tandon',
            items : [

              {
                type: 'docSidebar',
                sidebarId: 'tanSidebar',
              },

            ],
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'All Students',
                to: '/docs/All/intro',
              },
              {
                label: 'CAS Students',
                to: '/docs/CAS/intro',
              },
              {
                label: 'Tandon Students',
                to: '/docs/Tandon/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'BUGS Homepage',
                href: 'https://bugsnyu.com',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/75jgtXy7rz',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/nyubugs/',
              },
            ],
          },
          {
            title: 'Contribute',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/BUGS-NYU',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
