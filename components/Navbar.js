import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Burger } from './Burger'
import { Menu } from './Menu'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState()

  useEffect(() => {
    setCurrentPage(window.location.pathname)
  }, [open])

  return (
    <div className='flex items-center justify-between shadow-lg	 h-20 px-6 m-2'>
      <h2 className='ml-6 text-4xl'>
        <Link href='/'>
          <div>LBS</div>
        </Link>
      </h2>
      <div className='flex flex-row justify-end w-6/12 lg:w-4/12'>
        <Burger open={open} setOpen={setOpen} />
        <Menu
          open={open}
          currentPage={currentPage}
          activePage={() => setOpen((prev) => !prev)}
        />
      </div>
    </div>
  )
}
