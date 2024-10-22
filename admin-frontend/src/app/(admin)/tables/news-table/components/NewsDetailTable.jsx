// import React, { useState, useContext, useEffect } from 'react';
// import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap';
// import ReactTable from '@/components/Table';
// import { NewsContext } from '../context/NewsContext';
// import DeleteNewsModal from '../modals/DeleteNewsModal';
// import CreateNewsModal from '../modals/CreateNewsModal';
// import UpdateNewsModal from '../modals/UpdateNewsModal';
// import NewsDetailModal from '../modals/NewsDetailModal';
// import TablePagination from '../../common/TablePagination';

// const NewsDetailTable = () => {
//   const { state, dispatch, fetchNews, updateQueryParams } = useContext(NewsContext);
//   const [showDeleteModal, setShowDeleteModal] = useState({ newsId: null, show: false });
//   const [showUpdateModal, setShowUpdateModal] = useState({ newsId: null, show: false });
//   const [showDetailModal, setShowDetailModal] = useState({ newsId: null, show: false })
//   const [showCreateModal, setShowCreateModal] = useState({ show: false });

//   const columns = [
//     {
//       id: 'detail',
//       header: 'Detail',
//       cell: ({
//         row: {
//           original: { newsId },
//         },
//       }) => (
//         <Button variant="info" onClick={() => setShowDetailModal({ newsId, show: true })}>
//           Detail
//         </Button>
//       ),
//     },
//     {
//       header: 'News Title',
//       accessorKey: 'newsTitle',
//     },
//     {
//       header: 'News Type',
//       accessorKey: 'newsCreateAt',
//     },
//     {
//       header: 'News Type',
//       accessorKey: 'newsCategory.newsCategoryName',
//     },
//     {
//       id: 'update',
//       header: 'Update',
//       cell: ({
//         row: {
//           original: { newsId },
//         },
//       }) => (
//         <Button variant="warning" onClick={() => setShowUpdateModal({ newsId, show: true })}>
//           Update
//         </Button>
//       ),
//     },
//     {
//       id: 'delete',
//       header: 'Delete',
//       cell: ({
//         row: {
//           original: { newsId },
//         },
//       }) => (
//         <Button variant="danger" onClick={() => setShowDeleteModal({ newsId, show: true })}>
//           Delete
//         </Button>
//       ),
//     },
//   ];

//   if (!state || !state.news) {
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
//                   <CardTitle as="h4">News Details</CardTitle>
//                 </Col>
//                 <Col className="text-end">
//                   <Button className="btn btn-primary" onClick={() => setShowCreateModal({ show: true })}>
//                     Create news
//                   </Button>
//                 </Col>
//               </Row>
//             </CardHeader>
//             <CardBody className="pt-0">
//               {/* News Table */}
//               <ReactTable columns={columns} data={state.news} />
//               <TablePagination state={state} dispatch={dispatch} fetch={fetchNews} updateQueryParams={updateQueryParams} />
//             </CardBody>
//           </Card>
//         </Col>
//       </Row>
//       <DeleteNewsModal
//         newsId={showDeleteModal.newsId}
//         show={showDeleteModal.show}
//         fetchNews={fetchNews}
//         onHide={() => setShowDeleteModal({ newsId: null, show: false })}
//       />
//       <CreateNewsModal
//         show={showCreateModal.show}
//         fetchNews={fetchNews}
//         onHide={() => setShowCreateModal({ show: false })}
//       />
//       <UpdateNewsModal
//         newsId={showUpdateModal.newsId}
//         show={showUpdateModal.show}
//         fetchNews={fetchNews}
//         onHide={() => setShowUpdateModal({ newsId: null, show: false })}
//       />
//       <NewsDetailModal
//         newsId={showDetailModal.newsId}
//         show={showDetailModal.show}
//         onHide={() => setShowDetailModal({ newsId: null, show: false })}
//       />
//     </Container>
//   );
// };

// export default NewsDetailTable;


