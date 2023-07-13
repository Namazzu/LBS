import { motion } from 'framer-motion'

const data = [
  {
    img: 'https://images.unsplash.com/photo-1620714223589-a0ad3b4aaac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
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
    classesNames: 'lg:flex-row-reverse  lg:mt-48 lg:h-[500px]',
    reverse: true,
    content: [
      'Nouveau point de vente ? Nouveau rayon ? Ou nouvelle opération commerciale ?',
      "LBS s'occupe de monter ou démonter votre mobilier et pourra vous proposer certains compléments d’aménagements pour optimiser votre espace.",
    ],
    containerImgClassesNames: 'h-[300px]',
  },
  {
    img: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    title: 'Implantation et Remodeling',
    classesNames: 'lg:flex-row lg:py-4 lg:mt-48 lg:h-[400px] ',
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
    <div className='mt-10 flex flex-col items-center lg:mt-40'>
      {data.map((block, i) => (
        <div key={`block_${block.title}_${i}`}>
          <div className='relative isolate flex items-center justify-center'>
            <svg
              className='absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]'
              aria-hidden='true'
            >
              <defs>
                <pattern
                  id='1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84'
                  width={200}
                  height={200}
                  x='50%'
                  y={-1}
                  patternUnits='userSpaceOnUse'
                >
                  <path d='M.5 200V.5H200' fill='none' />
                </pattern>
              </defs>
              <svg x='50%' y={-1} className='overflow-visible fill-gray-50'>
                <path
                  d='M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z'
                  strokeWidth={0}
                />
              </svg>
              <rect
                width='100%'
                height='100%'
                strokeWidth={0}
                fill='url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)'
              />
            </svg>
            <div
              className={`absolute  top-0 ${
                block.reverse ? 'left-1/2 right-0 ' : 'left-0 -ml-24'
              } -z-10  hidden transform-gpu overflow-hidden blur-3xl lg:block`}
              aria-hidden='true'
            >
              <div
                className='aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#f59f0b] to-[#fcd34d] opacity-30'
                style={{
                  clipPath:
                    'polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)',
                }}
              />
            </div>

            <div
              className={`mx-3 flex h-full w-full flex-col items-center justify-evenly overflow-hidden  px-4 py-10	font-sans lg:my-16  lg:w-10/12 ${block.classesNames}`}
            >
              <div
                className={`h-full w-full overflow-hidden rounded-xl lg:w-2/5 ${block.containerImgClassesNames}`}
              >
                <img
                  src={block.img}
                  priority
                  alt='picture of maker1'
                  className='rounded-xl '
                />
              </div>
              <div className='flex w-full flex-col items-center lg:w-5/12'>
                <h2 className='my-8 flex text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl'>
                  {block.title}
                </h2>
                <motion.div
                  initial='offscreen'
                  whileInView='onscreen'
                  viewport={{ once: true, amount: 0.6 }}
                  variants={block.reverse ? textLeft : textRight}
                >
                  {block.content.map((paragraph, i) => (
                    <p
                      key={`paragraph_${i}`}
                      className='mb-3 text-lg font-light leading-8 text-gray-600'
                    >
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Blocks
