import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@material-ui/core'

function getYouTubeId(url) {
		url = url.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/)
		if (url[2] !== undefined) {
				return url[2].split(/[^0-9a-z_-]/i)[0]
		}
		return url
}

class YoutubeDisplay extends React.Component {
	constructor(props) {
		super(props)
		this.container = React.createRef()
		this.state = {
			width: 0, height: 0
		}
	}
	updateDimensions() {
		let w = this.container.current.offsetWidth
		let h = w * this.props.ratio
		this.setState({
			width: w, height: h
		})
	}
	componentDidMount() {
		this.updateDimensions()
		window.addEventListener('resize', this.updateDimensions.bind(this))
	}
	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions.bind(this))
	}
	render() {
		let { url, otherProps } = this.props
		let { height } = this.state
		return (
			<Box width="100%" height={`${height}px`} ref={this.container}>
				<iframe
					title={url}
					src={`https://www.youtube.com/embed/${getYouTubeId(url)}?rel=0&modestbranding=1&autohide=1&showinfo=0`}
					frameBorder="0"
					allow="autoplay; encrypted-media"
					allowFullScreen
					width="100%"
					height="100%"
					{...otherProps} />
			</Box>
		)
	}
}

YoutubeDisplay.propTypes = {
	url: PropTypes.string,
	ratio: PropTypes.number
}
YoutubeDisplay.defaultProps = {
	ratio: ( 9 / 16 )
}

export default YoutubeDisplay
