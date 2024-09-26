import React, { } from "react";
import "./App.css";
import NavBar from './modules/cores/NavBar';
import Footer from './modules/cores/Footer';
import { Routes, Route } from "react-router-dom";
import LoginPage from "./modules/auth/LoginPage";

import FilmDetails from "./modules/film-details/FilmDetails";
import OrderTicket from "./modules/orders/OrderTicket";
import SeatSelection from "./components/Seats/SeatSelection";
import TicketInform from "./components/payment-inform/TicketInform";
import OrderFood from "./modules/orders/components/OrderFood/OrderFood";
import FilmTime from "./components/FilmTime";

import Home from "./components/Home";



function App() {
  return (
    <div className="App">
      <NavBar />
      docker compose up -d --build
      {/* <Ticket/> */}
      {/* <FilmTime/> */}
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
        <Route path="/cart" element={<MovieCard />} />
        <Route path="/description" element={<FilmDetails/>} />
        <Route path="/orderTicket" element={<OrderTicket/>} />
        <Route path="/seatselection" element={<SeatSelection/>} />
        <Route path="/cart.html" element={<FilmTime/>} />
        <Route path="/orderfood" element={<OrderFood/>} />
        <Route path="/ticketinform" element={<TicketInform/>} />
    

        

      </Routes>


      <Footer />
    </div>

  );
}

export default App;