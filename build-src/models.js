const htmlToJson = require('./htmlToJson.js')

const regex = /(<([^>]+)>)/ig
function getThumbnail(data) {
	return (
		(data.featured_media && data.featured_media.localFile)
		? (
			(data.featured_media.localFile.childImageSharp)
			? data.featured_media.localFile.childImageSharp.thumbnail
			: data.featured_media.localFile.publicURL
		)
		: (
			(data.featured_media)
			? data.featured_media.source_url
			: ''
		)
	)
}
function getHeader(data) {
	return (
		(data.featured_media && data.featured_media.localFile)
		? (
			(data.featured_media.localFile.childImageSharp)
			? data.featured_media.localFile.childImageSharp.header
			: data.featured_media.localFile.publicURL
		)
		: (
			(data.featured_media)
			? data.featured_media.source_url
			: ''
		)
	)
}
exports.getPage = function(data, images) {
	let thumbnail = getThumbnail(data)
	let header = getHeader(data)
	return {
		id: data.id,
		isFrontPage: data.path === '/',
		path: data.path,
		title: data.title,
		description: data.excerpt.replace(regex, ''),
		thumbnail: thumbnail.src,
		header: header.src,
		content: data.content,
		contentJson: htmlToJson(data.content, images)
	}
}
exports.getPost = function(data, images) {
	let category = 'Uncategorized'
	let thumbnail = getThumbnail(data)
	let header = getHeader(data)
	if (data.categories && data.categories.length) {
		category = data.categories[0].name
	}
	return {
		id: data.id,
		path: data.path,
		title: data.title,
		description: data.excerpt.replace(regex, ''),
		thumbnail: thumbnail.src,
		header: header.src,
		category: category !== 'Uncategorized' ? category : null,
		content: data.content,
		contentJson: htmlToJson(data.content, images)
	}
}
exports.getMenu = function(menu) {
	const menuModel = (m) => {
		return {
			id: m.db_id,
			url: m.url,
			label: m.title,
			menuItems: null
		}
	}
	let menuHash = menu.reduce(
		(acc, m) => {
			let parent = acc[m.menu_item_parent] || []
			parent.push(menuModel(m))
			acc[m.menu_item_parent] = parent
			return acc
		},
		{}
	)
	let result = menuHash[0].map((m) => {
		m.menuItems = menuHash[m.id]
		return m
	})
	return result
}
exports.getCategory = function(category) {
	return {
		name: category.name,
		path: category.path,
		description: category.description
	}
}
