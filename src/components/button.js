import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core'

import Palette from './palette'
import Typography from './typography'

import IconPDF from '../images/icons/pdf.svg'
import IconBack from '../images/icons/back.svg'
import IconBuy from '../images/icons/buy.svg'
import IconDownload from '../images/icons/download.svg'
import IconMore from '../images/icons/more.svg'

/*
 * Creating a classes for each color on our Palette for background,
 * foreground and outline colors. They will have the format `backgroundColorcolorname`,
 * `foregroundColorcolorname`, etc.
 */
const foregroundVariants = Object.keys(Palette).reduce(function(acc, colorName) {
	acc[`foregroundColor${colorName}`] = { color: Palette[colorName] }
	return acc
}, {})
const backgroundVariants = Object.keys(Palette).reduce(function(acc, colorName) {
	acc[`backgroundColor${colorName}`] = { background: Palette[colorName] }
	return acc
}, {})
const outlineVariants = Object.keys(Palette).reduce(function(acc, colorName) {
	colorName = colorName || Palette.black
	acc[`borderColor${colorName}`] = { border: `solid 1px ${Palette[colorName]}` }
	return acc
}, {})

const variants = {
	baseStyle: {
		background: Palette.white,
		margin: '0',
		padding: '7.5px',
		borderRadius: '15px',
		color: Palette.black,
		border: 'solid 1px rgba(0, 0, 0, 0)',
		outline: 'none',
		cursor: 'pointer'
	},
	bold: {
		fontWeight: 'bold'
	},
	...foregroundVariants,
	...backgroundVariants,
	...outlineVariants,
}

// Is this a Palette color?
function isPalette(colorName) {
	return Palette[colorName] !== undefined
}

function getCustomClass(jsCss) {
	const customStyles = makeStyles({
		customStyle: jsCss
	})
	let customClasses = customStyles()
	return customClasses.customStyle
}

function getForegroundClass(fgColor, classes) {
	if (fgColor) {
		if(isPalette(fgColor)) {
			return classes[`foregroundColor${fgColor}`]
		} else {
			const jsCss = { color: fgColor }
			return getCustomClass(jsCss)
		}
	}
	return ''
}
function getBackgroundClass(bgColor, classes) {
	let classNames = []
	if (bgColor) {
		if(isPalette(bgColor)) {
			classNames.push(classes[`backgroundColor${bgColor}`])
		} else {
			const jsCss = { background: bgColor }
			classNames.push(getCustomClass(jsCss))
		}
	}
	return classNames
}
function getOutlineClass(fgColor, classes) {
	if (fgColor) {
		if(isPalette(fgColor)) {
			return classes[`borderColor${fgColor}`]
		} else {
			const jsCss = { border: `solid 1px ${fgColor}` }
			return getCustomClass(jsCss)
		}
	}
	return ''
}

function Button(props) {
	const useStyles = makeStyles(variants)
	const classes = useStyles()

	const fgClasse = getForegroundClass(props.foregroundColor, classes)
	const bgClasse = getBackgroundClass(props.backgroundColor, classes)
	let outlineClass = ''
	if (props.outline) {
		outlineClass = getOutlineClass(props.foregroundColor || Palette.black, classes)
	}

	let classNames = [
		classes.baseStyle, fgClasse, bgClasse, outlineClass
	]

	return (
		<Box display="inline-flex" alignItems="center" className={classNames.join(' ')} onClick={props.onClick}>
			<Box display={props.icon ? 'inline-flex' : 'none'} mr={1}>
				<Icon type={props.icon} />
			</Box>
			<Box>
				<Typography bold={props.bold} variant="card-body">{props.children}</Typography>
			</Box>
		</Box>
	)
}

function Icon(props) {
	let icons = {
		pdf: IconPDF,
		more: IconMore,
		buy: IconBuy,
		back: IconBack,
		download: IconDownload
	}
	let style = {
		display: props.type ? 'inline-flex' : 'none',
		height: `20px`,
		margin: 0,
	}
	if (icons[props.type]) {
		return <img style={style} src={icons[props.type]} alt={props.type} />
	} else {
		return ''
	}
}

export default Button
