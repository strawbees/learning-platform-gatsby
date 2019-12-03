import React from "react"
import { Link } from "gatsby"
import { Container, Grid } from '@material-ui/core'
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
					<Link to="/"><img width="270" src={StrawbeesLogo} alt="Strawbees Logo" /></Link>
				</Grid>
				<Grid item xs={12} md={'auto'}>
					<a href="//strawbees.com/store/" target="_blank">
						<Button variant="text">Store</Button>
					</a>
					<Link to="/">
						<Button variant="text">Lesson Plans and Activities</Button>
					</Link>
					<Link to="about">
						<Button variant="text">About</Button>
					</Link>
				</Grid>
			</Grid>
		</Container>
	)
}

export default LayoutMenu
