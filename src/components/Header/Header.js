import React from 'react'
import { NavLink, Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
   
  return (
    <div>
         <nav>
        <ul>
            <Link to="/" className='logo'>
                <li>MoviesADDA</li>
            </Link>
          <div className='items'>
            <li>
              <NavLink to='/search'><i className='fa fa-search'></i></NavLink>
            </li>      
          </div>      
        </ul>
      </nav>
    </div>
  )
}

export default Header