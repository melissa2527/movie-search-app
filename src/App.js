import React from 'react';
import Header from './movies/Header';
import SearchMovies from './movies/SearchMovies';


function App() {
  return (
    <div>
      <Header/>
      <div className="container">
        <SearchMovies />
      </div>
    </div>
  )
}

export default App
