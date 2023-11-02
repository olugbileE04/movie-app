
import './MovieCard.css'

export default function MovieCard(props){
    const API_IMG="https://image.tmdb.org/t/p/w500/"
   
  return (
    <>
    <div className='card'>
        <div className='poster'>
            <img src= {API_IMG + props.poster_path} /> 
            

        </div>
        <div className='info'>
            <p className='title'>
                {props.title}
            </p>
            <p className='vote'>
                {props.vote_average}
            </p>

        </div>
        <div className='overview'>
            <h2 className='title_overview'>Overview:
            <h6 className="overview-info">{props.overview}</h6>
            <br />
            <br />
           <div className='overlay'><h6><i class="fa-solid fa-heart"></i> Add To Favourites</h6></div>
            </h2>
        </div>
    </div>

    </>
  )
  
}
