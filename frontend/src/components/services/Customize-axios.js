import axios from "axios";

    const instance = axios.create({
        baseURL: 'http://localhost:8080'
    });



// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data ? response.data : {statusCode : response.status};
}, function (error) {
    console.log(">>> check res", error.name);
    console.log(">>> check res", error.message);
    
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
});

export default instance;


// import axios from "axios";

// const instance = axios.create({
//     baseURL: 'http://localhost:8080'
// });

// // Thêm interceptor để xử lý phản hồi
// instance.interceptors.response.use(function (response) {
//     return response.data ? response.data : { statusCode: response.status };
// }, function (error) {
//     console.error("Error:", error);
//     return Promise.reject(error);
// });

// export default instance;
