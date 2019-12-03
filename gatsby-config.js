module.exports = {
	// pathPrefix: '/public',
	pathPrefix: '/learning-platform-gatsby',
  siteMetadata: {
    title: `Strawbees Learning Platform`,
    description: `Strawbees: The future of education`,
    author: `@strawbees`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
		`gatsby-plugin-remove-serviceworker`,
  ],
}
