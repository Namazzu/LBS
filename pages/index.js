import Head from 'next/head'
import Presentation from '../components/Presentation'
import Blocks from '../components/Blocks'

import Contact from '../components/Contact'

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
        <section>
          <Contact />
        </section>
      </div>
    </>
  )
}
