import ComponentContainerCard from '@/components/ComponentContainerCard';
import { Col, Pagination, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const DefaultExample = () => {
  return <ComponentContainerCard title="Default Example">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <Link className="page-link" to="">
              Previous
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              Next
            </Link>
          </li>
        </ul>
      </nav>
      <nav aria-label="Page navigation example">
        <Pagination>
          <Pagination.First />
          <Pagination.Item>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Last />
        </Pagination>
      </nav>
    </ComponentContainerCard>;
};
const DisabledAndActivePagination = () => {
  return <ComponentContainerCard title="Disabled And Active States">
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <Link className="page-link" to="" tabIndex={-1}>
              Previous
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              1
            </Link>
          </li>
          <li className="page-item active">
            <Link className="page-link" to="">
              2 <span className="sr-only">(current)</span>
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              Next
            </Link>
          </li>
        </ul>
      </nav>
      <nav aria-label="...">
        <ul className="pagination">
          <li className="page-item disabled">
            <span className="page-link">Previous</span>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              1
            </Link>
          </li>
          <li className="page-item active">
            <span className="page-link">
              2<span className="sr-only">(current)</span>
            </span>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </ComponentContainerCard>;
};
const SizingExample = () => {
  return <ComponentContainerCard title="Sizing Example">
      <nav aria-label="...">
        <Pagination size="lg">
          <Pagination.Item active>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
        </Pagination>
      </nav>
      <nav aria-label="...">
        <Pagination size="sm">
          <Pagination.Item active>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
        </Pagination>
      </nav>
    </ComponentContainerCard>;
};
const AlignmentExample = () => {
  return <ComponentContainerCard title="Alignment Example">
      <nav aria-label="Page navigation example">
        <ul className="pagination">
          <li className="page-item">
            <Link className="page-link" to="">
              Previous
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              Next
            </Link>
          </li>
        </ul>
      </nav>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item disabled">
            <Link className="page-link" to="" tabIndex={-1}>
              Previous
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              Next
            </Link>
          </li>
        </ul>
      </nav>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className="page-item disabled">
            <Link className="page-link" to="" tabIndex={-1}>
              Previous
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              1
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              2
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              3
            </Link>
          </li>
          <li className="page-item">
            <Link className="page-link" to="">
              Next
            </Link>
          </li>
        </ul>
      </nav>
    </ComponentContainerCard>;
};
const AllPaginations = () => {
  return <>
      <Row className="justify-content-center">
        <Col md={6}>
          <DefaultExample />
        </Col>
        <Col md={6}>
          <DisabledAndActivePagination />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <SizingExample />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <AlignmentExample />
        </Col>
      </Row>
    </>;
};
export default AllPaginations;