import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import { Container, Grid, Box } from '@material-ui/core'
import Typography from '../components/typography'
import Palette from '../components/palette'
import Card from '../components/card'
import SEO from '../components/seo'
import LayoutMenu from './partials/layoutmenu'
import LayoutHero from './partials/layouthero'
import LayoutFooter from './partials/layoutfooter'
import ProductThumbnail from './partials/productthumbnail'
import '../globalStyles.css'
// import mdToReact from '../utils/mdToReact'
import blocksToReact from '../utils/blocksToReact'
import categoryColors from '../utils/categoryColors'

const PostPage = (e) => {
	const post = e.pageContext.post
	const related = e.pageContext.related || []
	const products = e.pageContext.products || []
	const graphqlMenuData = useStaticQuery(queryMenus)
	// Convert markdown to react with our own components
	let body = blocksToReact(post.content)
	return (
		<Grid container direction="column">
			<SEO
				title={post.title}
				description={post.description}
				image={post.thumbnail}
				/>
			<Grid item><LayoutMenu data={graphqlMenuData} /></Grid>
			<Grid item><LayoutHeroPost post={post} /></Grid>
			<Grid item>
				<div id="content">{body}</div>
			</Grid>
			<Grid item><LayoutFooter data={graphqlMenuData} /></Grid>
		</Grid>
	)
}

const LayoutHeroPost = function({post}) {
	return (
		<LayoutHero
			bgImage={post.header}>
			<Box p={4} style={{borderRadius: '1em'}}
				color={Palette.black}
				bgcolor="rgba(255, 255, 255, 0.85)"
				textAlign={{xs: 'center', md: 'left'}}
				>
				<Typography variant="hero-h1">
					{post.title}
				</Typography>
				<Typography variant="hero-body">
					<p>{post.description}</p>
				</Typography>
			</Box>
		</LayoutHero>
	)
}


export default PostPage

const queryMenus = graphql`
	{
		wordpress {
			allSettings {
				generalSettingsUrl
			}
			menus {
				nodes {
					slug
					menuItems {
						nodes {
							url
							label
							menuItems: childItems {
								nodes {
									url
									label
								}
							}
						}
					}
				}
			}
		}
	}
`
