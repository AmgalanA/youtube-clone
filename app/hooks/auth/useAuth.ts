import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { parseCookies } from 'nookies'

import { useTypedSelector } from '../store/useTypedSelector'
import { selectProfile } from '../../store/slices/profile/profile.slice'
import { useActions } from '../store/useActions'

let isRetry = false
export const useAuth = () => {
	const { pathname, back } = useRouter()

	const { profile } = useTypedSelector(selectProfile)

	const { refresh } = useActions()

	useEffect(() => {
		if (parseCookies(null).refreshToken && !isRetry) {
			refresh()

			isRetry = true
		}

		if (profile && pathname.includes('auth')) {
			back()
		}
	}, [profile])

	return profile
}
