import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import './singleMovie.css'

export default function SingleMovie() {
  const [singleMovie, setSingleMovie] = useState()
  const { id } = useParams()

  useEffect(() => {
    axios
      .get(`https://uchxchi-movies.herokuapp.com/api/movies/${id}`)
      .then((res) => {
        setSingleMovie(res.data)
      })
      .catch((err) => {})
  }, [id])

  if (!singleMovie) {
    return <div>Loading movie information...</div>
  }

  const { title, review, image_url } = singleMovie
  return (
    <div>
      <div className='headerDiv'>
        <h2>{title}</h2>
        <Link to='/movies/reviews' state={singleMovie}>
          <button className='editBtn'>Edit</button>
        </Link>
        <button className='deleteBtn'>Delete</button>
      </div>

      <div className='container'>
        <img src={image_url} alt='movie' />
        <p>{review}</p>
      </div>
    </div>
  )
}
