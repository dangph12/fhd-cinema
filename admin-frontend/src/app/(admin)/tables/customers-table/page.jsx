import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { CustomerProvider } from './context/CustomerContext';
import SearchBar from './components/SearchBar';
import CustomerDetailTable from './components/CustomerDetailTable';

function App() {
  return (
    <CustomerProvider>
      <Routes>
        <Route path="/*" element={
          <>
            <SearchBar />
            <CustomerDetailTable />
          </>
        } />
      </Routes>
    </CustomerProvider>
  );
}

export default App;
