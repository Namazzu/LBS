import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useState } from 'react'

const navigation = [
  { name: 'Accueil', href: '/' },
  { name: 'Réalisations', href: '#' },
  { name: 'Contact', href: '#' },
]

export default function Presentation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className='bg-white'>
      <header className='absolute inset-x-0 top-0 z-50'>
        <nav
          className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
          aria-label='Global'
        >
          {/* =================== Logo Desktop =================== */}
          <div className='flex lg:flex-1'>
            <h2 className='text-4xl'>
              <Link href='/'>
                <div>LBS</div>
              </Link>
            </h2>
          </div>
          {/* =================== Phone Menu Trigger 3 Bars =================== */}

          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          {/* =================== Desktop Menus =================== */}

          <div className='hidden lg:flex lg:gap-x-12'>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className='text font-semibold leading-6 text-gray-900'
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        {/* =================== Slide Menu Phone =================== */}
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
            <div className='flex items-center justify-between'>
              <div className='flex lg:flex-1'>
                <h2 className=' text-4xl'>
                  <Link href='/'>
                    <div>LBS</div>
                  </Link>
                </h2>
              </div>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root'>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='space-y-2 py-6'>
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <main>
        <div className='relative isolate'>
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
            className='absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48'
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
          <div className='overflow-hidden'>
            <div className='mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32'>
              <div className='mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center'>
                <div className='w-full max-w-xl lg:shrink-0 xl:max-w-2xl'>
                  <h1 className='text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl'>
                    Nous travaillons à optimiser votre espace
                  </h1>
                  <p className='relative mt-6 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none'>
                    Nous sommes une entreprise de merchandising basée dans le
                    Gard, présente dans toute la France. Notre expertise en
                    agencement et en expérience d'achat aide à optimiser votre
                    présence en magasin, pour atteindre vos objectifs
                    commerciaux. Avec une couverture nationale, nous proposons
                    des solutions adaptées à votre marché local.
                  </p>
                  <div className='mt-10 flex items-center justify-center gap-x-6 lg:justify-start'>
                    <Link
                      href='#'
                      className='rounded-md  bg-amber-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-600'
                    >
                      Contactez-nous
                    </Link>
                  </div>
                </div>
                <div className='mt-14 flex justify-end gap-2 sm:-mt-44 sm:justify-start sm:pl-20 md:gap-8 lg:mt-0 lg:pl-0'>
                  <div className='ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80'>
                    <div className='relative'>
                      <img
                        src={
                          'https://images.unsplash.com/photo-1510016290251-68aaad49723e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2352&q=80'
                        }
                        alt='Rayons de pots de peintures'
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                  </div>
                  <div className='mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36'>
                    <div className='relative'>
                      <img
                        src='https://images.unsplash.com/photo-1525909002-1b05e0c869d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2448&q=80'
                        alt='Rouleaux de peintures qui applique différentes couleurs à un mur'
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                    <div className='relative'>
                      <img
                        src='https://images.unsplash.com/photo-1542343082-abf84a65aeff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
                        alt='vitrine de décoration de noël'
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                  </div>
                  <div className='w-44 flex-none space-y-8 pt-32 sm:pt-0'>
                    <div className='relative'>
                      <img
                        src='https://images.unsplash.com/photo-1631856954913-c751a44490ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
                        alt="Rayons d'embouts de plomberie"
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                    <div className='relative'>
                      <img
                        src='https://images.unsplash.com/photo-1632195217465-4f334314762f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80'
                        alt='rangement de t-shirt de couleur par ordre'
                        className='aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg'
                      />
                      <div className='pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10' />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
