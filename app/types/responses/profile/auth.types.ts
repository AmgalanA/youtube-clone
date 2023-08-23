import { IProfile } from '../../utils/profile/profile.types'

export interface IAuthResponse {
	tokens: {
		refreshToken: string
		accessToken: string
	}
	profile: IProfile
}
