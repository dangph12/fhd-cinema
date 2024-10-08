import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { fetchAllUser } from "../../../components/services/UserService";

function SlideBar() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
      slideToSlide: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 500 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 500, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const buttonStyle = {
    border: '2px solid #8bc34a', // green border
    borderRadius: '15px', // rounded corners
    padding: '10px 20px', // padding for the button
    color: '#8bc34a', // green text
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: 'transparent', // no background
    display: 'inline-block', // button behavior
    marginBottom: '30px',
  };


  const [listMovies, setListMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    let res = await fetchAllUser();
    if (res && res.data) {
      setListMovies(res.data.data);
    }
  };

  return (
    <div>
      <div className="grid">
        <div className="hot-series">
          <div className="hot-label">
            <h2 className="">
              <button style={buttonStyle}>NOW SHOWING/SNEAK SHOW</button>
            </h2>
          </div>
          <Carousel responsive={responsive}>
            {listMovies &&
              listMovies.length > 0 &&
              listMovies.map((items, index) => {
                return (
                  <div className="card">
                    <img
                      className="product--image"
                      src={items.moviePosterUrl}
                    />
                  </div>
                );
              })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default SlideBar;
