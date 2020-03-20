const fs = require('fs').promises
const resolve = require('path').resolve
const frontmatter = require('frontmatter')

module.exports = async function(contentPath) {
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
