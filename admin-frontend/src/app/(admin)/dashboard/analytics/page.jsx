import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SaleProvider } from './../context/SaleContext';
import SearchBar from './../component/SearchBar';
import SaleDetailTable from './../component/SaleDetailTable';

function App() {
  return (
    <SaleProvider>
      <Routes>
        <Route path="/*" element={
          <>
            <SearchBar />
            <SaleDetailTable />
          </>
        } />
      </Routes>
    </SaleProvider>
  );
}

export default App;