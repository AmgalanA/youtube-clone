import { FC } from 'react'
import Link from 'next/link'

import { IMenuItem } from '../menu-item.interface'
import styles from './MenuItem.module.scss'

const MenuItem: FC<{ item: IMenuItem }> = ({ item }) => {
	return (
		<div className={styles.menuItem}>
			<item.icon className={styles.icon} />
			<Link href={item.to}>
				<h1>{item.title}</h1>
			</Link>
		</div>
	)
}

export default MenuItem
