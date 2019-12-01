import React from "react"
import { Box, Container, Grid } from '@material-ui/core'
import { Link } from "gatsby"
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
	return <ImageDisplay {...props} />
}
function MyLink(props) {
	return <Link to={props.href} {...props}>{props.children}</Link>
}
function MyGallery(props) {
	let images = props.children.filter((child) => typeof child === 'object')
	images = images.reduce((acc, image) => {
		if (image.props) {
			return acc.concat(image.props.children)
		} else {
			return acc
		}
	})
	images = images.props.children.filter((child) => typeof child === 'object')
	return <Gallery>{images}</Gallery>
}
function MyThumbnails(props) {
	return (
		<Grid container spacing={3} direction="row" wrap="wrap" justify="flex-start">
			{props.children}
		</Grid>
	)
}
function MyThumbnail(props) {
	return (
		<Grid item xs={12} md={6}>
			<Link to={props.path}>
				<Card {...props}>
					<p><Typography variant="card header">{props.title}</Typography></p>
					<p><Typography variant="body condensed">{props.description}</Typography></p>
				</Card>
			</Link>
		</Grid>
	)
}

function MySection(props) {
	const { component } = props
	switch (component) {
		case 'hero': return <Hero {...props}>{props.children}</Hero>
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
