import React from "react"
import { Container, Grid, Box } from '@material-ui/core'
import SEO from '../components/seo.js'
import Typography from '../components/typography.js'
import '../globalStyles.css'

import LayoutMenu from '../templates/partials/layoutmenu'
import LayoutHero from '../templates/partials/layouthero_home'
import LayoutFooter from '../templates/partials/layoutfooter'

const NotFoundPage = () => (
	<Grid container direction="column">
		<SEO title="Strawbees Learning" />
		<Grid item><LayoutMenu /></Grid>
		<Grid item><LayoutHero /></Grid>
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
