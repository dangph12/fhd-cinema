import axios from 'axios';
import axiosFormat from './Customize-axios'

const fetchAllUser = () => {
    return axios.get("http://localhost:8080/movies")
}

const fetchMovieById = (movieId) => {
    return axios.get(`http://localhost:8080/movies/${movieId}`);
}

// const fetchShowTime = (showtimeId) =>{
//     return axios.get(`http://localhost:8080/showtimes`);
// }
// const fetchShowTime = (showtimeId) => {
//     // return axios.get(`http://localhost:8080/showtimes?movieId=${movieId}`);
//     return axios.get(`http://localhost:8080/showtimes/${showtimeId}`);
// }

const  fetchShowTime = (movieId) => {
    // Sử dụng movieId để lọc các showtimes cho phim cụ thể
    return axios.get(`http://localhost:8080/showtimes?movieId=${movieId}`);
}

const fetchShowTimeById = (showtimeId) => {
    return axios.get(`http://localhost:8080/showtimes/${showtimeId}`);
}


const loginApi = (accountName, accountPassword) => {
    return axiosFormat.post("/accounts", {accountName, accountPassword})
}

const fetchNews = () => {
    return axios.get("http://localhost:8080/news")
}

const fetchNewsById = (newsId) => {
    return axios.get(`http://localhost:8080/news/${newsId}`);
}

// const loginApi = (accountName) => {
//     return axiosFormat.post("/accounts", { accountName })
// }

export { fetchAllUser, fetchMovieById, fetchShowTime, loginApi, fetchShowTimeById, fetchNews, fetchNewsById }

