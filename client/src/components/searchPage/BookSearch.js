import React, { useContext } from 'react'
import { SearchContext } from '../../contexts/SearchContext'
import { BookContext } from '../../contexts/BookContext';

// import { APISearch } from "../../utils/API";

export default function BookSearch() {
  const [search, setSearch, handleSearch] = useContext(SearchContext); 
  const [books, setBooks, APISearch] = useContext(BookContext); 

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    APISearch(search);
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
