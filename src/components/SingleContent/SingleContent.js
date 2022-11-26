import React from 'react'
import {Link} from 'react-router-dom'



const SingleContent = ({id, title, poster, backdrop, date, rating, media_type}) => {
  return (
    <div className='media' key={id}> 
        <img src={`https://image.tmdb.org/t/p/w300/${poster}`} className='poster' alt=''  />
        <Link to={`/search/${id}`} className='link'>
          <h2>{title}</h2>
        </Link>
        
    </div>
  )
}

export default SingleContent