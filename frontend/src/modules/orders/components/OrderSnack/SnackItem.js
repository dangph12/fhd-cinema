import React from 'react';
import { Row, Col, Button, Image } from 'react-bootstrap';

const SnackItem = ({ snack, quantity, onQuantityChange }) => (
  <Row key={snack.snackId} className="mb-4 align-items-center">
    <Col xs={4}>
      <Image
        src={snack.image}
        alt={snack.snackName}
        rounded
        fluid
      />
    </Col>
    <Col xs={4}>
      <h6 style={{ color: '#5DBB63', fontSize: '1.5rem', fontWeight: 'bold' }}>{snack.snackName}</h6>
      <h5 style={{ fontWeight: 'bold' }}>
        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(snack.snackPrice)}
      </h5>
    </Col>
    <Col xs={4} className="text-right">
      <Button variant="outline-secondary" size="md" onClick={() => onQuantityChange(snack.snackId, -1)}>
        -
      </Button>
      <span className="mx-2">{quantity || 0}</span>
      <Button variant="outline-secondary" size="md" onClick={() => onQuantityChange(snack.snackId, 1)}>
        +
      </Button>
    </Col>
  </Row>
);

export default SnackItem;
