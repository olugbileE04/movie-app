
import { useEffect, useState } from 'react'
import './App.css'
import MovieCard from "./MovieCard"

import AddFavourites from './AddFavourites'

function App() {
  const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=f193dba24afd7dd4e53ba36131ded035'
  const API_SEARCH= 'https://api.themoviedb.org/3/search/movie?api_key=f193dba24afd7dd4e53ba36131ded035&query='

  const [movies, setMovies] = useState([]);
  const [term, setTerm] = useState('');
 

  useEffect(()=>{

    fetch(API_URL)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  },[]);
 
  console.log(movies)

  const handleSearch =(e)=>{
    e.preventDefault()
    
    fetch(API_SEARCH + term)
    .then(res => res.json())
    .then(data => setMovies(data.results))
  }
  

  return (
    <>
    <div className='app'> 
    <div className='search-nav'>
     <div className='title'>
      <h1>Movies</h1>
     </div>
     <div className='search-box'>
      <form onSubmit={handleSearch} >
        <input onChange={(e)=>setTerm(e.target.value)} />
        <button>Search</button>
      </form>
     </div>
     

    </div>
<div className='movies'>
     {movies.map((movie)=>(
      < MovieCard key={movie.id}{...movie} />
      

     ))}
</div>
      
    </div>
    
    <AddFavourites />
    </>
    

  )
}

export default App
