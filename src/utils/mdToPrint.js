import React from "react"
import { Grid, Box } from '@material-ui/core'
import { Link, withPrefix } from "gatsby"
import Typography from '../components/typography'
import Button from '../components/button'
import Youtube from '../components/youtubedisplay'
import ImageDisplay from '../components/imagedisplay'
import Gallery from '../components/gallery'
import Card from '../components/card'

import unified from 'unified'
import markdown from 'remark-parse'
import remark2rehype from 'remark-rehype'
import rehype2react from 'rehype-react'
import raw from 'rehype-raw'

function MyImage(props) {
	return (
		<React.Fragment>
			<img width="100%" src={withPrefix(props.src)} />
			<Typography>{props.alt}</Typography>
		</React.Fragment>
	)
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
			/>
	})
	return (
		<Box py={3}>
			<Grid container spacing={3} direction="row" justify="center">
				{images.map((image, i) => {
					return (
						<Grid item xs={3} key={i}>
							<ImageDisplay
								key={i}
								src={withPrefix(image.props.src)}
								/>
						</Grid>
					)
				})}
			</Grid>
		</Box>
	)
}
function MyThumbnails(props) {
	return (
		<div style={{pageBreakAfter: 'always', pageBreakBefore: 'avoid'}}>
				{props.children}
		</div>
	)
}
function MyThumbnail(props) {
	return (
		<span style={{textAlign: 'center'}}>
			<p>
				<img height={360} src={withPrefix(props.image)} />
			</p>
			<p>
				<Typography variant="card-h1">{props.title}</Typography>
			</p>
			<p>
				<Typography variant="card-body">
					{props.description}
				</Typography>
			</p>
		</span>
	)
}

function MySection(props) {
	const { component } = props
	switch (component) {
		// case 'hero': return <Hero bgimage={withPrefix(props.bgimage)} {...props}>{props.children}</Hero>
		// case 'youtube': return <Youtube url={props.url} />
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
