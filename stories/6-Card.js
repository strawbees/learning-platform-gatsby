import React from 'react';
import { Grid, Link } from '@material-ui/core'
import Card from '../src/components/card'
import Typography from '../src/components/typography'
import Palette from '../src/components/palette'
import Image from '../static/mechanicalinventions.jpg'

export default {
	title: 'Card'
}

export const WithoutImage = () => (
	<Card>
		<Typography variant="card-h1">Card title</Typography>
		<Typography variant="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
	</Card>
)
export const WithImage = () => (
	<Card image={Image}>
		<Typography variant="card-h1">Card title</Typography>
		<Typography variant="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
	</Card>
)
export const WithLargeImage = () => (
	<Card variant="large-image" image={Image}>
		<Typography variant="card-h1">Card title</Typography>
		<Typography variant="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
	</Card>
)
export const WithColor = () => (
	<Card bgColor={Palette.pink} variant="large-image" image={Image}>
		<Typography variant="card-body">Awesome product with a...</Typography><br/>
		<Typography variant="card-h1">Killer Name</Typography>
	</Card>
)
export const Hovering = () => (
	<Card hover bgColor={Palette.pink} variant="large-image" image={Image}>
		<Typography variant="card-body">Awesome product with a...</Typography><br/>
		<Typography variant="card-h1">Killer Name</Typography>
	</Card>
)
export const WithLabel = () => (
	<div>
		<Card bgColor={Palette.pink} labelText="NEW" labelBgcolor={Palette.green} variant="large-image" image={Image}>
			<Typography variant="card-body">Fresh product with a...</Typography><br/>
			<Typography variant="card-h1">Killer Name</Typography>
		</Card>
		<br />
		<Card labelText="ACTIVITY" labelBgcolor={Palette.blue} image={Image}>
			<Typography variant="card-h1">Learn really cool stuff</Typography>
			<Typography variant="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography><br/>
		</Card>
	</div>
)
export const OnAResponsiveGrid = () => (
	<Grid container spacing={3} direction="row" wrap="wrap" justify="flex-start">
		<Grid item xs={12} sm={6}>
			<Link href="/?path=/story/card--hovering">
				<Card hover bgColor={Palette.pink} labelText="NEW" labelBgcolor={Palette.green} variant="large-image" image={Image}>
					<Typography variant="card-body">Fresh product with a...</Typography><br/>
					<Typography variant="card-h1">Killer Name</Typography>
				</Card>
			</Link>
		</Grid>
		<Grid item xs={12} sm={6}>
			<Link href="/?path=/story/card--hovering" style={{color: Palette.black}}>
				<Card hover labelText="ACTIVITY" labelBgcolor={Palette.blue} image={Image}>
					<Typography variant="card-h1">Learn really cool stuff</Typography>
					<Typography variant="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography><br/>
				</Card>
			</Link>
		</Grid>
	</Grid>
)
