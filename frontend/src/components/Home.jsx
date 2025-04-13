import React from 'react'
import BookList from './BookList'

function Home({ searchTerm }) {
    
  return (
    <div className="p-4">
      <BookList searchTerm={searchTerm}/>
    </div>
  )
}

export default Home
