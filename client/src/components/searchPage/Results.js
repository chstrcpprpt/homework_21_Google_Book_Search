import React, { useContext } from 'react'
import { BookContext } from '../../contexts/BookContext';

export default function Results() {
  const [books, setBooks] = useContext(BookContext);

  return (
    <div>
      <h3>Results</h3>
      <div>
        
          {books.map((book, i) => {
            return (
              <div key={i}>{book.volumeInfo.title}</div>
            )
          })}
        
      </div>
    </div>
  )
}
