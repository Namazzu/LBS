import { motion } from 'framer-motion'

const data = [
  {
    img: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    title: 'Conseil et Accompagnement',
    classesNames: 'lg:flex-row lg:py-4',
    content: [
      'De la conception à la réalisation de votre projet, LBS vous accompagne et vous conseille pour optimiser votre espace.',
      'Vous serez guider sur les différents agencements nécessaires à la réalisation du projet, ainsi que sur les choix des gammes de produits.',
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1529957018945-07aed3538ad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    title: 'Agencement',
    classesNames: 'lg:flex-row-reverse lg:py-4 h-[400px] object-cover',
    reverse: true,
    content: [
      'Nouveau point de vente ? Nouveau rayon ? Ou nouvelle opération commerciale ?',
      "LBS s'occupe de monter ou démonter votre mobilier et pourra vous proposer certains compléments d’aménagements pour optimiser votre espace.",
    ],
  },
  {
    img: 'https://images.unsplash.com/photo-1664382953403-fc1ac77073a0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1744&q=80',
    title: 'Implantation et Remodeling',
    classesNames: 'lg:flex-row lg:py-4 lg:px-4 h-[400px] ',
    content: [
      'Implantation et Remodeling complet ou partiel de vos magasins, avec ou sans planogramme et rétroplanning, avec public ou sans.',
      'LBS utilisera toute sa maîtrise du métier pour répondre à vos besoins. Contactez-nous pour discuter de votre projet.',
    ],
  },
]

const textRight = {
  offscreen: {
    x: 100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      velocity: 1,
      duration: 1.2,
    },
  },
}

const textLeft = {
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      velocity: 1,
      duration: 1.2,
    },
  },
}

const Blocks = () => {
  return (
    <div className='mt-10 flex flex-col lg:mt-40'>
      {data.map((block, i) => (
        <div
          key={`block_${block.title}_${i}`}
          className={`mx-3 my-16 flex	 w-full flex-col items-center justify-evenly self-center overflow-hidden px-4	py-10 font-sans  lg:w-10/12 ${block.classesNames}`}
        >
          <div className='h-full w-full lg:w-2/5'>
            <img
              src={block.img}
              priority
              alt='picture of maker1'
              className='rounded'
            />
          </div>
          <div className='flex w-full flex-col items-center lg:w-5/12'>
            <h2 className='my-8 flex text-4xl'>{block.title}</h2>
            <motion.div
              initial='offscreen'
              whileInView='onscreen'
              viewport={{ once: true, amount: 0.6 }}
              variants={block.reverse ? textLeft : textRight}
            >
              {block.content.map((paragraph, i) => (
                <p key={`paragraph_${i}`} className='mb-3 text-2xl font-light'>
                  {paragraph}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Blocks
