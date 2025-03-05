import React, { useEffect } from 'react'
import CategoryList from '../components/CategoryList'
import Header from '../components/Header'
import { useState } from 'react'
import MovieCard from '../components/MovieCard'
import GlobalApi from '../services/GlobalApi'
import GenreMovieList from '../components/GenreMovieList'

const Comedy = () => {
	const [movies, setMovies] = useState([])

	useEffect(() => {
		getMovieByGenreId(35)
	}, [])
	const getMovieByGenreId = async (id) => {
		try {
			const resp = await GlobalApi.getMovieByGenre(id)
			setMovies(resp.results)
		} catch (error) {
			console.error('Failed to fetch movies:', error)
		}
	}

	return (
		<div>
			<Header />

			<h2 className='text-white text-2xl p-3'>Adventure</h2>
			<div className='flex flex-wrap justify-center'>
				{movies.map((movie, index) => (
					<MovieCard key={index} movie={movie} />
				))}
			</div>
		</div>
	)
}
export default Comedy
