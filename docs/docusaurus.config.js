const lightCodeTheme = require("prism-react-renderer/themes/github")
const darkCodeTheme = require("prism-react-renderer/themes/dracula")
const path = require("path")

require("dotenv").config({
  path: `${__dirname}/.env`,
})

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "react-kakao-maps-sdk docs",
  tagline: "React components for using kakao map api 🚀",
  url: "https://react-kakao-maps-sdk.jaeseokim.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  organizationName: "JaeSeoKim",
  projectName: "react-kakao-maps-sdk",
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/JaeSeoKim/react-kakao-maps-sdk/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],
  themes: ["@docusaurus/theme-live-codeblock"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
      },
      navbar: {
        title: "ReactKakaoMapSDK",
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "left",
            label: "Tutorial",
          },
          {
            type: "doc",
            docId: "sample/index",
            position: "left",
            label: "Sample",
          },
          {
            to: "/docs/api",
            position: "left",
            label: "API",
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
                label: "Tutorial",
                to: "/docs/intro",
              },
              {
                label: "Sample",
                to: "/docs/intro",
              },
              {
                label: "API",
                to: "/docs/api",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "About Developer!",
                href: "https://about.jaeseokim.dev/",
              },
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
    }),
  plugins: [
    path.resolve(__dirname, "docusaurus-plugin-reslove-package.js"),
    [
      "docusaurus-plugin-typedoc",
      {
        entryPoints: ["../src/index.ts"],
        includes: "../node_modules/kakao.maps.d.ts/@types/index.d.ts",
        tsconfig: "../tsconfig.json",
        readme: "none",
        allReflectionsHaveOwnDocument: true,
        sidebar: {
          categoryLabel: "API",
        },
      },
    ],
  ],
  scripts: [
    `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAOMAP_API_KEY}`,
  ],
}
