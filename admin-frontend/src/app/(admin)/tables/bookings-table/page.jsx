import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import SearchBar from './components/SearchBar';
import BookingDetailTable from './components/BookingDetailTable';

function App() {
  return (
    <BookingProvider>
      <Routes>
        <Route path="/*" element={
          <>
            <SearchBar />
            <BookingDetailTable />
          </>
        } />
      </Routes>
    </BookingProvider>
  );
}

export default App;
