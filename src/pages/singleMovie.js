import React, { useEffect} from "react";
import axios from "axios";
import { useParams } from 'react-router-dom'

export default function SingleMovie(){

    useEffect(() => {
        axios.get('https://uchxchi-movies.herokuapp.com/api/movies/:movieId')
        .then(res => {

        })
        .catch(err => {

        })
    })
    return(
        <div>

        </div>
    )
}