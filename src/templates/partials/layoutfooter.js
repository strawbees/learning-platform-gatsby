import React from "react"
import { Container, Grid, Box } from '@material-ui/core'
import Palette from '../../components/palette.js'
import Typography from '../../components/typography.js'
import StrawbeesLogo from '../../images/learninglogowhite.svg'

function LayoutFooter() {
	return (
		<Box
			py={8}
			textAlign={{xs:'center', md:'left'}}
			bgcolor={Palette.darkGrey}
			color={Palette.white}
			>
			<Container>
				<Grid container spacing={2} direction="row" justify="space-between">
					<Grid item xs={12}>
						<Box textAlign="center">
						<p>
							<img src={StrawbeesLogo} width="200" alt="Strawbees Logo" />
						</p>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<Box textAlign="center">
								<p>
									<Typography>
										Strawbees AB, Stenkolsgatan 1B, 417 07 Gothenburg, Sweden.
									</Typography>
								</p>
								<p>
									<Typography>
										©2019 STRAWBEES. All rights reserved
									</Typography>
								</p>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}

export default LayoutFooter
