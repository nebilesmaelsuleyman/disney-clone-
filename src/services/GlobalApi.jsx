import axios from 'axios'

const MovieBaseURL = 'https://api.themoviedb.org/3'
const APIKEY = 'e05378e2fab6394d18814f7077b0882e'
const movieByGenreBaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${APIKEY}`

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
const getMovieByGenre = async (id) => {
	try {
		const getMovie = await axios.get(movieByGenreBaseURL + '&with_genres=' + id)
		return getMovie.data
	} catch (error) {
		console.error('Error fetching movies by genre:', error)
	}
}
const getCredits = async (id) => {
	try {
		const credits = await axios.get(`${MovieBaseURL}/movie/${id}/credits`, {
			params: { api_key: APIKEY },
		})
		return credits.data
	} catch (error) {
		console.error('error message from getting credits', error)
	}
}

const getMovieDetail = async (id) => {
	try {
		// const Detailpage = await axios.get(MovieBaseURL + '/movie/' + id)
		const Detailpage = await axios.get(`${MovieBaseURL}/movie/${id}`, {
			params: { api_key: APIKEY, language: 'en-US' },
		})
		return Detailpage.data
	} catch (error) {
		console.log('Error fetching movie detail:', error.message)
	}
}

export default {
	getTrendingVideos,
	getMovieByGenre,
	getMovieDetail,
	getCredits,
}
