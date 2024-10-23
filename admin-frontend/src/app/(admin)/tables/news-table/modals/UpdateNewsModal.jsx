// import React, { useState, useEffect, useContext } from 'react'
// import { Modal, Form, Button } from 'react-bootstrap'
// import { NewsContext } from '../context/NewsContext'

// function UpdateNewsModal({ newsId, show, fetchNews, onHide }) {
//   const { state } = useContext(NewsContext)

//   const [updateShow, setUpdateShow] = useState(false)

//   const [form, setForm] = useState({ newsName: '', newsType: 0 })
//   const [validated, setValidated] = useState(false)
//   const [errors, setErrors] = useState({})

//   useEffect(() => {
//     setUpdateShow(show)
//   }, [show])

//   // setForm by newsId
//   useEffect(() => {
//     if (newsId) {
//       const news = state.news.find((news) => news.newsId === newsId)
//       setForm(news)
//     }
//   }, [newsId])

//   const setField = (field, value) => {
//     setForm({
//       ...form,
//       [field]: value,
//     })
//   }
//   const validateForm = () => {
//     const newErrors = {}
//     if (!form.newsName) newErrors.newsName = 'News name is required'
//     if (!form.newsType) newErrors.newsType = 'News type is required'
//     if (!form.newsPassword && !form.newsId) newErrors.newsPassword = 'News password is required'
//     return newErrors
//   }

//   const closeUpdateShow = () => {
//     onHide()
//     setUpdateShow(false)
//     setForm({ newsName: '', newsType: '' })
//     setValidated(false)
//     setErrors({})
//   }

//   const handleUpdate = (e) => {
//     e.preventDefault()

//     const newErrors = validateForm()
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors)
//       e.stopPropagation()
//     } else {
//       const { newsId, newsPassword, ...updateData } = form
//       fetch(`http://localhost:8080/news/${newsId}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(updateData),
//       })
//         .then((response) => {
//           if (response.ok) {
//             fetchNews()
//           } else {
//             console.error('Failed to update the news')
//           }
//         })
//         .catch((error) => {
//           console.error('Error:', error)
//         })
//       setUpdateShow(false)
//       onHide()
//       setForm({ newsName: '', newsType: '' })
//       setErrors({})
//     }
//     setValidated(true)
//   }
//   return (
//     <Modal show={updateShow} onHide={() => closeUpdateShow()}>
//       <Modal.Header closeButton>
//         <Modal.Title>Update Modal</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form noValidate validated={validated} onSubmit={handleUpdate} id="updateForm">
//           <Form.Group className="m-2">
//             <Form.Label>News name</Form.Label>
//             <Form.Control
//               required
//               type="text"
//               onChange={(e) => setField('newsName', e.target.value)}
//               placeholder="News name"
//               name="newsName"
//               value={form.newsName}
//               isInvalid={!!errors.newsName}
//             />
//             <Form.Control.Feedback type="invalid">{errors.newsName}</Form.Control.Feedback>
//           </Form.Group>
//           <Form.Group className="m-2">
//             <Form.Label>News type</Form.Label>
//             <Form.Select
//               required
//               name="newsType"
//               onChange={(e) => setField('newsType', Number(e.target.value))}
//               className="bg-body text-dark border-secondary"
//               value={form.newsType}
//               isInvalid={!!errors.newsType}>
//               <option value="">Select news type</option>
//               <option value={1}>Customer</option>
//               <option value={2}>Staff</option>
//             </Form.Select>
//             <Form.Control.Feedback type="invalid">{errors.newsType}</Form.Control.Feedback>
//           </Form.Group>
//         </Form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button variant="secondary" onClick={() => closeUpdateShow()}>
//           Close
//         </Button>
//         <Button variant="primary" type="submit" form="updateForm">
//           Save Changes
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   )
// }

// export default UpdateNewsModal

import React, { useState, useEffect, useContext } from 'react';
import { Modal, Form, Button } from 'react-bootstrap';
import { NewsContext } from '../context/NewsContext';

