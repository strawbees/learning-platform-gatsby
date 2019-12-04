import React from "react"
import { withPrefix } from 'gatsby'
import { Container, Grid, Box } from '@material-ui/core'
import Typography from '../components/typography'
import SEO from '../components/seo'
import LayoutMenu from './partials/layoutmenu'
import LayoutHero from './partials/layouthero_post'
import LayoutFooter from './partials/layoutfooter'
import '../globalStyles.css'

/*
Because the humans didn't write javascript we can't use it on `gatsby-node.js`
so we have to add this here instead. :facepalm:
*/
import mdToReact from '../utils/mdToReact'

const IndexPage = (e) => {
	const post = e.pageContext.post
	// And we use it here
	let body = mdToReact(post.content)
	return (
		<Grid container direction="column">
			<SEO
				title={post.title}
				description={post.description}
				image={withPrefix(post.thumbnail)}
				/>
			<Grid item><LayoutMenu /></Grid>
			<Grid item>
				<LayoutHero
					title={post.title}
					description={post.description}
					bgimage={post.header}
					/>
			</Grid>
			<Grid item>
				<Box py={3}>
					<Container maxWidth="md">
						<Typography>
							{body}
						</Typography>
					</Container>
				</Box>
			</Grid>
			<Grid item><LayoutFooter /></Grid>
		</Grid>
	)
}

export default IndexPage
