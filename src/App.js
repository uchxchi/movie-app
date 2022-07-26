import React, { useState } from 'react'
import axios from 'axios'
import { Movies } from './pages/Movies'
import { Route, Routes} from 'react-router-dom'
import SingleMovie from './pages/singleMovie'
import MovieReview from './pages/reviews'
import * as yup from 'yup'
import Schema from './components/formSchema'

const initialFormValue = {
  title: '',
  image_url: '',
  review: '',
}
const initialFormErrors = {
  title: '',
  image_url: '',
  review: '',
}
function App() {
   const [movieReviews, setMovieReviews] = useState([])
   const [formValue, setFormValue] = useState(initialFormValue)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const validate = (name, value) => {
    yup
    .reach(Schema, name)
    .validate(value)
    .then(valid => {
      setFormErrors({...formErrors, [name]: ''})
    })
    .catch(err => {
      setFormErrors({...formErrors, [name]: err.errors[0]})
    })
   }

   const addMovieReview = (newReview) => {
    axios.post('https://uchxchi-movies.herokuapp.com/api/movies/', newReview)
    .then(res => {
      console.log(res.data)

    })
    .catch(res => {

    })

  }

  const change = (name, value) => {
    validate(name, value)
      setFormValue({
        ...formValue,
        [name]: value
      })
    }

    const submit = evt => {
      const newReviews = {
        title: formValue.title.trim(),
        image_url: formValue.image_url.trim(),
        review: formValue.review,
      }
      setMovieReviews([...movieReviews, newReviews])
      setFormValue(initialFormValue)
      addMovieReview(newReviews)
    }

  return (
    <div>
       <div>
        <Routes>

          <Route
          path='/movies/reviews'
          element={<MovieReview 
            formValue={formValue}
            change={change}
            submit={submit}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
          />}
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
