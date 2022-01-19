/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
  path: `.env`,
});

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `Tristan Dauvergne - Frontend Developer`,
    description: `Tristan Dauvergne - frontend developer portfolio and CV`,
    social: {
      linkedin: 'https://www.linkedin.com/in/tristandauvergne/',
    }
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Chivo:300,400,700`, `Almarai:300,400,700,800`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
      },
    },
  ],
}
