// import React, { useState, useEffect, useContext } from 'react'
// import { Modal, Form, Button, Image } from 'react-bootstrap'
// import { NewsContext } from '../context/NewsContext'

// function NewsDetailModal({ newsId, show, onHide }) {
//   const { state } = useContext(NewsContext)
//   const [detailShow, setDetailShow] = useState(false)
//   const [selectedNews, setSelectedNews] = useState({
//     newsTitle: '',
//     newsDescription: '',
//     newsCreateAt: '',
//     newsImageUrl: '',
//     newsCategoryName: '',
//   })

//   useEffect(() => {
//     setDetailShow(show)
//   }, [show])

//   useEffect(() => {
//     if (newsId) {
//       const news = state.news.find((news) => news.newsId === newsId)
//       setSelectedNews({
//         newsTitle: news.newsTitle,
//         newsDescription: news.newsDescription,
//         newsCreateAt: news.newsCreateAt,
//         newsImageUrl: news.newsImageUrl,
//         newsCategoryName: news.newsCategory.newsCategoryName,
//       })
//     }
//   }, [newsId])

//   const closeDetailShow = () => {
//     onHide()
//     setDetailShow(false)
//     setSelectedNews({
//       newsTitle: '',
//       newsDescription: '',
//       newsCreateAt: '',
//       newsImageUrl: '',
//       newsCategoryName: '',
//     })
//   }

//   return (
//     <Modal show={detailShow} onHide={() => closeDetailShow()}>
//       <Modal.Header closeButton>
//         <Modal.Title>Detail Modal</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form id="detailForm">
//           <Form.Group className="m-2">
//             <Form.Label>News Title</Form.Label>
//             <Form.Control readOnly type="text" value={selectedNews.newsTitle} />
//           </Form.Group>
//           <Form.Group className="m-2">
//             <Form.Label>News Description</Form.Label>
//             <div dangerouslySetInnerHTML={{ __html: selectedNews.newsDescription }} />
//           </Form.Group>
//           <Form.Group className="m-2">
//             <Form.Label>News Create At</Form.Label>
//             <Form.Control readOnly type="text" value={selectedNews.newsCreateAt} />
//           </Form.Group>
//           <Form.Group className="m-2">
//             <Form.Label>News Image</Form.Label>
//             <Image src={selectedNews.newsImageUrl} alt="news image" fluid/>
//           </Form.Group>
//           <Form.Group className="m-2">
//             <Form.Label>News Category</Form.Label>
//             <Form.Control readOnly type="text" value={selectedNews.newsCategoryName} />
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer></Modal.Footer>
//     </Modal>
//   )
// }

// export default NewsDetailModal


import React, { useState, useEffect, useContext } from 'react';
import { Modal, Form, Button, Image } from 'react-bootstrap';
import { NewsContext } from '../context/NewsContext';

function NewsDetailModal({ newsId, show, onHide }) {
  const { state } = useContext(NewsContext);
  const [detailShow, setDetailShow] = useState(false);
  const [selectedNews, setSelectedNews] = useState({
    newsTitle: '',
    newsDescription: '',
    newsCreateAt: '',
    newsImageUrl: '',
    newsCategoryName: '',
  });

  useEffect(() => {
    setDetailShow(show);
  }, [show]);

  useEffect(() => {
    if (newsId && state.news) {
      const news = state.news.find((news) => news.newsId === newsId);
      if (news) {
        setSelectedNews({
          newsTitle: news.newsTitle || 'No title available',
          newsDescription: news.newsDescription || 'No description available',
          newsCreateAt: news.newsCreateAt || 'No creation date available',
          newsImageUrl: news.newsImageUrl || 'https://via.placeholder.com/150',
          newsCategoryName: news.newsCategoryDto?.newsCategoryName || 'No category available',
        });
      } else {
        // Nếu không tìm thấy bản tin
        setSelectedNews({
          newsTitle: 'No title available',
          newsDescription: 'No description available',
          newsCreateAt: 'No creation date available',
          newsImageUrl: 'https://via.placeholder.com/150',
          newsCategoryName: 'No category available',
        });
      }
    }
  }, [newsId, state.news]);

  const closeDetailShow = () => {
    onHide();
    setDetailShow(false);
    setSelectedNews({
      newsTitle: '',
      newsDescription: '',
      newsCreateAt: '',
      newsImageUrl: '',
      newsCategoryName: '',
    });
  };

  return (
    <Modal show={detailShow} onHide={closeDetailShow}>
      <Modal.Header closeButton>
        <Modal.Title>News Detail</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="detailForm">
          <Form.Group className="m-2">
            <Form.Label>News Title</Form.Label>
            <Form.Control readOnly type="text" value={selectedNews.newsTitle} />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>News Description</Form.Label>
            <div dangerouslySetInnerHTML={{ __html: selectedNews.newsDescription }} />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>News Created At</Form.Label>
            <Form.Control readOnly type="text" value={selectedNews.newsCreateAt} />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>News Image</Form.Label>
            <Image src={selectedNews.newsImageUrl} alt="news image" fluid />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>News Category</Form.Label>
            <Form.Control readOnly type="text" value={selectedNews.newsCategoryName} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={closeDetailShow}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default NewsDetailModal;
