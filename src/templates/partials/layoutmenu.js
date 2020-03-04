import React from "react"
import { Link as InternalLink } from "gatsby"
import { Container, Grid, Box, Menu, MenuItem } from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
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
						<InternalLink to="/">
							<img width="270" src={StrawbeesLogo} alt="Strawbees Logo" />
						</InternalLink>
					</Box>
				</Grid>
				<Grid item xs={12} md={'auto'}>
					<Box pb={1} display="flex">
						<Box px={1}>
							<InternalLink to="/">
								<Button variant="text">Home</Button>
							</InternalLink>
						</Box>
						<Box px={1}>
							<ProductsDropdown />
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

function ProductsDropdown(props) {
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
				<Button>Products</Button>
				<ExpandMoreIcon />
			</Box>
			<Menu
				id="products-menu"
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
				<MenuItem onClick={handleClose}>
					<InternalLink to="/product/steamschoolkit" style={linkStyle}>
						STEAM School Kit
					</InternalLink>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<InternalLink to="/product/bridges" style={linkStyle}>
						Bridges
					</InternalLink>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<InternalLink to="/product/quirkbot" style={linkStyle}>
						Quirkbot
					</InternalLink>
				</MenuItem>
				<MenuItem onClick={handleClose}>
					<InternalLink to="/product/microbit" style={linkStyle}>
						BBC micro:bit
					</InternalLink>
				</MenuItem>
			</Menu>
		</React.Fragment>
	)
}

export default LayoutMenu
