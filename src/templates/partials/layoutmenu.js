import React from "react"
import { Link as InternalLink } from "gatsby"
import { Container, Grid, Box, Link as ExternalLink } from '@material-ui/core'
import Button from '../../components/button.js'
import StrawbeesLogo from '../../images/learninglogo.svg'

function LayoutMenu() {
	return (
		<Container maxWidth="lg">
			<Grid container
				style={{minHeight: '160px'}}
				direction="row"
				justify="space-between"
				alignItems="flex-end">
				<Grid item xs={12} md={'auto'}>
					<Box mb={1}>
						<InternalLink to="/"><img width="270" src={StrawbeesLogo} alt="Strawbees Logo" /></InternalLink>
					</Box>
				</Grid>
				<Grid item xs={12} md={'auto'}>
					<Box pb={1} display="flex">
						<Box px={1}>
							<ExternalLink href="//strawbees.com/store/" target="_blank" rel="noopener noreferrer">
								<Button variant="text">Store</Button>
							</ExternalLink>
						</Box>
						<Box px={1}>
							<InternalLink to="/">
								<Button variant="text">Lesson Plans and Activities</Button>
							</InternalLink>
						</Box>
						<Box px={1}>
							<InternalLink to="/about">
								<Button variant="text">About</Button>
							</InternalLink>
						</Box>
					</Box>
				</Grid>
			</Grid>
		</Container>
	)
}

export default LayoutMenu
