const regex = /(<([^>]+)>)/ig
exports.getPage = function(data) {
	return {
		path: data.path,
		title: data.title,
		description: data.excerpt.replace(regex, ''),
		thumbnail: data.featured_media ? data.featured_media.source_url : '',
		header: data.featured_media ? data.featured_media.source_url : '',
		content: data.content
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
		content: data.content
	}
}
