import React from "react"
import { withPrefix } from 'gatsby'
import { Container, Grid, Box } from '@material-ui/core'
import Card from '../../components/card.js'
import Palette from '../../components/palette.js'
import Typography from '../../components/typography.js'

function ComingSoon() {
	return (
		<Container maxWidth="lg">
			<Grid container spacing={3} direction="row" wrap="wrap" justify="flex-start">
				<Grid item xs={12}>
					<Box pt={6} pb={3} textAlign="center">
						<Typography variant="hero header">
							Coming soon
						</Typography>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=Lzqrrj7HSso">
						<Card
							hover
							image={withPrefix('/blinkingstar.jpg')}
							labelText="Activity"
							labelBgcolor={Palette.blue}>
							<Typography variant="card header">
								Build a Blinking Star
							</Typography>
							<Box pb={1} />
							<Typography variant="body condensed">
								Build a star and program the LEDs to blink like the night sky.
							</Typography>
						</Card>
					</a>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=k5jCdk0WESw">
						<Card
							hover
							image={withPrefix('/musicalxylophone.jpg')}
							labelText="Activity"
							labelBgcolor={Palette.blue}>
							<Typography variant="card header">
								Create a Musical Xylophone
							</Typography>
							<Box pb={1} />
							<Typography variant="body condensed">
								Construct a xylophone upcycling materials. Program the musical
								instrument and play a little melody.
							</Typography>
						</Card>
					</a>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=NjBW2pwzM-E">
						<Card
							hover
							image={withPrefix('/dancingrobot.jpg')}
							labelText="Activity"
							labelBgcolor={Palette.blue}>
							<Typography variant="card header">
								Create a Dancing Robot
							</Typography>
							<Box pb={1} />
							<Typography variant="body condensed">
								Animate a simple companion and learn more about programming and
								construction to make movement.
							</Typography>
						</Card>
					</a>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<a target="_blank" rel="noopener noreferrer" href="https://youtu.be/k5jCdk0WESw">
						<Card
							hover
							image={withPrefix('/musicalpianodrum.jpg')}
							labelText="Activity"
							labelBgcolor={Palette.blue}>
							<Typography variant="card header">
								Create a Musical Piano and Drums
							</Typography>
							<Box pb={1} />
							<Typography variant="body condensed">
								Rock out programming a simple instrument constructed with
								conductive materials and play music on the computer.
							</Typography>
						</Card>
					</a>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=A-QcsIj6WPo">
						<Card
							hover
							image={withPrefix('/afraidofthedarkpig.jpg')}
							labelText="Activity"
							labelBgcolor={Palette.blue}>
							<Typography variant="card header">
								Create an Afraid of the Dark Pig
							</Typography>
							<Box pb={1} />
							<Typography variant="body condensed">
								Construct and code a pig that is sensitive to darkness.
							</Typography>
						</Card>
					</a>
				</Grid>
				<Grid item xs={12} sm={6} md={4}>
					<a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/watch?v=GKJ0-leyCRo">
						<Card
							hover
							image={withPrefix('/rollercoaster.jpg')}
							labelText="Activity"
							labelBgcolor={Palette.blue}>
							<Typography variant="card header">
								Build a Roller Coaster
							</Typography>
							<Box pb={1} />
							<Typography variant="body condensed">
								Build a track for a ping pong ball to roll and then bring it
								back to the top with a lift.
							</Typography>
						</Card>
					</a>
				</Grid>
			</Grid>
		</Container>
	)
}

export default ComingSoon
