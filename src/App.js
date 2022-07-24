import React from 'react'
import { Movies } from './pages/Movies'
import { Route, Routes} from 'react-router-dom'
import SingleMovie from './pages/singleMovie'


function App() {
  return (
    <div>
       <div>
        <Routes>
          <Route 
          path='/movie/:id'
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
