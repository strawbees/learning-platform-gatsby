const getContent = require('./build-src/getContent.js')
const redirectBatch = require('./build-src/redirects.json')

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

	posts.forEach(function(post) { // All single posts
		let related = post.related.map((postId) => {
			return postsHash[postId]
		})
		createPage({ // Posts
			path: post.path,
			component: require.resolve('./src/templates/post.js'),
			context: {
				post: post,
				related: related,
				product: post.product
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
