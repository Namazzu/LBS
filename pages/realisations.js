import { Dialog, Transition } from '@headlessui/react'
import Image from 'next/image'
import { Fragment, useEffect, useState } from 'react'

const Realisations = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [imgSelected, setImgSelected] = useState('')
  const [imagesFilesNames, setImagesFilesNames] = useState([])

  useEffect(() => {
    const getImagesDirectory = async () => {
      const res = await fetch('/api/realisations')
      const { data } = await res.json()

      let newArr = []
      while (data.length > 6) {
        newArr.push(data.splice(0, 6))
      }
      newArr.push(data)

      setImagesFilesNames(newArr)
    }

    getImagesDirectory()
  }, [])

  return (
    <>
      <Transition show={isOpen} as={Fragment}>
        <Dialog
          onClose={() => setIsOpen(false)}
          className='relative z-50 h-full w-full'
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black/30' aria-hidden='true' />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'
          >
            <div className='fixed inset-0 flex items-center justify-center'>
              <Dialog.Panel className='w-full max-w-6xl rounded bg-white p-2 shadow'>
                <Image
                  alt="realisation de l'entreprise Les Bons Services, marchandising"
                  className='block h-full w-full rounded-lg object-cover object-center'
                  width={500}
                  height={500}
                  src={`/realisations/${imgSelected}`}
                />
              </Dialog.Panel>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
      <div className='container mx-auto px-5 py-2 lg:px-32 lg:pt-24'>
        {imagesFilesNames.length !== 0 &&
          imagesFilesNames.map((arrSixElem, i) => {
            return (
              <div key={`arrSixPictures_${i}`} className='mb-8 flex  flex-wrap'>
                <div className='flex w-full flex-wrap lg:w-1/2'>
                  {arrSixElem[0] && (
                    <div
                      className='w-1/2 p-1 md:p-2'
                      onClick={() => {
                        setImgSelected(arrSixElem[0])
                        setIsOpen(true)
                      }}
                    >
                      <Image
                        alt="realisation de l'entreprise Les Bons Services, marchandising"
                        className='block h-full w-full rounded-lg object-cover object-center'
                        width={500}
                        height={500}
                        src={`/realisations/${arrSixElem[0]}`}
                      />
                    </div>
                  )}
                  {arrSixElem[1] && (
                    <div
                      className='w-1/2 p-1 md:p-2'
                      onClick={() => {
                        setImgSelected(arrSixElem[1])
                        setIsOpen(true)
                      }}
                    >
                      <Image
                        alt="realisation de l'entreprise Les Bons Services, marchandising"
                        className='block h-full w-full rounded-lg object-cover object-center'
                        width={500}
                        height={500}
                        src={`/realisations/${arrSixElem[1]}`}
                      />
                    </div>
                  )}
                  {arrSixElem[2] && (
                    <div
                      className='w-full p-1 md:p-2'
                      onClick={() => {
                        setImgSelected(arrSixElem[2])
                        setIsOpen(true)
                      }}
                    >
                      <Image
                        alt="realisation de l'entreprise Les Bons Services, marchandising"
                        className='block h-full w-full rounded-lg object-cover object-center'
                        width={500}
                        height={500}
                        src={`/realisations/${arrSixElem[2]}`}
                      />
                    </div>
                  )}
                </div>
                <div className='flex w-full flex-wrap lg:w-1/2'>
                  {arrSixElem[3] && (
                    <div
                      className='w-full p-1 md:p-2'
                      onClick={() => {
                        setImgSelected(arrSixElem[3])
                        setIsOpen(true)
                      }}
                    >
                      <Image
                        alt="realisation de l'entreprise Les Bons Services, marchandising"
                        className='block h-full w-full rounded-lg object-cover object-center'
                        width={500}
                        height={500}
                        src={`/realisations/${arrSixElem[3]}`}
                      />
                    </div>
                  )}
                  {arrSixElem[4] && (
                    <div
                      className='w-1/2 p-1 md:p-2'
                      onClick={() => {
                        setImgSelected(arrSixElem[4])
                        setIsOpen(true)
                      }}
                    >
                      <Image
                        alt="realisation de l'entreprise Les Bons Services, marchandising"
                        className='block h-full w-full rounded-lg object-cover object-center'
                        width={500}
                        height={500}
                        src={`/realisations/${arrSixElem[4]}`}
                      />
                    </div>
                  )}
                  {arrSixElem[5] && (
                    <div
                      className='w-1/2 p-1 md:p-2'
                      onClick={() => {
                        setImgSelected(arrSixElem[5])
                        setIsOpen(true)
                      }}
                    >
                      <Image
                        alt="realisation de l'entreprise Les Bons Services, marchandising"
                        className='block h-full w-full rounded-lg object-cover object-center'
                        width={500}
                        height={500}
                        src={`/realisations/${arrSixElem[5]}`}
                      />
                    </div>
                  )}
                </div>
              </div>
            )
          })}
      </div>
    </>
  )
}

export default Realisations
