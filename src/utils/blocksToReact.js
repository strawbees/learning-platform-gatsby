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

const createMarkup = (content) => {
	return { __html: content };
}

const Heading = (attr) => {
	switch (attr.level) {
		case 1:
			return <h1 dangerouslySetInnerHTML={createMarkup(attr.content)}></h1>
		case 2:
			return <h2 dangerouslySetInnerHTML={createMarkup(attr.content)}></h2>
		case 3:
			return <h3 dangerouslySetInnerHTML={createMarkup(attr.content)}></h3>
		case 4:
			return <h4 dangerouslySetInnerHTML={createMarkup(attr.content)}></h4>
		case 5:
			return <h5 dangerouslySetInnerHTML={createMarkup(attr.content)}></h5>
			break;
		default:
		return attr.content
	}
}

const parseBlocks = (blocks) => {
	let components = []
	blocks.forEach((block) => {
		const attr = block.attributes
		console.log(block.name, block)
		switch (block.name) {
			case 'core/group':
				components.push(
					...parseBlocks(block.innerBlocks)
				)
				break;
			case 'core/heading':
				components.push(
					<Typography>
						<Heading {...attr} />
					</Typography>
				)
				break
			case 'core/paragraph':
				components.push(
					<Typography>
						<p dangerouslySetInnerHTML={createMarkup(attr.content)}></p>
					</Typography>
				)
				break
			case 'core/list':
				if (attr.ordered) {
					components.push(
						<Typography>
							<ol dangerouslySetInnerHTML={createMarkup(attr.values)}></ol>
						</Typography>
					)
				} else {
					components.push(
						<Typography>
							<ul dangerouslySetInnerHTML={createMarkup(attr.values)}></ul>
						</Typography>
					)
				}
				break
			case 'core/image':
				components.push( <ImageDisplay src={attr.url} alt={attr.alt} /> )
				break
			case 'core/gallery':
				const images = attr.images.map((img, i) => {
					return <ImageDisplay key={i} src={img.url} alt={img.alt} />
				})
				components.push(<Gallery>{images}</Gallery>)
				break
			case 'core/file':
				components.push(<a href={attr.href}>File: {attr.fileName}</a>)
				break
			case 'core-embed/youtube':
				components.push(<Box mb={3}><Youtube url={attr.url} /></Box>)
				break
			default:
		}
	})
	return components
}

const blocksToReact = (rawBlock) => {
	const blocks = JSON.parse(rawBlock)
	return parseBlocks(blocks)
}

export default blocksToReact
