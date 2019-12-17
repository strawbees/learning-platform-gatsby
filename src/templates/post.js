import React from "react"
import { Link, withPrefix } from 'gatsby'
import { Container, Grid, Box } from '@material-ui/core'
import Typography from '../components/typography'
import Palette from '../components/palette'
import Card from '../components/card'
import SEO from '../components/seo'
import LayoutMenu from './partials/layoutmenu'
import LayoutHero from './partials/layouthero_post'
import LayoutFooter from './partials/layoutfooter'
import '../globalStyles.css'
import '../utils/unregister_worker.js'
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

const IndexPage = (e) => {
	const post = e.pageContext.post
	const related = e.pageContext.related
	// And we use it here
	let body = mdToReact(post.content)
	return (
		<Grid container direction="column">
			<SEO
				title={post.title}
				description={post.description}
				image={withPrefix(post.thumbnail)}
				/>
			<Grid item><LayoutMenu /></Grid>
			<Grid item>
				<LayoutHero
					title={post.title}
					description={post.description}
					bgimage={post.header}
					/>
			</Grid>
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
				<Box pb={10}>
				<Container maxWidth="md">
				<Grid container spacing={3} direction="row" wrap="wrap" justify="flex-start">
					{ // This is so ugly :(
						(related.length) ?
						<Grid item xs={12}>
							<Typography><h1>Related content</h1></Typography>
						</Grid>
					: ''
					}
					{related.map((p, i) => {
						return (
							<Grid key={i} item xs={12} sm={6} md={4}>
								<Link to={p.path}>
									<Card
										hover
										image={withPrefix(p.thumbnail)}
										labelText={p.category}
										labelBgcolor={categoryColors[p.category]}>
										<Typography variant="card header">
											{p.title}
										</Typography>
										<Box pb={1} />
										<Typography variant="body condensed">
											{p.description}
										</Typography>
									</Card>
								</Link>
							</Grid>
						)
					})}
				</Grid>
				</Container>
				</Box>
			</Grid>
			<Grid item><LayoutFooter /></Grid>
		</Grid>
	)
}

export default IndexPage
