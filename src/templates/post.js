import React from "react"
import { Grid, Box } from '@material-ui/core'
import Typography from '../components/typography'
import Palette from '../components/palette'
import SEO from '../components/seo'
import LayoutMenu from './partials/layoutmenu'
import LayoutHero from './partials/layouthero'
import LayoutFooter from './partials/layoutfooter'
import '../normalize.css'
import '../globalStyles.css'
import { jsonToReact } from '../utils/jsonToReact'
import categoryColors from '../utils/categoryColors'
import createMarkup from '../utils/createMarkup'
import removeHtmlTags from '../utils/removeHtmlTags'

const PostPage = (e) => {
	const post = e.pageContext.post
	const posts = e.pageContext.posts
	const headerMenu = e.pageContext.headerMenu
	const footerMenu = e.pageContext.footerMenu
	const siteMeta = e.pageContext.siteMeta
	const body = jsonToReact(post.contentJson, posts)
	return (
		<Grid container direction="column">
			<SEO
				title={`${siteMeta.name} - ${post.title}`}
				description={removeHtmlTags(post.description)}
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
			width={6}
			bgImage={post.header}>
			<Box p={4} style={{borderRadius: '1em'}}
				color={categoryColor ? Palette.white : Palette.black}
				bgcolor={categoryColor ? categoryColor : `rgba(255, 255, 255, 0.8)`}
				textAlign={{xs: 'center', md: 'left'}}
				>
				<Typography variant="hero-h1">
					{post.title}
				</Typography>
				<Box pb={1} />
				<Typography variant="hero-body">
					<div dangerouslySetInnerHTML={createMarkup(post.description)} />
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
				<Box pb={1} />
				<Typography variant="hero-body">
					<div dangerouslySetInnerHTML={createMarkup(post.description)} />
				</Typography>
			</Box>
		</LayoutHero>
	)
}


export default PostPage
