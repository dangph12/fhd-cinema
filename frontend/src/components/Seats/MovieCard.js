import React from 'react';
import './MovieCard.css';


const MovieCard = () => {
    return (
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
    );
};

export default MovieCard;

