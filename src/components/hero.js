import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import Palette from './palette.js'

function Hero(props) {
	const useStyles = makeStyles({
		root: {
			position: 'relative',
			overflow: 'hidden'
		},
		bgImage: {
			position: 'absolute',
			width: '100%',
			height: '100%',
			backgroundColor: `${props.bgcolor}`,
			backgroundImage: `url('${props.bgimage}')`,
			backgroundSize: 'cover',
			backgroundPosition: 'center center'
		},
		bgImageBlurred: {
			position: 'absolute',
			backgroundColor: `${props.bgcolor}`,
			backgroundImage: `url('${props.bgimage}')`,
			backgroundSize: 'cover',
			backgroundPosition: 'center center',
			width: 'calc(100% + 10px)',
			height: 'calc(100% + 10px)',
			top: -5,
			down: -5,
			left: -5,
			right: -5,
			filter: 'blur(5px)',
		},
		shade: {
			position: 'absolute',
			width: '100%',
			height: '100%',
			top: 0,
			left: 0,
			background: props.shadecolor ? props.shadecolor : 'none',
			opacity: props.shadeopacity,
			zIndex: 0,
			display: props.shadecolor ? 'block' : 'none',
		},
		content: {
			width: '100%',
			zIndex: 10,
			position: 'relative'
		},
	})
	const styles = useStyles()
	const bgStyle = props.blur ? styles.bgImageBlurred : styles.bgImage

	return (
		<div className={styles.root}>
			<div className={bgStyle}></div>
			<div className={styles.shade}></div>
			<div className={styles.content}>
				{props.children}
			</div>
		</div>
	)
}

Hero.propTypes = {
	blur: PropTypes.bool,
	bgcolor: PropTypes.string,
	bgimage: PropTypes.string,
	shadecolor: PropTypes.string,
	shadeopacity: PropTypes.number
}

Hero.defaultProps = {
	blur: false,
	bgcolor: Palette.white,
	shadeopacity: 0.5
}

export default Hero
