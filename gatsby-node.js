const getContent = require('./build-src/getContent.js')
const redirectBatch = require('./build-src/redirects.json')
const allProducts = require('./build-src/products.json')

const bridgePostsPaths = [
	'/exploration/truss-bridge-problem-solving',
	'/activity/build-a-truss-bridge',
	'/lesson-plan/city-building'
]
const steamSchoolPostsPaths = [
	'/lesson-plan/city-building',
	'/lesson-plan/geometric-world',
	'/lesson-plan/mechanical-inventions',
	'/activity/build-the-platonic-solids',
	'/activity/construct-a-sierpinski-pyramid',
	'/activity/make-a-mechanical-arm'
]
const quirkbotPostsPaths = [
	'/lesson-plan/robotic-olympics',
	'/activity/create-a-robot-racer',
	'/activity/build-a-blinking-star',
	'/activity/build-a-robotic-crane-quirkbot',
	'/activity/build-an-afraid-of-the-dark-pig',
]
const microbitPostsPaths = [
	'/lesson-plan/robotic-olympics',
	'/activity/build-a-robotic-crane-microbit'
]

exports.createPages = async function(e) {
	const createPage = e.actions.createPage
	const createRedirect = e.actions.createRedirect
	const activities = await getContent('activities')
	const lessonPlans = await getContent('lesson-plans')
	const explorations = await getContent('explorations')
	const pages = await getContent('pages')
	let drafts = []
	try {
		drafts = await getContent('draft')
	} catch (e) { console.log('no drafts') }
	const posts = [
		...lessonPlans, ...activities, ...explorations
	]
	let postsHash = {}
	posts.forEach((post) => {
		postsHash[post.path] = post
	})

	const bridgePosts = posts.filter((post) => {
		return bridgePostsPaths.indexOf(post.path) !== -1
	})
	const steamSchoolPosts = posts.filter((post) => {
		return steamSchoolPostsPaths.indexOf(post.path) !== -1
	})
	const quirkbotPosts = posts.filter((post) => {
		return quirkbotPostsPaths.indexOf(post.path) !== -1
	})
	const microbitPosts = posts.filter((post) => {
		return microbitPostsPaths.indexOf(post.path) !== -1
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

	createPage({ // Bridge kit
		path: '/product/bridges',
		component: require.resolve('./src/templates/bridge.js'),
		context: {
			posts: bridgePosts
		}
	})
	createPage({ // STEAM School kit
		path: '/product/steamschoolkit',
		component: require.resolve('./src/templates/steamschool.js'),
		context: {
			posts: steamSchoolPosts
		}
	})
	createPage({ // Quirkbot
		path: '/product/quirkbot',
		component: require.resolve('./src/templates/quirkbot.js'),
		context: {
			posts: quirkbotPosts
		}
	})
	createPage({ // Microbit
		path: '/product/microbit',
		component: require.resolve('./src/templates/microbit.js'),
		context: {
			posts: microbitPosts
		}
	})

	posts.forEach(function(post) { // All single posts
		let related = post.related.map((postId) => {
			return postsHash[postId]
		})
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
