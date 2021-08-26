import React from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
  const { setSearchTerm } = useGlobalContext()

  const searchValue = React.useRef('')

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value)
  }

  React.useEffect(() => {
    searchValue.current.focus()
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className='form-control'>
          <label>Search Your Favorite Cocktail</label>
          <input
            type='text'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          ></input>
        </div>
      </form>
    </section>
  )
}

export default Search
