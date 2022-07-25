import React from 'react'
import { Movies } from './pages/Movies'
import { Route, Routes} from 'react-router-dom'
import SingleMovie from './pages/singleMovie'
import MovieReview from './pages/reviews'


function App() {
  return (
    <div>
       <div>
        <Routes>

          <Route
          path='/movies/reviews'
          element={<MovieReview />}
          />

          <Route 
          path='/movies/:id'
          element={<SingleMovie />}
          />

          <Route 
          path='/'
          element={<Movies />}
          />
            
        </Routes>
     
    </div>
    </div>
   
  
  )
}

export default App
