import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NewsProvider } from './context/NewsContext';
import SearchBar from './components/SearchBar';
import NewsDetailTable from './components/NewsDetailTable';

function App() {
  return (
    <NewsProvider>
      <Routes>
        <Route path="/*" element={
          <>
            <SearchBar />
            <NewsDetailTable />
          </>
        } />
      </Routes>
    </NewsProvider>
  );
}

export default App;
