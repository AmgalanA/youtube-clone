import { createSlice } from '@reduxjs/toolkit'

import { IProfileState } from './profile.interface'
import { ProfileActions } from './profile.actions'
import { IGlobalState } from '../../../types/utils/store/global-state.interface'

const initialState: IProfileState = {
	profile: null,
	isLoading: false
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(ProfileActions.signIn.pending, state => {
				state.isLoading = true
			})
			.addCase(ProfileActions.signIn.fulfilled, (state, { payload }) => {
				state.profile = payload
				state.isLoading = false
			})
			.addCase(ProfileActions.signIn.rejected, state => {
				state.isLoading = true
			})
			.addCase(ProfileActions.login.pending, state => {
				state.isLoading = true
			})
			.addCase(ProfileActions.login.fulfilled, (state, { payload }) => {
				state.profile = payload
				state.isLoading = false
			})
			.addCase(ProfileActions.login.rejected, state => {
				state.isLoading = true
			})
			.addCase(ProfileActions.refresh.pending, state => {
				state.isLoading = true
			})
			.addCase(ProfileActions.refresh.fulfilled, (state, { payload }) => {
				state.profile = payload
				state.isLoading = false
			})
			.addCase(ProfileActions.refresh.rejected, state => {
				state.isLoading = true
			})
			.addCase(ProfileActions.logout.pending, state => {
				state.isLoading = true
			})
			.addCase(ProfileActions.logout.fulfilled, (state, { payload }) => {
				state.profile = null
				state.isLoading = false
			})
			.addCase(ProfileActions.logout.rejected, state => {
				state.isLoading = true
			})
			.addCase(ProfileActions.update.pending, state => {
				state.isLoading = true
			})
			.addCase(ProfileActions.update.fulfilled, (state, { payload }) => {
				state.profile = payload
				state.isLoading = false
			})
			.addCase(ProfileActions.update.rejected, state => {
				state.isLoading = true
			})
	}
})

export const selectProfile = (state: IGlobalState) => state.profile
