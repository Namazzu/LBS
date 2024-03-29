import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from '@heroicons/react/24/outline'

import Image from 'next/image'

import contactSVG from '../public/undraw_agreement_re_d4dv.svg'

export default function Contact() {
  return (
    <div className='relative w-full bg-gray-900/90'>
      <div className='relative h-80 overflow-hidden bg-amber-300/20 md:absolute md:left-0 md:h-full md:w-1/3 lg:w-1/2'>
        <Image
          className='h-full w-full p-12'
          priority
          src={contactSVG}
          alt='people who work at a desk'
        />
        <svg
          viewBox='0 0 926 676'
          aria-hidden='true'
          className='absolute -bottom-24 left-24 w-[57.875rem] transform-gpu blur-[118px]'
        >
          <path
            fill='url(#60c3c621-93e0-4a09-a0e6-4c228a0116d8)'
            fillOpacity='.4'
            d='m254.325 516.708-90.89 158.331L0 436.427l254.325 80.281 163.691-285.15c1.048 131.759 36.144 345.144 168.149 144.613C751.171 125.508 707.17-93.823 826.603 41.15c95.546 107.978 104.766 294.048 97.432 373.585L685.481 297.694l16.974 360.474-448.13-141.46Z'
          />
          <defs>
            <linearGradient
              id='60c3c621-93e0-4a09-a0e6-4c228a0116d8'
              x1='926.392'
              x2='-109.635'
              y1='.176'
              y2='321.024'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#f59f0b' />
              <stop offset={1} stopColor='#f59f0b' />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40'>
        <div className='pl-6 pr-6 md:ml-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pl-24 lg:pr-0 xl:pl-32'>
          <div className='relative isolate '>
            <div className='mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-1'>
              <div className='relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48'>
                <div className='mx-auto max-w-xl lg:mx-0 lg:max-w-lg'>
                  <h2 className='text-3xl font-bold tracking-tight text-amber-500'>
                    Contact
                  </h2>
                  <p className='mt-6 text-lg leading-8 text-slate-100	'>
                    Franck FEDZAK et Karine GEHIN collaboratrice RH, seront
                    ravis d'échanger avec vous pour réaliser votre projet.
                  </p>
                  <dl className='mt-10 space-y-4 text-base leading-7 text-slate-100'>
                    <div className='flex gap-x-4'>
                      <dt className='flex-none'>
                        <span className='sr-only'>Address</span>
                        <BuildingOffice2Icon
                          className='h-7 w-6 text-slate-100'
                          aria-hidden='true'
                        />
                      </dt>
                      <dd>
                        42 Lieu dit La Rouvière
                        <br />
                        30440 SUMENE
                      </dd>
                    </div>
                    <div className='flex gap-x-4'>
                      <dt className='flex-none'>
                        <span className='sr-only'>Telephone</span>
                        <PhoneIcon
                          className='h-7 w-6 text-slate-100'
                          aria-hidden='true'
                        />
                      </dt>
                      <dd>
                        <a
                          className='hover:text-amber-500'
                          href='tel:0621225650'
                        >
                          06 21 22 56 50
                        </a>
                      </dd>
                    </div>
                    <div className='flex gap-x-4'>
                      <dt className='flex-none'>
                        <span className='sr-only'>Email</span>
                        <EnvelopeIcon
                          className='h-7 w-6 text-slate-100'
                          aria-hidden='true'
                        />
                      </dt>
                      <dd>
                        <a
                          className='hover:text-amber-500'
                          href='mailto:franckfedzak.lbs@gmail.com'
                        >
                          franckfedzak.lbs@gmail.com
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
