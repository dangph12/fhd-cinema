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

import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const CheckoutContext = createContext();

export const CheckoutProvider = ({ children }) => {
    const [checkoutData, setCheckoutData] = useState({
        selectedSeats: [],
        showtimeDetails: null,
        movieTitle: '',
        totalPrice: 0,
        snacks: [],
        moviePosterUrl: '',
        customerId: null, // Thêm customerId vào context
    });

    // Lấy customerId từ API khi ứng dụng khởi động
    useEffect(() => {
        const fetchCustomerId = async () => {
            try {
                const response = await axios.get('http://localhost:8080/customers');
                if (response.data && response.data.data.length > 0) {
                    setCheckoutData(prev => ({
                        ...prev,
                        customerId: response.data.data[0].customerId // Sử dụng customerId đầu tiên
                    }));
                }
            } catch (error) {
                console.error('Error fetching customerId:', error);
            }
        };
        fetchCustomerId();
    }, []);

    return (
        <CheckoutContext.Provider value={{ checkoutData, setCheckoutData }}>
            {children}
        </CheckoutContext.Provider>
    );
};

export const useCheckout = () => useContext(CheckoutContext);
