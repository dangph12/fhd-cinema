import React, { useState, useEffect, useContext } from 'react'
import { Modal, Form, Button } from 'react-bootstrap'
import { NewsContext } from '../context/NewsContext'

function NewsDetailModal({ newsId, show, onHide }) {
  const { state } = useContext(NewsContext)
  const [detailShow, setDetailShow] = useState(false)
  const [selectedNews, setSelectedNews] = useState({
    newsName: '',
  })

  useEffect(() => {
    setDetailShow(show)
  }, [show])

  useEffect(() => {
    if (newsId) {
      const news = state.news.find((news) => news.newsId === newsId)
      setSelectedNews(news)
    }
  }, [newsId])

  const closeDetailShow = () => {
    onHide()
    setDetailShow(false)
    setSelectedNews({
      newsName: '',
    })
  }

  return (
    <Modal show={detailShow} onHide={() => closeDetailShow()}>
      <Modal.Header closeButton>
        <Modal.Title>Detail Modal</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form id="detailForm">
          <Form.Group className="m-2">
            <Form.Label>News Name</Form.Label>
            <Form.Control readOnly type="text" value={selectedNews.newsName} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer></Modal.Footer>
    </Modal>
  )
}

export default NewsDetailModal
