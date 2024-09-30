import axios from 'axios';

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


export { fetchAllUser, fetchMovieById, fetchShowTime }

