import { IComment } from '@/types/utils/video/comment/comment.types'
import { FC } from 'react'
import styles from './Comment.module.scss'

const Comment: FC<{ comment: IComment }> = ({ comment }) => {
	return <div>{comment.text}</div>
}

export default Comment
