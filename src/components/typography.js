import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const variants = {
	"baseStyle": {
		display: 'inline-block',
		fontFamily: 'Brandon Text',
		fontStyle: 'normal',
		fontWeight: '390',
		fontSize: '18px',
		lineHeight: '25px',
		width: '100%'
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
