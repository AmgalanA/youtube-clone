import { IProfile } from '../../profile/profile.types'
import { IVideo } from '../video.types'

export interface ILike {
	id: number
	profileId: number
	profile: IProfile
	videoId: number
	video: IVideo
}
