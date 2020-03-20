// const getContent = require('./build-src/getContent.js')
const { getPages, getPosts } = require('./build-src/getContentFromGraphql.js')
const redirectBatch = require('./build-src/redirects.json')
const allProducts = require('./build-src/products.json')

exports.createPages = async ({ actions, graphql }) => {
	const { createPage, createRedirect } = actions

	const pages = await getPages(graphql)
	const posts = await getPosts(graphql)

	// Create a dictionary where the key is the post path and the value is the
	// the post object
	let postsHash = {}
	posts.forEach((post) => {
		postsHash[post.path] = post
	})

	createPage({ // Index
		path: '/',
		component: require.resolve('./src/templates/index.js'),
		context: { posts: posts }
	})

	// createPage({ // Activities
	// 	path: '/activities',
	// 	component: require.resolve('./src/templates/index.js'),
	// 	context: { posts: activities }
	// })
	//
	// createPage({ // Lesson Plan
	// 	path: '/lesson-plans',
	// 	component: require.resolve('./src/templates/index.js'),
	// 	context: { posts: lessonPlans }
	// })
	//
	// createPage({ // Explorations
	// 	path: '/explorations',
	// 	component: require.resolve('./src/templates/index.js'),
	// 	context: { posts: explorations }
	// })

	// products.forEach(function(product) {
	// 	let related = []
	// 	if (product.related) {
	// 		related = product.related.map((path) => postsHash[path])
	// 	}
	// 	createPage({
	// 		path: product.path,
	// 		component: require.resolve('./src/templates/product.js'),
	// 		context: { product: product, related: related }
	// 	})
	// })

	posts.forEach(function(post) { // All single posts
		let related = []
		if (post.related) {
			related = post.related.map((postId) => {
				return postsHash[postId]
			})
		}
		// let products = []
		// if (post.product && post.product.length) {
		// 	products = post.product.map((p) => {
		// 		return allProducts[p] || {}
		// 	})
		// }
		createPage({ // Posts
			path: post.path,
			component: require.resolve('./src/templates/post.js'),
			context: {
				post: post,
				related: related,
				// products: products
			}
		})
	})

	pages.forEach(function(post) { // All pages
		createPage({ // Pages
			path: post.path,
			component: require.resolve('./src/templates/post.js'),
			context: { post: post }
		})
	})

	// drafts.forEach(function(post) { // Drafts
	// 	let related = post.related.map((postId) => {
	// 		return postsHash[postId]
	// 	})
	// 	createPage({ // Pages
	// 		path: post.path,
	// 		component: require.resolve('./src/templates/post.js'),
	// 		context: { post: post, related: related }
	// 	})
	// })

	// // Printable Strawbees Learning
	// createPage({
	// 	path: '/print',
	// 	component: require.resolve('./src/templates/printable.js'),
	// 	context: {
	// 		activities, lessonPlans, explorations, pages
	// 	}
	// })

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
