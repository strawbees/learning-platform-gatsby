const getContentFromGraphql = require('./build-src/getContentFromGraphql.js')
const redirectBatch = require('./build-src/redirects.json')
const models = require('./build-src/models')

function reduceImage(acc, node) {
	acc[node.source_url] =  {
		src: node.source_url
	}
	// image is local but not processed
	if (node.localFile) {
		acc[node.source_url] = {
			publicURL: node.localFile.publicURL
		}
	}
	return acc
}

exports.createPages = async ({ actions, graphql }) => {
	const { createPage, createRedirect } = actions
	const result = await getContentFromGraphql(graphql)

	// Dictionary/hashtable of images
	const images = result.data.allWordpressWpMedia.nodes.reduce(reduceImage)

	const pages = result.data.allWordpressPage.nodes.map(
		(child) => models.getPage(child, images)
	)
	const posts = result.data.allWordpressPost.nodes.map(
		(child) => models.getPost(child, images)
	)
	const categories = result.data.allWordpressCategory.nodes.map(
		(child) => models.getCategory(child, images)
	)
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
				siteMeta: siteMeta,
				images: images
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
				siteMeta: siteMeta,
				images: images
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
				siteMeta: siteMeta,
				images: images
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
