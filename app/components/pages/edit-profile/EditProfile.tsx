import Layout from '@/components/layout/Layout'
import { SubmitHandler, useForm } from 'react-hook-form'

import styles from './EditProfile.module.scss'
import InputField from '@/components/ui/form-elements/input-field/InputField'
import Loading from '@/components/utils/loading/Loading'
import { useTypedSelector } from '@/hooks/store/useTypedSelector'
import { selectProfile } from '@/store/slices/profile/profile.slice'
import { IEditProfileFields } from './edit-profile-fields.interface'
import { useFileUpload } from '@/hooks/utils/file-upload/useFileUpload'
import FileUpload from '@/components/utils/file-upload/FileUpload'
import { acceptImage } from '@/utils/const'
import { useActions } from '@/hooks/store/useActions'

const EditProfile = () => {
	const { register, handleSubmit } = useForm<IEditProfileFields>({
		mode: 'onChange'
	})

	const { profile } = useTypedSelector(selectProfile)

	const { onChange, onClick, file, ref, clear } = useFileUpload()

	const { update: updateProfile } = useActions()

	const onSubmit: SubmitHandler<IEditProfileFields> = ({
		name,
		secondName,
		status
	}) => {
		if (!profile) return

		const formData = new FormData()

		formData.append('name', name)
		formData.append('secondName', secondName)
		formData.append('status', status)
		formData.append('id', profile.id.toString())
		if (file.file) {
			formData.append('file', file.file)
		}

		updateProfile(formData)
	}

	if (!profile) return <Loading />

	return (
		<Layout title='Edit Profile'>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.editProfile}>
				<InputField
					{...register('name')}
					placeholder={`Current name: ${profile.name}`}
				/>

				<InputField
					{...register('secondName')}
					placeholder={`Current second name: ${profile.secondName}`}
				/>

				<InputField
					{...register('status')}
					placeholder={
						profile.status ? `Current status: ${profile.name}` : `No status`
					}
				/>

				<FileUpload
					text='avatar'
					onClick={onClick}
					url={file.url}
					clear={clear}
				/>

				<input
					accept={acceptImage}
					type='file'
					onChange={onChange}
					ref={ref}
					hidden
				/>

				<button type='submit'>Update</button>
			</form>
		</Layout>
	)
}

export default EditProfile
