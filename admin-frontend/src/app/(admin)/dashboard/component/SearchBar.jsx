import React, { useContext, useState } from 'react';
import { Form, FormControl, Container, Row, Col } from 'react-bootstrap';
import AsyncSelect from 'react-select/async';
import { SaleContext } from '../context/SaleContext';

const SearchBar = () => {
  const { state, dispatch, fetchBookings } = useContext(SaleContext);
  const [inputValue, setInputValue] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null); // Trạng thái lưu phim đã chọn

  // Hàm xử lý thay đổi cho các trường nhập liệu khác
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    dispatch({ type: 'SET_FILTERS', payload: { [name]: value } });
  };

  // Hàm xử lý khi chọn một phim trong dropdown
  const handleSelectMovie = (selectedOption) => {
    if (selectedOption) {
      setSelectedMovie(selectedOption); // Lưu phim đã chọn vào trạng thái
      dispatch({ type: 'SET_FILTERS', payload: { movieId: selectedOption.value } });
    } else {
      // Nếu chọn "All Movies" hoặc xóa lựa chọn, đặt về null
      setSelectedMovie(null);
      dispatch({ type: 'SET_FILTERS', payload: { movieId: '' } });
    }
    fetchBookings(); // Cập nhật kết quả tìm kiếm với movieId mới
  };

  // Hàm load dữ liệu phim cho AsyncSelect với API tìm kiếm tiêu đề phim
  const loadMovies = async (inputValue) => {
    try {
      const response = await fetch(`http://localhost:8080/movies?search=${inputValue}&pageSize=10`);
      const json = await response.json();

      // Kiểm tra nếu json.data.result tồn tại và là một mảng
      if (json.data && Array.isArray(json.data.result)) {
        const options = json.data.result.map(movie => ({
          label: movie.movieTitle, // Hiển thị tiêu đề phim trong dropdown
          value: movie.movieId,    // Sử dụng movieId để gửi vào API khi chọn
        }));
        // Thêm tùy chọn "All Movies" ở đầu danh sách
        return [{ label: 'All Movies', value: '' }, ...options];
      } else {
        console.warn('Unexpected data format:', json);
        return [{ label: 'All Movies', value: '' }];
      }
    } catch (error) {
      console.error('Error fetching movies:', error);
      return [{ label: 'All Movies', value: '' }];
    }
  };

  return (
    <Container className="pt-3">
      <Row>
        <Col md={4}>
          <AsyncSelect
            cacheOptions
            loadOptions={loadMovies}
            onChange={handleSelectMovie}
            onInputChange={setInputValue}
            value={selectedMovie} // Sử dụng trạng thái selectedMovie để hiển thị tên phim đã chọn hoặc "All Movies"
            placeholder="Search by movie title"
            isClearable // Cho phép xóa lựa chọn
          />
        </Col>
        <Col md={4}>
          <FormControl
            type="date"
            name="startDate"
            placeholder="Start Date"
            onChange={handleInputChange}
          />
        </Col>
        <Col md={4}>
          <FormControl
            type="date"
            name="endDate"
            placeholder="End Date"
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={4}>
          <Form.Select name="cinemaId" onChange={handleInputChange}>
            <option value="">All Cinemas</option>
            {state.cinemas.map((cinema) => (
              <option key={cinema.cinemaId} value={cinema.cinemaId}>
                {cinema.cinemaName}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={4}>
          <FormControl
            placeholder="Enter booking ID"
            name="bookingId"
            onChange={handleInputChange}
          />
        </Col>
        <Col md={4}>
          <FormControl
            placeholder="Customer Phone"
            name="customerPhone"
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row className="mt-3">
        <Col md={4}>
          <FormControl
            placeholder="Customer Email"
            name="customerEmail"
            onChange={handleInputChange}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default SearchBar;
