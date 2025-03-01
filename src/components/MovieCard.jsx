import React from 'react'
const MovieBaseURL = 'https://image.tmdb.org/t/p/w500'
function MovieCard({ movie }) {
	return (
		<>
			<img
				src={MovieBaseURL + movie.poster_path}
				alt=''
				className='  md:[200px] w-[110px] px-2 py-2 rounded-lg hover:border-[2px] border-gray-400 translate-all  duration-100 ease-in-out cursor-pointer hover:scale-90'
			/>
		</>
	)
}

export default MovieCard
