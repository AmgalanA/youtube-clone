export interface IProfile {
	id: number
	name: string
	secondName: string
	userId: number
	status: string | ''
	avatarUrl: string | ''
	isOnline: boolean
	lastSeen: string
}
