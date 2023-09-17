// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const repo = 'https://github.com/BUGS-NYU/nyu-cs-wiki';
const branch = 'main'

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

  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],

  // add mermaid support
  presets: [
    [
      'classic',
      // 'classic'
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            `${repo}/tree/${branch}/`,
        },
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
            docId: 'Academics/academics',
            position: 'left',
            label: 'Academics',
            items: [

              {
                type: 'docSidebar',
                sidebarId: 'academicsSidebar',
              },

            ],
          },
          {
            type: 'doc',
            docId: 'Opportunities/opportunities',
            position: 'left',
            label: 'Opportunities',
            items: [

              {
                type: 'docSidebar',
                sidebarId: 'opportunitiesSidebar',
              },

            ],
          },
          {
            type: 'doc',
            docId: 'Social/social',
            position: 'left',
            label: 'Social',
            items: [

              {
                type: 'docSidebar',
                sidebarId: 'socialSidebar',
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
                label: 'Academics',
                to: '/docs/Academics',
              },
              {
                label: 'Opportunities',
                to: '/docs/Opportunities',
              },
              {
                label: 'Social',
                to: '/docs/Social',
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
          {
            title: 'Software Used',
            items: [
              {
                label: 'NPM Packages',
                href: `/docs/packages`,
              },
              {
                label: 'DALLE2',
                href: 'https://openai.com/dall-e-2',
              },
            ],
          },

        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      mermaid: {
        theme: {
          light: 'default',
          dark: 'dark'
        },
      },
    }),
};

module.exports = config;
