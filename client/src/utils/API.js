import axios from "axios";

const API_URL = "/api/books";

async function saveBook(newBook) {
  const { data: savedBook } = await axios.post(`${API_URL}/saved`, newBook);
  return savedBook
};

async function getSavedBooks() {
  const { data: books } = await axios.get(`${API_URL}/saved`);
  return books
};

async function deleteBook(id) {
  const message = await axios.delete(`${API_URL}/saved/${id}`);
  return message
};

export default { saveBook, getSavedBooks, deleteBook };