import React from 'react'
import "./BookCard.css";

export default function BookCard({ title, authors, image, desc, view }) {
  return (
    <div className="results-container">
      <div className="title-container">
        <div>
          <h3>{title}</h3>
          <p>{authors[0]}</p>
        </div>
        <div className="result-btns">
          <a href={view} target="_blank"><button>View</button></a>
          <button>Save</button>
        </div>
      </div>
      <div className="image-container">
        <img src={image} />
        <p>{desc}</p>
      </div>
    </div>
  )
}
