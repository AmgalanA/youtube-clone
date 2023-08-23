import { ISignUpFields } from '../sign-up/sign-up-fields.interface'

export interface ISignInFields
	extends Pick<ISignUpFields, 'email' | 'password'> {}
