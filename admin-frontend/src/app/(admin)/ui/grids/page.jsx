import ComponentContainerCard from '@/components/ComponentContainerCard';
import PageMetaData from '@/components/PageMetaData';
import { Col, Row } from 'react-bootstrap';
const GridTable = () => {
  return <ComponentContainerCard title="Grids">
      <div className="table-responsive">
        <table className="table table-bordered table-striped table-centered">
          <thead>
            <tr>
              <th scope="col" />
              <th scope="col">
                xs
                <br />
                <span className="fw-normal">&lt;576px</span>
              </th>
              <th scope="col">
                sm
                <br />
                <span className="fw-normal">≥576px</span>
              </th>
              <th scope="col">
                md
                <br />
                <span className="fw-normal">≥768px</span>
              </th>
              <th scope="col">
                lg
                <br />
                <span className="fw-normal">≥992px</span>
              </th>
              <th scope="col">
                xl
                <br />
                <span className="fw-normal">≥1200px</span>
              </th>
              <th scope="col">
                xxl
                <br />
                <span className="fw-normal">≥1400px</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="text-nowrap" scope="row">
                Container <code className="fw-normal">max-width</code>
              </th>
              <td>None (auto)</td>
              <td>540px</td>
              <td>720px</td>
              <td>960px</td>
              <td>1140px</td>
              <td>1320px</td>
            </tr>
            <tr>
              <th className="text-nowrap" scope="row">
                Class prefix
              </th>
              <td>
                <code>.col-</code>
              </td>
              <td>
                <code>.col-sm-</code>
              </td>
              <td>
                <code>.col-md-</code>
              </td>
              <td>
                <code>.col-lg-</code>
              </td>
              <td>
                <code>.col-xl-</code>
              </td>
              <td>
                <code>.col-xxl-</code>
              </td>
            </tr>
            <tr>
              <th className="text-nowrap" scope="row">
                # of columns
              </th>
              <td colSpan={6}>12</td>
            </tr>
            <tr>
              <th className="text-nowrap" scope="row">
                Gutter width
              </th>
              <td colSpan={6}>1.5rem (.75rem on left and right)</td>
            </tr>
            <tr>
              <th className="text-nowrap" scope="row">
                Custom gutters
              </th>
              <td colSpan={6}>
                <span role="button" className="text-primary">
                  Yes
                </span>
              </td>
            </tr>
            <tr>
              <th className="text-nowrap" scope="row">
                Nestable
              </th>
              <td colSpan={6}>
                <span role="button" className="text-primary">
                  Yes
                </span>
              </td>
            </tr>
            <tr>
              <th className="text-nowrap" scope="row">
                Column ordering
              </th>
              <td colSpan={6}>
                <span role="button" className="text-primary">
                  Yes
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ComponentContainerCard>;
};
const GridExample1 = () => {
  return <ComponentContainerCard title="Grid-Example">
      <Row className="text-center">
        <Col sm={3}>
          <span className="border py-2 bg-light d-block mb-2 mb-lg-0">.col-sm-3</span>
        </Col>
        <Col sm={3}>
          <span className="border py-2 bg-light d-block mb-2 mb-lg-0">.col-sm-3</span>
        </Col>
        <Col sm={3}>
          <span className="border py-2 bg-light d-block mb-2 mb-lg-0">.col-sm-3</span>
        </Col>
        <Col sm={3}>
          <span className="border py-2 bg-light d-block">.col-sm-3</span>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const GridExample2 = () => {
  return <ComponentContainerCard title="Grid-Example">
      <Row className="text-center">
        <Col md={3}>
          <span className="border py-2 bg-light d-block mb-2 mb-lg-0">.col-md-3</span>
        </Col>
        <Col md={6}>
          <span className="border py-2 bg-light d-block mb-2 mb-lg-0">.col-md-6</span>
        </Col>
        <Col md={3}>
          <span className="border py-2 bg-light d-block">.col-md-3</span>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const GridExample3 = () => {
  return <ComponentContainerCard title="Grid-Example">
      <Row className="text-center">
        <Col lg={6}>
          <span className="border py-2 bg-light d-block mb-2 mb-lg-0">.col-lg-6</span>
        </Col>
        <Col lg={6}>
          <span className="border py-2 bg-light d-block">.col-lg-6</span>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const GridExample4 = () => {
  return <ComponentContainerCard title="Grid-Example">
      <Row className="text-center">
        <Col lg={4}>
          <span className="border py-2 bg-light d-block mb-2 mb-lg-0">.col-xl-4</span>
        </Col>
        <Col lg={4}>
          <span className="border py-2 bg-light d-block mb-2 mb-lg-0">.col-xl-4</span>
        </Col>
        <Col lg={4}>
          <span className="border py-2 bg-light d-block">.col-xl-4</span>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const GridExample5 = () => {
  return <ComponentContainerCard title="Grid-Example">
      <Row className="text-center">
        <Col xxl={6}>
          <span className="border py-2 bg-light d-block mb-2 mb-lg-0">.col-xxl-6</span>
        </Col>
        <Col xxl={6}>
          <span className="border py-2 bg-light d-block">.col-xxl-6</span>
        </Col>
      </Row>
    </ComponentContainerCard>;
};
const GridExample6 = () => {
  return <ComponentContainerCard title="Grid-Example">
      <div className="text-center">
        <Row>
          <Col sm={1}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
          </Col>
          <Col sm={1}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
          </Col>
          <Col sm={1}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
          </Col>
          <Col sm={1}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
          </Col>
          <Col sm={1}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
          </Col>
          <Col sm={1}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
          </Col>
          <Col sm={1}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
          </Col>
          <Col sm={1}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
          </Col>
          <Col sm={1}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
          </Col>
          <Col sm={1}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
          </Col>
          <Col sm={1}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
          </Col>
          <Col sm={1}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-1</span>
          </Col>
        </Row>
        <Row>
          <Col sm={2}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-2</span>
          </Col>
          <Col sm={2}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-2</span>
          </Col>
          <Col sm={2}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-2</span>
          </Col>
          <Col sm={2}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-2</span>
          </Col>
          <Col sm={2}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-2</span>
          </Col>
          <Col sm={2}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-2</span>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-3</span>
          </Col>
          <Col sm={3}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-3</span>
          </Col>
          <Col sm={3}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-3</span>
          </Col>
          <Col sm={3}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-3</span>
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-4</span>
          </Col>
          <Col sm={4}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-4</span>
          </Col>
          <Col sm={4}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-4</span>
          </Col>
        </Row>
        <Row>
          <Col sm={6}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-6</span>
          </Col>
          <Col sm={6}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-6</span>
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <span className="border py-2 bg-light d-block">.col-sm-12</span>
          </Col>
        </Row>
      </div>
    </ComponentContainerCard>;
};
const GridExample7 = () => {
  return <ComponentContainerCard title="Grid-Example">
      <div className="text-center">
        <Row>
          <Col sm={8} className="offset-sm-2">
            <span className="border py-2 bg-light d-block mb-2">.col-sm-8 offset-sm-2</span>
          </Col>
        </Row>
        <Row>
          <Col sm={3} className="ml-auto">
            <span className="border py-2 bg-light d-block mb-2">.col-sm-3 ml-auto</span>
          </Col>
          <Col sm={3} className="ml-auto">
            <span className="border py-2 bg-light d-block mb-2">.col-sm-3 ml-auto</span>
          </Col>
        </Row>
        <Row>
          <Col sm={3}>
            <span className="border py-2 bg-light d-block mb-2">.col-sm-3</span>
          </Col>
          <Col sm={3} className="offset-sm-3">
            <span className="border py-2 bg-light d-block mb-2">.col-sm-3 offset-sm-3</span>
          </Col>
        </Row>
      </div>
    </ComponentContainerCard>;
};
const Grids = () => {
  return <>
      <PageMetaData title="Grids" />
      <Row className="justify-content-center">
        <Col>
          <GridTable />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <GridExample1 />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <GridExample2 />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <GridExample3 />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <GridExample4 />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <GridExample5 />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <GridExample6 />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <GridExample7 />
        </Col>
      </Row>
    </>;
};
export default Grids;