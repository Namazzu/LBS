import Link from 'next/link'
import style from '../styles/Navbar.module.css'
export function Navbar() {
	return (
		<div className={style.container}>
			<h2 className={style.logo}>
				<Link href='/'>
					<a>LBS</a>
				</Link>
			</h2>
			<ul className={style.nav_items_container}>
				<li className={style.nav_item}>
					<Link href='/works'>
						<a>Réalisation</a>
					</Link>
				</li>
				<li className={style.nav_item}>
					<Link href='/contact'>
						<a>Contact</a>
					</Link>
				</li>
			</ul>
		</div>
	)
}
