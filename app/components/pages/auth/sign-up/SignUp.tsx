import { FC } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import InputField from '@/components/ui/form-elements/input-field/InputField'

import styles from './SignUp.module.scss'
import { useActions } from '../../../../hooks/store/useActions'
import { ISignUpFields } from './sign-up-fields.interface'

const SignUp: FC<{ onClick: () => void }> = ({ onClick }) => {
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<ISignUpFields>({
		mode: 'onChange'
	})

	const { signIn } = useActions()

	const onSubmit: SubmitHandler<ISignUpFields> = data => {
		signIn(data)
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<InputField
				{...register('email', {
					required: 'Please enter an email'
				})}
				placeholder='E-mail'
				type='email'
				error={errors.email}
			/>
			<InputField
				{...register('password', {
					required: 'Please enter a password'
				})}
				placeholder='Password'
				type='password'
				error={errors.password}
			/>
			<InputField
				{...register('name', {
					required: 'Please enter a name'
				})}
				placeholder='Name'
				error={errors.name}
			/>
			<InputField
				{...register('secondName', {
					required: 'Please enter a second name'
				})}
				placeholder='secondName'
				error={errors.secondName}
			/>

			<h2>
				Already have an acccount?
				<span onClick={onClick}>Sign Up</span>
			</h2>

			<button type='submit'>Sign Up</button>
		</form>
	)
}

export default SignUp
