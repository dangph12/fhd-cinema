// import React, { useState, useContext, useEffect } from 'react';
// import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap';
// import ReactTable from '@/components/Table';
// import { ShowtimeContext } from '../context/ShowtimeContext';
// import DeleteShowtimeModal from '../modals/DeleteShowtimeModal';
// import CreateShowtimeModal from '../modals/CreateShowtimeModal';
// import UpdateShowtimeModal from '../modals/UpdateShowtimeModal';
// import ShowtimeDetailModal from '../modals/ShowtimeDetailModal';
// import TablePagination from '../../common/TablePagination';

// const ShowtimeDetailTable = () => {
//   const { state, dispatch, fetchShowtimes, updateQueryParams } = useContext(ShowtimeContext);
//   const [showDeleteModal, setShowDeleteModal] = useState({ showtimeId: null, show: false });
//   const [showUpdateModal, setShowUpdateModal] = useState({ showtimeId: null, show: false });
//   const [showDetailModal, setShowDetailModal] = useState({ showtimeId: null, show: false })
//   const [showCreateModal, setShowCreateModal] = useState({ show: false });

//   const columns = [
//     {
//       id: 'detail',
//       header: 'Detail',
//       cell: ({
//         row: {
//           original: { showtimeId },
//         },
//       }) => (
//         <Button variant="info" onClick={() => setShowDetailModal({ showtimeId, show: true })}>
//           Detail
//         </Button>
//       ),
//     },
//     {
//       header: 'Showtime Name',
//       accessorKey: 'showtimeId',
//     },
//     {
//       header: 'Showtime Type',
//       accessorKey: 'showtimePrice',
//     },
//     {
//       header: 'Showtime Type',
//       accessorKey: 'showtimeAt',
//     },
//     {
//       id: 'update',
//       header: 'Update',
//       cell: ({
//         row: {
//           original: { showtimeId },
//         },
//       }) => (
//         <Button variant="warning" onClick={() => setShowUpdateModal({ showtimeId, show: true })}>
//           Update
//         </Button>
//       ),
//     },
//     {
//       id: 'delete',
//       header: 'Delete',
//       cell: ({
//         row: {
//           original: { showtimeId },
//         },
//       }) => (
//         <Button variant="danger" onClick={() => setShowDeleteModal({ showtimeId, show: true })}>
//           Delete
//         </Button>
//       ),
//     },
//   ];

//   if (!state || !state.showtimes) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col xs={12}>
//           <Card>
//             <CardHeader>
//               <Row className="align-items-center">
//                 <Col>
//                   <CardTitle as="h4">Showtimes Details</CardTitle>
//                 </Col>
//                 <Col className="text-end">
//                   <Button className="btn btn-primary" onClick={() => setShowCreateModal({ show: true })}>
//                     Create showtime
//                   </Button>
//                 </Col>
//               </Row>
//             </CardHeader>
//             <CardBody className="pt-0">
//               {/* Showtimes Table */}
//               <ReactTable columns={columns} data={state.showtimes} />
//               <TablePagination state={state} dispatch={dispatch} fetch={fetchShowtimes} updateQueryParams={updateQueryParams} />
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//       <DeleteShowtimeModal
//         showtimeId={showDeleteModal.showtimeId}
//         show={showDeleteModal.show}
//         fetchShowtimes={fetchShowtimes}
//         onHide={() => setShowDeleteModal({ showtimeId: null, show: false })}
//       />
//       <CreateShowtimeModal
//         show={showCreateModal.show}
//         fetchShowtimes={fetchShowtimes}
//         onHide={() => setShowCreateModal({ show: false })}
//       />
//       <UpdateShowtimeModal
//         showtimeId={showUpdateModal.showtimeId}
//         show={showUpdateModal.show}
//         fetchShowtimes={fetchShowtimes}
//         onHide={() => setShowUpdateModal({ showtimeId: null, show: false })}
//       />
//       <ShowtimeDetailModal
//         showtimeId={showDetailModal.showtimeId}
//         show={showDetailModal.show}
//         onHide={() => setShowDetailModal({ showtimeId: null, show: false })}
//       />
//     </Container>
//   );
// };

