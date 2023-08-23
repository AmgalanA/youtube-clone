import { VideoService } from '@/services/video/video.service'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const VideoActions = {
	updateVideo: createAsyncThunk(
		'video/updateVideo',
		async (formData: FormData, thunkApi) => {
			try {
				const response = await VideoService.update(formData)

				return response
			} catch (error) {
				return thunkApi.rejectWithValue(error)
			}
		}
	),
	getAll: createAsyncThunk(
		'video/getAll',
		async (limit: number | undefined, thunkApi) => {
			try {
				const response = await VideoService.getAll(limit)

				return response
			} catch (error) {
				return thunkApi.rejectWithValue(error)
			}
		}
	)
}
