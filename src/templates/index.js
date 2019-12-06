import React from "react"
import { Link, withPrefix } from "gatsby"
import { Container, Grid, Box } from '@material-ui/core'
import Palette from '../components/palette.js'
import Typography from '../components/typography.js'
import Card from '../components/card.js'
import SEO from '../components/seo.js'
import '../globalStyles.css'

import LayoutMenu from './partials/layoutmenu'
import LayoutHero from './partials/layouthero_home'
import LayoutFooter from './partials/layoutfooter'

const categoryColors = {
	'Activity': Palette.blue,
	'Lesson Plan': Palette.yellow,
	'Exploration': Palette.pink
}

function LayoutFeed({ posts }) {
	return (
		<Box py={4}>
			<SEO title="Strawbees Learning Platform" />
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
					<Grid xs={12}>
					<Box pt={6} pb={3} textAlign="center">
						<Typography variant="hero header">
							Comming soon
						</Typography>
					</Box>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=Lzqrrj7HSso">
							<Card
								hover
								image={withPrefix('/blinkingstar.jpg')}
								labelText="Activity"
								labelBgcolor={Palette.blue}>
								<Typography variant="card header">
									Build a Blinking Star
								</Typography>
								<Box pb={1} />
								<Typography variant="body condensed">
									Build a star and program the LEDs to blink like the night sky.
								</Typography>
							</Card>
						</a>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=A-QcsIj6WPo">
							<Card
								hover
								image={withPrefix('/afraidofthedarkpig.jpg')}
								labelText="Activity"
								labelBgcolor={Palette.blue}>
								<Typography variant="card header">
									Create an Afraid of the Dark Pig
								</Typography>
								<Box pb={1} />
								<Typography variant="body condensed">
									Construct and code a pig that is sensitive to darkness.
								</Typography>
							</Card>
						</a>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=k5jCdk0WESw">
							<Card
								hover
								image={withPrefix('/musicalxylphone.jpg')}
								labelText="Activity"
								labelBgcolor={Palette.blue}>
								<Typography variant="card header">
									Create a Musical Xylophone
								</Typography>
								<Box pb={1} />
								<Typography variant="body condensed">
									Construct a xylophone upcycling materials. Program the musical
									instrument and play a little melody.
								</Typography>
							</Card>
						</a>
					</Grid>
				</Grid>
			</Container>
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
