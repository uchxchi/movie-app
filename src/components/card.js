import React from 'react'
import './card.css'

export const Card = ({ movie }) => {
  return (
    <div className='card'>
      <h2>{movie.title}</h2>
      <img className='img' src={movie.image_url} alt='movie' />
    </div>
  )
}

