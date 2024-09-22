import React from 'react'
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import ReactPlayer from 'react-player/youtube'
import FilmTime from './FilmTime';

// import YouTube from 'react-youtube';


const OrderTicket = (props) => {

    const navigate = useNavigate();

    function handleButtonClick() {
        navigate("/");
    }

    return (
        <div>
            <div className="film-intro">
                <img
                    src="https://www.bhdstar.vn/wp-content/uploads/2024/09/bannerTop.jpg"
                    alt="Film Banner"
                    className="banner-img"
                />

                <div className="movie-card">
                    <img
                        src="img/1.jpg"
                        alt="Movie Poster"
                        className="movie-poster"
                    />
                    <div className="movie-details">
                        <h3 className="movie-title">
                            IT ENDS WITH US: NƠI TÌNH YÊU KẾT THÚC
                        </h3>
                        <p className="movie-description">
                            Lily vượt qua tuổi thơ đau thương để bắt đầu một cuộc sống mới. Một cuộc gặp gỡ tình cờ với một bác sĩ phẫu thuật thần kinh đã tạo nên một mối liên hệ nhưng Lily bắt đầu nhìn thấy những khía cạnh của anh ta khiến cô nhớ đến mối quan hệ của cha mẹ mình.
                        </p>
                        <p><strong>Đạo diễn:</strong> <a href="#">Justin Baldoni</a></p>
                        <p><strong>Diễn viên:</strong> <a href="#">Blake Lively</a>, <a href="#">Justin Baldoni</a></p>
                        <p><strong>Thể loại:</strong> <a href="#">Romance</a></p>
                        <p><strong>Khởi chiếu:</strong> 27/09/2024 | <strong>Thời lượng:</strong> 130 phút</p>
                        <button className="movie-button" onClick={handleButtonClick}>← CHỌN PHIM KHÁC</button>
                    </div>
                </div>

                <div className="container">
                    {/* youtube link */}
                    <div className="cinema video-container">
                        <div style={{ position: 'center', paddingBottom: '30%', height: 0, overflow: 'hidden' }}>
                            <ReactPlayer url='https://www.youtube.com/watch?v=wI2Wd2yA8YE' />
                        </div>
                    </div>
                </div>

                <FilmTime/>
                <img src="https://bhdstar.vn/wp-content/uploads/2024/09/Rectangle-27.png"/>
            </div>
        </div>
    )
}

export default OrderTicket