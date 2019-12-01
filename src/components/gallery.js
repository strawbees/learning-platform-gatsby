import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import ArrowLeft from './icons/arrow-left.svg'
import ArrowRight from './icons/arrow-right.svg'
import ImageDisplay from './imagedisplay.js'

function Gallery(props) {
	const [index, setIndex] = useState(0)
	let children = props.children
	const length = children.length
	const changeIndex = (i) => (e) => {
		setIndex(
			Math.abs( length + i ) % length
		)
	}
	const useStyles = makeStyles({
		imageContainer: {
			'& img': {
				width: '100%',
				maxWidth: '100%'
			}
		},
		clickable: {
			cursor: 'pointer'
		}
	})
	const styles = useStyles()
	return (
		<Box textAlign="center">
			<Box position="relative"
				width="100%"
				className={styles.imageContainer}>
				{children[index]}
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
				justifyContent="center">
					{children.map((el, i) => {
						return (
							<Grid item xs={4} sm={3} md={2} lg={1}>
								<Box
									key={i.toString()}
									width="100%"
									className={[styles.imageContainer, styles.clickable].join(' ')}
									onClick={changeIndex(i)}>
									{/*el*/}
								</Box>
							</Grid>
						)
					})}
			</Grid>
		</Box>
	)
}

export default Gallery
