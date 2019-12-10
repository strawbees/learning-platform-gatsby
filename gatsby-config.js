// XXX: Hack to build multiple environment variables
let pathPrefix, siteUrl, trackingId, buildEnv
// buildEnv = 'stage'

switch (buildEnv) {
	case 'stage':
		trackingId = 'UA-69443341-4'
		pathPrefix = ''
		siteUrl = 'https://learning-stage.strawbees.com'
		break;
	case 'production':
		trackingId = 'UA-69443341-2'
		pathPrefix = ''
		siteUrl = 'https://learning.strawbees.com'
		break;
	case 'github':
		pathPrefix = '/learning-platform-gatsby'
		siteUrl = 'https://murilopolese.github.io'
		break;
	case 'local':
		pathPrefix = '/public'
		siteUrl = 'http://localhost:8080'
		break;
	case 'development':
	default:
		pathPrefix = ''
		siteUrl = 'http://localhost:8000'
}

module.exports = {
	pathPrefix: pathPrefix,
  siteMetadata: {
    title: `Strawbees Learning Platform`,
    description: `Explore our virtual oasis for innovative teachers who embrace creative thinking and hands-on learning with Strawbees.`,
    author: `@strawbees`,
		siteUrl: siteUrl,
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
		{
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: trackingId,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
		{
			resolve: `gatsby-plugin-remove-serviceworker`,
			options: {
				filename: 'service-worker.js'
			}
		}
  ],
}
