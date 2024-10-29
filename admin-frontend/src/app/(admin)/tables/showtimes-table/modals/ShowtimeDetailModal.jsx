// import React, { useState, useEffect, useContext } from 'react'
// import { Modal, Form, Button } from 'react-bootstrap'
// import { ShowtimeContext } from '../context/ShowtimeContext'

// function ShowtimeDetailModal({ showtimeId, show, onHide }) {
//   const { state } = useContext(ShowtimeContext)
//   const [detailShow, setDetailShow] = useState(false)
//   const [selectedShowtime, setSelectedShowtime] = useState({
//     movieTitle: '',
//     screenName: '',
//     showtimePrice: '',
//     showtimeAt: '',
//   })

//   useEffect(() => {
//     setDetailShow(show)
//   }, [show])

//   useEffect(() => {
//     if (showtimeId) {
//       const showtime = state.showtimes.find((showtime) => showtime.showtimeId === showtimeId)

//       const movie = state.movies.find((movie) => movie.movieId === showtime.movieId)

//       const screen = state.screens.find((screen) => screen.screenId === showtime.screenId)

//       const fetchMovieByMovieId = (movieId) => {
//         const movieApiUrl = `http://localhost:8080/movies/${movieId}`;
//         fetch(movieApiUrl)
//           .then((response) => response.json())
//           .then((json) => dispatch({ type: 'SET_MOVIES', payload: json.data }))
//           .catch((error) => console.error('Error fetching movies:', error));
//       };

//       const fetchScreenByScreenId = (screenId) => {
//         const screenApiUrl = `http://localhost:8080/screens/${screenId}`;
//         fetch(screenApiUrl)
//           .then((response) => response.json())
//           .then((json) => dispatch({ type: 'SET_SCREENS', payload: json.data }))
//           .catch((error) => console.error('Error fetching screens:', error));
//       };

//       setSelectedShowtime({
//         movieTitle: fetchMovieByMovieId(movie.movieId),
//         screenName: fetchScreenByScreenId(screen.screenId),
//         showtimePrice: showtime.showtimePrice,
//         showtimeAt: showtime.showtimeAt,
//       })
//     }
//   }, [showtimeId])

//   const closeDetailShow = () => {
//     onHide()
//     setDetailShow(false)
//     setSelectedShowtime({
//       movieTitle: '',
//       screenName: '',
//       showtimePrice: '',
//       showtimeAt: '',
//     })
//   }

//   return (
//     <Modal show={detailShow} onHide={() => closeDetailShow()}>
//       <Modal.Header closeButton>
//         <Modal.Title>Detail Modal</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form id="detailForm">

//           {/* Movie Title */}
//           <Form.Group className="m-2">
//             <Form.Label>Movie Title</Form.Label>
//             <Form.Control readOnly type="text" value={selectedShowtime.movieTitle} />
//           </Form.Group>

//           {/* Screen Name */}
//           <Form.Group className="m-2">
//             <Form.Label>Screen Name</Form.Label>
//             <Form.Control readOnly type="text" value={selectedShowtime.screenName} />
//           </Form.Group>

//           {/* Showtime Price */}
//           <Form.Group className="m-2">
//             <Form.Label>Showtime Price</Form.Label>
//             <Form.Control readOnly type="text" value={selectedShowtime.showtimePrice} />
//           </Form.Group>

//           {/* Showtime At */}
//           <Form.Group className="m-2">
//             <Form.Label>Showtime At</Form.Label>
//             <Form.Control readOnly type="text" value={selectedShowtime.showtimeAt} />
//           </Form.Group>

//         </Form>
//       </Modal.Body>
//       <Modal.Footer></Modal.Footer>
//     </Modal>
//   )
// }

// export default ShowtimeDetailModal


// import React, { useState, useEffect, useContext } from 'react'
// import { Modal, Form, Button } from 'react-bootstrap'
// import { ShowtimeContext } from '../context/ShowtimeContext'

// function ShowtimeDetailModal({ showtimeId, show, onHide }) {
//   const { state } = useContext(ShowtimeContext)
//   const [detailShow, setDetailShow] = useState(false)
//   const [selectedShowtime, setSelectedShowtime] = useState({
//     movieTitle: '',
//     screenName: '',
//     showtimePrice: '',
//     showtimeAt: '',
//   })

//   useEffect(() => {
//     setDetailShow(show)
//   }, [show])

//   useEffect(() => {
//     if (showtimeId) {
//       // Lấy showtime tương ứng với showtimeId
//       const showtime = state.showtimes.find((showtime) => showtime.showtimeId === showtimeId)

//       if (showtime) {
//         // Lấy movie tương ứng với movieId từ state.movies
//         const movie = state.movies.find((movie) => movie.movieId === showtime.movieId)

