import React from "react"
import { Grid, Box } from '@material-ui/core'
import { Link } from "gatsby"
import Typography from '../components/typography'
import Youtube from '../components/youtubedisplay'
import ImageDisplay from '../components/imagedisplay'
import Gallery from '../components/gallery'
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

const Thumbnail = ({ post }) => {
	let relativePath = post.link.replace(/^[a-z]{4,5}\:\/{2}[a-z]{1,}\:[0-9]{1,4}.(.*)/, '$1')
	let image = post.featured_media_object ? post.featured_media_object.source_url : null
	let excerpt = post.excerpt ? post.excerpt.raw : null
	return (
		<Link to={relativePath}>
			<Card hover image={image}>
					<Box p={3} pb={4}>
						<Typography variant="card-h1">
							{post.title.raw}
						</Typography>
						<Box pb={1} />
						<Typography variant="card-body">
							{excerpt}
						</Typography>
					</Box>
			</Card>
		</Link>
	)
}

const parseBlocks = (blocks) => {
	let components = []
	blocks.forEach((block) => {
		const attr = block.attributes
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
				components.push(<Box my={3}><Gallery>{images}</Gallery></Box>)
				break
			case 'core/file':
				components.push(<a href={attr.href}>File: {attr.fileName}</a>)
				break
			case 'core-embed/youtube':
				components.push(<Box my={3}><Youtube url={attr.url} /></Box>)
				break
			case 'strawbees-learning/related':
				components.push(
					<Box my={3}>
						<Grid container spacing={3} direction="row" wrap="wrap" justify="center">
							{attr.related.map((related, i) => (
								<Grid key={i} item xs={12} sm={6} md={4}>
									<Thumbnail post={related} />
								</Grid>
							))}
						</Grid>
					</Box>
				)
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
