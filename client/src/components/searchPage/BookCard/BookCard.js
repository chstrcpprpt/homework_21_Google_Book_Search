import React, { useContext } from 'react'
import "./BookCard.css";
import API from '../../../utils/API';

export default function BookCard({ title, authors, image, desc, view }) {

  const author = authors[0];

  const handleSave = (ev) => {
    ev.preventDefault();
    const newBook = 
      {
        title: title,
        author: author,
        image: image,
        description: desc,
        link: view
      };
    console.log(newBook);
    API.saveBook(newBook);
  }

  return (
    <div className="results-container">
      <div className="title-container">
        <div>
          <h3>{title}</h3>
          <p>{authors[0]}</p>
        </div>
        <div className="result-btns">
          <a href={view} target="_blank"><button>View</button></a>
          <button
            onClick={handleSave}
          >Save</button>
        </div>
      </div>
      <div className="image-container">
        <img src={image} />
        <p>{desc}</p>
      </div>
    </div>
  )
}
