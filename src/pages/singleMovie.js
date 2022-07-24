import React, { useState, useEffect} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'

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
    return(
        <div>
          
        </div>
    )
}