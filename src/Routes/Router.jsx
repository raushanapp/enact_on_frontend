import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import AllMovies from '../Pages/AllMovies';
import SearchMovies from '../Pages/SearchMovies';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/all-movies" element={<AllMovies />} />
      <Route path="/search-movies" element={<SearchMovies />} />
    </Routes>
  );
}

export default Router