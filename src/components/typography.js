import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import BrandonBoldOtf from '../fonts/brandontext-bold.otf'
import BrandonBoldEot from '../fonts/BrandonText-Bold.eot'
import BrandonBoldTtf from '../fonts/BrandonText-Bold.ttf'
import BrandonBoldWoff from '../fonts/BrandonText-Bold.woff'
import BrandonBoldWoff2 from '../fonts/BrandonText-Bold.woff2'

import BrandonMediumOtf from '../fonts/brandontext-medium.otf'
import BrandonMediumEot from '../fonts/BrandonText-Medium.eot'
import BrandonMediumTtf from '../fonts/BrandonText-Medium.ttf'
import BrandonMediumWoff from '../fonts/BrandonText-Medium.woff'
import BrandonMediumWoff2 from '../fonts/BrandonText-Medium.woff2'

import BrandonRegularOtf from '../fonts/brandontext-regular.otf'
import BrandonRegularEot from '../fonts/BrandonText-Regular.eot'
import BrandonRegularTtf from '../fonts/BrandonText-Regular.ttf'
import BrandonRegularWoff from '../fonts/BrandonText-Regular.woff'
import BrandonRegularWoff2 from '../fonts/BrandonText-Regular.woff2'

const variants = {
	"@global": {
		'@font-face': [
			{
				fontFamily: 'Brandon Text',
				fontDisplay: 'swap',
				src: `
				url(${BrandonRegularOtf}),
				url(${BrandonRegularEot}) format('embedded-opentype'),
				url(${BrandonRegularTtf}) format('truetype'),
				url(${BrandonRegularWoff}) format('woff'),
				url(${BrandonRegularWoff2}) format('woff2')
				`,
				fontWeight: 'normal',
				fontStyle: 'normal'
			},
			{
				fontFamily: 'Brandon Text',
				fontDisplay: 'swap',
				src: `
				url(${BrandonMediumOtf}),
				url(${BrandonMediumEot}) format('embedded-opentype'),
				url(${BrandonMediumTtf}) format('truetype'),
				url(${BrandonMediumWoff}) format('woff'),
				url(${BrandonMediumWoff2}) format('woff2')
				`,
				fontWeight: 500,
				fontStyle: 'normal'
			},
			{
				fontFamily: 'Brandon Text',
				fontDisplay: 'swap',
				src: `
				url(${BrandonBoldOtf}),
				url(${BrandonBoldEot}) format('embedded-opentype'),
				url(${BrandonBoldTtf}) format('truetype'),
				url(${BrandonBoldWoff}) format('woff'),
				url(${BrandonBoldWoff2}) format('woff2')
				`,
				fontWeight: 'bold',
				fontStyle: 'normal'
			}
		]
	},
	"baseStyle": {
		display: 'inline-block',
		fontFamily: 'Brandon Text',
		fontStyle: 'normal',
		fontWeight: '390',
		fontSize: '18px',
		lineHeight: '25px'
	},
	'hero-h1': {
		fontStyle: 'normal',
		fontWeight: '900',
		fontSize: '64px',
		lineHeight: '65px'
	},
	'hero-h2': {
		fontStyle: 'normal',
		fontWeight: '900',
		fontSize: '50px',
		lineHeight: '69px'
	},
	'hero-body': {
		fontStyle: 'normal',
		fontWeight: '390',
		fontSize: '24px',
		lineHeight: '33px'
	},
	'content-h1': { // todo content full typography
		fontStyle: 'normal',
		fontWeight: '390',
		fontSize: '36px',
		lineHeight: '50px'
	},
	'card-h1': {
		fontStyle: 'normal',
		fontWeight: '900',
		fontSize: '24px',
		lineHeight: '33px'
	},
	'card-body': {
		fontStyle: 'normal',
		fontWeight: '390',
		fontSize: '18px',
		lineHeight: '22px'
	},
	'card-label': {
		fontStyle: 'normal',
		fontWeight: '500',
		fontSize: '14px',
		lineHeight: '16px'
	},
	"bold": {
		fontWeight: 'bold'
	},
}

function Typography(props) {
	const useStyles = makeStyles(variants)
	const classes = useStyles()
	const classNames = [
		classes.baseStyle,
		classes[props.variant],
		props.bold ? classes.bold : '',
	].join(' ')
	return (
		<span className={classNames}>{props.children}</span>
	)
}

export default Typography
