import React from 'react'
import { useState, useEffect, useRef } from 'react'
import GlobalApi from '../services/GlobalApi'
import MovieCard from './MovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5'

function MovieList({ genereId, index_ }) {
	const [MovieList, setMovieList] = useState([])
	const elementRef = useRef(null)

	useEffect(() => {
		getMovieByGenreId(genereId)
	}, [genereId])

	const getMovieByGenreId = async (genereId) => {
		try {
			const resp = await GlobalApi.getMovieByGenre(genereId)
			console.log(resp)
			setMovieList(resp.results)
		} catch (error) {
			console.error('Failed to fetch movies:', error)
		}
	}

	const slideLeft = (e) => {
		elementRef.current.scrollLeft -= window.innerWidth
	}

	const slideRight = () => {
		elementRef.current.scrollLeft += window.innerWidth
	}

	return (
		<div className='relative'>
			<IoChevronBackOutline
				onClick={(e) => slideLeft(e)}
				className='md:block text-white text-[30px] absolute left-0 top-1/2 transform -translate-y-1/2 mx-5 cursor-pointer z-10'
			/>
			<div
				ref={elementRef}
				className='flex overflow-hidden scroll-smooth w-full px-9 object-cover'
			>
				{MovieList.map((item, index) => (
					<MovieCard key={index} movie={item} />
				))}
			</div>
			<IoChevronForwardOutline
				onClick={(e) => slideRight(e)}
				className='md:block text-white text-[30px] absolute right-0 top-1/2 transform -translate-y-1/2 mx-5 cursor-pointer z-10 scroll-smooth'
			/>
		</div>
	)
}

export default MovieList
