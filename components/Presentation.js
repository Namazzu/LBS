import style from '../styles/presentation.module.css'
export default function Presentation() {
  return (
    <div className={style.container}>
      <div className={style.pres_container}>
        <h2 className={style.title}>
          Bienvenue sur <span>Les Bons Services</span>
        </h2>
        <div className={style.text}>
          <p>
            Entreprise jeune et dynamique créée en Septembre 2021, spécialisée
            dans le marchandising, l’agencement et l’implémentation de magasins.
          </p>
          <p>
            Grâce à nos diverses expériences, nos équipes mettront tout en œuvre
            pour réaliser vos différents projets afin de développer votre
            chiffre d’affaire et le panier moyen de vos clients.
          </p>
          <div className={style.citation_container}>
            <div className={style.block_citation}>
              <p className={style.citation}>
                Parce que chaque partenariat commence par une rencontre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
