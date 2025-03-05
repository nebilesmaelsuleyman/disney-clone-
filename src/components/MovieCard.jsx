import React from 'react'
const MovieBaseURL = 'https://image.tmdb.org/t/p/w500'
function MovieCard({ movie, handleClick }) {
	return (
		<div onClick={handleClick} className='flex flex-col items-center'>
			<img
				src={MovieBaseURL + movie.backdrop_path}
				alt=''
				className='  md:[500px] w-[350px] px-2 py-2 rounded-lg hover:border-[2px] border-gray-400 translate-all  duration-150  cursor-pointer hover:scale-90'
			/>

			<h2 className='text-white m-0 p-0 line-clamp-1  md:[500px] w-[350px]     '>
				{movie.title}
			</h2>
		</div>
	)
}

export default MovieCard
