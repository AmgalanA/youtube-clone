import MenuItem from './menu-item/MenuItem'
import { menuItems } from './menu-items'
import styles from './Menu.module.scss'

const Menu = () => {
	return (
		<div className={styles.menu}>
			<h1>Menu</h1>

			<div className={styles.menuItems}>
				{menuItems.map(item => (
					<MenuItem item={item} key={item.title} />
				))}
			</div>
		</div>
	)
}

export default Menu
