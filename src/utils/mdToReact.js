import React from "react"
import { Grid, Box } from '@material-ui/core'
import { Link, withPrefix } from "gatsby"
import Typography from '../components/typography'
import Button from '../components/button'
import Youtube from '../components/youtubedisplay'
import ImageDisplay from '../components/imagedisplay'
import Gallery from '../components/gallery'
import Hero from '../components/hero'
import Card from '../components/card'

import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'
import raw from 'rehype-raw'

function MyImage(props) {
	return <ImageDisplay src={withPrefix(props.src)} alt={props.alt} />
}
function MyLink(props) {
	if (props.href.indexOf('http') !== -1) {
		return <a target="_blank" refer="noreferer noopener" {...props}>{props.children}</a>
	} else {
		return <Link to={props.href} {...props}>{props.children}</Link>
	}
}
function MyGallery(props) {
	// Flatten children
	let images = props.children.filter((child) => typeof child === 'object')
	images = images.reduce((acc, image) => {
		if (image.props) {
			return acc.concat(image.props.children)
		} else {
			return acc
		}
	})
	// Map img to ImageDisplay
	images = images.props.children.filter((child) => typeof child === 'object')
	images = images.map((image, i) => {
		return <ImageDisplay
			key={i}
			src={withPrefix(image.props.src)}
			alt={image.props.alt}
			/>
	})
	return <Gallery>{images}</Gallery>
}
function MyThumbnails(props) {
	return (
		<Box py={3}>
			<Grid container spacing={3} direction="row" justify="center">
				{props.children}
			</Grid>
		</Box>
	)
}
function MyThumbnail(props) {
	return (
		<Grid item xs={12} sm={6} lg={4}>
			<Link to={props.path}>
				<Card
					image={withPrefix(props.image)}
					title={props.title}
					description={props.description}
					labelText={props.labelText}
					labelColor={props.labelColor}
					labelBgcolor={props.labelBgcolor}>
					<Box p={3}>
						<Typography variant="card-h1">{props.title}</Typography>
						<Box pb={1} />
						<Typography variant="card-body">
							{props.description}
						</Typography>
					</Box>
				</Card>
			</Link>
		</Grid>
	)
}

function MySection(props) {
	const { component } = props
	switch (component) {
		case 'hero': return <Hero bgimage={withPrefix(props.bgimage)} {...props}>{props.children}</Hero>
		case 'youtube': return <Youtube url={props.url} />
		case 'gallery': return <MyGallery>{props.children}</MyGallery>
		case 'thumbnail': return <MyThumbnail {...props}>{props.children}</MyThumbnail>
		case 'thumbnails': return <MyThumbnails {...props}>{props.children}</MyThumbnails>
		default: return (
			<section {...props}>{props.children}</section>
		)
	}
}

let processor = unified()
	.use(markdown)
	.use(remark2rehype, { allowDangerousHTML: true })
	.use(raw)
	.use(rehype2react, {
		createElement: React.createElement,
		components: {
			button: Button,
			a: MyLink,
			img: MyImage,
			section: MySection
		}
	})

function mdToReact(md) {
	return processor.processSync(md).contents
}

export default mdToReact
