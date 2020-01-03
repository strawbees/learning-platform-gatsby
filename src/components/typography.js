import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import BrandonBoldOtf from '../fonts/brandontext-bold.otf'
import BrandonMediumOtf from '../fonts/brandontext-medium.otf'
import BrandonRegularOtf from '../fonts/brandontext-regular.otf'

const variants = {
	"@global": {
		'@font-face': [
			{
				fontFamily: 'Brandon Text',
				fontDisplay: 'swap',
				src: `url(${BrandonRegularOtf})`,
				fontWeight: 'normal',
				fontStyle: 'normal'
			},
			{
				fontFamily: 'Brandon Text',
				fontDisplay: 'swap',
				src: `url(${BrandonMediumOtf})`,
				fontWeight: 500,
				fontStyle: 'normal'
			},
			{
				fontFamily: 'Brandon Text',
				fontDisplay: 'swap',
				src: `url(${BrandonBoldOtf})`,
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
	}
}

function Typography(props) {
	const useStyles = makeStyles(variants)
	const classes = useStyles()
	return (
		<span className={[classes.baseStyle, classes[props.variant]].join(' ')}>{props.children}</span>
	)
}

export default Typography
