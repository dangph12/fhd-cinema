import axios from "axios";
import axiosFormat from "./Customize-axios";

const fetchAllUser = () => {
  return axios.get("http://localhost:8080/movies");
};

const fetchMovieById = (movieId) => {
  return axios.get(`http://localhost:8080/movies/${movieId}`);
};

const fetchAllMovies = () => {
  return axios.get(`http://localhost:8080/movies`);
};

// const fetchShowTime = (showtimeId) =>{
//     return axios.get(`http://localhost:8080/showtimes`);
// }
// const fetchShowTime = (showtimeId) => {
//     // return axios.get(`http://localhost:8080/showtimes?movieId=${movieId}`);
//     return axios.get(`http://localhost:8080/showtimes/${showtimeId}`);
// }

const fetchShowTime = (movieId) => {
  // Sử dụng movieId để lọc các showtimes cho phim cụ thể
  return axios.get(`http://localhost:8080/showtimes?movieId=${movieId}`);
};

const fetchShowTimeById = (showtimeId) => {
  return axios.get(`http://localhost:8080/showtimes/${showtimeId}`);
};

// const loginApi = (accountName, accountPassword) => {
//   return axiosFormat.post("/auth/sign-in", { accountName, accountPassword });
// };

const loginApi = async (accountName, accountPassword) => {
  try {
    const response = await axiosFormat.post("/auth/sign-in", {
      accountName,
      accountPassword,
    });
    return response;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error;
  }
};

const fetchNews = () => {
  return axios.get("http://localhost:8080/news");
};

const fetchSnacks = () => {
  return axios.get("http://localhost:8080/snacks");
};

// news details
const fetchNewsById = (news_category_id) => {
  return axios.get(`http://localhost:8080/news/${news_category_id}`);
};

 const fetchShowTime2= async (movieId) => {
  return await axios.get(`http://localhost:8080/movies/${movieId}/showtimes`);
};


export {
  fetchAllUser,
  fetchMovieById,
  fetchShowTime,
  loginApi,
  fetchShowTimeById,
  fetchNews,
  fetchNewsById,
  fetchSnacks,
  fetchAllMovies,
  fetchShowTime2
};
