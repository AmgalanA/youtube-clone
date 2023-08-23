import { FC } from 'react'
import Link from 'next/link'

import { IHeaderItem } from '../header-item.interface'
import styles from './HeaderItem.module.scss'

const HeaderItem: FC<{ item: IHeaderItem }> = ({ item }) => {
	return (
		<div className={styles.headerItem}>
			<Link href={item.to}>
				<h1>{item.title}</h1>
			</Link>
		</div>
	)
}

export default HeaderItem
