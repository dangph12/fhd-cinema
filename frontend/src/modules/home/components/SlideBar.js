import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function SlideBar() {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 4,
            slideToSlide: 3
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <div>
            <div class="grid">
                <div class="hot-series">
                    <div class="hot-label">
                        <h2 class="title-heading">
                            <h3 class="hot-series">Hot Series</h3>
                        </h2>
                    </div>
                    <Carousel responsive={responsive}>
                        <div className="card">
                            <img className="product--image" src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-9.jpg" />
                            {/* <h2>Ma Da</h2>
                            <p className="price">$14</p> */}
                        </div>
                        <div className="card">
                            <img className="product--image" src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-2.jpg" />
                            {/* <h2>Ma Da</h2>
                            <p className="price">$14</p> */}
                        </div>
                        <div className="card">
                            <img className="product--image" src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-10.jpg" />
                            {/* <h2>Ma Da</h2>
                            <p className="price">$14</p> */}
                        </div>
                        <div className="card">
                            <img className="product--image" src="https://bhdstar.vn/wp-content/uploads/2024/08/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-3.png" />
                            {/* <h2>Ma Da</h2>
                            <p className="price">$14</p> */}
                        </div>
                        <div className="card">
                            <img className="product--image" src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-13.jpg" />
                            {/* <h2>Ma Da</h2>
                            <p className="price">$14</p> */}
                        </div>
                        <div className="card">
                            <img className="product--image" src="https://bhdstar.vn/wp-content/uploads/2024/09/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp.png" />
                            {/* <h2>Ma Da</h2>
                            <p className="price">$14</p> */}
                        </div>
                        <div className="card">
                            <img className="product--image" src="https://bhdstar.vn/wp-content/uploads/2024/08/referenceSchemeHeadOfficeallowPlaceHoldertrueheight700ldapp-21.jpg" />
                            {/* <h2>Ma Da</h2>
                            <p className="price">$14</p> */}
                        </div>
                    </Carousel>;
                </div>
            </div>
        </div>
    )
}
export default SlideBar

