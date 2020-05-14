const JSDOM = require('jsdom').JSDOM

const mapCollection = (collection, cb) => {
	const response = []
	for (let i = 0; i < collection.length; i++) {
		response.push(
			cb( collection.item(i), i )
		)
	}
	return response
}

const getImageSource = (node) => {
	let src = node.src
	if (
		node.tagName.toLowerCase() === 'img'
		&& node.srcset
		&& node.srcset !== 'null'
	) {
		let remote_src = node.srcset.split(' ').slice(-2)[0]
		src = imgs[remote_src] || node.src
	}
	return src
}

const domToJson = (node) => {
	return {
		id: node.id,
		href: node.href || node.getAttribute('href'),
		src: getImageSource(node),
		innerHTML: node.innerHTML,
		innerText: node.innerText || node.innerHTML,
		tagName: node.tagName.toLowerCase(),
		className: node.className,
		classList: node.className.split(' '),
		children: node.children ? mapCollection(node.children, domToJson) : []
	}
}

let imgs = {} // XXX
const htmlToJson = (html, images) => {
	imgs = {...images}
	const dom = new JSDOM(html)
	return domToJson(dom.window.document.body)
}

module.exports = htmlToJson
