import React from 'react';
import { actions } from '@storybook/addon-actions';
import Button from '../src/components/button'
import '../src/globalStyles.css'

export default {
	title: 'Buttons'
}

let events = actions({onClick: 'clicked'})

export const BaseStyle = () => <Button {...events}>No variant.</Button>
export const PalleteForegroundColor = () => <Button foregroundColor="pink" {...events}>Palette Foreground</Button>
export const PalleteBackgroundColor = () => <Button foregroundColor="white" backgroundColor="pink" {...events}>Palette Background</Button>
export const HexadecimalForegroundColor = () => <Button foregroundColor="#FF00FF" {...events}>Hexadecimal Foreground</Button>
export const HexadecimalBackgroundColor = () => <Button foregroundColor="#FFF" backgroundColor="#FF00FF" {...events}>Hexadecimal Background</Button>
export const Bold = () => <Button bold backgroundColor="lightgrey" {...events}>Bold text.</Button>
export const Outline = () => (
	<div>
		<div><Button outline {...events}>Outlined button</Button></div>
		<div><Button foregroundColor="pink" outline {...events}>Outlined button</Button></div>
	</div>
)
export const Icons = () => {
	return (
		<div>
			<div><Button outline icon="unknown" {...events}>Without icon</Button></div>
			<div><Button outline icon="download" {...events}>With icon</Button></div>
			<div><Button icon="back" {...events}>With icon</Button></div>
			<div><Button backgroundColor="lightgrey" icon="buy" {...events}>With icon</Button></div>
			<div><Button icon="more" {...events}>With icon</Button></div>
		</div>
	)
}
