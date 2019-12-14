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
	},
	unselectedThumb: {
		boxSizing: 'border-box',
		border: `solid 1px rgba(0,0,0,0)`
	},
	arrow: {
		cursor: 'pointer',
		top: 'calc(50% - 18px)',
		background: Palette.lightGrey,
		width: '30px',
		height: '30px',
		padding: '5px',
		borderRadius: '40px',
		'& img': {
			maxWidth: '100%',
			maxHeight: '100%'
		}
	},
	loading: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		left: 0,
		right: 0,
		width: '100%',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		zIndex: -1
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
						<Box key={i} hidden={i !== index} bgcolor="#ccc">
							<Box className={styles.loading}>Loading...</Box>
							{el}
						</Box>
					)
				})}
				<Box className={styles.arrow}
					onClick={changeIndex(index-1)}
					position="absolute"
					left="10px">
					<img src={ArrowLeft} alt="arrow left" />
				</Box>
				<Box className={styles.arrow}
					onClick={changeIndex(index+1)}
					position="absolute"
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
							(i === index) ? styles.selectedThumb : styles.unselectedThumb,
							styles.imageContainer,
							styles.clickable
						].join(' ')
						return (
							<Grid key={i} item xs={3} md={2}>
								<Box
									width="100%"
									className={style}
									onClick={changeIndex(i)}>
									<img src={el.props.src} alt={el.props.alt} {...el.props} />
								</Box>
							</Grid>
						)
					})}
			</Grid>
			<Box py={1} />
		</Box>
	)
}

export default Gallery
