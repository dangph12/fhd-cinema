import React from 'react';
import { Card } from 'react-bootstrap';
import SnackItem from './SnackItem';

const SnackList = ({ snacks, quantity, onQuantityChange }) => (
  <Card className="p-3 seat-box">
    <Card.Title className="film-title-price" style={{ textAlign: 'center' }}>Combo</Card.Title>
    {snacks.map(snack => (
      <SnackItem
        key={snack.snackId}
        snack={snack}
        quantity={quantity[snack.snackId]}
        onQuantityChange={onQuantityChange}
      />
    ))}
  </Card>
);

export default SnackList;
