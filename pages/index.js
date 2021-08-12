import Presentation from '../components/Presentation'
import Blocks from '../components/Blocks'
import styles from '../styles/Home.module.css'

export default function Home() {
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
