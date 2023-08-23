import { FC } from 'react'
import { IWidget } from './widget.interface'
import styles from './Widget.module.scss'

const Widget: FC<IWidget> = ({ text, icon, onClick, hasLiked }) => {
	return (
		<div onClick={onClick} className={styles.widget}>
			<icon.icon
				style={{
					color: hasLiked ? 'red' : 'white'
				}}
				className={styles.icon}
			/>
			<h2>{text}</h2>
		</div>
	)
}

export default Widget
