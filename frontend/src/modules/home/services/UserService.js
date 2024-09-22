import axios from 'axios';

const fetchAllUser = () => {
    return axios.get("http://localhost:8080/movies")
}

export { fetchAllUser }