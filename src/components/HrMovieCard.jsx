import React from 'react'
const MovieBaseURL = 'https://image.tmdb.org/t/p/w500'

function HrMovieCard({ movie, hanleClick }) {
	return (
		<div onClick={hanleClick} className='flex flex-row items-center'>
			<img
				src={MovieBaseURL + movie.backdrop_path}
				alt=''
				className='w-[250px]  px-2 py-2 rounded-lg hover:border-[2px] border-gray-400 translate-all duration-100  cursor-pointer hover:scale-90 object-cover'
			/>
		</div>
	)
}

export default HrMovieCard
