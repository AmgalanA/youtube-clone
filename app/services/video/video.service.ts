import { IToggleLikeDto } from '@/types/dtos/video/toggle-like.dto'
import { ILike } from '@/types/utils/video/like/like.types'
import { IVideo } from '@/types/utils/video/video.types'
import { axiosClassic } from 'api/axios'
import { Dispatch, SetStateAction } from 'react'

export const VideoService = {
	create: async (
		formData: FormData,
		setProgress: Dispatch<SetStateAction<number>>
	) => {
		const response = await axiosClassic.post<number>(
			`/video/create`,
			formData,
			{
				headers: {
					'Content-Type': 'multipart/form-data'
				},
				onUploadProgress(progressEvent) {
					if (progressEvent.total) {
						const progress = (progressEvent.loaded / progressEvent.total) * 100

						setProgress(Math.ceil(progress))
					}
				}
			}
		)

		return response.data
	},
	update: async (formData: FormData) => {
		const response = await axiosClassic.put<IVideo>(`/video/update`, formData)

		return response.data
	},
	getAll: async (limit?: number) => {
		const response = await axiosClassic.get<IVideo[]>(
			`/video/get-all?limit=${limit}`
		)

		return response.data
	},
	byId: async (id: number) => {
		const response = await axiosClassic.get<IVideo>(`/video/by-id/${id}`)

		return response.data
	},
	toggleLike: async (dto: IToggleLikeDto) => {
		const response = await axiosClassic.patch<ILike>(`/video/toggle-like`, dto)

		return response.data
	}
}
