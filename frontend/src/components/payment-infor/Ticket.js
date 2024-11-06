
import React, { useEffect, useContext, useState } from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { useLocation } from "react-router-dom";
import axios from "axios";
import { CheckoutContext } from "../payment-infor/CheckoutContext";

function Ticket() {
  
  const [bookingId, setBookingId] = useState(null); 
  const selectedSeats = JSON.parse(sessionStorage.getItem("selectedSeats"));
  const showtimeDetails = JSON.parse(sessionStorage.getItem("showtimeDetails"));
  const movieTitle = sessionStorage.getItem("movieTitle");
  const totalPrice = sessionStorage.getItem("totalPrice");
  const snacks = JSON.parse(sessionStorage.getItem("snacks"));
  const moviePosterUrl = sessionStorage.getItem("moviePosterUrl");
  const billId = sessionStorage.getItem("billId");
  const totalTicketPrice = sessionStorage.getItem("totalTicketPrice");
  const customerId = sessionStorage.getItem("customerId");
  window.scrollTo(0, 0);
  useEffect(() => {
    const fetchBookingId = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/bills/${billId}`);
        if (response.data && response.data.data) {
          const fetchedBookingId = response.data.data.bookingDto.bookingId;
          setBookingId(fetchedBookingId);
          sessionStorage.setItem("bookingId", fetchedBookingId); 
        } else {
          console.error("No booking found for the provided billId");
        }
      } catch (error) {
        console.error("Error fetching bookingId:", error);
      }
    };

   
    if (billId) {
      fetchBookingId();
    }
  }, [billId]);

  useEffect(() => {
    const sendEmail = async () => {
      try {
        const response = await axios.post('http://localhost:8080/email/bill', {
          customerId: customerId,
          billId: billId
        });
        if (response.data.status === 'success') {
          console.log('Email sent successfully');
        } else {
          console.error('Failed to send email:', response.data.message);
        }
      } catch (error) {
        console.error('Error sending email:', error);
      }
    };

    if (billId && customerId) {
      sendEmail();
    }
  }, [billId, customerId]);

  useEffect(() => {
    axios.put(`http://localhost:8080/bills/${billId}/pay`, {
      billId: billId,
    });
  }, [billId]);

  return (
    <Container className="d-flex justify-content-center" fluid>
      <Card className="ticket-container">
        <Row className="g-2">
          <Col lg={8} md={7} sm={12} className="d-flex align-items-center ticket-right">
            <Row className="w-100">
              <Col xs={12} md={4} className="text-center mb-md-0">
                <Image
                  src={moviePosterUrl}
                  alt="Movie Poster"
                  fluid
                  className="movie-poster-ticket"
                />
              </Col>
              <Col xs={12} md={8}>
                <Card.Body>
                  <Card.Title className="movie-title-ticket">
                    {movieTitle}
                  </Card.Title>
                  <Card.Text className="movie-details-ticket">
                    <strong>Mã thanh toán:</strong> {billId}
                  </Card.Text>
                  <Card.Text className="movie-details-ticket">
                    <strong>Mã vé:</strong> {bookingId} 
                  </Card.Text>
                  <Card.Text className="movie-details-ticket">
                    📅 <strong>Ngày:</strong> {new Date(showtimeDetails?.showtimeAt).toLocaleDateString('en-GB')}
                  </Card.Text>
                  <Card.Text className="movie-details-ticket">
                    ⏰ <strong>Suất chiếu:</strong> {new Date(showtimeDetails?.showtimeAt).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })}
                  </Card.Text>
                  <Card.Text className="movie-details-ticket">
                    📍 <strong>Rạp:</strong> {showtimeDetails?.screen?.cinema?.cinemaName}
                  </Card.Text>
                  <Card.Text className="movie-details-ticket">
                    💺 <strong>Ghế:</strong> {selectedSeats?.map(seat => seat.seatName).join(', ')}
                  </Card.Text>
                  <Card.Text className="movie-details-ticket">
                    🍿 <strong>Đồ ăn đã chọn:</strong>
                    <ul>
                      {snacks && snacks.map(snack => (
                        <li key={snack.snackId}>
                          {snack.snackName} x {snack.quantity}
                        </li>
                      ))}
                    </ul>
                  </Card.Text>
                  
                  <h4 className="text-success">Thanh toán thành công!</h4>
                </Card.Body>
              </Col>
            </Row>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}

export default Ticket;