import React, { useState, useContext, useEffect } from 'react';
import { Button, Container, Row, Col, Card, CardHeader, CardBody, CardTitle } from 'react-bootstrap';
import ReactTable from '@/components/Table'; // Ensure this component exists
import { NewsContext } from '../context/NewsContext';
import DeleteNewsModal from '../modals/DeleteNewsModal';
import CreateNewsModal from '../modals/CreateNewsModal';
import UpdateNewsModal from '../modals/UpdateNewsModal';
import NewsDetailModal from '../modals/NewsDetailModal';
import TablePagination from '../../common/TablePagination';

const NewsDetailTable = () => {
  const { state, dispatch, fetchNews, updateQueryParams } = useContext(NewsContext);
  const [showDeleteModal, setShowDeleteModal] = useState({ newsId: null, show: false });
  const [showUpdateModal, setShowUpdateModal] = useState({ newsId: null, show: false });
  const [showDetailModal, setShowDetailModal] = useState({ newsId: null, show: false });
  const [showCreateModal, setShowCreateModal] = useState({ show: false });

  // Ensure the news data is fetched when the component is mounted
  useEffect(() => {
    fetchNews();
  }, []);

  const columns = [
    {
      id: 'detail',
      header: 'Detail',
      cell: ({ row: { original: { newsId } } }) => (
        <Button variant="info" onClick={() => setShowDetailModal({ newsId, show: true })}>
          Detail
        </Button>
      ),
    },
    {
      header: 'News Title',
      accessorKey: 'newsTitle', // This should match the key from your API response
    },
    {
      header: 'Created At',
      accessorKey: 'newsCreateAt', // This should match the key from your API response
    },
    {
      header: 'Category',
      accessorKey: 'newsCategory.newsCategoryName', // This should match the nested key from your API response
    },
    {
      id: 'update',
      header: 'Update',
      cell: ({ row: { original: { newsId } } }) => (
        <Button variant="warning" onClick={() => setShowUpdateModal({ newsId, show: true })}>
          Update
        </Button>
      ),
    },
    {
      id: 'delete',
      header: 'Delete',
      cell: ({ row: { original: { newsId } } }) => (
        <Button variant="danger" onClick={() => setShowDeleteModal({ newsId, show: true })}>
          Delete
        </Button>
      ),
    },
  ];

  // Loading state when news data is not yet available
  if (!state || !state.news) {
    return <div>Loading...</div>;
  }

  // Render the table along with modals for create, update, delete
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12}>
          <Card>
            <CardHeader>
              <Row className="align-items-center">
                <Col>
                  <CardTitle as="h4">News Details</CardTitle>
                </Col>
                <Col className="text-end">
                  <Button className="btn btn-primary" onClick={() => setShowCreateModal({ show: true })}>
                    Create news
                  </Button>
                </Col>
              </Row>
            </CardHeader>
            <CardBody className="pt-0">
              {/* News Table */}
              <ReactTable columns={columns} data={state.news} />
              {/* Pagination Controls */}
              <TablePagination
                state={state}
                dispatch={dispatch}
                fetch={fetchNews}
                updateQueryParams={updateQueryParams}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      {/* Modals for CRUD actions */}
      <DeleteNewsModal
        newsId={showDeleteModal.newsId}
        show={showDeleteModal.show}
        fetchNews={fetchNews}
        onHide={() => setShowDeleteModal({ newsId: null, show: false })}
      />
      <CreateNewsModal
        show={showCreateModal.show}
        fetchNews={fetchNews}
        onHide={() => setShowCreateModal({ show: false })}
      />
      <UpdateNewsModal
        newsId={showUpdateModal.newsId}
        show={showUpdateModal.show}
        fetchNews={fetchNews}
        onHide={() => setShowUpdateModal({ newsId: null, show: false })}
      />
      <NewsDetailModal
        newsId={showDetailModal.newsId}
        show={showDetailModal.show}
        onHide={() => setShowDetailModal({ newsId: null, show: false })}
      />
    </Container>
  );
};

export default NewsDetailTable;
