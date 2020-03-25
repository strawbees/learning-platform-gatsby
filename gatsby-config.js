// XXX: Hack to build multiple environment variables
const buildEnvironments = require('./build-src/buildEnvironments')
const {
	pathPrefix,
	siteUrl,
	trackingId
} = buildEnvironments(
	process.env.BUILD_ENVIRONEMNT || 'stage'
)

module.exports = {
	pathPrefix: pathPrefix,
	siteMetadata: {
		title: `Strawbees Learning`,
		description: `Explore our virtual oasis for innovative teachers who embrace creative thinking and hands-on learning with Strawbees.`,
		author: `@strawbees`,
		siteUrl: siteUrl,
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-wordpress`,
			options: {
				baseUrl: `localhost:8080`,
				protocol: `http`,
				hostingWPCOM: false,
				useACF: false,
				includedRoutes: [
          "**/categories",
          "**/posts",
          "**/pages",
          "**/media",
          "**/tags",
          "**/taxonomies",
          "**/users",
          "**/frontpage",
          "**/header-menu",
          "**/footer-menu",
        ],
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
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
				trackingId: trackingId
			},
		},
		{
			resolve: `gatsby-plugin-remove-serviceworker`,
			options: {
				filename: 'service-worker.js'
			}
		},
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
	],
}
