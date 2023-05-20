import Image from 'next/image'
import conception from '../public/conception.jpg'
import agencement from '../public/agencement.jpg'
import implementation from '../public/implementation.jpg'

const data = [
  {
    img: conception,
    title: 'Conseil et Accompagnement',
    classesNames: 'lg:flex-row lg:py-4',
    content: [
      'De la conception à la réalisation de votre projet, LBS vous accompagne et vous conseille pour optimiser votre espace.',
      'Vous serez guider sur les différents agencements nécessaires à la réalisation du projet, ainsi que sur les choix des gammes de produits.',
    ],
  },
  {
    img: agencement,
    title: 'Agencement',
    classesNames: 'lg:flex-row-reverse lg:py-0',
    content: [
      'Nouveau point de vente ? Nouveau rayon ? Ou nouvelle opération commerciale ?',
      "LBS s'occupe de monter ou démonter votre mobilier et pourra vous proposer certains compléments d’aménagements pour optimiser votre espace.",
    ],
  },
  {
    img: implementation,
    title: 'Implantation et Remodeling',
    classesNames: 'lg:flex-row lg:py-4',
    content: [
      'Implantation et Remodeling complet ou partiel de vos magasins, avec ou sans planogramme et rétroplanning, avec public ou sans.',
      'LBS utilisera toute sa maîtrise du métier pour répondre à vos besoins. Contactez-nous pour discuter de votre projet.',
    ],
  },
]

const Blocks = () => {
  return (
    <div className='mt-10 flex flex-col lg:mt-60'>
      {data.map((block) => (
        <div
          className={`mx-3 my-16 flex	 w-full flex-col items-center justify-evenly self-center overflow-hidden px-4	py-10 font-sans shadow-lg lg:w-10/12 ${block.classesNames}`}
        >
          <div className='w-full lg:w-2/5'>
            <Image src={block.img} alt='picture of maker1' height={450} />
          </div>
          <div className='flex w-full flex-col items-center lg:w-5/12'>
            <h2 className='my-8 flex text-4xl'>{block.title}</h2>
            {block.content.map((paragraph) => (
              <p className='mb-3 text-2xl font-light'>{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default Blocks
