// import React, { Component } from 'react';
// import CanvasJSReact from '@canvasjs/react-charts';

// var CanvasJSChart = CanvasJSReact.CanvasJSChart;



// class App extends Component {
    
//     constructor(props) {
//         super(props);
//         this.state = {
//             dataPoints: [],
//             isLoaded: false,
//             query: '', // Khởi tạo giá trị mặc định cho các biến này
//             currentPage: 1,
//             filters: {
//                 cinema: '',
//                 startDate: '',
//                 endDate: ''
//             },
//             pageSize: 10 // Đặt pageSize là 10 hoặc giá trị mong muốn
//         };
//     }

//     render() {
//         const options = {
//             theme: "light2",
//             title: {
//                 text: "Total Revenue by Movie"
//             },
//             axisY: {
//                 title: "Total Revenue",
//                 minimum: 0,
//                 interval: 50000
//             },
//             axisX: {
//                 title: "Movie Titles",
//                 labelAngle: -30
//             },
//             data: [{
//                 type: "column",
//                 xValueFormatString: "string",
//                 yValueFormatString: "#,##0.00",
//                 dataPoints: this.state.dataPoints
//             }]
//         };

//         return (
//             <div>
//                 {this.state.isLoaded && <CanvasJSChart options={options} />}
//             </div>
//         );
//     }

//     componentDidMount() {
//         // Định nghĩa các tham số truy vấn
//         const params = new URLSearchParams({
//             movieTitle: this.state.query,
//             page: this.state.currentPage,
//             cinemas: this.state.filters.cinema,
//             startDate: this.state.filters.startDate,
//             endDate: this.state.filters.endDate,
//             pageSize: this.state.pageSize,
//             sortBy: 'totalRevenue',
//             sortDirection: 'DESC'
//         });

//         // Gọi API với các tham số
//         fetch(`http://localhost:8080/sales/view?${params.toString()}`)
//             .then(response => response.json())
//             .then(data => {
//                 // Giả sử dữ liệu trả về từ API chứa các đối tượng với trường 'movieTitle' và 'totalRevenue'
//                 const dps = data.data.result.map(movieData => ({
//                     x: movieData.movieTitle, // Trục x là tiêu đề phim
//                     y: movieData.totalRevenue       // Trục y là tổng doanh thu từ cơ sở dữ liệu
//                 }));

//                 this.setState({
//                     isLoaded: true,
//                     dataPoints: dps
//                 });
//             })
//             .catch(error => {
//                 console.error("Error fetching data:", error);
//             });
//     }
// }

// export default App;

import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataPoints: [],
            isLoaded: false,
            query: '',
            currentPage: 1,
            filters: {
                cinema: '',
                startDate: '',
                endDate: ''
            },
            pageSize: 10
        };
    }

    render() {
        const options = {
            theme: "light2",
            title: {
                text: "Total Revenue By Movie"
            },
            axisY: {
                title: "Total Revenue",
                minimum: 0,
                interval: 50000
            },
            axisX: {
                title: "Movie Titles",
                labelAngle: -30
            },
            data: [{
                type: "column",
                yValueFormatString: "#,##0.00",
                dataPoints: this.state.dataPoints
            }]
        };

        return (
            <div>
                {this.state.isLoaded && <CanvasJSChart options={options} />}
            </div>
        );
    }

    componentDidMount() {
        // Định nghĩa các tham số truy vấn
        const params = new URLSearchParams({
            movieTitle: this.state.query,
            page: this.state.currentPage,
            cinemas: this.state.filters.cinema,
            startDate: this.state.filters.startDate,
            endDate: this.state.filters.endDate,
            pageSize: this.state.pageSize,
            sortBy: 'totalRevenue',
            sortDirection: 'DESC'
        });

        // Gọi API với các tham số
        fetch(`http://localhost:8080/sales/view?${params.toString()}`)
            .then(response => response.json())
            .then(data => {
                // Sử dụng `label` để đảm bảo trục x hiển thị tên phim thay vì số
                const dps = data.data.result.map(movieData => ({
                    label: movieData.movie.movieTitle,  // Đặt tên phim vào `label`
                    y: movieData.totalRevenue           // Tổng doanh thu vào `y`
                }));

                this.setState({
                    isLoaded: true,
                    dataPoints: dps
                });
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }
}

export default App;
