import React from "react"
import { Container, Grid, Box } from '@material-ui/core'
import Palette from '../../components/palette'
import Typography from '../../components/typography'
import Button from '../../components/button'


const CalToActionCurriculum = function(props) {
	return (
		<Box pb={4} bgcolor={Palette.lightGrey}>
			<Container maxWidth="md">
				<Grid container spacing={3} direction="row" wrap="wrap" justify="center">
					<Grid item xs={12} style={{textAlign: 'center'}}>
						<Typography>
							<h1>Curriculum Alignment</h1>
							<p>
								Are you interested in using Strawbees along with your curriculum
								standards? Get in touch with us
								at <a href="mailto:education@strawbees.com" target="_blank" rel="noopener noreferrer">education@strawbees.com</a> or
								subscribe to our newsletter to get the latest news about curriculum alignment.
							</p>
							<a href="http://eepurl.com/gU6w1b" target="_blank" rel="noopener noreferrer">
							<Button>Subscribe now!</Button>
							</a>
						</Typography>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}

export default CalToActionCurriculum
