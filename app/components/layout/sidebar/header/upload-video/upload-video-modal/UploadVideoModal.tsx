import InputField from '@/components/ui/form-elements/input-field/InputField'
import FileUpload from '@/components/utils/file-upload/FileUpload'
import { useActions } from '@/hooks/store/useActions'
import { useTypedSelector } from '@/hooks/store/useTypedSelector'
import { useFileUpload } from '@/hooks/utils/file-upload/useFileUpload'
import { selectProfile } from '@/store/slices/profile/profile.slice'
import { acceptImage } from '@/utils/const'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { IUploadVideoFields } from './upload-video-fields.interface'
import UploadVideoFile from './upload-video-file/UploadVideoFile'
import styles from './UploadVideoModal.module.scss'

const UploadVideoModal = () => {
	const [videoId, setVideoId] = useState<number | null>(null)

	const { profile } = useTypedSelector(selectProfile)

	const {
		formState: { errors },
		register,
		handleSubmit
	} = useForm<IUploadVideoFields>({
		mode: 'onChange'
	})

	const { updateVideo } = useActions()

	const { onClick, clear, file, ref, onChange } = useFileUpload()

	const onSubmit: SubmitHandler<IUploadVideoFields> = ({ caption }) => {
		if (!file.file || !caption || !profile || !videoId) return

		const formData = new FormData()

		formData.append('file', file.file)
		formData.append('id', videoId.toString())
		formData.append('caption', caption)

		updateVideo(formData)
	}

	return (
		<div className={styles.uploadVideoModal}>
			{!videoId ? (
				<UploadVideoFile setVideoId={setVideoId} />
			) : (
				<form onSubmit={handleSubmit(onSubmit)}>
					<h1>Upload New Video</h1>

					<InputField
						{...register('caption', {
							required: 'Please enter some caption...'
						})}
						placeholder='Caption to your video...'
						error={errors.caption}
					/>

					<input
						onChange={onChange}
						type='file'
						hidden
						ref={ref}
						accept={acceptImage}
					/>

					<FileUpload
						text='thumbnail'
						onClick={onClick}
						clear={clear}
						url={file.url}
					/>

					<button type='submit'>Upload</button>
				</form>
			)}
		</div>
	)
}

export default UploadVideoModal
