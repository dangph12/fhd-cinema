// 








import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import seatNormal from '../../assets/seats/ghe-thuong.png';
import seatVIP from '../../assets/seats/ghe-vip.png';
import seatSelected from '../../assets/seats/ghe-da-chon.png';
import seatSold from '../../assets/seats/ghe-da-ban.png';
import seatCouple from '../../assets/seats/ghe-doi.png';

const SeatDescription = () => (
    <Card className="p-3 shadow-sm mt-3">
        <Card.Body>
            <Card.Title className="text-center">Mô Tả Ghế</Card.Title>
            <Row className="text-center">
                <Col xs={6} md={4} className="mb-3">
                    <img src={seatNormal} alt="Ghế thường" className="img-fluid" />
                    <div>Ghế thường</div>
                </Col>
                <Col xs={6} md={4} className="mb-3">
                    <img src={seatVIP} alt="Ghế VIP" className="img-fluid" />
                    <div>Ghế VIP</div>
                </Col>
                <Col xs={6} md={4} className="mb-3">
                    <img src={seatSelected} alt="Ghế đã chọn" className="img-fluid" />
                    <div>Ghế đã chọn</div>
                </Col>
                <Col xs={6} md={4} className="mb-3">
                    <img src={seatSold} alt="Ghế đã bán" className="img-fluid" />
                    <div>Ghế đã bán</div>
                </Col>
                <Col xs={6} md={4} className="mb-3">
                    <img src={seatCouple} alt="Ghế đôi" className="img-fluid" />
                    <div>Ghế đôi</div>
                </Col>
            </Row>
        </Card.Body>
    </Card>
);

export default SeatDescription;
