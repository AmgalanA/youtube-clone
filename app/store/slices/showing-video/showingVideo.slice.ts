import { IGlobalState } from '@/types/utils/store/global-state.interface'
import { IVideo } from '@/types/utils/video/video.types'
import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'
import { ShowingVideoActions } from './showingVideo.actions'
import { IShowingVideoState } from './showingVideo.interface'

const initialState: IShowingVideoState = {
	isLoading: false,
	video: {} as IVideo
}

export const showingVideoSlice = createSlice({
	name: 'showing-video',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(HYDRATE, (state, { payload }: any) => {
				state.video = payload.showingVideo.video
			})
			.addCase(ShowingVideoActions.fetch.pending, state => {
				state.isLoading = true
			})
			.addCase(ShowingVideoActions.fetch.fulfilled, (state, { payload }) => {
				state.video = payload
				state.isLoading = false
			})
			.addCase(ShowingVideoActions.fetch.rejected, state => {
				state.isLoading = true
			})
			.addCase(ShowingVideoActions.sendComment.pending, state => {
				state.isLoading = true
			})
			.addCase(
				ShowingVideoActions.sendComment.fulfilled,
				(state, { payload }) => {
					state.video = {
						...state.video,
						comments: [...state.video.comments, payload]
					}
					state.isLoading = false
				}
			)
			.addCase(ShowingVideoActions.sendComment.rejected, state => {
				state.isLoading = true
			})
			.addCase(ShowingVideoActions.toggleLike.pending, state => {
				state.isLoading = true
			})
			.addCase(
				ShowingVideoActions.toggleLike.fulfilled,
				(state, { payload }: any) => {
					if (payload?.profileId) {
						//  Like was added
						state.video = {
							...state.video,
							likes: [...state.video.likes, payload]
						}
					} else {
						// Like was removed
						state.video = {
							...state.video,
							likes: state.video.likes.filter(like => like.id !== payload)
						}
					}
					state.isLoading = false
				}
			)
			.addCase(ShowingVideoActions.toggleLike.rejected, state => {
				state.isLoading = true
			})
	}
})

export const selectShowingVideo = (state: IGlobalState) => state.showingVideo
