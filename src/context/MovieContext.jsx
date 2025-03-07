import React, { useState, useContext, useEffect, createContext } from 'react'
import GlobalApi from '../services/GlobalApi'

const MovieContext = createContext()

const MovieProvider = ({ children }) => {
	const [movies, setMovies] = useState([])

	const getMoviesByGenreId = async (id) => {
		try {
			const resp = await GlobalApi.getMovieByGenre(id)
			setMovies(resp.results)
		} catch (error) {
			console.log('error while fetching data by genre', error.message)
		}
	}
	return (
		<MovieContext.Provider value={{ movies, getMoviesByGenreId }}>
			{children}
		</MovieContext.Provider>
	)
}
export { MovieContext, MovieProvider }
