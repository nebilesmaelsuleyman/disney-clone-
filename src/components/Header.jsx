import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './../assets/img/Logo.png'
import {
	HiHome,
	HiMagnifyingGlass,
	HiStar,
	HiPlayCircle,
	HiTv,
} from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import { BiSolidCategory } from 'react-icons/bi'
import HeaderItem from './HeaderItem'
import CategoryList from '../Lists/CategoryList'
import MovieList from '../Lists/MovieList'
import TvshowList from '../Lists/Tvshows'
function Header() {
	const [tvtoggle, settvToggle] = useState(false)
	const [categoryToggle, setCategoryToggle] = useState(false)
	const [movieToggle, setMovieToggle] = useState(false)

	return (
		<div className='flex items-center justify-between p-5 px-20 py-8 bg-[#121212]'>
			<div className='flex gap-8 items-center'>
				<Link to={'/'}>
					<img src={Logo} className='w-[80px] md:w-[115px] object-cover' />
				</Link>
				<div className='flex justify-around items-center gap-8'>
					<div
						className='flex items-center cursor-pointer'
						onClick={() => setMovieToggle(!movieToggle)}
					>
						<HiPlayCircle />
						<h2 className='flex items-center justify-center px-2'>Movies</h2>
						{movieToggle && <MovieList />}
					</div>

					<div
						className='flex items-center cursor-pointer'
						onClick={() => settvToggle(!tvtoggle)}
					>
						<HiTv />
						<h2 className='px-3 items-center'>TvShow</h2>
						{tvtoggle && <TvshowList />}
					</div>
					<div
						className='flex items-center cursor-pointer'
						onClick={() => setCategoryToggle(!categoryToggle)}
					>
						<BiSolidCategory />
						<h2 className='px-2 '>Category</h2>
						{categoryToggle && <CategoryList />}
					</div>
				</div>
			</div>
			<div className='ml-auto'>
				<img
					src='https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
					className='w-[40px] rounded-full'
				/>
			</div>
		</div>
	)
}

export default Header
