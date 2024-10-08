import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom";
import './OrderFood.css'; 

const OrderFood = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { selectedSeats, showtimeDetails } = state || {};

  const [snacks, setSnacks] = useState([]);
  const [quantity, setQuantity] = useState({});

  useEffect(() => {
    // Fetch available snacks
    const fetchSnacks = async () => {
      try {
        const response = await fetch('http://localhost:8080/snacks');
        const snackData = await response.json();
        if (snackData && snackData.data) {
          setSnacks(snackData.data); // Store snack data
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

  // Calculate total price (ticket + snacks)
  const totalPrice = totalTicketPrice + totalSnackPrice;

  // const goToTicketInfor = () => {
  //   navigate("/ticketinfor", {
  //     state: {
  //       selectedSeats,
  //       showtimeDetails,
  //       snacks: quantity,
  //       totalPrice
  //     }
  //   });
  // };


  

  // function goToTicketInfor() {
  //   navigate("/ticketinFor");
  // }

//   const goToTicketInfor = () => {
//     navigate('/ticketinFor', { state: { selectedSeats, showtimeDetails, snacks } }); // Pass selected seats and showtimeDetails to the next page
// };

const goToTicketInfor = () => {
  console.log("Navigating to Ticket Info with:", { selectedSeats, showtimeDetails, snacks });
  navigate('/ticketinFor', { state: { selectedSeats, showtimeDetails, snacks } });
};

  return (
    <Container fluid>
      <Card.Title className="text-center mt-4" style={{ fontSize: '1.9rem', fontWeight: 'bold' }}>
        BƯỚC 3: CHỌN ĐỒ ĂN
      </Card.Title>

      {/* Movie Info Card */}
      {/* {showtimeDetails && (
        <Card className="p-3 mb-4" style={{ borderRadius: '15px' }}>
          <Row className="g-4">
            <Col lg={2} sm={4} xs={12} className="d-flex justify-content-center align-items-center">
              <Image
                src="https://www.bhdstar.vn/wp-content/uploads/2024/08/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.png"
                alt="Movie Poster"
                style={{ width: '100%', borderRadius: '10px' }}
              />
            </Col>

            <Col lg={9} sm={8} xs={12}>
              <Card.Body className="px-2">
                <Card.Title style={{ color: '#5DBB63', fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'left' }}>
                  {showtimeDetails.movieTitle}
                </Card.Title>
                <p style={{ fontSize: '1.2rem', textAlign: 'left' }}>
                  <strong style={{ color: '#5DBB63', fontSize: '1.3rem' }}>{showtimeDetails.screen.screenName}</strong> -{' '}
                  {new Date(showtimeDetails.showtimeAt).toLocaleString('en-GB', {
                    hour: '2-digit',
                    minute: '2-digit',
                    day: '2-digit',
                    month: '2-digit',
                    year: 'numeric'
                  })}
                </p>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      )} */}

      {/* Combo Selection */}
      <Row>
        <Col md={8}>
          <Card className="p-3 seat-legend">
            <Card.Title style={{ color: '#5DBB63', fontSize: '1.9rem', fontWeight: 'bold' }}>Combo</Card.Title>
            {snacks.map(snack => (

              <Row key={snack.snackId} className="mb-4 align-items-center">
                <Col xs={4}>
                  <Image
                    src={`https://example.com/snacks/${snack.snackId}.png`} // Adjust URL accordingly
                    rounded
                    fluid
                  />
                </Col>

                <Col xs={4}>
                  <h6 style={{ color: '#5DBB63', fontSize: '1.5rem', fontWeight: 'bold' }}>{snack.snackName}</h6>
                  <h5 style={{ fontWeight: 'bold' }}>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(snack.snackPrice)}</h5>
                </Col>

                <Col xs={4} className="text-right">
                  <Button variant="outline-secondary" size="sm" onClick={() => handleQuantityChange(snack.snackId, -1)}>
                    -
                  </Button>
                  <span className="mx-2">{quantity[snack.snackId] || 0}</span>
                  <Button variant="outline-secondary" size="sm" onClick={() => handleQuantityChange(snack.snackId, 1)}>
                    +
                  </Button>
                </Col>
              </Row>
            ))}
          </Card>
        </Col>

        {/* Pricing Summary */}
        <Col md={4}>
          <Card className="p-3 pricing-column d-flex flex-column justify-content-between">
            <h6 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'left' }}>{showtimeDetails.screen.cinema.cinemaName}</h6>
           
            <p style={{ fontSize: '1.2rem', textAlign: 'left' }}>
              <strong style={{ color: '#5DBB63', fontSize: '1.3rem' }}>{showtimeDetails.screen.screenName}</strong> -{' '}
              {new Date(showtimeDetails.showtimeAt).toLocaleString('en-GB', {
                hour: '2-digit',
                minute: '2-digit',
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
              })}
            </p>

            <h6 style={{ color: '#5DBB63', fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'left' }}>
              {showtimeDetails.movieTitle}
            </h6>

            <p style={{ fontSize: '1.2rem', textAlign: 'left' }}>{selectedSeats.length} x Seat(s)</p>

            <div style={{ fontSize: '1.2rem', textAlign: 'left' }}>
              {Object.keys(quantity).map(snackId => {
                const snack = snacks.find(s => s.snackId === snackId);
                const qty = quantity[snackId];
                return qty > 0 ? (
                  <p key={snackId}>{qty} x {snack.snackName}: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(qty * snack.snackPrice)}</p>
                ) : null;
              })}
            </div>

            <hr />
            <h5>Tổng tiền: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}</h5>
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
