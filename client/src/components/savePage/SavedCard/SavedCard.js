import React, { useContext } from 'react'
import "../../searchPage/BookCard/BookCard.css"

import API from "../../../utils/API";
import { SavedContext } from '../../../contexts/SavedContext';

export default function SavedCard({ id, title, authors, image, desc, view }) {
  const [savedBooks, setSavedBooks] = useContext(SavedContext);

  const handleDelete = async (ev, id) => {
    try {
      ev.stopPropagation();
      await API.deleteBook(id)
      const filteredBooks = setSavedBooks(savedBooks.filter(savedBooks._id !== id));
    } catch (err) {}
  }

  return (
    <div className="results-container">
      <div className="title-container">
        <div>
          <h3>{title}</h3>
          <p>{authors}</p>
        </div>
        <div className="result-btns">
          <a href={view} target="_blank"><button>View</button></a>
          <button
            onClick={ev => handleDelete(ev, id)}
          >Delete</button>
        </div>
      </div>
      <div className="image-container">
        <img src={image} />
        <p>{desc}</p>
      </div>
    </div>
  )
}
