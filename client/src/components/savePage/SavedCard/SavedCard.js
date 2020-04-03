import React from 'react'
import "../../searchPage/BookCard/BookCard.css"

export default function SavedCard({ key, title, authors, image, desc, view }) {

  return (
    <div className="results-container" key={key}>
      <div className="title-container">
        <div>
          <h3>{title}</h3>
          <p>{authors}</p>
        </div>
        <div className="result-btns">
          <a href={view} target="_blank"><button>View</button></a>
          <button
            // onClick={handleSave}
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
