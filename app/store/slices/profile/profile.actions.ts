import { ILoginDto } from '@/types/dtos/profile/login.dto'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setCookie, parseCookies } from 'nookies'

import { ProfileService } from '../../../services/profile/profile.service'
import { ISignInDto } from '../../../types/dtos/profile/sign-in.dto'

export const ProfileActions = {
	signIn: createAsyncThunk(
		'/profile/sign-in',
		async (dto: ISignInDto, thunkApi) => {
			try {
				const response = await ProfileService.signIn(dto)

				setCookie(null, 'accessToken', response.tokens.accessToken)
				setCookie(null, 'refreshToken', response.tokens.refreshToken)

				return response.profile
			} catch (error) {
				console.log(`Sign in error: ${error}`)

				return thunkApi.rejectWithValue(error)
			}
		}
	),
	refresh: createAsyncThunk('/profile/refresh', async (_, thunkApi) => {
		try {
			const refreshToken = parseCookies(null).refreshToken

			const response = await ProfileService.refresh(refreshToken)

			setCookie(null, 'accessToken', response.tokens.accessToken)
			setCookie(null, 'refreshToken', response.tokens.refreshToken)

			return response.profile
		} catch (error) {
			console.log(`Refresh error: ${error}`)

			return thunkApi.rejectWithValue(error)
		}
	}),
	login: createAsyncThunk(
		'/profile/login',
		async (dto: ILoginDto, thunkApi) => {
			try {
				const response = await ProfileService.login(dto)

				return response.profile
			} catch (error) {
				console.log(`Login error: ${error}`)

				return thunkApi.rejectWithValue(error)
			}
		}
	),
	logout: createAsyncThunk('/profile/logout', async (_, thunkApi) => {
		try {
			const refreshToken = parseCookies(null).refreshToken

			const response = await ProfileService.logout(refreshToken)

			return response.profile
		} catch (error) {
			console.log(`Logout error: ${error}`)

			return thunkApi.rejectWithValue(error)
		}
	}),
	update: createAsyncThunk(
		'/profile/update',
		async (dto: FormData, thunkApi) => {
			try {
				const response = await ProfileService.update(dto)

				return response
			} catch (error) {
				console.log(`Update error: ${error}`)

				return thunkApi.rejectWithValue(error)
			}
		}
	)
}
