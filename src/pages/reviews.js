import React from "react";

export default function MovieReview (){
    return(
        <div>
           <form>

            <div>
                 <label for='title'>Title</label>
                     <input
                       name="title"
                       type='text'
                       id="title"
                       placeholder="enter title"
                  />
            </div>

            <div>
                <label for='image-link'>Image Link</label>
                <input
                name="image-link" 
                type="url"
                id="image-link" 
                placeholder="enter image link"
                />
            </div>

            <div>
                <label for='review'>Review</label>
                <textarea
                name="review"
                rows='5'
                id="review"
                placeholder="write your review"
                />
            </div>

            <button>ADD REVIEW</button>

           
           </form>
        </div>
    )
}