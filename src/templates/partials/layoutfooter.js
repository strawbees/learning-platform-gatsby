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
import makeRelativePath from '../../utils/makeRelativePath.js'
import filterMenuBySlug from '../../utils/filterMenuBySlug.js'

let localUrl = '' // XXX!
function LayoutFooter({ data: graphqlMenuData }) {
	const menuItems = filterMenuBySlug('footer-menu', graphqlMenuData)
	localUrl = graphqlMenuData.wordpress.allSettings.generalSettingsUrl
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
						<SocialMediaColumn />
					</Grid>
					{menuItems.map((item) => (
						<Grid item xs={12} sm={2}>
							<MenuColumn {...item} />
						</Grid>
					))}
					<Grid item xs={12} />
					<Grid item xs={12} md={4}>
						<CopyrightRow />
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}

function SocialMediaColumn() {
	return (
		<React.Fragment>
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
		</React.Fragment>
	)
}
function MenuColumn({ label, url, menuItems }) {
	return (
		<Box textAlign="left">
			<Typography>
				<p><strong>{label.toUpperCase()}</strong></p>
				{menuItems.nodes.map(MyLink)}
			</Typography>
		</Box>
	)
}
function CopyrightRow() {
	return (
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
	)
}
function MyLink({url, label}) {
	if (url.indexOf('http') === -1 || url.indexOf(localUrl) !== -1 ) {
		return <MyInternalLink url={url} label={label} />
	} else {
		return <MyExternalLink url={url} label={label} />
	}
}
function MyInternalLink({ url, label }) {
	return <p><InternalLink to={makeRelativePath(url)}>{label}</InternalLink></p>
}
function MyExternalLink({ url, label }) {
	return <p><a href={url} target="_blank" rel="noreferrer noopener">{label}</a></p>
}

export default LayoutFooter
