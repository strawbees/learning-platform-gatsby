import React from "react"
import { Container, Grid, Box, Link } from '@material-ui/core'
import { withPrefix } from "gatsby"
import SEO from '../components/seo.js'
import Typography from '../components/typography.js'
import Palette from '../components/palette.js'
import Card from '../components/card.js'
import Gallery from '../components/gallery.js'
import ImageDisplay from '../components/imagedisplay.js'
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
				title="Strawbees Classroom Experience: Bridges"
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
				<Container maxWidth="lg" id="content">
					<Box py={4}>
						<Container maxWidth="md">
							<Grid container spacing={3} direction="row" wrap="wrap" justify="flex-start">
								<Grid item xs={12}>
									<YoutubeDisplay url="https://youtu.be/9z9ubPyJG2E" />
								</Grid>
								<Grid item xs={12}>
									<Typography>
										<p>Construct bridges from a small truss design to a strong, large-scale construction collectively made together as a classroom. </p>
										<p>Learn how to strengthen structures by triangulation and design an environment for where your bridge is based. The Strawbees Classroom Experience thematic kits are designed to encourage student collaboration in activities as they start with their individual kits and combine their projects with other student projects to accomplish challenges and expand construction builds together as a classroom. </p>
										<p>Comes as a box with 20 student kits inside, plus a teachers kit and a spare parts kit.</p>
									</Typography>
								</Grid>
								<Grid item xs={12}>
									<Gallery>
										<ImageDisplay src={withPrefix('/truss.jpg')} />
										<ImageDisplay src={withPrefix('/truss2.jpg')} />
										<ImageDisplay src={withPrefix('/truss3.jpg')} />
										<ImageDisplay src={withPrefix('/truss6.jpg')} />
										<ImageDisplay src={withPrefix('/trussproblemsolving.jpg')} />
										<ImageDisplay src={withPrefix('/trussproblemsolving43.jpg')} />
									</Gallery>
								</Grid>
								<Grid item xs={12}>
									<Box pt={3} pb={2} textAlign="center">
										<Typography variant="hero-h1">
											Related Content
										</Typography>
									</Box>
								</Grid>
								<Grid item xs={12}>
									<Typography>
										<p>At Strawbees we recognize each classroom is unique and that is why we offer a range of equally excellent products and content, balancing personalization and structure without compromising quality.</p>
										<p>You will have access to a full range of <Link href="/lesson-plans">Lesson Plans</Link>, <Link href="/activities">Activities</Link> and <Link href="/explorations">Explorations</Link> as well as different ways to navigate through it, highlighting different learning strategies and expected outcomes.</p>
										<p>Read more about <Link href="/how-to-use-strawbees-in-your-classroom/">how to use Strawbees in your classroom</Link>.</p>
									</Typography>
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
