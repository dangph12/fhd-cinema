import React from 'react';
import { useState } from 'react';
import './MovieCard.css';

import seatNormal from '../assets/ghe-thuong.png';
import seatVIP from '../assets/ghe-vip.png';
import seatSelected from '../assets/ghe-da-chon.png';
import seatSold from '../assets/ghe-da-ban.png';
import seatCouple from '../assets/ghe-doi.png';
import seatMapHeader from '../assets/seatMapHeader.png';







const MovieCard = () => {


    const seatLayout = [
        [{ id: "A1", type: "regular" }, { id: "A2", type: "regular" }, { id: "A3", type: "regular" }, { id: "A4", type: "regular" }, { id: "A5", type: "regular" }, { id: "A6", type: "regular" }],
        [{ id: "B1", type: "regular" }, { id: "B2", type: "regular" }, { id: "B3", type: "vip" }, { id: "B4", type: "vip" }, { id: "B5", type: "regular" }, { id: "B6", type: "regular" }],
        [{ id: "C1", type: "regular" }, { id: "C2", type: "regular" }, { id: "C3", type: "vip" }, { id: "C4", type: "vip" }, { id: "C5", type: "regular" }, { id: "C6", type: "regular" }],
        [{ id: "D1", type: "regular" }, { id: "D2", type: "regular" }, { id: "D3", type: "regular" }, { id: "D4", type: "regular" }, { id: "D5", type: "regular" }, { id: "D6", type: "regular" }]

    ];


    const [selectedSeats, setSelectedSeats] = useState([]);

    const handleSeatClick = (seat) => {
        setSelectedSeats((prevSelected) =>
            prevSelected.includes(seat)
                ? prevSelected.filter((s) => s !== seat)
                : [...prevSelected, seat]
        );
    };

    return (
        <div>
            <div className="movie-card-container">
                <h2 className="step-title">Bước 2: Chọn ghế</h2>
                <div className="movie-card">
                    <div className="movie-poster">
                        <img src="https://www.bhdstar.vn/wp-content/uploads/2024/08/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.png" alt="Crayon Shin Chan" />
                    </div>
                    <div className="movie-details">
                        <h3 className="movie-title">CRAYON SHIN CHAN: NHẬT KÝ KHỦNG LONG CỦA CHÚNG MÌNH</h3>
                        <p>Theo dõi tình bạn giữa chú chó cùng Shiro của gia đình Nobara và chú khủng long nhỏ. Mối liên hệ của họ giúp cho sự phát triển của Shinnosuke và Đội Phòng thủ Kusakabe.</p>
                        <p><strong>Đạo diễn:</strong> <span className="highlight">Shinobu Sasaki</span></p>
                        <p><strong>Diễn viên:</strong> <span className="highlight">Yumiko Kobayashi, Miki Narahashi</span></p>
                        <p><strong>Thể loại:</strong> <span className="highlight">Animation</span></p>
                        <p><strong>Khởi chiếu:</strong> 23/08/2024 | <strong>Thời lượng:</strong> 105 phút</p>
                        <button className="choose-other-movie">← CHỌN PHIM KHÁC</button>
                    </div>
                </div>

            </div>

            <div className="seat-selection-container">
                <div>
                    <img src={seatMapHeader} alt="Màn hình" />
                </div>

                <div className="seat-map">
                    {seatLayout.map((row, rowIndex) => (
                        <div key={rowIndex} className="seat-row">
                            {row.map((seat, seatIndex) => (
                                <img
                                    key={seatIndex}
                                    src={seat.type === 'vip' ? seatVIP : seatNormal}
                                    alt={seat.type}
                                    className="seat"
                                    onClick={() => handleSeatClick(seat)}
                                />
                            ))}
                        </div>
                    ))}
                </div>
                <div className="seat-legend">
                    <div>
                        <img src={seatNormal} alt="Ghế thường" /> Ghế thường
                    </div>
                    <div>
                        <img src={seatVIP} alt="Ghế VIP" /> Ghế VIP
                    </div>
                    <div>
                        <img src={seatSelected} alt="Ghế đã chọn" /> Ghế đã chọn
                    </div>
                    <div>
                        <img src={seatSold} alt="Ghế đã bán" /> Ghế đã bán
                    </div>
                    <div>
                        <img src={seatCouple} alt="Ghế đôi" /> Ghế đôi
                    </div>
                </div>
                <div className="selected-seats-info">
                    Ghế đã chọn: {selectedSeats.length > 0 ? selectedSeats.join(', ') : 'Chưa chọn ghế nào'}
                </div>
            </div>

        </div>






    );
};

// export default MovieCard;
