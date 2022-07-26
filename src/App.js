import React, { useState } from 'react'
import { Movies } from './pages/Movies'
import { Route, Routes } from 'react-router-dom'
import SingleMovie from './pages/singleMovie'
import MovieReview from './pages/reviews'

function App() {
  const [movieReviews, setMovieReviews] = useState([])

  return (
    <div>
      <div>
        <Routes>
          <Route
            path='/movies/reviews'
            element={
              <MovieReview
                movieReviews={movieReviews}
                setMovieReviews={setMovieReviews}
              />
            }
          />

          <Route path='/movies/:id' element={<SingleMovie />} />

          <Route path='/' element={<Movies />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
