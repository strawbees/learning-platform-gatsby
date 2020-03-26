import React from 'react';
import Typography from '../src/components/typography'
import '../src/globalStyles.css'

export default {
	title: 'Typography'
}

/*
hero-h1
hero-h2
hero-body
content-h1
card-h1
card-body
card-label
*/
const loremIpsum = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`
export const BaseStyle = () => <Typography>No variant. {loremIpsum}</Typography>
export const HeroHeader1 = () => {
	return <Typography variant="hero-h1">Hero Header 1 {loremIpsum}</Typography>
}
export const HeroHeader2 = () => {
	return <Typography variant="hero-h2">Hero Header 2 {loremIpsum}</Typography>
}
export const HeroBody = () => {
	return <Typography variant="hero-body">Hero Body {loremIpsum}</Typography>
}
export const ContentHeader1 = () => {
	return <Typography variant="content-h1">Content Header 1 {loremIpsum}</Typography>
}
export const ContentBody = () => {
	return <Typography variant="content-body">Content Body {loremIpsum}</Typography>
}
export const CardHeader1 = () => {
	return <Typography variant="card-h1">Card Header 1 {loremIpsum}</Typography>
}
export const CardLabel = () => {
	return <Typography variant="card-label">Card Label {loremIpsum}</Typography>
}
export const CardBody = () => {
	return <Typography variant="card-body">Card Body {loremIpsum}</Typography>
}
export const HTMLWrapper = () => {
	return (
	<Typography>
		<h1>Header 1</h1>
		<h2>Header 2</h2>
		<h3>Header 3</h3>
		<h4>Header 4</h4>
		<h5>Header 5</h5>
		<p>Paragraph {loremIpsum}</p>
		<p>Paragraph {loremIpsum}</p>
		<blockquote>This is a Quote {loremIpsum}</blockquote>
		<p>Paragraph {loremIpsum}</p>
		<ul>
			<li>Unordered Item 1</li>
			<li>Unordered Item 2</li>
			<li>Unordered Item 3</li>
			<li>Unordered Item 4</li>
		</ul>
		<ol>
			<li>Ordered Item 1</li>
			<li>Ordered Item 2</li>
			<li>Ordered Item 3</li>
			<li>Ordered Item 4</li>
		</ol>
		<p>
			<strong>Bold text</strong>, <em>Italic text</em>, <code>Monospace for code</code> and <a href="/">Links</a>
		</p>
		<pre>
			{`
// Code block here
var a = 'foo bar'
console.log(a)
			`}
		</pre>
	</Typography>
	)
}
