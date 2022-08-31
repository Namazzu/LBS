import Head from 'next/head'
import Presentation from '../components/Presentation'
import Blocks from '../components/Blocks'
import styles from '../styles/Home.module.css'
import styleBtn from '../styles/Button.module.css'

import { Formik, Field } from 'formik'

export default function Home() {
  return (
    <>
      <Head>
        <title>LBS Accueil</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <div className={styles.container}>
        <section>
          <Presentation />
        </section>
        <section>
          <Blocks />
        </section>
        <div className={styles.form_box}>
          <Formik
            initialValues={{ email: '', lastname: '', firstname: '', text: '' }}
            validate={(values) => {
              const errors = {}
              if (!values.email) {
                errors.email = 'Required'
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address'
              }
              return errors
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2))
                setSubmitting(false)
              }, 400)
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className={styles.form_container}>
                <div className={styles.input_field}>
                  <label htmlFor='email'>Email</label>
                  <Field
                    type='email'
                    name='email'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  {errors.email && touched.email && errors.email}
                </div>
                <div className={styles.input_field}>
                  <label htmlFor='lastname'>Nom</label>
                  <Field
                    type='text'
                    name='lastname'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.lastname && touched.lastname && errors.lastname}
                </div>
                <div className={styles.input_field}>
                  <label htmlFor='firstname'>Prénom</label>
                  <Field
                    type='text'
                    name='firstname'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.firstname && touched.firstname && errors.firstname}
                </div>
                <div className={styles.input_field}>
                  <label htmlFor='text'>
                    Que pouvons-nous faire pour vous ?
                  </label>
                  <Field
                    type='text'
                    name='text'
                    as='textarea'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                  />
                  {errors.password && touched.password && errors.password}
                </div>
                <div className={styleBtn.container}>
                  <button
                    type='submit'
                    disabled={isSubmitting}
                    className={styleBtn.btn}
                  >
                    Envoyer
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  )
}
