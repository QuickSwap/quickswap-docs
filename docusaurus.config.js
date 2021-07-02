module.exports = {
  title: "Quickswap",
  tagline: "Documentation and Guides",
  url: "https://docs.uniswap.org/",
  baseUrl: "/",
  onBrokenLinks: "ignore",
  onBrokenMarkdownLinks: "ignore",
  favicon: "img/logo_circle.png",
  organizationName: "Quickswap", // Usually your GitHub org/user name.
  projectName: "quickswap-docs", // Usually your repo name.
  themeConfig: {
    // hideableSidebar: true,
    prism: {
      additionalLanguages: ["solidity"],
    },
    googleAnalytics: {
      trackingID: "UA-128182339-7",
      // Optional fields.
      anonymizeIP: true,
    },
    algolia: {
      contextualSearch: true,
      apiKey: "32465e2ab6f7554ff014e64c0d92171c",
      indexName: "v3-docs",
      appId: 'S0IDD0YGLZ',
      contextualSearch: true,
    },
    navbar: {
      title: "Quickswap Documentation",
      logo: {
        alt: "Quickswap Dragon",
        src: "img/quickswaplogo.png",
      },
      items: [                
        {
          href: "https://github.com/QuickSwap/quickswap-docs",
          label: "GitHub",
          position: "right",
        },        
        {
          type: "docsVersionDropdown",

          //// Optional
          position: "right",
          // Add additional dropdown items at the beginning/end of the dropdown.
          // dropdownItemsBefore: [],
          // dropdownItemsAfter: [{to: '/versions', label: 'V1'}],
          // Do not add the link active class when browsing docs.
          // dropdownActiveClassDisabled: false,
          docsPluginId: "default",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Ecosystem",
          items: [
            {
              label: "Home",
              href: "https://uniswap.org/",
            },
            {
              label: "App",
              href: "https://quickswap.exchange/",
            },
            {
              label: "Analytics",
              href: "https://info.quickswap.exchange/home",
            },
          ],
        },
        {
          title: "Developers",
          items: [
            {
              label: "Bug Bounty",
              href:
                "https://github.com/Uniswap/uniswap-v3-periphery/blob/main/bug-bounty.md",
            },
            {
              label: "GitHub | Protocol",
              href: "https://github.com/QuickSwap/quickswap-core",
            },
            {
              label: "GitHub | SDK",
              href: "https://github.com/QuickSwap/QuickSwap-sdk",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Governance",
              href: "https://gov.uniswap.org/",
            },
            {
              label: "Discord",
              href: "https://discord.gg/FCfyBSbCU5",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/Uniswap",
            },
            {
              label: "Blog",
              href: "https://uniswap.org/blog/",
            },
          ],
        },
      ],
      // copyright: `unlicensed`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "docs/V2",
          routeBasePath: "/",
          sidebarPath: require.resolve("./V2sidebars.js"),
          includeCurrentVersion: false,
          editUrl: "https://github.com/QuickSwap/quickswap-docs/tree/main/",
        },

        theme: {
          customCss: require.resolve("./src/css/custom.css"),
          customCss2: require.resolve("./src/css/colors.css"),
        },
      },
    ],
  ],
  plugins: [
    // [
    //   "@docusaurus/plugin-content-docs",
    //   {
    //     id: "SDK",
    //     path: "SDK",
    //     routeBasePath: "/",
    //     sidebarPath: require.resolve("./sdkSidebar.js"),
    //   },
    // ],
  ],
  //   ],
  //   [
  //     "@docusaurus/plugin-content-docs",
  //     {
  //       id: "versionone",
  //       path: "docs/V1",
  //       routeBasePath: "docs/V1",
  //       sidebarPath: require.resolve("./V1sidebars.js"),
  //     },
  //   ],
  // ],
};
