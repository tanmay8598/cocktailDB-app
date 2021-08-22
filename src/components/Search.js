import React from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  const { setSearchTerm } = useGlobalContext()
  return (
    <div>
      <h4>Search Your Favorite Cocktail</h4>
    </div>
  )
}

export default Search
