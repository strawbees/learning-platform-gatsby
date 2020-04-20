import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"

const favicon = '/favicon.png'

function SEO({ description, lang, meta, title, image }) {
	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			meta={[
				{
					name: `description`,
					content: description,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: description,
				},
				{
					property: `og:image`,
					content: image,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: '@strawbees',
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: description,
				},
				{
					property: `twitter:image`,
					content: image,
				},
			].concat(meta)}
			link={[
				{ rel: "icon", type: "image/png", href: `${favicon}` }
			]}
		/>
	)
}

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
	image: ``,
}

SEO.propTypes = {
	image: PropTypes.string,
	description: PropTypes.string,
	lang: PropTypes.string,
	meta: PropTypes.arrayOf(PropTypes.object),
	title: PropTypes.string.isRequired,
}

export default SEO