// export default ShowtimeDetailTable;


// import React, { useState, useContext } from 'react'
// import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap'
// import ReactTable from '@/components/Table'
// import { MovieContext } from '../context/MovieContext'
// import DeleteMovieModal from '../modals/DeleteMovieModal'
// import CreateMovieModal from '../modals/CreateMovieModal'
// import UpdateMovieModal from '../modals/UpdateMovieModal'
// import MovieDetailModal from '../modals/MovieDetailModal'

// const MovieDetailTable = () => {
//   const { state, fetchMovies } = useContext(MovieContext)
//   const [showDeleteModal, setShowDeleteModal] = useState({ movieId: null, show: false })
//   const [showUpdateModal, setShowUpdateModal] = useState({ movieId: null, show: false })
//   const [showDetailModal, setShowDetailModal] = useState({ movieId: null, show: false })
//   const [showCreateModal, setShowCreateModal] = useState({ show: false })

//   const columns = [
//     {
//       id: 'detail',
//       header: 'Detail',
//       cell: ({
//         row: {
//           original: { movieId },
//         },
//       }) => (
//         <Button variant="info" onClick={() => setShowDetailModal({ movieId, show: true })}>
//           Detail
//         </Button>
//       ),
//     },
//     {
//       header: 'Movie Title',
//       accessorKey: 'movieTitle',
//     },
//     {
//       header: 'Movie Status',
//       accessorKey: 'movieStatus',
//     },
//     {
//       header: 'Movie Rating',
//       accessorKey: 'rating.ratingDescription',
//     },
//     {
//       id: 'update',
//       header: 'Update',
//       cell: ({
//         row: {
//           original: { movieId },
//         },
//       }) => (
//         <Button variant="warning" onClick={() => setShowUpdateModal({ movieId, show: true })}>
//           Update
//         </Button>
//       ),
//     },
//     {
//       id: 'delete',
//       header: 'Delete',
//       cell: ({
//         row: {
//           original: { movieId },
//         },
//       }) => (
//         <Button variant="danger" onClick={() => setShowDeleteModal({ movieId, show: true })}>
//           Delete
//         </Button>
//       ),
//     },
//   ]
//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col xs={12}>
//           <Card>
//             <CardHeader>
//               <Row className="align-items-center">
//                 <Col>
//                   <CardTitle as="h4">Movies Details</CardTitle>
//                 </Col>
//                 <Col className="text-end">
//                   <Button className="btn btn-primary" onClick={() => setShowCreateModal({ show: true })}>
//                     Create movie
//                   </Button>
//                 </Col>
//               </Row>
//             </CardHeader>
//             <CardBody className="pt-0">
//               {/* Movies Table */}
//               <ReactTable columns={columns} data={state.movies} />
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//       <DeleteMovieModal
//         movieId={showDeleteModal.movieId}
//         show={showDeleteModal.show}
//         fetchMovies={fetchMovies}
//         onHide={() => setShowDeleteModal({ movieId: null, show: false })}
//       />
//       <CreateMovieModal show={showCreateModal.show} onHide={() => setShowCreateModal({ show: false })} />
//       <UpdateMovieModal
//         movieId={showUpdateModal.movieId}
//         show={showUpdateModal.show}
//         fetchMovies={fetchMovies}
//         onHide={() => setShowUpdateModal({ movieId: null, show: false })}
//       />
//       <MovieDetailModal
//         movieId={showDetailModal.movieId}
//         show={showDetailModal.show}
//         onHide={() => setShowDetailModal({ movieId: null, show: false })}
//       />
//     </Container>
//   )
// }

// export default MovieDetailTable


