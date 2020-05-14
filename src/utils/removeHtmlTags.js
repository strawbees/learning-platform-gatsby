const regex = /(<([^>]+)>)/ig

export default function removeHtmlTags(string) {
	return string.replace(regex, '')
}
