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
		elementRef.current.scrollLeft += elementRef.current.clientWidth
	}

	const sliderLeft = () => {
		elementRef.current.scrollLeft -= elementRef.current.clientWidth
	}

	return (
		<div className='relative h-[400px] md:h-[310px]'>
			<HiChevronLeft
				className='hidden md:block text-white text-[30px] absolute left-0 mx-8 mt-[150px] cursor-pointer'
				onClick={sliderLeft}
			/>
			<HiChevronRight
				className='hidden md:block text-white text-[30px] absolute right-0 mx-8 mt-[150px] cursor-pointer'
				onClick={sliderRight}
			/>
			<div
				className='overflow-x-hidden flex md:overflow-hidden scroll-smooth w-full hover:border-[3px] translation-all duration-100 ease-in-out border-gray-400'
				ref={elementRef}
				style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
			>
				{MovieList.map((item, index) => (
					<div key={index} className='w-full ' style={{ minWidth: '100%' }}>
						<img
							src={IMAGE_BASE_URL + item.backdrop_path}
							alt='poster'
							className='w-full h-[400px] md:h-[310px] object-cover object-left-top'
						/>
					</div>
				))}
			</div>
		</div>
	)
}
export default Slider
