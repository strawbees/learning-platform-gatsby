import React from 'react';
import { Box, Grid, Link } from '@material-ui/core'
import Card from '../src/components/card'
import Typography from '../src/components/typography'
import Button from '../src/components/button'
import Palette from '../src/components/palette'
import Image from '../static/mechanicalinventions.jpg'
import ProductImage from '../static/bridgekit.png'
import GradientImage from '../static/steamschoolgradient.svg'

export default {
	title: 'Card'
}

export const WithoutImage = () => (
	<Card>
		<Box p={3}>
			<Typography variant="card-h1">Card title</Typography>
			<Typography variant="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
		</Box>
	</Card>
)
export const WithImage = () => (
	<Card image={Image}>
		<Box p={3}>
			<Typography variant="card-h1">Card title</Typography>
			<Typography variant="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
		</Box>
	</Card>
)
export const WithLargeImage = () => (
	<Card variant="large-image" image={Image}>
		<Box p={3}>
			<Typography variant="card-h1">Card title</Typography>
			<Typography variant="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
		</Box>
	</Card>
)
export const WithColor = () => (
	<Card bgColor={Palette.blue} variant="large-image" image={Image}>
		<Box p={3}>
			<Typography variant="card-body">Awesome product with a...</Typography><br/>
			<Typography variant="card-h1">Killer Name</Typography>
		</Box>
	</Card>
)
export const Hovering = () => (
	<Card hover bgColor={Palette.blue} variant="large-image" image={Image}>
		<Box p={3}>
			<Typography variant="card-body">Awesome product with a...</Typography><br/>
			<Typography variant="card-h1">Killer Name</Typography>
		</Box>
	</Card>
)
export const WithLabel = () => (
	<div>
		<Card bgColor={Palette.blue} labelText="NEW" labelBgcolor={Palette.green} variant="large-image" image={Image}>
			<Box p={3}>
				<Typography variant="card-body">Fresh product with a...</Typography><br/>
				<Typography variant="card-h1">Killer Name</Typography>
			</Box>
		</Card>
		<br />
		<Card labelText="LEARN" labelBgcolor={Palette.pink} image={Image}>
			<Box p={3}>
				<Typography variant="card-h1">Learn really cool stuff</Typography>
				<Typography variant="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography><br/>
			</Box>
		</Card>
	</div>
)
export const OnAResponsiveGrid = () => (
	<Grid container spacing={3} direction="row" wrap="wrap" justify="flex-start">
		<Grid item xs={12} sm={6}>
			<Link href="/?path=/story/card--hovering" target="_blank">
				<Card hover bgColor={Palette.pink} labelText="NEW" labelBgcolor={Palette.green} variant="large-image" image={Image}>
					<Box p={3}>
						<Typography variant="card-body">Fresh product with a...</Typography><br/>
						<Typography variant="card-h1">Killer Name</Typography>
					</Box>
				</Card>
			</Link>
		</Grid>
		<Grid item xs={12} sm={6}>
			<Link href="/?path=/story/card--hovering" target="_blank" style={{color: Palette.black}}>
				<Card hover labelText="LEARN" labelBgcolor={Palette.yellow} image={Image}>
					<Box p={3}>
						<Typography variant="card-h1">Learn really cool stuff</Typography>
						<Typography variant="card-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography><br/>
					</Box>
				</Card>
			</Link>
		</Grid>
	</Grid>
)
export const ProductHero = () => (
	<Card bgColor={Palette.pink} variant="product" image={ProductImage}>
		<Box p={3}>
			<Box position="relative">
				<Box px={3}>
					<Typography variant="hero-body">
						With this kit you learn the basic concepts of lorem ipsum. An
						engaging hands-on learning experience!
					</Typography>
				</Box>
				<Box textAlign="right" pt={1}>
					<Link href="https://strawbees.com/store" target="_blank">
						<Button bold icon="buy" foregroundColor="white" backgroundColor="black">
							BUY KIT
						</Button>
					</Link>
				</Box>
			</Box>
		</Box>
	</Card>
)
export const ProductHeroWithDifferentBackground = () => (
	<Card bgColor={Palette.pink} variant="product" image={ProductImage} imageBg={Pallete.darkGrey}>
		<Box p={3}>
			<Box position="relative">
				<Box px={3}>
					<Typography variant="hero-body">
						With this kit you learn the basic concepts of lorem ipsum. An
						engaging hands-on learning experience!
					</Typography>
				</Box>
				<Box textAlign="right" pt={1}>
					<Link href="https://strawbees.com/store" target="_blank">
						<Button bold icon="buy" foregroundColor="white" backgroundColor="black">
							BUY KIT
						</Button>
					</Link>
				</Box>
			</Box>
		</Box>
	</Card>
)
export const BackgroundImage = () => (
	<Card bgImage={GradientImage} bgColor={Palette.white}>
		<Box p={3}>
			<Box position="relative">
				<Box px={3}>
					<Typography variant="hero-body">
						With this kit you learn the basic concepts of lorem ipsum. An
						engaging hands-on learning experience!
					</Typography>
				</Box>
				<Box textAlign="right" pt={1}>
					<Link href="https://strawbees.com/store" target="_blank">
						<Button bold icon="buy" foregroundColor="white" backgroundColor="black">
							BUY KIT
						</Button>
					</Link>
				</Box>
			</Box>
		</Box>
	</Card>
)
