import { FC } from 'react'
import cn from 'classnames'
import {
	AiOutlinePlayCircle,
	AiOutlinePauseCircle,
	AiOutlineLike,
	AiOutlineComment
} from 'react-icons/ai'
import { BsFullscreen } from 'react-icons/bs'

import Layout from '@/components/layout/Layout'
import styles from './VideoDetails.module.scss'
import Widget from '@/components/utils/video/widget/Widget'
import CommentForm from './comment-form/CommentForm'
import { usePlayer } from '@/hooks/video/video-player/usePlayer'
import { useTypedSelector } from '@/hooks/store/useTypedSelector'
import { selectShowingVideo } from '@/store/slices/showing-video/showingVideo.slice'
import { useActions } from '@/hooks/store/useActions'
import { selectProfile } from '@/store/slices/profile/profile.slice'
import Comment from './comment/Comment'

const VideoDetails: FC<{}> = () => {
	const {
		videoRef,
		toggleVideo,
		status: { isPlaying, progress },
		fullScreen
	} = usePlayer()

	const { profile } = useTypedSelector(selectProfile)

	const { video } = useTypedSelector(selectShowingVideo)

	const hasLiked = video.likes
		.map(like => like.profileId)
		.includes(Number(profile?.id))

	const { toggleLike: toggleLikeAction } = useActions()

	const toggleLike = () => {
		if (!profile || !video) return

		const dto = {
			profileId: profile.id,
			videoId: video.id
		}

		toggleLikeAction(dto)
	}

	return (
		<Layout title={`${video.caption}`}>
			<div className={styles.videoDetails}>
				<div className={styles.videoInfo}>
					<div className={styles.videoWrapper}>
						<video
							onClick={toggleVideo}
							preload='metadata'
							ref={videoRef}
							// poster={`${process.env.NEXT_PUBLIC_BASE_URL}/${video.thumbnail}`}
							src={`${process.env.NEXT_PUBLIC_BASE_URL}/${video.videoUrl}`}
						/>

						<div
							className={cn(styles.controls, {
								[styles.hide]: isPlaying
							})}
						>
							<div className={styles.buttonsWrapper}>
								{isPlaying ? (
									<AiOutlinePauseCircle
										className={styles.icon}
										onClick={toggleVideo}
									/>
								) : (
									<AiOutlinePlayCircle
										className={styles.icon}
										onClick={toggleVideo}
									/>
								)}
							</div>
							<div className={styles.progressWrapper}>
								<div
									className={styles.progress}
									style={{
										width: `${progress}%`
									}}
								/>
							</div>

							<BsFullscreen className={styles.icon} />
						</div>
					</div>

					<div className={styles.widgetsWrapper}>
						<Widget
							hasLiked={hasLiked}
							text={`${video.likes.length} Likes`}
							icon={{ icon: AiOutlineLike }}
							onClick={toggleLike}
						/>
						<Widget
							text={`${video.comments.length} Comments`}
							icon={{ icon: AiOutlineComment }}
							// onClick={onLikeClick}
						/>
					</div>
				</div>

				<div className={styles.comments}>
					<CommentForm />
					<div className={styles.commentsWrapper}>
						{video.comments.map(comment => (
							<Comment key={comment.id} comment={comment} />
						))}
					</div>
				</div>
			</div>
		</Layout>
	)
}

export default VideoDetails
