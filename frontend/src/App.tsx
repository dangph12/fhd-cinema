// import React, { useEffect, useState } from "react";
// import "./App.css";
// import NavBar from './modules/cores/NavBar';
// import Footer from './modules/cores/Footer';
// import { Routes, Route } from 'react-router-dom';
// import LoginPage from "./modules/auth/LoginPage";
// import FilmDetails from "./modules/film-details/FilmDetails";
// import OrderTicket from "./modules/orders/OrderTicket";
// import SeatSelection from "./components/Seats/SeatSelection";
// import TicketInfor from "./components/payment-inform/TicketInfor";
// import OrderFood from "./modules/orders/components/OrderFood/OrderFood";
// import FilmTime from "./components/FilmTime";
// import Home from "./components/Home";
// import News from "./modules/home/components/News";
// import _ from 'lodash'
// import Users from "./modules/auth/Users";

// function App() {

//   // const [account, setAccounts] = useState({})
//   const [account, setAccounts] = useState<{ isAuthentiaction: boolean } | null>(null);

//   useEffect(() => {
//     let session = sessionStorage.getItem('account')

//     if (session) {
//       setAccounts(JSON.parse(session));
//     }

//   }, [])

//   return (
//     <div className="App">

//       <NavBar />
//       {/* <Ticket/> */}
//       {/* <FilmTime/> */}
//       {/* <OrderFood/> */}
//       {/* <SlideShow /> */}
//       {/* <SlideBar /> */}
//       {/* <Banner /> */}
//       {/* <BodyFirst /> */}
//       {/* <BannerSecond /> */}
//       {/* <BodySecond /> */}
//       {/* <StarMember /> */}
//       <Routes>
//         {
//           account && !_.isEmpty(account) && account.isAuthentiaction
//           && <Users />
//         }
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<LoginPage />} />
//         <Route path="/description/:movieId" element={<FilmDetails />} />
//         <Route path="/orderTicket/:movieId" element={<OrderTicket />} />
//         <Route path="/seatselection" element={<SeatSelection />} />
//         <Route path="/cart.html" element={<FilmTime />} />
//         <Route path="/news" element={<News />} />
//         {/* <Route path="/film/:movieId/showtimes" element={<FilmTime />} /> */}
//         {/* <Route path="/seatselection/:showtimeId" element={<SeatSelection />} /> */}
//         <Route path="/orderfood" element={<OrderFood />} />
//         <Route path="/ticketinform" element={<TicketInfor />} />
//         <Route path="/users" element={<Users />} />
//       </Routes>

//       <Footer />
//     </div>

//   );
// }

// export default App;
import React from "react";
import { useState, useEffect } from "react";
import "./App.css";
import NavBar from "../src/modules/cores/NavBar";
import Footer from "../src/modules/cores/Footer";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../src/modules/auth/LoginPage";
import FilmDetails from "../src/modules/film-details/FilmDetails";
import OrderTicket from "../src/modules/orders/OrderTicket";
import Ticket from "./components/payment-infor/Ticket";
import OrderFood from "../src/modules/orders/components/OrderSnack/OrderFood";

import Home from "./components/Home";
import News from "../src/modules/news/News";
import _ from "lodash";
import Users from "../src/modules/auth/Users";
import NewsDeatils from "../src/modules/news/NewsDeatils";
import { ToastContainer, Bounce } from "react-toastify";
import Stores from "../src/modules/stores/Stores";
import ForgetPassword from "../src/modules/auth/ForgetPassword";
import SeatSelection from "./components/Seats/SeatSelection";
import Checkout from "./components/payment-infor/Checkout";
// import Bill from "./components/payment-infor/Bill";
import ResetForgetPassword from "../src/modules/auth/RequestForgetPassword";
import VNPayPaymentResult from "./components/VNPay/VNPayPaymentResult";
import PaymentResult from "./components/VNPay/PaymentResult";
import ConfirmEmail from "./modules/auth/ConfirmEmail";


function App() {
  // login
  const [account, setAccounts] = useState<{ isAuthentiaction: boolean } | null>(
    null
  );

  useEffect(() => {
    let session = sessionStorage.getItem("account");
    if (session) {
      setAccounts(JSON.parse(session));
    }
  }, []);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/description/:movieId" element={<FilmDetails />} />
        <Route path="/orderTicket/:movieId" element={<OrderTicket />} />
        {/* <Route path="/film/:movieId/showtimes" element={<FilmTime />} /> */}
        <Route path="/seat-selection" element={<SeatSelection />} />
        <Route path="/order-snacks" element={<OrderFood />} />
        <Route path="/checkout" element={<Checkout />} />
        {/* <Route path="/bill" element={<Bill />} /> */}
        <Route path="/ticket" element={<Ticket />} />
        <Route path="/payment-result" element={<PaymentResult />} />
        <Route path="/vnpay-payment/vnpay-payment" element={<VNPayPaymentResult />} /> 
        <Route path="/users" element={<Users />} />
        <Route path="/news" element={<News />} />
        <Route path="/news/:newsId" element={<NewsDeatils />} />
        <Route path="/stores" element={<Stores />} />
        <Route path="/forget-password" element={< ForgetPassword/>} />
        {/* { account && !_.isEmpty(account) && account.isAuthentiaction 
        && <Users/>} */}
          <Route path="/reset" element={<ResetForgetPassword />} />
          {/* <Route path="/reset-password/:token" element={<ResetPassword />} /> */}
          <Route path="/confirm-nofication" element={<ConfirmEmail />} />
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <Footer />
    </div>
  );
}

export default App;