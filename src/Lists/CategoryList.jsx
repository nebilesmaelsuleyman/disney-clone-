import React from 'react'
import { Link } from 'react-router-dom'

function CategoryList() {
	return (
		<div className='bg-black border-[1px] border-gray-700 px-4 absolute mt-35 z-20'>
			<ul>
				<li>
					<Link to='/movie/action' className='hover:underline py-2'>
						Action
					</Link>
				</li>
				<li>
					<Link to='/movie/adventure' className='hover:underline py-2'>
						Adventure
					</Link>
				</li>
				<li>
					<Link to='/movie/animation' className='hover:underline py-2'>
						Animation
					</Link>
				</li>
				<li>
					<Link to='/movie/comedy' className='hover:underline py-2'>
						Comedy
					</Link>
				</li>
			</ul>
		</div>
	)
}
export default CategoryList
