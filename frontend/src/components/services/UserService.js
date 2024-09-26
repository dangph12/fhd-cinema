import axios from 'axios';

const fetchAllUser = () => {
    return axios.get("http://localhost:8080/movies")
}

const fetchMovieById = (movieId) => {
    return axios.get(`http://localhost:8080/movies/${movieId}`);
}

const fetchShowTime = (showtimeId) =>{
    return axios.get(`http://localhost:8080/showtimes`);
}

export { fetchAllUser, fetchMovieById, fetchShowTime }

