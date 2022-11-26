import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './MovieTrailer.css';
import YouTube from 'react-youtube';

// const handleDragStart = (e) => e.preventDefault();




const MovieTrailer = ({ movie, id }) => {
  const [trailer, setTrailer] = useState();

  useEffect(() => {
    fetchCredits();
  });



  const fetchCredits = async () => {
    const { data } = await axios.get(`
        https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}
  `);
    console.log(data.results);
    setTrailer(data.results);
  };


  // const movieTrailer = trailer?.find(vid => vid.type === "Trailer")
  let movieTrailer = trailer?.find((vid) => vid.type==="Teaser"?"Teaser":vid.type==="Trailer" )

  return (
    <>
      <YouTube videoId={movieTrailer?.key} className='movie-trailer'/>
    </>
  )
}

export default MovieTrailer;