import { IGlobalState } from '@/types/utils/store/global-state.interface'
import { createSlice } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import { VideoActions } from './video.actions'
import { IVideoState } from './video.interface'

const initialState: IVideoState = {
	videos: [],
	isLoading: false
}

export const videoSlice = createSlice({
	name: 'video',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(HYDRATE, (state, { payload }: any) => {
				state.videos = payload.video.videos
			})
			.addCase(VideoActions.updateVideo.pending, state => {
				state.isLoading = true
			})
			.addCase(VideoActions.updateVideo.fulfilled, (state, { payload }) => {
				state.videos = [...state.videos, payload]
				state.isLoading = false
			})
			.addCase(VideoActions.updateVideo.rejected, state => {
				state.isLoading = true
			})
			.addCase(VideoActions.getAll.pending, state => {
				state.isLoading = true
			})
			.addCase(VideoActions.getAll.fulfilled, (state, { payload }) => {
				state.videos = payload
				state.isLoading = false
			})
			.addCase(VideoActions.getAll.rejected, state => {
				state.isLoading = true
			})
	}
})

export const selectVideo = (state: IGlobalState) => state.video
