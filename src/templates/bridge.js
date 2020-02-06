import React from "react"
import { Container, Grid, Box, Link } from '@material-ui/core'
import { withPrefix } from "gatsby"
import SEO from '../components/seo.js'
import Typography from '../components/typography.js'
import Palette from '../components/palette.js'
import Card from '../components/card.js'
import YoutubeDisplay from '../components/youtubedisplay.js'
import '../globalStyles.css'

import LayoutMenu from '../templates/partials/layoutmenu'
import LayoutHero from '../templates/partials/layouthero'
import ProductCard from '../templates/partials/productcard'
import LayoutFooter from '../templates/partials/layoutfooter'

const Bridge = (e) => {
	const categoryColors = {
		'Activity': Palette.blue,
		'Lesson Plan': Palette.yellow,
		'Exploration': Palette.pink
	}
	const posts = e.pageContext.posts
	return (
		<Grid container direction="column">
			<SEO
				title="Strawbees Learning"
				image={withPrefix('/truss5.jpg')}
				description="With this kit you learn the basic concepts of bridge design. An engaging hands-on learning experience!"/>
			<Grid item><LayoutMenu /></Grid>
			<Grid item>
				<LayoutHero
					bgImage="/bridgekitheader.jpg">
					<Container maxWidth="lg">
						<ProductCard
							image={withPrefix('/bridgekit.png')}
							bgColor={Palette.pink}
							description="With this kit you learn the basic concepts of bridge design. An engaging hands-on learning experience!"
							callToAction="BUY THE KIT"
							linkTo="https://mkt.strawbees.com/pipeline/"/>
					</Container>
				</LayoutHero>
			</Grid>
			<Grid item>
				<Container maxWidth="lg">
					<Box py={4}>
						<Container maxWidth="lg">
							<Grid container spacing={3} direction="row" wrap="wrap" justify="flex-start">
								<Grid item xs={12}>
									<YoutubeDisplay url="https://youtu.be/pL6VYVVXdjw" />
								</Grid>
								{posts.map((post, i) => {
									return (
										<Grid key={i} item xs={12} sm={6} md={4}>
											<Link href={post.path}>
												<Card
													hover
													image={withPrefix(post.thumbnail)}
													labelText={post.category}
													labelBgcolor={categoryColors[post.category]}>
														<Box p={3} pb={4}>
															<Typography variant="card-h1">
																{post.title}
															</Typography>
															<Box pb={1} />
															<Typography variant="card-body">
																{post.description}
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
				</Container>
			</Grid>
			<Grid item><LayoutFooter /></Grid>
		</Grid>
	)
}

export default Bridge
