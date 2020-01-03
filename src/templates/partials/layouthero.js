import React from "react"
import { withPrefix } from "gatsby"
import { Container, Grid, Box } from '@material-ui/core'
import Hero from '../../components/hero.js'

function LayoutHero({
	shadeColor,
	shadeOpacity,
	bgImage,
	children
}) {
	return (
		<Hero
			shadecolor={shadeColor}
			shadeopacity={shadeOpacity}
			bgimage={withPrefix(bgImage)}>
			<Box py={{xs: 4, md: 0}}>
				<Container maxWidth="lg">
					<Grid container direction="row" style={{minHeight: '400px'}}>
						<Grid item container xs={12} md={6} direction="column" justify="center">
							<Grid item>
								{children}
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
