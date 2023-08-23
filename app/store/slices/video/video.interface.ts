import { IVideo } from '@/types/utils/video/video.types'

export interface IVideoState {
	videos: IVideo[]
	isLoading: boolean
}
