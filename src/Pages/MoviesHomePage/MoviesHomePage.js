import React from 'react'
import './MoviesHomePage.css'

const MoviesHomePage = ({movie, id, credits, crews}) => {
  const number = movie.vote_average
  const result = Math.round(number*10)/10;
  return (
    <div className='container' style={{backgroundImage: `linear-gradient(180deg, transparent, rgba(0,0,0,0.8)),url('https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}')`}}>
    
        <div className='content'>
            <h1>{movie.title}</h1>
            <h2>"{credits.tagline}"</h2> 
            <p>{movie.overview}</p>
            <h3 className='rating'><span>IMDb</span><i className='fa fa-star'></i>{result}</h3>
            <div className='details'>  
                {
                    credits.genres?.map(genre=>{
                        return(
                            <>
                                <div className='genres'>
                                    <h4>{genre.name}</h4>
                                </div>
                            </>
                        )
                    })
                }
            </div>
            <div className='btns'>
                <a href='/' id='play'> <i className='fa fa-play'></i> Play Now </a>
                <a href='/' id='download_main'> <i className='fa fa-download'></i></a>
            </div>
        </div>
    </div>
  )
}

export default MoviesHomePage