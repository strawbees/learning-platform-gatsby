const htmlToJson = require('./htmlToJson.js')
let content = `<body><figure class="wp-block-gallery columns-1 is-cropped"><ul class="blocks-gallery-grid"><li class="blocks-gallery-item"><figure><img src="http://s3.amazonaws.com/strawbees-learning-cms-stage/wp-content/uploads/2020/03/26130642/blinkingstar2-1024x682.jpg" alt="" data-id="9" data-full-url="http://s3.amazonaws.com/strawbees-learning-cms-stage/wp-content/uploads/2020/03/26130642/blinkingstar2.jpg" data-link="http://localhost:8080/activity/my-post/attachment/blinkingstar2/" class="wp-image-9" srcset="http://s3.amazonaws.com/strawbees-learning-cms-stage/wp-content/uploads/2020/03/26130642/blinkingstar2-1024x682.jpg 1024w, http://s3.amazonaws.com/strawbees-learning-cms-stage/wp-content/uploads/2020/03/26130642/blinkingstar2-300x200.jpg 300w, http://s3.amazonaws.com/strawbees-learning-cms-stage/wp-content/uploads/2020/03/26130642/blinkingstar2-768x512.jpg 768w, http://s3.amazonaws.com/strawbees-learning-cms-stage/wp-content/uploads/2020/03/26130642/blinkingstar2-1536x1024.jpg 1536w, http://s3.amazonaws.com/strawbees-learning-cms-stage/wp-content/uploads/2020/03/26130642/blinkingstar2.jpg 2000w" sizes="(max-width: 1024px) 100vw, 1024px"></figure></li></ul></figure><div class="wp-block-strawbees-learning-horizontal"><h2>Hello world</h2><p>Paragraph here</p><div class="wp-block-button"><a class="wp-block-button__link" href="https://strawbees.com/store">Store</a></div></div>`

const contains = (arr, item) => arr.indexOf(item) !== -1

const querySelector = (el, selector) => {
	const all = querySelectorAll(el, selector)
	return all.length ? all[0] : []
}

const querySelectorAll = (el, selector) => {
	if (selector[0] === '.') {
		return getElementsByClassName(el, selector.substr(1))
	} else if (selector[0] === '#') {
		return getElementsById(el, selector.substr(1))
	} else {
		return getElementsByTagName(el, selector)
	}
}

const getElementsByClassName = (el, className) => {
	const selectedElements = []
	if (contains(el.classList, className)) {
		selectedElements.push(el)
	}
	const selectedChild = el.children.reduce((acc, child) => {
		const elements = getElementsByClassName(child, className)
		return acc.concat(elements)
	}, [])
	return selectedElements.concat(selectedChild)
}

const getElementsById = (el, id) => {
	const selectedElements = []
	if (el.id === id) {
		selectedElements.push(el)
	}
	const selectedChild = el.children.reduce((acc, child) => {
		const elements = getElementsById(child, id)
		return acc.concat(elements)
	}, [])
	return selectedElements.concat(selectedChild)
}

const getElementsByTagName = (el, tagName) => {
	const selectedElements = []
	if (el.tagName.toLowerCase() === tagName) {
		selectedElements.push(el)
	}
	const selectedChild = el.children.reduce((acc, child) => {
		const elements = getElementsByTagName(child, tagName)
		return acc.concat(elements)
	}, [])
	return selectedElements.concat(selectedChild)
}

const json = htmlToJson(content)

console.log(json)

let sel = getElementsByClassName(json, 'featured-media')
console.log('.featured-media', sel.length)

sel = getElementsById(json, 'test')
console.log('#test', sel.length)

sel = getElementsByTagName(json, 'img')
console.log('img', sel.length)

sel = querySelectorAll(json, 'img')
console.log(sel)
