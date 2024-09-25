import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./SeatSelection.css"; // Assuming you have this CSS file for custom styles
import seatNormal from "../assets/ghe-thuong.png";
import seatVIP from "../assets/ghe-vip.png";
import seatSelected from "../assets/ghe-da-chon.png";
import seatSold from "../assets/ghe-da-ban.png";
import seatCouple from "../assets/ghe-doi.png";
import seatMapHeader from "../assets/seatMapHeader.png";

const seatLayout = [
  [
    { id: "A1", type: "regular" },
    { id: "A2", type: "regular" },
    { id: "A3", type: "regular" },
    { id: "A4", type: "regular" },
    { id: "A5", type: "regular" },
    { id: "A6", type: "regular" },
  ],
  [
    { id: "B1", type: "regular" },
    { id: "B2", type: "regular" },
    { id: "B3", type: "vip" },
    { id: "B4", type: "vip" },
    { id: "B5", type: "regular" },
    { id: "B6", type: "regular" },
  ],
  [
    { id: "C1", type: "regular" },
    { id: "C2", type: "regular" },
    { id: "C3", type: "vip" },
    { id: "C4", type: "vip" },
    { id: "C5", type: "regular" },
    { id: "C6", type: "regular" },
  ],
  [
    { id: "D1", type: "regular" },
    { id: "D2", type: "regular" },
    { id: "D3", type: "regular" },
    { id: "D4", type: "regular" },
    { id: "D5", type: "regular" },
    { id: "D6", type: "regular" },
  ],
];

// const seatType = [
//     { id: 'A1', type: 'regular' },
//     { id: 'A2', type: 'vip' },
//     { id: 'A3', type: 'regular' },
//     { id: 'L1', type: 'couple' },
//     { id: 'L2', type: 'couple' },
//     { id: 'L3', type: 'sold' },
//     // Các ghế khác...
// ];

