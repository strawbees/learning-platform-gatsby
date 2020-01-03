import React from "react"
import { Container, Grid, Box } from '@material-ui/core'
import SEO from '../components/seo.js'
import Typography from '../components/typography.js'
import '../globalStyles.css'

import LayoutMenu from '../templates/partials/layoutmenu'
import LayoutHero from '../templates/partials/layouthero'
import LayoutFooter from '../templates/partials/layoutfooter'

const NotFoundPage = () => (
	<Grid container direction="column">
		<SEO
			title="Strawbees Learning"
			description="You step in the stream, but the water has moved on. This page is not here."/>
		<Grid item><LayoutMenu /></Grid>
		<Grid item>
		<LayoutHero
			shadeColor="#525252"
			shadeOpacity={0.5}
			bgImage="/homepageheader.jpg">
			<Box
				textAlign={{xs: 'center', md: 'left'}}
				color="white"
				px={2}>
				<Typography variant="hero-h1">
					Welcome to Strawbees Learning
				</Typography>
				<Typography variant="hero-body">
					<p>Explore our virtual oasis for innovative teachers who embrace creative thinking and hands-on learning with Strawbees.</p>
				</Typography>
			</Box>
		</LayoutHero>
		</Grid>
		<Grid item>
			<Box py={4} textAlign="center">
				<Container maxWidth="lg">
					<p>
						<Typography variant="content-h1">
							404: Page not found
						</Typography>
					</p>
					<p>
						<Typography>
							<em>
								You step in the stream, <br/>
								but the water has moved on. <br/>
								This page is not here.
							</em>
						</Typography>
					</p>
				</Container>
			</Box>
		</Grid>
		<Grid item><LayoutFooter /></Grid>
	</Grid>
)

export default NotFoundPage
