import axios from 'axios'
const MovieBaseURL = 'https://api.themoviedb.org/3'
const APIKEY = e05378e2fab6394d18814f7077b0882e

const getTrendingVideos = axios.get(
	`${MovieBaseURL}/trending/all/week?api_key=${APIKEY}`
)

exports default = {
	getTrendingVideos,
}
