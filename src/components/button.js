import React from 'react'
import PropTypes from 'prop-types'
import Palette from './palette.js'
import IconPDF from './icons/pdf.svg'

function icon(iconName) {
	switch (iconName) {
		case 'pdf':
			return <img alt="pdf icon" src={IconPDF} />
		default:
			return ''
	}
}

const baseStyle = {
	display: 'inline-block',
	border: 'none',
	borderRadius: '1em',
	outline: 0,
	cursor: 'pointer',
	fontFamily: 'Brandon Text',
	textDecoration: 'none',
	padding: '2px 5px',
	minWidth: '220px',
	whiteSpace: 'nowrap'
}
const defaultStyle = {
	fontStyle: 'normal',
	fontWeight: 'bold',
	fontSize: '18px',
	lineHeight: '25px',
	background: Palette.green,
	color: Palette.white,
	textTransform: 'uppercase'
}
const iconStyle = {
	float: 'left',
	marginTop: '8px',
	marginLeft: '8px'
}
const variants = {
	'text': {
		background: 'none',
		color: Palette.black,
		textTransform: 'none',
		fontWeight: '390',
		minWidth: 'none'
	},
	'icon': {
		color: Palette.black,
		background: Palette.white,
		textTransform: 'none'
	},
	'grey': {
		color: Palette.darkGrey,
		background: Palette.lightGrey,
		textTransform: 'none',
		fontWeight: '390'
	}
}

function InnerText(props) {
	const isIcon = props.variant === 'icon'
	const innerTextStyle = {
		display: 'flex',
		alignItems: 'center',
		padding: '1em',
		justifyContent: isIcon ? 'flex-start' : 'center'
	}
	return (
		<span>
			<span style={iconStyle}>
				{icon(props.icon)}
			</span>
			<span style={innerTextStyle}>
				{props.children}
			</span>
		</span>
	)
}

function Button(props) {
	const style = Object.assign(
		{},
		baseStyle,
		defaultStyle,
		variants[props.variant]
	)
	return (
		<button style={style} onClick={props.onClick}>
			{InnerText(props)}
		</button>
	)
}

Button.propTypes = {
	variant: PropTypes.oneOf(['text', 'icon', 'grey']),
	icon: PropTypes.string,
	onClick: PropTypes.func
}

export default Button
