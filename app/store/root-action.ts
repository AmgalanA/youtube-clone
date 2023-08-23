import { ProfileActions } from './slices/profile/profile.actions'
import { ShowingVideoActions } from './slices/showing-video/showingVideo.actions'
import { VideoActions } from './slices/video/video.actions'

export const rootAction = {
	...ProfileActions,
	...VideoActions,
	...ShowingVideoActions
}
