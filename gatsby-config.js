/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: 'Gatsby-Bootstrap',
    description: 'this is the description of our website',
    keywords: 'gatsby, gatsbyjs project, gatsby bootstrap',
    image: '/static/gatsby.jpg',
    url: 'https://www.gatsbyjs.com/'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`
    },
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        baseUrl: `practice.codingsrc.com`,
        protocol: `http`,
        hostingWPCOM: false,
      },
    },
    {
      resolve: `gatsby-transformer-remark`
    },
  ]
}

/*
  <Helmet>
    <title>Gatsby-Bootstrap Wordpress sourced</title>
    <meta name="description" content="this is the description of our website"/>
    <meta name="keywords" content="gatsby, gatsbyjs project, gatsby bootstrap"/>
    <meta name="robots" content="index "/>
  </Helmet>
 */
