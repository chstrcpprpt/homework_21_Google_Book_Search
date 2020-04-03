import React, { useContext, useEffect } from 'react'
import Header from '../components/searchPage/Header'
import SavedBooks from "../components/savePage/SavedBooks";
import { SavedContext } from "../contexts/SavedContext";
import API from "../utils/API";

export default function Home() {
  const [savedBooks, setsavedBooks] = useContext(SavedContext);

  useEffect(() => {
    async function getBooks() {
      const bookList = await API.getSavedBooks();
      setsavedBooks([...bookList]);
    }
    getBooks();
    console.log(savedBooks);
  }, []);

  return (
    <div>
      <Header />
      <SavedBooks />
      <h1>Saved page</h1>
    </div>
  )
}
