import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { BillProvider } from './context/BillContext';
import SearchBar from './components/SearchBar';
import BillDetailTable from './components/BillDetailTable';

function App() {
  return (
    <BillProvider>
      <Routes>
        <Route path="/*" element={
          <>
            <SearchBar />
            <BillDetailTable />
          </>
        } />
      </Routes>
    </BillProvider>
  );
}

export default App;
