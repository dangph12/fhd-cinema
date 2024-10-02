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

const fetchShowTime = (movieId) => {
    // Sử dụng movieId để lọc các showtimes cho phim cụ thể
    return axios.get(`http://localhost:8080/showtimes?movieId=${movieId}`);
}

const fetchShowTimeById = (showtimeId) => {
    return axios.get(`http://localhost:8080/showtimes/${showtimeId}`);
}

const loginApi = (email, password) => {
    return axios.post(`http://localhost:8080/accounts/${email}/${password}`)
}

export { fetchAllUser, fetchMovieById, fetchShowTime, loginApi }

