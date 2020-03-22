import React from "react"
import { Container, Grid, Box } from '@material-ui/core'
import { Link } from "gatsby"
import Typography from '../components/typography'
import Youtube from '../components/youtubedisplay'
import ImageDisplay from '../components/imagedisplay'
import Gallery from '../components/gallery'
import Card from '../components/card'
import Button from '../components/button'
import Palette from '../components/palette'
import makeRelativePath from '../utils/makeRelativePath'

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
	let relativePath = makeRelativePath(post.link)
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
					<Container maxWidth="md">
						{parseBlocks(block.innerBlocks)}
					</Container>
				)
				break;
			case 'core/heading':
				components.push(
					<Container maxWidth="md" align={attr.align}>
						<Typography>
							<Heading {...attr} />
						</Typography>
					</Container>
				)
				break
			case 'core/paragraph':
				components.push(
					<Container maxWidth="md" align={attr.align}>
						<Typography>
							<p dangerouslySetInnerHTML={createMarkup(attr.content)}></p>
						</Typography>
					</Container>
				)
				break
			case 'core/list':
				if (attr.ordered) {
					components.push(
						<Container maxWidth="md" align={attr.align}>
							<Typography>
								<ol dangerouslySetInnerHTML={createMarkup(attr.values)}></ol>
							</Typography>
						</Container>
					)
				} else {
					components.push(
						<Container maxWidth="md" align={attr.align}>
							<Typography>
								<ul dangerouslySetInnerHTML={createMarkup(attr.values)}></ul>
							</Typography>
						</Container>
					)
				}
				break
			case 'core/image':
				components.push(
					<Container maxWidth="md" align={attr.align}>
						<ImageDisplay src={attr.url} alt={attr.alt} />
					</Container>
				)
				break
			case 'core/gallery':
				const images = attr.images.map((img, i) => {
					return <ImageDisplay key={i} src={img.url} alt={img.alt} />
				})
				components.push(
					<Container maxWidth="md">
						<Box my={3}>
							<Gallery>{images}</Gallery>
						</Box>
					</Container>
				)
				break
			case 'core/file':
				components.push(
					<Box m={1} component="span">
						<a href={attr.href} target="_blank" rel="noreferrer noopener">
							<Button icon="download">
								{attr.fileName}
							</Button>
						</a>
					</Box>
				)
				break
			case 'core/button':
				components.push(
					<Container maxWidth="md" align={attr.align}>
						<a href={attr.url} target="_blank" rel="noreferrer noopener">
							<Button variant="large">
								{attr.text}
							</Button>
						</a>
					</Container>
				)
				break
			case 'core-embed/youtube':
				components.push(
					<Container maxWidth="md">
						<Box my={3}>
							<Youtube url={attr.url} />
						</Box>
					</Container>
				)
				break
			case 'strawbees-learning/related':
				components.push(
					<Container maxWidth="lg">
						<Box my={3}>
							<Grid container spacing={3} direction="row" wrap="wrap" justify="center">
								{attr.related.map((related, i) => (
									<Grid key={i} item xs={12} sm={6} md={4}>
										<Thumbnail post={related} />
									</Grid>
								))}
							</Grid>
						</Box>
					</Container>
				)
				break
			case 'strawbees-learning/horizontal':
				components.push(
						<Box py={3} bgcolor={Palette.lightGrey}>
							<Container maxWidth="md" align='center'>
								{parseBlocks(block.innerBlocks)}
							</Container>
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
