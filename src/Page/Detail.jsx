import React from 'react'
import GlobalApi from '../services/GlobalApi'
import Header from '../components/Header'
import { useState, useEffect } from 'react'
import DetailCard from '../components/DetailCard'
import { useParams } from 'react-router-dom'

function Detail() {
	const { id } = useParams()
	const [details, setDetails] = useState(null)
	useEffect(() => {
		getDetails()
	}, [])

	async function getDetails() {
		try {
			const details = await GlobalApi.getMovieDetail(id)
			console.log(details)
			setDetails(details)
		} catch (error) {
			console.error('Failed to fetch details:', error)
		}
	}

	return (
		<div>
			<Header />
			<div>
				{details ? <DetailCard detail={details} /> : <p>LOading ...</p>}
			</div>
		</div>
	)
}
export default Detail
