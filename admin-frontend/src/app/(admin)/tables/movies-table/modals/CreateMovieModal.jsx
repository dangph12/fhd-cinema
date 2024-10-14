import React, { useState, useEffect } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';

const secretAccessKey = import.meta.env.VITE_S3_SECRET_KEY; 
const accessKeyId = import.meta.env.VITE_S3_ACCESS_KEY; 
const bucket = import.meta.env.VITE_S3_BUCKET_NAME; 
const region = import.meta.env.VITE_S3_REGION; 

const client = new S3Client({
  region,
  credentials: {
    secretAccessKey,
    accessKeyId,
  },
});

function CreateMovieModal({ show, fetchMovies, onHide }) {
  const [createShow, setCreateShow] = useState(false)

  useEffect(() => {
    setCreateShow(show)
  }, [show])

  const [form, setForm] = useState({
    movieTitle: '',
    movieStatus: '',
    moviePosterUrl: '',
  })
  const [validated, setValidated] = useState(false)
  const [errors, setErrors] = useState({})
  const [posterFile, setPosterFile] = useState(null)

  const getPosterUrl = async (file) => {
    const folder = "movies";
    const command = new PutObjectCommand({
      Bucket: bucket,
      Key: folder + "/" + file.name,
      Body: file,
    });
  
    try {
      await client.send(command);
      return `https://${bucket}.s3.${region}.amazonaws.com/${folder}/${file.name}`;
    } catch (err) {
      console.error(err);
      return '';
    }
  };

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
      movieTitle: '',
      movieStatus: '',
      moviePosterUrl: '',
    })
    setValidated(false)
    setErrors({})
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.movieTitle) newErrors.movieTitle = 'Movie title is required'
    if (!form.movieStatus) newErrors.movieStatus = 'Movie status is required'
    return newErrors
  }

  const handleCreate = async (e) => {
    e.preventDefault()

    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    } else {
      const posterUrl = await getPosterUrl(posterFile);

      // Ensure the state is updated before making the fetch request
      setForm((prevForm) => {
        const updatedForm = { ...prevForm, moviePosterUrl: posterUrl };
        console.log(updatedForm);
        debugger
        fetch('http://localhost:8080/movies', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedForm),
        })
          .then((response) => {
            if (response.ok) {
              fetchMovies()
            } else {
              console.error('Failed to create the movie')
            }
          })
          .catch((error) => {
            console.error('Error:', error)
          })
        return updatedForm;
      });

      setCreateShow(false)
      onHide()
      setForm({
        movieTitle: '',
        movieStatus: '',
        moviePosterUrl: '',
      })
      setErrors({})
    }
    setValidated(true)
  }

  return (
    <Modal show={createShow} onHide={() => closeCreateShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Create Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form noValidate validated={validated} onSubmit={handleCreate} id="createForm">
          <Form.Group className="m-2">
            <Form.Label>Movie title</Form.Label>
            <Form.Control
              required
              type="text"
              onChange={(e) => setField('movieTitle', e.target.value)}
              placeholder="Movie name"
              name="movieTitle"
              value={form.movieTitle}
              isInvalid={!!errors.movieTitle}
            />
            <Form.Control.Feedback type="invalid">{errors.movieTitle}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="m-2">
            <Form.Label>Movie status</Form.Label>
            <Form.Select
              required
              name="movieStatus"
              onChange={(e) => setField('movieStatus', e.target.value)}
              className="bg-body text-dark border-secondary"
              value={form.movieStatus}
              isInvalid={!!errors.movieStatus}>
              <option value="">Select movie status</option>
              <option value={'Now Showing'}>Now Showing</option>
              <option value={'Coming Soon'}>Coming Soon</option>
            </Form.Select>
            <Form.Control.Feedback type="invalid">{errors.movieStatus}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group controlId="formFile" className="mb-3">
            <Form.Control type="file" accept="image/*" onChange={(e) => setPosterFile(e.target.files[0])}/>
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

export default CreateMovieModal
