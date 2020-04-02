import React, { useState, createContext } from "react";
import axios from "axios";

export const BookContext = createContext();

export const BookContextProvider = (props) => {
  const [books, setBooks] = useState([]);

  const APISearch = (search) => {
    const API_URI = `https://www.googleapis.com/books/v1/volumes?q=${search}`;

    axios.get(API_URI)
      .then(res => {
        console.log(res);
        setBooks(res.data.items);
      })
  }

  return (
    <BookContext.Provider value={[books, setBooks, APISearch]}>
      {props.children}
    </BookContext.Provider>
  );
}
