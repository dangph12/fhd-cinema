import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './SeatSelection.css'; 
import seatNormal from '../../assets/seats/ghe-thuong.png';
import seatVIP from '../../assets/seats/ghe-vip.png';
import seatSelected from '../../assets/seats/ghe-da-chon.png';
import seatCouple from '../../assets/seats/ghe-doi.png';
import seatMapHeader from '../../assets/seats/seatMapHeader.png';
import seatSold from '../../assets/seats/ghe-da-ban.png';

const SeatSelection = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [seatLayout, setSeatLayout] = useState([]);

    // Fetch seat layout from the database
    useEffect(() => {
        const fetchSeats = async () => {
            try {
                const response = await fetch('http://localhost:8080/seats');  
                const data = await response.json();
                const limitedSeats = data.data.slice(0, 30);  
                setSeatLayout(limitedSeats);  
            } catch (error) {
                console.error("Error fetching seat data:", error);
            }
        };
        fetchSeats();
    }, []);

    const handleSeatClick = (seat) => {
        setSelectedSeats((prevSelected) => {
            // Nếu ghế đã được chọn, bỏ chọn nó
            if (prevSelected.some(selected => selected.seatId === seat.seatId)) {
                return prevSelected.filter(selected => selected.seatId !== seat.seatId);
            } else {
                // Nếu ghế chưa được chọn, thêm nó vào danh sách đã chọn
                return [...prevSelected, { seatId: seat.seatId, seatName: seat.seatName }];
            }
        });
    };

    const navigate = useNavigate();

    const goToOrderFood = () => {
        navigate('/orderfood');
    };
    function handleButtonClick() {
        navigate("/");
    }

    const getTotalPrice = () => {
        return selectedSeats.reduce((total, selectedSeat) => {
            const seat = seatLayout.find(s => s.seatId === selectedSeat.seatId);
            return total + (seat ? seat.seatType.seatTypePrice : 0);
        }, 0);
    };

    return (
        <Container fluid>
            <Col md={12} style={{width: '100%'}}>
            <Card.Title className="mt-3" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                BƯỚC 2: CHỌN GHẾ
            </Card.Title>

            <Card className="p-3 mb-4" style={{ width: '100%', borderRadius: '15px', marginTop: '20px' }}>
                <Row className="g-6">
                    {/* <Col md={12} style={{ width: '100%', borderRadius: '10px' }}> */}
                    <Col xl={2} xs={12} sm={4} md={3} lg={3} className="d-flex flex-column justify-content-center align-items-center">
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

                    <Col>
                    <div className="seat-map flex-grow-1" style={{ overflowY: 'auto', padding: '10px' }}>
                        {seatLayout.length > 0 && seatLayout.map((seat, index) => (
                            <img
                                key={index}
                                src={selectedSeats.some(selected => selected.seatId === seat.seatId)
                                    ? seatSelected
                                    : seat.seatType.seatTypeName === 'VIP'
                                        ? seatVIP
                                        : seat.seatType.seatTypeName === 'Couple'
                                            ? seatCouple
                                            : seatNormal
                                }
                                alt={seat.seatType.seatTypeName}
                                className={`seat ${seat.seatType.seatTypeName}`}
                                onClick={() => handleSeatClick(seat)}
                            />
                        ))}
                    </div>
                    </Col>
                    <div className="seat-legend text-center mt-3">
                        <Row>
                            <Col xs={4} sm={4}><img src={seatNormal} alt="Ghế thường" /> Ghế thường</Col>
                            <Col xs={4} sm={4}><img src={seatVIP} alt="Ghế VIP" /> Ghế VIP</Col>
                            <Col xs={4} sm={4}><img src={seatSelected} alt="Ghế đã chọn" /> Ghế đã chọn</Col>
                            <Col xs={4} sm={4}><img src={seatSold} alt="Ghế đã bán" /> Ghế đã bán</Col>
                            <Col xs={4} sm={4}><img src={seatCouple} alt="Ghế đôi" /> Ghế đôi</Col>
                        </Row>
                    </div>
                </Col>

                {/* Pricing Details */}
                <Col xs={12} lg={4} className="pricing-column d-flex flex-column justify-content-between">
                    <div className="pricing-details p-3 rounded shadow-sm bg-white">
                        <h6 className="text-muted" style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'left' }}>FHD Cinema</h6>
                        <p style={{ fontSize: '1rem', textAlign: 'left', color:'Black' }}>
                            <strong style={{ color: '#5DBB63', fontSize: '1.1rem' }}>Screen </strong> - 23/9/2024 - Suất chiếu: 16h55
                        </p>
                        <h6 style={{ color: '#5DBB63', fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'left' }}>
                            CRAYON SHIN CHAN: NHẬT KÝ KHỦNG LONG CỦA CHÚNG MÌNH
                        </h6>
                        <p style={{ fontSize: '1rem', textAlign: 'left', color:'Black' }}>{selectedSeats.length} x Seat(s)</p>
                        <p style={{ fontSize: '1rem', textAlign: 'left', color:'Black' }}>
                            {/* Hiển thị tên các ghế đã chọn */}
                            {selectedSeats.map(seat => seat.seatName).join(', ')}
                        </p>
                        <hr />
                        <p className="font-weight-bold" style={{ fontSize: '1rem', textAlign: 'left', color:'Black' }}>Tổng tiền: {getTotalPrice()} VND</p>
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
