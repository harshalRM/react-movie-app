import axios from 'axios'
import React, { useEffect, useState } from 'react'
import SingleContent from '../../components/SingleContent/SingleContent';
import '../../components/SingleContent/SingleContent.css'
import './Trending.css'
import MovieHomepage from '../MoviesHomePage/MoviesHomePage'


const Trending = () => {

  const [content, setContent] = useState([])
  const [selectedMovie, setSelectedMovie] = useState({})
  
  const fetchMovies = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/trending/movie/week?api_key=${process.env.REACT_APP_API_KEY}`);
    setContent(data.results)
    setSelectedMovie(data.results[1])
  };

  useEffect(() => {
    fetchMovies();
  })

  const [creditMovie, setCreditMovie] = useState({})
  const fetchCreditMovie = async () => {
    const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${selectedMovie.id}?api_key=${process.env.REACT_APP_API_KEY}&append_to_response=credits`);
    // console.log(data);
    setCreditMovie(data)
  };

  useEffect(() => {
    fetchCreditMovie();
  })

  return (
    <>
      <MovieHomepage
        movie={selectedMovie}
        credits={creditMovie}
      />
      <h2 className='pageTitle'>Trending Movies This Week</h2>
      <div className='trending'>
        {
          content && content.map((c) => {
            return (
              <SingleContent
                key={c.id}
                id={c.id}
                title={c.title || c.name}
                poster={c.poster_path}
                backdrop={c.backdrop_path}
                date={c.release_date}
                rating={c.vote_average}
                media_type={c.media_type}
              />
            );
          })
        }
      </div>
    </>

  )
}

export default Trending