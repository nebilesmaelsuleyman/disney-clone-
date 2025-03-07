import React, { useEffect } from 'react'
import Header from '../components/Header'
import MovieCard from '../components/MovieCard'

import { useContext } from 'react'
import { MovieContext } from '../context/MovieContext'
const Animation = () => {
	const { movies, getMoviesByGenreId } = useContext(MovieContext)

	const handleMovieClick = (id) => {
		window.location.href(`/movie/${id}`)
	}
	useEffect(() => {
		getMoviesByGenreId(16)
	}, [getMoviesByGenreId])

	return (
		<div>
			<Header />

			<h2 className='text-white text-2xl p-3'>Action</h2>
			<div className='flex flex-wrap justify-center'>
				{movies.map((movie, index) => (
					<MovieCard
						key={index}
						movie={movie}
						handleClick={() => handleMovieClick(movie.id)}
					/>
				))}
			</div>
		</div>
	)
}
export default Animation
