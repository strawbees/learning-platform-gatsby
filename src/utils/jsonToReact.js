import React from 'react'
import { Container, Grid, Box } from '@material-ui/core'
import { Link } from "gatsby"
import Palette from '../components/palette'
import Typography from '../components/typography'
import Card from '../components/card'
import Button from '../components/button'
import Youtube from '../components/youtubedisplay'
import ImageDisplay from '../components/imagedisplay'
import Gallery from '../components/gallery'
import categoryColors from './categoryColors'
import makeRelativePath from './makeRelativePath'
import {
	querySelectorAll, querySelector, contains
} from './jsonSelector'

const jsonToReact = (el) => {
	switch(el.tagName.toLowerCase()) {
		case 'body':
			return el.children.map(jsonToReact)
		case 'iframe':
		case 'figure':
		case 'div':
			return <MySection el={el} />
		case 'a':
			return (
				<TypographyWrap>
						<a href={el.href} dangerouslySetInnerHTML={{__html:el.innerHTML}}></a>
				</TypographyWrap>
			)
		case 'h1':
			return (
				<TypographyWrap>
					<h1 dangerouslySetInnerHTML={{__html:el.innerHTML}}></h1>
			</TypographyWrap>
			)
		case 'h2':
			return (
				<TypographyWrap>
					<h2 dangerouslySetInnerHTML={{__html:el.innerHTML}}></h2>
			</TypographyWrap>
			)
		case 'h3':
			return (
				<TypographyWrap>
					<h3 dangerouslySetInnerHTML={{__html:el.innerHTML}}></h3>
			</TypographyWrap>
			)
		case 'h4':
			return (
				<TypographyWrap>
					<h4 dangerouslySetInnerHTML={{__html:el.innerHTML}}></h4>
			</TypographyWrap>
			)
		case 'h5':
			return (
				<TypographyWrap>
					<h5 dangerouslySetInnerHTML={{__html:el.innerHTML}}></h5>
			</TypographyWrap>
			)
		case 'p':
			return (
				<TypographyWrap>
					<p dangerouslySetInnerHTML={{__html:el.innerHTML}}></p>
			</TypographyWrap>
			)
		case 'ul':
			return (
				<TypographyWrap>
					<ul dangerouslySetInnerHTML={{__html:el.innerHTML}}></ul>
			</TypographyWrap>
			)
		case 'ol':
			return (
				<TypographyWrap>
					<ol dangerouslySetInnerHTML={{__html:el.innerHTML}}></ol>
			</TypographyWrap>
			)
		default:
			// return <div>{el.tagName} {el.className} {el.innerHTML}</div>
			return null
	}
}
const TypographyWrap = ({maxWidth="md", children}) => {
	return (
		<Container maxWidth={maxWidth}>
			<Typography>
				{children}
			</Typography>
		</Container>
	)
}

const MySection = ({ el }) => {
	// Youtube display
	if (el.tagName.toLowerCase() === 'iframe') {
		return (
			<Container maxWidth="md">
				<Box py={3}>
					<Youtube url={el.src} />
				</Box>
			</Container>
		)
	}

	// Related posts container
	if (contains(el.classList, 'wp-block-strawbees-learning-related')) {
		return (
			<Container maxWidth="lg">
				<Box my={3}>
					<Grid container spacing={3} direction="row" wrap="wrap" justify="center">
						{el.children.map(jsonToReact)}
					</Grid>
				</Box>
			</Container>
		)
	}

	// Gallery
	if (contains(el.classList, 'wp-block-gallery')) {
		let images = querySelectorAll(el, 'img')
		return (
			<Container maxWidth="md">
				<Box my={3}>
					<Gallery>
						{images.map(image => <ImageDisplay src={image.src} alt={image.alt} />)}
					</Gallery>
				</Box>
			</Container>
		)
	}

	// Related post item/card
	if (contains(el.classList, 'related-post')) {
		let title = querySelector(el, '.title')
		let image = querySelector(el, '.featured-media')
		let excerpt = querySelector(el, '.excerpt')
		let category = querySelector(el, '.category')
		return (
			<Grid item xs={12} sm={6} md={4}>
				<Link to={makeRelativePath(title.href)}>
					<Card hover
						labelText={category.innerText}
						labelBgcolor={categoryColors[category.innerText]}
						image={image.src}>
							<Box p={3} pb={4}>
								<Typography variant="card-h1">
									{title.innerText}
								</Typography>
								<Box pb={1} />
								<Typography variant="card-body">
									{excerpt.innerText}
								</Typography>
							</Box>
					</Card>
				</Link>
			</Grid>
		)
	}

	// Horizontal grey section
	if (contains(el.classList, 'wp-block-strawbees-learning-horizontal')) {
		return (
			<Box py={3} bgcolor={Palette.lightGrey}>
				<Container maxWidth="md" align='center'>
					{el.children.map(jsonToReact)}
				</Container>
			</Box>
		)
	}

	// Download block
	if (contains(el.classList, 'wp-block-file')) {
		let download = el.children[0]
		return (
			<Box m={1} component="span">
				<a href={download.href} target="_blank" rel="noreferrer noopener">
					<Button icon="download">
						{download.innerText}
					</Button>
				</a>
			</Box>
		)
	}

	// Button block
	if (contains(el.classList, 'wp-block-button')) {
		let download = el.children[0]
		return (
			<Box p={3}>
				<a href={download.href} target="_blank" rel="noreferrer noopener">
					<Button>
						{download.innerText}
					</Button>
				</a>
			</Box>
		)
	}

	// generic div
	if (el.children) {
		return el.children.map(jsonToReact)
	}

	// In doubt, put in a div
	return <div dangerouslySetInnerHTML={{__html:el.innerHTML}}></div>
}

export {
	jsonToReact
}
