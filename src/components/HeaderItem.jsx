/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
function HeaderItem({ Icon, name }) {
	return (
		<div className='text-white flex items-center gap-3 text-[15px] font-semibold cursor-pointer hover:underline underline-offset-8'>
			<Icon />
			<h2>{name}</h2>
		</div>
	)
}

export default HeaderItem
