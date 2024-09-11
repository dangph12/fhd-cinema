import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from './components/NavBar';
import MovieCard from "./components/Seats/MovieCard";
import SeatSelection from "./components/Seats/SeatSelection";
// import SlideBar from './components/SlideBar';
// import SlideShow from './components/SlideShow'
// import Banner from './components/Banner';
// import Footer from './components/Footer';
// import BodyFirst from "./components/BodyFirst";
// import BodySecond from "./components/BodySecond";
// import StarMember from "./components/StarMember";
// import BannerSecond from "./components/BannerSecond";


function App() {
  return (
    <div className="App">
        <NavBar/>
        <MovieCard/>
        <SeatSelection/>
        {/* <SlideShow/>
        <SlideBar/>
        <Banner/> 
        <BodyFirst/>
        <BannerSecond/>
        <BodySecond/>
        <StarMember/> 
        <Footer/> */}
    </div>
  );
}

export default App;
