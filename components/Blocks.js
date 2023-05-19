import Image from 'next/image'
import conception from '../public/conception.jpg'
import agencement from '../public/agencement.jpg'
import implementation from '../public/implementation.jpg'

const Blocks = () => {
  return (
    <div className='flex flex-col mt-20 lg:mt-60'>
      <div className='flex justify-evenly shadow-lg	 overflow-hidden flex-col lg:flex-row w-full items-center self-center lg:w-9/12	 font-sans py-10 lg:py-4 px-4 my-6 mx-3'>
        <div className='lg:w-2/5 w-full'>
          <Image src={conception} alt='picture of maker1' height={450} />
        </div>
        <div className='flex items-center flex-col lg:w-5/12 w-full'>
          <h2 className='flex text-4xl my-8'>Conseil et Accompagnement</h2>
          <p className='text-2xl font-light'>
            De la conception à la réalisation de votre projet, LBS vous
            accompagne et vous conseille pour optimiser votre espace.
          </p>
          <p className='text-2xl font-light'>
            Vous serez guider sur les différents agencements nécessaires à la
            réalisation du projet, ainsi que sur les choix des gammes de
            produits.
          </p>
        </div>
      </div>
      <div className='flex justify-evenly shadow-lg	 overflow-hidden flex-col w-full items-center self-center lg:w-9/12	 font-sans  px-4 my-6 mx-3 py-10 lg:py-0 lg:flex-row-reverse'>
        <div className='lg:w-2/5 w-full'>
          <Image src={agencement} alt='picture of maker1' height={450} />
        </div>
        <div className='flex items-center flex-col lg:w-5/12 w-full'>
          <h2 className='flex text-4xl my-8'>Agencement</h2>
          <p className='text-2xl font-light'>
            Nouveau point de vente ? Nouveau rayon ? Ou nouvelle opération
            commerciale ? LBS s'occupe de monter ou démonter votre mobilier et
            pourra vous proposer certains compléments d’aménagements pour
            optimiser votre espace.
          </p>
        </div>
      </div>
      <div className='flex justify-evenly shadow-lg	 overflow-hidden flex-col lg:flex-row w-full items-center self-center lg:w-9/12	 font-sans  py-10 lg:py-0  px-4 my-6 mx-3'>
        <div className='lg:w-2/5 w-full'>
          <Image src={implementation} alt='picture of maker1' height={450} />
        </div>
        <div className='flex items-center	 flex-col lg:w-5/12 w-full'>
          <h2 className='flex text-4xl my-8'>Implantation et Remodeling</h2>
          <p className='text-2xl font-light'>
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

export default Blocks
