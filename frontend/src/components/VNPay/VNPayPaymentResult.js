// import { useLocation, useNavigate } from 'react-router-dom';
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Card, Button, Spinner } from 'react-bootstrap';

// const VNPayPaymentResult = () => {
//     const location = useLocation();
//     const navigate = useNavigate();
//     const [paymentDetails, setPaymentDetails] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [errorType, setErrorType] = useState(null);

//     // Lấy dữ liệu từ sessionStorage
// const selectedSeats = JSON.parse(sessionStorage.getItem('selectedSeats'));
// const showtimeDetails = JSON.parse(sessionStorage.getItem('showtimeDetails'));
// const movieTitle = sessionStorage.getItem('movieTitle');
// const totalPrice = sessionStorage.getItem('totalPrice');
// const snacks = JSON.parse(sessionStorage.getItem('snacks'));
// const moviePosterUrl = sessionStorage.getItem('moviePosterUrl');

//     useEffect(() => {
//         const checkPaymentStatus = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8080/vnpay-payment${location.search}`);

//                 if (response.data.status === 'success') {

//                     setPaymentDetails(response.data.data);
//                     console.log("Payment status:", response.data.status);
//                 } else  if (response.data.status === 'fail'){

//                     setErrorType("failed");
//                     console.log("Payment status:", response.data.status);
//                 } else if (response.data.status === 'error') {
//                     setErrorType("canceled");
//                 }
//             } catch (error) {
//                 console.error('Error checking payment status:', error);
//                 setErrorType("error");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         checkPaymentStatus();
//     }, [location.search]);

// const handleNavigateToTicket = () => {
//     if (paymentDetails) {
//         navigate('/ticket', {
//             state: {
//                 selectedSeats,
//                 showtimeDetails,
//                 movieTitle,
//                 totalPrice,
//                 snacks,
//                 moviePosterUrl,
//                 paymentSuccess: true,
//             }
//         });
//     }
// };

//     // Hàm điều hướng về trang checkout để thanh toán lại
//     const handleNavigateToCheckout = () => {
//         navigate('/', { state: { paymentSuccess: false } });
//     };

//     // Hiển thị trạng thái loading nếu đang kiểm tra trạng thái thanh toán
//     if (loading) {
//         return <div className="text-center mt-5"><Spinner animation="border" variant="primary" /> Loading...</div>;
//     }

//     return (
//         <Container>
//             <Row className="justify-content-center">
//                 <Col md={8}>
//                     <Card className="mt-4">
//                         <Card.Header className="text-center">
//                             {paymentDetails ? (
//                                 <h4 className="text-success">Payment Successful</h4>
//                             ) : errorType === "canceled" ? (
//                                 <h4 className="text-warning">Payment Canceled or Signature Invalid</h4>
//                             ) : errorType === "failed" ? (
//                                 <h4 className="text-danger">Payment Failed</h4>
//                             ) : (
//                                 <h4 className="text-danger">An Unknown Error Occurred</h4>
//                             )}
//                         </Card.Header>

//                         {paymentDetails ? (

//                             <Card.Body>
//                                 <p><strong>Transaction ID:</strong> {paymentDetails.transactionId}</p>
//                                 <p><strong>Order Info:</strong> {paymentDetails.orderInfo}</p>
//                                 <p><strong>Payment Time:</strong> {paymentDetails.paymentTime}</p>
//                                 <p><strong>Total Price:</strong> {paymentDetails.totalPrice}</p>
//                                 <Button variant="primary" className="mt-3" onClick={handleNavigateToTicket}>
//                                     View Ticket
//                                 </Button>
//                             </Card.Body>
//                         ) : (

//                             <Card.Body>
//                                 {errorType === "canceled" ? (
//                                     <p>Your payment was canceled or the signature is invalid. You can retry the payment.</p>
//                                 ) : errorType === "failed" ? (
//                                     <p>Payment failed due to an error. Please try again.</p>
//                                 ) : (
//                                     <p>An unknown error occurred. Please try again later.</p>
//                                 )}
//                                 <Button variant="danger" className="mt-3" onClick={handleNavigateToCheckout}>
//                                     Retry Payment
//                                 </Button>
//                             </Card.Body>
//                         )}
//                     </Card>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default VNPayPaymentResult;

