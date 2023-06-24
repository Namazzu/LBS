import Image from 'next/image'
import { useEffect, useState } from 'react'

const Realisations = () => {
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
    <div className='container mx-auto px-5 py-2 lg:px-32 lg:pt-24'>
      {imagesFilesNames.length !== 0 &&
        imagesFilesNames.map((arrSixElem, i) => {
          return (
            <div key={`arrSixPictures_${i}`} className='mb-8 flex  flex-wrap'>
              <div className='flex w-full flex-wrap lg:w-1/2'>
                {arrSixElem[0] && (
                  <div className='w-1/2 p-1 md:p-2'>
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
                  <div className='w-1/2 p-1 md:p-2'>
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
                  <div className='w-full p-1 md:p-2'>
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
                  <div className='w-full p-1 md:p-2'>
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
                  <div className='w-1/2 p-1 md:p-2'>
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
                  <div className='w-1/2 p-1 md:p-2'>
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
  )
}

export default Realisations
