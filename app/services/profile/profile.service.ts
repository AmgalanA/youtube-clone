import { ISignInDto } from '../../types/dtos/profile/sign-in.dto'
import { axiosClassic } from '../../api/axios'

import { IAuthResponse } from '../../types/responses/profile/auth.types'
import { ILoginDto } from '@/types/dtos/profile/login.dto'
import { IProfile } from '@/types/utils/profile/profile.types'

export const ProfileService = {
	signIn: async (dto: ISignInDto) => {
		const response = await axiosClassic.post<IAuthResponse>(
			`/auth/register`,
			dto
		)

		return response.data
	},
	refresh: async (refreshToken: string) => {
		const response = await axiosClassic.post<IAuthResponse>(`/auth/refresh`, {
			refreshToken
		})

		return response.data
	},
	login: async (dto: ILoginDto) => {
		const response = await axiosClassic.post<IAuthResponse>(`/auth/login`, dto)

		return response.data
	},
	logout: async (refreshToken: string) => {
		const response = await axiosClassic.post(`/auth/logout`, {
			refreshToken
		})

		return response.data
	},
	update: async (dto: FormData) => {
		const response = await axiosClassic.put<IProfile>(`/profile/update`, dto)

		return response.data
	}
}
