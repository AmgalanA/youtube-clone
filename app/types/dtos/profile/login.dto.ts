import { ISignInDto } from './sign-in.dto'

export interface ILoginDto extends Pick<ISignInDto, 'email' | 'password'> {}
