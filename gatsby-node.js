const frontmatter = require('frontmatter')
const fs = require('fs').promises
const resolve = require('path').resolve

async function getContent(contentPath) {
	let activityDir = resolve('./content', contentPath)
	let dir = await fs.readdir(activityDir)
	let filesPromise = dir.map(async (path) => {
		return await fs.readFile(resolve(activityDir, path), 'utf8')
	})
	let files = await Promise.all(filesPromise)

	let parsedMd = files.map((file) => {
		return frontmatter(file)
	})
	return parsedMd.map((md) => {
		return { content: md.content, ...md.data }
	})
}

const redirectBatch = [
	{
		f: `/post/build-the-platonic-solids`,
		t: `/activity/build-the-platonic-solids`
	},
	{
		f: `/post/city-building`,
		t: `/lesson-plan/city-building`
	},
	{
		f: `/post/build-a-truss-bridge`,
		t: `/activity/build-a-truss-bridge`
	},
	{
		f: `/post/create-a-robot-racer`,
		t: `/activity/create-a-robot-racer`
	},
	{
		f: `/post/robotic-olympics`,
		t: `/lesson-plan/robotic-olympics`
	},
	{
		f: `/post/build-a-stacking-tower`,
		t: `/activity/build-a-stacking-tower`
	},
	{
		f: `/post/geometric-world`,
		t: `/lesson-plan/geometric-world`
	},
	{
		f: `/post/fractals`,
		t: `/activity/construct-a-sierpinski-pyramid`
	},
	{
		f: `/post/construct-a-sierpinski-pyramid`,
		t: `/activity/construct-a-sierpinski-pyramid`
	},
	{
		f: `/post/make-a-mechanical-arm`,
		t: `/activity/make-a-mechanical-arm`
	},
	{
		f: `/post/build-a-mechanical-crane`,
		t: `/activity/build-a-mechanical-crane`
	},
	{
		f: `/post/build-a-catapult`,
		t: `/activity/build-a-catapult`
	},
	{
		f: `/post/build-a-mechanical-claw`,
		t: `/activity/build-a-mechanical-claw`
	},
	{
		f: `/page/about`,
		t: `/about`
	},
]

exports.createPages = async function(e) {
	const createPage = e.actions.createPage
	const createRedirect = e.actions.createRedirect
	const activities = await getContent('activities')
	const lessonPlans = await getContent('lesson-plans')
	const explorations = await getContent('explorations')
	const pages = await getContent('pages')
	const posts = [
		...lessonPlans, ...activities, ...explorations
	]
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

	posts.forEach(function(post) {
		let related = post.related.map((postId) => {
			return postsHash[postId]
		})
		createPage({ // Posts
			path: post.path,
			component: require.resolve('./src/templates/post.js'),
			context: { post: post, related: related }
		})
	})

	pages.forEach(function(post) {
		createPage({ // Pages
			path: post.path,
			component: require.resolve('./src/templates/post.js'),
			context: { post: post }
		})
	})

	redirectBatch.forEach(function(redirect) {
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
