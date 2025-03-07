import React from 'react'
import {
	HiHome,
	HiMagnifyingGlass,
	HiStar,
	HiPlayCircle,
	HiTv,
} from 'react-icons/hi2'
import { HiPlus, HiDotsVertical } from 'react-icons/hi'
import { BiSolidCategory } from 'react-icons/bi'
import { Link } from 'react-dom'

const Navbar = () => {
	return (
		<nav>
			<ul>
				<li>
					<Link to='/home'>
						<HiHome /> Home
					</Link>
				</li>
				<li>
					<HiPlayCircle /> Movies
					<ul>
						<li>
							<Link to='/action'>Action</Link>
						</li>
						<li>
							<Link to='/comedy'>Comedy</Link>
						</li>
						<li>
							<Link to='/drama'>Drama</Link>
						</li>
					</ul>
				</li>
				<li>
					<Link to='/tvShow'>
						<HiTv /> Tv show
					</Link>
				</li>
				<li>
					<BiSolidCategory /> Category
					<ul>
						<li>
							<Link to='/category/kids'>Kids</Link>
						</li>
						<li>
							<Link to='/category/adults'>Adults</Link>
						</li>
					</ul>
				</li>
				<li>
					<HiMagnifyingGlass /> Search
				</li>
				<li>
					<HiDotsVertical /> More
				</li>
			</ul>
		</nav>
	)
}
