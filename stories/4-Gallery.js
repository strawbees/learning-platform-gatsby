import React from 'react';
import ImageDisplay from '../src/components/imagedisplay'
import Gallery from '../src/components/gallery'
import Image from '../static/mechanicalinventions.jpg'
import Image2 from '../static/connectors.jpg'
import '../src/globalStyles.css'

export default {
	title: 'Image Gallery'
}

export const BasicStyle = () => (
	<Gallery>
		<ImageDisplay src={Image} alt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
		<ImageDisplay src={Image2}  />
	</Gallery>
)
