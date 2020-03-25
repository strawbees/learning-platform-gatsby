import React from "react"
import { Link } from "gatsby"
import { Container, Grid, Box } from '@material-ui/core'
import Typography from '../components/typography.js'
import Card from '../components/card.js'
import SEO from '../components/seo.js'
import '../globalStyles.css'

import LayoutMenu from './partials/layoutmenu'
import LayoutHero from './partials/layouthero'
import LayoutFooter from './partials/layoutfooter'

import categoryColors from '../utils/categoryColors'

const IndexPage = (e) => {
	const posts = e.pageContext.posts
	const category = e.pageContext.category
	const headerMenu = e.pageContext.headerMenu
	const footerMenu = e.pageContext.footerMenu
	return (
		<Grid container direction="column">
			<Grid item><LayoutMenu data={headerMenu} /></Grid>
			<Grid item><LayoutIndexHero {...category} /></Grid>
			<Grid item><LayoutFeed posts={posts} /></Grid>
			<Grid item><LayoutFooter data={footerMenu} /></Grid>
		</Grid>
	)
}

function LayoutFeed({ posts }) {
	return (
		<Box py={4}>
			<SEO
				title="Strawbees Learning"
				image={'/mechanicalinventions.jpg'}
				description="Explore our virtual oasis for innovative teachers who embrace creative thinking and hands-on learning with Strawbees."
			/>
			<Container maxWidth="lg">
				<Grid container spacing={3} direction="row" wrap="wrap" justify="flex-start">
					{posts.map((post, i) => {
						return (
							<Grid key={i} item xs={12} sm={6} md={4}>
								<Link to={post.path}>
									<Card
										hover
										image={post.thumbnail}
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
	)
}
function LayoutIndexHero({ name, description }) {
	return (
		<LayoutHero
			bgColor={categoryColors[name]}
			>
			<Box
				textAlign={{xs: 'center', md: 'left'}}
				color="white"
				px={2}>
				<Typography variant="hero-h1">
					{name}
				</Typography>
				<Typography variant="hero-body">
					{description}
				</Typography>
			</Box>
		</LayoutHero>
	)
}

export default IndexPage
