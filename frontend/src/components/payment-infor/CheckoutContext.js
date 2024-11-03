// src/contexts/CheckoutContext.js
// import React, { createContext, useContext, useState } from 'react';

// const CheckoutContext = createContext();

// export const CheckoutProvider = ({ children }) => {
//   const [checkoutData, setCheckoutData] = useState({
//     selectedSeats: [],
//     showtimeDetails: null,
//     movieTitle: '',
//     totalPrice: 0,
//     snacks: [],
//     moviePosterUrl: '',
//   });

//   return (
//     <CheckoutContext.Provider value={{ checkoutData, setCheckoutData }}>
//       {children}
//     </CheckoutContext.Provider>
//   );
// };

// // Custom hook for easy access
// export const useCheckout = () => useContext(CheckoutContext);

import React, { createContext, useContext, useState } from 'react';
import axios from 'axios';

export const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
    
    const [checkoutData, setCheckoutData] = useState({
        selectedSeats: [],
        showtimeDetails: null,
        movieTitle: '',
        totalPrice: 0,
        snacks: [],
        moviePosterUrl: '',
        customerId: null,
        totalTicketPrice: null
    });




    return (
        <CheckoutContext.Provider value={{ checkoutData, setCheckoutData }}>
            {children}
        </CheckoutContext.Provider>
    );
};

export const useCheckout = () => useContext(CheckoutContext);
