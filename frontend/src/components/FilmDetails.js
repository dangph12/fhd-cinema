import React from 'react';


function FilmDeatils() {
    return (
        <div className="film-intro">
            <img 
                src="https://www.bhdstar.vn/wp-content/uploads/2024/09/bannerTop.jpg" 
                alt="Film Banner" 
                className="banner-img" 
            />
            <div className="container">
                <div className="row shadow-lg p-4 mb-5 bg-white rounded">
                    {/* Phần hình ảnh phim */}
                    <div className="col-md-4">
                        <img 
                            src="img/1.jpg" 
                            alt="Film Thumbnail" 
                            className="img-thumbnail film-thumbnail" 
                        />
                    </div>

                    {/* Phần thông tin phim */}
                    <div className="col-md-5 film-description">
                        <h1 className="film-title">Hai Muoi</h1>
                        <p className="film-synopsis">
                            Câu chuyện đầy cảm động về một người cha gà trống nuôi con bằng nghề làm muối để con gái mình có thể đi học trên thành phố. 
                            Cô gái lên thành phố hoa lệ và va phải nhiều cạm bẫy khiến người cha phải giải cứu. 
                            Hành trình khiến hai cha con thêm hiểu nhau.
                        </p>
                        <br></br>
                        <p className="film-synopsis">Phân loại: T13 Phim phổ biến đến người xem từ 13 tuổi trở lên</p>
                        <br></br>
                        <p className="film-synopsis">Định dạng: 2D</p>
                        <br></br>
                        <p className="film-synopsis">Diễn viên: Cho Jung-seok, Lee Ju-myung</p>
                        <br></br>
                        <p className="film-synopsis">Thể loại: Comedy</p>
                        <br></br>
                        <p className="film-synopsis">Ngôn ngữ: Phụ đề</p>
                        <br/>
                    </div>

                    {/* Phần thông tin thêm */}
                    <div className="col-md-3 additional-info">
                    <img 
                            src="https://www.bhdstar.vn/wp-content/uploads/2024/09/singlebanner2.jpg" 
                            alt="Additional Banner" 
                            className="additional-banner" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilmDeatils;

