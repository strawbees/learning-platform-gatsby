import React, { useState } from 'react'
import { Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Palette from './palette'
import ArrowLeft from './icons/gallery-left.svg'
import ArrowRight from './icons/gallery-right.svg'

const useStyles = makeStyles({
	imageContainer: {
		'& img': {
			width: '100%',
			maxWidth: '100%',
			display: 'block'
		}
	},
	clickable: {
		cursor: 'pointer'
	},
	selectedThumb: {
		boxSizing: 'border-box',
		border: `solid 1px ${Palette.mediumGrey}`
	}
})

function Gallery(props) {
	const styles = useStyles()
	const [index, setIndex] = useState(0)
	let children = props.children
	const length = children.length
	const changeIndex = (i) => (e) => {
		setIndex(
			Math.abs( length + i ) % length
		)
	}

	return (
		<Box textAlign="center">
			<Box position="relative"
				width="100%"
				className={styles.imageContainer}>

				{children.map((el, i) => {
					return (
						<Box hidden={i !== index} bgcolor="#ccc">
							{el}
						</Box>
					)
				})}

				<Box className={styles.clickable}
					onClick={changeIndex(index-1)}
					position="absolute"
					top="calc(50% - 18px)"
					left="10px">
					<img src={ArrowLeft} alt="arrow left" />
				</Box>
				<Box className={styles.clickable}
					onClick={changeIndex(index+1)}
					position="absolute"
					top="calc(50% - 18px)"
					right="10px">
					<img src={ArrowRight} alt="arrow right" />
				</Box>
			</Box>
			<Box py={1} />
			<Grid container
				spacing={2}
				direction="row"
				wrap="wrap"
				alignItems="flex-start"
				justify="center">
					{children.map((el, i) => {
						let style = [
							(i === index) ? styles.selectedThumb : '',
							styles.imageContainer,
							styles.clickable
						].join(' ')
						return (
							<Grid key={i} item xs={4} sm={3} md={2}>
								<Box
									width="100%"
									className={style}
									onClick={changeIndex(i)}>
									<img {...el.props} />
								</Box>
							</Grid>
						)
					})}
			</Grid>
		</Box>
	)
}

export default Gallery
