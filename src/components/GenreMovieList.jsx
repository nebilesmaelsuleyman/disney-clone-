import React from 'react'
import GenresList from './../Constant/GenresList'
import MovieList from './MovieList'
function GenreMovieList({ id }) {
	return (
		<div>
			{GenresList.genere.map(
				(item, index) =>
					index < 4 && (
						<div>
							<h2 className='p-8 px-8 text-[15px] text-whtie font-bold '>
								{item.name}
							</h2>
							<MovieList genereId={item.id} Index_={index} />
						</div>
					)
			)}
		</div>
	)
}
export default GenreMovieList
