import { useTypedSelector } from '@/hooks/store/useTypedSelector'
import { selectProfile } from '@/store/slices/profile/profile.slice'
import { useRouter } from 'next/router'
import { MouseEvent, useCallback } from 'react'
import styles from './EditProfileMenu.module.scss'

const EditProfileMenu = () => {
	const { push } = useRouter()

	const { profile } = useTypedSelector(selectProfile)

	const goToEditPage = useCallback(
		(e: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => {
			e.stopPropagation()

			if (!profile) return

			push(`/edit-profile/${profile.id}`)
		},
		[push, profile]
	)

	return (
		<div onClick={e => goToEditPage(e)} className={styles.editProfileMenu}>
			<ul>
				<li>Edit Profile</li>
			</ul>
		</div>
	)
}

export default EditProfileMenu
