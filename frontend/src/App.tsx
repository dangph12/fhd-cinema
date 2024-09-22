import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from './components/NavBar';
import SlideShow from './components/SlideShow'
import Banner from './components/Banner';
import Footer from './components/Footer';
import BodyFirst from "./components/BodyFirst";
import BodySecond from "./components/BodySecond";
import StarMember from "./components/StarMember";
import BannerSecond from "./components/BannerSecond";
import Ticket from "./components/payment-inform/Ticket";
import SeatSelection from "./components/Seats/SeatSelection";


function App() {
  return (
    <div className="App">
        <NavBar/>
        {/* <MovieCard/> */}
        {/* <SeatSelection/>  */}
        <Ticket/>
        {/* <SlideShow/> */}
        {/* <SlideBar/> */}
        {/* <Banner/> 
        <BannerSecond/>
        <BodySecond/>
        <StarMember/> */}
        {/* <LoginPage/> */}
        <Footer/>
    </div>
  );
}

export default App;
