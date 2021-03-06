import React, { useContext } from 'react'
import { BookContext } from '../../contexts/BookContext';
import BookCard from './BookCard/BookCard';

export default function Results() {
  const [books, setBooks] = useContext(BookContext);

  return (
    <div>
      <h3>Results</h3>
      <div>
        
          {books.map((book, i) => {
            return (
              <BookCard 
                key={i}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                image={book.volumeInfo.imageLinks.thumbnail}
                desc={book.volumeInfo.description}
                view={book.volumeInfo.infoLink}
              />
            )
          })}
        
      </div>
    </div>
  )
}
