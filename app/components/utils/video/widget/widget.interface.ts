import { IconType } from 'react-icons'

export interface IWidget {
	text: string
	onClick?: () => void
	icon: { icon: IconType }
	hasLiked?: boolean
}
