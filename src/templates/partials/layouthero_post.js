import React from "react"
import { Container, Grid, Box } from '@material-ui/core'
import Palette from '../../components/palette.js'
import Typography from '../../components/typography.js'
import Hero from '../../components/hero.js'

function LayoutHero(props) {
	let { title, description, bgimage } = props
	return (
		<Hero bgimage={bgimage}>
			<Box py={{xs: 4, md: 0}}>
				<Container maxWidth="lg">
					<Grid container direction="row" style={{minHeight: '400px'}}>
						<Grid item container xs={12} md={6} direction="column" justify="center">
							<Grid item>
								<Box p={4} style={{borderRadius: '1em'}}
									color={Palette.black}
									bgcolor="rgba(255, 255, 255, 0.85)"
									textAlign={{xs: 'center', md: 'left'}}
									>
									<Typography variant="hero header">
										{title}
									</Typography>
									<Typography variant="hero text">
										{description}
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</Hero>
	)
}

export default LayoutHero
