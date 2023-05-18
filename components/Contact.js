export default function Contact() {
  return (
    <div className='flex justify-center flex-col lg:flex-row  mt-32 font-sans text-2xl	'>
      <div className='flex justify-center items-center lg:w-2/5 w-full flex-col'>
        <span>Franck FEDZAK</span>
        <span>Les Bons Services L.B.S</span>
        <span>42 Lieu dit La Rouvière</span>
        <span>30440 SUMENE</span>
        <span>Tel: 06 21 22 56 50</span>
      </div>
      <div className='flex justify-center items-center lg:w-2/5 w-full flex-col mt-10 lg:mt-0'>
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
