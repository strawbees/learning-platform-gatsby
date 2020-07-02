import React from 'react'
import { Container, Grid, Box } from '@material-ui/core'
import Palette from '../components/palette'
import Typography from '../components/typography'
import Card from '../components/card'
import Button from '../components/button'
import Youtube from '../components/youtubedisplay'
import ImageDisplay from '../components/imagedisplay'
import Gallery from '../components/gallery'
import categoryColors from './categoryColors'
import createMarkup from '../utils/createMarkup'
import { querySelectorAll, querySelector, contains } from './jsonSelector'

const jsonToReact = (el, posts, key) => {
	switch(el.tagName.toLowerCase()) {
		case 'body':
			return el.children.map((child, i) => jsonToReact(child, posts, i))
		case 'iframe':
		case 'figure':
		case 'div':
			return <MySection el={el} posts={posts} key={key}/>
		case 'img':
			return (
					<ImageDisplay src={el.src} alt={el.alt} />
			)
		case 'a':
			return (
				<TypographyWrap el={el} key={key}>
					<a href={el.href} dangerouslySetInnerHTML={{__html:el.innerHTML}}></a>
				</TypographyWrap>
			)
		case 'h1':
			return (
				<TypographyWrap el={el} key={key}>
					<h1 dangerouslySetInnerHTML={{__html:el.innerHTML}}></h1>
				</TypographyWrap>
			)
		case 'h2':
			return (
				<TypographyWrap el={el} key={key}>
					<h2 dangerouslySetInnerHTML={{__html:el.innerHTML}}></h2>
				</TypographyWrap>
			)
		case 'h3':
			return (
				<TypographyWrap el={el} key={key}>
					<h3 dangerouslySetInnerHTML={{__html:el.innerHTML}}></h3>
				</TypographyWrap>
			)
		case 'h4':
			return (
				<TypographyWrap el={el} key={key}>
					<h4 dangerouslySetInnerHTML={{__html:el.innerHTML}}></h4>
				</TypographyWrap>
			)
		case 'h5':
			return (
				<TypographyWrap el={el} key={key}>
					<h5 dangerouslySetInnerHTML={{__html:el.innerHTML}}></h5>
				</TypographyWrap>
			)
		case 'p':
			if (el.innerHTML) {
				return (
					<TypographyWrap el={el} key={key}>
						<p dangerouslySetInnerHTML={{__html:el.innerHTML}}></p>
					</TypographyWrap>
				)
			} else { return null }
		case 'ul':
			return (
				<TypographyWrap el={el} key={key}>
					<ul dangerouslySetInnerHTML={{__html:el.innerHTML}}></ul>
				</TypographyWrap>
			)
		case 'ol':
			return (
				<TypographyWrap el={el} key={key}>
					<ol dangerouslySetInnerHTML={{__html:el.innerHTML}}></ol>
				</TypographyWrap>
			)
		default:
			// return <div>{el.tagName} {el.className} {el.innerHTML}</div>
			return null
	}
}

const TypographyWrap = ({children, el}) => {
	let align = 'left'
	if (contains(el.classList, 'has-text-align-center')) {
		align = 'center'
	} else if (contains(el.classList, 'has-text-align-right')) {
		align = 'right'
	}
	return (
		<Container maxWidth='md' align={align}>
			<Typography>
				{children}
			</Typography>
		</Container>
	)
}

const MySection = ({ el, posts }) => {
	// Youtube display
	if (el.tagName.toLowerCase() === 'iframe') {
		return (
			<Container maxWidth="md">
				<Box pb={3}>
					<Youtube url={el.src} />
				</Box>
			</Container>
		)
	}

	// Single image
	if (contains(el.classList, 'wp-block-image')) {
		let image = querySelector(el, 'img')
		let caption = querySelector(el, 'figcaption')
		return (
			<Container maxWidth="md">
				<Box pb={3}>
					<ImageDisplay src={image.src} alt={caption.innerHTML} />
				</Box>
			</Container>
		)
	}
	// Gallery
	if (contains(el.classList, 'wp-block-gallery')) {
		let figures = querySelectorAll(el, '.blocks-gallery-item')
		return (
			<Container maxWidth="md">
				<Box pb={3}>
					<Gallery>
						{figures.map((figure) => {
							let image = querySelector(figure, 'img')
							let caption = querySelector(figure, 'figcaption')
							return <ImageDisplay src={image.src} alt={caption.innerHTML} />
						})}
					</Gallery>
				</Box>
			</Container>
		)
	}

	// Related posts container
	if (contains(el.classList, 'wp-block-strawbees-learning-related')) {
		return (
			<Container maxWidth="lg">
				<Box py={3} mb={3}>
					<Grid container spacing={3} direction="row" wrap="wrap" justify="center">
						{el.children.map((child, i) => jsonToReact(child, posts, i))}
					</Grid>
				</Box>
			</Container>
		)
	}

	// Related post item/card
	if (contains(el.classList, 'related-post')) {
		let id = querySelector(el, '.id')
		let post = posts.find(p => p.id === parseInt(id.innerText))
		if (!post) return null
		return (
			<Grid item xs={12} sm={6} md={4}>
				<a href={post.path}>
					<Card hover
						labelText={post.category}
						labelBgcolor={categoryColors[post.category]}
						image={post.thumbnail}
						tags={post.tags}>
						<Box px={3} py={3} pb={4}>
							<Typography variant="card-h1">
								{post.title}
							</Typography>
							<Box pb={1} />
							<Typography variant="card-body">
								<div dangerouslySetInnerHTML={createMarkup(post.description)} />
							</Typography>
						</Box>
					</Card>
				</a>
			</Grid>
		)
	}

	// Horizontal grey section
	if (contains(el.classList, 'wp-block-strawbees-learning-horizontal')) {
		return (
			<Box className="horizontal" py={6} mb={3} bgcolor={Palette.lightGrey}>
				<Container maxWidth="md" align='center'>
					{el.children.map((child, i) => jsonToReact(child, posts, i))}
				</Container>
			</Box>
		)
	}

	// File block (Download)
	if (contains(el.classList, 'wp-block-file')) {
		let download = el.children[0]
		return (
			<Box p={1} display="inline-block">
				<a href={download.href} target="_blank" rel="noreferrer noopener">
					<Button icon="download">
						{download.innerText}
					</Button>
				</a>
			</Box>
		)
	}

	// Button block
	if (contains(el.classList, 'wp-block-buttons')) {
		let align = 'center'
		if (contains(el.classList, 'alignleft')) {
			align = 'left'
		} else if (contains(el.classList, 'alignright')) {
			align = 'right'
		}
		return (
			<Container maxWidth="md" align={align}>
				{el.children.map((child, i) => jsonToReact(child, posts, i))}
			</Container>
		)
	}
	if (contains(el.classList, 'wp-block-button')) {
		let download = el.children[0]
		return (
			<Box px={1} py={2} component="span">
				<a href={download.href} target={download.target} rel="noreferrer noopener">
					<Button outline={contains(el.classList, 'is-style-outline')}>
						<span dangerouslySetInnerHTML={{__html: download.innerHTML}} />
					</Button>
				</a>
			</Box>
		)
	}

	// generic container
	if (el.children) {
		return <div className={el.className}>{el.children.map((child, i) => jsonToReact(child, null, i))}</div>
	}

	// In doubt, put in a div
	return <div className={el.className} dangerouslySetInnerHTML={{__html:el.innerHTML}}></div>
}

export {
	jsonToReact
}
