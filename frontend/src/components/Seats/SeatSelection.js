import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './SeatSelection.css';
import seatNormal from '../../assets/seats/ghe-thuong.png';
import seatVIP from '../../assets/seats/ghe-vip.png';
import seatSelected from '../../assets/seats/ghe-da-chon.png';
import seatSold from '../../assets/seats/ghe-da-ban.png';
import seatCouple from '../../assets/seats/ghe-doi.png';
import seatMapHeader from '../../assets/seats/seatMapHeader.png';

const seatLayout = [
    [{ id: "A1", type: "regular" }, { id: "A2", type: "regular" }, { id: "A3", type: "regular" }, { id: "A4", type: "regular" }, { id: "A5", type: "regular" }, { id: "A6", type: "regular" }],
    [{ id: "B1", type: "regular" }, { id: "B2", type: "regular" }, { id: "B3", type: "vip" }, { id: "B4", type: "vip" }, { id: "B5", type: "sold" }, { id: "B6", type: "regular" }],
    [{ id: "C1", type: "regular" }, { id: "C2", type: "regular" }, { id: "C3", type: "vip" }, { id: "C4", type: "vip" }, { id: "C5", type: "sold" }, { id: "C6", type: "regular" }],
    [{ id: "D1", type: "couple" }, { id: "D2", type: "couple" }, { id: "D3", type: "couple" }, { id: "D4", type: "couple" }, { id: "D5", type: "couple" }, { id: "D6", type: "couple" }]
];

