import { IProfile } from '../profile/profile.types'
import { IComment } from './comment/comment.types'
import { ILike } from './like/like.types'

export interface IVideo {
	id: number
	caption: string
	videoUrl: string
	thumbnail: string
	likes: ILike[]
	comments: IComment[]
	senderId: number
	sender: IProfile
}
