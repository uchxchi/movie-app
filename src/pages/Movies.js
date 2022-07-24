import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './movies.css'
import { Card } from '../components/card'
import { Link } from 'react-router-dom'

export const Movies = () => {
  const [movie, setMovie] = useState([])

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
  return (
    <div className='container'>
      <header>
        <h1>UCHXCHI'S MOVIE REVIEWS</h1>
      </header>

      <div className='reviewFilter'>
        <button className='button'>Add new review</button>
        <input name='filter' type='text' placeholder='filter' />
      </div>

      <div className='card-container'>
        {movie.map((movie) => {
          return  (
          
              <Link key={movie.id} to={`/movies/${movie.id}`}>
                  <Card movie={movie} />
              </Link>
    
           
            
          )
       
        })}
      </div>
    </div>
  )
}
