import { ISignInFields } from '../auth/sign-in/sign-in-fields.interface'
import { ISignUpFields } from '../auth/sign-up/sign-up-fields.interface'

export interface IEditProfileFields
	extends Pick<ISignUpFields, 'name' | 'secondName'> {
	status: string
}
