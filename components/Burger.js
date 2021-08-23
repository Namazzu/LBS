import React from 'react'

import style from '../styles/Burger.module.css'

export const Burger = ({ open, setOpen }) => {
	return (
		<div className={style.btn} onClick={() => setOpen(!open)}>
			<span
				className={`${style.bar} ${style[open ? 'actived' : 'disabled']}`}
			/>
			<span
				className={`${style.bar} ${style[open ? 'actived' : 'disabled']}`}
			/>
			<span
				className={`${style.bar} ${style[open ? 'actived' : 'disabled']}`}
			/>
		</div>
	)
}
