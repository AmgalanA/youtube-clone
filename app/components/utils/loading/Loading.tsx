import { useAuth } from '@/hooks/auth/useAuth'
import styles from './Loading.module.scss'

const Loading = () => {
	const profile = useAuth()

	return <div>Loading</div>
}

export default Loading
