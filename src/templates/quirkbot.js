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
import Downloads from '../templates/partials/downloads'

const Quirkbot = (e) => {
	const categoryColors = {
		'Activity': Palette.blue,
		'Lesson Plan': Palette.yellow,
		'Exploration': Palette.pink
	}
	const downloads = [
		{ name: 'Getting Started with Quirkbot', path: '/quirkbotonboarding.pdf' },
		{ name: 'Coding Cards', path: '/codingcards/QuirkbotBlockCodingCards.pdf' },
		{ name: 'CODE Programming Interface', path: 'https://code.strawbees.com/download' }
	]
	const posts = e.pageContext.posts
	return (
		<Grid container direction="column">
			<SEO
				title="Coding & Robotics with the quirkbot"
				image={withPrefix('/packagequirkbot.jpg')}
				description="Make a quirky robot out of anything! Transform your Strawbees projects into interactive robots using electronic construction pieces with Quirkbot."/>
			<Grid item><LayoutMenu /></Grid>
			<Grid item>
				<LayoutHero
					bgImage="/quirkbotheader.jpg"
					shadeColor={Palette.darkGrey}
					shadeOpacity={0.3}>
					<Container maxWidth="lg">
						<ProductCard
							image={withPrefix('/quirkbot.png')}
							imageBg={Palette.darkGrey}
							bgColor={Palette.quirkbot}
							description="Make a quirky robot out of anything! Transform your Strawbees projects into interactive robots using electronic construction pieces with Quirkbot."
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
								<YoutubeDisplay url="https://youtu.be/_WA5Fh4a28g" />
							</Grid>
							<Grid item xs={12}>
								<Typography>
									<p>Transform your Strawbees projects into interactive robots! Using electronic construction pieces, you can program them to life them with Quirkbot. Design linkages and geometric structures make ideal bases for a robot's body or mechanical object.</p>
									<p>Connect to the computer, code, and upload a program to tell it to move, blink or both! Make a walker, a blinking star, or a pig shake in fear when it senses darkness. </p>
									<p>With the Coding and Robotics kit, you can learn how to program in three different ways: ﬂow, block, and text for all levels of experience. View our programming interface at code.strawbees.com</p>
								</Typography>
							</Grid>
							<Grid item xs={12}>
								<Gallery>
									<ImageDisplay src={withPrefix('/robotracer.jpg')} />
									<ImageDisplay src={withPrefix('/robotracer2.jpg')} />
									<ImageDisplay src={withPrefix('/robotracer10.jpg')} />
									<ImageDisplay src={withPrefix('/robotracer8.jpg')} />
									<ImageDisplay src={withPrefix('/roboticolympics.jpg')} />
									<ImageDisplay src={withPrefix('/roboticcranequirkbot.jpg')} />
									<ImageDisplay src={withPrefix('/blinkingstar2.jpg')} />
									<ImageDisplay src={withPrefix('/blinkingstar4.jpg')} />
									<ImageDisplay src={withPrefix('/pig.jpg')} />
								</Gallery>
							</Grid>
						</Grid>
					</Box>
				</Container>
			</Grid>
			<Grid item>
				<Downloads files={downloads} />
			</Grid>
			<Grid item>
				<Container maxWidth="md" id="content">
					<Box py={4}>
						<Grid container spacing={3} direction="row" wrap="wrap" justify="flex-start">
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

export default Quirkbot
