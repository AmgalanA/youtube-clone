import { ICreateCommentDto } from '@/types/dtos/video/comment/create-comment.dto'
import { IComment } from '@/types/utils/video/comment/comment.types'
import { axiosClassic } from 'api/axios'

export const CommentService = {
	create: async (dto: ICreateCommentDto) => {
		const response = await axiosClassic.post<IComment>(
			`/video/send-comment`,
			dto
		)

		return response.data
	}
}
