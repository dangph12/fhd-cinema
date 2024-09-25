import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './Ticket.css';  // Import the CSS file

function TicketUI() {
  return (
    <Container className="ticket-container">
      <Row>
        {/* Left section - QR Code and Ticket Code */}
        <Col md={4} className="ticket-left">
          <p className="ticket-code-label">Quét mã để vào rạp</p>
          <div className="qr-code">
            <h1 style={{ color: '#fff' }}>X</h1>
          </div>
          <p className="ticket-code">Mã lấy vé:</p>
          <p className="ticket-code-value">WW8RKNR</p>
        </Col>

        {/* Right section - Movie Information */}
        <Col md={8} className="ticket-right">
          <Row>
            <Col md={4} className="d-flex align-items-center">
              <Image
                src="https://www.bhdstar.vn/wp-content/uploads/2024/08/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.png"
                alt="Movie Poster"
                fluid
                className="movie-poster"
              />
            </Col>
            <Col md={8}>
              <Card.Body>
                <Card.Title className="movie-title">
                  BEETLEJUICE BEETLEJUICE: MA SIÊU QUẬY (T13)
                </Card.Title>
                <Card.Text className="movie-details">
                  <span role="img" aria-label="subtitles" >📝</span> <strong style={{ color: 'Black',textAlign: 'left' }}>Phụ đề:</strong> 2D
                </Card.Text>
                <Card.Text className="movie-details">
                  <span role="img" aria-label="calendar">📅</span> <strong style={{ color: 'Black',textAlign: 'left' }}>Ngày:</strong> 23/09/2024
                </Card.Text>
                <Card.Text className="movie-details">
                  <span role="img" aria-label="time">⏰</span> <strong style={{ color: 'Black',textAlign: 'left' }}>Suất chiếu:</strong> 09h15
                </Card.Text>
                <Card.Text className="movie-details">
                  <span role="img" aria-label="location">📍</span> <strong style={{ color: 'Black',textAlign: 'left' }}>Rạp:</strong> BHD Star The Garden
                </Card.Text>
                <Card.Text className="movie-details">
                  <span role="img" aria-label="seat">💺</span> <strong style={{ color: 'Black',textAlign: 'left' }}>Ghế:</strong> D13
                </Card.Text>
                <Card.Text className="movie-details">
                  <span role="img" aria-label="screen">📽️</span> <strong style={{ color: 'Black',textAlign: 'left' }}>Phòng chiếu:</strong> Screen 6
                </Card.Text>
                <hr />
                <h4 className="total-amount">Tổng tiền: 60,000 VNĐ</h4>
              </Card.Body>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default TicketUI;
