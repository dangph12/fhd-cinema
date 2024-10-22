import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { NewsContext } from '../context/NewsContext'
import TextEditor from '../../common/TextEditor'
import uploadToS3 from '../../common/UploadToS3'

function CreateNewsModal({ show, fetchNews, onHide }) {
  const { state } = useContext(NewsContext)
  const [createShow, setCreateShow] = useState(false)

  useEffect(() => {
    setCreateShow(show)
  }, [show])

  const [form, setForm] = useState({
    newsTitle: '',
    newsDescription: '',
    newsCreateAt: '',
    newsImageUrl: '',
    newsCategoryId: '',
  })
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})
  const [imageFile, setImageFile] = useState(null)

  const setField = (field, value) => {
    setForm({
      ...form,
      [field]: value,
    })
  }

  const closeCreateShow = () => {
    onHide()
    setCreateShow(false)
    setForm({
      newsTitle: '',
      newsDescription: '',
      newsCreateAt: '',
      newsImageUrl: '',
      newsCategoryId: '',
    })
    setValidated(false)
    setErrors({})
    setImageFile(null)
  }

  const validateForm = () => {
    const newErrors = {}
    if (form.newsTitle === '') {
      newErrors.newsTitle = 'Title is required'
    }
    if (form.newsDescription === '') {
      newErrors.newsDescription = 'Description is required'
    }
    if (form.newsCreateAt === '') {
      newErrors.newsCreateAt = 'Create at is required'
    }
    if (imageFile === null) {
      newErrors.newsImageUrl = 'Image is required'
    }
    if (form.newsCategoryId === '') {
      newErrors.newsCategoryId = 'Category is required'
    }
    return newErrors
  }

  const finishForm = async () => {
    const date = new Date();
    const dateStr = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}T00:00:00`;
    form.newsCreateAt = dateStr;
    
    if (imageFile) {
      const imageUrl = await uploadToS3('news', imageFile);
      form.newsImageUrl = imageUrl;
    }
  };

  const createNews = async () => {
    fetch('http://localhost:8080/news', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),
    })
      .then((response) => {
        if (response.ok) {
          fetchNews()
        } else {
          console.error('Failed to create the news')
        }
      })
      .catch((error) => {
        console.error('Error:', error)
      })
  }

  const handleCreate = async (e) => {
    e.preventDefault()

    await finishForm()
    console.log(form) 
    debugger

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      e.stopPropagation()
    } else {
      await createNews()
      closeCreateShow()
    }
  }
  return (
    <Modal show={createShow} onHide={() => closeCreateShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Create Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleCreate} id="createForm">
          <Form.Group controlId="formNewsTitle" className="m-2">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter title"
              value={form.newsTitle}
              onChange={(e) => setField('newsTitle', e.target.value)}
              isInvalid={!!errors.newsTitle}
            />
            <Form.Control.Feedback type="invalid">{errors.newsTitle}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>News description</Form.Label>
            <TextEditor object="news" description={form.newsDescription} field="newsDescription" setField={setField} />
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>News Image</Form.Label>
            <Form.Control type="file" accept="image/*" onChange={(e) => setImageFile(e.target.files[0])} isInvalid={!!errors.newsImageUrl} />
            <Form.Control.Feedback type="invalid">{errors.newsImageUrl}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formNewsCategoryId" className="m-2">
            <Form.Label>Category</Form.Label>
            <Form.Select
              required
              name="newsCategoryId"
              onChange={(e) => setField('newsCategoryId', e.target.value)}
              className="bg-body text-dark border-secondary"
              value={form.newsCategoryId}
              isInvalid={!!errors.newsCategoryId}>
              <option value="">Select news category </option>
              {state.newsCategories.map((newsCategory) => (
                <option key={newsCategory.newsCategoryId} value={newsCategory.newsCategoryId}>
                  {newsCategory.newsCategoryName}
                </option>
              ))}
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.newsCategoryId}</Form.Control.Feedback>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={() => closeCreateShow()}>
          Close
        </Button>
        <Button type="submit" variant="primary" form="createForm">
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateNewsModal
