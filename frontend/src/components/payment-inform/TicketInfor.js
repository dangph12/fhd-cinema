import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { useLocation, useNavigate } from "react-router-dom";


function Ticket() {
  const navigate = useNavigate();
  const { state } = useLocation();  
  const { selectedSeats, showtimeDetails, movieTitle, totalPrice, snacks, moviePosterUrl } = state || {}; // Nhận dữ liệu từ state

  function handleButtonClick() {  
    navigate("/");  
  }

  return (
    <Container className=" d-flex justify-content-center" fluid>
      <Card className="ticket-container">
        <Row className="g-2">
          {/* Phần trái - Mã QR và mã vé */}
          <Col lg={4} md={5} sm={12} className="text-center d-flex flex-column justify-content-center align-items-center ticket-left">
            <p className="">Mã lấy vé:</p>
            <p className="ticket-code">WW8RKNR</p>
          </Col>

          {/* Phần phải - Thông tin phim */}
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
                    {movieTitle} {/* Hiển thị tên phim */}
                  </Card.Title>
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


                  <Card.Text className="movie-details-ticket">
                    📽️ <strong>Phòng chiếu:</strong> {showtimeDetails?.screen?.screenName}
                  </Card.Text>
                  <hr />
                  <h4 className="total-price-ticket">
                    Tổng tiền: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)} VNĐ
                  </h4>
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
