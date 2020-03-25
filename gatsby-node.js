const getContentFromGraphql = require('./build-src/getContentFromGraphql.js')
const redirectBatch = require('./build-src/redirects.json')
const models = require('./build-src/models')

exports.createPages = async ({ actions, graphql }) => {
	const { createPage, createRedirect } = actions

	const result = await getContentFromGraphql(graphql)

	const pages = result.data.allWordpressPage.nodes.map(models.getPage)
	const posts = result.data.allWordpressPost.nodes.map(models.getPost)
	const categories = []

	// Create a dictionary where the key is the post path and the value is the
	// the post object
	let postsHash = {}
	posts.forEach((post) => {
		postsHash[post.path] = post
	})

	posts.forEach(function(post) { // All single posts
		createPage({ // Posts
			path: post.path,
			component: require.resolve('./src/templates/post.js'),
			context: { post: post }
		})
	})

	pages.forEach(function(post) { // All pages
		createPage({ // Pages
			path: post.path,
			component: require.resolve('./src/templates/post.js'),
			context: { post: post }
		})
	})

	categories.forEach(function(category) { // Category pages
		let filteredPosts = posts.filter(function(post) {
			return post.category === category.name
		})
		createPage({
			path: category.uri,
			component: require.resolve('./src/templates/index.js'),
			context: {
				posts: filteredPosts,
				category: category
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
