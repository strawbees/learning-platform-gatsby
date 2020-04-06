const getContentFromGraphql = require('./build-src/getContentFromGraphql.js')
const redirectBatch = require('./build-src/redirects.json')
const models = require('./build-src/models')

exports.createPages = async ({ actions, graphql }) => {
	const { createPage, createRedirect } = actions
	const result = await getContentFromGraphql(graphql)

	const pages = result.data.allWordpressPage.nodes.map(models.getPage)
	const posts = result.data.allWordpressPost.nodes.map(models.getPost)
	const categories = result.data.allWordpressCategory.nodes.map(models.getCategory)
	const headerMenu = models.getMenu(result.data.allWordpressWpHeaderMenu.nodes)
	const footerMenu = models.getMenu(result.data.allWordpressWpFooterMenu.nodes)
	const siteMeta = result.data.allWordpressSiteMetadata.nodes[0]

	posts.forEach(function(post) { // All single posts
		createPage({ // Posts
			path: post.path,
			component: require.resolve('./src/templates/post.js'),
			context: {
				posts: posts,
				post: post,
				headerMenu: headerMenu,
				footerMenu: footerMenu,
				siteMeta: siteMeta
			}
		})
	})

	pages.forEach(function(post) { // All pages
		createPage({ // Pages
			path: post.path,
			component: require.resolve('./src/templates/post.js'),
			context: {
				posts: posts,
				post: post,
				headerMenu: headerMenu,
				footerMenu: footerMenu,
				siteMeta: siteMeta
			}
		})
	})

	categories.forEach(function(category) { // Category pages
		let filteredPosts = posts.filter(function(post) {
			return post.category === category.name
		})
		createPage({
			path: category.path,
			component: require.resolve('./src/templates/index.js'),
			context: {
				posts: filteredPosts,
				category: category,
				headerMenu: headerMenu,
				footerMenu: footerMenu,
				siteMeta: siteMeta
			}
		})
	})

	redirectBatch.forEach(function(redirect) { // Front end redirects
		// Redirect without trailing slashes
		createRedirect({
			fromPath: redirect.f,
			isPermanent: true,
			redirectInBrowser: true,
			toPath: redirect.t,
		})
		// Redirect with trailing slashes
		if (redirect.f !== '/') {
			createRedirect({
				fromPath: `${redirect.f}/`,
				isPermanent: true,
				redirectInBrowser: true,
				toPath: redirect.t,
			})
		}
	})

	return Promise.resolve()
}
