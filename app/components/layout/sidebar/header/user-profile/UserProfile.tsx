import { useRouter } from 'next/router'
import { useCallback } from 'react'

import { useTypedSelector } from '@/hooks/store/useTypedSelector'
import styles from './UserProfile.module.scss'
import { selectProfile } from '@/store/slices/profile/profile.slice'
import Avatar from '@/components/utils/profile/avatar/Avatar'

const UserProfile = () => {
	const { profile } = useTypedSelector(selectProfile)

	const { push } = useRouter()

	const goToAuth = useCallback(() => {
		push('/auth')
	}, [push])

	return (
		<div className={styles.userProfile}>
			{profile ? (
				<div className={styles.avatarWrapper}>
					<Avatar url={profile.avatarUrl} />
				</div>
			) : (
				<button onClick={goToAuth}>Sign In</button>
			)}
		</div>
	)
}

export default UserProfile
