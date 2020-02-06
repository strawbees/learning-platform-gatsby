import React from "react"
import { Box, Link } from '@material-ui/core'
import Card from '../../components/card.js'
import Button from '../../components/button.js'
import Typography from '../../components/typography.js'
import Palette from '../../components/palette.js'


function ProductCard({
	bgColor = Palette.pink,
	bgImage,
	image,
	description,
	linkTo,
	callToAction = 'BUY THE KIT'
}) {
	return (
		<Card bgColor={bgColor} bgImage={bgImage} variant="product" image={image}>
			<Box p={3}>
				<Box position="relative">
					<Box px={3}>
						<Typography variant="hero-body">
							{description}
						</Typography>
					</Box>
					<Box textAlign="right" pt={1}>
						<Link href={linkTo} target="_blank">
							<Button bold icon="buy" foregroundColor="white" backgroundColor="black">
								{callToAction}
							</Button>
						</Link>
					</Box>
				</Box>
			</Box>
		</Card>
	)
}

export default ProductCard
