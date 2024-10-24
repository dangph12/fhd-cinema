// import { useLocation, useNavigate } from 'react-router-dom';
// import React, { useEffect } from 'react';
// import axios from 'axios';

// const VNPayPaymentResult = () => {
//   const location = useLocation();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkPaymentStatus = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8080/vnpay-payment${location.search}`);
        
//         if (response.data.status) {
    
//           navigate('/ticket', { state: { ...response.data.data, paymentSuccess: true } });
//         } else {
//           navigate('/checkout', { state: { paymentSuccess: false } });
//         }
//       } catch (error) {
//         console.error('Error checking payment status:', error);
//         navigate('/checkout', { state: { paymentSuccess: false } });
//       }
//     };

//     checkPaymentStatus();
//   }, [location.search, navigate]);

//   return (
//     <div>Loading...</div>
//   );
// };

// export default VNPayPaymentResult;
