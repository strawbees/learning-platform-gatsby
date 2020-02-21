import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from './typography.js'

const useStyles = makeStyles({
	imageDisplay: {
		'& span': {
			display: 'inline-box'
		},
		'& img': {
			width: '100%',
			maxWidth: '100%'
		}
	},
	hidden: {
		display: 'none !important'
	}
})

function ImageDisplay(props) {
	const styles = useStyles()
	console.log('alt', props)
	return (
		<Box component="span" position="relative" textAlign="left" className={styles.imageDisplay}>
			<Box component="span">
				<img alt={props.alt} {...props} />
			</Box>
			<Box component="span"
				className={!props.alt ? styles.hidden : ``}
				width="100%"
				bgcolor="rgba(255,255,255,0.7)"
				position="absolute"
				bottom="0"
				left="0">
				<Box component="span" p={2}>
					<Typography>{props.alt}</Typography>
				</Box>
			</Box>

		</Box>
	)
}

export default ImageDisplay
