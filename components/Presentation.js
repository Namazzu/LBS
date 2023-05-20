export default function Presentation() {
  return (
    <div className='mt-8 flex flex-col items-center justify-center '>
      <div className='flex w-10/12 flex-col justify-center'>
        <h2 className='mt-10 self-center	font-sans	text-5xl	font-bold italic	lg:text-6xl	'>
          Bienvenue sur{' '}
          <span className='text-amber-500	'>Les Bons Services</span>
        </h2>
        <div className='mt-24 font-sans text-2xl font-light	lg:mt-40 lg:text-3xl	'>
          <p>
            Entreprise jeune et dynamique créée en Septembre 2021, spécialisée
            dans le marchandising, l’agencement et l’implantation de magasins.
          </p>
          <p>
            Grâce à nos diverses expériences, nos équipes mettront tout en œuvre
            pour réaliser vos différents projets afin de développer votre
            chiffre d’affaire et le panier moyen de vos clients.
          </p>
          <div className='mt-32 flex w-full justify-end'>
            <div className='opacity-85 border-l-8 border-solid border-orange-300 bg-orange-100 p-10 lg:p-12'>
              <p className='text-3xl	font-light	text-gray-600'>
                Parce que chaque partenariat commence par une rencontre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
