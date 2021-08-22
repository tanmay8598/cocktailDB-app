import React from 'react'
import { Link } from 'react-router-dom'

const Cocktail = ({ id, image, glass, name, info }) => {
  return (
    <article className='cocktail'>
      <div className='img-container'>
        <img src={image} alt={name} />
      </div>
      <div className='info'>
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{info}</p>
      </div>
      <Link to={`/cocktail/${id}`} className='btn'>
        Details
      </Link>
    </article>
  )
}

export default Cocktail