const SeatSelection = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (seat) => {
        if (seat.type === 'sold') {
            alert('This seat has already been sold!');
            return;
        }
        setSelectedSeats((prevSelected) =>
            prevSelected.includes(seat.id)
                ? prevSelected.filter((s) => s !== seat.id)
                : [...prevSelected, seat.id]
        );
    };

    const navigate = useNavigate();

    const goToOrderFood = () => {
        navigate('/orderfood');
    };

    function handleButtonClick() {
        navigate("/");
    }

    return (
        <Container fluid>
            <Col md={12} style={{width: '100%'}}>
            <Card.Title className="mt-3" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                BƯỚC 2: CHỌN GHẾ
            </Card.Title>

            <Card className="p-3 mb-4" style={{ width: '100%', borderRadius: '15px', marginTop: '20px' }}>
                <Row className="g-6">
                    {/* <Col md={12} style={{ width: '100%', borderRadius: '10px' }}> */}
                    <Col xl={2} xs={12} sm={4} md={3} className="d-flex flex-column justify-content-center align-items-center">
                        <Card.Img
                            src="https://www.bhdstar.vn/wp-content/uploads/2024/08/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.png"
                            alt="Movie Poster"
                            style={{ width: '100%', borderRadius: '10px' }} />
                    </Col>

                    <Col xs={12} sm={8} md={9} >
                        <Card.Body className="px-2">
                            <Card.Title  style={{ color: '#5DBB63', fontSize: '1.5rem', fontWeight: 'bold',textAlign:'left' }}>
                                CRAYON SHIN CHAN: NHẬT KÝ KHỦNG LONG CỦA CHÚNG MÌNH
                            </Card.Title>
                            <Card.Text style={{ color: 'Black', fontSize: '1rem', textAlign: 'left' }}>
                                Theo dõi tình bạn giữa chú chó cùng Shiro của gia đình Nobara và chú khủng long nhỏ. Mối liên hệ của họ giúp cho sự phát triển của Shinnosuke và Đội Phòng thủ Kusakabe.
                            </Card.Text>
                            <p style={{ fontSize: '1rem', color: 'Black', textAlign:'left' }}><strong>Đạo diễn:</strong> <span style={{ color: '#5DBB63' }}>Shinobu Sasaki</span></p>
                            <p style={{ fontSize: '1rem', color: 'Black', textAlign:'left' }}><strong>Diễn viên:</strong> <span style={{ color: '#5DBB63' }}>Yumiko Kobayashi, Miki Narahashi</span></p>
                            <p style={{ fontSize: '1rem', color: 'Black',textAlign:'left' }}><strong>Thể loại:</strong> <span style={{ color: '#5DBB63' }}>Animation</span></p>
                            <p style={{ fontSize: '1rem', color: 'Black',textAlign:'left' }}><strong>Khởi chiếu:</strong> 23/08/2024 | <strong>Thời lượng:</strong> 105 phút</p>
                            <Col lg={2} md={5}>
                            <Button variant="outline-success" className="mt-3" style={{ fontWeight: 'bold'}} onClick={handleButtonClick}>
                                ← CHỌN PHIM KHÁC
                            </Button>
                            </Col>
                        </Card.Body>
                    </Col>
                    {/* </Col> */}
                </Row>
            </Card>




            <Row className="justify-content-center align-items-stretch">
                {/* Seat Selection Map */}
                <Col xs={12} lg={8} className="seat-selection-column d-flex flex-column">
                    <Col xs={12} lg={12} className="mb-3">
                        <Card.Img src={seatMapHeader} alt="Màn hình" style={{ width: '100%' }} />
                    </Col>

                    <div className="seat-map flex-grow-1" style={{ overflowY: 'auto', padding: '10px' }}>
                        {seatLayout.map((row, rowIndex) => (
                            <div key={rowIndex} className="seat-row d-flex justify-content-center">
                                {row.map((seat) => (
                                    <img
                                        key={seat.id}
                                        src={selectedSeats.includes(seat.id)
                                            ? seatSelected
                                            : seat.type === 'vip'
                                                ? seatVIP
                                                : seat.type === 'couple'
                                                    ? seatCouple
                                                    : seat.type === 'sold'
                                                        ? seatSold
                                                        : seatNormal
                                        }
                                        alt={seat.type}
                                        className={`seat ${seat.type}`}
                                        onClick={() => handleSeatClick(seat)}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="seat-legend text-center mt-3">
                        <Row>
                            <Col xs={6} sm={4}><img src={seatNormal} alt="Ghế thường" /> Ghế thường</Col>
                            <Col xs={6} sm={4}><img src={seatVIP} alt="Ghế VIP" /> Ghế VIP</Col>
                            <Col xs={6} sm={4}><img src={seatSelected} alt="Ghế đã chọn" /> Ghế đã chọn</Col>
                            <Col xs={6} sm={4}><img src={seatSold} alt="Ghế đã bán" /> Ghế đã bán</Col>
                            <Col xs={6} sm={4}><img src={seatCouple} alt="Ghế đôi" /> Ghế đôi</Col>
                        </Row>
                    </div>
                </Col>

                <Col xs={12} lg={4} className="pricing-column d-flex flex-column justify-content-between">
                    <div className="pricing-details p-3 rounded shadow-sm bg-white">
                        <h6 className="text-muted" style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'left' }}>FHD Cinema</h6>
                        <p style={{ fontSize: '1rem', textAlign: 'left' }}>
                            <strong style={{ color: '#5DBB63', fontSize: '1.1rem' }}>Screen 6</strong> - 23/9/2024 - Suất chiếu: 16h55
                        </p>
                        <h6 style={{ color: '#5DBB63', fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'left' }}>
                            CRAYON SHIN CHAN: NHẬT KÝ KHỦNG LONG CỦA CHÚNG MÌNH
                        </h6>
                        <p style={{ fontSize: '1rem', textAlign: 'left' }}>{selectedSeats.length} x Adult-Stand-2D</p>
                        <p style={{ fontSize: '1rem', textAlign: 'left' }}>{selectedSeats.join(', ')}</p>
                        <hr />
                        <p className="font-weight-bold" style={{ fontSize: '1rem', textAlign: 'left' }}>Tổng tiền: {selectedSeats.length * 60000} VND</p>
                        <Button variant="success" block onClick={goToOrderFood}>
                            CHỌN ĐỒ ĂN (2/4)
                        </Button>
                    </div>
                </Col>
            </Row>
            </Col>
        </Container>
    );
};

export default SeatSelection;
