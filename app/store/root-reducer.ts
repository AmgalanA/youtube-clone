import { profileSlice } from './slices/profile/profile.slice'
import { showingVideoSlice } from './slices/showing-video/showingVideo.slice'
import { videoSlice } from './slices/video/video.slice'

export const rootReducer = {
	profile: profileSlice.reducer,
	video: videoSlice.reducer,
	showingVideo: showingVideoSlice.reducer
}
