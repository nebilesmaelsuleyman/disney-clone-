import React from 'react'
import { Link } from 'react-router-dom'

function MovieList() {
	return (
		<div className='bg-black border-[1px] border-gray-700 px-4 absolute mt-40 z-1'>
			<ul>
				<li className='hover:underline py-1'>
					<Link to={'/nowplaying'}>Now playing</Link>
				</li>
				<li className='hover:underline py-1'>
					<Link to={'/mostpopular'}>Most Popular</Link>
				</li>
				<li className='hover:underline py-1'>
					<Link to={'/upcommming'}>Upcomming</Link>
				</li>
				<li className='hover:underline py-1'>
					<Link to={'/toprated'}>Top rated</Link>
				</li>
			</ul>
		</div>
	)
}
export default MovieList
