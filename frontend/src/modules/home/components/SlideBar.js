import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function SlideBar() {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 3,
            slideToSlide: 3
        },
        desktop: {
            breakpoint: { max: 1024, min: 500 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 500, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <div className="grid">
                <div className="hot-series">
                    <div className="hot-label">
                        <h2 className="title-heading">
                            <h2 className="hot-series">Hot Series</h2>
                        </h2>
                    </div>
                    <Carousel responsive={responsive}>
                        <div className="card">
                            <img className="product--image" src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-9.jpg" />
                        </div>
                        <div className="card">
                            <img className="product--image" src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-2.jpg" />
                        </div>
                        <div className="card">
                            <img className="product--image" src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-10.jpg" />
                        </div>
                        <div className="card">
                            <img className="product--image" src="https://bhdstar.vn/wp-content/uploads/2024/08/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-3.png" />
                        </div>
                        <div className="card">
                            <img className="product--image" src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-13.jpg" />
                        </div>
                        <div className="card">
                            <img className="product--image" src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.png" />
                        </div>
                        <div className="card">
                            <img className="product--image" src="https://bhdstar.vn/wp-content/uploads/2024/08/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-21.jpg" />
                        </div>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
export default SlideBar;
