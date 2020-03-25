module.exports = async (graphql) => {
	return await graphql(`
query Query {
	allWordpressPost {
		nodes {
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
}

`)
}
