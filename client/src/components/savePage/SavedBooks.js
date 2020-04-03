import React, { useContext } from 'react'
import SavedCard from './SavedCard/SavedCard'

import { SavedContext } from "../../contexts/SavedContext";

export default function SavedBooks() {
  const [savedBooks] = useContext(SavedContext);

  return (
    <div>
      <h3>Saved Books</h3>
      <div>
        
          {savedBooks.map((book, i) => {
            // console.log(savedBooks.title);
            return (
              <SavedCard 
                key={i}
                id={book._id}
                title={book.title}
                authors={book.author}
                image={book.image}
                desc={book.description}
                view={book.link}
              />
            )
          })}
        
      </div>
    </div>
  )
}
