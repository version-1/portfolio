module.exports = {
  siteMetadata: {
    title: `version-1's Protfolio`,
    description: `version-1's protfolio`,
    author: `version-1`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#FF9F01`,
        theme_color: `#FF9F01`,
        display: `minimal-ui`,
        icon: `src/assets/favicon.ico`,
      },
    },
  ],
}
