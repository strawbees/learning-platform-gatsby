const filterMenuBySlug = (slug, menus) => {
	if (!menus) {
		return []
	}
	const menu = menus.find(m => m.slug === slug)
	let menuItems = []
	if (menu && menu.menuItems && menu.menuItems.nodes) {
		menuItems = menu.menuItems.nodes
	}
	return menuItems
}

export default filterMenuBySlug
