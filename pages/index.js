import Head from 'next/head'
import Blocks from '../components/Blocks'
import Presentation from '../components/Presentation'

import Contact from '../components/Contact'
import Divider from '../components/Divider'

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
        <Divider />
        {/* <section className='flex justify-center'>
          <Testimonial />
        </section> */}

        <section className='mt-20'>
          <Contact />
        </section>
      </div>
    </>
  )
}
