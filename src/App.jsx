import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Page/Home'
import Comedy from './page/Comedy'
import Detail from './Page/Detail'
import Animation from './Page/Animation'
import Adventure from './page/Adventure'
import Action from './page/Action'
function App() {
	return (
		<>
			<div>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/comedy' element={<Comedy />} />
					<Route path='/animation' element={<Animation />} />
					<Route path='/adventure' element={<Adventure />} />
					<Route path='/action' element={<Action />} />
					<Route path='/movie/:id' element={<Detail />} />

					{/* <Route path='/genre/:genre' element={<Genre />} /> */}
				</Routes>
			</div>
		</>
	)
}

export default App
