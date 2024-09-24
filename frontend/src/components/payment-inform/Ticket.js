import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import './Ticket.css'; // Custom styles

const Ticket = () => {
  return (

    <Container
      className="p-1 rounded shadow-sm ticket-container"
      style={{
        width: '1000px',
        borderRadius: '15px',
        border: '1px solid #d9d9d9',
        marginTop: '50px'
      }}

    >
      <h4 className="text-center mb-1" style={{ color: 'Black', fontSize: '38px', textAlign: 'left' }}>Đặt vé hoàn tất</h4>


      <Row>
        {/* Left side: QR Code */}
        <Col md={4} className="text-center d-flex flex-column justify-content-center align-items-center">
          <h6 className="mb-3" style={{ fontWeight: 'bold', fontSize: '22px' }}>
            Quét mã để vào rạp
          </h6>
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" // Replace with actual QR code
            alt="QR Code"
            style={{ width: '200px', height: '200px' }}
            fluid
          />
          <p
            className="mt-3"
            style={{ fontSize: '18px', fontWeight: 'bold', color: '#5DBB63' }}
          >
            Mã lấy vé: WW8RKNR
          </p>
        </Col>

        {/* Right side: Ticket Details */}
        <Col md={8}>
          <Card className="p-0 h-1" style={{ border: 'none', backgroundColor: '#f6f6f6' }}>
            <Row>
              <Col md={4} className="d-flex justify-content-center align-items-center">
                <Image
                  src="https://www.bhdstar.vn/wp-content/uploads/2024/08/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.png" // Replace with actual movie poster
                  alt="Movie Poster"
                  style={{ borderRadius: '10px', width: 'auto', height: 'auto' }}
                  fluid
                />
              </Col>

              <Col md={8} className="ticket-details">
                <h5 className="mb-2" style={{ fontWeight: 'bold', fontSize: '22px', textAlign: 'left' }}>
                  BEETLEJUICE BEETLEJUICE: MA SIÊU QUẬY (T13)
                </h5>
                <p style={{ color: 'Black', fontSize: '18px', textAlign: 'left' }}>
                  <strong>Phụ đề:</strong> 2D
                </p>
                <p style={{ color: 'Black', fontSize: '18px', textAlign: 'left' }}>
                  <strong>Ngày:</strong> 23/09/2024
                </p>
                <p style={{ color: 'Black', fontSize: '18px', textAlign: 'left' }}>
                  <strong>Suất chiếu:</strong> 09h15
                </p>
                <p style={{ color: 'Black', fontSize: '18px', textAlign: 'left' }}>
                  <strong>Rạp:</strong> BHD Star The Garden
                </p>
                <p style={{ color: 'Black', fontSize: '18px', textAlign: 'left' }}>
                  <strong>Ghế:</strong> D13 &nbsp; | &nbsp;{' '}
                  <strong>Phòng chiếu:</strong> Screen 6
                </p>
                <h6
                  className="mt-3"
                  style={{ fontWeight: 'bold', color: '#5DBB63', textAlign: 'left', fontSize: '24px' }}
                >
                  Tổng tiền: 60,000 VNĐ
                </h6>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Ticket;
