import style from '../styles/Contact.module.css'

export default function Button() {
  return (
    <div className={style.contact_container}>
      <div className={style.entreprise}>
        <span>Franck FEDZAK</span>
        <span>Les Bons Services L.B.S</span>
        <span>42 Lieu dit La Rouvière</span>
        <span>30440 SUMENE</span>
        <span>Tel: 06 21 22 56 50</span>
      </div>
      <div className={style.administration}>
        <span>Administration:</span>
        <span>Karine GEHIN </span>
        <span>Collaboratrice Marchandising</span>
        <span>Chargée des Relations Humaines</span>
        <span>
          <strong>Mail :</strong> franckfedzak.lbs@gmail.com
        </span>
        <a href='mailto:franckfedzak.lbs@gmail.com'>Nous contactez</a>
      </div>
    </div>
  )
}
