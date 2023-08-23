import { IMenuItem } from './menu-item.interface'

import { AiFillHome, AiOutlineClockCircle } from 'react-icons/ai'
import { RiCompassDiscoverLine } from 'react-icons/ri'

export const menuItems: IMenuItem[] = [
	{
		title: 'Home',
		to: '/',
		icon: AiFillHome
	},
	{
		title: 'Discover',
		to: '/discover',
		icon: AiOutlineClockCircle
	},
	{
		title: 'Latest',
		to: 'latest',
		icon: RiCompassDiscoverLine
	}
]
