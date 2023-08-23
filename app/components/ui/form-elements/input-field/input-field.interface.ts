import { FieldError } from 'react-hook-form'

export interface IInputField {
	error?: FieldError
	placeholder: string
	type?: string
	style?: any
}
