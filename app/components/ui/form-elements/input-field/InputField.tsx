import { forwardRef } from 'react'

import styles from './InputField.module.scss'

import { IInputField } from './input-field.interface'

const InputField = forwardRef<HTMLInputElement, IInputField>(
	({ placeholder, type = 'text', error, style, ...rest }, ref) => {
		return (
			<div className={styles.inputField}>
				<input type={type} placeholder={placeholder} ref={ref} {...rest} />

				{error && <span>{error.message}</span>}
			</div>
		)
	}
)

export default InputField
