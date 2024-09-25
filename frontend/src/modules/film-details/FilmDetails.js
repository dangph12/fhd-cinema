import React, { useEffect, useState } from 'react';
import { SocialIcon } from 'react-social-icons'
import { fetchAllUser } from '../../components/services/UserService';



function FilmDetails() {


    const [listMovies, setListMovies] = useState([{}])

    useEffect(() => {
        // call api

        // axios.get("http://localhost:8080/movies").then(data => {
        //     console.log(">>>check", data);

        // })

        getMovies();



    }, []);

    const getMovies = async () => {
        let res = await fetchAllUser();

        if (res && res.data) {
            setListMovies(res.data)
        }
    }
    // check data
    console.log(listMovies);

    return (
        // <div className="film-intro">
        //     <img
        //         src="https://www.bhdstar.vn/wp-content/uploads/2024/09/bannerTop.jpg"
        //         alt="Film Banner"
        //         className="banner-img"
        //     />
        //     <div className="container">
        //         <div className="row shadow-lg p-4 mb-5 bg-white rounded">
        //             {/* Phần hình ảnh phim */}
        //             <div className="col-md-4">
        //                 <img
        //                     src="https://bhdstar.vn/wp-content/uploads/2024/04/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-14.jpg"
        //                     alt="Film Thumbnail"
        //                     className="img-thumbnail film-thumbnail"
        //                 />
        //             </div>

        //             {/* Phần thông tin phim */}

        //             {listMovies && listMovies.length > 0 &&
        //                 listMovies.map((items, index) => {
        //                     return (
        //                         <div className="film-description col-md-5">
        //                             <h1 className="film-title">{listMovies[0].movieTitle}</h1>
        //                             <p className="film-synopsis">
        //                                 Câu chuyện đầy cảm động về một người cha gà trống nuôi con bằng nghề làm muối để con gái mình có thể đi học trên thành phố.
        //                                 Cô gái lên thành phố hoa lệ và va phải nhiều cạm bẫy khiến người cha phải giải cứu.
        //                                 Hành trình khiến hai cha con thêm hiểu nhau.
        //                             </p>
        //                             <br></br>
        //                             <p className="film-synopsis">Phân loại: T13 Phim phổ biến đến người xem từ 13 tuổi trở lên</p>
        //                             <br></br>
        //                             <p className="film-synopsis">Định dạng: 2D</p>
        //                             <br></br>
        //                             <p className="film-synopsis">Diễn viên: Cho Jung-seok, Lee Ju-myung</p>
        //                             <br></br>
        //                             <p className="film-synopsis">Thể loại: Comedy</p>
        //                             <br></br>
        //                             <p className="film-synopsis">Ngôn ngữ: Phụ đề</p>
        //                             <br />
        //                             <p className="film-synopsis">
        //                                 <SocialIcon href="www.github.com" />
        //                                 <SocialIcon url="https://twitter.com" />
        //                                 <SocialIcon url="https://facebook.com" />
        //                                 <SocialIcon url="https://pinterest.com" />
        //                             </p>
        //                             <div className="col-md-3 additional-info">
        //                                 <img
        //                                     src="https://www.bhdstar.vn/wp-content/uploads/2024/09/singlebanner2.jpg"
        //                                     alt="Additional Banner"
        //                                     className="additional-banner"
        //                                 />
        //                             </div>
        //                         </div>

        //                     )
        //                 })
        //             }





        //             {/* Phần thông tin thêm */}

        //         </div>
        //     </div>
        //     <div className="white-image">
        //         <img src="https://bhdstar.vn/wp-content/uploads/2024/09/Rectangle-27.png" />
        //     </div>
        // </div>

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
                        src="https://bhdstar.vn/wp-content/uploads/2024/04/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-14.jpg"
                        alt="Film Thumbnail"
                        className="img-thumbnail film-thumbnail"
                    />
                </div>

                {/* Phần thông tin phim */}
                {listMovies && listMovies.length > 0 && (
                    <div className="film-description col-md-5">
                        <h1 className="film-title">{listMovies[0].movieTitle}</h1>
                        <p className="film-synopsis">
                            {listMovies[0].movieDescription}
                        </p>
                        <br></br>
                        <p className="film-synopsis">Phân loại:{listMovies[0].movieGenre}</p>
                        <br></br>
                        <p className="film-synopsis">Định dạng: {listMovies[0].movieFormat}</p>
                        <br></br>
                        <p className="film-synopsis">Diễn viên: {listMovies[0].movieDirector}</p>
                        <br></br>
                        <p className="film-synopsis">Thể loại: {listMovies[0].movieGenre}</p>
                        <br></br>
                        <p className="film-synopsis">Ngôn ngữ: {listMovies[0].movieLanguage}</p>
                        <br />
                        <p className="film-synopsis">
                            <SocialIcon href="www.github.com" />
                            <SocialIcon url="https://twitter.com" />
                            <SocialIcon url="https://facebook.com" />
                            <SocialIcon url="https://pinterest.com" />
                        </p>
                    </div>
                )}

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
        <div className="white-image">
            <img src="https://bhdstar.vn/wp-content/uploads/2024/09/Rectangle-27.png" alt="White Image" />
        </div>
    </div>
    );
}

export default FilmDetails;

