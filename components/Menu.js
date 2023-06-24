import Link from 'next/link'
import style from '../styles/Menu.module.css'

export const Menu = ({ open, currentPage, activePage }) => {
  const data = [
    {
      href: '/',
      content: 'Home',
    },
    {
      href: '/realisations',
      content: 'Réalisations',
    },
  ]

  return (
    <div
      className={`${style.menu_container}  ${
        style[open ? 'actived' : 'disabled']
      }`}
    >
      {data.map(({ href, content }, index) => {
        return (
          <Link href={href} key={index}>
            <div
              className={`${style.menu_item} ${
                style[currentPage === href ? 'currentPage' : '']
              }`}
              onClick={activePage}
            >
              {content}
            </div>
          </Link>
        )
      })}
    </div>
  )
}
