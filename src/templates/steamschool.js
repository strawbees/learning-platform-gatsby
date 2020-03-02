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

const SteamSchool = (e) => {
	const categoryColors = {
		'Activity': Palette.blue,
		'Lesson Plan': Palette.yellow,
		'Exploration': Palette.pink
	}
	const posts = e.pageContext.posts
	return (
		<Grid container direction="column">
			<SEO
				title="Strawbees STEAM School Kit"
				image={withPrefix('/packagesteamschoolkit.jpg')}
				description="This kit covers all Strawbees construction methods, tools and techniques to realize your project ideas!"/>
			<Grid item><LayoutMenu /></Grid>
			<Grid item>
				<LayoutHero
					bgImage="/steamschoolheader.jpg">
					<Container maxWidth="lg">
						<ProductCard
							image={withPrefix('/steamschoolkit.png')}
							bgImage={withPrefix('/steamschoolgradient.png')}
							bgColor={Palette.white}
							description="This kit covers all Strawbees construction methods, tools and techniques to realize your project ideas!"
							callToAction="BUY THE KIT"
							linkTo="https://strawbees.com/store/"/>
					</Container>
				</LayoutHero>
			</Grid>
			<Grid item>
				<Container maxWidth="md" id="content">
					<Box py={4}>
						<Grid container spacing={3} direction="row" wrap="wrap" justify="flex-start">
							<Grid item xs={12}>
								<YoutubeDisplay url="https://youtu.be/1ybWivU1rIM" />
							</Grid>
							<Grid item xs={12}>
								<Typography>
								<p>The STEAM School Kit is our biggest construction set of connectors and pipes. </p>
								<p>All Strawbees constructions can be made with this kit using a visual, color-coded system with precut lengths of pieces and along with the instructions on how to build specific projects we also provide guidance for learning how to build anything. </p>
								<p>Inside a STEAM Toolbox there is enough materials for an entire classroom of students and comes as a storage box with pull-out material trays that can be placed ready for students to get started. This kit allows many groups to build big and complex projects and for smaller groups to build even bigger and intricate projects.</p>
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Gallery>
									<ImageDisplay src={withPrefix('/geometricworld.jpg')} />
									<ImageDisplay src={withPrefix('/mechanicalinventions.jpg')} />
									<ImageDisplay src={withPrefix('/platonic.jpg')} />
									<ImageDisplay src={withPrefix('/sierpinski.jpg')} />
									<ImageDisplay src={withPrefix('/arm.jpg')} />
									<ImageDisplay src={withPrefix('/claw.jpg')} />
								</Gallery>
							</Grid>
							<Grid item xs={12}>
								<Box pt={3} pb={2} textAlign="center">
									<Typography variant="hero-h1">
										Content for this kit
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
					</Box>
				</Container>
			</Grid>
			<Grid item><LayoutFooter /></Grid>
		</Grid>
	)
}

export default SteamSchool
