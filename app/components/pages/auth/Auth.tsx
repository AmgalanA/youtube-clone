import { useCallback, useState } from 'react'

import styles from './Auth.module.scss'
import SignIn from './sign-in/SignIn'
import SignUp from './sign-up/SignUp'
import { useAuth } from '../../../hooks/auth/useAuth'

const Auth = () => {
	const [type, setType] = useState<'sign-in' | 'sign-up'>('sign-up')

	const profile = useAuth()

	const onClick = useCallback(() => {
		if (type === 'sign-in') {
			setType('sign-up')
		} else {
			setType('sign-in')
		}
	}, [type, setType])

	return (
		<div className={styles.auth}>
			{type === 'sign-in' ? (
				<SignIn onClick={onClick} />
			) : (
				<SignUp onClick={onClick} />
			)}
		</div>
	)
}

export default Auth
