import { Card, CardBody, Col, Row } from 'react-bootstrap';
import StatCard from './StatCard';
import PostBox from './PostBox';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import CommentBox from './CommentBox';
import { statisticsData } from '../data';
import post1 from '@/assets/images/extra/card/post-1.jpg';
const Article = () => {
  return <Card>
      <CardBody>
        <img src={post1} alt="card-image" className="img-fluid" />
        <div className="post-title mt-3">
          <Row>
            <Col>
              <span className="badge bg-primary-subtle text-primary">Natural</span>
            </Col>
            <Col xs="auto">
              <span className="text-muted">
                <IconifyIcon icon="fa-regular:calendar" className="far fa-calendar me-1" />
                02 July 2024
              </span>
            </Col>
          </Row>
          <h5 className="fs-20 fw-bold d-block my-3">There is nothing more beautiful than nature.</h5>
          <span className="fs-15 bg-light py-2 px-3 rounded">Taking pictures is savouring life intensely.</span>
          <p className="fs-15 mt-3">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content
            here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
            default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.
          </p>
          <blockquote className="blockquote border-start ps-4">
            <p className="fs-18">
              <i>&quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.&quot;</i>
            </p>
            <footer className="blockquote-footer mt-1">
              Someone famous in <cite title="Source Title">Source Title</cite>
            </footer>
          </blockquote>
          <p className="fs-15">
            Taking pictures is savouring life intensely, every hundredth of a second – Marc Riboud. Joy in looking and comprehending is nature’s most
            beautiful gift.
          </p>
          <p className="fs-15 mb-0">
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using &apos;Content here, content
            here&apos;, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their
            default model text, and a search for &apos;lorem ipsum&apos; will uncover many web sites still in their infancy.
          </p>
        </div>
      </CardBody>
      <CardBody className="pt-0">
        <Row className="mb-3">
          <Col>
            <p className="text-dark fw-semibold mb-0">Artical tags</p>
          </Col>
        </Row>
        <span className="badge bg-light text-dark px-3 py-2 fw-semibold me-1">Music</span>
        <span className="badge bg-light text-dark px-3 py-2 fw-semibold me-1">Animals</span>
        <span className="badge bg-light text-dark px-3 py-2 fw-semibold me-1">Natural</span>
        <span className="badge bg-light text-dark px-3 py-2 fw-semibold me-1">Food</span>
        <span className="badge bg-light text-dark px-3 py-2 fw-semibold me-1">Fashion</span>
        <span className="badge bg-light text-dark px-3 py-2 fw-semibold me-1">Helth</span>
        <span className="badge bg-light text-dark px-3 py-2 fw-semibold">Charity</span>
      </CardBody>
    </Card>;
};
const Post = () => {
  return <>
      <Row>
        {statisticsData.map((stat, idx) => <Col lg={6} key={idx}>
            <StatCard stat={stat} />
          </Col>)}
      </Row>
      <Row>
        <Col xs={12}>
          <PostBox />
        </Col>
        <Col xs={12}>
          <Article />
          <CommentBox />
        </Col>
      </Row>
    </>;
};
export default Post;