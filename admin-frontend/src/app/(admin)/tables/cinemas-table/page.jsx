import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CinemaProvider } from './context/CinemaContext';
import SearchBar from './components/SearchBar';
import CinemaDetailTable from './components/CinemaDetailTable';

function App() {
  return (
    <CinemaProvider>
      <Routes>
        <Route path="/*" element={
          <>
            <SearchBar />
            <CinemaDetailTable />
          </>
        } />
      </Routes>
    </CinemaProvider>
  );
}

export default App;
