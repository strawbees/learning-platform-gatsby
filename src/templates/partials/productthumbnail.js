import React from "react"
import { Box } from '@material-ui/core'
import Card from '../../components/card.js'
import Typography from '../../components/typography.js'
import Palette from '../../components/palette.js'


function ProductThumbnail({
	bgColor = 'grey',
	image,
	title,
	description,
	bgImage
}) {
	return (
		<Card image={image} bgColor={Palette[bgColor]} bgImage={bgImage} variant="large-image">
			<Box p={3}>
				<Box position="relative">
				<Box p={3}>
					<Typography variant="card-h1">{title}</Typography>
					<Typography variant="card-body">{description}</Typography><br/>
				</Box>
				</Box>
			</Box>
		</Card>
	)
}

export default ProductThumbnail
