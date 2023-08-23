import { CommentService } from '@/services/video/comment/comment.service'
import { VideoService } from '@/services/video/video.service'
import { ICreateCommentDto } from '@/types/dtos/video/comment/create-comment.dto'
import { IToggleLikeDto } from '@/types/dtos/video/toggle-like.dto'
import { createAsyncThunk } from '@reduxjs/toolkit'

export const ShowingVideoActions = {
	fetch: createAsyncThunk('showing-video/fetch', async (id: number) => {
		const response = await VideoService.byId(id)

		return response
	}),

	toggleLike: createAsyncThunk(
		'showing-video/toggle-like',
		async (dto: IToggleLikeDto) => {
			const response = await VideoService.toggleLike(dto)

			if (response.id) {
				return response
			}

			return response
		}
	),

	sendComment: createAsyncThunk(
		'showing-video/send-comment',
		async (dto: ICreateCommentDto) => {
			const response = await CommentService.create(dto)

			return response
		}
	)
}
