/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
function HeaderItem({ Icon, name }) {
	return (
		<div className='text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer'>
			<Icon />
			{name === 'Home' ? (
				<Link
					to={`/${name.toLowerCase()}`}
					className='hover:underline underline-offset-8'
				>
					<h2>{name}</h2>
				</Link>
			) : (
				<h2>{name}</h2>
			)}
		</div>
	)
}

export default HeaderItem
