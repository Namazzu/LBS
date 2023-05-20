import Head from 'next/head'
import Presentation from '../components/Presentation'
import Blocks from '../components/Blocks'

import Contact from '../components/Contact'
import Testimonial from '../components/Testimonial'

export default function Home() {
  return (
    <>
      <Head>
        <title>LBS Accueil</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='robots' content='all' />
      </Head>
      <div>
        <section>
          <Presentation />
        </section>
        <section>
          <Blocks />
        </section>
        <section className='flex justify-center'>
          <Testimonial />
        </section>
        <section className='mt-20'>
          <Contact />
        </section>
      </div>
    </>
  )
}
