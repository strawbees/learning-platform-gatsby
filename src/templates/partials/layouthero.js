import React from "react"
import { Container, Grid, Box } from '@material-ui/core'
import Hero from '../../components/hero.js'

function LayoutHero({
	shadeColor,
	shadeOpacity,
	bgImage,
	bgColor,
	children
}) {
	return (
		<Hero
			shadeColor={shadeColor}
			shadeOpacity={shadeOpacity}
			bgColor={bgColor}
			bgImage={bgImage}>
			<Box py={{xs: 4, md: 0}}>
				<Container maxWidth="lg">
					<Grid container direction="row" style={{minHeight: '400px'}}>
						<Grid item container xs={12} md={6} direction="column" justify="center">
							{children}
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Hero>
	)
}

export default LayoutHero
