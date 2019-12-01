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

exports.createPages = async function(e) {
	const createPage = e.actions.createPage
	const activities = await getContent('activities')
	const lessonPlans = await getContent('lesson-plans')
	const pages = await getContent('pages')
	const posts = lessonPlans.concat(activities)

	createPage({
		path: '/',
		component: require.resolve('./src/templates/index.js'),
		context: { posts: posts }
	})

	posts.forEach(function(post) {
		createPage({
			path: post.path,
			component: require.resolve('./src/templates/post.js'),
			context: { post: post }
		})
	})

	pages.forEach(function(post) {
		createPage({
			path: post.path,
			component: require.resolve('./src/templates/post.js'),
			context: { post: post }
		})
	})
}
