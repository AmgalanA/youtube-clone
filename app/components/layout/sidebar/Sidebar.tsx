import Menu from './menu/Menu'
import styles from './Sidebar.module.scss'

const Sidebar = () => {
	return (
		<div className={styles.sidebar}>
			<Menu />
		</div>
	)
}

export default Sidebar
