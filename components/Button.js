import Link from 'next/link'
import style from '../styles/Button.module.css'
export default function Button() {
  return (
    <div className={style.container}>
      <Link href='/contact'>
        <button className={style.btn}>Contactez nous !</button>
      </Link>
    </div>
  )
}
