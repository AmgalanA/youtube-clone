import { ChangeEvent, useCallback, useRef, useState } from 'react'
import { IFile } from './file.interface'

export const useFileUpload = () => {
	const [file, setFile] = useState<IFile>({} as IFile)

	const ref = useRef<HTMLInputElement>(null)

	const onClick = useCallback(() => {
		ref.current?.click()
	}, [ref.current])

	const onChange = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files

		if (!files?.[0]) return

		const file = files[0]

		const url = URL.createObjectURL(file)

		setFile({
			url,
			file
		})
	}

	const clear = useCallback(() => {
		setFile({} as IFile)
	}, [setFile, file])

	return { file, clear, onChange, ref, onClick }
}
