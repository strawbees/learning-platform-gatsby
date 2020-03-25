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

const mapCollection = (collection, cb) => {
	const response = []
	for (let i = 0; i < collection.length; i++) {
		response.push(
			cb( collection.item(i), i )
		)
	}
	return response
}

const htmlToReact = (el) => {
	switch(el.tagName.toLowerCase()) {
		case 'body':
			return mapCollection(
				el.children,
				htmlToReact
			)
		case 'iframe':
		case 'figure':
		case 'div':
			return <MySection el={el} />
		case 'a':
			return (
				<Container maxWidth="md">
					<Typography>
						<a href={el.href} dangerouslySetInnerHTML={{__html:el.innerHTML}}></a>
					</Typography>
				</Container>
			)
		case 'h1':
			return (
			<Container maxWidth="md">
				<Typography>
					<h1 dangerouslySetInnerHTML={{__html:el.innerHTML}}></h1>
				</Typography>
			</Container>
			)
		case 'h2':
			return (
			<Container maxWidth="md">
				<Typography>
					<h2 dangerouslySetInnerHTML={{__html:el.innerHTML}}></h2>
				</Typography>
			</Container>
			)
		case 'h3':
			return (
			<Container maxWidth="md">
				<Typography>
					<h3 dangerouslySetInnerHTML={{__html:el.innerHTML}}></h3>
				</Typography>
			</Container>
			)
		case 'h4':
			return (
			<Container maxWidth="md">
				<Typography>
					<h4 dangerouslySetInnerHTML={{__html:el.innerHTML}}></h4>
				</Typography>
			</Container>
			)
		case 'h5':
			return (
			<Container maxWidth="md">
				<Typography>
					<h5 dangerouslySetInnerHTML={{__html:el.innerHTML}}></h5>
				</Typography>
			</Container>
			)
		case 'p':
			return (
			<Container maxWidth="md">
				<Typography>
					<p dangerouslySetInnerHTML={{__html:el.innerHTML}}></p>
				</Typography>
			</Container>
			)
		case 'ul':
			return (
			<Container maxWidth="md">
				<Typography>
					<ul dangerouslySetInnerHTML={{__html:el.innerHTML}}></ul>
				</Typography>
			</Container>
			)
		case 'ol':
			return (
			<Container maxWidth="md">
				<Typography>
					<ol dangerouslySetInnerHTML={{__html:el.innerHTML}}></ol>
				</Typography>
			</Container>
			)
		case 'img':
			return (
			<Container maxWidth="md">
				<Typography>
					<img width="100%" src={el.src} alt={el.alt} />
				</Typography>
			</Container>
			)
		default:
			return <div>{el.tagName} {el.className} {el.innerHTML}</div>
	}
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
	if (el.classList.contains('wp-block-strawbees-learning-related')) {
		return (
			<Container maxWidth="lg">
				<Box my={3}>
					<Grid container spacing={3} direction="row" wrap="wrap" justify="center">
						{mapCollection(el.children, htmlToReact)}
					</Grid>
				</Box>
			</Container>
		)
	}

	// Gallery
	if (el.classList.contains('wp-block-gallery')) {
		let images = el.querySelectorAll('.blocks-gallery-item img')
		return (
			<Container maxWidth="md">
				<Box my={3}>
					<Gallery>
						{mapCollection(
							images,
							image => <ImageDisplay src={image.src} alt={image.alt} />
						)}
					</Gallery>
				</Box>
			</Container>
		)
	}

	// Related post item/card
	if (el.classList.contains('related-post')) {
		let title = el.querySelector('.title')
		let image = el.querySelector('.featured-media')
		let excerpt = el.querySelector('.excerpt')
		let category = el.querySelector('.category')
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
	if (el.classList.contains('wp-block-strawbees-learning-horizontal')) {
		return (
			<Box py={3} bgcolor={Palette.lightGrey}>
				<Container maxWidth="md" align='center'>
					{mapCollection(el.children, htmlToReact)}
				</Container>
			</Box>
		)
	}

	// Download block
	if (el.classList.contains('wp-block-file')) {
		let download = el.children.item(0)
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
	if (el.classList.contains('wp-block-button')) {
		let download = el.children.item(0)
		return (
			<Box p={3}>
				<a href={download.href} target="_blank" rel="noreferrer noopener">
					<Button icon="download">
						{download.innerText}
					</Button>
				</a>
			</Box>
		)
	}

	// generic div
	if (el.children) {
		return mapCollection(el.children, htmlToReact)
	}

	// In doubt, put in a div
	return <div dangerouslySetInnerHTML={{__html:el.innerHTML}}></div>
}

const parseHtml = (html) => {
	const parser = new DOMParser()
	const tree = parser.parseFromString(html, 'text/html')
	const body = tree.children[0].children.item(1)
	return htmlToReact(body)
}

export default parseHtml
