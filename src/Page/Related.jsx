import React from 'react'
import { useState, useEffect } from 'react'
import GlobalApi from '../services/GlobalApi'
import { useParams } from 'react-router-dom'

function Related({ id }) {
	;[credit, setCredit] = useState(null)
	const { id } = useParams()
	useEffect(() => {
		getCredits(id)
	}, [id])

	async function getCredits(id) {
		const credits = GlobalApi.getCredits(id)
		setCredit(credits.data)
	}
	return <div>{/* Add your content here */}</div>
}
export default Related
