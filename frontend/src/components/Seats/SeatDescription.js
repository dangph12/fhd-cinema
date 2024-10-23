import React from 'react';

import seatNormal from '../../assets/seats/ghe-thuong.png';
import seatVIP from '../../assets/seats/ghe-vip.png';
import seatSelected from '../../assets/seats/ghe-da-chon.png';
import seatSold from '../../assets/seats/ghe-da-ban.png';
import seatCouple from '../../assets/seats/ghe-doi.png';

const SeatDescription = () => (
    <div className="seat-box text-center mt-3">
        <div className="row">
            {/* Using Bootstrap grid system for responsiveness */}
            <div className="col-6 col-md-4 mb-3">
                <img src={seatNormal} alt="Ghế thường" className="img-fluid" />
                <div>Ghế thường</div>
            </div>
            <div className="col-6 col-md-4 mb-3">
                <img src={seatVIP} alt="Ghế VIP" className="img-fluid" />
                <div>Ghế VIP</div>
            </div>
            <div className="col-6 col-md-4 mb-3">
                <img src={seatSelected} alt="Ghế đã chọn" className="img-fluid" />
                <div>Ghế đã chọn</div>
            </div>
            <div className="col-6 col-md-4 mb-3">
                <img src={seatSold} alt="Ghế đã bán" className="img-fluid" />
                <div>Ghế đã bán</div>
            </div>
            <div className="col-6 col-md-4 mb-3">
                <img src={seatCouple} alt="Ghế đôi" className="img-fluid" />
                <div>Ghế đôi</div>
            </div>
        </div>
    </div>
);

export default SeatDescription;
