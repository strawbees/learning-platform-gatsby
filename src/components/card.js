import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import Typography from './typography.js'
import Palette from './palette.js'

function Card(props) {
	const variants = {
		card: {
			width: '100%',
			height: '100%',
			boxShadow: `0px 4px 4px rgba(0, 0, 0, 0.25)`,
			borderRadius: '1em',
			overflow: 'hidden',
			color: props.bgcolor ? Palette.white : 'inherit',
			background: props.bgcolor ? props.bgcolor : Palette.white,
			transition: 'transform 0.075s linear',
			'&:hover': {
				transform: props.hover ? `scale(1.025)` : 'none'
			}
		},
		image: {
			position: 'relative',
			background: `${Palette.white} url(${props.image}) no-repeat`,
			backgroundSize: 'cover',
			backgroundPosition: 'center center',
			display: props.image ? 'inline-block' : 'none',
			height: '220px',
			width: '100%'
		},
		label: {
			background: props.labelBgcolor || Palette.black,
			borderRadius: '0px 5px 0px 0px',
			color: props.labelColor || Palette.white,
			display: props.labelText ? 'inline-block' : 'none',
			position: 'absolute',
			left: 0,
			bottom: 0,
			padding: '5px 10px',
			textTransform: 'uppercase'
		},
		largeImage: {
			height: '290px',
			backgroundSize: 'contain'
		}
	}
	const useStyles = makeStyles(variants)
	const classes = useStyles()
	return (
		<Box className={classes.card}>
			<Box className={classes.image}>
				<Box className={classes.label}>
					<Typography variant="label">{props.labelText}</Typography>
				</Box>
			</Box>
			<Box p={3}>
				{props.children}
			</Box>
		</Box>
	)
}

Card.propTypes = {
	bgcolor: PropTypes.string,
	hover: PropTypes.bool,
	labelText: PropTypes.string,
	labelColor: PropTypes.string,
	labelBgcolor: PropTypes.string,
	image: PropTypes.string,
	variant: PropTypes.oneOf(
		['largeImage']
	)
}

export default Card
