import { IShowingVideoState } from '@/store/slices/showing-video/showingVideo.interface'
import { IVideoState } from '@/store/slices/video/video.interface'
import { IProfileState } from '../../../store/slices/profile/profile.interface'

export interface IGlobalState {
	profile: IProfileState
	video: IVideoState
	showingVideo: IShowingVideoState
}
