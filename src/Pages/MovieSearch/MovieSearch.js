import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './MovieSearch.css'

function MovieSearch() {
    const IMG_URl = "https://image.tmdb.org/t/p/w300/"
    
    const [suggestions, setSuggestions] = useState("")
    async function search(text) {
        let result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${text}`)
        result = await result.json();
        console.log(result.results);
        setSuggestions(result.results);
    }
    return (
        <>
            <div className='wrapper'>
                <div className='search-input'>
                    <input
                        type="text"
                        placeholder='search moviee..'
                        onChange={(e) => search(e.target.value)}
                    />
                    <div className='autocom-box' >
                    {
                        suggestions && suggestions.map((suggesion) => {
                            return (
                                <>
                                    <div key={suggesion.id}>
                                        <img src={`${IMG_URl}/${suggesion.poster_path}`}
                                            className='image' alt=''/>
                                        <Link to={`/search/${suggesion.id}`} className='link'>
                                            <li>{suggesion.title}</li>
                                        </Link>
                                        <hr/>
                                    </div>
                                </>
                            )
                        })
                    }
                    </div>
                </div>
            </div>
        </>
    )
}

export default MovieSearch