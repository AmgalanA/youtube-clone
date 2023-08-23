import styles from './UploadVideoFile.module.scss'
import { AiOutlineUpload } from 'react-icons/ai'
import { ChangeEvent, Dispatch, FC, SetStateAction, useState } from 'react'
import { VideoService } from '@/services/video/video.service'
import { useFileUpload } from '@/hooks/utils/file-upload/useFileUpload'
import { selectProfile } from '@/store/slices/profile/profile.slice'
import { useTypedSelector } from '@/hooks/store/useTypedSelector'
import { acceptVideo } from '@/utils/const'

const UploadVideoFile: FC<{
	setVideoId: Dispatch<SetStateAction<number | null>>
}> = ({ setVideoId }) => {
	const [progress, setProgress] = useState(0)

	const { profile } = useTypedSelector(selectProfile)

	const { ref, onClick } = useFileUpload()

	const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
		if (!e.target.files || !profile) return

		const formData = new FormData()

		formData.append('file', e.target.files[0])
		formData.append('senderId', profile.id.toString())

		const response = await VideoService.create(formData, setProgress)

		setVideoId(response)
	}

	return (
		<div className={styles.uploadVideoFile}>
			<input
				accept={acceptVideo}
				type='file'
				ref={ref}
				onChange={onChange}
				hidden
			/>
			<h1>Upload video file here 👇</h1>
			<AiOutlineUpload onClick={onClick} className={styles.uploadIcon} />
		</div>
	)
}

export default UploadVideoFile
