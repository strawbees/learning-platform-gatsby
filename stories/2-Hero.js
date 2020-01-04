import React from 'react';
import { Box } from '@material-ui/core'
import Hero from '../src/components/hero'
import Typography from '../src/components/typography'
import Palette from '../src/components/palette'

import Image from '../static/header-sierpinski.png'

export default {
	title: 'Hero'
}

export const BackgroundColor = () => (
	<Hero bgColor={Palette.pink}><Typography>Background Color</Typography></Hero>
)
export const BackgroundImage = () => (
	<Hero bgImage={Image}><Typography>Background Image</Typography></Hero>
)
export const BlurBackgroundImage = () => (
	<Hero blur bgImage={Image}><Typography>Background Image</Typography></Hero>
)
export const ShadeBackgroundImage = () => (
	<Hero shadeColor={Palette.pink} shadeOpacity={0.5} bgImage={Image}><Typography>Background Image</Typography></Hero>
)
export const MoreLikeIt = () => (
	<Hero blur shadeColor={Palette.pink} shadeOpacity={0.5} bgImage={Image}>
		<Box px={3} pt={6} style={{color: '#FFF'}}><Typography variant="hero-h1">HEY!</Typography></Box>
		<Box px={3} pb={6} style={{color: '#FFF'}}><Typography variant="hero-body">This is more like it</Typography></Box>
	</Hero>
)