import { useLocation, useNavigate } from "react-router-dom";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Container, Row, Col, Card, Button, Spinner } from "react-bootstrap";
import { CheckoutContext } from "../payment-infor/CheckoutContext";

const VNPayPaymentResult = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setCheckoutData } = useContext(CheckoutContext);
  const [paymentDetails, setPaymentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorType, setErrorType] = useState(null);

  const selectedSeats = JSON.parse(sessionStorage.getItem("selectedSeats"));
  const showtimeDetails = JSON.parse(sessionStorage.getItem("showtimeDetails"));
  const movieTitle = sessionStorage.getItem("movieTitle");
  const totalPrice = sessionStorage.getItem("totalPrice");
  const snacks = JSON.parse(sessionStorage.getItem("snacks"));
  const moviePosterUrl = sessionStorage.getItem("moviePosterUrl");

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/vnpay-payment${location.search}`
        );

        if (response.data.status === "success") {
          setPaymentDetails(response.data.data);
          // put bill is paid is true
          const billId = sessionStorage.getItem("billId");
          axios.put(`http://localhost:8080/bills/${billId}/pay`, {
            billId: billId,
          });
        } else if (response.data.status === "fail") {
          setErrorType("failed");
        } else if (response.data.status === "error") {
          setErrorType("canceled");
        }
      } catch (error) {
        console.error("Error checking payment status:", error);
        setErrorType("error");
      } finally {
        setLoading(false);
      }
    };

    checkPaymentStatus();
  }, [location.search]);

  const handleNavigateToTicket = () => {
    if (paymentDetails) {
      navigate("/ticket", {
        state: {
          selectedSeats,
          showtimeDetails,
          movieTitle,
          totalPrice,
          snacks,
          moviePosterUrl,
          paymentSuccess: true,
        },
      });
    }
  };

  const handleNavigateToCheckout = () => {
    setCheckoutData({
      selectedSeats: selectedSeats,
      showtimeDetails: showtimeDetails,
      movieTitle: movieTitle,
      totalPrice: totalPrice,
      snacks: snacks,
      moviePosterUrl: moviePosterUrl,
    });
    navigate("/checkout", {
      state: {
        paymentSuccess: false,
      },
    });
  };

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" variant="primary" /> Loading...
      </div>
    );
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="mt-4">
            <Card.Header className="text-center">
              {paymentDetails ? (
                <h4 className="text-success">Payment Successful</h4>
              ) : errorType === "canceled" ? (
                <h4 className="text-warning">Payment Canceled</h4>
              ) : errorType === "failed" ? (
                <h4 className="text-danger">Payment Failed</h4>
              ) : (
                <h4 className="text-danger">An Unknown Error Occurred</h4>
              )}
            </Card.Header>

            {paymentDetails ? (
              <Card.Body>
                <p>
                  <strong>Transaction ID:</strong>{" "}
                  {paymentDetails.transactionId}
                </p>
                <p>
                  <strong>Order Info:</strong> {paymentDetails.orderInfo}
                </p>
                <p>
                  <strong>Payment Time:</strong> {paymentDetails.paymentTime}
                </p>
                <p>
                  <strong>Total Price:</strong> {paymentDetails.totalPrice}
                </p>
                <Button
                  variant="primary"
                  className="mt-3"
                  onClick={handleNavigateToTicket}
                >
                  View Ticket
                </Button>
              </Card.Body>
            ) : (
              <Card.Body>
                <p>
                  {errorType === "canceled"
                    ? "Payment was canceled."
                    : "An unknown error occurred. Please try again."}
                </p>
                <Button
                  variant="danger"
                  className="mt-3"
                  onClick={handleNavigateToCheckout}
                >
                  Retry Payment
                </Button>
              </Card.Body>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VNPayPaymentResult;
