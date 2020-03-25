import React from "react"
import { Link as InternalLink } from "gatsby"
import { Container, Grid, Box, Menu } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import Button from '../../components/button.js'
import StrawbeesLogo from '../../images/learninglogo.svg'
import makeRelativePath from '../../utils/makeRelativePath'

let localUrl = '' // XXX!
function LayoutMenu({ data: menuItems }) {
	localUrl = 'http://localhost:8080'
	return (
		<Container maxWidth="lg">
			<Grid container
				style={{minHeight: '160px'}}
				direction="row"
				justify="space-between"
				alignItems="flex-end">
				<Grid item xs={12} md={'auto'}>
					<Box mb={1}>
						<InternalLink to="/">
							<img width="270" src={StrawbeesLogo} alt="Strawbees Logo" />
						</InternalLink>
					</Box>
				</Grid>
				<Grid item xs={12} md={'auto'}>
					<Box mb={1} display="flex">
						{menuItems.map((item, i) => (
							<MyMenuItem
								key={i}
								{...item} />
						))}
					</Box>
				</Grid>
			</Grid>
		</Container>
	)
}

// Render the menu item or a dropdown menu
function MyMenuItem({ url, label, menuItems, handleClose }) {
	if (menuItems) {
		return <MyDropdown label={label} menuItems={menuItems} />
	} else {
		// Check if it's a local/relative or external url
		if (url.indexOf('http') === -1 || url.indexOf(localUrl) !== -1 ) {
			return <MyInternalLink url={url} label={label} />
		} else {
			return <MyExternalLink url={url} label={label} />
		}
	}
}
function MyInternalLink({ url, label }) {
	return (
		<Box p={1}>
			<InternalLink to={makeRelativePath(url)}>
				<Button variant="text">{label}</Button>
			</InternalLink>
		</Box>
	)
}
function MyExternalLink({ url, label }) {
	return (
		<Box p={1}>
			<a href={url} target="_blank" rel="noreferrer noopener">
				<Button variant="text">{label}</Button>
			</a>
		</Box>
	)
}

// Render dropdown menu with menu items bound to open and close menu
function MyDropdown({ label, menuItems }) {
	const [ anchorEl, setAnchorEl ] = React.useState(null)
	const handleClick = event => setAnchorEl(event.currentTarget)
	const handleClose = () => setAnchorEl(null)
	const linkStyle = { width: '100%', padding: 10 }
	return (
		<React.Fragment>
			<Box
				display="flex"
				alignItems="center"
				aria-controls="products-menu"
				aria-haspopup="true"
				onClick={handleClick}
				style={{cursor: 'pointer'}}
				>
				<Button>{label}</Button>
				<ExpandMoreIcon fontSize="small" />
			</Box>
			<Menu
				anchorEl={anchorEl}
				getContentAnchorEl={null}
				elevation={0}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}
				open={Boolean(anchorEl)}
				onClose={handleClose}
				keepMounted
				>
				{menuItems.map((item, i) => (
					<MyMenuItem
						key={i}
						linkStyle={linkStyle}
						handleClose={handleClose}
						{...item} />
				))}
			</Menu>
		</React.Fragment>
	)
}

export default LayoutMenu
