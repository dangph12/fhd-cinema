import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { MovieProvider } from './context/MovieContext';
import SearchBar from './components/SearchBar';
import MovieDetailTable from './components/MovieDetailTable';
import MoviePagination from './components/MoviePagination';

function App() {
  return (
    <MovieProvider>
      <Routes>
        <Route path="/*" element={
          <>
            <SearchBar />
            <MovieDetailTable />
            <MoviePagination />
          </>
        } />
      </Routes>
    </MovieProvider>
  );
}

export default App;
