import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Burger } from './Burger'
import { Menu } from './Menu'

import style from '../styles/Navbar.module.css'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState()

  useEffect(() => {
    setCurrentPage(window.location.pathname)
  }, [open])

  return (
    <div className={style.container}>
      <h2 className={style.logo}>
        <Link href='/'>
          <div>LBS</div>
        </Link>
      </h2>
      <div className={style.nav_items_container}>
        <Burger open={open} setOpen={setOpen} />
        <Menu
          open={open}
          currentPage={currentPage}
          activePage={() => setOpen(!open)}
        />
      </div>
    </div>
  )
}
