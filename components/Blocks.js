import { motion } from 'framer-motion'

const data = [
  {
    img: 'https://images.unsplash.com/photo-1620714223589-a0ad3b4aaac9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    title: 'Conseil et Accompagnement',
    classesNames: 'lg:flex-row lg:py-4',
    // content: [
    //   'De la conception à la réalisation de votre projet, LBS vous accompagne et vous conseille pour optimiser votre espace.',
    //   'Vous serez guider sur les différents agencements nécessaires à la réalisation du projet, ainsi que sur les choix des gammes de produits.',
    // ],
    content: [
      'De la conception à la réalisation de votre projet, LBS est votre partenaire de confiance, vous offrant un accompagnement expert pour optimiser votre espace.',
      "Nous vous guiderons dans le choix des agencements nécessaires à la concrétisation de votre projet, en vous proposant des solutions adaptées à vos besoins spécifiques. De plus, nous vous conseillerons dans le choix des gammes de produits, en veillant à ce qu'ils correspondent parfaitement à votre image de marque et à vos objectifs commerciaux.",
      "Notre équipe expérimentée et passionnée mettra tout en œuvre pour réaliser votre vision, en fournissant des recommandations personnalisées et en supervisant chaque étape du processus. Faites confiance à LBS pour optimiser votre espace et atteindre l'excellence dans votre aménagement.",
    ],
    containerImgClassesNames: 'self-end pb-4',
  },
  {
    img: 'https://images.unsplash.com/photo-1529957018945-07aed3538ad5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
    title: 'Agencement',
    classesNames: 'lg:flex-row-reverse  lg:mt-48 ',
    reverse: true,
    content: [
      "Que vous ouvriez un nouveau point de vente, un nouveau rayon ou que vous prépariez une nouvelle opération commerciale, LBS est là pour assurer le montage ou le démontage de votre mobilier, en vous proposant des compléments d'aménagement pour optimiser votre espace.",
      "Notre équipe compétente et expérimentée se charge de toutes les étapes nécessaires, en veillant à ce que votre mobilier soit installé ou retiré avec précision et efficacité. De plus, nous pouvons vous conseiller sur des aménagements complémentaires pour maximiser l'utilisation de votre espace et améliorer l'expérience de vos clients.",
      'Faites confiance à LBS pour une gestion professionnelle et complète de vos besoins en matière de montage et démontage de mobilier, afin de garantir une mise en place fluide et réussie de votre projet.',
    ],
    containerImgClassesNames: 'h-[450px] self-end',
  },
  {
    img: 'https://images.unsplash.com/photo-1542621334-a254cf47733d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80',
    title: 'Implantation et Remodeling',
    classesNames: 'lg:flex-row lg:py-4 lg:mt-48',
    content: [
      "LBS est spécialisé dans l'implantation et le remodelage complet ou partiel de vos magasins, avec ou sans planogramme et rétroplanning, selon vos préférences.",
      "Nous mettons à profit notre expertise pour répondre précisément à vos besoins. N'hésitez pas à nous contacter afin que nous puissions discuter en détail de votre projet.",
      "Notre équipe est prête à mobiliser toutes ses compétences pour vous offrir un service de qualité et garantir la réussite de votre projet d'implantation ou de remodelage de magasins.",
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
              className={`mx-3 flex h-full w-full flex-col items-center justify-evenly overflow-hidden  px-4 py-10	font-sans lg:my-16  lg:w-10/12 ${block.classesNames}`}
            >
              <div
                className={`w-full overflow-hidden rounded-xl lg:w-2/5 ${block.containerImgClassesNames}`}
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
                  viewport={{ once: true, amount: 0.2 }}
                  variants={block.reverse ? textLeft : textRight}
                >
                  {block.content.map((paragraph, i) => (
                    <p
                      key={`paragraph_${i}`}
                      className='mb-3 text-lg  leading-8 text-gray-600 lg:max-w-none'
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
