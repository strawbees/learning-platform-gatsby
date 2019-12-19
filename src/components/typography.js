import React from 'react'
import PropTypes from 'prop-types'

const baseStyle = {
	display: 'inline-block',
	fontFamily: 'Brandon Text',
	fontStyle: 'normal',
	fontWeight: '390',
	fontSize: '18px',
	lineHeight: '25px'
}
const variants = {
	'hero scream': {
		fontStyle: 'normal',
		fontWeight: '900',
		fontSize: '64px',
		lineHeight: '65px'
	},
	'hero header': {
		fontStyle: 'normal',
		fontWeight: '900',
		fontSize: '50px',
		lineHeight: '69px'
	},
	'hero text': {
		fontStyle: 'normal',
		fontWeight: '390',
		fontSize: '24px',
		lineHeight: '33px'
	},
	'header 1': {
		fontStyle: 'normal',
		fontWeight: '390',
		fontSize: '36px',
		lineHeight: '50px'
	},
	'card header': {
		fontStyle: 'normal',
		fontWeight: '900',
		fontSize: '24px',
		lineHeight: '33px'
	},
	'body condensed': {
		fontStyle: 'normal',
		fontWeight: '390',
		fontSize: '18px',
		lineHeight: '22px'
	},
	'label': {
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '14px',
		lineHeight: '16px'
	},
}

function Typography(props) {
	const style = Object.assign(
		{},
		baseStyle,
		variants[props.variant]
	)
	return (
		<span style={style}>{props.children}</span>
	)
}

Typography.propTypes = {
	variants: PropTypes.oneOf(Object.keys(variants))
}

export default Typography
