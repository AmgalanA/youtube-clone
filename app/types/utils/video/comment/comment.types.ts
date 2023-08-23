import { IProfile } from '../../profile/profile.types'
import { IVideo } from '../video.types'

export interface IComment {
	id: number
	text: string
	likes: number[]
	senderId: number
	sender: IProfile
	videoId: number
	video: IVideo
}
