import React, { useState } from "react";
import './reviews.css'

export default function MovieReview (props){
    const {
        formValue,
        submit,
        change,
        formErrors,
        setFormErrors,
    } = props

    const onChange = (evt) => {
        const {name, value} = evt.target
        change(name, value)
    }
    const onSubmit = (evt) => {
        evt.preventDefault()
        submit()
    }
   
    return(
        <div>
            <h3>CREATE NEW REVIEW</h3>
           <form onSubmit={onSubmit}>

            <div>
                <p>{formErrors.title}</p>
                <p>{formErrors.image_url}</p>
                <p>{formErrors.review}</p>
            </div>

            <div className="formInput">
                 <label htmlFor='title'>Title</label>
                     <input
                       name="title"
                       value={formValue.title}
                       type='text'
                       id="title"
                       placeholder="enter title"
                       onChange={onChange}
                  />
            </div>

            <div className="imgLink">
                <label htmlFor='imageLink'>Image Link</label>
                <input
                name="image_url" 
                value={formValue.image_url}
                type="url"
                id="imageLink" 
                placeholder="enter image url"
                onChange={onChange}
                />
            </div>

            <div className="review">
                <label htmlFor='review'>Review</label>
                <textarea
                name="review"
                value={formValue.review}
                rows='5'
                id="review"
                placeholder="write your review"
                onChange={onChange}
                />
            </div>

            <button>ADD REVIEW</button>

           
           </form>
        </div>
    )
}