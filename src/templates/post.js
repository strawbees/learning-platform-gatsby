import React from "react"
import { Link, withPrefix } from 'gatsby'
import { Container, Grid, Box } from '@material-ui/core'
import Typography from '../components/typography'
import Button from '../components/button'
import Palette from '../components/palette'
import Card from '../components/card'
import SEO from '../components/seo'
import LayoutMenu from './partials/layoutmenu'
import LayoutHero from './partials/layouthero'
import LayoutFooter from './partials/layoutfooter'
import '../globalStyles.css'
/*
Because the humans didn't write javascript we can't use it on `gatsby-node.js`
so we have to add this here instead. :facepalm:
*/
import mdToReact from '../utils/mdToReact'

const categoryColors = {
	'Activity': Palette.blue,
	'Lesson Plan': Palette.yellow,
	'Exploration': Palette.pink
}

const PostPage = (e) => {
	const post = e.pageContext.post
	const related = e.pageContext.related || []
	// Convert markdown to react with our own components
	let body = mdToReact(post.content)
	return (
		<Grid container direction="column">
			<SEO
				title={post.title}
				description={post.description}
				image={withPrefix(post.thumbnail)}
				/>
			<Grid item><LayoutMenu /></Grid>
			<Grid item><LayoutHeroPost post={post} /></Grid>
			<Grid item>
				<Box py={3}>
					<Container maxWidth="md">
						<div id="content">
							<Typography>
								{body}
							</Typography>
						</div>
					</Container>
				</Box>
			</Grid>
			<Grid item>
			{post.downloads ? <Downloads files={post.downloads} /> : ''}
			</Grid>
			<Grid item>
				{post.related ? <RelatedContent posts={related} /> : ''}
			</Grid>
			<Grid item><LayoutFooter /></Grid>
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
const RelatedContent = function(props) {
	return (
		<Box py={6}>
			<Container maxWidth="md">
				<Grid container spacing={3} direction="row" wrap="wrap" justify="flex-start">
					<Grid item xs={12}>
						<Typography><h1>Related content</h1></Typography>
					</Grid>
					{props.posts.map((p, i) => {
						return (
							<Grid key={i} item xs={12} sm={6} md={4}>
								<Link to={p.path}>
									<Card
										hover
										image={withPrefix(p.thumbnail)}
										labelText={p.category}
										labelBgcolor={categoryColors[p.category]}>
										<Box p={3}>
											<Typography variant="card-h1">
												{p.title}
											</Typography>
											<Box pb={1} />
											<Typography variant="card-body">
												{p.description}
											</Typography>
										</Box>
									</Card>
								</Link>
							</Grid>
						)
					})}
				</Grid>
			</Container>
		</Box>
	)
}
const Downloads = function(props) {
	return (
		<Box pb={4} bgcolor={Palette.lightGrey}>
			<Container maxWidth="md">
				<Grid container spacing={3} direction="row" wrap="wrap" justify="center">
					<Grid item xs={12} style={{textAlign: 'center'}}>
						<Typography>
							<h1>Downloads</h1>
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
						{props.files.map((file, i) => {
							return (
								<Box m={1}>
									<a href={file.path} target="_blank" rel="noopener noreferrer">
										<Button icon="download">{file.name}</Button>
									</a>
								</Box>
							)
						})}
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}


export default PostPage
