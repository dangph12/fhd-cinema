import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { SaleProvider } from './../context/SaleContext';
import SearchBar from './../component/SearchBar';
import SaleDetailTable from './../component/SaleDetailTable';
import  Chart from './../component/Chart';

function App() {
  return (
    <SaleProvider>
      <Routes>
        <Route path="/*" element={
          <>
            
            <Chart/>
            <SearchBar />
            <SaleDetailTable />
          </>
        } />
      </Routes>
    </SaleProvider>
  );
}

export default App;