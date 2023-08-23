import { FC } from 'react'
import { AiOutlineUpload } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'

import { IFileUploadProps } from './file-upload.interface'

import styles from './FileUpload.module.scss'

const FileUpload: FC<IFileUploadProps> = ({ text, clear, url, onClick }) => {
	return (
		<div className={styles.fileUpload}>
			{url ? (
				<div className={styles.selectedImageWrapper}>
					<IoCloseOutline onClick={clear} className={styles.closeIcon} />
					<img src={url} />
				</div>
			) : (
				<>
					<h1>Upload {text} here 👇</h1>
					<AiOutlineUpload onClick={onClick} className={styles.uploadIcon} />
				</>
			)}
		</div>
	)
}

export default FileUpload
