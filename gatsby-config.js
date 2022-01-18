/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

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
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Chivo:300,400,700`, `Almarai:300,400,700,800`],
        display: 'swap',
      },
    },
  ],
}
