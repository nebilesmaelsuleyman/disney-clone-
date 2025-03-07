import './App.css'
import Action from './Page/Action.jsx'
import Animation from './Page/Animation.jsx'
import Comedy from './Page/Comedy.jsx'
import Detail from './Page/Detail.jsx'
import Home from './page/Home.jsx'
import Adventure from './Page/Adventure.jsx'
import { MovieProvider } from './context/MovieContext.jsx'

import { Route, Routes } from 'react-router-dom'
function App() {
	return (
		<MovieProvider>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movie/action' element={<Action />} />
				<Route path='/movie/animation' element={<Animation />} />
				<Route path='/movie/comedy' element={<Comedy />} />
				<Route path='/movie/comedy/:id' element={<Detail />} />
				<Route path='/movie/animation/:id' element={<Detail />} />
				<Route path='/movie/:id' element={<Detail />} />
				<Route path='/movie/action/:id' element={<Detail />} />
				<Route path='/movie/adventure/:id' element={<Detail />} />
			</Routes>
		</MovieProvider>
	)
}

export default App
