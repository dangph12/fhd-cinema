import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from './components/NavBar';
import SlideBar from './components/SlideBar';
import SlideShow from './components/SlideShow'
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <SlideShow/>
        {/* <Banner/> */}
        <SlideBar/>
        
        
    </div>
  );
}

export default App;
