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
import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap';
import ReactTable from '@/components/Table'; // Ensure this component exists
import { MovieContext } from '../context/MovieContext';
import DeleteMovieModal from '../modals/DeleteMovieModal';
import CreateMovieModal from '../modals/CreateMovieModal';
import UpdateMovieModal from '../modals/UpdateMovieModal';
import MovieDetailModal from '../modals/MovieDetailModal';
import MoviePagination from '../components/MoviePagination';

const MovieDetailTable = () => {
  const { state, dispatch, fetchMovies, updateQueryParams } = useContext(MovieContext);
  const [showDeleteModal, setShowDeleteModal] = useState({ movieId: null, show: false });
  const [showUpdateModal, setShowUpdateModal] = useState({ movieId: null, show: false });
  const [showDetailModal, setShowDetailModal] = useState({ movieId: null, show: false });
  const [showCreateModal, setShowCreateModal] = useState({ show: false });

  useEffect(() => {
    // Gọi fetchMovies lần đầu khi component được render
    fetchMovies({ 
      page: state.currentPage, 
      pageSize: state.pageSize, 
      query: state.query, 
      ratings: state.filters.join(','), 
      sortBy: 'movieReleaseDate', 
      sortDirection: 'DESC' 
    });
  }, [state.currentPage, state.query, state.filters]);

  const columns = [
    {
      id: 'detail',
      header: 'Detail',
      cell: ({ row: { original: { movieId } } }) => (
        <Button variant="info" onClick={() => setShowDetailModal({ movieId, show: true })}>
          Detail
        </Button>
      ),
    },
    {
      header: 'Movie Title',
      accessorKey: 'movieTitle',
    },
    {
      header: 'Movie Status',
      accessorKey: 'movieStatus',
    },
    {
      header: 'Rating',
      accessorKey: 'rating.ratingName',
    },
    {
      id: 'update',
      header: 'Update',
      cell: ({ row: { original: { movieId } } }) => (
        <Button variant="warning" onClick={() => setShowUpdateModal({ movieId, show: true })}>
          Update
        </Button>
      ),
    },
    {
      id: 'delete',
      header: 'Delete',
      cell: ({ row: { original: { movieId } } }) => (
        <Button variant="danger" onClick={() => setShowDeleteModal({ movieId, show: true })}>
          Delete
        </Button>
      ),
    },
  ];

  if (!state || !state.movies) {
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
                  <CardTitle as="h4">Movie Details</CardTitle>
                </Col>
                <Col className="text-end">
                  <Button className="btn btn-primary" onClick={() => setShowCreateModal({ show: true })}>
                    Create movie
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              {/* Movie Table */}
              <ReactTable columns={columns} data={state.movies} />
              {/* Pagination Controls */}
              {/* <MoviePagination
                state={state}
                dispatch={dispatch}
                fetch={fetchMovies}
                updateQueryParams={updateQueryParams}
              /> */}
            </CardBody>
          </Card>
        </Col>
      </Row>
      <DeleteMovieModal
        movieId={showDeleteModal.movieId}
        show={showDeleteModal.show}
        fetchMovies={fetchMovies}
        onHide={() => setShowDeleteModal({ movieId: null, show: false })}
      />
      <CreateMovieModal
        show={showCreateModal.show}
        fetchMovies={fetchMovies}
        onHide={() => setShowCreateModal({ show: false })}
      />
      <UpdateMovieModal
        movieId={showUpdateModal.movieId}
        show={showUpdateModal.show}
        fetchMovies={fetchMovies}
        onHide={() => setShowUpdateModal({ movieId: null, show: false })}
      />
      <MovieDetailModal
        movieId={showDetailModal.movieId}
        show={showDetailModal.show}
        onHide={() => setShowDetailModal({ movieId: null, show: false })}
      />
    </Container>
  );
};

export default MovieDetailTable;