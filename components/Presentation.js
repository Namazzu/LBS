import style from '../styles/presentation.module.css'
export default function Presentation() {
	return (
		<div className={style.container}>
			<div className={style.pres_container}>
				<h2 className={style.title}>Bienvenue sur Les Bons Services</h2>
				<div className={style.text}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged.
				</div>
			</div>
		</div>
	)
}
