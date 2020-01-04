import React from 'react';
import ImageDisplay from '../src/components/imagedisplay'
import Image from '../static/mechanicalinventions.jpg'

export default {
	title: 'Image Display'
}

export const BasicStyle = () => (
	<ImageDisplay src={Image}  />
)
export const WithTextOver = () => (
	<ImageDisplay src={Image} alt="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
)
