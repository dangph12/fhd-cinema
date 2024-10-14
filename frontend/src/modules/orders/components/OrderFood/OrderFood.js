import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Image, CardTitle } from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom";
import './OrderFood.css'; 
import axios from 'axios';
import smallPopcorns from '../../../../assets/snacks/bap-rang-bo-nho.png';
import bigPopcorns from '../../../../assets/snacks/bap-rang-bo-lon.png';
import smallDrink from '../../../../assets/snacks/nuoc-ngot-nho.png';
import bigDrink from '../../../../assets/snacks/nuoc-ngot-lon.png';

const snackImages = {
  'Bắp rang bơ (nhỏ)': smallPopcorns,
  'Bắp rang bơ (lớn)': bigPopcorns,
  'Nước ngọt (nhỏ)': smallDrink,
  'Nước ngọt (lớn)': bigDrink,
};

const OrderFood = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { selectedSeats, showtimeDetails, movieTitle, moviePosterUrl } = state || {};

  const [snacks, setSnacks] = useState([]);
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    // Fetch available snacks
    const fetchSnacks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/snacks');
        const snackData = response.data;
        if (snackData && snackData.data) {
          setSnacks(snackData.data.slice(0, 4)); // Store snack data
        }
      } catch (error) {
        console.error('Error fetching snacks:', error);
      }
    };

    fetchSnacks();
  }, []);

  const handleQuantityChange = (snackId, change) => {
    setQuantity((prev) => ({
      ...prev,
      [snackId]: (prev[snackId] || 0) + change > 0 ? (prev[snackId] || 0) + change : 0,
    }));
  };

  // Calculate total ticket price (including seat type price)
  const totalTicketPrice = selectedSeats?.reduce((total, seat) => {
    const seatPrice = seat.seatType.seatTypePrice || 0;
    return total + (showtimeDetails.showtimePrice + seatPrice);
  }, 0) || 0;

  // Calculate total snack price based on selected quantities
  const totalSnackPrice = Object.keys(quantity).reduce((total, snackId) => {
    const snack = snacks.find(s => s.snackId === snackId);
    return total + (snack ? snack.snackPrice * quantity[snackId] : 0);
  }, 0);

  // Calculate total price 
  const totalPrice = totalTicketPrice + totalSnackPrice;

  function goToTicketInfor() {
    const selectedSnacks = snacks.map(snack => ({
      ...snack,
      quantity: quantity[snack.snackId] || 0, // Add quantity, default to 0
    })).filter(snack => snack.quantity > 0); // Filter out snacks with quantity 0
  
    navigate("/ticketInfor", {
      state: {
        selectedSeats,
        showtimeDetails,
        movieTitle,
        totalPrice,
        snacks: selectedSnacks,  // Pass selected snacks
        moviePosterUrl
      }
    });
  }

  return (
    <Container fluid>
      <Card.Title className="text-center mt-4" style={{ fontSize: '1.9rem', fontWeight: 'bold' }}>
        BƯỚC 3: CHỌN ĐỒ ĂN
      </Card.Title>

      <Row>
        <Col md={8}>
          <Card className="p-3 seat-box">
            <Card.Title className='film-title-price' style={{ textAlign: 'center' }}>Combo</Card.Title>
            {snacks.map(snack => (
              <Row key={snack.snackId} className="mb-4 align-items-center">
                <Col xs={4}>
                  <Image
                    src={snackImages[snack.snackName] }  // Use snack name to get image or fallback
                    alt={snack.snackName}
                    rounded
                    fluid
                  />
                </Col>
                <Col xs={4}>
                  <h6 style={{ color: '#5DBB63', fontSize: '1.5rem', fontWeight: 'bold' }}>{snack.snackName}</h6>
                  <h5 style={{ fontWeight: 'bold' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(snack.snackPrice)}</h5>
                </Col>
                <Col xs={4} className="text-right">
                  <Button variant="outline-secondary" size="md" onClick={() => handleQuantityChange(snack.snackId, -1)}>
                    -
                  </Button>
                  <span className="mx-2">{quantity[snack.snackId] || 0}</span>
                  <Button variant="outline-secondary" size="md" onClick={() => handleQuantityChange(snack.snackId, 1)}>
                    +
                  </Button>
                </Col>
              </Row>
            ))}
          </Card>
        </Col>

        {/* Pricing Summary */}
        <Col xs={12} lg={4} className="pricing-column d-flex flex-column justify-content-between mt-3 mt-lg-0">
          <Card className="pricing-details p-3 shadow-sm ">

            <CardTitle className="film-title-price"> {movieTitle} </CardTitle>

            <h6 className="cinema-title">{showtimeDetails.screen.cinema.cinemaName}</h6>

            <p className='time-title-price'>
              <strong className="screen-title">{showtimeDetails.screen.screenName}</strong> -{' '}
              {new Date(showtimeDetails.showtimeAt).toLocaleString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              })}
            </p>

            <p className='time-title-price'>{selectedSeats.map(seat => seat.seatName).join(', ')}</p>

            <div >
              {Object.keys(quantity).map(snackId => {
                const snack = snacks.find(s => s.snackId === snackId);
                const qty = quantity[snackId];
                return qty > 0 ? (
                  <p className='time-title-price'
                   key={snackId}>{qty} x {snack.snackName}: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(qty * snack.snackPrice)}</p>
                ) : null;
              })}
            </div>

            <hr />
            <h5>Tổng tiền: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)} VND</h5>
            <Button variant="success" block onClick={goToTicketInfor}>
              Thanh Toán (3/4)
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderFood;
