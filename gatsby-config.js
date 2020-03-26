// XXX: Hack to build multiple environment variables
const buildEnvironments = require('./build-src/buildEnvironments')
const {
	pathPrefix,
	siteUrl,
	headlessWordpress,
	headlessWordpressProtocol,
	trackingId
} = buildEnvironments(
	process.env.BUILD_ENVIRONEMNT || 'local'
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
				baseUrl: headlessWordpress,
				protocol: headlessWordpressProtocol,
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
