import React from "react"
import { Container, Grid, Box } from '@material-ui/core'
import Hero from '../../components/hero.js'

function LayoutHero({
	shadeColor,
	shadeOpacity,
	bgImage,
	bgColor,
	width=6,
	align,
	children
}) {
	return (
		<Hero
			shadeColor={shadeColor}
			shadeOpacity={shadeOpacity}
			bgColor={bgColor}
			bgImage={bgImage}>
			<Box py={4}>
				<Container maxWidth="lg">
					<Grid container
						style={{minHeight: '400px'}}
						justify={align}
						alignItems="center">
						<Grid item container xs={12} md={width}>
							{children}
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Hero>
	)
}

export default LayoutHero
