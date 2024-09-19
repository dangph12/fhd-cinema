
import React, { useState } from 'react';
import './SeatSelection.css';
import seatNormal from '../assets/ghe-thuong.png';
import seatVIP from '../assets/ghe-vip.png';
import seatSelected from '../assets/ghe-da-chon.png';
import seatSold from '../assets/ghe-da-ban.png';
import seatCouple from '../assets/ghe-doi.png';
import seatMapHeader from '../assets/seatMapHeader.png';




const seatLayout = [
    [{ id: "A1", type: "regular" }, { id: "A2", type: "regular" }, { id: "A3", type: "regular" }, { id: "A4", type: "regular" }, { id: "A5", type: "regular" }, { id: "A6", type: "regular" }],
    [{ id: "B1", type: "regular" }, { id: "B2", type: "regular" }, { id: "B3", type: "vip" }, { id: "B4", type: "vip" }, { id: "B5", type: "regular" }, { id: "B6", type: "regular" }],
    [{ id: "C1", type: "regular" }, { id: "C2", type: "regular" }, { id: "C3", type: "vip" }, { id: "C4", type: "vip" }, { id: "C5", type: "regular" }, { id: "C6", type: "regular" }],
    [{ id: "D1", type: "regular" }, { id: "D2", type: "regular" }, { id: "D3", type: "regular" }, { id: "D4", type: "regular" }, { id: "D5", type: "regular" }, { id: "D6", type: "regular" }]

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
        setSelectedSeats((prevSelected) =>
            prevSelected.includes(seat.id)
                ? prevSelected.filter((s) => s !== seat.id)
                : [...prevSelected, seat.id]
        );
    };

    return (
        <div className="seat-selection-container">
            <div>
                <img src={seatMapHeader} alt="Màn hình" />
            </div>

            <div className="seat-map">
                {seatLayout.map((row, rowIndex) => (
                    <div key={rowIndex} className="seat-row">
                        {row.map((seat) => (
                            <img
                                key={seat.id}
                                src={selectedSeats.includes(seat.id)
                                    ? seatSelected
                                    : seat.type === 'vip'
                                        ? seatVIP
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
                Ghế đã chọn: {selectedSeats.length > 0 ? selectedSeats.map((id) => id).join(', ') : 'Chưa chọn ghế nào'}
            </div>
        </div>
    );
};

export default SeatSelection;