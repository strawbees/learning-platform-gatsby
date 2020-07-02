const thumbnail = `
thumbnail: fluid(maxWidth: 420, quality: 100) {
	aspectRatio
	src
	srcSet
	sizes
}
`
const header = `
header: fluid(maxWidth: 3840, quality: 100) {
	aspectRatio
	src
	srcSet
	sizes
}
`
const content = `
content: fluid(maxWidth: 900, quality: 100) {
	aspectRatio
	src
	srcSet
	sizes
}
`

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
			tags {
				name
			}
			featured_media {
				source_url
				localFile {
					publicURL
					childImageSharp {
						${thumbnail}
						${header}
					}
				}
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
				localFile {
					publicURL
					childImageSharp {
						${thumbnail}
						${header}
					}
				}
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
	allWordpressWpMedia {
		nodes {
			source_url
			localFile {
				publicURL
				childImageSharp {
					${content}
				}
			}
		}
	}
}
`)
}
