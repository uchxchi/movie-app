import React, { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'
import './singleMovie.css'

export default function SingleMovie(){
    const [singleMovie, setSingleMovie] = useState()
    const { id } = useParams()

    useEffect(() => {
        axios.get(`https://uchxchi-movies.herokuapp.com/api/movies/${id}`)
        .then(res => {
            console.log(res.data)
            setSingleMovie(res.data)

        })
        .catch(err => {

        })
    }, [id])

     if (!singleMovie) {
    return <div>Loading movie information...</div>;
  }

  const { title, review, image_url} = singleMovie
    return(
        <div>
            
            <div className="headerDiv">
                <h2>{title}</h2>
                <button className="editBtn">Edit</button>
                <button className="deleteBtn">Delete</button>
                
            </div>

             <div className="container">
            

            <img src={image_url} alt="movie" />
            <p>{review}</p>   
        </div>
        </div>
       
    )
}