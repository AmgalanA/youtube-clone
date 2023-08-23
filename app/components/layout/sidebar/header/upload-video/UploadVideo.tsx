import { useCallback, useState } from 'react'
import { IoAddOutline } from 'react-icons/io5'
import UploadVideoModal from './upload-video-modal/UploadVideoModal'

import styles from './UploadVideo.module.scss'

const UploadVideo = () => {
	const [isOpenUploadVideoModal, setIsOpenUploadVideoModal] =
		useState<boolean>(false)

	const onClick = useCallback(() => {
		setIsOpenUploadVideoModal(prev => !prev)
	}, [isOpenUploadVideoModal, setIsOpenUploadVideoModal])

	return (
		<>
			<div className={styles.uploadVideo}>
				<IoAddOutline onClick={onClick} className={styles.icon} />
			</div>

			{isOpenUploadVideoModal && <UploadVideoModal />}
		</>
	)
}

export default UploadVideo
