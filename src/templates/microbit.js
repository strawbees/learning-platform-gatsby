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

import categoryColors from '../utils/categoryColors'

const Microbit = (e) => {
	const posts = e.pageContext.posts
	return (
		<Grid container direction="column">
			<SEO
				title="Robotic Inventions for the micro:bit"
				image={withPrefix('/packagemicrobit.jpg')}
				description="You can build and code robots that move! This kit integrates the micro:bit using the playful world of Strawbees construction to add robotic capabilities."/>
			<Grid item><LayoutMenu /></Grid>
			<Grid item>
				<LayoutHero
					bgImage="/microbitheader.jpg"
					shadeColor={Palette.darkGrey}
					shadeOpacity={0.3}>
					<Container maxWidth="lg">
						<ProductCard
							image={withPrefix('/microbit.png')}
							imageBg={Palette.darkGrey}
							bgColor={Palette.microbit}
							description="You can build and code robots that move! This kit integrates the micro:bit using the playful world of Strawbees construction to add robotic capabilities."
							callToAction="BUY THE KIT"
							linkTo="https://mkt.strawbees.com/pipeline/"/>
					</Container>
				</LayoutHero>
			</Grid>
			<Grid item>
				<Container maxWidth="md" id="content">
					<Box py={4}>
						<Grid container spacing={3} direction="row" wrap="wrap" justify="flex-start">
							<Grid item xs={12}>
								<YoutubeDisplay url="https://youtu.be/AB03ls2V_Tg" />
							</Grid>
							<Grid item xs={12}>
								<Typography>
									<p>A classroom set of boards to snap electronics together with Strawbees structures and program servo motors with the Micro:bit. Write in MakeCode’s block-based programming platform, upload a program and remove from the computer to run on batteries. </p>
									<p>As an add-on kit, this requires the purchase of another Strawbees product for building with construction pipes and connectors.</p>
									<p>This does not include the Micro:bit, USB cable, or batteries.</p>
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Gallery>
									<ImageDisplay src={withPrefix('/roboticcranemicrobit1.jpg')} />
									<ImageDisplay src={withPrefix('/roboticcranemicrobit.jpg')} />
								</Gallery>
							</Grid>
							<Grid item xs={12}>
								<Box pt={3} pb={2} textAlign="center">
									<Typography variant="hero-h2">
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

export default Microbit
