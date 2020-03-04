const getContent = require('./build-src/getContent.js')
const redirectBatch = require('./build-src/redirects.json')
const allProducts = require('./build-src/products.json')

exports.createPages = async function(e) {
	const createPage = e.actions.createPage
	const createRedirect = e.actions.createRedirect
	const activities = await getContent('activities')
	const lessonPlans = await getContent('lesson-plans')
	const explorations = await getContent('explorations')
	const pages = await getContent('pages')
	const products = await getContent('products')

	let drafts = []
	try {
		drafts = await getContent('draft')
	} catch (e) { console.log('no drafts') }
	const posts = [
		...lessonPlans, ...activities, ...explorations
	]

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

	createPage({ // Activities
		path: '/activities',
		component: require.resolve('./src/templates/index.js'),
		context: { posts: activities }
	})

	createPage({ // Lesson Plan
		path: '/lesson-plans',
		component: require.resolve('./src/templates/index.js'),
		context: { posts: lessonPlans }
	})

	createPage({ // Explorations
		path: '/explorations',
		component: require.resolve('./src/templates/index.js'),
		context: { posts: explorations }
	})

	createPage({ // Drafts
		path: '/drafts',
		component: require.resolve('./src/templates/index.js'),
		context: { posts: drafts }
	})

	products.forEach(function(product) {
		let related = []
		if (product.related) {
			related = product.related.map((path) => postsHash[path])
		}
		createPage({
			path: product.path,
			component: require.resolve('./src/templates/product.js'),
			context: { product: product, related: related }
		})
	})

	posts.forEach(function(post) { // All single posts
		let related = []
		if (post.related) {
			related = post.related.map((postId) => {
				return postsHash[postId]
			})
		}
		let products = []
		if (post.product && post.product.length) {
			products = post.product.map((p) => {
				return allProducts[p] || {}
			})
		}
		createPage({ // Posts
			path: post.path,
			component: require.resolve('./src/templates/post.js'),
			context: {
				post: post,
				related: related,
				products: products
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

	drafts.forEach(function(post) { // Drafts
		let related = post.related.map((postId) => {
			return postsHash[postId]
		})
		createPage({ // Pages
			path: post.path,
			component: require.resolve('./src/templates/post.js'),
			context: { post: post, related: related }
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
