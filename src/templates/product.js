import React from "react"
import { Container, Grid, Box, Link } from '@material-ui/core'
import { withPrefix } from "gatsby"
import SEO from '../components/seo.js'
import Typography from '../components/typography.js'
import Palette from '../components/palette.js'
import Card from '../components/card.js'
import '../globalStyles.css'

import LayoutMenu from '../templates/partials/layoutmenu'
import LayoutHero from '../templates/partials/layouthero'
import ProductCard from '../templates/partials/productcard'
import LayoutFooter from '../templates/partials/layoutfooter'
import Downloads from '../templates/partials/downloads'

import mdToReact from '../utils/mdToReact'
import categoryColors from '../utils/categoryColors'

const Product = (e) => {
	const product = e.pageContext.product
	const card = product.card || {}
	const downloads = product.downloads
	const relatedContent = e.pageContext.related || []
	const body = mdToReact(product.content)
	return (
		<Grid container direction="column">
			<SEO
				title={product.title}
				image={withPrefix(product.thumbnail)}
				description={product.description}/>
			<Grid item><LayoutMenu /></Grid>
			<Grid item>
				<LayoutHero
					bgImage={product.header}>
					<Container maxWidth="lg">
						<ProductCard
							image={withPrefix(card.image)}
							imageBg={Palette[card.imageBackground]}
							bgImage={card.backgroundImage}
							bgColor={Palette[card.backgroundColor]}
							description={product.description}
							callToAction={card.callToAction}
							linkTo={card.url}/>
					</Container>
				</LayoutHero>
			</Grid>
			<Grid item>
				<Box py={3}>
					<Container maxWidth="md">
						<Typography>
							{body}
						</Typography>
					</Container>
				</Box>
			</Grid>
			<Grid item>
				{downloads ? <Downloads files={downloads} /> : ''}
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
							{relatedContent.map((p, i) => {
								return (
									<Grid key={i} item xs={12} sm={6} md={4}>
										<Link href={p.path}>
											<Card
												hover
												image={withPrefix(p.thumbnail)}
												labelText={p.category}
												labelBgcolor={categoryColors[p.category]}>
													<Box p={3} pb={4}>
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
					</Box>
				</Container>
			</Grid>
			<Grid item><LayoutFooter /></Grid>
		</Grid>
	)
}

export default Product
