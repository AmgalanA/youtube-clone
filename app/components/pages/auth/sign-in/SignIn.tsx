import InputField from '@/components/ui/form-elements/input-field/InputField'
import { useActions } from '@/hooks/store/useActions'
import { FC } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { ISignInFields } from './sign-in-fields.interface'
import styles from './SignIn.module.scss'

const SignIn: FC<{ onClick: () => void }> = ({ onClick }) => {
	const {
		register,
		formState: { errors },
		handleSubmit
	} = useForm<ISignInFields>({
		mode: 'onChange'
	})

	const { login } = useActions()

	const onSubmit: SubmitHandler<ISignInFields> = data => {
		login(data)
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

			<h2>
				Don't have an acccount?
				<span onClick={onClick}>Sign In</span>
			</h2>

			<button type='submit'>Sign In</button>
		</form>
	)
}

export default SignIn
