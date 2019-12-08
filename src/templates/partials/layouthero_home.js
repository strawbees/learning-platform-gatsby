import React from "react"
import { withPrefix } from "gatsby"
import { Container, Grid, Box } from '@material-ui/core'
import Typography from '../../components/typography.js'
import Hero from '../../components/hero.js'
import config from '../../../gatsby-config.js'

function LayoutHero() {
	return (
		<Hero shadecolor="#525252" shadeopacity={0.5} bgimage={withPrefix("/homepageheader.jpg")}>
			<Box py={{xs: 4, md: 0}}>
				<Container maxWidth="lg">
					<Grid container direction="row" style={{minHeight: '400px'}}>
						<Grid item container xs={12} md={6} direction="column" justify="center">
							<Grid item>
								<Box
									textAlign={{xs: 'center', md: 'left'}}
									color="white"
									px={2}>
									<Typography variant="hero scream">
										Welcome to the Learning Platform
									</Typography>
									<Typography variant="hero text">
										<p>{config.siteMetadata.description}</p>
									</Typography>
								</Box>
							</Grid>
						</Grid>
						<Grid item container xs={12} md={6} direction="column" justify="flex-end"></Grid>
					</Grid>
				</Container>
			</Box>
		</Hero>
	)
}

export default LayoutHero
