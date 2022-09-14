import Image from 'next/image'
import conception from '../public/conception.jpg'
import agencement from '../public/agencement.jpg'
import implementation from '../public/implementation.jpg'
import style from '../styles/blocks.module.css'
export default function Blocks() {
  return (
    <div className={style.blocks_container}>
      <div className={style.block}>
        <div className={style.image_item}>
          <Image src={conception} alt='picture of maker1' layout='responsive' />
        </div>
        <div className={style.text}>
          <h2>Conseil et Accompagnement</h2>
          <p>
            De la conception à la réalisation de votre projet, LBS vous
            accompagne et vous conseille pour optimiser votre espace.
          </p>
          <p>
            Vous serez guider sur les différents agencements nécessaires à la
            réalisation du projet, ainsi que sur les choix des gammes de
            produits.
          </p>
        </div>
      </div>
      <div className={`${style.block} ${style.reverse}`}>
        <div className={style.image_item}>
          <Image src={agencement} alt='picture of maker1' layout='responsive' />
        </div>
        <div className={style.text} style={{ marginLeft: '5%' }}>
          <h2>Agencement</h2>
          <p>
            Nouveau point de vente ? Nouveau rayon ? Ou nouvelle opération
            commerciale ? L.B.S s'occupe de monter ou démonter votre mobilier et
            pourra vous proposer certains compléments d’aménagements pour
            optimiser votre espace.
          </p>
        </div>
      </div>
      <div className={style.block}>
        <div className={style.image_item}>
          <Image
            src={implementation}
            alt='picture of maker1'
            layout='responsive'
          />
        </div>
        <div className={style.text}>
          <h2>Implantation et Remodeling</h2>
          <p>
            Implantation ou Remodeling complet ou partiel de vos magasins, avec
            ou sans planogramme ou rétroplanning, avec public ou sans, LBS
            utilisera toute sa maîtrise du métier pour répondre à vos besoins.
            Contactez-nous pour discuter de votre projet.
          </p>
        </div>
      </div>
    </div>
  )
}
