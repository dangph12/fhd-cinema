import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from './components/NavBar';
import SlideBar from './components/SlideBar';
import SlideShow from './components/SlideShow'

function App() {
  return (
    <div className="App">
        <NavBar/>
        <SlideShow/>
        {/* <SlideBar/> */}
        
    </div>
  );
}

export default App;
