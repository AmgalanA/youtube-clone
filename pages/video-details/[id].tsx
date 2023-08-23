import VideoDetails from '@/components/pages/video-details/VideoDetails'
import { VideoService } from '@/services/video/video.service'
import { ShowingVideoActions } from '@/store/slices/showing-video/showingVideo.actions'
import { wrapper } from '@/store/store'
import { IVideo } from '@/types/utils/video/video.types'
import { GetServerSideProps, NextPage } from 'next'

const VideoDetailsPage: NextPage = () => {
	return <VideoDetails />
}

export default VideoDetailsPage

export const getServerSideProps: GetServerSideProps =
	wrapper.getServerSideProps(({ dispatch }) => async ({ params }) => {
		const id = params?.id

		if (!id) {
			return { props: {} }
		}

		await dispatch(ShowingVideoActions.fetch(+id))

		return { props: {} }
	})
