import type { GetServerSideProps, NextPage } from 'next'

import Home from '@/components/pages/home/Home'
import { wrapper } from '@/store/store'
import { VideoActions } from '@/store/slices/video/video.actions'
import { LIMIT } from '@/utils/const'

const HomePage: NextPage = () => {
	return <Home />
}

export default HomePage

export const getServerSideProps: GetServerSideProps =
	wrapper.getServerSideProps(({ dispatch }) => async () => {
		await dispatch(VideoActions.getAll(LIMIT))

		return { props: {} }
	})
