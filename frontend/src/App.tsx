import React, {  } from "react";
import "./App.css";
import NavBar from './modules/cores/NavBar';
import Footer from './modules/cores/Footer';
import { Routes, Route } from "react-router-dom";
import LoginPage from "./modules/auth/LoginPage";

import FilmDetails from "./modules/film-details/FilmDetails";
import OrderTicket from "./modules/orders/OrderTicket";
import SeatSelection from "./components/Seats/SeatSelection";
import Ticket from "./components/payment-inform/Ticket";
import OrderFood from "./modules/orders/components/OrderFood/OrderFood";

import Home from "./components/Home";



function App() {
  return (
    <div className="App">
      <NavBar />
      docker compose up -d --build
      {/* <Ticket/> */}
      {/* <OrderFood/> */}
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
        <Route path="/description" element={<FilmDetails/>} />
        <Route path="/orderTicket" element={<OrderTicket/>} />

      </Routes>


      <Footer />
    </div>


  );
}

export default App;