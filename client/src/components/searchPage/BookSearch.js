import React, { useContext } from 'react'
import { SearchContext } from '../../contexts/SearchContext'

export default function BookSearch() {
  const [search, setSearch, handleSearch] = useContext(SearchContext); 

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(search);
    setSearch("");
  }

  return (
    <div>
      <h3>Book Search</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          onChange={handleSearch}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  )
}
