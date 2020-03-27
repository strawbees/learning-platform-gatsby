import React from "react"
import { Grid, Box } from '@material-ui/core'
import Typography from '../components/typography'
import Palette from '../components/palette'
import SEO from '../components/seo'
import LayoutMenu from './partials/layoutmenu'
import LayoutHero from './partials/layouthero'
import LayoutFooter from './partials/layoutfooter'
import '../globalStyles.css'
import { jsonToReact } from '../utils/jsonToReact'
import categoryColors from '../utils/categoryColors'

const PostPage = (e) => {
	const post = e.pageContext.post
	const headerMenu = e.pageContext.headerMenu
	const footerMenu = e.pageContext.footerMenu
	const siteMeta = e.pageContext.siteMeta
	let body = jsonToReact(post.contentJson, siteMeta)
	return (
		<Grid container direction="column">
			<SEO
				title={`${siteMeta.name} - ${post.title}`}
				description={post.description}
				image={post.thumbnail}
				/>
			<Grid item><LayoutMenu menuItems={headerMenu} siteMeta={siteMeta} /></Grid>
			<Grid item>
				{post.isFrontPage
					? <LayoutHeroFrontPage post={post} />
					: <LayoutHeroPost post={post} />
				}
			</Grid>
			<Grid item>
				<div id="content">{body}</div>
			</Grid>
			<Grid item><LayoutFooter menuItems={footerMenu} siteMeta={siteMeta} /></Grid>
		</Grid>
	)
}

const LayoutHeroPost = function({post}) {
	let categoryColor = categoryColors[post.category]
	return (
		<LayoutHero
			bgImage={post.header}>
			<Box p={4} style={{borderRadius: '1em'}}
				color={categoryColor ? Palette.white : Palette.black}
				bgcolor={categoryColor ? categoryColor : `rgba(255, 255, 255, 0.8)`}
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
const LayoutHeroFrontPage = function({post}) {
	return (
		<LayoutHero
			width={6}
			shadeColor={Palette.darkGrey}
			shadeOpacity={0.4}
			bgImage={post.header}>
			<Box py={4} style={{borderRadius: '1em'}}
				color={Palette.white}
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
