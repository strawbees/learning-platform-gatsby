const htmlToJson = require('./htmlToJson.js')

const regex = /(<([^>]+)>)/ig
exports.getPage = function(data) {
	return {
		isFrontPage: data.path === '/',
		path: data.path,
		title: data.title,
		description: data.excerpt.replace(regex, ''),
		thumbnail: data.featured_media ? data.featured_media.source_url : '',
		header: data.featured_media ? data.featured_media.source_url : '',
		content: data.content,
		contentJson: htmlToJson(data.content)
	}
}
exports.getPost = function(data) {
	let category = 'Uncategorized'
	if (data.categories && data.categories.length) {
		category = data.categories[0].name
	}
	return {
		path: data.path,
		title: data.title,
		description: data.excerpt.replace(regex, ''),
		thumbnail: data.featured_media ? data.featured_media.source_url : '',
		header: data.featured_media ? data.featured_media.source_url : '',
		category: category !== 'Uncategorized' ? category : null,
		content: data.content,
		contentJson: htmlToJson(data.content)
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
