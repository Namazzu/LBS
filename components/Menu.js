import style from '../styles/Menu.module.css'
import Link from 'next/link'

export const Menu = ({ open, currentPage, activePage }) => {
  const data = [
    {
      href: '/',
      content: 'Home',
    },
    {
      href: '/contact',
      content: 'Contact',
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
            <a
              className={`${style.menu_item} ${
                style[currentPage === href ? 'currentPage' : '']
              }`}
              onClick={activePage}
            >
              {content}
            </a>
          </Link>
        )
      })}
    </div>
  )
}
