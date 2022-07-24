import Head from 'next/head'
import { Widget } from '@typeform/embed-react'
import '@typeform/embed/build/css/widget.css'
import styles from '../styles/contact.module.css'

const formId = 'GC2cdoHh'

export default function contact() {
  const handleTypeformSubmit = async ({ responseId }) => {
    const response = await fetch(
      `/api/response?id=${formId}&response_id=${responseId}`
    )

    if (response.ok) {
      const res = await response.json()
    }
  }

  return (
    <>
      <Head>
        <title>LBS Contact</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className={styles.contact_container}>
        <Widget
          id={formId}
          onSubmit={handleTypeformSubmit}
          style={{ width: 80 + 'vw', height: 80 + 'vh' }}
        ></Widget>
      </div>
    </>
  )
}
