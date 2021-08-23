import Presentation from '../components/Presentation'
import Blocks from '../components/Blocks'
import styles from '../styles/Home.module.css'
import { getSortedWorksData } from '../lib/works'

export default function Home({ allWorkData }) {
	console.log({ allWorkData })

	return (
		<div className={styles.container}>
			<section>
				<Presentation />
			</section>
			<section>
				<Blocks />
			</section>
		</div>
	)
}

export async function getStaticProps() {
	const allWorkData = getSortedWorksData()
	return {
		props: {
			allWorkData,
		},
	}
}
