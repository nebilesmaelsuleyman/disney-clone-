import React, { useState } from 'react'
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
import CategoryList from './CategoryList'
function Header() {
	const [toggle, setToggle] = useState(false)
	const [categoryToggle, setCategoryToggle] = useState(false)

	const menu2 = [{ name: 'CATEGORY', icon: BiSolidCategory }]
	const menu = [
		{
			name: 'HOME',
			icon: HiHome,
		},

		{
			name: 'MOVIES',
			icon: HiPlayCircle,
		},
		{
			name: 'TV SHOWS',
			icon: HiTv,
		},
		{
			name: 'SEARCH',
			icon: HiMagnifyingGlass,
		},
	]
	return (
		<div className='flex items-center justify-between p-5  px-20 py-8 bg-[#121212]'>
			<div className='flex gap-8 items-center'>
				<img src={Logo} className='w-[80px] md:w-[115px] object-cover' />
				<div className='hidden md:flex gap-8'>
					{menu.map((item, index) => (
						<HeaderItem key={index} name={item.name} Icon={item.icon} />
					))}
				</div>
				<div className='flex md:hidden gap-5'>
					{menu.map(
						(item, index) =>
							index < 3 && <HeaderItem key={index} name={''} Icon={item.icon} />
					)}
					<div className='md:hidden' onClick={() => setToggle(!toggle)}>
						<HeaderItem name={''} Icon={HiDotsVertical} />
					</div>
					{toggle ? (
						<div
							className='absolute mt-3 bg-[#121212] 
				 border-[1px] border-gray-700  px-5 py-4 z-1'
						>
							{menu.map(
								(item, index) =>
									index > 2 && (
										<HeaderItem key={index} name={item.name} Icon={item.icon} />
									)
							)}
						</div>
					) : null}
				</div>
				<div
					className=' md:block abolute  z-10'
					onClick={() => setCategoryToggle(!categoryToggle)}
				>
					<HeaderItem name={menu2[0].name} Icon={menu2[0].icon} />
				</div>
				{categoryToggle && <CategoryList />}
			</div>
			<img
				src={
					'https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745'
				}
				className='w-[40px] rounded-full'
			/>
		</div>
	)
}

export default Header
