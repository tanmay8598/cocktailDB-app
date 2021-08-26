import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-logo'>
          <Link to='/'>
            <h2>
              The <span className='nav-style'>Cocktail</span>.
              <span style={{ fontSize: '18px' }}>DB</span>
            </h2>
          </Link>
        </div>

        <ul className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
