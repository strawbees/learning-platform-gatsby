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

export {
	querySelector,
	querySelectorAll,
	getElementsByClassName,
	getElementsById,
	getElementsByTagName,
	contains
}