//         // Lấy screen tương ứng với screenId từ state.screens
//         const screen = state.screens.find((screen) => screen.screenId === showtime.screenId)
//         console.log("Test: ", screen)

//         // Cập nhật thông tin selectedShowtime với movieTitle, screenName, showtimePrice, showtimeAt
//         setSelectedShowtime({
//           movieTitle: movie ? movie.movieTitle : 'Unknown Movie', // Đảm bảo movie tồn tại
//           screenName: screen ? screen.screenName : 'Unknown Screen', // Đảm bảo screen tồn tại
//           showtimePrice: showtime.showtimePrice,
//           showtimeAt: showtime.showtimeAt,
//         })
//       }
//     }
//   }, [showtimeId, state.showtimes, state.movies, state.screens])

//   const closeDetailShow = () => {
//     onHide()
//     setDetailShow(false)
//     setSelectedShowtime({
//       movieTitle: '',
//       screenName: '',
//       showtimePrice: '',
//       showtimeAt: '',
//     })
//   }

//   return (
//     <Modal show={detailShow} onHide={() => closeDetailShow()}>
//       <Modal.Header closeButton>
//         <Modal.Title>Detail Modal</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form id="detailForm">
//           {/* Movie Title */}
//           <Form.Group className="m-2">
//             <Form.Label>Movie Title</Form.Label>
//             <Form.Control readOnly type="text" value={selectedShowtime.movieTitle} />
//           </Form.Group>

//           {/* Screen Name */}
//           <Form.Group className="m-2">
//             <Form.Label>Screen Name</Form.Label>
//             <Form.Control readOnly type="text" value={selectedShowtime.screenName} />
//           </Form.Group>

//           {/* Showtime Price */}
//           <Form.Group className="m-2">
//             <Form.Label>Showtime Price</Form.Label>
//             <Form.Control readOnly type="text" value={selectedShowtime.showtimePrice} />
//           </Form.Group>

//           {/* Showtime At */}
//           <Form.Group className="m-2">
//             <Form.Label>Showtime At</Form.Label>
//             <Form.Control readOnly type="text" value={selectedShowtime.showtimeAt} />
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer></Modal.Footer>
//     </Modal>
//   )
// }

// export default ShowtimeDetailModal


import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form } from 'react-bootstrap'
import { ShowtimeContext } from '../context/ShowtimeContext'

function ShowtimeDetailModal({ showtimeId, show, onHide }) {
  const { state, dispatch } = useContext(ShowtimeContext) // Ensure dispatch is used here
  const [detailShow, setDetailShow] = useState(false)
  const [selectedShowtime, setSelectedShowtime] = useState({
    movieTitle: '',
    screenName: '',
    showtimePrice: '',
    showtimeAt: '',
  })

  useEffect(() => {
    setDetailShow(show)
  }, [show])

  useEffect(() => {
    const fetchShowtimeDetails = () => {
      if (showtimeId) {
        const showtime = state.showtimes.find((showtime) => showtime.showtimeId === showtimeId)
        setSelectedShowtime({
          movieTitle: showtime.movie.movieTitle,
          screenName: showtime.screen.screenName + ' - ' + showtime.screen.cinema.cinemaName,
          showtimePrice: showtime.showtimePrice,
          showtimeAt: showtime.showtimeAt,
        })
      }
    }
    fetchShowtimeDetails()
  }, [showtimeId])

  const closeDetailShow = () => {
    onHide()
    setDetailShow(false)
    setSelectedShowtime({
      movieTitle: '',
      screenName: '',
      showtimePrice: '',
      showtimeAt: '',
    })
  }

  return (
    <Modal show={detailShow} onHide={() => closeDetailShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Detail Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="detailForm">
          {/* Movie Title */}
          <Form.Group className="m-2">
            <Form.Label>Movie Title</Form.Label>
            <Form.Control readOnly type="text" value={selectedShowtime.movieTitle} />
          </Form.Group>

          {/* Screen Name */}
          <Form.Group className="m-2">
            <Form.Label>Screen Name</Form.Label>
            <Form.Control readOnly type="text" value={selectedShowtime.screenName} />
          </Form.Group>

          {/* Showtime Price */}
          <Form.Group className="m-2">
            <Form.Label>Showtime Price</Form.Label>
            <Form.Control readOnly type="text" value={selectedShowtime.showtimePrice} />
          </Form.Group>

          {/* Showtime At */}
          <Form.Group className="m-2">
            <Form.Label>Showtime At</Form.Label>
            <Form.Control readOnly type="text" value={selectedShowtime.showtimeAt} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default ShowtimeDetailModal