import React, { useState, useContext, useEffect } from 'react';
import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle, Table } from 'react-bootstrap';
import ReactTable from '@/components/Table'; // Ensure this component exists
import { ShowtimeContext } from '../context/ShowtimeContext';
import DeleteShowtimeModal from '../modals/DeleteShowtimeModal';
import CreateShowtimeModal from '../modals/CreateShowtimeModal';
import UpdateShowtimeModal from '../modals/UpdateShowtimeModal';
import ShowtimeDetailModal from '../modals/ShowtimeDetailModal';
import TablePagination from '../../common/TablePagination';

const ShowtimeDetailTable = () => {
  const { state, dispatch, fetchShowtimes, updateQueryParams } = useContext(ShowtimeContext);
  const [showDeleteModal, setShowDeleteModal] = useState({ showtimeId: null, show: false });
  const [showUpdateModal, setShowUpdateModal] = useState({ showtimeId: null, show: false });
  const [showDetailModal, setShowDetailModal] = useState({ showtimeId: null, show: false });
  const [showCreateModal, setShowCreateModal] = useState({ show: false });

  const columns = [
    {
      id: 'detail',
      header: 'Detail',
      cell: ({ row: { original: { showtimeId } } }) => (
        <Button variant="info" onClick={() => setShowDetailModal({ showtimeId, show: true })}>
          Detail
        </Button>
      ),
    },
    {
      header: 'Movie Title',
      accessorKey: 'movie.movieTitle',
    },
    {
      header: 'Screen - Cinema Name',
      assessorKey: 'screenNameAndCinemaName',
      cell: ({ row }) => `${row.original.screen.screenName} - ${row.original.screen.cinema.cinemaName}`,
    },
    {
      header: 'Showtime Price',
      accessorKey: 'showtimePrice',
    },
    {
      header: 'Showtime At',
      accessorKey: 'showtimeAt',
    },
    {
      id: 'update',
      header: 'Update',
      cell: ({ row: { original: { showtimeId } } }) => (
        <Button variant="warning" onClick={() => setShowUpdateModal({ showtimeId, show: true })}>
          Update
        </Button>
      ),
    },
    {
      id: 'delete',
      header: 'Delete',
      cell: ({ row: { original: { showtimeId } } }) => (
        <Button variant="danger" onClick={() => setShowDeleteModal({ showtimeId, show: true })}>
          Delete
        </Button>
      ),
    },
  ];

  if (!state || !state.showtimes) {
    return <div>Loading...</div>;
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12}>
          <Card>
            <CardHeader>
              <Row className="align-items-center">
                <Col>
                  <CardTitle as="h4">Showtime Details</CardTitle>
                </Col>
                <Col className="text-end">
                  <Button className="btn btn-primary" onClick={() => setShowCreateModal({ show: true })}>
                    Create showtime
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              {/* Showtimes Table */}
              <ReactTable columns={columns} data={state.showtimes} />
              {/* Pagination Controls */}
              <TablePagination
                state={state}
                dispatch={dispatch}
                fetch={fetchShowtimes}
                updateQueryParams={updateQueryParams}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <DeleteShowtimeModal
        showtimeId={showDeleteModal.showtimeId}
        show={showDeleteModal.show}
        fetchShowtimes={fetchShowtimes}
        onHide={() => setShowDeleteModal({ showtimeId: null, show: false })}
      />
      <CreateShowtimeModal
        show={showCreateModal.show}
        fetchShowtimes={fetchShowtimes}
        onHide={() => setShowCreateModal({ show: false })}
      />
      <UpdateShowtimeModal
        showtimeId={showUpdateModal.showtimeId}
        show={showUpdateModal.show}
        fetchShowtimes={fetchShowtimes}
        onHide={() => setShowUpdateModal({ showtimeId: null, show: false })}
      />
      <ShowtimeDetailModal
        showtimeId={showDetailModal.showtimeId}
        show={showDetailModal.show}
        onHide={() => setShowDetailModal({ showtimeId: null, show: false })}
      />
    </Container>
  );
};

export default ShowtimeDetailTable;