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
import SlideBar from "./components/SlideBar";
import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import Home from "./components/Home";
import MovieCard from "./components/Seats/MovieCard";
import SeatSelection from "./components/Seats/SeatSelection";
import FilmDeatils from "./components/FilmDetails";



function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <MovieCard/> */}
      {/* <SeatSelection/> */}

      {/* <SlideShow /> */}
      {/* <SlideBar /> */}
      {/* <Banner /> */}
      {/* <BodyFirst /> */}
      {/* <BannerSecond /> */}
      {/* <BodySecond /> */}
      {/* <StarMember /> */}

      

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/login" element={<LoginPage />} />

        <Route path="/cart" element={<MovieCard />} />
        <Route path="/description" element={<FilmDeatils/>} />
        


      </Routes>

      <Footer />
    </div>

  );
}

export default App;
