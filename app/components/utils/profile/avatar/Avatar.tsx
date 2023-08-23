import { FC, useCallback, useState } from 'react'
import { CgProfile } from 'react-icons/cg'

import styles from './Avatar.module.scss'
import EditProfileMenu from './edit-profile-menu/EditProfileMenu'

const Avatar: FC<{ url?: string }> = ({ url }) => {
	const [isEditProfileMenuOpen, setIsEditProfileMenuOpen] =
		useState<boolean>(false)

	const onClick = useCallback(() => {
		setIsEditProfileMenuOpen(prev => !prev)
	}, [isEditProfileMenuOpen, setIsEditProfileMenuOpen])

	return (
		<div className={styles.avatar} onClick={onClick}>
			{url ? (
				<img src={`${process.env.NEXT_PUBLIC_BASE_URL}/${url}`} />
			) : (
				<CgProfile className={styles.icon} />
			)}

			{isEditProfileMenuOpen && <EditProfileMenu />}
		</div>
	)
}

export default Avatar
