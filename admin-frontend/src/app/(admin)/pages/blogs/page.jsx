import { Button, Card, CardBody, Col, Row } from 'react-bootstrap';
import { blogs } from './data';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import { Link } from 'react-router-dom';
import PageMetaData from '@/components/PageMetaData';
const BlogCard = ({
  blog
}) => {
  const {
    avatar,
    category,
    createdAt,
    description,
    image,
    name,
    title
  } = blog;
  return <Card>
      <CardBody>
        <div>
          <img src={image} alt="" className="img-fluid rounded" />
          <div className="mt-3">
            <span className="badge bg-purple-subtle text-purple px-2 py-1 fw-semibold ">{category}</span> |&nbsp;
            <p className="mb-0 text-muted fs-12 d-inline-block">{new Date(createdAt).toLocaleDateString()}</p>
          </div>
          <Link to="" className="d-block fs-18 fw-medium text-body my-2 text-truncate">
            {title}
          </Link>
          <p className="text-muted">{description}</p>
          <hr className="hr-dashed" />
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <img src={avatar} alt="" className="thumb-md rounded-circle" />
              </div>
              <div className="flex-grow-1 ms-2 text-truncate text-start">
                <h6 className="m-0 text-dark">{name}</h6>
                <p className="mb-0 text-muted">
                  by <span role="button">admin</span>
                </p>
              </div>
            </div>
            <div className="align-self-center">
              <Button variant="primary" size="sm">
                Read more <IconifyIcon icon="fa-solid:long-arrow-alt-right" height={12} width={13} />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>;
};
const BlogCard2 = ({
  blog
}) => {
  const {
    avatar,
    category,
    createdAt,
    description,
    image,
    name,
    title
  } = blog;
  return <Card>
      <CardBody>
        <div className="text-center">
          <img src={image} alt="" className="img-fluid rounded" />
          <div className="mt-3 ">
            <span className="badge bg-purple-subtle text-purple px-2 py-1 fw-semibold ">{category}</span> |&nbsp;
            <p className="mb-0 text-muted fs-12 d-inline-block">{new Date(createdAt).toLocaleDateString()}</p>
          </div>
          <Link to="" className="d-block fs-18 fw-medium text-body my-3 text-truncate">
            {title}
          </Link>
          <p className="text-muted">{description}</p>
          <hr className="hr-dashed" />
          <div className="d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <div className="flex-shrink-0">
                <img src={avatar} alt="" className="thumb-md rounded-circle" />
              </div>
              <div className="flex-grow-1 ms-2 text-truncate text-start">
                <h6 className="m-0 text-dark">{name}</h6>
                <p className="mb-0 text-muted">
                  by <span role="button">admin</span>
                </p>
              </div>
            </div>
            <div className="align-self-center">
              <Button variant="primary" size="sm">
                Read more <IconifyIcon icon="fa-solid:long-arrow-alt-right" height={12} width={13} />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>;
};
const Blogs = () => {
  return <>
      <PageMetaData title="Blogs" />
      <Row className="justify-content-center">
        {blogs.slice(0, 3).map((blog, idx) => <Col md={6} lg={4} key={idx}>
            <BlogCard blog={blog} />
          </Col>)}
        {blogs.slice(3, 6).map((blog, idx) => <Col md={6} lg={4} key={idx}>
            <BlogCard2 blog={blog} />
          </Col>)}
      </Row>
    </>;
};
export default Blogs;