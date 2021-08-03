const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "react-kakao-maps-sdk docs",
  url: "https://react-kakao-maps-sdk.jaeseokim.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "JaeSeoKim",
  projectName: "react-kakao-maps-sdk",
  themeConfig: {
    disableLandingPage: true,
    navbar: {
      title: "react-kakao-maps-sdk docs",
      items: [
        {
          type: "doc",
          docId: "intro",
          position: "left",
          label: "Docs",
        },
        {
          href: "https://github.com/JaeSeoKim/react-kakao-maps-sdk",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/docs/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/JaeSeoKim/react-kakao-maps-sdk",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} JaeSeoKim, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/",
        },
        theme: {},
      },
    ],
  ],
  plugins: [
    [
      "docusaurus2-dotenv",
      {
        systemvars: true,
      },
    ],
  ],
};
