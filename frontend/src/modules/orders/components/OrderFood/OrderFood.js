import React, { useState } from 'react';
import { Container, Row, Col, Button, Card, Image } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './OrderFood.css'; // Assuming custom styles are here

const OrderFood = () => {
  const navigate = useNavigate();

  function handleButtonClick() {
    navigate("/");
  }

  function goToTicketInform() {
    navigate("/ticketinfor");
  }

  // Pricing for each combo
  const comboPrices = {
    aquaCombo: 80000,
    singleCombo: 60000,
    coupleCombo: 120000,
  };

  const [quantity, setQuantity] = useState({ aquaCombo: 0, singleCombo: 0, coupleCombo: 0 });

  const handleQuantityChange = (combo, change) => {
    setQuantity((prev) => ({
      ...prev,
      [combo]: prev[combo] + change > 0 ? prev[combo] + change : 0,
    }));
  };

  // Total calculation
  const totalAquaCombo = quantity.aquaCombo * comboPrices.aquaCombo;
  const totalSingleCombo = quantity.singleCombo * comboPrices.singleCombo;
  const totalCoupleCombo = quantity.coupleCombo * comboPrices.coupleCombo;
  const totalPrice = 100000 + totalAquaCombo + totalSingleCombo + totalCoupleCombo; // 100,000 VND for ticket

  return (
    <Container fluid>
      <Card.Title className="text-center mt-4" style={{ fontSize: '1.9rem', fontWeight: 'bold' }}>
        BƯỚC 3: CHỌN ĐỒ ĂN
      </Card.Title>

      {/* Movie Info Card */}
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
                CRAYON SHIN CHAN: NHẬT KÝ KHỦNG LONG CỦA CHÚNG MÌNH
              </Card.Title>
              <Card.Text style={{ color: 'Black', fontSize: '1rem', textAlign: 'left' }}>
                Theo dõi tình bạn giữa chú chó cùng Shiro của gia đình Nobara và chú khủng long nhỏ. Mối liên hệ của họ giúp cho sự phát triển của Shinnosuke và Đội Phòng thủ Kusakabe.
              </Card.Text>
              <p style={{ fontSize: '1rem', color: 'Black', textAlign: 'left' }}>
                <strong>Đạo diễn:</strong> <span style={{ color: '#5DBB63' }}>Shinobu Sasaki</span>
              </p>
              <p style={{ fontSize: '1rem', color: 'Black', textAlign: 'left' }}>
                <strong>Diễn viên:</strong> <span style={{ color: '#5DBB63' }}>Yumiko Kobayashi, Miki Narahashi</span>
              </p>
              <p style={{ fontSize: '1rem', color: 'Black', textAlign: 'left' }}>
                <strong>Thể loại:</strong> <span style={{ color: '#5DBB63' }}>Animation</span>
              </p>
              <p style={{ fontSize: '1rem', color: 'Black', textAlign: 'left' }}>
                <strong>Khởi chiếu:</strong> 23/08/2024 | <strong>Thời lượng:</strong> 105 phút
              </p>
              <Col lg={2} md={5}>
                <Button variant="outline-success" className="mt-3" style={{ fontWeight: 'bold' }} onClick={handleButtonClick}>
                  ← CHỌN PHIM KHÁC
                </Button>
              </Col>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      {/* Combo Selection */}
      <Row>
        <Col md={8}>
          <Card className="p-3 seat-legend">
            <Card.Title style={{ color: '#5DBB63', fontSize: '1.9rem', fontWeight: 'bold' }}>
              Combo
            </Card.Title>

            {/* Aqua Combo */}
            <Row className="mb-4 align-items-center">
              <Col xs={4}>
                <Image
                  src="https://booking.bhdstar.vn/CDN/media/entity/get/ItemGraphic/661838?width=160&height=160&referenceScheme=HeadOffice&allowPlaceHolder=true"
                  rounded
                  fluid
                />
              </Col>
              <Col xs={4}>
                <h6 style={{ color: '#5DBB63', fontSize: '1.5rem', fontWeight: 'bold' }}>Aqua Combo</h6>
                <h5 style={{ fontWeight: 'bold' }}>80.000 VND</h5>
              </Col>
              <Col xs={4} className="text-right">
                <Button variant="outline-secondary" size="sm" onClick={() => handleQuantityChange('aquaCombo', -1)}>
                  -
                </Button>
                <span className="mx-2">{quantity.aquaCombo}</span>
                <Button variant="outline-secondary" size="sm" onClick={() => handleQuantityChange('aquaCombo', 1)}>
                  +
                </Button>
              </Col>
            </Row>

            {/* Single Combo */}
            <Row className="mb-4 align-items-center">
              <Col xs={4}>
                <Image
                  src="https://booking.bhdstar.vn/CDN/media/entity/get/ItemGraphic/661838?width=160&height=160&referenceScheme=HeadOffice&allowPlaceHolder=true"
                  rounded
                  fluid
                />
              </Col>
              <Col xs={4}>
                <h6 style={{ color: '#5DBB63', fontSize: '1.5rem', fontWeight: 'bold' }}>Single Combo</h6>
                <h5 style={{ fontWeight: 'bold' }}>60.000 VND</h5>
              </Col>
              <Col xs={4} className="text-right">
                <Button variant="outline-secondary" size="sm" onClick={() => handleQuantityChange('singleCombo', -1)}>
                  -
                </Button>
                <span className="mx-2">{quantity.singleCombo}</span>
                <Button variant="outline-secondary" size="sm" onClick={() => handleQuantityChange('singleCombo', 1)}>
                  +
                </Button>
              </Col>
            </Row>

            {/* Couple Combo */}
            <Row className="mb-4 align-items-center">
              <Col xs={4}>
                <Image
                  src="https://booking.bhdstar.vn/CDN/media/entity/get/ItemGraphic/661839?width=160&height=160&referenceScheme=HeadOffice&allowPlaceHolder=true"
                  rounded
                  fluid
                />
              </Col>
              <Col xs={4}>
                <h6 style={{ color: '#5DBB63', fontSize: '1.5rem', fontWeight: 'bold' }}>Couple Combo</h6>
                <h5 style={{ fontWeight: 'bold' }}>120.000 VND</h5>
              </Col>
              <Col xs={4} className="text-right">
                <Button variant="outline-secondary" size="sm" onClick={() => handleQuantityChange('coupleCombo', -1)}>
                  -
                </Button>
                <span className="mx-2">{quantity.coupleCombo}</span>
                <Button variant="outline-secondary" size="sm" onClick={() => handleQuantityChange('coupleCombo', 1)}>
                  +
                </Button>
              </Col>
            </Row>
          </Card>
        </Col>

        {/* Pricing Summary */}
        <Col md={4}>
          <Card className="p-3 pricing-column d-flex flex-column justify-content-between">
            <h6 style={{ fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'left' }}>FHD Cinema</h6>
            <p style={{ fontSize: '1.2rem', textAlign: 'left' }}>
              <strong style={{ color: '#5DBB63', fontSize: '1.3rem' }}>Screen 6</strong> - 23/9/2024 - Suất chiếu: 16h55
            </p>
            <h6 style={{ color: '#5DBB63', fontSize: '1.5rem', fontWeight: 'bold', textAlign: 'left' }}>
              CRAYON SHIN CHAN: NHẬT KÝ KHỦNG LONG CỦA CHÚNG MÌNH
            </h6>
            <p style={{ fontSize: '1.2rem', textAlign: 'left' }}>1 x Adult-Stand-2D</p>

            <div style={{ fontSize: '1.2rem', textAlign: 'left' }}>
              {quantity.aquaCombo > 0 && <p>{quantity.aquaCombo} x OL Aqua Combo: {totalAquaCombo} VND</p>}
              {quantity.singleCombo > 0 && <p>{quantity.singleCombo} x OL Single Combo 22Oz: {totalSingleCombo} VND</p>}
              {quantity.coupleCombo > 0 && <p>{quantity.coupleCombo} x OL Couple Combo 22Oz: {totalCoupleCombo} VND</p>}
            </div>

            <hr />
            <h5>Tổng tiền: {totalPrice} VND</h5>
            <Button variant="success" block onClick={goToTicketInform}>
              Thanh Toán (3/4)
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderFood;
