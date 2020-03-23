const filterMenuBySlug = (slug, data) => {
	if (!data) {
		return []
	}
	const menus = data.wordpress.menus.nodes
	const menu = menus.find(m => m.slug === slug)
	let menuItems = []
	if (menu && menu.menuItems && menu.menuItems.nodes) {
		menuItems = menu.menuItems.nodes
	}
	return menuItems
}

export default filterMenuBySlug
