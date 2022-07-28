import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './movies.css'
import { Card } from '../components/card'
import { Link } from 'react-router-dom'

export const Movies = () => {
  const [movie, setMovie] = useState([])
  const [searchString, setSearchString] = useState('')
  useEffect(() => {
    axios
      .get('https://uchxchi-movies.herokuapp.com/api/movies/')
      .then((res) => {
        setMovie(res.data)
      })
      .catch((err) => {})
  }, [])
  if (!movie) {
    return <div>loading...</div>
  }

  const onChange = (evt) => {
    const { value } = evt.target
    setSearchString(value)
  }

  let filtered = movie.filter(
    (movie) => movie.title.toLowerCase() === searchString.toLowerCase()
  )

  let renderedArray = filtered.length > 0 ? filtered : movie

  return (
    <div className='container'>
      <header>
        <h1>UCHXCHI'S MOVIE REVIEWS</h1>
      </header>

      <div className='reviewFilter'>
        <Link to='/movies/reviews'>
          <button className='button'>Add new review</button>
        </Link>

        <input
          onChange={onChange}
          name='filter'
          type='text'
          placeholder='filter'
        />
      </div>

      <div className='card-container'>
        {renderedArray.map((movie) => {
          return (
            <Link key={movie.id} to={`/movies/${movie._id}`}>
              <Card movie={movie} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}
