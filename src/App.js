import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [movie, setMovie] = useState([])

  useEffect(() => {
    axios.get('https://uchxchi-movies.herokuapp.com/api/movies/')
    .then(res => {
      setMovie(res.data)

    })
    .catch(err => {

    })

  }, [])
  if(!movie){
    return(
      <div>loading...</div>
    ) 
  }
 
  return (
    <div className='container'>
      
      <header>
        <h1>UCHXCHI'S MOVIE REVIEWS</h1>
      </header>

      <div className='reviewFilter'>
        <button className='button'>Add new review</button>
        <input 
        name='filter'
        type="text"
        placeholder='filter'
         />
      </div>

      <div className='card-container'>
        {
        movie.map((movie) =>{
          return (
            <div className='card'>
            <h2>{movie.title}</h2>
            <img 
            className='img'
            src={movie.image_url}
             alt="movie" 
             />    
    </div>

          )
          
        })
      }
      </div>

      

      
    </div>
    
  )
  }

export default App;
