const fixLinks = (object, options) => {
	const cmsUrl = options.cmsUrl
	const siteUrl = options.siteUrl
	Object.keys(object).forEach((key) => {
		if (typeof object[key] === 'string') {
			object[key] = object[key].replace(cmsUrl, siteUrl)
		}
	})
	
}

module.exports = fixLinks
