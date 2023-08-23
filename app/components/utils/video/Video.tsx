import { FC, useCallback } from 'react'
import { AiOutlineLike, AiOutlineComment } from 'react-icons/ai'

import { IVideo } from '@/types/utils/video/video.types'
import styles from './Video.module.scss'
import Widget from './widget/Widget'
import { useRouter } from 'next/router'

const Video: FC<{ video: IVideo }> = ({ video }) => {
	const { push } = useRouter()

	const goToVideoPage = useCallback(() => {
		push(`/video-details/${video.id}`)
	}, [push])

	return (
		<div className={styles.video}>
			<img
				src={`${process.env.NEXT_PUBLIC_BASE_URL}/${video.thumbnail}`}
				alt='video-thumbnail'
			/>

			<h1 onClick={goToVideoPage}>{video.caption}</h1>

			<div className={styles.widgetsWrapper}>
				<Widget
					text={`${video.likes.length} Likes`}
					icon={{ icon: AiOutlineLike }}
				/>
				<Widget
					text={`${video.comments.length} Comments`}
					icon={{ icon: AiOutlineComment }}
				/>
			</div>
		</div>
	)
}

export default Video
