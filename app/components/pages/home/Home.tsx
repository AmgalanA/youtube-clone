import styles from './Home.module.scss'

import Layout from '@/components/layout/Layout'
import { useTypedSelector } from '@/hooks/store/useTypedSelector'
import { selectVideo } from '@/store/slices/video/video.slice'
import Video from '@/components/utils/video/Video'

const Home = () => {
	const { videos } = useTypedSelector(selectVideo)

	return (
		<Layout title='Home'>
			<div className={styles.home}>
				<div className={styles.videosWrapper}>
					{videos.map(video => (
						<Video key={video.id} video={video} />
					))}
				</div>
			</div>
		</Layout>
	)
}

export default Home
