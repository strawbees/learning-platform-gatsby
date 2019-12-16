import React from "react"
import { Link, withPrefix } from "gatsby"
import { Container, Grid, Box } from '@material-ui/core'
import Palette from '../components/palette.js'
import Typography from '../components/typography.js'
import Card from '../components/card.js'
import SEO from '../components/seo.js'
import config from '../../gatsby-config.js'
import '../globalStyles.css'
import '../utils/unregister_worker.js'

import LayoutMenu from './partials/layoutmenu'
import LayoutHero from './partials/layouthero_home'
import LayoutFooter from './partials/layoutfooter'
import ComingSoon from './partials/comingsoon'

const categoryColors = {
	'Activity': Palette.blue,
	'Lesson Plan': Palette.yellow,
	'Exploration': Palette.pink
}

function LayoutFeed({ posts }) {
	return (
		<Box py={4}>
			<SEO
				title="Strawbees Learning"
				image={withPrefix('/mechanicalinventions.jpg')}
				description={config.siteMetadata.description}
			/>
			<Container maxWidth="lg">
				<Grid container spacing={3} direction="row" wrap="wrap" justify="flex-start">
					{posts.map((post, i) => {
						return (
							<Grid key={i} item xs={12} sm={6} md={4}>
								<Link to={post.path}>
									<Card
										hover
										image={withPrefix(post.thumbnail)}
										labelText={post.category}
										labelBgcolor={categoryColors[post.category]}>
										<Typography variant="card header">
											{post.title}
										</Typography>
										<Box pb={1} />
										<Typography variant="body condensed">
											{post.description}
										</Typography>
									</Card>
								</Link>
							</Grid>
						)
					})}
				</Grid>
			</Container>
			<ComingSoon />
		</Box>
	)
}


const IndexPage = (e) => {
	const posts = e.pageContext.posts
	return (
		<Grid container direction="column">
			<Grid item><LayoutMenu /></Grid>
			<Grid item><LayoutHero /></Grid>
			<Grid item><LayoutFeed posts={posts} /></Grid>
			<Grid item><LayoutFooter /></Grid>
		</Grid>
	)
}

export default IndexPage
