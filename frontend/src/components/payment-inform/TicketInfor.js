import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function Ticket() {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate("/");
  }

  return (
    <Container className="my-5 d-flex justify-content-center" fluid>
      <Card style={{ padding: '0px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)', backgroundColor: '#fff', maxWidth: '1200px', width: '100%' }}>
        <Row className="g-2">
          {/* Left section - QR Code and Ticket Code */}
          <Col lg={4} md={5} sm={12} className="text-center d-flex flex-column justify-content-center align-items-center" style={{  paddingTop: '150px' }}>
            {/* <p style={{ fontSize: '1.2rem', fontWeight: 'bold', color: '#7c7c7c', marginBottom: '10px' }}>Quét mã để vào rạp</p> */}

            <p className="mt-3" style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '5px' }}>Mã lấy vé:</p>
            <p style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#5DBB63', marginBottom: '0' }}>WW8RKNR</p>
          </Col>

          {/* Right section - Movie Information */}
          <Col lg={8} md={7} sm={12} className="d-flex align-items-center" style={{ padding: '10px' }}>
            <Row className="w-100">
              <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                <Image
                  src="https://www.bhdstar.vn/wp-content/uploads/2024/08/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.png"
                  alt="Movie Poster"
                  fluid
                  style={{ borderRadius: '10px', width: '100%'  }}
                />
              </Col>
              <Col xs={12} md={8}>
                <Card.Body style={{ padding: '0' }}>
                  <Card.Title style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#5DBB63', marginBottom: '10px', textAlign: 'left' }}>
                    BEETLEJUICE BEETLEJUICE: MA SIÊU QUẬY (T13)
                  </Card.Title>
                  <Card.Text style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'Black', textAlign: 'left' }}>
                    📝 <strong>Phụ đề:</strong> 2D
                  </Card.Text>
                  <Card.Text style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'Black', textAlign: 'left' }}>
                    📅 <strong>Ngày:</strong> 23/09/2024
                  </Card.Text>
                  <Card.Text style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'Black' , textAlign: 'left'}}>
                    ⏰ <strong>Suất chiếu:</strong> 09h15
                  </Card.Text>
                  <Card.Text style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'Black', textAlign: 'left' }}>
                    📍 <strong>Rạp:</strong> BHD Star The Garden
                  </Card.Text>
                  <Card.Text style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'Black', textAlign: 'left' }}>
                    💺 <strong>Ghế:</strong> D13
                  </Card.Text>
                  <Card.Text style={{ fontSize: '1.1rem', marginBottom: '8px', color: 'Black' , textAlign: 'left'}}>
                    📽️ <strong>Phòng chiếu:</strong> Screen 6
                  </Card.Text>
                  <hr />
                  <h4 style={{ fontSize: '1.4rem', fontWeight: 'bold', color: '#5DBB63', textAlign: 'left' }}>Tổng tiền: 60,000 VNĐ</h4>
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
