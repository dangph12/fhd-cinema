import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TicketProvider } from './context/TicketContext';
import SearchBar from './components/SearchBar';
import TicketDetailTable from './components/TicketDetailTable';

function App() {
  return (
    <TicketProvider>
      <Routes>
        <Route path="/*" element={
          <>
            <SearchBar />
            <TicketDetailTable />
          </>
        } />
      </Routes>
    </TicketProvider>
  );
}

export default App;
