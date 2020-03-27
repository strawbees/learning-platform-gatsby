import React from "react"
import { graphql } from 'gatsby'
import { Container, Grid, Box } from '@material-ui/core'
import SEO from '../components/seo.js'
import Typography from '../components/typography.js'
import '../globalStyles.css'

import LayoutMenu from '../templates/partials/layoutmenu'
import LayoutHero from '../templates/partials/layouthero'
import LayoutFooter from '../templates/partials/layoutfooter'

const NotFoundPage = ({ data }) => (
	<Grid container direction="column">
		<SEO
			title="Strawbees Learning"
			description="You step in the stream, but the water has moved on. This page is not here."/>
		<Grid item><LayoutMenu /></Grid>
		<Grid item>
		<LayoutHero
			width={7}
			shadeColor="#525252"
			shadeOpacity={0.5}>
			<Box
				textAlign={{xs: 'center', md: 'left'}}
				color="white"
				px={2}>
				<Typography variant="hero-h1">
					404: Page not found
				</Typography>
				<Typography variant="hero-body">
					<em>
					You step in the stream, <br/>
					but the water has moved on. <br/>
					This page is not here.
					</em>
				</Typography>
			</Box>
		</LayoutHero>
		</Grid>
		<Grid item><LayoutFooter /></Grid>
	</Grid>
)

export default NotFoundPage
