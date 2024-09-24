import React from 'react'

const FilmTime = (props) => {
    return (
        <div>
            <div className="container">
                <div className="cinema">
                    <img src="img/logo-100x100.png" alt="BHD Logo" className="logo" />
                    <div className="cinema-info">
                        <h3>BHD Cinema</h3>
                        <p>Tầng 4 & 5, TTTM The Garden, khu đô thị The Manor, đường Mễ Trì, phường Mỹ Đình 1, quận Nam Từ Liêm, Hà Nội</p>
                    </div>
                    <div className="showtimes">
                        <button className="time-button">
                            09:55
                            {/* <span className="label">
                                    <img src="link-to-phude-logo" alt="Phụ đề" className="small-logo" />
                                    <img src="link-to-2d-logo" alt="2D" className="small-logo" />
                                </span> */}
                        </button>
                        <button className="time-button">
                            14:50
                            {/* <span className="label">
                                    <img src="link-to-phude-logo" alt="Phụ đề" className="small-logo" />
                                    <img src="link-to-2d-logo" alt="2D" className="small-logo" />
                                </span> */}
                        </button>
                        <button className="time-button">
                            20:35
                            {/* <span className="label">
                                    <img src="link-to-phude-logo" alt="Phụ đề" className="small-logo" />
                                    <img src="link-to-2d-logo" alt="2D" className="small-logo" />
                                </span> */}
                        </button>
                    </div>
                </div>

                <div className="cinema">
                    <img src="img/logo-100x100.png" alt="BHD Logo" className="logo" />
                    <div className="cinema-info">
                        <h3>BHD Cinema</h3>
                        <p>Tầng 8, TTTM Discovery - 302 Cầu Giấy, Hà Nội</p>
                    </div>
                    <div className="showtimes">
                        <button className="time-button">
                            10:40
                            {/* <span className="label">
                                    <img src="link-to-phude-logo" alt="Phụ đề" className="small-logo" />
                                    <img src="link-to-2d-logo" alt="2D" className="small-logo" />
                                </span> */}
                        </button>
                        <button className="time-button">
                            13:50
                            {/* <span className="label">
                                    <img src="link-to-phude-logo" alt="Phụ đề" className="small-logo" />
                                    <img src="link-to-2d-logo" alt="2D" className="small-logo" />
                                </span> */}
                        </button>
                        <button className="time-button">
                            20:15
                            {/* <span className="label">
                                    <img src="link-to-phude-logo" alt="Phụ đề" className="small-logo" />
                                    <img src="link-to-2d-logo" alt="2D" className="small-logo" />
                                </span> */}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default FilmTime