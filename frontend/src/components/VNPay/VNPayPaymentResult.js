
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
  const billId = sessionStorage.getItem("billId");
  const totalTicketPrice = sessionStorage.getItem("totalTicketPrice");

  useEffect(() => {
    const checkPaymentStatus = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/vnpay-payment${location.search}`
        );

        if (response.data.status === "success") {
          setPaymentDetails(response.data.data);

          navigate("/ticket", {
            state: {
              selectedSeats,
              showtimeDetails,
              movieTitle,
              totalPrice,
              snacks,
              moviePosterUrl,
              billId,
              paymentSuccess: true,
            },
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
      window.history.replaceState(null, "", "/vnpay-payment");
    };

    checkPaymentStatus();
  }, [location.search]);

  const handleNavigateToCheckout = () => {
   
  

    setCheckoutData({
      selectedSeats: selectedSeats,
      showtimeDetails: showtimeDetails,
      movieTitle: movieTitle,
      totalTicketPrice: totalTicketPrice,
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

  


  const handleNavigateToHomepage = async () => {
    try {
      if (billId) {

        await axios.delete(`http://localhost:8080/bills/${billId}`);
        console.log("Bill deleted successfully");
      }

    } catch (error) {
      console.error("Error deleting bill:", error);
    }
  
    navigate("/", {
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
              </Card.Body>
            ) : (
              <Card.Body>
                {errorType === "cancel" ? (
                  <>
                    <p>Payment was canceled by the user or due to an error.</p>
                    <p>Please check your payment details or try again later.</p>
                    <Button
                      variant="danger"
                      className="mt-3"
                      onClick={handleNavigateToHomepage}
                    >
                      Cancel Payment
                    </Button>
                  </>
                ) : errorType === "failed" ? (
                  <>
                    <p>Payment failed due to an issue with the transaction.</p>
                    <Button
                      variant="warning"
                      className="mt-3"
                      onClick={handleNavigateToCheckout}
                    >
                      Retry Payment
                    </Button>
                    
                    <Button
                      variant="danger"
                      className="mt-3"
                      onClick={handleNavigateToHomepage}
                    >
                      Cancel Payment
                    </Button>
                  </>
                ) : (
                  <p>An unknown error occurred. Please try again.</p>
                )}
              </Card.Body>
            )}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VNPayPaymentResult;
