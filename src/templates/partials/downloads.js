import React from "react"
import { Container, Grid, Box } from '@material-ui/core'
import Palette from '../../components/palette'
import Typography from '../../components/typography'
import Button from '../../components/button'


const Downloads = function(props) {
	return (
		<Box pb={4} bgcolor={Palette.lightGrey}>
			<Container maxWidth="md">
				<Grid container spacing={3} direction="row" wrap="wrap" justify="center">
					<Grid item xs={12} style={{textAlign: 'center'}}>
						<Typography>
							<h1>Downloads</h1>
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap">
						{props.files.map((file, i) => {
							return (
								<Box m={1} key={i}>
									<a href={file.path} target="_blank" rel="noopener noreferrer">
										<Button icon="download">{file.name}</Button>
									</a>
								</Box>
							)
						})}
						</Box>
					</Grid>
				</Grid>
			</Container>
		</Box>
	)
}

export default Downloads
