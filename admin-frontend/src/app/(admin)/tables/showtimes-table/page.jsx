import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ShowtimeProvider } from './context/ShowtimeContext';
import SearchBar from './components/SearchBar';
import ShowtimeDetailTable from './components/ShowtimeDetailTable';

function App() {
  return (
    <ShowtimeProvider>
      <Routes>
        <Route path="/*" element={
          <>
            <SearchBar />
            <ShowtimeDetailTable />
          </>
        } />
      </Routes>
    </ShowtimeProvider>
  );
}

export default App;
