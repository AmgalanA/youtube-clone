import Head from 'next/head'
import { FC, PropsWithChildren } from 'react'

import styles from './Layout.module.scss'
import Header from './sidebar/header/Header'
import Sidebar from './sidebar/Sidebar'
import { useAuth } from '../../hooks/auth/useAuth'

const Layout: FC<PropsWithChildren<{ title: string }>> = ({
	children,
	title
}) => {
	const profile = useAuth()

	return (
		<div className={styles.layout}>
			<Head>
				<title>{title}</title>
			</Head>

			<Sidebar />
			<main>
				<Header />
				{children}
			</main>
		</div>
	)
}

export default Layout