const SeatSelection = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatClick = (seat) => {
    if (seat.type === "sold") {
      alert("This seat has already been sold!");
      return;
    }
    setSelectedSeats((prevSelected) =>
      prevSelected.includes(seat.id)
        ? prevSelected.filter((s) => s !== seat.id)
        : [...prevSelected, seat.id]
    );
  };

  return (
    <Container fluid className="seat-selection-container">
      <Card.Title
        style={{
          margin: "auto",
          marginTop: "10px",
          fontSize: "1.9rem",
          fontWeight: "bold",
        }}
      >
        BƯỚC 2: CHỌN GHẾ
      </Card.Title>

      <Card
        className="p-3 mb-4 movie-card-container"
        style={{
          maxWidth: "1200px",
          margin: "auto",
          borderRadius: "15px",
          marginTop: "50px",
        }}
      >
        <Row className="g-6">
          <Col
            md={3}
            className="d-flex justify-content-center align-items-center"
          >
            <Card.Img
              src="https://www.bhdstar.vn/wp-content/uploads/2024/08/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.png"
              alt="Movie Poster"
              style={{ width: "100%", borderRadius: "10px" }}
            />
          </Col>

          <Col md={9}>
            <Card.Body
              style={{
                paddingTop: "0",
                paddingBlock: "0",
                paddingBottom: "0",
                paddingTop: "0",
              }}
            >
              <Card.Title
                className="movie-title text-uppercase"
                style={{
                  color: "#5DBB63",
                  fontSize: "1.9rem",
                  fontWeight: "bold",
                }}
              >
                CRAYON SHIN CHAN: NHẬT KÝ KHỦNG LONG CỦA CHÚNG MÌNH
              </Card.Title>
              <Card.Text
                style={{
                  color: "#6C757D",
                  fontSize: "1.2rem",
                  lineHeight: "1.5rem",
                  textAlign: "left",
                }}
              >
                Theo dõi tình bạn giữa chú chó cùng Shiro của gia đình Nobara và
                chú khủng long nhỏ. Mối liên hệ của họ giúp cho sự phát triển
                của Shinnosuke và Đội Phòng thủ Kusakabe.
              </Card.Text>
              <p style={{ textAlign: "left", fontSize: "1.2rem" }}>
                <strong>Đạo diễn:</strong>{" "}
                <span
                  className="highlight"
                  style={{ color: "#5DBB63", textAlign: "left" }}
                >
                  Shinobu Sasaki
                </span>
              </p>
              <p style={{ textAlign: "left", fontSize: "1.2rem" }}>
                <strong>Diễn viên:</strong>{" "}
                <span className="highlight" style={{ color: "#5DBB63" }}>
                  Yumiko Kobayashi, Miki Narahashi
                </span>
              </p>
              <p style={{ textAlign: "left", fontSize: "1.2rem" }}>
                <strong>Thể loại:</strong>{" "}
                <span className="highlight" style={{ color: "#5DBB63" }}>
                  Animation
                </span>
              </p>
              <p style={{ textAlign: "left", fontSize: "1.2rem" }}>
                <strong>Khởi chiếu:</strong> 23/08/2024 |{" "}
                <strong>Thời lượng:</strong> 105 phút
              </p>
              <Button
                variant="outline-success"
                className="mt-3"
                style={{ fontWeight: "bold" }}
              >
                ← CHỌN PHIM KHÁC
              </Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>

      <Row className="justify-content-center align-items-stretch">
        {/* Seat Selection Map */}
        <Col
          xs={12}
          lg={8}
          className="seat-selection-column d-flex flex-column"
        >
          <div className="text-center mb-3">
            <img src={seatMapHeader} alt="Màn hình" className="screen-image" />
          </div>

          <div
            className="seat-map flex-grow-1"
            style={{ overflowY: "auto", padding: "10px" }}
          >
            {seatLayout.map((row, rowIndex) => (
              <div
                key={rowIndex}
                className="seat-row d-flex justify-content-center"
              >
                {row.map((seat) => (
                  <img
                    key={seat.id}
                    src={
                      selectedSeats.includes(seat.id)
                        ? seatSelected
                        : seat.type === "vip"
                        ? seatVIP
                        : seat.type === "couple"
                        ? seatCouple
                        : seat.type === "sold"
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
              <Col>
                <img src={seatNormal} alt="Ghế thường" /> Ghế thường
              </Col>
              <Col>
                <img src={seatVIP} alt="Ghế VIP" /> Ghế VIP
              </Col>
              <Col>
                <img src={seatSelected} alt="Ghế đã chọn" /> Ghế đã chọn
              </Col>
              <Col>
                <img src={seatSold} alt="Ghế đã bán" /> Ghế đã bán
              </Col>
              <Col>
                <img src={seatCouple} alt="Ghế đôi" /> Ghế đôi
              </Col>
            </Row>
          </div>
        </Col>

        {/* Pricing Details */}
        <Col
          xs={12}
          lg={4}
          className="pricing-column d-flex flex-column justify-content-between"
        >
          <div className="pricing-details p-3 rounded shadow-sm bg-white">
            <h6
              className="text-muted"
              style={{
                color: "#5DBB63",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              FHD Star Cinema
            </h6>
            <p
              style={{ color: "Black", fontSize: "1.2rem", textAlign: "left" }}
            >
              <strong
                style={{
                  color: "#5DBB63",
                  fontSize: "1.3rem",
                  textAlign: "left",
                }}
              >
                Screen 6
              </strong>{" "}
              - 23/9/2024 - Suất chiếu: 16h55
            </p>
            <h6
              style={{
                color: "#5DBB63",
                fontSize: "1.5rem",
                fontWeight: "bold",
                textAlign: "left",
              }}
            >
              CRAYON SHIN CHAN: NHẬT KÝ KHỦNG LONG CỦA CHÚNG MÌNH
            </h6>
            <p
              style={{ color: "Black", fontSize: "1.2rem", textAlign: "left" }}
            >
              {selectedSeats.length} x Adult-Stand-2D
            </p>
            <p
              style={{ color: "Black", fontSize: "1.2rem", textAlign: "left" }}
            >
              {selectedSeats.join(", ")}
            </p>
            <p
              className="font-weight-bold"
              style={{
                color: "Black",
                fontSize: "1.2rem",
                textAlign: "left",
                fontWeight: "bold",
              }}
            >
              Tổng tiền: {selectedSeats.length * 60000} VND
            </p>
            <Button variant="success" block>
              CHỌN ĐỒ ĂN (2/4)
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SeatSelection;
