import React from "react"
import { Link } from "gatsby"
import { Container, Grid, Box } from '@material-ui/core'
import FacebookIcon from '../../components/icons/facebook.svg'
import TwitterIcon from '../../components/icons/twitter.svg'
import InstagramIcon from '../../components/icons/insta.svg'
import YoutubeIcon from '../../components/icons/youtube.svg'
import Palette from '../../components/palette.js'
import Typography from '../../components/typography.js'
import StrawbeesLogo from '../../images/learninglogowhite.svg'

function LayoutFooter() {
	return (
		<Box
			py={8}
			textAlign={{xs:'center', md:'left'}}
			bgcolor={Palette.darkGrey}
			color={Palette.white}
			>
			<Container>
				<Grid container spacing={2} direction="row" justify="space-between">
					<Grid item xs={12} sm={4}>
						<Box textAlign="center">
							<p>
								<Link to="/"><img src={StrawbeesLogo} width="200" alt="Strawbees Logo" /></Link>
							</p>
							<Box px={8}>
								<Grid container spacing={2} direction="row" justify="space-between">
									<Grid xs={3} item>
										<a href="https://twitter.com/strawbees" target="_blank" rel="noreferer noopener">
											<img width="100%" alt="twitter icon" src={TwitterIcon} />
										</a>
									</Grid>
									<Grid xs={3} item>
										<a href="https://www.instagram.com/strawbees/" target="_blank" rel="noreferer noopener">
											<img width="100%" alt="instagram icon" src={InstagramIcon} />
										</a>
									</Grid>
									<Grid xs={3} item>
										<a href="https://www.facebook.com/strawbees/" target="_blank" rel="noreferer noopener">
											<img width="100%" alt="facebook icon" src={FacebookIcon} />
										</a>
									</Grid>
									<Grid xs={3} item>
										<a href="https://www.youtube.com/channel/UCau3nzMP21AAPMPP-9L_LBQ" target="_blank" rel="noreferer noopener">
											<img width="100%" alt="youtube icon" src={YoutubeIcon} />
										</a>
									</Grid>
								</Grid>
							</Box>
						</Box>
						<Box textAlign="center">
							<Typography>
								<p>
									<a href="https://strawbees.com/store" target="_blank">
										Visit our store!
									</a>
								</p>
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box textAlign="left">
						<Typography>
							<p><strong>STRAWBEES LEARNING</strong></p>
							<p><Link to="/about">About</Link></p>
							<p><Link to="/what-is-strawbees">What is Strawbees?</Link></p>
							<p><Link to="/how-to-use-strawbees-in-your-classroom">How to use Strawbees in your Classroom?</Link></p>
						</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box textAlign="left">
							<Typography>
								<p><strong>RESOURCES</strong></p>
								<p><Link to="/activities">Activities</Link></p>
								<p><Link to="/lesson-plans">Lesson Plans</Link></p>
								<p><Link to="/explorations">Explorations</Link></p>
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12}>
						<Box textAlign="center">
								<p>
									<Typography>
										Strawbees AB, Stenkolsgatan 1B, 417 07 Gothenburg, Sweden.
									</Typography>
								</p>
								<p>
									<Typography>
										©2019 STRAWBEES. All rights reserved
									</Typography>
								</p>
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}

export default LayoutFooter
