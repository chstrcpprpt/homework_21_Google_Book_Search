import React from 'react'
import Header from '../components/searchPage/Header'
import BookSearch from '../components/searchPage/BookSearch'
import Results from '../components/searchPage/Results'

export default function Home() {
  return (
    <div>
      <Header />
      <BookSearch />
      <Results />
    </div>
  )
}
