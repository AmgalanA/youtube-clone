import styles from './CommentForm.module.scss'

import { AiOutlineSend } from 'react-icons/ai'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useTypedSelector } from '@/hooks/store/useTypedSelector'
import { selectProfile } from '@/store/slices/profile/profile.slice'
import { selectShowingVideo } from '@/store/slices/showing-video/showingVideo.slice'
import { useActions } from '@/hooks/store/useActions'

const CommentForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<{ text: string }>({
		mode: 'onChange'
	})

	const { profile } = useTypedSelector(selectProfile)

	const { video } = useTypedSelector(selectShowingVideo)

	const { sendComment } = useActions()

	const onSubmit: SubmitHandler<{ text: string }> = async ({ text }) => {
		if (!profile || !video || !text) return

		const payload = {
			videoId: video.id,
			senderId: profile.id,
			text
		}

		sendComment(payload)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)} className={styles.commentForm}>
			<input
				placeholder='Type in a comment...'
				{...register('text', {
					required: `In order to send a message, you need to type in some text`
				})}
				type='text'
			/>
			{errors.text && (
				<span className={styles.error}>{errors.text.message}</span>
			)}
			<button type='submit'>
				<AiOutlineSend className={styles.sendIcon} />
			</button>
		</form>
	)
}

export default CommentForm
