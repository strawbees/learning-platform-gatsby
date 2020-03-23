// const getContent = require('./build-src/getContentFromMd.js')
const { getPages, getPosts } = require('./build-src/getContentFromGraphql.js')
const redirectBatch = require('./build-src/redirects.json')

exports.createPages = async ({ actions, graphql }) => {
	const { createPage, createRedirect } = actions

	const pages = await getPages(graphql)
	const posts = await getPosts(graphql)
	const frontPage = pages.find(page => page.isFrontPage)

	// Create a dictionary where the key is the post path and the value is the
	// the post object
	let postsHash = {}
	posts.forEach((post) => {
		postsHash[post.path] = post
	})

	if (!frontPage) {
		createPage({ // Index
			path: '/',
			component: require.resolve('./src/templates/index.js'),
			context: { posts: posts }
		})
	}

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
