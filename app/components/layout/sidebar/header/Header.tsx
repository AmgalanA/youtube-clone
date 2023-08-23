import { FC } from 'react'

import HeaderItem from './header-item/HeaderItem'
import { headerItems } from './header-items'
import styles from './Header.module.scss'
import UploadVideo from './upload-video/UploadVideo'
import UserProfile from './user-profile/UserProfile'

const Header: FC = () => {
	return (
		<header className={styles.header}>
			<div className={styles.headerItemsWrapper}>
				{headerItems.map(item => (
					<HeaderItem key={item.title} item={item} />
				))}
			</div>

			<UserProfile />

			<UploadVideo />
		</header>
	)
}

export default Header
