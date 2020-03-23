// HACK: Remove html tags
const regex = /(<([^>]+)>)/ig
const postModel = (post) => {
	const thumbnail = post.featuredImage || {}
	let categories = []
	if (post.categories && post.categories.nodes) {
		categories = post.categories.nodes.map(node => node.name)
	}
	return {
		path: post.uri,
		title: post.title,
		description: post.excerpt.replace(regex, ""),
		thumbnail: thumbnail.mediaItemUrl,
		header: thumbnail.mediaItemUrl,
		category: categories[0] !== 'Uncategorized' ? categories[0] : null,
		content: post.blocksJSON
	}
}
const pageModel = (page) => {
	const thumbnail = page.featuredImage || {}
	return {
		isFrontPage: page.isFrontPage,
		path: page.uri,
		title: page.title,
		description: page.excerpt.replace(regex, ""),
		thumbnail: thumbnail.mediaItemUrl,
		header: thumbnail.mediaItemUrl,
		content: page.blocksJSON
	}
}

exports.getPosts = async (graphql) => {
	const postsQuery = await graphql(`
	{
		wordpress {
			posts {
				nodes {
					title
					excerpt
					uri
					categories {
						nodes {
							name
						}
					}
					featuredImage {
						altText
						mediaItemUrl
					}
					blocksJSON
				}
			}
		}
	}
	`)
	return postsQuery.data.wordpress.posts.nodes.map(postModel)
}

exports.getPages = async (graphql) => {
	const pagesQuery = await graphql(`
	{
		wordpress {
			pages {
				nodes {
					isFrontPage
					title
					excerpt
					uri
					featuredImage {
						altText
						mediaItemUrl
					}
					blocksJSON
				}
			}
		}
	}
	`)
	return pagesQuery.data.wordpress.pages.nodes.map(pageModel)
}

exports.getCategories = async (graphql) => {
	const categoriesQuery = await graphql(`
		{
			wordpress {
				categories {
					edges {
						node {
							id
							name
							uri
							description
						}
					}
				}
			}
		}
	`)
	return categoriesQuery.data.wordpress.categories.edges.map(edge => edge.node)
}
