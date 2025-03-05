import React from 'react'
import { Link } from 'react-router-dom'

function CategoryList() {
	return (
		<div className='p-3 px-5 text-white bg-black z-11 border-[1px] border-gray-700 rounded-md absolute ms-75  bottom-100 md:right-98  lg:right-32 lg:bottom-32'>
			<ul>
				<li>
					<Link to='Action' className='hover:underline'>
						Action
					</Link>
				</li>
				<li>
					<Link to='Adventure' className='hover:underline'>
						Adventure
					</Link>
				</li>
				<li>
					<Link to='Animation' className='hover:underline'>
						Animation
					</Link>
				</li>
			</ul>
		</div>
	)
}
export default CategoryList
