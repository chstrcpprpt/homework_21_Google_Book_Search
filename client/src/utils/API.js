import axios from "axios";

export const APISearch = (search) => {
  const API_URI = `https://www.googleapis.com/books/v1/volumes?q=${search}`;

  axios.get(API_URI)
    .then(res => {
      const bookData = res.data.items;
      // console.log(bookData);
      const bookArray = [
        bookData.map(book => {
          return (
            { 
              id: book.id,
              title: book.volumeInfo.title,
              authors: book.volumeInfo.authors,
              description: book.volumeInfo.description,
              image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : "",
              link: book.volumeInfo.infoLink
            }
          );
        })
      ];
      console.log(bookArray);
      return bookArray;
    })
}