import ComponentContainerCard from '@/components/ComponentContainerCard';
import { Button, Col, Row } from 'react-bootstrap';
import { useState } from 'react';
import { Rating, RoundedStar, Star, StickerStar, ThinRoundedStar, ThinStar } from '@smastrom/react-rating';

// css
import '@smastrom/react-rating/style.css';
const DefaultStarRating = () => {
  const [rating, setRating] = useState(3);
  return <ComponentContainerCard title="Default star rating">
      <Rating value={rating} onChange={setRating} style={{
      maxWidth: '180px'
    }} />
    </ComponentContainerCard>;
};
const ReadOnlyRating = () => {
  return <ComponentContainerCard title="Read Only rating">
      <Rating value={2} readOnly style={{
      maxWidth: '180px'
    }} />
    </ComponentContainerCard>;
};
const DisabledRating = () => {
  return <ComponentContainerCard title="Disabled rating">
      <Rating value={0} isDisabled style={{
      maxWidth: '180px'
    }} />
    </ComponentContainerCard>;
};
const HighlightOnlyRating = () => {
  const [rating, setRating] = useState(3);
  return <ComponentContainerCard title="Highlight only selected rating">
      <Rating value={rating} onChange={setRating} highlightOnlySelected style={{
      maxWidth: '180px'
    }} />
    </ComponentContainerCard>;
};
const ResetButtonRating = () => {
  const [rating, setRating] = useState(3);
  return <ComponentContainerCard title="Reset Button rating">
      <div className="d-inline-flex align-items-center gap-3">
        <Rating value={rating} onChange={setRating} style={{
        maxWidth: '180px'
      }} />
        <Button variant="danger" size="sm" onClick={() => setRating(0)}>
          Reset
        </Button>
      </div>
    </ComponentContainerCard>;
};
const StarStyles = () => {
  const [rating, setRating] = useState(3);
  const includedShapesStyles = [Star, ThinStar, RoundedStar, ThinRoundedStar, StickerStar].map(itemShapes => ({
    itemShapes,
    activeFillColor: '#f59e0b',
    inactiveFillColor: '#ffedd5'
  }));
  return <ComponentContainerCard title="Star Styles">
      {includedShapesStyles.map((itemStyles, idx) => <Rating key={`shape_${idx}`} value={rating} onChange={setRating} itemStyles={itemStyles} style={{
      maxWidth: '180px'
    }} />)}
    </ComponentContainerCard>;
};
const AllRatings = () => {
  return <>
      <Row className="justify-content-center">
        <Col md={6}>
          <DefaultStarRating />
        </Col>
        <Col md={6}>
          <ReadOnlyRating />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <DisabledRating />
        </Col>
        <Col md={6}>
          <HighlightOnlyRating />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md={6}>
          <ResetButtonRating />
        </Col>
        <Col md={6}>
          <StarStyles />
        </Col>
      </Row>
    </>;
};
export default AllRatings;