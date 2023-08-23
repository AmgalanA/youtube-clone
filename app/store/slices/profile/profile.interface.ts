import { IProfile } from '../../../types/utils/profile/profile.types'

export interface IProfileState {
	profile: IProfile | null
	isLoading: boolean
}
