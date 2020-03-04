import React from "react"
import { Link as InternalLink } from "gatsby"
import { Container, Grid, Box, Link as ExternalLink } from '@material-ui/core'
import FacebookIcon from '../../images/icons/facebook.svg'
import TwitterIcon from '../../images/icons/twitter.svg'
import InstagramIcon from '../../images/icons/insta.svg'
import YoutubeIcon from '../../images/icons/youtube.svg'
import StrawbeesLogo from '../../images/learninglogowhite.svg'
import Palette from '../../components/palette.js'
import Typography from '../../components/typography.js'

function LayoutFooter() {
	return (
		<Box
			py={8}
			textAlign={{xs:'center', md:'left'}}
			bgcolor={Palette.darkGrey}
			color={Palette.white}
			>
			<Container>
				<Grid container spacing={2} direction="row" justify="center">
					<Grid item xs={12} sm={4}>
						<Box textAlign="center">
							<p>
								<InternalLink to="/"><img src={StrawbeesLogo} width="200" alt="Strawbees Logo" /></InternalLink>
							</p>
							<Box px={{xs: 8, sm: 2, md: 8}}>
								<Grid container spacing={2} direction="row" justify="space-between">
									<Grid xs={3} item>
										<ExternalLink href="https://twitter.com/strawbees" target="_blank">
											<img width="100%" alt="twitter icon" src={TwitterIcon} />
										</ExternalLink>
									</Grid>
									<Grid xs={3} item>
										<ExternalLink href="https://www.instagram.com/strawbees/" target="_blank">
											<img width="100%" alt="instagram icon" src={InstagramIcon} />
										</ExternalLink>
									</Grid>
									<Grid xs={3} item>
										<ExternalLink href="https://www.facebook.com/strawbees/" target="_blank">
											<img width="100%" alt="facebook icon" src={FacebookIcon} />
										</ExternalLink>
									</Grid>
									<Grid xs={3} item>
										<ExternalLink href="https://www.youtube.com/channel/UCau3nzMP21AAPMPP-9L_LBQ" target="_blank">
											<img width="100%" alt="youtube icon" src={YoutubeIcon} />
										</ExternalLink>
									</Grid>
								</Grid>
							</Box>
						</Box>
						<Box textAlign="center">
							<Typography>
								<p>
									<ExternalLink href="https://strawbees.com/store" target="_blank">
										Visit our store!
									</ExternalLink>
								</p>
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box textAlign="left">
						<Typography>
							<p><strong>STRAWBEES LEARNING</strong></p>
							<p><InternalLink to="/about">About</InternalLink></p>
							<p><InternalLink to="/what-is-strawbees">What is Strawbees?</InternalLink></p>
							<p><InternalLink to="/how-to-use-strawbees-in-your-classroom">How to use Strawbees in your Classroom?</InternalLink></p>
						</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} sm={4}>
						<Box textAlign="left">
							<Typography>
								<p><strong>RESOURCES</strong></p>
								<p><InternalLink to="/activities">Activities</InternalLink></p>
								<p><InternalLink to="/lesson-plans">Lesson Plans</InternalLink></p>
								<p><InternalLink to="/explorations">Explorations</InternalLink></p>
							</Typography>
						</Box>
					</Grid>
					<Grid item xs={12} md={4}>
						<Box textAlign="center">
							<p>
								<Typography>
									Strawbees AB, Stenkolsgatan 1B, 417 07 Gothenburg, Sweden.
								</Typography>
							</p>
							<p>
								<Typography>
									<a rel="license noopener noreferrer" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">
										<img alt="Creative Commons Licence" style={{borderWidth:0}} src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
									</a>
									<br />
									This work is licensed under a <a rel="license noopener noreferrer" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
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
