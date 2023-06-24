import { Analytics } from '@vercel/analytics/react'
import Head from 'next/head'
import Script from 'next/script'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script
        strategy='lazyOnload'
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script strategy='lazyOnload'>
        {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
              page_path: window.location.pathname,
              });
          `}
      </Script>

      <Head>
        <title>L.B.S</title>
        <meta
          name='google-site-verification'
          content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
        />
      </Head>
      <Navbar />
      <main className='m-0'>
        <Component {...pageProps} />
        <Analytics />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
