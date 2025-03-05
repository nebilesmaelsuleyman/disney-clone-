import React from 'react'
import CategoryList from '../components/CategoryList'
import Header from '../components/Header'
import Slider from '../components/Slider'
import ProductionHouse from '../components/ProductionHouse'
import GenreMovieList from '../components/GenreMovieList'

const Home = () => {
	return (
		<div>
			<Header />
			<Slider />
			<ProductionHouse />
			<GenreMovieList />
		</div>
	)
}
export default Home
