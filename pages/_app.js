import '../styles/globals.css'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>L.B.S</title>
        <meta
          name='google-site-verification'
          content='O1Cih9CGimgvelsPoaGAvmaglP7d4aaH01EZJr_fxfE'
        />
      </Head>
      <Navbar />
      <main>
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
