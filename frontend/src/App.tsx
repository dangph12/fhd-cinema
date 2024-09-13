import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from './components/NavBar';
import SlideBar from './components/SlideBar';

function App() {
  return (
    <div className="App">
        <NavBar/>
        <SlideBar/>
    </div>
  );
}

export default App;
