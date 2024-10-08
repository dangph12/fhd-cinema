import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';
import { useNavigate, useLocation } from "react-router-dom";

function Ticket() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { selectedSeats, showtimeDetails } = state || {}; // Destructure the passed state
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  

  // Function to handle navigation to the home page
  const handleButtonClick = () => {
    navigate("/");
  };

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await fetch('http://localhost:8080/bills');
        const billsData = await response.json();
        if (billsData && billsData.data) {
          setBills(billsData.data); // Store bills data
        }
      } catch (error) {
        setError('Error fetching bills. Please try again later.'); // Set error message if fetching fails
        console.error('Error fetching bills:', error);
      } finally {
        setLoading(false); // Set loading to false regardless of success or failure
      }
    };

    fetchBills(); // Fetch bills on component mount
  }, []);



  // useEffect(() => {
  //   const fetchMovie = async () => {
  //     try {
  //       const response = await fetch(`http://localhost:8080/movies/${movieId}`);
  //       const movieData = await response.json();
  //       if (movie && movieData.data) {
  //         setMovie(movieData.data); // Store bills data
  //       }
  //     } catch (error) {
  //       setError('Error fetching bills. Please try again later.'); // Set error message if fetching fails
  //       console.error('Error fetching bills:', error);
  //     } finally {
  //       setLoading(false); // Set loading to false regardless of success or failure
  //     }
  //   };

  //   fetchMovie(); // Fetch bills on component mount
  // }, []);

  if (loading) return <div>Loading...</div>; // Show loading message
  if (error) return <div>{error}</div>; // Show error message

  return (
    <Container className="my-5 d-flex justify-content-center" fluid>
      <Card style={{ padding: '0px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', maxWidth: '1200px', width: '100%' }}>
        <Row className="g-2">
          {/* Left section - QR Code and Ticket Code */}
          <Col lg={4} md={5} sm={12} className="text-center d-flex flex-column justify-content-center align-items-center" style={{ paddingTop: '150px' }}>
            <p className="mt-3" style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>Mã lấy vé:</p>
            <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#5DBB63', marginBottom: '0' }}>WW8RKNR</p>
            {/* You can add a QR code component here */}
          </Col>

          {/* Right section - Movie Information */}
          <Col lg={8} md={7} sm={12} className="d-flex align-items-center" style={{ padding: '10px' }}>
            {bills.map(bill => (
              <Row key={bill.billId} className="w-100">
                <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                  <Image
                    src="https://www.bhdstar.vn/wp-content/uploads/2024/08/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.png"
                    alt="Movie Poster"
                    fluid
                    style={{ borderRadius: '10px', width: '100%' }}
                  />
                </Col>
                <Col xs={12} md={8}>
                  <Card.Body style={{ padding: '0' }}>
                    {/* <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#5DBB63', marginBottom: '10px', textAlign: 'left' }}>
                      {bill.booking.movieTitle || 'Movie Title'}
                    </Card.Title> */}
                    {/* <Card.Text style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'Black', textAlign: 'left' }}>
                      📝 <strong>Phụ đề:</strong> {bill.showtime.subtitle || '2D'}
                    </Card.Text> */}
                    <Card.Text style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'Black', textAlign: 'left' }}>
                      📅 <strong>Ngày:</strong> {new Date(bill.showtime.date).toLocaleDateString() || '23/09/2024'}
                    </Card.Text>
                    <Card.Text style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'Black' , textAlign: 'left'}}>
                      ⏰ <strong>Suất chiếu:</strong> {new Date(bill.showtime.time).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) || 'N/A'}
                    </Card.Text>
                    <Card.Text style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'Black', textAlign: 'left' }}>
                      📍 <strong>Rạp:</strong> {showtimeDetails.screen.cinema.cinemaName}
                    </Card.Text>
                    <Card.Text style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'Black', textAlign: 'left' }}>
                      💺 <strong>Ghế:</strong> {selectedSeats.length}
                    </Card.Text>
                    <Card.Text style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'Black' , textAlign: 'left'}}>
                      📽️ <strong>Phòng chiếu:</strong> {bill.showtime.screenName || 'Screen 6'}
                    </Card.Text>
                    <hr />
                    <h4 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#5DBB63', textAlign: 'left' }}>
                      Tổng tiền: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(bill.totalPrice || 60000)}
                    </h4>
                  </Card.Body>
                </Col>
              </Row>
            ))} 
          </Col>
        </Row>
      </Card>
      <Button variant="primary" className="mt-4" onClick={handleButtonClick}>Trở về trang chủ</Button>
    </Container>
  );
}

export default Ticket;
