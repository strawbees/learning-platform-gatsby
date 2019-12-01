import React from 'react'
import PropTypes from 'prop-types'
import Palette from './palette.js'

function Hero(props) {
	const style = {
		position: 'relative',
		backgroundColor: `${props.bgcolor}`,
		backgroundImage: `url('${props.bgimage}')`,
		backgroundSize: 'cover',
		backgroundPosition: 'center center'
	}
	const shadeStyle = {
		position: 'absolute',
		width: '100%',
		height: '100%',
		top: 0,
		left: 0,
		background: props.shadecolor ? props.shadecolor : 'none',
		opacity: props.shadeopacity,
		zIndex: 0,
		display: props.shadecolor ? 'block' : 'none'
	}
	const contentStyle = {
		width: '100%',
		zIndex: 10,
		position: 'relative'
	}
	return (
		<div style={style}>
			<div style={shadeStyle}></div>
			<div style={contentStyle}>
				{props.children}
			</div>
		</div>
	)
}

Hero.propTypes = {
	bgcolor: PropTypes.string,
	bgimage: PropTypes.string,
	shadecolor: PropTypes.string,
	shadeopacity: PropTypes.number
}

Hero.defaultProps = {
	bgcolor: Palette.white,
	shadeopacity: 0.5
}

export default Hero
