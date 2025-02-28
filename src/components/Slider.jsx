import React from 'react'
import GlobalApi from '../services/GlobalApi'
import { useEffect, useState, useRef } from 'react'
import { HiChevronLeft } from 'react-icons/hi'
import { HiChevronRight } from 'react-icons/hi'
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/original/'

function Slider() {
	const [MovieList, setMovieList] = useState([])
	const elementRef = useRef(null)

	useEffect(() => {
		getTrendingMovies()
	}, [])

	const getTrendingMovies = async () => {
		try {
			const data = await GlobalApi.getTrendingVideos()
			setMovieList(data.results)
		} catch (error) {
			console.error('Error fetching trending videos:', error)
		}
	}
	const sliderRight = () => {
		elementRef.current.scrollLeft += window.innerWidth - 110
	}

	const sliderLeft = () => {
		elementRef.current.scrollLeft -= window.innerWidth - 110
	}

	return (
		<div className='relative h-[400px] md:h-[310px] '>
			<HiChevronLeft
				className='hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer '
				onClick={() => sliderLeft(sliderLeft)}
			/>
			<HiChevronRight
				className='hidden md:block text-white text-[30px] absolute
        mx-8 mt-[150px] cursor-pointer right-0'
				onClick={() => sliderRight(sliderRight)}
			/>

			<div
				className='flex  overflow-x-auto  scroll-smooth w-full   px-16 py-4 object-cover'
				ref={elementRef}
			>
				{MovieList.map((item, index) => (
					<img
						key={index}
						src={IMAGE_BASE_URL + item.backdrop_path}
						alt='poster'
						className='  min-w-full h-[310px] hide-scrollbar object-cover object-left-top  mr-5 py-2 rounded-md hover:border-[4px] border-gray-400 translate-all  duration-100 ease-in-out'
					/>
				))}
			</div>
		</div>
	)
}
export default Slider
