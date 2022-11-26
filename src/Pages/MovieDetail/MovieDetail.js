import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './MovieDetail.css'
import Carousel from '../../components/Carousel/Carousel'
import MovieTrailer from '../../components/MovieTrailer/MovieTrailer';







const MovieDetail = () => {
  const IMG_URl = "https://image.tmdb.org/t/p/w300/"
  const [movie, setMovie] = useState({})
  const { id } = useParams();

  useEffect(() => {
    getMovie()
  })

  const getMovie = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits`)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          console.log("res error");
        }
      })
      .then((data) => {
        setMovie(data);
      })
      .catch((err) => console.log(err))
  }
  const number = movie.vote_average
  const result = Math.round(number * 10) / 10;
  const director = movie.credits?.crew.find(dir => dir.job=== "Director")
  // const trailer = movie.videos?.results.filter((vid) => vid.type === " Trailer")

  return (
    <>
      <div className='movie-container' style={{ backgroundImage: `linear-gradient(180deg, transparent, rgba(0,0,0,1.5)),url('https://image.tmdb.org/t/p/w1280/${movie.backdrop_path}')` }}>
        <div className='movie-content'>
          <div className='left'>
            <img src={`${IMG_URl}/${movie.poster_path}`} alt='' />
          </div>
          <div className='right'>
            <h1>{movie.title}</h1>
            <h2>"{movie.tagline}"</h2>
            <h3><i className='fa fa-star'></i>{result}</h3>
            {
              movie.genres?.map((item) => {
                return (
                  <div className='genres'>
                    <h3>{item.name}</h3>
                  </div>
                )
              })
            }
            <p>{movie.overview}</p>
            <h3>A {director?.name} Film</h3>
          </div>
        </div>
      </div>
      <div>
         <h1>CAST</h1>
         <Carousel movie={movie} id={movie.id}/>
      </div>
      <div className='videos'>
          <MovieTrailer movie={movie} id={movie.id} />
      </div>
    </>
  )
}

export default MovieDetail