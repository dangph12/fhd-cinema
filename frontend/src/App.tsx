import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from './components/NavBar';
import SlideBar from './components/SlideBar';
import SlideShow from './components/SlideShow'
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <SlideShow/>
        <SlideBar/>
        <Banner/> 


        <Footer/>
    </div>
  );
}

export default App;
