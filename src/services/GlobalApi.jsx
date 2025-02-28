import axios from 'axios'

const MovieBaseURL = 'https://api.themoviedb.org/3'
const APIKEY = 'e05378e2fab6394d18814f7077b0882e'

const getTrendingVideos = async () => {
	try {
		const response = await axios.get(
			`${MovieBaseURL}/trending/all/week?api_key=${APIKEY}`
		)
		return response.data
	} catch (error) {
		console.error('Error fetching trending videos:', error)
		throw error
	}
}

export default {
	getTrendingVideos,
}
