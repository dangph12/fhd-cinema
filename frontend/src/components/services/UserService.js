import axios from "axios";
import axiosFormat from "./Customize-axios";

const fetchAllUser = () => {
  return axios.get("http://localhost:8080/movies");
};

const fetchMovieById = (movieId) => {
  return axios.get(`http://localhost:8080/movies/${movieId}`);
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
    const response = await axiosFormat.post("/auth/sign-in", { accountName, accountPassword });
    return response;
  } catch (error) {
    console.error("Lỗi khi gọi API:", error);
    throw error; // Để có thể xử lý lỗi ở nơi khác
  }
};



const fetchNews = () => {
  return axios.get("http://localhost:8080/news");
};

const fetchSnacks = () => {
  return axios.get("http://localhost:8080/snacks");
};

const fetchNewsById = (newsId) => {
  return axios.get(`http://localhost:8080/news/${newsId}`);
};

const fetchUsers = (customerId) => {
  return axios.get(`http://localhost:8080/customers/${customerId}`);
};

// const loginApi = (accountName) => {
//     return axiosFormat.post("/accounts", { accountName })
// }

export {
  fetchAllUser,
  fetchMovieById,
  fetchShowTime,
  loginApi,
  fetchShowTimeById,
  fetchNews,
  fetchNewsById,
  fetchSnacks,
  fetchUsers,
};
