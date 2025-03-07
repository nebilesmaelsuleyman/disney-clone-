import React from 'react'
import { Link } from 'react-router-dom'

function TvshowList() {
	return (
		<div className='bg-black border-[1px]  z-10 px-6 absolute mt-40 border-gray-700 '>
			<ul>
				<li className='hover:underline py-1'>
					<Link to={'/popular'}>Popular</Link>
				</li>
				<li className='hover:underline py-1'>
					<Link to={'/airingtoday'}>Airing Today</Link>
				</li>
				<li className='hover:underline py-1'>
					<Link to={'/ontv'}>On Tv</Link>
				</li>
				<li className='hover:underline py-1'>
					<Link to={'/toprated'}>Top rated</Link>
				</li>
			</ul>
		</div>
	)
}
export default TvshowList
