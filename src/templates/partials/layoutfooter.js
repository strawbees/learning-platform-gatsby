import React from "react"
import { Link } from "gatsby"
import { Container, Grid, Box } from '@material-ui/core'
import Palette from '../../components/palette.js'
import Typography from '../../components/typography.js'
import StrawbeesLogo from '../../images/learninglogo.svg'

function LayoutFooter() {
	return (
		<Box bgcolor={Palette.mediumGrey} p={2} pt={12} textAlign={{xs:'center', md:'left'}}>
			<Container>
				<Grid container spacing={2} direction="row" justify="space-between">
					<Grid item xs={12} md={4}>
						<Box width="100%"><img style={{maxWidth: '100%'}} src={StrawbeesLogo} alt="Strawbees Logo"/></Box>
					</Grid>
					<Grid item xs={12} md={3}>
						<Typography>
							<div><strong>STRAWBEES EDUCATION</strong></div>
							<div><Link to="/">About</Link></div>
							<div><Link to="/">Community</Link></div>
							<div><Link to="/">Professional Development</Link></div>
							<div><Link to="/">Lesson Plan</Link></div>
						</Typography>
					</Grid>
					<Grid item xs={12} md={2}>
						<Typography>
							<div><strong>SUPPORT</strong></div>
							<div><Link to="/">Getting Started</Link></div>
							<div><Link to="/">FAQ</Link></div>
							<div><Link to="/">Contact us</Link></div>
						</Typography>
					</Grid>
					<Grid item xs={12} md={2}>
						<Typography>
							<div><strong>RESOURCES</strong></div>
							<div><Link to="/">Lesson Plans & Activities</Link></div>
							<br />
							<div><strong><Link to="/">SHOP</Link></strong></div>
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Box textAlign="center" pt={8}>
							<Typography>
								<p>Strawbees AB, Stenkolsgatan 1B, 417 07 Gothenburg, Sweden.</p>
								<p>©2019 STRAWBEES. All rights reserved</p>
							</Typography>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}

export default LayoutFooter
