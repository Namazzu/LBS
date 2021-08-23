import Head from 'next/head'
import Presentation from '../components/Presentation'
import Blocks from '../components/Blocks'
import styles from '../styles/Home.module.css'

export default function Home() {
	return (
		<>
			<Head>
				<title>LBS Accueil</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			</Head>
			<div className={styles.container}>
				<section>
					<Presentation />
				</section>
				<section>
					<Blocks />
				</section>
			</div>
		</>
	)
}
