import React from "react"
import { withPrefix } from 'gatsby'
import { Box } from '@material-ui/core'
import Typography from '../components/typography'
import Palette from '../components/palette'
import mdToPrint from '../utils/mdToPrint'
import '../printStyles.css'

const Printable = (e) => {
	let {
		pages,
		activities,
		lessonPlans,
		explorations
	} = e.pageContext
	return (
		<section id="content">
			<IndexTemplate {...e.pageContext} />
			{pages.map((p, i) => <PageTemplate key={i} {...p} />)}
			{lessonPlans.map((p, i) => <PageTemplate key={i} {...p} />)}
			{explorations.map((p, i) => <PageTemplate key={i} {...p} />)}
			{activities.map((p, i) => <PageTemplate key={i} {...p} />)}
		</section>
	)
}

function IndexTemplate(props) {
	let coverStyle = {
		position: 'relative',
		pageBreakAfter: 'always',
		pageBreakBefore: 'always',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '22px',
		height: '39cm',
		width: '31cm',
		overflow: 'hidden'
	}
	return (
		<article>
			<div className="cover" style={coverStyle}>
				<div>
					<h2>Index of content</h2>
					<p>{(new Date()).toString()}</p>
					<h3>Support Pages</h3>
					<ul>
						{props.pages.map((p) => <li>{p.title}</li>)}
					</ul>
					<h3>Lesson Plans</h3>
					<ul>
						{props.lessonPlans.map((p) => <li>{p.title}</li>)}
					</ul>
					<h3>Explorations</h3>
					<ul>
						{props.explorations.map((p) => <li>{p.title}</li>)}
					</ul>
					<h3>Activities</h3>
					<ul>
						{props.activities.map((p) => <li>{p.title}</li>)}
					</ul>
				</div>
			</div>
		</article>
	)
}

function PageTemplate(props) {
	let coverStyle = {
		position: 'relative',
		pageBreakAfter: 'always',
		pageBreakBefore: 'always',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		height: '39cm',
		width: '31cm',
		overflow: 'hidden'
	}
	let backgroundStyle = {
		position: 'absolute',
		height: '100%',
		left: '-50%',
		zIndex: -1,
	}
	return (
		<article>
			<div className="cover" style={coverStyle}>
				<img src={withPrefix(props.header)} style={backgroundStyle} alt={props.alt} />
				<Box p={4} style={{width: '50%', borderRadius: '1em'}}
					color={Palette.black}
					bgcolor="rgba(255, 255, 255, 0.85)"
					textAlign={{xs: 'center', md: 'left'}}
					>
					<Typography variant="hero-h1">
						{props.title}
					</Typography>
					<Typography variant="hero-body">
						<p>{props.description}</p>
					</Typography>
				</Box>
			</div>
			<div className="page">
				{mdToPrint(props.content)}
			</div>
		</article>
	)
}

export default Printable
