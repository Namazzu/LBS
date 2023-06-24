import Image from 'next/image'

const Testimonial = () => {
  return (
    <div className='bg-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <h2 className='text-center text-3xl font-semibold leading-8 text-gray-900'>
          Ils nous font <span className='text-amber-500	'>confiance</span>
        </h2>
        <div className='mt-16 flex items-center justify-center'>
          <Image
            className='max-h-12 w-full object-contain'
            src='https://www.samse.fr/static/version1683618023/frontend/Samse/default/fr_FR/images/logo/logo.svg'
            alt='Samse entreprise logo'
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  )
}

export default Testimonial
