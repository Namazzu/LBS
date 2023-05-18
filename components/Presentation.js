export default function Presentation() {
  return (
    <div className='flex flex-col justify-center items-center mt-8 '>
      <div className='w-10/12	'>
        <h2 className='text-4xl	font-bold	italic self-center	font-sans	'>
          Bienvenue sur{' '}
          <span className='text-amber-500	'>Les Bons Services</span>
        </h2>
        <div className='mt-16 text-2xl lg:text-3xl	font-sans font-light	'>
          <p>
            Entreprise jeune et dynamique créée en Septembre 2021, spécialisée
            dans le marchandising, l’agencement et l’implantation de magasins.
          </p>
          <p>
            Grâce à nos diverses expériences, nos équipes mettront tout en œuvre
            pour réaliser vos différents projets afin de développer votre
            chiffre d’affaire et le panier moyen de vos clients.
          </p>
          <div className='flex w-full justify-end mt-24'>
            <div className='bg-orange-100 opacity-85 border-l-8 border-solid border-orange-300	 p-3'>
              <p className='text-gray-600	font-medium	text-2xl'>
                Parce que chaque partenariat commence par une rencontre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
