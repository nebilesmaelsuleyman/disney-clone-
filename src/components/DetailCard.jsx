import React from 'react'

const MovieBaseURL = 'https://image.tmdb.org/t/p/w500'

function DetailCard({ detail }) {
	return (
		<div
			className='relative flex bg-cover bg-center min-h-[500px] z-1' // Adjust height as needed
			style={{
				backgroundImage: `url(${
					MovieBaseURL + detail.belongs_to_collection?.backdrop_path ||
					detail.backdrop_path
				})`,
			}}
		>
			{/* Overlay with opacity */}
			<div className='absolute inset-0 bg-[#6F6967]bg-opacity-50'>
				<div className='relative z-10 flex p-8 text-white'>
					<img
						src={
							detail.belongs_to_collection
								? MovieBaseURL + detail.belongs_to_collection.poster_path
								: MovieBaseURL + detail.backdrop_path
						}
						alt='image'
						className='w-64 h-96 object-cover rounded-lg shadow-lg' // Adjust size and styling
					/>

					{/* Movie Details */}
					<div className='ml-8'>
						<h1 className='text-4xl font-bold'>
							{detail.title}
							<div className='flex space-x-4 mt-2'>
								<p className='text-sm'>{detail.release_date}</p>
								<p className='text-sm italic'>{detail.tagline}</p>
							</div>
						</h1>

						<h1 className='text-2xl font-bold mt-6'>
							<strong>Overview</strong>
						</h1>
						<p className='mt-2 text-lg'>
							{detail.overview || 'No Overview Available'}
						</p>

						<div className='mt-6 space-y-2'>
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
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DetailCard
