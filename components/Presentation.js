import style from "../styles/presentation.module.css";
export default function Presentation() {
  return (
    <div className={style.container}>
      <div className={style.pres_container}>
        <h2 className={style.title}>Bienvenue sur Les Bons Services</h2>
        <div className={style.text}>
          <p>
            Les bons services est une entreprise spécialisé dans le
            marchandising. nous remercions les clients qui nous font confiance
            Fort de nos diverses expériences, nos équipes mettront tout en œuvre
            pour réaliser vos différents projets.
          </p>
          <div className={style.citation2}>
            <p className={style.citation}>
              Parce que chaque partenariat commence par une rencontre.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
