module.exports = {
  siteMetadata: {
    title: `GuOshiro`,
    description: `Free-lance Developr`,
    author: `Gustavo de Albuquerque Oshiro`,
    siteUrl: "http://guoshiro.github.io/portfolio",
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@components": "src/components",
          "@constants": "src/constants",
          "@images": "src/images",
          "@styles": "src/styles",
          "@utils": "src/utils",
        },
        extensions: ["js", "css"],
      },
    },
    "gatsby-plugin-theme-ui",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `uploads`,
        path: `${__dirname}/static/assets/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/api/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `portfolio`,
        path: `${__dirname}/api/portfolio`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: "Nunito",
            variants: ["200", "400", "700"],
          },
          {
            family: "Lato",
            variants: ["100", "400", "700"],
          },
          {
            family: "Press Start 2P",
            variants: ["400"],
          },
        ],
      },
    },

    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    // {
    //   resolve: "gatsby-plugin-google-tagmanager",
    //   options: {
    //     id: "<PREENCHER AQUI ANTES DE PUBLICAR>",
    //     includeInDevelopment: false,
    //     defaultDataLayer: { platform: "gatsby" },
    //     gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
    //     gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
    //     dataLayerName: "YOUR_DATA_LAYER_NAME",
    //   },
    // },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/languages`,
        languages: [`en`, "pt-BR"],
        defaultLanguage: `pt-BR`,
        redirect: false,
      },
    },

    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "guoshiro",
        short_name: `guoshiro`,
        start_url: `/`,
        background_color: "#00346B",
        theme_color: "#f17b36",
        display: `minimal-ui`,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-relative-images",
            options: {
              name: "uploads",
            },
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 960,
              linkImagesToOriginal: false,
            },
          },
          "gatsby-remark-lazy-load",
          {
            resolve: `gatsby-remark-highlight-code`,
          },
        ],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
    "gatsby-plugin-sitemap",
    `gatsby-plugin-netlify-cms`,
  ],
}