function UpdateNewsModal({ newsId, show, fetchNews, onHide }) {
  const { state } = useContext(NewsContext);

  const [updateShow, setUpdateShow] = useState(false);
  const [form, setForm] = useState({
    newsTitle: '',
    newsDescription: '',
    newsCreateAt: '',
    newsImageUrl: '',
    newsCategoryId: ''
  });
  const [validated, setValidated] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    setUpdateShow(show);
  }, [show]);

  // Populate form with the selected news item details based on newsId
  useEffect(() => {
    if (newsId) {
      const news = state.news.find((newsItem) => newsItem.newsId === newsId);
      if (news) {
        setForm({
          newsTitle: news.newsTitle,
          newsDescription: news.newsDescription,
          newsCreateAt: news.newsCreateAt,
          newsImageUrl: news.newsImageUrl,
          newsCategoryId: news.newsCategory?.newsCategoryId || ''
        });
      }
    }
  }, [newsId, state.news]);

  // Set individual form field values
  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    });
  };

  // Validate form before submission
  const validateForm = () => {
    const newErrors = {};
    if (!form.newsTitle) newErrors.newsTitle = 'News title is required';
    if (!form.newsDescription) newErrors.newsDescription = 'News description is required';
    if (!form.newsCategoryId) newErrors.newsCategoryId = 'News category is required';
    return newErrors;
  };

  // Close the modal and reset the form
  const closeUpdateShow = () => {
    onHide();
    setUpdateShow(false);
    setForm({ newsTitle: '', newsDescription: '', newsCreateAt: '', newsImageUrl: '', newsCategoryId: '' });
    setValidated(false);
    setErrors({});
  };

  // Handle form submission and update request
  const handleUpdate = (e) => {
    e.preventDefault();

    // Validate the form and check for errors
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      e.stopPropagation();
    } else {
      // Prepare the data for the update request
      const updateData = {
        newsId: newsId,
        newsTitle: form.newsTitle,
        newsDescription: form.newsDescription,
        newsCreateAt: form.newsCreateAt,
        newsImageUrl: form.newsImageUrl,
        newsCategoryId: form.newsCategoryId,
      };

      // Perform the PUT request to update the news
      fetch(`http://localhost:8080/news/${newsId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      })
        .then((response) => {
          if (response.ok) {
            fetchNews();  // Refresh the news list after update
          } else {
            console.error('Failed to update the news');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });

      // Close the modal and reset the form
      closeUpdateShow();
    }
    setValidated(true);
  };

  return (
    <Modal show={updateShow} onHide={() => closeUpdateShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Update News</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleUpdate} id="updateForm">
          {/* News Title */}
          <Form.Group className="m-2">
            <Form.Label>News Title</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('newsTitle', e.target.value)}
              placeholder="News title"
              name="newsTitle"
              value={form.newsTitle}
              isInvalid={!!errors.newsTitle}
            />
            <Form.Control.Feedback type="invalid">{errors.newsTitle}</Form.Control.Feedback>
          </Form.Group>

          {/* News Description */}
          <Form.Group className="m-2">
            <Form.Label>News Description</Form.Label>
            <Form.Control
              required
              as="textarea"
              rows={3}
              onChange={(e) => setField('newsDescription', e.target.value)}
              placeholder="News description"
              name="newsDescription"
              value={form.newsDescription}
              isInvalid={!!errors.newsDescription}
            />
            <Form.Control.Feedback type="invalid">{errors.newsDescription}</Form.Control.Feedback>
          </Form.Group>

          {/* News Create At */}
          <Form.Group className="m-2">
            <Form.Label>News Create At</Form.Label>
            <Form.Control
              type="datetime-local"
              onChange={(e) => setField('newsCreateAt', e.target.value)}
              placeholder="News create at"
              name="newsCreateAt"
              value={form.newsCreateAt}
            />
          </Form.Group>

          {/* News Image URL */}
          <Form.Group className="m-2">
            <Form.Label>News Image URL</Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setField('newsImageUrl', e.target.value)}
              placeholder="Image URL"
              name="newsImageUrl"
              value={form.newsImageUrl}
            />
          </Form.Group>

          {/* News Category */}
          <Form.Group className="m-2">
            <Form.Label>News Category</Form.Label>
            <Form.Select
              required
              name="newsCategoryId"
              onChange={(e) => setField('newsCategoryId', e.target.value)}
              className="bg-body text-dark border-secondary"
              value={form.newsCategoryId}
              isInvalid={!!errors.newsCategoryId}
            >
              <option value="">Select news category</option>
              <option value="111e4567-e89b-12d3-a456-426614174000">Khuyến mãi</option>
              <option value="another-category-id">Another Category</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.newsCategoryId}</Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeUpdateShow()}>
          Close
        </Button>
        <Button variant="primary" type="submit" form="updateForm">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UpdateNewsModal;
