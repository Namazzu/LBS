import Image from 'next/image'
import brico1 from '../public/brico1.jpeg'
import brico2 from '../public/brico2.jpeg'
import brico3 from '../public/brico3.jpeg'
import style from '../styles/blocks.module.css'
export default function Blocks() {
	return (
		<div className={style.blocks_container}>
			<div className={style.block}>
				<div className={style.image_item}>
					<Image src={brico1} alt='picture of maker1' layout='responsive' />
				</div>
				<span className={style.text}>
				Notre entreprise sera à votre écoute, afin de construire et réaliser avec vous vos différents
projets
Nous resterons à vos coté afin de vous accompagner dans les différentes étapes de vos
Entreprises.
				</span>
			</div>
			<div className={`${style.block} ${style.reverse}`}>
				<div className={style.image_item}>
					<Image src={brico2} alt='picture of maker1' layout='responsive' />
				</div>
				<span className={style.text}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged
				</span>
			</div>
			<div className={style.block}>
				<div className={style.image_item}>
					<Image src={brico3} alt='picture of maker1' layout='responsive' />
				</div>
				<span className={style.text}>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry. Lorem Ipsum has been the industry's standard dummy text ever
					since the 1500s, when an unknown printer took a galley of type and
					scrambled it to make a type specimen book. It has survived not only
					five centuries, but also the leap into electronic typesetting,
					remaining essentially unchanged
				</span>
			</div>
		</div>
	)
}
