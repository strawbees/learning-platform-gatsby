module.exports = async (graphql) => {
	return await graphql(`
query Query {
	allWordpressPost(sort: {fields: date, order: ASC}) {
		nodes {
			id: wordpress_id
			path
			slug
			title
			excerpt
			categories {
				name
			}
			featured_media {
				source_url
			}
			content
		}
	}
	allWordpressPage {
		nodes {
			wordpress_id
			path
			slug
			title
			excerpt
			featured_media {
				source_url
			}
			content
		}
	}
	allWordpressWpHeaderMenu {
		nodes {
			db_id
			menu_item_parent
			title
			url
		}
	}
	allWordpressWpFooterMenu {
		nodes {
			db_id
			menu_item_parent
			title
			url
		}
	}
	allWordpressCategory {
		nodes {
			name
			path
			description
		}
	}
	allWordpressSiteMetadata {
		nodes {
			description
			home
			name
			url
		}
	}
	allWordpressWpMedia(filter: {localFile: {extension: {nin: ["pdf"]}}}) {
		nodes {
			source_url
			localFile {
				publicURL
				# childImageSharp {
				# 	thumbnail: fluid(maxWidth: 440) {
				# 		tracedSVG
				# 		aspectRatio
				# 		src
				# 		srcSet
				# 		sizes
				# 	}
				# 	image: fluid(maxWidth: 900) {
				# 		tracedSVG
				# 		aspectRatio
				# 		src
				# 		srcSet
				# 		sizes
				# 	}
				# }
			}
		}
	}
}
`)
}
