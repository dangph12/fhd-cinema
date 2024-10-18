import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ScreenProvider } from './context/ScreenContext';
import SearchBar from './components/SearchBar';
import ScreenDetailTable from './components/ScreenDetailTable';

function App() {
  return (
    <ScreenProvider>
      <Routes>
        <Route path="/*" element={
          <>
            <SearchBar />
            <ScreenDetailTable />
          </>
        } />
      </Routes>
    </ScreenProvider>
  );
}

export default App;
