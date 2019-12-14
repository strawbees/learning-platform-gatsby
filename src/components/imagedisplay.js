import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Typography from './typography.js'

function ImageDisplay(props) {
	const useStyles = makeStyles({
		root: {
			'& img': {
				width: '100%',
				maxWidth: '100%'
			}
		}
	})
	const styles = useStyles()
	return (
		<Box position="relative" textAlign="left" className={styles.root}>
			<Box>
				<img alt={props.alt} {...props} />
			</Box>
			<Box
				hidden={!props.alt ? true : false}
				width="100%"
				bgcolor="rgba(255,255,255,0.7)"
				position="absolute"
				bottom="0"
				left="0">
				<Box p={2}>
					<Typography>{props.alt}</Typography>
				</Box>
			</Box>
		</Box>
	)
}

export default ImageDisplay
