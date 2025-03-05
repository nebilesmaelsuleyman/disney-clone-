import React, { useState, useEffect } from 'react'
const MovieBaseURL = 'https://image.tmdb.org/t/p/w500'
function DetailCard({ detail }) {
	return (
		<div
			className='flex '
			style={{
				backgroundImage: `url(${MovieBaseURL + detail.belongs_to_collection})`,
			}}
		>
			<img
				src={MovieBaseURL + detail.belongs_to_collection.poster_path}
				alt='image'
				className='size-100 px-4 py-3'
			/>

			<div>
				<div>
					<h1 className='flex flex-col text-2xl  font-bold py-5'>
						{detail.title}
						<div className='flex px-2 py-3'>
							<p className='text-xs '> {detail.release_date}</p>
							<p className='text-xs'>{detail.tagline}</p>
						</div>
					</h1>
				</div>
				<p>
					<strong>Overview:</strong>{' '}
					{detail.overview || 'No Overview Available'}
				</p>
				<p>
					<strong>Release Date:</strong>{' '}
					{detail.release_date || 'No Release Date Available'}
				</p>
				<p>
					<strong>Runtime:</strong>{' '}
					{detail.runtime
						? `${detail.runtime} minutes`
						: 'No Runtime Available'}
				</p>
				<p>
					<strong>Rating:</strong>{' '}
					{detail.vote_average || 'No Rating Available'} (
					{detail.vote_count || 'No'} votes)
				</p>
				{detail.belongs_to_collection && (
					<div>
						<h2>
							Collection:{' '}
							{detail.belongs_to_collection.name ||
								'No Collection Name Available'}
						</h2>
					</div>
				)}
				{detail.homepage && (
					<a
						href={detail.homepage}
						target='_blank'
						rel='noopener noreferrer'
					></a>
				)}
			</div>
		</div>
	)
}
export default DetailCard
