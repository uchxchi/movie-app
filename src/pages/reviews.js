import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './reviews.css'
import * as yup from 'yup'
import Schema from '../components/formSchema'

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

export default function MovieReview(props) {
  const { movieReviews, setMovieReviews } = props
  const [formValue, setFormValue] = useState(initialFormValue)
  const [formErrors, setFormErrors] = useState(initialFormErrors)

  const navigate = useNavigate()

  const validate = (name, value) => {
    yup
      .reach(Schema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({ ...formErrors, [name]: '' })
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.errors[0] })
      })
  }

  const change = (name, value) => {
    validate(name, value)
    setFormValue({
      ...formValue,
      [name]: value,
    })
  }

  const addMovieReview = (newReview) => {
    axios
      .post('https://uchxchi-movies.herokuapp.com/api/movies/', newReview)
      .then((res) => {
        setMovieReviews([...movieReviews, res.data])
        setFormValue(initialFormValue)
      })
      .catch((res) => {})
  }

  const submit = (evt) => {
    const newReviews = {
      title: formValue.title.trim(),
      image_url: formValue.image_url.trim(),
      review: formValue.review,
    }
    addMovieReview(newReviews)
  }

  const onChange = (evt) => {
    const { name, value } = evt.target
    change(name, value)
  }

  const onSubmit = (evt) => {
    evt.preventDefault()
    submit()
    navigate('/')
  }

  return (
    <div>
      <h3>CREATE NEW REVIEW</h3>
      <form className='form' onSubmit={onSubmit}>
        <div>
          <p>{formErrors.title}</p>
          <p>{formErrors.image_url}</p>
          <p>{formErrors.review}</p>
        </div>

        <div className='formInput'>
          <label htmlFor='title'>Title</label>
          <input
            name='title'
            value={formValue.title}
            type='text'
            id='title'
            placeholder='enter title'
            onChange={onChange}
          />
        </div>

        <div className='imgLink'>
          <label htmlFor='imageLink'>Image Link</label>
          <input
            name='image_url'
            value={formValue.image_url}
            type='url'
            id='imageLink'
            placeholder='enter image url'
            onChange={onChange}
          />
        </div>

        <div className='review'>
          <label htmlFor='review'>Review</label>
          <textarea
            name='review'
            value={formValue.review}
            rows='5'
            id='review'
            placeholder='write your review'
            onChange={onChange}
          />
        </div>

        <button
          className='formButton'
          disabled={
            !formValue.title || !formValue.image_url || !formValue.review
          }
        >
          ADD REVIEW
        </button>
      </form>
    </div>
  )
}
