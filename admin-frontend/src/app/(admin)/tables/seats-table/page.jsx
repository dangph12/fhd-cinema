import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SeatProvider } from './context/SeatContext';
import SearchBar from './components/SearchBar';
import SeatDetailTable from './components/SeatDetailTable';

function App() {
  return (
    <SeatProvider>
      <Routes>
        <Route path="/*" element={
          <>
            <SearchBar />
            <SeatDetailTable />
          </>
        } />
      </Routes>
    </SeatProvider>
  );
}

export default App;
